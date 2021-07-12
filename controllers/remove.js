const contacts = require("../model/contacts.json");
const removeContact = (req, res) => {
  const { contactId } = req.params;
  const index = contacts.findIndex((item) => item.id === +contactId);
  if (index === -1) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
    return;
  }
  contacts.splice(index, 1);
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
  });
};

module.exports = removeContact;
