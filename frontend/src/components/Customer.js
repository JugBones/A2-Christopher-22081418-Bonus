import { useState } from "react";

function Customer(props) {
    const { customer, custs, setCusts, booth } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [customerName, setCustomerName] = useState(customer.customer_name);
    const [customerAddress, setCustomerAddress] = useState(customer.customer_address);

    async function deleteCustomer() {
        const response = await fetch(
            'http://localhost/api/booths/' + booth.id + '/custs/' + customer.id,
            {
                method: "DELETE",
            }
        );

        const newCusts = custs.filter((c) => c.id !== customer.id);
        setCusts(newCusts);
    }

    async function updateCustomer(e) {
        e.preventDefault();

        const response = await fetch(
            'http://localhost/api/booths/' + booth.id + '/custs/' + customer.id,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    customer_name: customerName,
                    customer_address: customerAddress,
                }),
            }
        );

        const updatedCustomer = await response.json();

        const updatedCusts = custs.map((c) =>
            c.id === customer.id ? updatedCustomer : c
        );
        setCusts(updatedCusts);
        setIsEditing(false);
    }

    return (
        <tr>
            {isEditing ? (
                <>
                    <td>
                        <input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                        />
                    </td>
                    <td>
                        <button className="button green" onClick={updateCustomer}>
                            Save
                        </button>
                        <button className="button red" onClick={() => setIsEditing(false)}>
                            Cancel
                        </button>
                    </td>
                </>
            ) : (
                <>
                    <td>{customer.customer_name}</td>
                    <td>{customer.customer_address}</td>
                    <td>
                        <button className="button blue" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button className="button red" onClick={deleteCustomer}>
                            Delete
                        </button>
                    </td>
                </>
            )}
        </tr>
    );
}

export default Customer;
