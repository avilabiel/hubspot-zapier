class Contact {
  constructor({ id = null, name, email, phone, hubspotId = null }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.hubspotId = hubspotId;
  }
}

module.exports = Contact;
