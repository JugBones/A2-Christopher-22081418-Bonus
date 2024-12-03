import { useState } from "react";

function Company(props) {
    const { company, companies, setCompanies, contact } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [companyName, setCompanyName] = useState(company.company_name);
    const [companyAddress, setCompanyAddress] = useState(company.company_address);

    async function deleteCompany() {
        const response = await fetch(
            'http://localhost/api/contacts/' + contact.id + '/companies/' + company.id,
            {
                method: "DELETE",
            }
        );

        const newCompanies = companies.filter((c) => c.id !== company.id);
        setCompanies(newCompanies);
    }

    async function updateCompany(e) {
        e.preventDefault();

        const response = await fetch(
            'http://localhost/api/contacts/' + contact.id + '/companies/' + company.id,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    company_name: companyName,
                    company_address: companyAddress,
                }),
            }
        );

        const updatedCompany = await response.json();

        const updatedCompanies = companies.map((c) =>
            c.id === company.id ? updatedCompany : c
        );
        setCompanies(updatedCompanies);
        setIsEditing(false);
    }

    return (
        <tr>
            {isEditing ? (
                <>
                    <td>
                        <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={companyAddress}
                            onChange={(e) => setCompanyAddress(e.target.value)}
                        />
                    </td>
                    <td>
                        <button className="button green" onClick={updateCompany}>
                            Save
                        </button>
                        <button className="button red" onClick={() => setIsEditing(false)}>
                            Cancel
                        </button>
                    </td>
                </>
            ) : (
                <>
                    <td>{company.company_name}</td>
                    <td>{company.company_address}</td>
                    <td>
                        <button className="button blue" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button className="button red" onClick={deleteCompany}>
                            Delete
                        </button>
                    </td>
                </>
            )}
        </tr>
    );
}

export default Company;
