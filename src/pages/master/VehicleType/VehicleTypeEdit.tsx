import { Button, Card, CardContent, Grid, TextField, Typography, } from '@mui/material'
import React, { useEffect,useState } from 'react'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { json } from 'stream/consumers';
type Props = {};

const VehicleTypeEdit = (props: Props) => {
    console.log('useLocation '+useLocation())
    const location = useLocation();
  console.log('location', location.state)
console.log(JSON.stringify(props));

  const [enteredVehicletypename, setEnteredVehicletypename] = useState('');
  const [enteredVehiclecode, setEnteredVehiclecode] = useState('');
  const [enteredShortname, setEnteredShortname] = useState('');
  const back = useNavigate()
  const navigate = useNavigate()
  
  const vehicletypenameChangeHandler = (event: any) => {
      setEnteredVehicletypename(event.target.value);
  }
  const vehiclecodeChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setEnteredVehiclecode(event.target.value);
  };
  const shortnameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setEnteredShortname(event.target.value);
  };
  useEffect(() => {
 
    setEnteredVehicletypename(location.state.vehicleTypeName);
    setEnteredVehiclecode(location.state.vehicleTypeCode);
    setEnteredShortname(location.state.vehicleShortName)
    
  }, [])

  const submitHandler = (event: { preventDefault: () => void; }) => {
      event.preventDefault();

      const collectData = {
        VehicleTypeID: location.state.id,
        Type:1,
        VehicleTypeName: enteredVehicletypename,
        VehicleTypeCode: enteredVehiclecode,
        VehicleShortName: enteredShortname,
        isActive: true
      }
      console.log(collectData)
    axios.post(`https://localhost:59928/api/Vehicle/SaveVehicleTypeData`, collectData)
      .then(res => {
        console.log(res.data)
       
        console.log("data2222" +  res.data.isSuccess)
        if(res.data.isSuccess){
          alert(res.data.msg)
          let path = `/master/VehicleType`; 
          navigate(path);
        }else {
          alert(res.data.msg)
        }
        // const arr = [];
        // for (var i of data2) {
        //   arr.push(Object.values(i))
        // }

        //alert()
        // arr.unshift(["Element", "Trip", { role: "style" }])
        // setData(arr)
       // setLoading(true)
    })

      console.log(collectData);

      setEnteredVehicletypename('');
      setEnteredVehiclecode('');
      setEnteredShortname('');
  }

  return (
    <div>
            <Typography variant='h5' align='center' style={{ marginTop: '10px', fontSize: '25px', fontWeight: 500 }}  >
                VEHICLE TYPE
            </Typography>
            
            {/* <Typography style={{ marginLeft: '300px', fontSize: '20px', fontWeight: 500 }}>
                Vehicle Type
            </Typography >
            <Typography style={{ marginTop: '-77px', marginLeft: '410px', color: 'green' }} ><h1><ArrowBackSharpIcon variant='blue' style={{ marginLeft: '10px', marginTop: '50px' }} /></h1></Typography> */}

            <Grid xs={4} sm={12} item >
                <Typography style={{ marginTop: '-75px', marginLeft: '150px', }}>
                <Button onClick={()=> back(-1)} type='submit' variant='contained' style={{ marginBottom:15, marginTop: '100px', backgroundColor:'blue', width:20 }}><ArrowBackSharpIcon/></Button>
                </Typography>
            </Grid>

            <div style={{ width: 750, marginLeft: 150, padding: '-5px 5px', height: 350, backgroundColor: '#E9FDEE', borderRadius: '5px', border: '.5px solid green' }}>
                <CardContent>
                    <Typography style={{ marginBottom: '20px', paddingTop: '5px', paddingLeft: '10px', width: 720, height: 35, backgroundColor: '#B7FDAC', fontSize: '20px', fontWeight: 500, borderRadius: 5 }}>Create Vehicle Type</Typography>

                    <form onSubmit={submitHandler}>
                        <Grid container spacing={1}>

                            <Grid xs={12} sm={6} item >
                                <TextField label='Vehicle Type Name' value={enteredVehicletypename} placeholder='Enter Vehicle Type Name' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '10px' }} onChange={vehicletypenameChangeHandler} />
                            </Grid>


                            <Grid xs={12} sm={6} item >
                                <TextField type='text' label='Vehicle Code' value={enteredVehiclecode} placeholder='Enter Vehicle Code' size='small' fullWidth required style={{ backgroundColor: 'white', marginBottom: '20px' }} onChange={vehiclecodeChangeHandler} />
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

export default VehicleTypeEdit;