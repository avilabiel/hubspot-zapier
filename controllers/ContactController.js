const { Contact } = require("../entities");
const { Contact: ContactModel } = require("../models");
const { Hubspot } = require("../utils");

class ContactController {
  static async create(req, res) {
    const contact = new Contact(req.body);

    const hubspotContact = await Hubspot.createContact(
      Hubspot.buildFromContact(contact)
    );
    contact.hubspotId = hubspotContact.id;
    const persistedContact = await ContactModel.create(contact);

    return res.send({
      contact: persistedContact,
    });
  }

  static async update(req, res) {
    const { id: contactId } = req.params;
    const persistedContact = await ContactModel.findOne({
      where: { id: contactId },
    });
    const contact = new Contact(persistedContact);

    await Hubspot.updateContact(Hubspot.buildFromContact(contact));
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
  }
}

module.exports = ContactController;
