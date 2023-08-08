import { Button, Card, Grid, TextField } from '@mui/material';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Navigate, useNavigate,useLocation } from 'react-router-dom';

type Props = {};

const UnitMasterEdit = (props: Props) => {
  console.log('useLocation '+useLocation())
  const location = useLocation();
console.log('location', location.state)
  const [enteredUnitname, setEnteredUnitname] = useState('');
  const [enteredShortname, setEnteredShortname] = useState('');
  let navigate = useNavigate(); 

  const unitnameChangeHandler = (event: any) => {
    setEnteredUnitname(event.target.value);
}
const shortnameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredShortname(event.target.value);
};
useEffect(() => {
 
  setEnteredUnitname(location.state.UnitName);
  setEnteredShortname(location.state.UnitShortname);
  
  
}, [])
const submitHandler = (event: { preventDefault: () => void; }) => {
  event.preventDefault();

  const collectData = {
    UnitId:location.state.id,
    UnitName: enteredUnitname,
    UnitShortname: enteredShortname,
    Type:1,
  }
  console.log(collectData);
  console.log(collectData);
  axios.post(`https://localhost:59928/api/Vehicle/SaveUnit`, collectData)
  .then(res => {
    console.log(res.data)
    
    //console.log("data2222" +  res.data.isSuccess)
    if(res.data.isSuccess){
      alert(res.data.msg)
      setEnteredUnitname('');
      setEnteredShortname('');
      let path = `/master/UnitMaster`; 
        navigate(path);
    }else {
      alert(res.data.msg)
    }
})
        
    }
    const resetHandler = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
    
      const collectData = {
          unitname: enteredUnitname,
          shortname: enteredShortname,
      }
      console.log(collectData);
    
            setEnteredUnitname('');
            setEnteredShortname('');
        }
  return (

<div>

<Grid item lg={6} sm={6} xs={12}>
  <h3 style={{color:'Black', height:'35px', padding:'3px',marginTop:'0px', fontSize: '20px', fontWeight: 500, textAlign:'center'}}>UNIT MASTER</h3>
</Grid >
<Grid item lg={6} sm={6} xs={12} >
  <Button type='submit' variant='contained'  style={{ backgroundColor: 'blue', marginTop:'-110px' }}><ArrowBackSharpIcon /></Button>
   </Grid>

<form onSubmit={submitHandler} onReset={resetHandler}>
<Card style={{width:"60%", height:'50%', marginTop:'3%', marginLeft:'20%', padding:25,backgroundColor: '#E9FDEE',border: '.5px solid green'}}>
<Grid item xs={12} container spacing={2}>

<Grid item lg={12} xs={12}>
  <h3 style={{color:'Black', height:'35px', padding:'3px',marginTop:'-10px',backgroundColor: '#B7FDAC', fontSize: '20px', fontWeight: 500, borderRadius: 3,border: '.5px solid blue', textAlign:'center'}}>Create Unit</h3>
</Grid>


<Grid item lg={6} xs={12}>
  <TextField label='Enter Unit' value={enteredUnitname} placeholder='Enter Brand Name' size='small' fullWidth style={{backgroundColor: 'white'}} onChange={unitnameChangeHandler} />
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

export default UnitMasterEdit;