import React, { useState, useEffect } from "react";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    company_name: "",
    company_address: "",
    contact_id: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch companies on load
  useEffect(() => {
    fetch("http://localhost/api/companies")
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error("Error fetching companies:", error));
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add a new company
  const addCompany = () => {
    fetch("http://localhost/api/companies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newCompany) => {
        setCompanies([...companies, newCompany]);
        setFormData({ company_name: "", company_address: "", contact_id: "" });
      })
      .catch((error) => console.error("Error adding company:", error));
  };

  // Update an existing company
  const updateCompany = () => {
    fetch(`http://localhost/api/companies/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        setCompanies(
          companies.map((company) =>
            company.company_id === editingId
              ? { ...company, ...formData }
              : company
          )
        );
        setEditingId(null);
        setFormData({ company_name: "", company_address: "", contact_id: "" });
      })
      .catch((error) => console.error("Error updating company:", error));
  };

  // Delete a company
  const deleteCompany = (id) => {
    fetch(`http://localhost/api/companies/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCompanies(companies.filter((company) => company.company_id !== id));
      })
      .catch((error) => console.error("Error deleting company:", error));
  };

  // Start editing a company
  const editCompany = (company) => {
    setEditingId(company.company_id);
    setFormData({
      company_name: company.company_name,
      company_address: company.company_address,
      contact_id: company.contact_id,
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editingId ? updateCompany() : addCompany();
        }}
      >
        <input
          type="text"
          name="company_name"
          placeholder="Company Name"
          value={formData.company_name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="company_address"
          placeholder="Company Address"
          value={formData.company_address}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="contact_id"
          placeholder="Contact ID"
          value={formData.contact_id}
          onChange={handleInputChange}
        />
        <button type="submit">{editingId ? "Update" : "Add"}</button>
        {editingId && <button onClick={() => setEditingId(null)}>Cancel</button>}
      </form>
      <ul>
        {companies.map((company) => (
          <li key={company.company_id}>
            <strong>{company.company_name}</strong> - {company.company_address} (Contact ID: {company.contact_id})
            <button onClick={() => editCompany(company)}>Edit</button>
            <button onClick={() => deleteCompany(company.company_id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Companies;
