class Contact {
  constructor({ id = null, fullname, email, phone, hubspotId = null }) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.phone = phone;
    this.hubspotId = hubspotId;
  }

  static buildFromHubspotContact(hubspotContact) {
    hubspotContact.fullname = `${hubspotContact.firstname} ${hubspotContact.lastname}`;
    hubspotContact.hubspotId = hubspotContact.objectId;

    return new Contact({ ...hubspotContact, id: null });
  }
}

module.exports = Contact;
