import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';


type Props = {};

const SaveDevice = (props: Props) => {


    const [entereddeviceID, setEntereddeviceID] = useState('');
    const [entereddeviceCode, setEntereddeviceCode] = useState('');
    const [entereddeviceName, setEntereddeviceName] = useState('');
    const [entereddeviceName2, setEntereddeviceName2] = useState('');
    const [enteredisActive, setEnteredisActive] = useState<boolean>(true);
    


    const deviceIDChangeHandler = (event: any) => {
        setEntereddeviceID(event.target.value);
    }
    const deviceCodeChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEntereddeviceCode(event.target.value);
    };
    const deviceNameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEntereddeviceName(event.target.value);
    };
    const deviceName2ChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEntereddeviceName2(event.target.value);
    };
    const isActiveChangeHandler = (event: any) => {
        setEnteredisActive(event.target.value);
    };
    ;

    const submitHandler = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const collectData = {
            deviceID: entereddeviceID,
            deviceCode: entereddeviceCode,
            deviceName: entereddeviceName,
            deviceName2: entereddeviceName2,
            isActive: enteredisActive,
           
        }
        console.log(collectData);

       await axios.post(`http://103.20.213.26:48950/api/Master/SaveDevice`, collectData)
        .then((res: any) => {
          //http://103.20.213.26:48950 --(dummy api)
          //http://103.20.213.26:7080
          // console.log(res.data.result[0].vehicleNo) 
          console.log(res)
          
        })

        setEntereddeviceID('');
        setEntereddeviceCode('');
        setEntereddeviceName('');
        setEntereddeviceName2('');
        setEnteredisActive(true);
       
    }



    return (
        <div>
            <Typography variant='h5' align='center' style={{ marginTop: '20px', fontSize: '25px', fontWeight: 500 }}  >
                SAVE DEVICE
            </Typography>

            <Grid xs={4} sm={12} item >
                <Typography style={{ marginTop: '-75px', marginLeft: '150px', }}>
                    <Button type='submit' variant='contained' style={{ marginBottom: 15, marginTop: '100px', backgroundColor: 'blue', width: 20 }}><ArrowBackSharpIcon /></Button>
                </Typography>
            </Grid>

            <div style={{ width: 750, marginLeft: 150, padding: '-5px 5px', height: 350, backgroundColor: '#E9FDEE', borderRadius: '5px', border: '.5px solid green' }}>
                <CardContent>
                    <Typography style={{ marginBottom: '20px', paddingTop: '5px', paddingLeft: '10px', width: 720, height: 35, backgroundColor: '#B7FDAC', fontSize: '20px', fontWeight: 500, borderRadius: 5 }}>Save Device Details</Typography>

                    <form onSubmit={submitHandler}>
                        <Grid container spacing={1}>

                            <Grid xs={12} sm={6} item >
                                <TextField label='Device Id' value={entereddeviceID} placeholder='Enter Device Id' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '10px' }} onChange={deviceIDChangeHandler} />
                            </Grid>


                            <Grid xs={12} sm={6} item >
                                <TextField type='text' value={entereddeviceCode} label='Device Code' placeholder='Enter Device Code' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '20px' }} onChange={deviceCodeChangeHandler} />
                            </Grid>


                            <Grid xs={12} sm={6} item >
                                <TextField type='text' value={entereddeviceName} label='Device EPC-1' placeholder='Enter Device EPC-1' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '20px' }} onChange={deviceNameChangeHandler} />
                            </Grid>

                            <Grid xs={12} sm={6} item >
                                <TextField type='text' value={entereddeviceName2} label='Device EPC-2' placeholder='Enter Device EPC-2' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '20px' }} onChange={deviceName2ChangeHandler} />
                            </Grid>

                            {/* <Grid xs={12} sm={6} item >
                                <span>Is Active</span><br />
                                <FormControlLabel control={<Checkbox  style={{ marginLeft: 25 }}  />}  label="True" value={enteredCheckbox1}  onChange={checkbox1ChangeHandler}/>
                                <FormControlLabel control={<Checkbox  style={{ marginLeft: 25 }}  />} defaultChecked label="False" value={enteredCheckbox2} onChange={checkbox2ChangeHandler} />
                            </Grid> */}

                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Is Active</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={enteredisActive}  onChange={isActiveChangeHandler}
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="True" />
                                    <FormControlLabel value="false" control={<Radio />} label="False" />
                                </RadioGroup>
                            </FormControl>



                            <Grid xs={12} item >
                                <Button type='submit' variant='contained' style={{ marginLeft: 280, marginTop: 0, backgroundColor: '#059669' }}>Save</Button>
                            </Grid>
                            <Grid xs={12} item >
                                <Button type='reset' variant='contained' style={{ marginLeft: 400, marginTop: -75, backgroundColor: '#F43F5E' }}>Reset</Button>
                            </Grid>


                        </Grid>
                    </form>

                </CardContent>
            </div>
        </div>

    );
};

export default SaveDevice;