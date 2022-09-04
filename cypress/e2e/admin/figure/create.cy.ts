describe("Admin figure list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/admin/figure/create");
  });

  it("Fill and submit form", () => {
    const figureId = "da805211-991f-4ed2-9e58-90aae48ea5e7";
    cy.intercept(`http://localhost:3000/api/figure`, {
      body: {
        id: figureId,
      },
      delay: 100,
    }).as("postFigure");

    const figureName = "Angela: Mysterious Journey of Time ver.";
    cy.get("[data-tcy=form-name]")
      .type(figureName)
      .should("have.value", figureName);

    const price = 2000;
    cy.get("[data-tcy=form-price-container]").within(() => {
      cy.get("input").type(String(price)).should("have.value", `R$2.000`);
    });

    const color = "#eb344f";
    cy.get("[data-tcy=form-color-container]").within(() => {
      cy.get("input").clear().type(color).should("have.value", color);
    });

    const desc = [
      'From the popular Chinese smartphone game "King of Glory..."',
      "The first figure in the series is of...",
    ] as const;
    cy.get("[data-tcy=form-description-container]").within(() => {
      cy.get(".ProseMirror")
        .type(desc[0])
        .should("have.text", desc[0])
        .type("{enter}")
        .type(desc[1])
        .should("have.text", desc.join(""));
    });

    const details = [
      "Product Name",
      "Angela: Mysterious Journey of Time ver.",
    ] as const;
    cy.get("[data-tcy=form-details-container]").within(() => {
      cy.get(".ProseMirror")
        .type(details[0])
        .should("have.text", details[0])
        .type("{enter}")
        .type(details[1])
        .should("have.text", details.join(""));
    });
    cy.get("[data-tcy=form-submit-button]").click();
    cy.get("[data-tcy=form-submit-button]").should("have.text", "Loading...");

    cy.wait("@postFigure").then((interception) => {
      expect(interception.request.body["name"]).to.eq(figureName);
      expect(interception.request.body["price"]).to.eq(price);
      expect(interception.request.body["description"]["html"]).to.eq(
        `<p>${desc[0]}</p><p>${desc[1]}</p>`
      );
      expect(interception.request.body["details"]["html"]).to.eq(
        `<p>${details[0]}</p><p>${details[1]}</p>`
      );

      cy.location("pathname").should("eq", `/admin/figure/${figureId}`);
    });
  });
});

export {};
