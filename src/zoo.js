/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { animals, employees, prices } = require('./data');

function animalsByIds(...ids) {
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const result = animals.find(({ name }) => name === animal).residents;
  return result ? result.every(({ age: animalAge }) => animalAge >= age) : false;
}

function employeeByName(employeeName) {
  return employees.find(({ firstName, lastName }) => (
    employeeName === firstName || employeeName === lastName
  )) || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id = 'id', firstName = 'firstName', lastName = 'lastName', managers = [], responsibleFor = []) {
  const newEmployee = createEmployee({ id, firstName, lastName }, { managers, responsibleFor });
  employees.push(newEmployee);
}

function animalCount(species) {
  const result = animals.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
  if (species === undefined) return result;
  return result[species];
}

function entryCalculator(entrants = {}) {
  return Object.keys(entrants).reduce((acc, cur) => acc + entrants[cur] * prices[cur], 0);
}

function getAnimalByName(animalName) {
  return animals.find(({ name }) => name === animalName);
}

function getAnimalResidentsName(animalName, sort, sex) {
  let residents = getAnimalByName(animalName).residents || [];
  if (sex) residents = residents.filter(resident => resident.sex === sex);
  const names = residents.map(resident => resident.name)
  if ( sort ) names.sort();
  return { [animalName]: names };
}

function animalMap(options = {}) {
  const { includeNames = false, sorted = false, sex } = options;
  
  let result = animals.reduce((acc, animal) => {
    if (!acc[animal.location]) acc[animal.location] = [];
    acc[animal.location].push(animal.name);
    return acc;
  }, {});

  if (includeNames) {
    result = Object.entries(result).reduce((acc, [key, animalNames]) => {
      acc[key] = animalNames.map(animal => getAnimalResidentsName(animal, sorted, sex));
      return acc;
    }, {})
  }

  return result;
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
