const listRecipes = (z, bundle) => {
  const promise = z.request("https://hubspot-zapier.herokuapp.com/contacts");
  return promise.then((response) => {
    z.console.log(response.json);

    return response.json.contacts;
  });
};

module.exports = {
  key: "contact",
  noun: "Contact",
  display: {
    label: "New Contact",
    description: "Trigger when a new contact is added.",
  },
  operation: {
    perform: listRecipes,
    sample: {
      id: 4,
      fullname: "Gabriel Ávila",
      email: "avilabiel9@gmail.com",
      phone: "+5511983772607",
      hubspotId: "451",
      createdAt: "2021-05-03T11:52:13.000Z",
      updatedAt: "2021-05-03T15:45:20.000Z",
    },
  },
};
