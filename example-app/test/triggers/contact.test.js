/* globals describe, it */

const zapier = require("zapier-platform-core");

const App = require("../../index");
const appTester = zapier.createAppTester(App);

describe("triggers", () => {
  describe("new contact trigger", () => {
    it("should load contact from fake hook", (done) => {
      const bundle = {
        inputData: {
          style: "mediterranean",
        },
        cleanedRequest: {
          id: 1,
          name: "name 1",
          directions: "directions 1",
        },
      };

      appTester(App.triggers.contact.operation.perform, bundle)
        .then((results) => {
          expect(results.length).toBe(1);

          const firstContact = results[0];
          expect(firstContact.name).toBe("name 1");
          expect(firstContact.directions).toBe("directions 1");

          done();
        })
        .catch(done);
    });
  });
});
