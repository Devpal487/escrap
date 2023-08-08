//import * as React, { useEffect,useState,useRef } from "react";
import React, { useEffect,useState,useRef } from 'react'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import Swal from "sweetalert2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import PrintIcon from "@mui/icons-material/Print";
import axios from 'axios';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';

interface Column {
  id: "srno" | "ZoneName" | "ZoneAbbrevation";
  label: string;
  minWidth?: number;
  format?: (value: number) => string;
}

// const columns: readonly Column[] = [
//   { id: 'srno', label: 'SR NO', minWidth: 100 },
//   { id: 'ZoneName', label: 'EMPLOYEENAME', minWidth: 170 },
//   {
//     id: 'ZoneAbbrevation',
//     label: 'ZoneAbbrevation',
//     minWidth: 170,
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'designation',
//     label: 'DESIGNATION',
//     minWidth: 170,
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'code',
//     label: 'CODE',
//     minWidth: 170,
//     format: (value: number) => value.toFixed(2),
//   },
//   {
//     id: 'mobile',
//     label: 'MOBILE',
//     minWidth: 170,
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'address',
//     label: 'ADDRESS',
//     minWidth: 170,
//     format: (value: number) => value.toFixed(2),
//   },
// ];

interface Data {
  srno: number;
  ZoneName: string;
  ZoneAbbrevation: string;
}

function createData(

  srno: number,
  id:string,
  ZoneName: string,
  ZoneAbbrevation: string
): any {
  return { srno,id, ZoneName, ZoneAbbrevation };
}

// const rows = [
//   createData(1, "Mr. Amit Yadav", "Executive Engineer"),
//   createData(2, "Mr. Brijesh", "Executive Engineer"),
//   createData(3, "Mr. Anil Kumar Sonkar", "Executive Engineer"),
//   createData(4, "Mr. Jeetu", "Executive Engineer"),
//   createData(5, "Mr. kamal Kumar", "HEALTH"),
//   createData(6, "Mr. Aakash", "HEALTH"),
//   createData(7, "Mr. Afroz Akhtar", "RABISH"),
//   createData(8, "Mr. Ankit Kumar", "RABISH"),
//   createData(9, "Mr. Bablu ", "RABISH"),
//   createData(10, "Mr. Deep", "UDYAN"),
//   createData(11, "Mr. Heera Lal", "RABISH"),
//   createData(12, "Mr. Narendra", "HEALTH"),
//   createData(13, "Mr. Om Prakash", "HEALTH"),
//   createData(14, "Mr. Amit Yadav", "HEALTH"),
//   createData(15, "Mr. Ram Awatar", "HEALTH"),
//   createData(16, "Mr. Anil Kumar Gupta Sonkar", "HEALTH"),
//   createData(17, "Mr. Nishant", "HEALTH"),
//   createData(18, "Mr. Vinit Kumar", "HEALTH"),
//   createData(19, "Mr. Irafan Ulla Khan ", "HEALTH"),
//   createData(20, "Mr. Ansar Khan", "HEALTH"),
//   createData(21, "Mr. Sonu Kumar", "HEALTH"),
//   createData(22, "Mr. Babali  ", "HEALTH"),
// ];
//const rows = [createData(22, "Mr. Babali  ", "HEALTH")];


