import { AppBar, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar style={{backgroundColor:'green'}}>
        <Typography variant="h5" style={{backgroundColor:'green',width:'100%',height:70, color:'white', paddingTop:'18px'}}>
          {'Solid Waste Management System'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;