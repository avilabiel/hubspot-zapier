class HubspotWebhooksController {
  static async create(req, res) {
    console.log("==================== WEBHOOKS");
    console.log({ body: req.body, headers: req.headers });

    return res.send({ success: true });
  }
}

module.exports = HubspotWebhooksController;
