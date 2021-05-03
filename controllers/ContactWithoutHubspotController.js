const { Contact } = require("../entities");
const { Contact: ContactModel } = require("../models");

class ContactWithoutHubspotController {
  static async create(req, res) {
    const contact = new Contact(req.body);

    try {
      const persistedContact = await ContactModel.create(contact);

      return res.send({
        contact: persistedContact,
      });
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .send({ success: false, message: "Internal Server Error" });
    }
  }

  static async update(req, res) {
    const { id: contactId } = req.params;

    try {
      const persistedContact = await ContactModel.findOne({
        where: { id: contactId },
      });

      for (let key in req.body) {
        if (!persistedContact[key]) {
          continue;
        }

        persistedContact[key] = req.body[key];
      }

      await persistedContact.save();

      return res.send({
        contact: persistedContact,
      });
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .send({ success: false, message: "Internal Server Error" });
    }
  }
}

module.exports = ContactWithoutHubspotController;
