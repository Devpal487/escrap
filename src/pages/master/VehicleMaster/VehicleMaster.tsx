import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import PrintIcon from '@mui/icons-material/Print';
import DeleteIcon from '@mui/icons-material/Delete';
//import {  TablePagination } from '@material-ui/core';
import { useEffect,useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { GridToolbarDensitySelector, GridToolbarFilterButton,} from '@mui/x-data-grid';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme } from '@mui/material/styles';
//import { createStyles, makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import axios from 'axios';
import { VehicleAllDetails, WeightChart } from '../../../type';

function createData(name: JSX.Element, name1: JSX.Element, srno: number, vehicleno: string, vehiclename: string, purchaseyear: number, deviceid: number, chassisno: number) {
  return { name, name1, srno, vehicleno, vehiclename, purchaseyear, deviceid, chassisno};
}

// const rows = [
//   createData(<EditIcon/>,<DeleteIcon/>, 1, 'UP93 AN 4444', 'Loader', 2021, 25256, 2568541 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 2, 'UP93 AN 4545', 'Truck' , 2015, 46253, 6523655 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 3, 'UP93 AN 1234', 'Dumper', 2021, 79562, 1478523 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 4, 'UP93 JS 2352', 'Loader', 2019, 36254, 5896589 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 5, 'UP93 JS 2525', 'Truck' , 2020, 13265, 7985652 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 6, 'UP93 AN 6666', 'Loader', 2022, 58692, 6523652 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 7, 'UP93 AN 5246', 'Loader', 2012, 58692, 6523652 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 8, 'UP93 AN 3652', 'Loader', 2023, 58692, 6523652 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 9, 'UP93 AN 4562', 'Dumper', 2021, 58692, 6523652 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 10, 'UP93 AN 4652', 'Loader', 2016, 58692, 6523652 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 11, 'UP93 AN 8956', 'Dumper', 2013, 58692, 1546521 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 12, 'UP93 AN 2525', 'Loader', 2014, 58692, 4698536 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 13, 'UP93 AN 1256', 'Loader', 2016, 58692, 13958745 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 14, 'UP93 AN 3626', 'Truck', 2022, 58692, 1462589 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 15, 'UP93 AN 1474', 'Loader', 2021, 58692, 14556952 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 16, 'UP93 AN 6548', 'Dumper', 2023, 58692, 1256352 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 17, 'UP93 AN 1452', 'Loader', 2019, 58692, 1462571 ),
//   createData(<EditIcon/>,<DeleteIcon/>, 18, 'UP93 AN 7854', 'Truck', 2014, 58692, 1235954 ),
  
// ];


type Props = {};

const VehicleMaster = (props: Props) => {

// const [currentPage, setCurrentPage] =useState


// Pagination Related Code Start
const  [maindata, setMaindata]  = React.useState([
 
]);
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(5);
const [searchText, setSearchText] = React.useState('');
const [rows, setRows] = React.useState<any[]>(maindata);
const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event: { target: { value: string | number; }; }) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

const [vehicleList, setVehicleList] = useState<VehicleAllDetails[]>([]);
useEffect(() => {
 
   getVehicleList();
   
 }, [])
 
  
 const getVehicleList = () => {
   axios.get(`https://localhost:59928/api/Vehicle/GetVehicleList`)
     .then(res => {
       
       setVehicleList(res.data.result);
       const arr = [];
       for (let index = 0; index < res.data.result.length; index++) {
        const element = res.data.result[index]['vehileID'];
        //console.log(element);
        arr.push({ sr_no: index+1, id: res.data.result[index]['vehileID'], VEHICLE_NO:  res.data.result[index]['vehicleNo'], VEHICLE_NAME:  res.data.result[index]['vehileName'], PURCHASE_YEAR:  res.data.result[index]['purchaseYear'], DEVICE_ID:  res.data.result[index]['deviceID'], CHASSIS_NO:  res.data.result[index]['chesisNo'] });

       }
      setRows(arr);
     })
 }

  const handleEditClick = () => {
            // some action
        }
        const handledeleteClick = () => {
          // some action
      }
        
      

