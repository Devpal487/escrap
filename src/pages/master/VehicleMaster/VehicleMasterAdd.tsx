import { Button, Card, CardContent, Grid, TextField, Typography, MenuItem } from '@mui/material'
import React, {useEffect,useState} from 'react'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';

type Props = {};

const VehicleMasterAdd = (props: Props) => {

  const option = [
    { value: 'Zone 1', label: 'Zone 1', },
    { value: 'Zone 2', label: 'Zone 2', },
    { value: 'Zone 3', label: 'Zone 3', },
    { value: 'Zone 4', label: 'Zone 4', },
    { value: 'Zone 5', label: 'Zone 5', },
  ];
  const [option1, setOption1] = useState([{ value: '-1', label: 'Select Category', }]);
  // const option1= [
  //   { value: '1', label: 'Dumper', },
  //   { value: '2', label: 'Tata Trip', },
  //   { value: '3', label: 'Air Cleaner', },
  // ];

  const option2= [
    { value: '', label: 'Inventory', },
    { value: '1', label: 'Vehicle', },
    { value: '1', label: 'NA', },
  ];

  const option3= [
    { value: '1', label: 'Nos', },
    { value: '1', label: 'K.G', },
    { value: '1', label: 'Litre', },
    { value: '1', label: 'Fit', },
  ];

  const option4= [
    { value: '2.50', label: '2.50', },
    { value: '5.00', label: '5.00', },
    { value: '18.00', label: '18.00', },
    { value: '28.00', label: '28.00', },
  ];

  const option5= [
    { value: '1', label: 'Anile', },
    { value: '2', label: 'Karam Singh', },
    { value: '3', label: 'Rajan Pal', },
    { value: '4', label: 'Pavan Verma', },
  ];

  const option6= [
    { value: '1', label: 'BACKHOE LOADER', },
    { value: '2', label: 'BACKHOE LOADER (4DX)', },
    { value: '3', label: 'CATTLE CATCHING', },
    { value: '4', label: 'BOLARO', },
  ];

  const option7= [
    { value: '1', label: 'ASHOK LEYLAND LTD', },
    { value: '2', label: 'EICHER', },
    { value: '3', label: 'ESCORTS LTD.', },
    { value: '4', label: 'EICHER MOTORS LTD.', },
  ];

  const option8= [
    { value: '1', label: 'DIESEL', },
    { value: '2', label: 'ELECTRIC (BOV)', },
    { value: '3', label: 'PETROL', },
    { value: '4', label: 'CNG', },
  ];

  useEffect(() => {
 
  
    
  }, [])
  
   


  const getVehicleCategory = () => {
    axios.get(`https://localhost:59928/api/Master/GetVehicleCategory/-1`)
      .then(res => {
        const arr = [];
        for (let index = 0; index < res.data.result.length; index++) {
            arr.push({ label: res.data.result[index]['vehicleCatName'], value: res.data.result[index]['vehicleCatID'] });
        }
       setOption1(arr);
      })
  }
  const getVehicleType = () => {
    axios.get(`https://localhost:59928/api/Master/GetVehicleType/-1`)
      .then(res => {
        const arr = [];
        for (let index = 0; index < res.data.result.length; index++) {
            arr.push({ label: res.data.result[index]['vehicleTypeName'], value: res.data.result[index]['vehicleTypeID'] });
        }
       setOption1(arr);
      })
  }
  const getVehicleUnit = () => {
    axios.get(`https://localhost:59928/api/Master/GetVehicleType/-1`)
      .then(res => {
        const arr = [];
        for (let index = 0; index < res.data.result.length; index++) {
            arr.push({ label: res.data.result[index]['vehicleTypeName'], value: res.data.result[index]['vehicleTypeID'] });
        }
       setOption1(arr);
      })
  }

//backend connection code start
const back = useNavigate()

const [enteredZone, setEnteredZone] = useState('');
const [enteredVehiclename, setEnteredVehiclename] = useState('');
const [enteredVehiclecode, setEnteredVehiclecode] = useState('');
const [enteredHsncode, setEnteredHsncode] = useState('');
//const [enteredVehiclecategory, setEnteredVehiclecategory] = useState('');
const [enteredType, setEnteredType] = useState('');
const [enteredUnit, setEnteredUnit] = useState('');
const [enteredTax, setEnteredTax] = useState('');
const [enteredModelno, setEnteredModelno] = useState('');
const [enteredVehicleno, setEnteredVehicleno] = useState('');
const [enteredSimno, setEnteredSimno] = useState('');
const [enteredSerialno, setEnteredSerialno] = useState('');
const [enteredChassisno, setEnteredChassisno] = useState('');
const [enteredPurchaseyear, setEnteredPurchaseyear] = useState('');
const [enteredUndercontrol, setEnteredUndercontrol] = useState('');
const [enteredDepartment, setEnteredDepartment] = useState('');
const [enteredDesignation, setEnteredDesignation] = useState('');
const [enteredVehicletype, setEnteredVehicletype] = useState('');
const [enteredBrandname, setEnteredBrandname] = useState('');
const [enteredFueltype, setEnteredFueltype] = useState('');
const [enteredEmptyweight, setEnteredEmptyweight] = useState('');
const [enteredLitre, setEnteredLitre] = useState('');
const [enteredKm, setEnteredKm] = useState('');
const [enteredDeviceid, setEnteredDeviceid] = useState('');
const [enteredRfid1, setEnteredRfid1] = useState('');
const [enteredRfid2, setEnteredRfid2] = useState('');
const [enteredFuel, setEnteredFuel] = useState('');
const [loading, setLoading]=useState(false);
const [data2, setData2] = useState<any[]>([]);
// const [enteredFile, setEnteredFile] = useState('');
const [enteredVehiclecategory, setEnteredVehiclecategory] = React.useState<FilmOptionType | null>(null);




const zoneChangeHandler = (event:any) =>{
  setEnteredZone(event.target.value);
}
const vehiclenameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredVehiclename(event.target.value);
};
const vehiclecodeChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) =>{
  setEnteredVehiclecode(event.target.value);
}
const hsncodeChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) =>{
  setEnteredHsncode(event.target.value);
}
// const vehiclecategoryChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
//   setEnteredVehiclecategory(event.target.value);
// };
const typeChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredType(event.target.value);
};
const unitChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredUnit(event.target.value);
};
const taxChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredTax(event.target.value);
};
const modelnoChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredModelno(event.target.value);
};
const vehiclenoChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredVehicleno(event.target.value);
};
const simnoChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredSimno(event.target.value);
};
const serialnoChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredSerialno(event.target.value);
};
const chassisnoChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredChassisno(event.target.value);
};
const purchaseyearChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredPurchaseyear(event.target.value);
};
const undercontrolChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredUndercontrol(event.target.value);
};
const departmentChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredDepartment(event.target.value);
};
const designationChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredDesignation(event.target.value);
};
const vehicletypeChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredVehicletype(event.target.value);
};
const brandnameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredBrandname(event.target.value);
};
const fueltypeChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredFueltype(event.target.value);
};
const emptyweightChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredEmptyweight(event.target.value);
};
const litreChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredLitre(event.target.value);
};
const kmChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredKm(event.target.value);
};
const deviceidChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredDeviceid(event.target.value);
};
const rfid1ChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredRfid1(event.target.value);
};
const rfid2ChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredRfid2(event.target.value);
};
const fuelChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredFuel(event.target.value);
};
// const fileChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
//   setEnteredFile(event.target.value);
// };

