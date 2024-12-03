import Customer from './Customer.js';
import NewCustomer from './NewCustomer.js';

function CustomerList(props) {
    const { booth, custs, setCusts } = props;

    return (
        <div className="customer-list">
            <NewCustomer custs={custs} setCusts={setCusts} booth={booth} />

            <table onClick={(e) => e.stopPropagation()}>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {custs.map((customer) => (
                        <Customer
                            key={customer.id}
                            customer={customer}
                            custs={custs}
                            setCusts={setCusts}
                            booth={booth}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerList;