const columns: GridColDef[] = [
 // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    width: 140,
   // disableClickEventBubbling: true,
    renderCell: (params) => {
        return (
            <div className="d-flex justify-content-between align-items-center" >
               <IconButton color="secondary" aria-label="add an alarm" onClick={handleEditClick} >
                     <EditIcon  />
                 </IconButton>
                 <IconButton color="secondary" aria-label="add an alarm" onClick={handledeleteClick} >
                     <DeleteIcon  />
                 </IconButton>
             </div>
        //      <FormControlLabel
        //      control={
        //          <IconButton color="secondary" aria-label="add an alarm" onClick={handleEditClick} >
        //              <EditIcon style={{ color: blue[500] }} />
        //          </IconButton>
        //      }
        //  />
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
    field: 'VEHICLE_NO',
    headerName: 'VEHICLE NO',
    width: 180,
    editable: false,
  },
  {
    field: 'VEHICLE_NAME',
    headerName: 'VEHICLE NAME',
    //type: 'number',
    width: 250,
    editable: false,
  },
  {
    field: 'PURCHASE_YEAR',
    headerName: 'PURCHASE YEAR',
    //type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'DEVICE_ID',
    headerName: 'DEVICE ID',
    //type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'CHASSIS_NO',
    headerName: 'CHASSIS NO',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];
//Pagination Related Code End


// Search Code Start
// const [value, setValue] = useState('');
// const [dataSource, setDataSource] = useState(rows);
// const [tableFilter, setTableFilter] = React.useState([]);

// const filterData = (e: any) =>{
// if(e.target.value != ''){
//   setValue(e.target.value);
//   const filterTable = dataSource.filter(o=>Object.keys(o).some(k=>
//     String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
//     ));
//     setTableFilter([...filterTable])
// }else{
//   setValue(e.target.value);
//   setDataSource([...dataSource])
// }
// }
// Search Code End
// Search Code start new
const requestSearch = (searchValue: string) => {
  setSearchText(searchValue);
  const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
  const filteredRows = maindata.filter((row: any) => {
    return Object.keys(row).some((field: any) => {
      return searchRegex.test(row[field].toString());
    });
  });
  setRows(filteredRows);
};
let navigate = useNavigate(); 
const routeChange = () =>{ 
  let path = `/master/VehicleMasterAdd`; 
  navigate(path);
}
function escapeRegExp(value: string): string {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
interface QuickSearchToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
}
const defaultTheme = createTheme();
// const useStyles = makeStyles(
//   (theme) =>
//     createStyles({
//       root: {
//         padding: theme.spacing(0.5, 0.5, 0),
//         justifyContent: 'space-between',
//         display: 'flex',
//         alignItems: 'flex-start',
//         flexWrap: 'wrap',
//       },
//       textField: {
//         [theme.breakpoints.down('xs')]: {
//           width: '100%',
//         },
//         margin: theme.spacing(1, 0.5, 1.5),
//         '& .MuiSvgIcon-root': {
//           marginRight: theme.spacing(0.5),
//         },
//         '& .MuiInput-underline:before': {
//           borderBottom: `1px solid ${theme.palette.divider}`,
//         },
//       },
//     }),
//   { defaultTheme },
// );
function QuickSearchToolbar(props: QuickSearchToolbarProps) {
 // const classes = useStyles();

  return (
    <div 
    //className={classes.root}
    >
      <div>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </div>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        //className={classes.textField}
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

const [search, setSearch] = useState('')
// Search Code End new

    return (
        <div>

      <h3 style={{textAlign:'center', marginTop:0 }}>VEHICLE MASTER</h3> 
      <h3 style={{marginLeft: 90}}>Vehicle Master</h3>
      <Button onClick={routeChange} sx={{ color: green[500], fontSize: 25, display:'flex',marginLeft:30,marginTop:-6, marginBottom:5 }}><AddCircleIcon/></Button>
      <Button style={{marginLeft:315, marginTop: -75, display:'flex', marginBottom:10, color:'blue' }}><PrintIcon/></Button>


      {/* <div style={{ float:'right',marginBottom:5,marginTop: -40, marginRight:30}}>
            <input type='text' onChange={(e) => setSearch(e.target.value)} placeholder='Search By Vehicle No......'  aria-describedby='basic-addon1' 
             style={{width:300, height:30}} />
          </div> */}

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
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
              requestSearch(event.target.value),
            clearSearch: () => requestSearch(''),
          },
        }}
        disableRowSelectionOnClick
      />
    </Box>
      
{/* <Paper>
  
<TableContainer>
<Table sx={{ minWidth: 650 }} aria-label="simple table">


<TableHead style={{backgroundColor:'#B7FDAC'}}>
  <TableRow >
    
    <TableCell align="left">ACTION</TableCell>
    <TableCell>SR NO</TableCell>
    <TableCell align="left">VEHICLE NO</TableCell>
    <TableCell align="left">VEHICLE NAME</TableCell>
    <TableCell align="left">PURCHASE YEAR</TableCell>
    <TableCell align="left">DEVICE ID</TableCell>
    <TableCell align="left">CHASSIS NO</TableCell>
  </TableRow>
</TableHead>


<TableBody>
  {rows.filter((row) => {
    return search.toLowerCase() === ''? row : row.vehicleno.toLowerCase().includes(search);
  })
  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  
  .map((row:any) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      
    >
      <TableCell component="th" scope="row">
        {row.name}    {row.name1}
      </TableCell>
      <TableCell align="left">{row.srno}</TableCell>
      <TableCell align="left">{row.vehicleno}</TableCell>
      <TableCell align="left">{row.vehiclename}</TableCell>
      <TableCell align="left">{row.purchaseyear}</TableCell>
      <TableCell align="left">{row.deviceid}</TableCell>
      <TableCell align="left">{row.chassisno}</TableCell>
    </TableRow>
      ))
      }
      
</TableBody>

</Table>
</TableContainer>



 <div style={{float:'right', width: 400,height:50, backgroundColor:'greenyellow'}}>
    <TablePagination
        rowsPerPageOptions={[5, 10,15,20,25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div> 
</Paper> */}
    
    </div>

    );
};

export default VehicleMaster;