const express = require("express");
const Company = require("./company.model");
const client = require("./databasepg");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/companies", async (req, res) => {
  const companyModel = new Company();

  const companies = await companyModel.getCompanies();
  console.log(companies);

  res.json(companies);
});

app.get("/companies/:companyId", async (req, res) => {
  const companyId = req.params.companyId;

  const companyModel = new Company();

  const company = await companyModel.getCompanyById(companyId);

  if (company) {
    res.json(company);
  } else {
    res.json({ message: `company Not Found, companyId ${companyId}` });
  }
});

app.post("/companies", (req, res) => {
  const company = req.body;

  companies.push(company);

  res.json(companies);
});

app.put("/companies/:companyId", async (req, res) => {
  const newCompany = req.body;
  const companyId = req.params.companyId;

  console.log("newCompany", newCompany);
  console.log("companyId", companyId);

  const companyModel = new Company();
  const response = await companyModel.updateCompany(companyId, newCompany);

  console.log("response", response);

  if (response) {
    return res.json(response);
  } else {
    return res.json({ message: `company not found, companyId ${companyId}` });
  }
});

client
  .connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listen on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
