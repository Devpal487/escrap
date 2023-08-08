import { Button, Card, CardContent, Grid, TextField, Typography, MenuItem } from '@mui/material'
import React, {useState} from 'react'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';


type Props = {};

const VehicleTypeInfo = (props: Props) => {

    const option1= [
        { value: 'dumper', label: 'Dumper', },
        { value: 'tatatrip', label: 'Tata Trip', },
        { value: 'loader', label: 'Loader', },
      ];
    
    //backend connection code start
    const [enteredPetrolpump, setEnteredPetrolpump] = useState('');
    const [enteredEffectivedate, setEnteredEffectivedate] = useState('');
    const [enteredVehicletype, setEnteredVehicletype] = useState('');
    const [enteredShiftone, setEnteredShiftone] = useState('');
    const [enteredShifttwo, setEnteredShifttwo] = useState('');
    
    
    const petrolpumpChangeHandler = (event: any) =>{
      setEnteredPetrolpump(event.target.value);
    }
    const effectivedateChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setEnteredEffectivedate(event.target.value);
    };
    const vehicletypeChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setEnteredVehicletype(event.target.value);
    };
    const shiftoneChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setEnteredShiftone(event.target.value);
    };
    const shifttwoChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setEnteredShifttwo(event.target.value);
    };
    
    const submitHandler = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
    
      const collectData = {
        petrolpump: enteredPetrolpump,
        effectivedate: enteredEffectivedate, 
        vehicletype: enteredVehicletype,
        shiftone: enteredShiftone,
        shifttwo: enteredShifttwo,
        
      }
      console.log(collectData);
    
      setEnteredPetrolpump('');
      setEnteredEffectivedate('');
      setEnteredVehicletype('');
      setEnteredShiftone('');
      setEnteredShifttwo('');
     
    }
    //backend connection code end
    

  return (
    <div>
    <Grid xs={12} sm={4}  item >
    <Typography variant='h5' align='center' style={{marginTop:'10px',fontSize:'25px', fontWeight:500 }}  >
      VEHICLE TYPE INFORMATION
    </Typography></Grid><br />

  
    <Grid xs={4} sm={12}  item >
    <Typography style={{ marginTop: '-90px', marginLeft: '105px',  }}>
      {/* <h1><ArrowBackSharpIcon variant='blue' style={{ marginLeft: '10px', marginTop: '50px',backgroundColor:'red' }} /></h1> */}
      <Button type='submit' variant='contained' style={{marginBottom:15, marginTop: '100px', backgroundColor:'blue', width:20 }}><ArrowBackSharpIcon/></Button>
      </Typography>
    </Grid>

    <div style={{ maxWidth: 900, margin: '-25px auto', padding: '5px 5px', height: 450 }}>
      <CardContent>
        <Grid xs={12} sm={4}  item >
        <Typography style={{ marginBottom: '20px', paddingTop: '5px', paddingLeft: '10px', width: 858, height: 35, backgroundColor: '#B7FDAC', fontSize:'20px', fontWeight:500, borderRadius: 5 }}>Create Vehicle Type Information</Typography>
        </Grid>
        <form onSubmit={submitHandler}>
          <Grid container spacing={2}>



            <Grid xs={12} sm={6}  item >
              <TextField label='Petrol Pump Name' value={enteredPetrolpump}  placeholder='Enter Vehicle Code' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {petrolpumpChangeHandler} />
            </Grid>

            <Grid xs={12} sm={6} item >
              <TextField  label="Effective Date" value={enteredEffectivedate} type="date" size='small' fullWidth  InputLabelProps={{ shrink: true, }} style={{ backgroundColor: '#EEF2FF' }} onChange= {effectivedateChangeHandler} />
            </Grid>


            <Grid xs={12} sm={6} item >
              <TextField select label="Vehicle Type" value= {enteredVehicletype}   defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {vehicletypeChangeHandler}>
                {option1.map((option) => (
                  <MenuItem key={option.value} value={option.value} >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>


            <Grid xs={12} sm={6} item >
              <TextField label='Shift-I(Fuel(Lt))' value= {enteredShiftone} placeholder='Enter Vehicle Name' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {shiftoneChangeHandler} />
            </Grid>

            <Grid xs={12} sm={6} item >
              <TextField type='number' value= {enteredShifttwo}   label='Shift-II(Fuel(Lt))' placeholder='Enter Mobile No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {shifttwoChangeHandler}/>
            </Grid>


            

            <Grid xs={12} item >
              <Button type='submit' variant='contained' style={{marginLeft:300, marginTop:30, backgroundColor:'#059669'}}>Submit</Button>
            </Grid>
            <Grid xs={12} item >
              <Button type='reset' variant='contained' style={{marginLeft:430, marginTop:-90, backgroundColor:'#F43F5E'}}>Reset</Button>
            </Grid>

          </Grid>
        </form>

      </CardContent>
    </div>

  </div>
  );
};

export default VehicleTypeInfo;