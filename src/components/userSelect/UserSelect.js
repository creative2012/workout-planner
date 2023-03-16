import React, { useState, createRef } from 'react';
import './userSelect.css';
import { getFromLocalStorage } from '../utils/LocalStorage';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const UserSelect = (props) => {
    //get the value for the text input field
    const textInput = createRef();
    //model state
    const [open, setOpen] = useState(false);
    //check if there is a user profile already
    const test = getFromLocalStorage('user')
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //handle userlogin if user profile does not exist
    const userLogin = () => {
        let loginName = textInput.current.value;
        //check user name is longer than 3 chars
        if(loginName.length >= 3){
            props.handleLogin(textInput.current.value)
        }

    }
    //handle login if user profile exists
    const login = () => {
        const name = getFromLocalStorage('user').name
        props.handleLogin(name)
    }

    return (
        <div id="splashBg" >
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create Profile</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To Begin using our website, please enter your Name below. 
                    </DialogContentText>
                    <TextField
                        required= {true}
                        inputRef={textInput}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="name"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={userLogin}>Login</Button>
                </DialogActions>
            </Dialog>
            <div id="splash">
                <div id="header">
                    <div id="headTitle">
                        <em>FIT<span className="yellowFont">PLAN</span></em>
                    </div>
                    <div>THE BODY
                        <span className="yellowFont">ACHIVES</span>
                        WHAT THE MIND
                        <span className="yellowFont">BELIVES</span>
                    </div>
                </div>
                <div id="title">
                {test == null ? 'Create new Profile' : ''}
                </div>
                <div id="newUserBtn" onClick={test == null ? handleClickOpen : login}>{test == null ? '+' : props.name}</div>
                <div id="footer">
                    <div id="featureCont">
                        <div id="large">
                            <em>1<span className="yellowFont">K</span>+</em>
                            <div>Exercises</div>
                        </div>
                        <div id="large">
                            <em>F<span className="yellowFont">i</span>T </em>
                            <div>Planner App</div>
                        </div>
                        <div id="large">
                            <em>BMI</em>
                            <div>Check your Fitness</div>
                        </div>
                    </div>
                    Get access to a comprehensive list of thousands of exercises, targeting every major muscle group. As
                    well as our Fitness planner app, which includes a Diet plan.<br /> <br />Copyright © 2023 FitPlan All
                    Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default UserSelect