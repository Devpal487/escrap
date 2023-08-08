import { Button, Card, CardContent, Grid, TextField, Typography, } from '@mui/material'
import React, { useEffect,useState,useRef } from 'react'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import axios from 'axios';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { GridToolbarDensitySelector, GridToolbarFilterButton,} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from "react-router-dom";
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import PrintIcon from '@mui/icons-material/Print';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
type Props = {};

const VehicleType = (props: Props) => {

  const [enteredVehicletypename, setEnteredVehicletypename] = useState('');
  const [enteredVehiclecode, setEnteredVehiclecode] = useState('');
  const [enteredShortname, setEnteredShortname] = useState('');
  const  [maindata, setMaindata]  = React.useState([]);
  const  [listdata, setListdata]  = React.useState([{}]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchText, setSearchText] = React.useState('');
  //const [delete_id, setDelete_id] = React.useState('');
  const [rows, setRows] = React.useState<any[]>(maindata);
  const toast = useRef(null);
  //const [vehicleList, setVehicleList] = useState<VehicleAllDetails[]>([]);
  let delete_id='';
  useEffect(() => {
   
     getVehicleTypeList();
     
   }, [])
  const vehicletypenameChangeHandler = (event: any) => {
      setEnteredVehicletypename(event.target.value);
  }
  const vehiclecodeChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setEnteredVehiclecode(event.target.value);
  };
  const shortnameChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setEnteredShortname(event.target.value);
  };

  const getVehicleTypeList = () => {
    axios.get(`https://localhost:59928/api/Master/GetVehicleType/-1`)
      .then(res => {
        
        //setVehicleList(res.data.result);
        const arr = [];
        console.log( "result "+ JSON.stringify(res.data.result));
        for (let index = 0; index < res.data.result.length; index++) {
        // const element = res.data.result[index]['vehileID'];
         //console.log(element);
         arr.push({ sr_no: index+1, id: res.data.result[index]['vehicleTypeID'], vehicleTypeCode:  res.data.result[index]['vehicleTypeCode'], vehicleTypeName:  res.data.result[index]['vehicleTypeName'], VehicleShortName:res.data.result[index]['vehicleShortName']});
 
        }
        console.log(arr)
       setRows(arr);
       setListdata(arr);
       //setMaindata(arr)
      })
  }
  const accept = () => {
    //toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    
    const collectData = {
      VehicleTypeID: delete_id,
      Type:2,
      vehicleTypeCode: "",
      vehicleTypeName: "",
      vehicleShortName: "",
      isActive: true
    }
    console.log(collectData)
    axios.post(`https://localhost:59928/api/Vehicle/SaveVehicleTypeData`,collectData )
    .then(res => {
      console.log(res.data)
      
      console.log("data2222" +  res.data.isSuccess)
      if(res.data.isSuccess){
        alert(res.data.msg)
        getVehicleTypeList();
      }else {
        alert(res.data.msg)
      }
  })
}

const reject = () => {
    //toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
}
  const handledeleteClick = (del_id:any) => {
    console.log(del_id);
    delete_id=del_id;
    //setDelete_id(del_id);
    confirmDialog({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptClassName: 'p-button-danger',
        accept,
        reject
    });
};
  const resetHandler = (event: { preventDefault: () => void; }) => {
      event.preventDefault();

      

      setEnteredVehicletypename('');
      setEnteredVehiclecode('');
      setEnteredShortname('');
  }
  

let navigate = useNavigate(); 
const routeChangeAdd = () =>{ 
  let path = `/master/VehicleTypeAdd`; 
  navigate(path);
}
const findArrayElementByTitle = (array: any[], title: any)=> {
  return array.find((element) => {
    return element.id === title;
  })
}
const routeChangeEdit =  (edit_id: any) =>  { 
  console.log(edit_id);
  var array_parameterdata=findArrayElementByTitle(listdata,edit_id);
  console.log(array_parameterdata); 
  
  let path = `/master/VehicleTypeEdit`; 
  navigate(path,{
    state: array_parameterdata,
});
  //{text: "hello"}
}
const routeChangeDelete = () =>{ 
  let path = `/master/VehicleTypeAdd`; 
  navigate(path);
}

  const columns: GridColDef[] = [
     //{ field: 'id', headerName: 'ID', width: 90 },
     {
       field: "actions",
       headerName: "Actions",
       sortable: false,
       width: 140,
      // disableClickEventBubbling: true,
       renderCell: (params) => {
           return (
               <div className="d-flex justify-content-between align-items-center" >
                  <IconButton color="secondary" aria-label="add an alarm" onClick={() =>routeChangeEdit(params.id)} >
                        <EditIcon  />
                    </IconButton>
                    <IconButton color="secondary" aria-label="add an alarm" onClick={()=>handledeleteClick(params.id)} >
                        <DeleteIcon  />
                    </IconButton>
                </div>
          
           );
        }
     },
     {
       field: 'sr_no',
       headerName: 'SR NO',
       width: 100,
       editable: false,
     },
     {
       field: 'vehicleTypeName',
       headerName: 'Vehicle Type Name',
       width: 180,
       editable: false,
     },
     {
       field: 'vehicleTypeCode',
       headerName: 'Vehicle Code',
       //type: 'number',
       width: 250,
       editable: false,
     },
     {
       field: 'VehicleShortName',
       headerName: 'Short Name',
       //type: 'number',
       width: 110,
       editable: false,
     },
     
   ];

  return (
    <div>
            <Typography variant='h5' align='center' style={{ marginTop: '10px', fontSize: '25px', fontWeight: 500 }}  >
                VEHICLE TYPE
            </Typography>
            <h3 style={{textAlign:'center', marginTop:0 }}>VEHICLE TYPE MASTER</h3> 
      <h3 style={{marginLeft: 90}}>Vehicle TYPE Master</h3>
      <Button onClick={routeChangeAdd} sx={{ color: green[500], fontSize: 25, display:'flex',marginLeft:30,marginTop:-6, marginBottom:5 }}><AddCircleIcon/></Button>
      <Button style={{marginLeft:315, marginTop: -75, display:'flex', marginBottom:10, color:'blue' }}><PrintIcon/></Button>
            {/* <Typography style={{ marginLeft: '300px', fontSize: '20px', fontWeight: 500 }}>
                Vehicle Type
            </Typography >
            <Typography style={{ marginTop: '-77px', marginLeft: '410px', color: 'green' }} ><h1><ArrowBackSharpIcon variant='blue' style={{ marginLeft: '10px', marginTop: '50px' }} /></h1></Typography> */}

            {/* <Grid xs={4} sm={12} item >
                <Typography style={{ marginTop: '-75px', marginLeft: '150px', }}>
                    <Button type='submit' variant='contained' style={{ marginBottom: 15, marginTop: '100px', backgroundColor: 'blue', width: 20 }}><ArrowBackSharpIcon /></Button>
                </Typography>
            </Grid> */}
<Toast ref={toast} />
            <ConfirmDialog />
            <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        //checkboxSelection
        // componentsProps={{
        //   toolbar: {
        //     value: searchText,
        //     onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        //       requestSearch(event.target.value),
        //     clearSearch: () => requestSearch(''),
        //   },
        // }}
        disableRowSelectionOnClick
      />
    </Box>
        </div>

  );
};

export default VehicleType;