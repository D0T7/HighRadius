import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'slNo',
    headerName: 'Serial Number',
    width: 120,
  },
  {
    field: 'businessCode',
    headerName: 'Business Code',
    width: 130,
  },
  {
    field: 'custNumber',
    headerName: 'Customer Number',
    width: 130,
  },
  {
    field: 'clearDate',
    headerName: 'Clear Date',
    width: 160,
  },
  {
    field: 'businessYear',
    headerName: 'Business Year',
    width: 160,
  },
  {
    field: 'docId',
    headerName: 'Document Id',
    width: 160,
  },
  {
    field: 'postingDate',
    headerName: 'Posting Date',
    width: 160,
  },
  {
    field: 'documentCreateDate',
    headerName: 'Document Create Date',
    width: 160,
  },
  {
    field: 'dueInDate',
    headerName: 'Due Date',
    width: 160,
  },
  {
    field: 'invoiceCurrency',
    headerName: 'Invoice Currency',
    width: 160,
  },
  {
    field: 'documentType',
    headerName: 'Document Type',
    width: 160,
  },
  {
    field: 'postingId',
    headerName: 'Posting ID',
    width: 160,
  },
  {
    field: 'totalOpenAmount',
    headerName: 'Total Open Amount',
    width: 160,
  },
  {
    field: 'baselineCreateDate',
    headerName: 'Baseline Create Date',
    width: 160,
  },
  {
    field: 'custPaymentTerms',
    headerName: 'Customer Payment Terms',
    width: 160,
  },
  {
    field: 'invoiceId',
    headerName: 'Invoice ID',
    width: 160,
  }
];

export default function DataGridDemo({ users, handleSelect }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        getRowId={row => row.slNo}
        rows={users}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        onSelectionModelChange={(newSelection) => {
          handleSelect(newSelection);
        }
        }
      />
    </div>
  );
}