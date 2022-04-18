import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Buttons({
  onclick, addUser, deleteUser, editUser, onchange, searchTerm, refreshPage, isAdvanceSearch }) {
  const [alignment, setAlignment] = useState('');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (newAlignment === "advancedSearch")
      onclick("isAdvanceSearch", !isAdvanceSearch);
  };

  return (
    <div style={styles.divStyle}>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="advancedSearch" style={styles.button} className="advBttn">Advanced Search</ToggleButton>
        <Button variant="outlined" style={styles.button} onClick={() => refreshPage()}><b>&#x21bb;</b></Button>
      </ToggleButtonGroup>
      <TextField
        id="outlined-size-small"
        style={styles.search}
        label="Search Customer Id"
        variant="outlined"
        value={searchTerm}
        size="small"
        onChange={(e) => onchange("searchTerm", e.target.value)}
      />
      <Button variant="outlined" style={styles.button} onClick={() => onclick("addUser", !addUser)}>Add</Button>
      <Button variant="text" style={styles.button} onClick={() => onclick("editUser", !editUser)}>Edit</Button>
      <Button variant="outlined" style={styles.button} onClick={() => onclick("deleteUser", !deleteUser)}>Delete</Button>
    </div>
  );
}

const styles = {
  button: {
    margin: "0px 15px",
    borderLeft: "0.5px solid  #0f65f0",
    backgroundColor: "#0f65f0",
    color: "white",
    height: "40px",
    borderradius: "7px",
  },
  search:{
    backgroundColor:"white",
    borderRadius:"7px",
    marginRight:"210px",
    marginLeft:"320px",
  },
  
  divStyle: {
    marginBottom: "22px"
  }
}
