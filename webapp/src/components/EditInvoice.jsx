import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    backgroundColor: 'background.paper',
    background:'radial-gradient(closest-side at 50% 50%, #58687e 0%, #39495e 100%) 0% 0%',
    boxShadow: 24,
    p: 4,
};

export default function EditInvoice({ onclick, editUser, invoiceCurrency, custPaymentTerms, validateUpdate, onchange }) {
    return (
        <div>
            <Modal
                open={editUser}
                onClose={() => onclick("editUser", !editUser)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit
                    </Typography>
                    <TextField
                            id="outlined-basic"
                            label="Invoice Currency"
                            variant="outlined"
                            style={styles.text_input}
                            value={invoiceCurrency}
                            onChange = {(e) => onchange("invoiceCurrency", e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Customer Payment Terms"
                            variant="outlined"
                            style={styles.text_input}
                            value={custPaymentTerms}
                            onChange = {(e) => onchange("custPaymentTerms", e.target.value)}
                        />
                    <Button variant="outlined" style={styles.button} onClick={()=>validateUpdate()}>Edit</Button>
                    <Button variant="outlined" style={styles.button} onClick={() => onclick("editUser", !editUser)}>Cancel</Button>
                </Box>
            </Modal>
        </div>
    );
}

const styles = {
    text_input: {
        margin: "10px 10px",
        backgroundColor:'white',
        borderRadius: '4px',
    },
    button: {
        width: "45%",
        margin: "10px",
        borderLeft: "0.5px solid  #0f65f0",
        backgroundColor: "#0f65f0",
        color: "white",
        borderradius: "7px",
    }
}