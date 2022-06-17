const client = require("./databasepg");

class Company {
  async getCompanyById(companyId) {
    // https://node-postgres.com/features/queries
    try {
      const query = `SELECT * FROM company where id = $1`;
      const values = [companyId];

      const response = await client.query(query, values);

      return response.rows[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getCompanies() {
    try {
      const response = await client.query("SELECT * FROM company;");

      const companies = [];

      for (let row of response.rows) {
        companies.push(row);
      }

      console.log(companies);
      return companies;
    } catch (error) {
      console.log(error);
    }
  }

  async updateCompany(companyId, newCompany) {
    const { name, age, address, salary, join_date } = newCompany;

    try {
      const query = `UPDATE
                        COMPANY
                    SET
                        name = $1,
                        age = $2,
                        address = $3,
                        SALARY = $4,
                        join_date = $5
                    WHERE
                        ID = $6;
                    `;
      const values = [name, age, address, salary, join_date, companyId];
      console.log("values", values);

      await client.query(query, values);

      return { id: companyId, ...newCompany };
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Company;
