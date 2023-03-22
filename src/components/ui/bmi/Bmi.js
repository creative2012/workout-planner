import React, { useState, useEffect, createRef } from 'react'
import { getFromLocalStorage, saveToLocalStorage } from '../../utils/LocalStorage';
import './bmi.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';



const Bmi = (props) => {

    //get the value for the text input fields
    const age = createRef();
    const height = createRef();
    const weight = createRef();
    //get userData
    const userData = getFromLocalStorage('user');
    const [open, setOpen] = useState(false);

    let data2 = {

        bmi: '',
        health: '',
        healthy_bmi_range: ''

    }
    const [params, setParams] = useState({ age: userData.age, weight: userData.weight, height: userData.height})
    const [response, setResponse] = useState(data2);

    let options = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/bmi',
        params: params,
        headers: {
            'X-RapidAPI-Key': '1878354580msh8b369f3fa728c53p1abe74jsncda9f6dbfe87',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };

    useEffect(() => {
        console.log(options)
        axios.request(options)
            .then(function (response) {
                setResponse(response.data.data)

            }).catch(function (error) {
                console.error(error);
            });
    }, [params]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleUpdate = () => {
        let data = userData;
        

        if (age.current.value.length != 0) {
            data.age = age.current.value.toString();
            saveToLocalStorage('user', data);
        }
        else if (height.current.value.length != 0) {
            data.height = height.current.value.toString();
            saveToLocalStorage('user', data);
        }
        else if (weight.current.value.length != 0) {
            data.weight = weight.current.value.toString();

            saveToLocalStorage('user', data);
        }
        console.log(data)
        setParams({ age: data.age, weight: data.weight, height: data.height });
        handleClose();

    }
  

    return (
        <div>
            <div onClick={handleClickOpen} id="bmiResult" style={{ position: 'relative' }}>
                <div className='smallTitle'>{response.bmi} <span>Your BMI</span></div>
                <div className='smallTitle'>{response.health} <span>Your Health</span></div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogTitle>Update BMI data</DialogTitle>

                    <div>
                        <TextField
                            inputRef={age}
                            required={true}
                            autoFocus
                            label={'Age: '+userData.age}
                            className="loginTextFields"
                            margin="dense"
                            id="age"
                            type="number"
                            variant="outlined"
                            sx={{
                                m: 1, width: 150,
                                "& .MuiInputLabel-root": { color: 'black' },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": { color: 'black!important', borderColor: "black" },
                                }
                            }}
                        />
                        <TextField
                            inputRef={height}
                            required={true}
                            autoFocus
                            label={'Weight: ' +userData.height}
                            className="loginTextFields"
                            margin="dense"
                            id="height"
                            type="number"
                            variant="outlined"
                            sx={{
                                m: 1, width: 150,
                                "& .MuiInputLabel-root": { color: 'black' },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": { color: 'black!important', borderColor: "black" },
                                }
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                            }}
                        />
                        <TextField
                            inputRef={weight}
                            required={true}
                            autoFocus
                            label={'Height: ' +userData.weight}
                            className="loginTextFields"
                            margin="dense"
                            id="weight"
                            type="number"
                            variant="outlined"
                            sx={{
                                m: 1, width: 150,
                                "& .MuiInputLabel-root": { color: 'black' },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": { color: 'black!important', borderColor: "black" },
                                }
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                            }}
                        />
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </div >
    )

}

export default Bmi