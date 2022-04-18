import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'background.paper',
    background:'radial-gradient(closest-side at 50% 50%, #58687e 0%, #39495e 100%) 0% 0%',
    width: 1000,
    boxShadow: 24,
    p: 4,
};

export default function AddUser({
    onclick, addUser, onchange, businessCode, custNumber, clearDate, businessYear, docId, postingDate, documentCreateDate,
    dueInDate, invoiceCurrency, documentType, postingId, totalOpenAmount, baselineCreateDate, validateUser,
    custPaymentTerms, invoiceId }) {
    return (
        <div>
            <Modal
                open={addUser}
                onClose={() => onclick("addUser", !addUser)}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginLeft: "10px" }}>
                        Add
                    </Typography>
                    <div style={styles.div}>
                        <TextField
                            label="Business Code"
                            variant="outlined"
                            style={styles.text_input}
                            value={businessCode}
                            onChange={(e) => onchange("businessCode", e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Customer Number"
                            variant="outlined"
                            style={styles.text_input}
                            value={custNumber}
                            onChange={(e) => onchange("custNumber", e.target.value)}
                        />
                        <input
                            type="date"
                            label="Clear Date"
                            style={styles.date_picker}
                            value={clearDate}
                            onChange={(e) => onchange("clearDate", e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Business Year"
                            variant="outlined"
                            style={styles.text_input}
                            value={businessYear}
                            onChange={(e) => onchange("businessYear", e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Document Id"
                            variant="outlined"
                            style={styles.text_input}
                            value={docId}
                            onChange={(e) => onchange("docId", e.target.value)}
                        />
                        <input
                            type="date"
                            label="Posting Date"
                            value={postingDate}
                            onChange={(e) => onchange("postingDate", e.target.value)}
                            style={styles.date_picker}
                        />
                        <input
                            type="date"
                            label="Document Create Date"
                            value={documentCreateDate}
                            onChange={(e) => onchange("documentCreateDate", e.target.value)}
                            style={styles.date_picker}
                        />
                        <input
                            type="date"
                            label="Due Date"
                            value={dueInDate}
                            onChange={(e) => onchange("dueInDate", e.target.value)}
                            style={styles.date_picker}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Invoice Currency"
                            variant="outlined"
                            style={styles.text_input}
                            value={invoiceCurrency}
                            onChange={(e) => onchange("invoiceCurrency", e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Document Type"
                            variant="outlined"
                            style={styles.text_input}
                            value={documentType}
                            onChange={(e) => onchange("documentType", e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Posting ID"
                            variant="outlined"
                            style={styles.text_input}
                            value={postingId}
                            onChange={(e) => onchange("postingId", e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Total Open Amount"
                            variant="outlined"
                            style={styles.text_input}
                            value={totalOpenAmount}
                            onChange={(e) => onchange("totalOpenAmount", e.target.value)}
                        />
                        <input
                            type="date"
                            label="Baseline Create Date"
                            style={styles.date_picker}
                            value={baselineCreateDate}
                            onChange={(e) => onchange("baselineCreateDate", e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Customer Payment Terms"
                            variant="outlined"
                            style={styles.text_input}
                            value={custPaymentTerms}
                            onChange={(e) => onchange("custPaymentTerms", e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Invoice ID"
                            variant="outlined"
                            style={styles.text_input}
                            value={invoiceId}
                            onChange={(e) => onchange("invoiceId", e.target.value)}
                        />
                    </div>
                    <Button variant="outlined" style={styles.button_Width} onClick={() => validateUser()}>Add</Button>
                    <Button variant="outlined" style={styles.button_Width} onClick={() => onclick("addUser", !addUser)}>Cancel</Button>
                </Box>
            </Modal>
        </div>
    );
}

const styles = {

    div: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    date_picker: {
        width: "223px",
        height: "50px",
        margin: "12px 8px",
        border: "1px solid rgba(0,0,0,.3)",
        borderRadius: "4px"
    },
    text_input: {
        margin: "10px 10px",
        backgroundColor: "white",
        borderRadius: "4px",
        height: "55px",
    },
    button_Width: {
        width: "49%",
        margin: "5px",
        borderLeft: "0.5px solid  #0f65f0",
        backgroundColor: "#0f65f0",
        color: "white",
        borderradius: "7px",

    }
}
