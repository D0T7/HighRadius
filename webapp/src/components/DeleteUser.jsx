import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    background:'radial-gradient(closest-side at 50% 50%, #58687e 0%, #39495e 100%) 0% 0%',
    boxShadow: 24,
    p: 4,
};

export default function DeleteUser({ onclick, deleteUser, validateRemove }) {
    return (
        <div>
            <Modal
                open={deleteUser}
                onClose={() => onclick("deleteUser", !deleteUser)}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Delete Records ?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to delete these record[s] ?
                    </Typography>
                    <Button variant="outlined" style={styles.button_Width} onClick={()=>validateRemove()}>Delete</Button>
                    <Button variant="outlined" style={styles.button_Width} onClick={() => onclick("deleteUser", !deleteUser)}>Cancel</Button>
                </Box>
            </Modal>
        </div>
    );
}

const styles = {
    button_Width: {
        width: "45%",
        margin: "10px",
        borderLeft: "0.5px solid  #0f65f0",
        backgroundColor: "#0f65f0",
        color: "white",
        borderradius: "7px",
    }
}