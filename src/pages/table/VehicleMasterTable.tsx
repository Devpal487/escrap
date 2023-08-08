import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import PrintIcon from '@mui/icons-material/Print';
import DeleteIcon from '@mui/icons-material/Delete';
//import {  TablePagination } from '@material-ui/core';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';



function createData(name: JSX.Element, name1: JSX.Element, srno: number, vehicleno: string, vehiclename: string, purchaseyear: number, deviceid: number, chassisno: number) {
  return { name, name1, srno, vehicleno, vehiclename, purchaseyear, deviceid, chassisno};
}

const rows = [
  createData(<EditIcon/>,<DeleteIcon/>, 1, 'UP93 AN 4444', 'Loader', 2021, 25256, 2568541 ),
  createData(<EditIcon/>,<DeleteIcon/>, 2, 'UP93 AN 4545', 'Truck' , 2015, 46253, 6523655 ),
  createData(<EditIcon/>,<DeleteIcon/>, 3, 'UP93 AN 1234', 'Dumper', 2021, 79562, 1478523 ),
  createData(<EditIcon/>,<DeleteIcon/>, 4, 'UP93 JS 2352', 'Loader', 2019, 36254, 5896589 ),
  createData(<EditIcon/>,<DeleteIcon/>, 5, 'UP93 JS 2525', 'Truck' , 2020, 13265, 7985652 ),
  createData(<EditIcon/>,<DeleteIcon/>, 6, 'UP93 AN 6666', 'Loader', 2022, 58692, 6523652 ),
  createData(<EditIcon/>,<DeleteIcon/>, 7, 'UP93 AN 5246', 'Loader', 2012, 58692, 6523652 ),
  createData(<EditIcon/>,<DeleteIcon/>, 8, 'UP93 AN 3652', 'Loader', 2023, 58692, 6523652 ),
  createData(<EditIcon/>,<DeleteIcon/>, 9, 'UP93 AN 4562', 'Dumper', 2021, 58692, 6523652 ),
  createData(<EditIcon/>,<DeleteIcon/>, 10, 'UP93 AN 4652', 'Loader', 2016, 58692, 6523652 ),
  createData(<EditIcon/>,<DeleteIcon/>, 11, 'UP93 AN 8956', 'Dumper', 2013, 58692, 1546521 ),
  createData(<EditIcon/>,<DeleteIcon/>, 12, 'UP93 AN 2525', 'Loader', 2014, 58692, 4698536 ),
  createData(<EditIcon/>,<DeleteIcon/>, 13, 'UP93 AN 1256', 'Loader', 2016, 58692, 13958745 ),
  createData(<EditIcon/>,<DeleteIcon/>, 14, 'UP93 AN 3626', 'Truck', 2022, 58692, 1462589 ),
  createData(<EditIcon/>,<DeleteIcon/>, 15, 'UP93 AN 1474', 'Loader', 2021, 58692, 14556952 ),
  createData(<EditIcon/>,<DeleteIcon/>, 16, 'UP93 AN 6548', 'Dumper', 2023, 58692, 1256352 ),
  createData(<EditIcon/>,<DeleteIcon/>, 17, 'UP93 AN 1452', 'Loader', 2019, 58692, 1462571 ),
  createData(<EditIcon/>,<DeleteIcon/>, 18, 'UP93 AN 7854', 'Truck', 2014, 58692, 1235954 ),
  
];


type Props = {};

const VehicleMasterTable = (props: Props) => {


// Pagination Related Code Start
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(5);

const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event: { target: { value: string | number; }; }) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};
// Pagination Related Code End


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
const [search, setSearch] = useState('')


    return (
        <div>

      <h3 style={{textAlign:'center', marginTop:10 }}>VEHICLE MASTER</h3> 
      <h3 style={{marginLeft: 100}}>Vehicle Master</h3>
      <span><Icon sx={{ color: green[500], fontSize: 30, display:'flex',marginLeft:32,marginTop:-5.5, marginBottom:5 }}><AddCircleIcon/></Icon></span>
      <span style={{marginLeft:310, marginTop: -70, display:'flex', marginBottom:10, color:'blue' }}><PrintIcon/></span>


      <div style={{ float:'right',marginBottom:5,marginTop: -40, marginRight:10}}>
            <input type='text' onChange={(e) => setSearch(e.target.value)} placeholder='Search Here......'  aria-describedby='basic-addon1' 
             style={{width:300, height:30}} />
          </div>


      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">

{/* tabel Head start */}
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
{/* tabel Head end */}


        <TableBody>
          {rows.filter((row) => {
            return search.toLowerCase() === ''? row : row.vehicleno.toLowerCase().includes(search);
          })
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row:any) => (
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
    {/* <div style={{float:'right'}}>
    <TablePagination
        rowsPerPageOptions={[5, 10,15,20,25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div> */}
    </div>


    );
};

export default VehicleMasterTable;