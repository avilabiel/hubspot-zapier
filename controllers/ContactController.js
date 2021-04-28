const { Contact } = require("../entities");
const { Contact: ContactModel } = require("../models");

class ContactController {
  static async create(req, res) {
    const contact = new Contact(req.body);

    // const hubspotContact = await Hubspot.createContact(contact);
    // contact.hubspotId = hubspotContact.id;
    const persistedContact = await ContactModel.create(contact);

    return res.send({
      contact: persistedContact,
    });
  }

  static async update(req, res) {
    return res.send({
      contact: {},
    });
  }
}

module.exports = ContactController;
