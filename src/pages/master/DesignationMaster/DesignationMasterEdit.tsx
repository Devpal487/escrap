import { Button, Card, CardContent, Grid, MenuItem, TextField, Typography, } from '@mui/material'
import React, { useState,useEffect } from 'react'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import axios from 'axios';
import { Navigate, useNavigate,useLocation } from 'react-router-dom';

type Props = {};

const DesignationMasterEdit = (props: Props) => {
    console.log('useLocation '+useLocation())
    const location = useLocation();
  console.log('location', location.state)

    const [enteredDesignationname, setEnteredDesignationname] = useState('');
    const [enteredDesignationshortname, setEnteredDesignationshortname] = useState('');
   
    let navigate = useNavigate(); 

    const designationnameChangeHandler = (event: any) => {
        setEnteredDesignationname(event.target.value);
    }
    const designationshortnameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEnteredDesignationshortname(event.target.value);
    };
    
    useEffect(() => {
 
        setEnteredDesignationname(location.state.DesignationName);
        setEnteredDesignationshortname(location.state.DesignationCode);
        
        
      }, [])

    const submitHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const collectData = {
            DesignationId:location.state.id,
            DesignationName: enteredDesignationname,
            DesignationCode: enteredDesignationshortname,
            Type:1,
            
        }

        console.log(collectData);
  axios.post(`https://localhost:59928/api/Vehicle/SaveDesignation`, collectData)
  .then(res => {
    console.log(res.data)
    
    //console.log("data2222" +  res.data.isSuccess)
    if(res.data.isSuccess){
      alert(res.data.msg)
      setEnteredDesignationname('');
        setEnteredDesignationshortname('');
      let path = `/employeeinfo/DesignationMaster`; 
        navigate(path);
    }else {
      alert(res.data.msg)
    }
})

        
       
    }
    
  return (
    <div>
            <Typography variant='h5' align='center' style={{ marginTop: '10px', fontSize: '25px', fontWeight: 500 }}  >
                DESIGNATION
            </Typography>

            {/* <Typography style={{ marginLeft: '300px', fontSize: '20px', fontWeight: 500 }}>
                Vehicle Type
            </Typography >
            <Typography style={{ marginTop: '-77px', marginLeft: '410px', color: 'green' }} ><h1><ArrowBackSharpIcon variant='blue' style={{ marginLeft: '10px', marginTop: '50px' }} /></h1></Typography> */}

            <Grid xs={4} sm={12} item >
                <Typography style={{ marginTop: '-75px', marginLeft: '150px', }}>
                    <Button type='submit' variant='contained' style={{ marginBottom: 15, marginTop: '100px', backgroundColor: 'blue', width: 20 }}><ArrowBackSharpIcon /></Button>
                </Typography>
            </Grid>

            <div style={{ width: 750, marginLeft: 150, padding: '-5px 5px', height: 250, backgroundColor: '#E9FDEE', borderRadius: '5px', border: '.5px solid green' }}>
                <CardContent>
                    <Typography style={{ marginBottom: '20px', paddingTop: '5px', paddingLeft: '10px', width: 717, height: 35, backgroundColor: '#B7FDAC', fontSize: '20px', fontWeight: 500, borderRadius: 5 }}>Create Designation</Typography>

                    <form onSubmit={submitHandler}>
                        <Grid container spacing={2}>

                            <Grid xs={12} sm={6} item >
                                <TextField label='Designation Name' value={enteredDesignationname} placeholder='Enter Designation Name' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '10px' }} onChange={designationnameChangeHandler} />
                            </Grid>


                            <Grid xs={12} sm={6} item >
                                <TextField type='text' label='Designation Short Name' value={enteredDesignationshortname} placeholder='Enter Designation Short Name' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '20px' }} onChange={designationshortnameChangeHandler} />
                            </Grid>



                            <Grid xs={12} item >
                                <Button type='submit' variant='contained' style={{ marginLeft: 280, marginTop: 40, backgroundColor: '#059669' }}>Save</Button>
                            </Grid>
                            <Grid xs={12} item >
                                <Button type='reset' variant='contained' style={{ marginLeft: 400, marginTop: -90, backgroundColor: '#F43F5E' }}>Reset</Button>
                            </Grid>


                        </Grid>
                    </form>

                </CardContent>
            </div>
        </div>

  );
};

export default DesignationMasterEdit;