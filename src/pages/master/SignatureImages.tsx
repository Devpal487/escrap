import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

export default function SignatureImages() {
  return (
    <div>
      
      <div style={{ maxWidth: 900, marginLeft: -35, padding: '-5px 5px',height: 320}}>
        <CardContent>
          <Typography style={{ marginBottom: '20px', paddingTop: '5px', paddingLeft: '10px', width: 868, height: 35, backgroundColor: '#B7FDAC', fontSize:'20px', fontWeight:500, borderRadius: 5 }}>Upload Sinature And Images</Typography>
          <form>
            <Grid container spacing={1}>


              <Grid xs={12} sm={6} item >
                <span>Upload Image</span>
                <TextField type='file' size='small'  fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} />
              </Grid>

              <Grid xs={12} sm={6} item >
                <span>Upload Signature</span>
                <TextField type='file' size='small'  fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} />
              </Grid>

              <Grid xs={12} sm={6} item >
                <span>PAN Card Image</span>
                <TextField type='file' size='small'  fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} />
              </Grid>

              <Grid xs={12} sm={6} item >
                <span>Aadhar Card Image</span>
                <TextField type='file' size='small'  fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} />
              </Grid>

              <Grid xs={12} sm={6} item >
                <span>Driving License Image</span>
                <TextField type='file' size='small'  fullWidth  style={{ backgroundColor: '#EEF2FF',marginBottom: '10px' }} />
              </Grid>

              <Grid xs={12} item >
                <Button variant='contained' style={{marginLeft:400, backgroundColor:'#059669'}}>Back</Button>
              </Grid>
              <Grid xs={12} item >
                <Button variant='contained' style={{marginLeft:530, marginTop:-78, backgroundColor:'#F43F5E'}}>Submit</Button>
              </Grid>

            </Grid>
          </form>

        </CardContent>
      </div>

    </div>
  )
}
