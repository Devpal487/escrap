import { Button, Card, Grid, TextField } from '@mui/material';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import React, { useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

type Props = {};

const TaxMasterAdd = (props: Props) => {

  const [enteredTaxname, setEnteredTaxname] = useState('');
  const [enteredShortname, setEnteredShortname] = useState('');
  let navigate = useNavigate(); 
  const taxnameChangeHandler = (event: any) => {
    setEnteredTaxname(event.target.value);
}
const shortnameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredShortname(event.target.value);
};
const submitHandler = (event: { preventDefault: () => void; }) => {
  event.preventDefault();

  const collectData = {
    TaxId:-1,
    TaxName: enteredTaxname,
    TaxPercentage: enteredShortname,
    EffectiveDate: enteredShortname,
    Type:1,
    
  }
  console.log(collectData);
  console.log(collectData);
  axios.post(`https://localhost:59928/api/Vehicle/SaveTax`, collectData)
  .then(res => {
    console.log(res.data)
    
    //console.log("data2222" +  res.data.isSuccess)
    if(res.data.isSuccess){
      alert(res.data.msg)
      setEnteredTaxname('');
      setEnteredShortname('');
      let path = `/master/TaxMaster`; 
        navigate(path);
    }else {
      alert(res.data.msg)
    }
})
        
    }


    const resetHandler = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
    
      const collectData = {
          taxname: enteredTaxname,
          shortname: enteredShortname,
      }
      console.log(collectData);
    
            setEnteredTaxname('');
            setEnteredShortname('');
        }
    

  return (

<div>

<Grid item lg={6} sm={6} xs={12}>
  <h3 style={{color:'Black', height:'35px', padding:'3px',marginTop:'0px', fontSize: '20px', fontWeight: 500, textAlign:'center'}}>TAX MASTER</h3>
</Grid >
<Grid item lg={6} sm={6} xs={12} >
  <Button type='submit' variant='contained'  style={{ backgroundColor: 'blue', marginTop:'-110px' }}><ArrowBackSharpIcon /></Button>
            </Grid>




<form onSubmit={submitHandler} onReset={resetHandler}>
<Card style={{width:"60%", height:'50%', marginTop:'3%', marginLeft:'20%', padding:25,backgroundColor: '#E9FDEE',border: '.5px solid green'}}>
<Grid item xs={12} container spacing={2}>

<Grid item lg={12} xs={12}>
  <h3 style={{color:'Black', height:'35px', padding:'3px',marginTop:'-10px',backgroundColor: '#B7FDAC', fontSize: '20px', fontWeight: 500, borderRadius: 3,border: '.5px solid blue', textAlign:'center'}}>Create Tax</h3>
</Grid>


<Grid item lg={6} xs={12}>
  <TextField label='Enter Tax' value={enteredTaxname} placeholder='Enter Tax Name' size='small' fullWidth style={{backgroundColor: 'white'}} onChange={taxnameChangeHandler} />
</Grid>

<Grid item lg={6} xs={12}>
  <TextField label='Enter Short Name' value={enteredShortname} placeholder='Enter Brand Name' size='small' fullWidth style={{backgroundColor: 'white'}} onChange={shortnameChangeHandler} />
</Grid>


<Grid item lg={6} sm={6} xs={12} >
  <Grid > <Button type='submit' fullWidth  style={{backgroundColor: '#059669', color:'white', marginTop:'40px' }}>Save</Button></Grid>
</Grid>
<Grid item lg={6} sm={6} xs={12} >
  <Button type='reset'fullWidth style={{backgroundColor: '#F43F5E', color:'white', marginTop:'40px'}}>Reset</Button>
</Grid>

    </Grid>
</Card>
</form>

</div>
  );
};

export default TaxMasterAdd;