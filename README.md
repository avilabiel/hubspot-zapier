# hubspot-zapier

This repository has a simple objective to test the Zapier CLI and figure out how much time Zapier CLI can save in our lives. To make this discovery, we will have an usual situation in our lives: Keep 2 systems synced.

In our simulation, we have an API with a database and Hubspot. Both systems have the Contact entity, with their differences (e.g.: API uses fullname; Hubspot uses firstname + lastname).

So, the main goal here is to create:

- A solution not using Zapier CLI
  - Measure this solution
    - How much time did it take?
    - How complex was it?
- A solution using Zapier CLI
  - Measure this solution
    - How much time did it take?
    - How complex was it?

## URL

You can find this API working here: https://hubspot-zapier.herokuapp.com/.

## Insomnia

If you want to test it locally, enjoy it! Feel free to download the [Insomnia.json](https://github.com/avilabiel/hubspot-zapier/blob/main/Insomnia.json) and import into your Insomnia.

## Stack

### Not using Zapier CLI

This is the following technologies that we are using:

- Express
- Axios
- Sequelize
- MySQL
- Heroku

### Using Zapier CLI

WIP

## Notes

1. I wanted to keep the simulation very similar to the real environment, so I've chosen a system that I've never integrated: Hubspot;
2. We will not be concerned about the deletion action on API and Hubspot. We will concerned only about creation and update.
3. You should create your Hubspot Accounts and Apps since you don't have my passwords (I logged in with Google Account :S)
4. The test account at Hubspot has 90 days of experience. So, if this repo doesn't work, feel free to:
   - Create a new test account
   - Create a new developer account
   - Create a new app with webhooks
   - Create the webhooks for Contacts entities
   - Activate the webhooks
   - Authorize this app into your new account (OAuth2)

## Conclusion

### Not using Zapier CLI

### Using Zapier CLI
