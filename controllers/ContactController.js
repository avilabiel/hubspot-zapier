const { Contact } = require("../entities");
const { Contact: ContactModel } = require("../models");
const { Hubspot } = require("../utils");

class ContactController {
  static async create(req, res) {
    const contact = new Contact(req.body);

    try {
      const hubspotContact = await Hubspot.createContact(
        Hubspot.buildFromContact(contact)
      );
      contact.hubspotId = hubspotContact.id;
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
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .send({ success: false, message: "Internal Server Error" });
    }
  }

  static async get(req, res) {
    const { id } = req.params;

    const contact = await ContactModel.findOne({ where: { id } });

    return res.send({ success: true, contact });
  }

  static async getAll(req, res) {
    const contacts = await ContactModel.findAll();

    return res.send({ success: true, contacts });
  }
}

module.exports = ContactController;
