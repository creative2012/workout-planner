import React, { useState, createRef } from 'react';
import { useNavigate } from "react-router-dom";
import './userSelect.css';
import { getFromLocalStorage } from '../utils/LocalStorage';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import { motion } from "framer-motion";



const UserSelect = (props) => {
    const navigate = useNavigate();
    //get the value for the text input fields
    const name = createRef();
    const age = createRef();
    const height = createRef();
    const weight = createRef();
    //model state
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    //check if there is a user profile already
    const test = getFromLocalStorage('user')
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const setErrorMsg = type => {
        return "Please enter your " + type;
    }
    //handle userlogin if user profile does not exist
    const userLogin = () => {
        setError('');
        //validate all values - return error if incomplete
        if (name.current.value.length < 3 ){
            setError(setErrorMsg('Name (longer than 3 characters)'));
            return;
        }
        else if ( age.current.value.length == 0 ){
            setError(setErrorMsg('age'));
            return;
        }
        else if (height.current.value.length == 0){
            setError(setErrorMsg('height'));
            return;
        }
        else if ( weight.current.value.length == 0){
            setError(setErrorMsg('weight'));
            return;
        }
        else {
            setError('');
            let data = { name: name.current.value, age: age.current.value, height: height.current.value, weight: weight.current.value }
            props.handleLogin(data)
            setTimeout(() => {
            handleClose();
            },50);
            navigate("/home");
        } 
    }
    //handle login if user profile exists
    const login = () => {
        const data = getFromLocalStorage('user')
        props.handleLogin(data);
        navigate("/home");
    }

    return (
        {/*Motion component from Framer Motion*/},
        <motion.div
        initial={{opacity: 1}}
        exit={{opacity: 0, transition:{duration: 0.5}}}>
            <div id="splashBg" >
                <Dialog  open={open} onClose={handleClose} 
                PaperProps={{
                style: {
                    backdropFilter: "blur(5px)",
                    color: 'white'
                },
                }}>
                    <DialogTitle className="loginFont">START TRAINING TODAY</DialogTitle>
                    <DialogContent>
                        <div>
                        <TextField
                            required={true}
                            inputRef={name}
                            autoFocus
                            className="loginTextFields"
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            variant="outlined"
                            sx={{  width: '100%',
                            /*Overriding the style of Material UI textfield*/
                            "& .MuiInputLabel-root": {color: 'black'},
                            "& .MuiOutlinedInput-root.Mui-focused": {
                              "& > fieldset": { color: 'black!important', borderColor: "black" },
                            }}}
                        />
                        </div>
                        <div>
                        <TextField
                            inputRef={age}
                            required={true}
                            autoFocus
                            className="loginTextFields"
                            margin="dense"
                            id="age"
                            label="Age"
                            type="number"
                            variant="outlined"
                            sx={{ m: 1, width: 150, 
                            "& .MuiInputLabel-root": {color: 'black'},
                            "& .MuiOutlinedInput-root.Mui-focused": {
                              "& > fieldset": { color: 'black!important', borderColor: "black" },
                            }}}
                        />
                        <TextField
                            inputRef={height}
                            required={true}
                            autoFocus
                            className="loginTextFields"
                            margin="dense"
                            id="height"
                            label="Height"
                            type="number"
                            variant="outlined"
                            sx={{ m: 1, width: 150, 
                            "& .MuiInputLabel-root": {color: 'black'},
                            "& .MuiOutlinedInput-root.Mui-focused": {
                              "& > fieldset": { color: 'black!important', borderColor: "black" },
                            }}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                              }}
                        />
                        <TextField
                            inputRef={weight}
                            required={true}
                            autoFocus
                            className="loginTextFields"
                            margin="dense"
                            id="weight"
                            label="Weight"
                            type="number"
                            variant="outlined"
                            sx={{ m: 1, width: 150, 
                            "& .MuiInputLabel-root": {color: 'black'},
                            "& .MuiOutlinedInput-root.Mui-focused": {
                              "& > fieldset": { color: 'black!important', borderColor: "black"  },
                            }}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                              }}
                        />
                        </div>
                        <div style={{color: 'red'}}>{error ? error : ''}</div>
                    </DialogContent>
                    <DialogActions>
                        <Button className="loginButtonFields" onClick={handleClose}>Cancel</Button>
                        <Button className="loginButtonFields" onClick={userLogin}>Login</Button>
                    </DialogActions>
                </Dialog>
                <div id="splash">
                    <div id="header">
                        <div id="headTitle">
                            <em>FIT<span className="yellowFont">PLAN</span></em>
                        </div>
                        <div>THE BODY
                            <span className="yellowFont">ACHIEVES</span>
                            WHAT THE MIND
                            <span className="yellowFont">BELIEVES</span>
                        </div>
                    </div>
                    <div id="title">
                        {test == null ? 'Create new Profile' : ''}
                    </div>
                    {/*Conditional Rendering to check if user has logged in before using local storage*/}
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
                        well as our Fitness planner app, which will help plan your workout.<br /> <br />Copyright © 2023 FitPlan All
                        Rights Reserved.
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default UserSelect