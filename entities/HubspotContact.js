class HubspotContact {
  constructor({ firstname, lastname, email, phone, website, company }) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }

  static buildFromContact(contact) {
    const names = contact.fullname.split(" ");

    contact.firstname = names[0];
    contact.lastname = names[names.length - 1];

    return new HubspotContact(contact);
  }
}

module.exports = HubspotContact;
