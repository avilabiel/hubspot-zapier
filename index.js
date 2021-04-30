const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

const {
  ContactController,
  HubspotWebhooksController,
} = require("./controllers");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/contact", ContactController.create);
app.put("/contact/:id", ContactController.update);
app.post("/hubspot/webhooks", HubspotWebhooksController.create);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
