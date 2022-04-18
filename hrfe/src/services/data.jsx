import axios from 'axios';
export const keys = [{
    field: 'businessCode',
    headerName: 'Business Code',
    sortable: true,
    width: 150,
    editable: true,
  },
  {
    field: 'custNumber',
    headerName: 'Customer Number',
    sortable: true,
    width: 150,
    editable: true,
  },
  {
    field: 'clearDate',
    headerName: 'Clear Date',
    sortable: true,
    width: 160,
    editable: true,
  },
  {
    field: 'businessYear',
    headerName: 'Business Year',
    sortable: true,
    width: 160,
    editable: true,
  },
  {
    field: 'docId',
    headerName: 'Document Id',
    sortable: true,
    width: 160,
    editable: true,
  },
  {
    field: 'postingDate',
    headerName: 'Posting Date',
    sortable: true,
    width: 160,
    editable: true,
  },
  {
    field: 'documentCreateDate',
    headerName: 'Document Create Date',
    sortable: true,
    width: 160,
    editable: true,
  },
  {
    field: 'dueInDate',
    headerName: 'Due Date',
    sortable: true,
    width: 160,
    editable: true,
  },
  {
    field: 'invoiceCurrency',
    headerName: 'Invoice Currency',
    sortable: true,
    width: 160,
    editable: true,
  },
  {
    field: 'documentType',
    headerName: 'Document Type',
    sortable: true,
    width: 160,
    editable: true,
  },
  {
    field: 'postingId',
    headerName: 'Posting ID',
    sortable: true,
    width: 160,
    editable: true,
  },
  {
    field: 'totalOpenAmount',
    headerName: 'Total Open Amount',
    sortable: true,
    width: 160,
    editable: true,
  },
  {
    field: 'baselineCreateDate',
    headerName: 'Baseline Create Date',
    sortable: true,
    width: 160,
    editable: true,
  },
  {
    field: 'custPaymentTerms',
    headerName: 'Customer Payment Terms',
    sortable: true,
    width: 160,
    editable: true,
  },
  {
    field: 'invoiceId',
    headerName: 'Invoice ID',
    sortable: true,
    width: 160,
    editable: true,
  }];
export const getTableData = async () => {
    let response =  await axios.post(`http://localhost:8080/HR/FetchData`, null, { params: { page: 1 } });
    // console.log(response.data[0]['slNo']);
    return response.data;
}


