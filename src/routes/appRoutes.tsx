import DashboardPageLayout from "../pages/master/MasterPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardIndex from "../pages/master/MasterPageIndex";
// import ChangelogPage from "../pages/setting/Settings";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DocumentationPage from "../pages/corrections/Corrections";
import VehicleMaster from "../pages/master/VehicleMaster/VehicleMaster";
import VehicleMasterAdd from "../pages/master/VehicleMaster/VehicleMasterAdd";

// import VehicleMasterTable from "../pages/table/VehicleMasterTable";
import VehicleType from "../pages/master/VehicleType/VehicleType";
import VehicleTypeAdd from "../pages/master/VehicleType/VehicleTypeAdd";
import VehicleTypeEdit from "../pages/master/VehicleType/VehicleTypeEdit";
import Employee from "../pages/master/Employee";
import SaveDevice from "../pages/master/SaveDevice";
import ReportPageLayout from "../pages/reports/ComponentPageLayout";
import BusyVisitingHour from "../pages/reports/BusyVisitingHour";
import Report from "../pages/reports/Report";
import SettingsPage from "../pages/setting/Settings";
import BrandMaster from "../pages/master/BrandMaster/BrandMaster";
import BrandMasterAdd from "../pages/master/BrandMaster/BrandMasterAdd";
import BrandMasterEdit from "../pages/master/BrandMaster/BrandMasterEdit";
import FuelType from "../pages/master/FuelTYpe/FuelType";
import VehicleTypeInfo from "../pages/master/VehicleTypeInfo";

import Designation from "../pages/master/DesignationMaster/DesignationMasterAdd";
import ZoneMaster from "../pages/master/ZoneMaster/ZoneMaster";
import ZoneMasterAdd from "../pages/master/ZoneMaster/ZoneMasterAdd";
import ZoneMasterEdit from "../pages/master/ZoneMaster/ZoneMasterEdit";
import FuelTypeAdd from "../pages/master/FuelTYpe/FuelTypeAdd";
import FuelTypeEdit from "../pages/master/FuelTYpe/FuelTypeEdit";
import TaxMaster from "../pages/master/TaxMaster/TaxMaster";
import TaxMasterAdd from "../pages/master/TaxMaster/TaxMasterAdd";
import TaxMasterEdit from "../pages/master/TaxMaster/TaxMasterEdit";
import UnitMaster from "../pages/master/UnitMaster/UnitMaster";
import UnitMasterAdd from "../pages/master/UnitMaster/UnitMasterAdd";
import UnitMasterEdit from "../pages/master/UnitMaster/UnitMasterEdit";
import DepartmentMaster from "../pages/master/DepartmentMaster/DepartmentMaster";
import DepartmentMasterAdd from "../pages/master/DepartmentMaster/DepartmentMasterAdd";
import DepartmentMasterEdit from "../pages/master/DepartmentMaster/DepartmentMasterEdit";
import DesignationMaster from "../pages/master/DesignationMaster/DepartmentMaster";
import DesignationMasterAdd from "../pages/master/DesignationMaster/DesignationMasterAdd";
import DesignationMasterEdit from "../pages/master/DesignationMaster/DesignationMasterEdit";


