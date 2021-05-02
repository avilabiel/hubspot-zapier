class HubspotWebhooksController {
  static async create(req, res) {
    console.log("==================== WEBHOOKS");
    console.log({ body: req.body, headers: req.headers });

    return res.send({ success: true });
  }

  static async get(req, res) {
    console.log("==================== WEBHOOKS AUTH");
    console.log({ body: req.body, headers: req.headers, query: req.query });

    return res.send({ success: true });
  }
}

module.exports = HubspotWebhooksController;
