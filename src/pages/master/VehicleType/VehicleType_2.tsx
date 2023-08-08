//import {  Card, CardContent, Grid, TextField, Typography, } from '@mui/material'
import React, { useEffect,useState } from 'react'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import axios from 'axios';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { GridToolbarDensitySelector, GridToolbarFilterButton,} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
  
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column, ColumnFilterElementTemplateOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputNumber, InputNumberChangeEvent } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Slider, SliderChangeEvent } from 'primereact/slider';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox, TriStateCheckboxChangeEvent } from 'primereact/tristatecheckbox';
import { CustomerService } from './service/CustomerService';

type Props = {};
interface Representative {
    name: string;
    image: string;
  }
  
  interface Country {
      name: string;
      code: string;
  }
  
  interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
  }
  
  const defaultFilters: DataTableFilterMeta = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    'country.name': {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    date: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    balance: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    status: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  };
  

const VehicleType = (props: Props) => {

  const [enteredVehicletypename, setEnteredVehicletypename] = useState('');
  const [enteredVehiclecode, setEnteredVehiclecode] = useState('');
  const [enteredShortname, setEnteredShortname] = useState('');
  const  [maindata, setMaindata]  = React.useState([
 
  ]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchText, setSearchText] = React.useState('');
  const [rows, setRows] = React.useState<any[]>(maindata);

  //const [vehicleList, setVehicleList] = useState<VehicleAllDetails[]>([]);
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
        for (let index = 0; index < res.data.result.length; index++) {
        // const element = res.data.result[index]['vehileID'];
         //console.log(element);
         arr.push({ sr_no: index+1, id: res.data.result[index]['vehicleTypeID'], vehicleTypeCode:  res.data.result[index]['vehicleTypeCode'], vehicleTypeName:  res.data.result[index]['vehicleTypeName'] });
 
        }
       setRows(arr);
      })
  }
  const submitHandler = (event: { preventDefault: () => void; }) => {
      event.preventDefault();

      const collectData = {
          vehicletypename: enteredVehicletypename,
          vehiclecode: enteredVehiclecode,
          shortname: enteredShortname,
      }

      console.log(collectData);

      setEnteredVehicletypename('');
      setEnteredVehiclecode('');
      setEnteredShortname('');
  }
  const handleEditClick = () => {
    // some action
}
const handledeleteClick = () => {
  // some action
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
                  <IconButton color="secondary" aria-label="add an alarm" onClick={handleEditClick} >
                        <EditIcon  />
                    </IconButton>
                    <IconButton color="secondary" aria-label="add an alarm" onClick={handledeleteClick} >
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
       field: 'vehicleTypeCode',
       headerName: 'Short Name',
       //type: 'number',
       width: 110,
       editable: false,
     },
     
   ];



   const [customers, setCustomers] = useState<Customer[]>([]);
    const [filters, setFilters] = useState<DataTableFilterMeta>(defaultFilters);
    const [loading, setLoading] = useState<boolean>(false);
    const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
    const [representatives] = useState<Representative[]>([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState<string[]>(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status: string) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data: Customer[]) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
        initFilters();
    }, []);

    const getCustomers = (data: Customer[]) => {
        return [...(data || [])].map((d) => {
            // @ts-ignore
            d.date = new Date(d.date);

            return d;
        });
    };

    const formatDate = (value: Date) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const clearFilter = () => {
        initFilters();
    };

    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let _filters = { ...filters };

        // @ts-ignore
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const initFilters = () => {
        setFilters(defaultFilters);
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };



    const filterFooterTemplate = () => {
        return <div className="px-3 pt-0 pb-3 text-center">Filter by Country</div>;
    };

    const representativeBodyTemplate = (rowData: Customer) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativeFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e: MultiSelectChangeEvent) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    };

    const representativesItemTemplate = (option: Representative) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData: Customer) => {
        return formatDate(new Date(rowData.date));
    };

    const dateFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <Calendar value={options.value} onChange={(e: CalendarChangeEvent) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceBodyTemplate = (rowData: Customer) => {
        return formatCurrency(rowData.balance);
    };

    const balanceFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <InputNumber value={options.value} onChange={(e: InputNumberChangeEvent) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData: Customer) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e: DropdownChangeEvent) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option: string) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const activityBodyTemplate = (rowData: Customer) => {
        return <ProgressBar value={rowData.activity} showValue={false} style={{ height: '6px' }}></ProgressBar>;
    };

    const activityFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e: SliderChangeEvent) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        );
    };

    const verifiedBodyTemplate = (rowData: Customer) => {
        return <i className={classNames('pi', { 'text-green-500 pi-check-circle': rowData.verified, 'text-red-500 pi-times-circle': !rowData.verified })}></i>;
    };

    const verifiedFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return (
            <div className="flex align-items-center gap-2">
                <label htmlFor="verified-filter" className="font-bold">
                    Verified
                </label>
                <TriStateCheckbox id="verified-filter" value={options.value} onChange={(e: TriStateCheckboxChangeEvent) => options.filterCallback(e.value)} />
            </div>
        );
    };

    const header = renderHeader();


  return (
    <div>
            {/* <Typography variant='h5' align='center' style={{ marginTop: '10px', fontSize: '25px', fontWeight: 500 }}  >
                VEHICLE TYPE
            </Typography> */}
            
            {/* <Typography style={{ marginLeft: '300px', fontSize: '20px', fontWeight: 500 }}>
                Vehicle Type
            </Typography >
            <Typography style={{ marginTop: '-77px', marginLeft: '410px', color: 'green' }} ><h1><ArrowBackSharpIcon variant='blue' style={{ marginLeft: '10px', marginTop: '50px' }} /></h1></Typography> */}

            {/* <Grid xs={4} sm={12} item >
                <Typography style={{ marginTop: '-75px', marginLeft: '150px', }}>
                    <Button type='submit' variant='contained' style={{ marginBottom: 15, marginTop: '100px', backgroundColor: 'blue', width: 20 }}><ArrowBackSharpIcon /></Button>
                </Typography>
            </Grid> */}

            {/* <Box sx={{ height: 400, width: '100%' }}>
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
    </Box> */}

<div className="card">
            <DataTable value={customers} paginator showGridlines rows={10} loading={loading} dataKey="id" 
                    filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header}
                    emptyMessage="No customers found.">
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                {/* <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate}
                    filter filterPlaceholder="Search by country" filterClear={filterClearTemplate} 
                    filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} /> */}
                <Column header="Agent" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                <Column header="Date" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column field="status" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column field="activity" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} />
            </DataTable>
        </div>
        </div>

  );
};

export default VehicleType;