const { Router } = require('express');
const endpoint = Router();
const { getContact, createContact } = require('../controller/contact-controller');

endpoint.get('/contact', getContact)
endpoint.post('/contact', createContact)

module.exports = endpoint;
