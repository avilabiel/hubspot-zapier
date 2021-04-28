const express = require("express");
const app = express();
const port = 3000;

const { ContactController } = require("./controllers");

app.post("/contact", ContactController.create);
app.put("/contact", ContactController.update);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
