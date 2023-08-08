import { Button, Card, Grid, TextField } from '@mui/material';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Navigate,useLocation, useNavigate } from 'react-router-dom';

type Props = {};

const ZoneMasterEdit = (props: Props) => {

  console.log('useLocation '+useLocation())
  const location = useLocation();
console.log('location', location.state.name)

  const [enteredZonename, setEnteredZonename] = useState('');
  const [enteredShortname, setEnteredShortname] = useState('');
  let navigate = useNavigate(); 
  const zonenameChangeHandler = (event: any) => {
    setEnteredZonename(event.target.value);
}
const shortnameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredShortname(event.target.value);
};

useEffect(() => {
 
  setEnteredZonename(location.state.ZoneName);
  setEnteredShortname(location.state.ZoneAbbrevation);
 
  
}, [])
const submitHandler = (event: { preventDefault: () => void; }) => {
  event.preventDefault();

  const collectData = {
    ZoneID:location.state.id,
    ZoneName: enteredZonename,
    ZoneAbbrevation: enteredShortname,
    Type:1,
  }
  console.log(collectData)
        axios.post(`https://localhost:59928/api/Vehicle/SaveZoneData`, collectData)
          .then(res => {
            console.log(res.data)
            
            //console.log("data2222" +  res.data.isSuccess)
            if(res.data.isSuccess){
              alert(res.data.msg)
              setEnteredZonename('');
              setEnteredShortname('');
              let path = `/master/ZoneMaster`; 
                navigate(path);
            }else {
              alert(res.data.msg)
            }
        })

        
    }
    const resetHandler = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
    
      const collectData = {
          zonename: enteredZonename,
          shortname: enteredShortname,
      }
      console.log(collectData);
    
            setEnteredZonename('');
            setEnteredShortname('');
        }

  return (

<div>

<Grid item lg={6} sm={6} xs={12}>
  <h3 style={{color:'Black', height:'35px', padding:'3px',marginTop:'0px', fontSize: '20px', fontWeight: 500, textAlign:'center'}}>ZONE MASTER</h3>
</Grid >
<Grid item lg={6} sm={6} xs={12} >
  <Button type='submit' variant='contained'  style={{ backgroundColor: 'blue', marginTop:'-110px' }}><ArrowBackSharpIcon /></Button>
            </Grid>




<form onSubmit={submitHandler} onReset={resetHandler}>
<Card style={{width:"60%", height:'50%', marginTop:'3%', marginLeft:'20%', padding:25,backgroundColor: '#E9FDEE',border: '.5px solid green'}}>
<Grid item xs={12} container spacing={2}>

<Grid item lg={12} xs={12}>
  <h3 style={{color:'Black', height:'35px', padding:'3px',marginTop:'-10px',backgroundColor: '#B7FDAC', fontSize: '20px', fontWeight: 500, borderRadius: 3,border: '.5px solid blue', textAlign:'center'}}>Create Zone</h3>
</Grid>


<Grid item lg={6} xs={12}>
  <TextField label='Enter Zone' value={enteredZonename} placeholder='Enter Zone Name' size='small' fullWidth style={{backgroundColor: 'white'}} onChange={zonenameChangeHandler} />
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

export default ZoneMasterEdit;