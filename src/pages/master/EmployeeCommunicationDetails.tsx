import { Button, Card, CardContent, Grid, TextField, Typography, MenuItem } from '@mui/material'
import React from 'react'

const option = [
    { value: 'EUR', label: '---Select---', },
    { value: 'USD', label: 'Engg', },
    { value: 'BTC', label: 'Jal Kal', },
    { value: 'BTC', label: 'Technical', },
  ];
  
  const option1= [
    { value: 'EUR', label: '---Select---', },
    { value: 'USD', label: 'Working', },
    { value: 'BTC', label: 'Not Working', },
    { value: 'BTC', label: 'Leave', },
  ];

  const option2= [
    { value: 'EUR', label: '---Select---', },
    { value: 'USD', label: 'India', },
    { value: 'BTC', label: 'USA', },
    { value: 'BTC', label: 'Nepal', },
  ];

  const option3= [
    { value: 'EUR', label: '---Select---', },
    { value: 'USD', label: 'Uttar Pradesh', },
    { value: 'BTC', label: 'Madhya Pradesh', },
    { value: 'BTC', label: 'Kernataka', },
  ];

  const option4= [
    { value: 'EUR', label: '---Select---', },
    { value: 'USD', label: 'Kanpur', },
    { value: 'BTC', label: 'Unnao', },
    { value: 'BTC', label: 'Jhansi', },
  ];

  const option5= [
    { value: 'EUR', label: '---Select---', },
    { value: 'USD', label: 'Zone-1', },
    { value: 'BTC', label: 'Zone-2', },
    { value: 'BTC', label: 'Zone-3', },
  ];

export default function EmployeeCommunicationDetails() {
  return (
    <div>
      <div style={{ width:900, marginLeft:-35, padding: '-5px 5px',height:250,  }}>
        <CardContent>
          <Typography style={{ marginBottom: '20px', paddingTop: '5px', paddingLeft: '10px', width: 868, height: 35, backgroundColor: '#B7FDAC', fontSize:'20px', fontWeight:500, borderRadius: 5 }}>Communication Details</Typography>
          <form>
            <Grid container spacing={1}>

              <Grid xs={12} sm={4}  item >
                <TextField label='Driving License No' placeholder='Enter Driving License No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} />
              </Grid>


              <Grid xs={12} sm={4} item >
                <TextField select label="Select Department" defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }}>
                  {option.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>


              <Grid xs={12} sm={4} item >
                <TextField select label="Select Designation" defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }}>
                  {option1.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>


              <Grid xs={12} sm={4} item >
                <TextField select label="Select Country" defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }}>
                  {option2.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>


              <Grid xs={12} sm={4} item >
                <TextField select label="Select State" defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }}>
                  {option3.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>


              <Grid xs={12} sm={4} item >
                <TextField select label="Select City" defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }}>
                  {option4.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>


              <Grid xs={12} sm={4} item >
                <TextField select label="Select Zone" defaultValue="EUR" size='small' fullWidth style={{ backgroundColor: '#EEF2FF' }}>
                  {option5.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>


              <Grid xs={12} sm={4} item >
                <TextField type='number' label='PinCode' placeholder='Enter PinCode No' size='small' fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '20px' }} />
              </Grid>

    

              <Grid xs={12} item >
                <Button variant='contained' style={{marginLeft:330, backgroundColor:'#059669'}}>Next</Button>
              </Grid>
              <Grid xs={12} item >
                <Button variant='contained' style={{marginLeft:450, marginTop:-78, backgroundColor:'#F43F5E'}}>Reset</Button>
              </Grid>
              

            </Grid>
          </form>

        </CardContent>
      </div>
    </div>
  )
}