interface FilmOptionType {
  label : string;
  value: string;
}




const submitHandler = (event: { preventDefault: () => void; }) => {
  event.preventDefault();

  

  //console.log(collectData);
  //const Adddata = (vehicleID: Array<any> = []) => {
    setLoading(false)
    let vehArr = ""
    //vehArr = `[${(vehicleID)}]`
    // let param = {
    //   fromDate: "2023-06-24T05:17:37.241Z",
    //   toDate: "2023-07-01T05:17:37.241Z",
    //   vehileID: vehArr,
    //   allVehicles: true
    // }
    const collectData = {
       
        VehileID: "-1",
        VehileName: enteredVehiclename,
        VehileCode: enteredVehiclecode,
        VehileCatID: "1",
        VehileTypeID: "1",
        DeviceID: "12342",
        Epc: "",
        PurchaseYear: "1",
        ModelNo: enteredModelno,
        SerialNo: enteredSerialno,
        VehicleNo: "12341",
        ChesisNo: "",
        VehicleEmptyWeight: "0",
        U01_CreateBYID: "",
        U01_ModifyBYID: "",
        EntryDate:  new Date(),
        UpdateDate:  new Date(),
        imageBase64: "",
        // VehileID: -1,
        // VehileName: enteredVehiclename,
        // VehileCode: enteredVehiclecode,
        // VehileCatID: enteredVehiclecategory,
        // VehileTypeID: enteredVehicletype,
        // DeviceID: enteredDeviceid,
        // Epc: "",
        // PurchaseYear: enteredPurchaseyear,
        // ModelNo: enteredModelno,
        // SerialNo: enteredSerialno,
        // VehicleNo: enteredVehicleno,
        // ChesisNo: enteredChassisno,
        // VehicleEmptyWeight: enteredEmptyweight,
        // U01_CreateBYID: "",
        // U01_ModifyBYID: "",
        // EntryDate: "",
        // UpdateDate: "",
        // imageBase64: "",
       
        // zone: enteredZone,
        // hsncode: enteredHsncode,
        // type: enteredType,
        // unit: enteredUnit,
        // tax: enteredTax,
        // simno: enteredSimno, 
        // undercontrol: enteredUndercontrol,
        // department: enteredDepartment,
        // designation: enteredDesignation,
        // brandname: enteredBrandname,
        // fueltype: enteredFueltype,
        // litre: enteredLitre,
        // km: enteredKm,
        // rfid1: enteredRfid1,
        // rfid2: enteredRfid2,
        // fuel: enteredFuel,
       
      }
    console.log(collectData)
    axios.post(`https://localhost:59928/api/Vehicle/SaveVehicledata`, collectData)
      .then(res => {
        console.log(res.data)
        //setData2(JSON.parse(res.data))
        //console.log("data22222222" + data2)
        //console.log("data2222" +  res.data['isSuccess'])
        console.log("data2222" +  res.data.isSuccess)
        if(res.data.isSuccess){
          alert(res.data.msg)
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
        setLoading(true)
    })
  //};

  // setEnteredZone('');
  // setEnteredVehiclename('');
  // setEnteredVehiclecode('');
  // setEnteredHsncode('');
  // setEnteredVehiclecategory('');
  // setEnteredType('');
  // setEnteredUnit('');
  // setEnteredTax('');
  // setEnteredModelno('');
  // setEnteredVehicleno('');
  // setEnteredSimno('');
  // setEnteredSerialno('');
  // setEnteredChassisno('');
  // setEnteredPurchaseyear('');
  // setEnteredUndercontrol('');
  // setEnteredDepartment('');
  // setEnteredDesignation('');
  // setEnteredVehicletype('');
  // setEnteredBrandname('');
  // setEnteredFueltype('');
  // setEnteredEmptyweight('');
  // setEnteredLitre('');
  // setEnteredKm('');
  // setEnteredDeviceid('');
  // setEnteredRfid1('');
  // setEnteredRfid2('');
  // setEnteredFuel('');
  // setEnteredFile('');
}
//backend connection code end

  return (
    <div>
      <Grid xs={12} sm={4}  item >
      <Typography variant='h5' align='center' style={{marginTop:'10px',fontSize:'25px', fontWeight:500 }}  >
        VEHICLE MASTER
      </Typography></Grid><br />

    
      <Grid xs={4} sm={12}  item >
      <Typography style={{ marginTop: '-90px', marginLeft: '98px',  }}>
        {/* <h1><ArrowBackSharpIcon variant='blue' style={{ marginLeft: '10px', marginTop: '50px',backgroundColor:'red' }} /></h1> */}
        <Button onClick={()=> back(-1)} type='submit' variant='contained' style={{ marginBottom:15, marginTop: '100px', backgroundColor:'blue', width:20 }}><ArrowBackSharpIcon/></Button>
        </Typography>
      </Grid>

      <div style={{ maxWidth: 900, margin: '-25px auto', padding: '5px 5px', height: 450 }}>
        <CardContent>
          <Grid xs={12} sm={4}  item >
          <Typography style={{ marginBottom: '15px', paddingTop: '5px', paddingLeft: '10px', width: 858, height: 40, backgroundColor: '#B7FDAC', fontSize:'20px', fontWeight:500, borderRadius: 3 }}>Create Vehicle Master</Typography>
          </Grid>
          <form onSubmit={submitHandler}>
            <Grid container spacing={1.5}>

            <Grid xs={12} sm={4} item >
                <TextField select label="Zone" value= {enteredZone}   defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {zoneChangeHandler}>
                  {option.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>


              <Grid xs={12} sm={4} item >
              
                <TextField label='Vehicle Name' value= {enteredVehiclename} placeholder='Enter Vehicle Name' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {vehiclenameChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4}  item >
                <TextField label='Vehicle Code' value={enteredVehiclecode}  placeholder='Enter Vehicle Code' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {vehiclecodeChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField label='HSN Code' value= {enteredHsncode}    placeholder='Enter Vehicle No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {hsncodeChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                {/* <TextField select label="Category" value= {enteredVehiclecategory}   defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {vehiclecategoryChangeHandler}>
                  {option1.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField> */}
                 <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={option1}
                fullWidth
                onOpen={() => {
                  getVehicleCategory();
                }}
                value= {enteredVehiclecategory}
                size='small'
              onChange={(event: any, newValue: FilmOptionType | null) => {

                setEnteredVehiclecategory(newValue);
              }}
      //onChange= {vehiclecategoryChangeHandler}
      renderInput={(params) => <TextField {...params} label="Category" />}
    />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField select label="Type" value= {enteredType}   defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {typeChangeHandler}>
                  {option2.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField select label="Unit" value= {enteredUnit}   defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {unitChangeHandler}>
                  {option3.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField select label="Tax" value= {enteredTax}   defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {taxChangeHandler}>
                  {option4.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>


              <Grid xs={12} sm={4} item >
                <TextField type='text' value= {enteredModelno}  label='Model No'     placeholder='Enter Model No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {modelnoChangeHandler} />
              </Grid>


              <Grid xs={12} sm={4} item >
                <TextField label='Vehicle No' value= {enteredVehicleno}    placeholder='Enter Vehicle No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {vehiclenoChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField label='Sim no' value= {enteredSimno}    placeholder='Enter Sim No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {simnoChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='text' value= {enteredSerialno} label='Serial No'    placeholder='Enter Serial No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {serialnoChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='text' value= {enteredChassisno} label='Chassis No'    placeholder='Enter Chassis No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {chassisnoChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField  label="Purchase Year" placeholder='Enter Purchase Year' value= {enteredPurchaseyear}    size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {purchaseyearChangeHandler}>
                </TextField>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField select label="UnderControlOff" value= {enteredUndercontrol}   defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {undercontrolChangeHandler}>
                  {option5.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='text' value= {enteredDepartment}   label='Department' placeholder='Enter Department' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {departmentChangeHandler}/>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='text' value= {enteredDesignation}   label='Designation' placeholder='Enter Designation' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {designationChangeHandler}/>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField select label="Vehicle Type" value= {enteredVehicletype}   defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {vehicletypeChangeHandler}>
                  {option6.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField select label="Brand Name" value= {enteredBrandname}   defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {brandnameChangeHandler}>
                  {option7.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField select label="Fuel Type" value= {enteredFueltype}   defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {fueltypeChangeHandler}>
                  {option8.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='text' value= {enteredEmptyweight} label='Vehicle Weight'   placeholder='Enter Empty Weight' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {emptyweightChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='text' value= {enteredLitre} label='Litre Per Hour'   placeholder='Enter Litre Per Hour' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {litreChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='text' value= {enteredKm} label='KM Per Litre'   placeholder='Enter KM Per Litre' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {kmChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='text' value= {enteredDeviceid} label='Device No'  placeholder='Enter Device No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {deviceidChangeHandler}/>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='text' value= {enteredRfid1} label='RFID-1'   placeholder='Enter RFID-1' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {rfid1ChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='text' value= {enteredRfid2} label='RFID-2'   placeholder='Enter RFID-2' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {rfid2ChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='text' value= {enteredFuel} label='Fuel Alloted'   placeholder='Enter Fuel Alloted' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {fuelChangeHandler} />
              </Grid>

              {/* <Grid xs={12} sm={4} item >
                <span>Vehicle Image</span>
                <TextField type='file' value= {enteredFile} size='small'  fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} onChange= {fileChangeHandler}/>
              </Grid> */}

              


              <Grid xs={12} item >
                <Button type='submit' variant='contained' style={{marginLeft:400, backgroundColor:'#059669'}}>Submit</Button>
              </Grid>
              <Grid xs={12} item >
                <Button type='reset' variant='contained' style={{marginLeft:530, marginTop:-83, backgroundColor:'#F43F5E'}}>Reset</Button>
              </Grid>

            </Grid>
          </form>

        </CardContent>
      </div>

    </div>
  );
};

export default VehicleMasterAdd;