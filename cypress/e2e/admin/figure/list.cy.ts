describe("Admin figure list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/admin/figure");
  });

  it("Load empty list of figure", () => {
    const figureList = [] as const;
    cy.intercept("GET", "/api/figure?name=", {
      body: figureList,
    }).as("getFigureList");
    cy.wait("@getFigureList");

    cy.get("[data-tcy=figure-card]").should("have.length", figureList.length);
  });

  it("Load list of figure", () => {
    const figureList = [
      {
        id: "cl79ckmyw000694u7ag006ozb",
        name: "Hatsune Miku Because You're Here Ver. L",
        images: [],
        color: "#13a4b6",
      },
      {
        id: "cl79cruul0002c8u7u9kj2rhx",
        name: "A-Z:[C]",
        images: [],
        color: "#cd877e",
      },
    ];
    cy.intercept("GET", "/api/figure?name=", {
      body: figureList,
    }).as("getFigureList");
    cy.wait("@getFigureList");

    cy.get("[data-tcy=figure-card]").should("have.length", figureList.length);
    figureList.forEach((figure) => {
      cy.get(`[data-tcy=figure-card][data-tcy-id=${figure.id}]`)
        .should("exist")
        .should("have.text", figure.name);
    });
  });

  it("Search list of figure", () => {
    const figureList = [
      {
        id: "cl79ckmyw000694u7ag006ozb",
        name: "Hatsune Miku Because You're Here Ver. L",
        images: [],
        color: "#13a4b6",
      },
      {
        id: "cl79cruul0002c8u7u9kj2rhx",
        name: "A-Z:[C]",
        images: [],
        color: "#cd877e",
      },
    ] as const;
    cy.intercept("GET", "/api/figure?name=", {
      body: figureList,
    })
      .as("getFigureList")
      .wait("@getFigureList");
    cy.get("[data-tcy=figure-card]").should("have.length", figureList.length);

    cy.get("[data-tcy=search]").type("Miku").should("have.value", "Miku");
    cy.intercept("GET", `/api/figure?name=Miku`, {
      body: [figureList[0]],
    })
      .as("getFigureListName")
      .wait("@getFigureListName");
    cy.get("[data-tcy=figure-card]").should("have.length", 1);

    cy.get("[data-tcy=search]").clear();
    cy.wait("@getFigureList");
    cy.get("[data-tcy=figure-card]").should("have.length", figureList.length);
  });
});

export {};
