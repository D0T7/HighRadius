import React, { useEffect } from 'react';
import { getTableData, keys } from '../services/data';
export default function LandingPage() {
    const [tableData, setTableData] = React.useState([]);
    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const invoices = await getTableData()
                setTableData(invoices);
            } catch (err) {
                console.log(err);
            }
        }
        fetchInvoices()
    }, [])

    console.log(tableData[0]);

    return (
        <>

            <table className='dataTable'>
                <thead>
                    <tr>
                        {keys.map(column => <th key={column.field} width={column.width}>{column.headerName}</th>)}
                    </tr>
                </thead>
                {/* <tbody>
                    {tableData.map(invoice => <tr key={invoice.slNo}>{invoice.map(data => <td key={data}>{data}</td>)}</tr>)}
                </tbody> */}
            </table>
        </>
    )
}
