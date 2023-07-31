const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000; // You can use any available port number


// functions named "createUser" and "createCompany" that return objects with the required properties.
const createUser = () => {
  return {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid(),
  };
};

const createCompany = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
};
// API routes that return new user, company, and both user and company objects

app.get('/api/users/new', (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  res.json({ user: newUser, company: newCompany });
});
