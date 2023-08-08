import { Button, Card, CardContent, Grid, TextField, Typography, MenuItem} from '@mui/material'
import React, {useState} from 'react'
import EmployeeCommunicationDetails from './EmployeeCommunicationDetails';
//import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';


const option = [
  { value: 'EUR', label: '---Select---', },
  { value: 'male', label: 'Male', },
  { value: 'female', label: 'Female', },
];

const option1= [
  { value: 'EUR', label: '---Select---', },
  { value: 'working', label: 'Working', },
  { value: 'not working', label: 'Not Working', },
  { value: 'leave', label: 'Leave', },
];

export default function EmployeeMainDetails() {

 //backend connection code start
const [enteredName, setEnteredName] = useState('');
const [enteredCode, setEnteredCode] = useState('');
const [enteredFathername, setEnteredFathername] = useState('');
const [enteredMothername, setEnteredMothername] = useState('');
const [enteredGender, setEnteredGender] = useState('');
const [enteredDob, setEnteredDob] = useState('');
const [enteredMobileno, setEnteredMobileno] = useState('');
const [enteredEmail, setEnteredEmail] = useState('');
const [enteredPanno, setEnteredPanno] = useState('');
const [enteredAadharno, setEnteredAadharno] = useState('');
const [enteredJoiningdate, setEnteredJoiningdate] = useState('');
const [enteredRetirementdate, setEnteredRetirementdate] = useState('');
const [enteredStatus, setEnteredStatus] = useState('');


const nameChangeHandler = (event: any) =>{
  setEnteredName(event.target.value);
}
const codeChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredCode(event.target.value);
};
const fathernameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredFathername(event.target.value);
};
const mothernameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredMothername(event.target.value);
};
const genderChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredGender(event.target.value);
};
const dobChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredDob(event.target.value);
};
const mobilenoChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredMobileno(event.target.value);
};
const emailChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredEmail(event.target.value);
};
const pannoChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredPanno(event.target.value);
};
const aadharnoChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredAadharno(event.target.value);
};
const joiningdateChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredJoiningdate(event.target.value);
};
const retirementdateChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredRetirementdate(event.target.value);
};
const statusChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setEnteredStatus(event.target.value);
};

const submitHandler = (event: { preventDefault: () => void; }) => {
  event.preventDefault();

  const collectData = {
    name: enteredName,
    code: enteredCode, 
    fathername: enteredFathername,
    mothername: enteredMothername,
    gender: enteredGender,
    dob: enteredDob,
    mobileno: enteredMobileno,
    email: enteredEmail,
    panno: enteredPanno,
    aadharno: enteredAadharno,
    joiningdate: enteredJoiningdate,
    retirementdate: enteredRetirementdate,
    status: enteredStatus,
  }
  console.log(collectData);

  setEnteredName('');
  setEnteredCode('');
  setEnteredFathername('');
  setEnteredMothername('');
  setEnteredGender('');
  setEnteredDob('');
  setEnteredMobileno('');
  setEnteredEmail('');
  setEnteredPanno('');
  setEnteredAadharno('');
  setEnteredJoiningdate('');
  setEnteredRetirementdate('');
  setEnteredStatus('');
}
//backend connection code end
 
  
  return (
    <div>


      <div style={{ width: 900, marginLeft: -35, padding: '-5px 5px', height: 370, marginTop: -25 }}>
        <CardContent>
          <Typography style={{ marginBottom: '10px', paddingTop: '0px', paddingLeft: '10px', width: 868, height: 35, backgroundColor: '#B7FDAC', fontSize: '20px', fontWeight: 500, borderRadius: 5 }}>Fill Main Details</Typography>
          <form onSubmit={submitHandler}>
            <Grid container spacing={1}>

              <Grid xs={12} sm={4} item >
                <TextField label='Name' value={enteredName} placeholder='Enter Name' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF', marginBottom: '10px' }} onChange= {nameChangeHandler}/>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField label='Code' value={enteredCode} placeholder='Enter Code' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF', marginBottom: '10px' }} onChange= {codeChangeHandler}/>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField label='Father Name' value={enteredFathername} placeholder='Enter Father Name' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF', marginBottom: '10px' }} onChange= {fathernameChangeHandler}/>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField label='Mother Name' value={enteredMothername} placeholder='Enter Mother Name' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF', marginBottom: '10px' }} onChange= {mothernameChangeHandler} />
              </Grid>


              <Grid xs={12} sm={4} item >
                <TextField select label="Select Gender" value={enteredGender} size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {genderChangeHandler}>
                  {option.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='date' value={enteredDob} label='DOB' size='small' InputLabelProps={{ shrink: true, }} fullWidth  style={{ backgroundColor: '#EEF2FF', marginBottom: '10px' }} onChange= {dobChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='number' value={enteredMobileno} label='Mobile No' placeholder='Enter Mobile No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF', marginBottom: '10px' }} onChange= {mobilenoChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='email' value={enteredEmail} label='Email' placeholder='Enter Email' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF', marginBottom: '20px' }} onChange= {emailChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='text' value={enteredPanno} label='PAN No' placeholder='Enter PAN No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF', marginBottom: '10px' }} onChange= {pannoChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='number' value={enteredAadharno} label='Aadhar No' placeholder='Enter Aadhar No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF', marginBottom: '10px' }}  onChange= {aadharnoChangeHandler}/>
              </Grid>

              <Grid xs={12} sm={4} item >
                
                <TextField  label="Joining Date" value={enteredJoiningdate} type="date" size='small' fullWidth  InputLabelProps={{ shrink: true, }} style={{ backgroundColor: '#EEF2FF' }} onChange= {joiningdateChangeHandler} />
              </Grid>

              <Grid xs={12} sm={4} item >
                <TextField type='date' value={enteredRetirementdate} label='Retirement Date' InputLabelProps={{ shrink: true, }}  size='small' fullWidth  style={{ backgroundColor: '#EEF2FF', marginBottom: '10px' }} onChange= {retirementdateChangeHandler} />
              </Grid>
              

              <Grid xs={12} sm={4} item >
                <TextField select label="Select Status" value={enteredStatus}  size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }} onChange= {statusChangeHandler}>
                  {option1.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>



              <Grid xs={12} item >
                <Button variant='contained' style={{ marginLeft: 400, backgroundColor: '#059669' }}  >Next</Button>
              </Grid>
              <Grid xs={12} item >
                <Button variant='contained' style={{ marginLeft: 530, marginTop: -78, backgroundColor: '#F43F5E' }}>Reset</Button>
              </Grid>

            </Grid>
          </form>

        </CardContent>
      </div>
    </div>
  )
}
