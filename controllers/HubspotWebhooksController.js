// To auth the app:
// https://app.hubspot.com/oauth/authorize?client_id=a62dc331-e7ae-4f66-b80d-33a59ed8ac3a&scope=contacts%20automation&redirect_uri=https://hubspot-zapier.herokuapp.com/hubspot/webhooks

const Contact = require("../entities/Contact");
const HubspotContact = require("../entities/HubspotContact");
const Hubspot = require("../utils/Hubspot");
const { Contact: ContactModel } = require("../models");

class HubspotWebhooksController {
  // We are not concerned about delete action
  static async create(req, res) {
    const events = req.body;

    events.forEach(async (event) => {
      const { objectId, subscriptionType } = event;

      if (subscriptionType.indexOf("contact") === -1) {
        return;
      }

      const result = await Hubspot.getContactById(objectId);
      const hubspotContact = new HubspotContact({
        id: result.id,
        ...result.properties,
      });
      const contact = Contact.buildFromHubspotContact(hubspotContact);

      const persistedContact = await ContactModel.findOne({
        where: { hubspotId: hubspotContact.id },
      });

      for (let key in contact) {
        if (key === "id" || key === "hubspotId") {
          continue;
        }

        persistedContact[key] = contact[key];
      }

      await persistedContact.save();
    });

    return res.send({ success: true });
  }

  static async get(req, res) {
    console.log("==================== WEBHOOKS AUTH");
    console.log({ body: req.body, headers: req.headers, query: req.query });

    return res.send({ success: true });
  }
}

module.exports = HubspotWebhooksController;
