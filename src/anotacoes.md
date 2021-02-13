## 1 - animalsByIds

```javascript
// Fazemos o destructuring de animals
const { animals } = require('./data');

// Resolve o primeiro requisito
if (ids === undefined) return [];

// Resolve o segundo requisito
if (ids === undefined) return [];
return [animals.find(animal => animal.id === ids)];

// Resolve o terceiro:
// Mudamos o parâmetro para usar o rest
function animalsByIds(...ids) {}

// Opção 1
return ids.map(id => animals.find(({ id: animalId }) => id === animalId ));

// Opção 2
return animals.filter(animal => ids.some(id => id === animal.id));

// Opção 3
return animals.filter(animal => ids.includes(animal.id));
```

## 2 - animalsOlderThan

```javascript
const result = animals.find(({ name }) => name === animal).residents;
return result ? result.every(({ age: animalAge }) => animalAge >= age) : false;
```

* Explicar operador ternário


## 3 - employeeByName


```javascript

// Desestruturar employees
const { animals, employees } = require('./data');

// Resolve primeiro requisito
if (employeeName === undefined) return {};

// Resolve segundo requisito
if (employeeName === undefined) return {};
return employees.find(({ firstName }) => employeeName === firstName);

// Resolve segundo sem destructuring
if (employeeName === undefined) return {};
return employees.find(employee => employeeName === employee.firstName);

// Resolve terceiro requisito
if (employeeName === undefined) return {};
return employees.find(({ firstName, lastName }) => (
  employeeName === firstName || employeeName === lastName
));

// Resolve terceiro requisito sem destructuring
if (employeeName === undefined) return {};
return employees.find(employee => (
  employeeName === employee.firstName || employeeName === employee.lastName
));

// Requisito 3, outra opção
return employees.find(({ firstName, lastName }) => (
  employeeName === firstName || employeeName === lastName
)) || {};

```


## 4 - createEmployee


```javascript

// Solução mais explicita
return {
  id: personalInfo.id,
  firstName: personalInfo.firstName,
  lastName: personalInfo.lastName,
  managers: associatedWith.managers,
  responsibleFor: associatedWith.responsibleFor,
}

// Solução com desestruturação e shorthand object
function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }
}

// Solução usando spread
return { ...personalInfo, ...associatedWith };

```


##  5 - isManager


```javascript

// Solução sem desestruturação
return employees.some(employee => employee.managers.includes(id));

// Solução com desestruturação
return employees.some(({ managers }) => managers.includes(id));

```

## 6 - addEmployee


```javascript

// Comentar sobre o uso de default params (id, firstname e lastname não são necessários)
function addEmployee(id = 'id', firstName = 'firstName', lastName = 'lastName', managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

// Reutilizando a função createEmployee implementada anteriormente
const newEmployee = createEmployee({ id, firstName, lastName }, { managers, responsibleFor });
employees.push(newEmployee);

```