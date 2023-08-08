import { Button, Card, CardContent, Grid, MenuItem, TextField, Typography, } from '@mui/material'
import React, { useState } from 'react'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import axios from 'axios';
import { Navigate, useNavigate,useLocation } from 'react-router-dom';

type Props = {};

const DepartmentMasterAdd = (props: Props) => {
    const option = [
        { value: 'Mr. Amit Yadav', label: 'Mr. Amit Yadav', },
        { value: 'Mr. Kamal Singh', label: 'Mr. Kamal Singh', },
        { value: 'Mr. Jeetu Kumar', label: 'Mr. Jeetu Kumar', },
        
      ];

      
    const [enteredDepartmentname, setEnteredDepartmentname] = useState('');
    const [enteredDepartmentshortname, setEnteredDepartmentshortname] = useState('');
    const [enteredShortname, setEnteredShortname] = useState('');
    let navigate = useNavigate(); 

    const departmentnameChangeHandler = (event: any) => {
        setEnteredDepartmentname(event.target.value);
    }
    const departmentshortnameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEnteredDepartmentshortname(event.target.value);
    };
    const shortnameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEnteredShortname(event.target.value);
    };


    const submitHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const collectData = {
            DepartmentId:-1,
            DepartmentName: enteredDepartmentname,
            DepartmentShortname: enteredDepartmentshortname,
            //shortname: enteredShortname,
            Type:1,
        }
        console.log(collectData);
        axios.post(`https://localhost:59928/api/Vehicle/SaveDepartment`, collectData)
        .then(res => {
          console.log(res.data)
          
          //console.log("data2222" +  res.data.isSuccess)
          if(res.data.isSuccess){
            alert(res.data.msg)
            setEnteredDepartmentname('');
            setEnteredDepartmentshortname('');
            let path = `/employeeinfo/DepartmentMaster`; 
              navigate(path);
          }else {
            alert(res.data.msg)
          }
      })
       

    }


  return (
    <div>
            <Typography variant='h5' align='center' style={{ marginTop: '10px', fontSize: '25px', fontWeight: 500 }}  >
                DEPARTMENT
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

            <div style={{ width: 750, marginLeft: 150, padding: '-5px 5px', height: 350, backgroundColor: '#E9FDEE', borderRadius: '5px', border: '.5px solid green' }}>
                <CardContent>
                    <Typography style={{ marginBottom: '20px', paddingTop: '5px', paddingLeft: '10px', width: 720, height: 35, backgroundColor: '#B7FDAC', fontSize: '20px', fontWeight: 500, borderRadius: 5 }}>Create Department</Typography>

                    <form onSubmit={submitHandler}>
                        <Grid container spacing={1}>

                            <Grid xs={12} sm={6} item >
                                <TextField label='Department Name' value={enteredDepartmentname} placeholder='Enter Department Name' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '10px' }} onChange={departmentnameChangeHandler} />
                            </Grid>


                            <Grid xs={12} sm={6} item >
                                <TextField type='text' label='Department Short Name' value={enteredDepartmentshortname} placeholder='Enter Department Short Name' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '20px' }} onChange={departmentshortnameChangeHandler} />
                            </Grid>

                            {/* <Grid xs={12} sm={6} item >
                                <TextField type='text' value={enteredShortname} label='Short Name' placeholder='Enter Short Name' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '20px' }} onChange={shortnameChangeHandler} />
                            </Grid> */}
                            <Grid xs={12} sm={6} item >
                                <TextField select label="Select Head Of Department" value={enteredShortname} size='small' fullWidth style={{ backgroundColor: 'white' }} onChange={shortnameChangeHandler}>
                                    {option.map((option) => (
                                        <MenuItem key={option.value} value={option.value} >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            {/* <Grid xs={12} sm={6} item >
                            <FormControlLabel control={<Checkbox defaultChecked style={{marginLeft:25}} />} label="Save e-Scrap Also" />
                            </Grid> */}



                            <Grid xs={12} item >
                                <Button type='submit' variant='contained' style={{ marginLeft: 280, marginTop: 40, backgroundColor: '#059669' }}>Save</Button>
                            </Grid>
                            <Grid xs={12} item >
                                <Button type='reset' variant='contained' style={{ marginLeft: 400, marginTop: -76, backgroundColor: '#F43F5E' }}>Reset</Button>
                            </Grid>


                        </Grid>
                    </form>

                </CardContent>
            </div>
        </div>
  );
};

export default DepartmentMasterAdd;