export default function ZoneMaster() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = React.useState<any>([]);
  const [records, setRecords] = useState(rows);
  //const rows = [createData];

  //Search Filter

  function handleFilter(event: any) {
    const newRows = rows.filter((rowss: { ZoneName: string; }) => {
      return rowss.ZoneName.toLowerCase().includes(
        event.target.value.toLowerCase()
      );
    });
    setRecords(newRows);
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Delete Action Option

  const deleteUser = () => {
    Swal.fire({
      title: "Are you sure ?",
      text: "You won't be able to revert this !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result: any) => {
      if (result.isConfirmed) {
        console.log("Use clicked ok");
        // deleteApi(id);
      } else {
        console.log("Use Clicked Cancel");
      }
    });
  };

  let delete_id='';
  useEffect(() => {
   
     getList();
     
   }, [])
   const getList = () => {
    axios.get(`https://localhost:59928/api/Master/GetZone/-1`)
      .then(res => {
        
        //setVehicleList(res.data.result);
        const arr = [];
        
        console.log( "result "+ JSON.stringify(res.data.result));
        for (let index = 0; index < res.data.result.length; index++) {
        // const element = res.data.result[index]['vehileID'];
         //console.log(element);
        // arr.push({ sr_no: index+1, id: res.data.result[index]['zoneID'], ZoneName:  res.data.result[index]['zoneName'], ZoneAbbrevation:  res.data.result[index]['zoneAbbrevation']});
        arr.push(createData(index+1,res.data.result[index]['zoneID'],res.data.result[index]['zoneName'],res.data.result[index]['zoneAbbrevation']));
        // rows.push(createData(index+1,res.data.result[index]['zoneID'],res.data.result[index]['zoneName'],res.data.result[index]['zoneAbbrevation']));
        // console.log("jsondat"+JSON.stringify(rows))
        }
        
        console.log(arr);
        setRows(arr);
        setRecords(arr);
        console.log(records);
     
      })
  }
  const accept = () => {
    //toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    
    const collectData = {
      ZoneID: delete_id,
      Type:2,
      ZoneName: "",
      ZoneAbbrevation: ""
      
      
    }
    console.log(collectData)
    axios.post(`https://localhost:59928/api/Vehicle/SaveZoneData`,collectData )
    .then(res => {
      console.log(res.data)
      
      console.log("data2222" +  res.data.isSuccess)
      if(res.data.isSuccess){
        alert(res.data.msg)
        getList();
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

let navigate = useNavigate(); 
const routeChangeAdd = () =>{ 
  let path = `/master/ZoneMasterAdd`; 
  navigate(path);
}

const findArrayElementByTitle = (array: any[], title: any)=> {
  return array.find((element) => {
    return element.id === title;
  })
}
// const routeChangeEdit =  (edit_id: any) =>  { 
//   console.log(edit_id);
//   var array_parameterdata=findArrayElementByTitle(listdata,edit_id);
//   console.log(array_parameterdata); 
  
//   let path = `/master/ZoneMasterEdit`; 
//   navigate(path,{
//     state: array_parameterdata,
// });
//   //{text: "hello"}
// }

const routeChangeEdit =  (row: any) =>  { 
  //console.log(edit_id);
  // var array_parameterdata=findArrayElementByTitle(listdata,edit_id);
  // console.log(array_parameterdata); 
  
  let path = `/master/ZoneMasterEdit`; 
  navigate(path,{
    state: row,
});
  //{text: "hello"}
}


  return (
    <>
      <Grid item lg={6} sm={6} xs={12}>
        <Card
          style={{
            width: "100%",
            height: "50%",
            backgroundColor: "#E9FDEE",
            border: ".5px solid green ",
          }}
        >
          <Paper
            sx={{ width: "100%", overflow: "hidden" }}
            style={{ padding: "10px" }}
          >
            {/* <Toast ref={toast} /> */}
            <ConfirmDialog />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ padding: "20px" }}
              align="left"
            >
              Zone Master
            </Typography>
            <Divider />

            {/* Search and ADD buttone Start */}
            <Box height={10} />
            <Stack direction="row" spacing={2} classes="my-2 mb-2">
              <Button variant="contained" endIcon={<AddCircleIcon />}>
                Add
              </Button>
              <Button variant="contained" endIcon={<PrintIcon />}>
                Print
              </Button>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              ></Typography>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <SearchIcon />
                <TextField
                  id="standard-search"
                  label="Search"
                  type="search"
                  variant="standard"
                  onChange={handleFilter}
                />
              </Box>
            </Stack>

            {/* Search END */}

            <Box height={10} />
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{ minWidth: 100, backgroundColor: "#B7FDAC" }}
                    >
                      Action
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ minWidth: 100, backgroundColor: "#B7FDAC" }}
                    >
                      Sr No.
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ minWidth: 100, backgroundColor: "#B7FDAC" }}
                    >
                      Zone Name
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ minWidth: 100, backgroundColor: "#B7FDAC" }}
                    >
                      Zone Short Name
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {records
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: { ZoneName: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.Key | null | undefined; srno: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; ZoneAbbrevation: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          // key={row.ZoneName}
                        >
                          <TableCell align="left">
                            <Stack spacing={2} direction="row">
                              <EditIcon
                                style={{
                                  fontSize: "20px",
                                  color: "blue",
                                  cursor: "pointer",
                                }}
                                className="cursor-pointer"
                               onClick={()=>routeChangeEdit(row)}
                              />
                              <DeleteIcon
                                style={{
                                  fontSize: "20px",
                                  color: "darkred",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  handledeleteClick(row.id);
                                }}
                              />
                            </Stack>
                          </TableCell>
                          <TableCell align="left">{row.srno}</TableCell>
                          <TableCell align="left">{row.ZoneName}</TableCell>
                          <TableCell align="left">
                            {row.ZoneAbbrevation}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={records.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Card>
      </Grid>
    </>
  );
}