const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },


  {
    path: "/master",
    element: <DashboardPageLayout />,
    state: "master",
    sidebarProps: {
      displayText: "Vehicle Mgmt",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "master.index",
      },
      {
         path: "/master/vehicleMaster",
        //  path: "/table/vehicleMasterTable",
        // element: <VehicleMasterTable/>,
        element: <VehicleMaster />,
        state: "master.vehicleMaster",
        // state: "table.vehicleMasterTable",
        sidebarProps: {
          displayText: "Vehicle Master"
        },
      },
      {
        path: "/master/VehicleMasterAdd",
       //  path: "/table/vehicleMasterTable",
       // element: <VehicleMasterTable/>,
       element: <VehicleMasterAdd />,
       state: "master.VehicleMasterAdd",
       // state: "table.vehicleMasterTable",
      //  sidebarProps: {
      //    displayText: "Vehicle Master Add",
      //  },
     },
      {
        path: "/master/BrandMaster",
        element: <BrandMaster/>,
        state: "master.BrandMaster",
        sidebarProps: {
          displayText: "Brand Master"
        }
      },
      {
        path: "/master/BrandMasterAdd",
        element: <BrandMasterAdd/>,
        state: "master.BrandMasterAdd",
        // sidebarProps: {
        //   displayText: "Brand Master"
        // }
      },
      {
        path: "/master/BrandMasterEdit",
        element: <BrandMasterEdit/>,
        state: "master.BrandMasterEdit",
        // sidebarProps: {
        //   displayText: "Brand Master"
        // }
      },
      {
        path: "/master/ZoneMaster",
        element: <ZoneMaster/>,
        state: "master.ZoneMaster",
        sidebarProps: {
          displayText: "Zone Master"
        }
      },
      {
        path: "/master/ZoneMasterAdd",
        element: <ZoneMasterAdd/>,
        state: "master.ZoneMasterAdd",
      },
      {
        path: "/master/ZoneMasterEdit",
        element: <ZoneMasterEdit/>,
        state: "master.ZoneMasterEdit",
      },
      {
        path: "/master/TaxMaster",
        element: <TaxMaster/>,
        state: "master.TaxMaster",
        sidebarProps: {
          displayText: "Tax Master"
        }
      },
      {
        path: "/master/TaxMasterAdd",
        element: <TaxMasterAdd/>,
        state: "master.TaxMasterAdd",
      },
      {
        path: "/master/TaxMasterEdit",
        element: <TaxMasterEdit/>,
        state: "master.TaxMasterEdit",
      },
      {
        path: "/master/UnitMaster",
        element: <UnitMaster/>,
        state: "master.UnitMaster",
        sidebarProps: {
          displayText: "Unit Master"
        }
      },
      {
        path: "/master/UnitMasterAdd",
        element: <UnitMasterAdd/>,
        state: "master.UnitMasterAdd",
      },
      {
        path: "/master/UnitMasterEdit",
        element: <UnitMasterEdit/>,
        state: "master.UnitMasterEdit",
      },
      {
        path: "/master/FuelType",
        element: <FuelType/>,
        state: "master.FuelType",
        sidebarProps: {
          displayText: "Fuel Type"
        }
      },
      {
        path: "/master/FuelTypeAdd",
        element: <FuelTypeAdd/>,
        state: "master.FuelTypeAdd",
        // sidebarProps: {
        //   displayText: "Fuel Type"
        // }
      },
      {
        path: "/master/FuelTypeEdit",
        element: <FuelTypeEdit/>,
        state: "master.FuelTypeEdit",
        // sidebarProps: {
        //   displayText: "Fuel Type"
        // }
      },
      {
        path: "/master/vehicleType",
        element: <VehicleType />,
        state: "master.vehicleType",
        sidebarProps: {
          displayText: "Vehicle Type"
        }
      },
      {
        path: "/master/vehicleTypeAdd",
        element: <VehicleTypeAdd />,
        state: "master.vehicleTypeAdd",
        // sidebarProps: {
        //   displayText: "Vehicle Type"
        // }
      },
      {
        path: "/master/VehicleTypeEdit",
        element: <VehicleTypeEdit />,
        state: "master.VehicleTypeEdit",
        // sidebarProps: {
        //   displayText: "Vehicle Type"
        // }
      },
      
      {
        path: "/master/VehicleTypeInfo",
        element: <VehicleTypeInfo/>,
        state: "master.VehicleTypeInfo",
        sidebarProps: {
          displayText: "Vehicle Type Info"
        }
      },
      {
        path: "/master/saveDevice",
        element: <SaveDevice />,
        state: "master.saveDevice",
        sidebarProps: {
          displayText: "Save Device"
        }
      }
    ]
  },


  

  {
    path: "/employeeinfo",
    element: <DashboardPageLayout />,
    state: "employeeinfo",
    sidebarProps: {
      displayText: "Employee Info",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "employeeinfo.index",
      },
      
      {
        path: "/employeeinfo/employee",
        element: <Employee />,
        state: "employeeinfo.employee",
        sidebarProps: {
          displayText: "Employee Details"
        }
      },
      {
        path: "/employeeinfo/DepartmentMaster",
        element: <DepartmentMaster/>,
        state: "employeeinfo.DepartmentMaster",
        sidebarProps: {
          displayText: "Department Master"
        },
      },
      {
        path: "/employeeinfo/DepartmentMasterAdd",
        element: <DepartmentMasterAdd/>,
        state: "employeeinfo.DepartmentMasterAdd",
       
      },
      {
        path: "/employeeinfo/DepartmentMasterEdit",
        element: <DepartmentMasterEdit/>,
        state: "employeeinfo.DepartmentMasterEdit",
        
      },
      {
        path: "/employeeinfo/DesignationMaster",
        element: <DesignationMaster/>,
        state: "employeeinfo.DesignationMaster",
        sidebarProps: {
          displayText: "Designation Master"
        }
      },
      {
        path: "/employeeinfo/DesignationMasterAdd",
        element: <DesignationMasterAdd/>,
        state: "employeeinfo.DesignationMasterAdd",
        
      },
      {
        path: "/employeeinfo/DesignationMasterEdit",
        element: <DesignationMasterEdit/>,
        state: "employeeinfo.DesignationMasterEdit",
       
      },
      
      
    ]
  },




  {
    path: "/corrections",
    element: <DocumentationPage />,
    state: "corrections",
    sidebarProps: {
      displayText: "Corrections",
      icon: <ArticleOutlinedIcon />
    },
  child: [
    {
      path: "/corrections/correction",
      element: <Report />,
      state: "corrections.correction",
      sidebarProps: {
        displayText: "Correction"
      },
    }],
  },





  {
    path: "/reports",
    element: <ReportPageLayout />,
    state: "reports",
    sidebarProps: {
      displayText: "Reports",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/reports/report",
        element: <Report />,
        state: "reports.report",
        sidebarProps: {
          displayText: "Report"
        },
      },
      {
        path: "/reports/busyVisitingHour",
        element: <BusyVisitingHour />,
        state: "reports.busyVisitingHour",
        sidebarProps: {
          displayText: "BusyVisitingHour"
        }
      }
    ]
  },
  
  {
    path: "/settings",
    element: <SettingsPage />,
    state: "settings",
    sidebarProps: {
      displayText: "Settings",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;