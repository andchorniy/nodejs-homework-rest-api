const contacts = require("../model/contacts.json");
const valid = require("../utils/validate/schemas/contacts");
const updateContact = (req, res) => {
  const { contactId } = req.params;
  const { error } = valid.updateContactSchema.validate(req.body);
  const index = contacts.findIndex((item) => item.id === +contactId);
  if (error) {
    res.status(400).json({
      status: "error",
      code: 400,
      message: error.message,
    });
  }
  if (!req.body.name && !req.body.email && !req.body.phone) {
    res.json({
      status: "error",
      code: 400,
      message: `missing fields`,
    });
    return;
  }
  if (index === -1) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
    return;
  }
  contacts[index] = { ...contacts[index], ...req.body };
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts[index],
    },
  });
};

module.exports = updateContact;
