import React, { Component } from 'react';
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
    width: 500,
    backgroundColor: 'background.paper',
    background:'radial-gradient(closest-side at 50% 50%, #58687e 0%, #39495e 100%) 0% 0%',
    boxShadow: 24,
    p: 4,
};

class AdvanceSearch extends Component {
    render() {
        const { onclick,
            isAdvanceSearch,
            searchDocumentID,
            searchInvoiceID,
            searchCustomerNumber,
            searchBusinessYear,
            filterCriteria,
            onchange } = this.props;
        return (
            <div>
                <Modal
                    open={isAdvanceSearch}
                    onClose={() => onclick("isAdvanceSearch", !isAdvanceSearch)}
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginLeft: "10px" }}>
                            Advanced Search
                        </Typography>
                        <div style={styles.div}>
                            <TextField
                                id="outlined-basic"
                                label="Document Id"
                                variant="outlined"
                                style={styles.text_input}
                                value={searchDocumentID}
                                onChange={(e) => onchange("searchDocumentID", e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Invoice ID"
                                variant="outlined"
                                style={styles.text_input}
                                value={searchInvoiceID}
                                onChange={(e) => onchange("searchInvoiceID", e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Customer Number"
                                variant="outlined"
                                style={styles.text_input}
                                value={searchCustomerNumber}
                                onChange={(e) => onchange("searchCustomerNumber", e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Business Year"
                                variant="outlined"
                                style={styles.text_input}
                                value={searchBusinessYear}
                                onChange={(e) => onchange("searchBusinessYear", e.target.value)}
                            />

                        </div>
                        <Button variant="outlined" style={styles.button_Width} onClick={() => filterCriteria()}>Search</Button>
                        <Button variant="outlined" style={styles.button_Width} onClick={() => onclick("isAdvanceSearch", !isAdvanceSearch)}>Cancel</Button>
                    </Box>
                </Modal>
            </div>
        );
    }
}

const styles = {
    div: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    date_picker: {
        width: "216px",
        height: "50px",
        margin: "12px 8px",
        border: "1px solid #000"
    },
    text_input: {
        margin: "10px 10px"
    },
    button_Width: {
        width: "45%",
        position: "relative",
        margin: "7px",
        borderLeft: "0.5px solid  #0f65f0",
        backgroundColor: "#0f65f0",
        color: "white",
        borderradius: "7px",
    }
}

export default AdvanceSearch;