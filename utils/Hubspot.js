const axios = require("axios");
const HubspotContact = require("../entities/HubspotContact");

class Hubspot {
  constructor() {
    this.apiKey =
      process.env.HUBSPOT_API_KEY || "15b333a3-8180-44cf-a43b-6e6eb99f99a2";
    this.appId = process.env.HUBSPOT_APP_ID || "283038";
    this.clientId =
      process.env.HUBSPOT_CLIENT_ID || "a62dc331-e7ae-4f66-b80d-33a59ed8ac3a";
    this.clientSecret =
      process.env.HUBSPOT_CLIENT_SECRET ||
      "3b0916b6-f270-4d83-a320-5e6e5e787b8a";

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

  async updateContact(hubspotContact) {
    const url = `/crm/v3/objects/contacts/${hubspotContact.id}?hapikey=${this.apiKey}`;
    delete hubspotContact.id;

    const result = await this.api.patch(url, { properties: hubspotContact });

    return result.data;
  }
}

module.exports = new Hubspot();
