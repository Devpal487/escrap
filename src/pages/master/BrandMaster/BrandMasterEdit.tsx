import { Button, Card, CardContent, Grid, TextField, Typography, } from '@mui/material'
import React, { useState,useEffect } from 'react'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Navigate, useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';

type Props = {};

const BrandMasterEdit = (props: Props) => {
    console.log('useLocation '+useLocation())
    const location = useLocation();
  console.log('location', location.state.name)
    const [enteredBrandname, setEnteredBrandname] = useState('');
    const [enteredBrandcode, setEnteredBrandcode] = useState('');
    const [enteredShortname, setEnteredShortname] = useState('');

    let navigate = useNavigate(); 
    const brandnameChangeHandler = (event: any) => {
        setEnteredBrandname(event.target.value);
    }
    const brandcodeChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEnteredBrandcode(event.target.value);
    };
    const shortnameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEnteredShortname(event.target.value);
    };

    useEffect(() => {
 
        setEnteredBrandname(location.state.brandname);
        setEnteredBrandcode(location.state.brandCode);
        setEnteredShortname(location.state.brandshortname)
        
      }, [])
    
    const submitHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const collectData = {
            brandId: location.state.id,
            brandname: enteredBrandname,
            brandCode: enteredBrandcode,
            brandshortname: enteredShortname,
            Type :1,
        }

        console.log(collectData)
        axios.post(`https://localhost:59928/api/Vehicle/SaveBrand`, collectData)
          .then(res => {
            console.log(res.data)
            
            //console.log("data2222" +  res.data.isSuccess)
            if(res.data.isSuccess){
              alert(res.data.msg)
              setEnteredBrandname('');
        setEnteredBrandcode('');
        setEnteredShortname('');
              let path = `/master/BrandMaster`; 
                navigate(path);
            }else {
              alert(res.data.msg)
            }
        })
        console.log(collectData);
                
    }


  return (
    <div>
            <Typography variant='h5' align='center' style={{ marginTop: '10px', fontSize: '25px', fontWeight: 500 }}  >
                BRAND MASTER
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
                    <Typography style={{ marginBottom: '20px', paddingTop: '5px', paddingLeft: '10px', width: 720, height: 35, backgroundColor: '#B7FDAC', fontSize: '20px', fontWeight: 500, borderRadius: 5 }}>Create Brand Master</Typography>

                    <form onSubmit={submitHandler}>
                        <Grid container spacing={1}>

                            <Grid xs={12} sm={6} item >
                                <TextField label='Brand Name' value={enteredBrandname} placeholder='Enter Brand Name' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '10px' }} onChange={brandnameChangeHandler} />
                            </Grid>


                            <Grid xs={12} sm={6} item >
                                <TextField type='text' label='Brand Code' value={enteredBrandcode} placeholder='Enter Brand Code' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '20px' }} onChange={brandcodeChangeHandler} />
                            </Grid>

                            <Grid xs={12} sm={6} item >
                                <TextField type='text' value={enteredShortname} label='Short Name' placeholder='Enter Short Name' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '20px' }} onChange={shortnameChangeHandler} />
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

export default BrandMasterEdit;