import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import React, { useState } from 'react'
import { Container, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, TextField } from '@mui/material';
const useStyles = makeStyles({
    delete: {
     position:'fixed',
      bottom:10,
      right: 20,
    },
    container:{
      height:500,
      width:500,
      backgroundColor:'white',
      position:'absolute',
      top:0,
      bottom:0,
      right:0,
      left:0,
      margin:'auto',
    }
   
     });
  
function ToolTips() {
    const classes = useStyles();
    const [open, setOpen]=useState(false);
    return (
        <div className={classes.delete}>
      <Tooltip title="Delete" onClick={()=>setOpen(true)}>
        <IconButton > 
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip describeChild title="Does not add if it already exists.">
        <Button>Add</Button>
      </Tooltip>
      <Modal open={open}>
       <Container className={classes.container}>
       <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Tell your story..."
                variant="outlined"
                label="Description"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setOpen(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
       
       </Container>
      </Modal>
    </div>
    )
}

export default ToolTips
