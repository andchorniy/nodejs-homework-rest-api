const contacts = require("../model/contacts.json");
const valid = require("../utils/validate/schemas/contacts");
const addContact = (req, res) => {
  const { error } = valid.addContactSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: "error",
      code: 400,
      message: error.message,
    });
  }
  const id = contacts[contacts.length - 1].id + 1;
  const newContact = { ...req.body, id };
  contacts.push(newContact);
  res.json({
    status: "success",
    code: 201,
    data: {
      result: newContact,
    },
  });
};

module.exports = addContact;
