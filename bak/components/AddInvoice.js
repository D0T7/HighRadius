import { TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'

const initialValues = {
    businessCode: '',
    customerName: '',
    dueInDate: '',
    businessYear: '',
    documentId: '',
    postingDate: '',
    documentCreateDate: '',
    dueInDate: '',
    invoiceCurrency: '',
    documentType: '',
    postingId: '',
    totalOpenAmount: '',
    baselineCreateDate: '',
    custPaymentTerms: '',
    invoiceId: '',
    businessName: '',
    nameCustomer: ''
}

const [invoice, setInvoice] = useState(initialValues)


export default function AddInvoice() {
    return (
        <>
            <form>
                <Grid item xs={5}>
                    <TextField
                        variant='outlined'
                        label='Business Code'
                        value={invoice.businessCode}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Customer Name'
                        value={invoice.customerName}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Due In Date'
                        value={invoice.dueInDate}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Business Year'
                        value={invoice.businessYear}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Document Id'
                        value={invoice.documentId}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Posting Date'
                        value={invoice.postingDate}
                    ></TextField>

                </Grid>

                <Grid item xs={5}>
                    <TextField
                        variant='outlined'
                        label='Document Create Date'
                        value={invoice.documentCreateDate}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Due In Date'
                        value={invoice.dueInDate}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Invoice Currency'
                        value={invoice.invoiceCurrency}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Document Type'
                        value={invoice.documentType}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Posting Id'
                        value={invoice.postingId}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Total Open Amount'
                        value={invoice.totalOpenAmount}
                    ></TextField>
                </Grid>

                <Grid item xs={5}>
                    <TextField
                        variant='outlined'
                        label='Baseline Create Date'
                        value={invoice.baselineCreateDate}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Cust Payment Terms'
                        value={invoice.custPaymentTerms}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Invoice Id'
                        value={invoice.invoiceId}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Business Name'
                        value={invoice.businessName}
                    ></TextField>

                    <TextField
                        variant='outlined'
                        label='Name Customer'
                        value={invoice.nameCustomer}
                    ></TextField>
                </Grid>
            </form>

        </>
    )
}
