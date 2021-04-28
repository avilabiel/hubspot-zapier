class Contact {
  constructor({ id = null, fullname, email, phone, hubspotId = null }) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.phone = phone;
    this.hubspotId = hubspotId;
  }
}

module.exports = Contact;
