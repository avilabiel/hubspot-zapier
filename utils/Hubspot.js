const axios = require("axios");
const HubspotContact = require("../entities/HubspotContact");

class Hubspot {
  constructor() {
    this.apiKey =
      process.env.HUBSPOT_API_KEY || "15b333a3-8180-44cf-a43b-6e6eb99f99a2";

    this.api = axios.create({
      baseURL: "https://api.hubapi.com",
    });
  }

  buildFromContact(contact) {
    return HubspotContact.buildFromContact(contact);
  }

  async createContact(hubspotContact) {
    const result = await this.api.post(
      `/crm/v3/objects/contacts?hapikey=${this.apiKey}`,
      { properties: hubspotContact }
    );

    return result.data;
  }

  updateContact() {}
}

module.exports = new Hubspot();
