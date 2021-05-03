/* globals describe, it */

const zapier = require("zapier-platform-core");

const App = require("../../index");
const appTester = zapier.createAppTester(App);

describe("triggers", () => {
  describe("new contact trigger", () => {
    it("should load contacts from API", (done) => {
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
          expect(results.length).not.toBe(undefined);

          const firstContact = results[0];
          expect(firstContact).toMatchObject({
            id: 4,
            fullname: "Gabriel Ávila",
            email: "avilabiel9@gmail.com",
            phone: "+5511983772607",
            hubspotId: "451",
            createdAt: "2021-05-03T11:52:13.000Z",
            updatedAt: "2021-05-03T15:45:20.000Z",
          });

          done();
        })
        .catch(done);
    });
  });
});
