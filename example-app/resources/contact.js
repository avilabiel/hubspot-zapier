// get a list of contacts
const performList = async (z, bundle) => {
  const response = await z.request({
    url: "https://jsonplaceholder.typicode.com/posts",
    params: {
      order_by: "id desc",
    },
  });
  return response.data;
};

// find a particular contact by name (or other search criteria)
const performSearch = async (z, bundle) => {
  const response = await z.request({
    url: "https://jsonplaceholder.typicode.com/posts",
    params: {
      name: bundle.inputData.name,
    },
  });
  return response.data;
};

// creates a new contact
const performCreate = async (z, bundle) => {
  const fullname = `${bundle.inputData.properties?.firstname} ${bundle.inputData.properties?.lastname}`;

  const response = await z.request({
    method: "POST",
    url: "https://hubspot-zapier.herokuapp.com/contact",
    body: {
      ...bundle.inputData.properties,
      fullname,
    },
  });

  return response.data;
};

// updates a new contact
const performUpdate = async (z, bundle) => {
  const response = await z.request({
    method: "PUT",
    url:
      "https://hubspot-zapier.herokuapp.com/contact/hubspotId/" +
      bundle.inputData.hubspotId,
    body: {
      name: bundle.inputData.contactId,
    },
  });
  return response.data;
};

module.exports = {
  key: "contact",
  noun: "Contact",

  list: {
    display: {
      label: "New Contact",
      description: "Lists the contacts.",
    },
    operation: {
      perform: performList,
      inputFields: [],
    },
  },

  search: {
    display: {
      label: "Find Contact",
      description: "Finds a contact give.",
    },
    operation: {
      inputFields: [{ key: "name", required: true }],
      perform: performSearch,
    },
  },

  create: {
    display: {
      label: "Create Contact",
      description: "Creates a new contact.",
    },
    operation: {
      inputFields: [{ key: "name", required: true }],
      perform: performCreate,
    },
  },

  update: {
    display: {
      label: "Update Contact",
      description: "Updates a contact.",
    },
    operation: {
      inputFields: [{ key: "hubspotId", required: true }],
      perform: performUpdate,
    },
  },

  // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
  // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
  // returned records, and have obvious placeholder values that we can show to any user.
  // In this resource, the sample is reused across all methods
  sample: {
    id: "451",
    properties: {
      createdate: "2021-05-03T11:52:12.704Z",
      email: "avilabiel9@gmail.com",
      firstname: "Gabriel",
      hs_object_id: "451",
      lastmodifieddate: "2021-05-03T15:45:05.119Z",
      lastname: "Ávila",
    },
    createdAt: "2021-05-03T11:52:12.704Z",
    updatedAt: "2021-05-03T15:45:05.119Z",
    archived: false,
  },

  // If fields are custom to each user (like spreadsheet columns), `outputFields` can create human labels
  // For a more complete example of using dynamic fields see
  // https://github.com/zapier/zapier-platform/tree/master/packages/cli#customdynamic-fields
  // Alternatively, a static field definition can be provided, to specify labels for the fields
  // In this resource, these output fields are reused across all resources
  outputFields: [
    { key: "id", label: "ID" },
    { key: "properties", label: "Properties" },
    { key: "createdAt", label: "Created At" },
    { key: "updatedAt", label: "Updated At" },
    { key: "archived", label: "Archived" },
  ],
};
