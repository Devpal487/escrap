import { Avatar, Box, Card, Checkbox, FormControlLabel, Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import Constant from '../../utils/Constant';
import { VehicleRfid, WeightChart } from '../../type';
import { Category } from '@mui/icons-material';
// import Chart from 'react-google-charts';
import { log } from 'console';
import { json } from 'stream/consumers';
import axios from 'axios';
import Chart from 'react-google-charts';

type Props = {};

const HomePage = (props: Props) => {
  const [vehicleList, setVehicleList] = useState<VehicleRfid[]>([]);
  var [vehicleIds, setVehicleIds] = useState<any[]>([0]);
  const [loading, setLoading]=useState(false)
  const [data1, setData] = useState<any[]>([
    ["Element", "Trip", { role: "style" }],
    ["23/06/2023", 8.94, "blue"],
  ]);
  const [data2, setData2] = useState<any[]>([]);
  const [checkedState, setCheckedState] = useState<any>(
    new Array(vehicleList.length).fill(false)
  );

  const options = {
    title: "Vehicle(s) Weight",
    legend: { position: "top", maxLines: 2 },
    colors: ["blue"],
    // interpolateNulls: false,
  };

  const data = [
    ["Element", "Trip", { role: "style" }],
    ["23-06-2023", 8, 123],
  ];


  const handleChange = (vehicleId: number, index: number) => {
    let isChecked=
    // if(checkedState[index]==false)

    // vehicleList.map(vl => vehicleIds.push(vl.vehileID))
    console.log(checkedState[0])
    setCheckedState(!checkedState[index])

    if (checkedState == false) {
      const tempIndex = vehicleIds.indexOf(index);
      if (index > -1) { // only splice array when item is found
        vehicleIds.splice(tempIndex, 1); // 2nd parameter means remove one item only
      }
    }
    if (checkedState == true) {
      vehicleIds.push(vehicleId)
      // checkedState.map(i => console.log(checkedState[0]));
      setVehicleIds(vehicleIds)
      getVehicleWeightSummary(vehicleIds)
    }
  }

  useEffect(() => {
    getVehicleList();
    getVehicleWeightSummary();
  }, [])
  const getVehicleList = () => {
    axios.post(`http://103.20.213.26:48950/api/eScrapSolidWasteReport/GetVehicleRfid`)
      .then(res => {
        //http://103.20.213.26:48950 --(dummy api)
        //http://103.20.213.26:7080
        // console.log(res.data.result[0].vehicleNo) 
        // console.log(res.data.result)
        setVehicleList(res.data.result)
      })
  }
  const getVehicleWeightSummary = (vehicleID: Array<any> = []) => {
    setLoading(false)
    let vehArr = ""
    vehArr = `[${(vehicleID)}]`
    let param = {
      fromDate: "2023-06-24T05:17:37.241Z",
      toDate: "2023-07-01T05:17:37.241Z",
      vehileID: vehArr,
      allVehicles: true
    }
    console.log(param)
    axios.post(`http://103.20.213.26:48950/api/Vehicle/VehicleWasteSummay`, param)
      .then(res => {
        // console.log(res.data.serializeData)
        setData2(JSON.parse(res.data.serializeData))
        console.log("data22222222" + data2)
        const arr = [];
        for (var i of data2) {
          arr.push(Object.values(i))
        }
        arr.unshift(["Element", "Trip", { role: "style" }])
        setData(arr)
        setLoading(true)
    })
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* HomePage */}
      <div style={{ display: 'flex', flexDirection: 'row', width: "100%" }}>
        {Constant.ABOUT_KANPUR.map((item: any) => (
          <Paper elevation={3} style={{ margin: 10, display: 'flex', flexDirection: 'row', width: 279, height: 120, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 10, }}>
            <img src="https://reactjs.org/logo-og.png" style={{ height: 50, width: 50, borderRadius: 25, marginRight: 5 }} alt="React example" />
            <Typography>{item.name}</Typography>
          </Paper>
        ))
        }

      </div>

      <div style={{ width: "100%", height: 250, backgroundColor: 'white', overflowY: 'scroll', margin: 10 }}>
        {vehicleList.map((item, index: number) => (
          <FormControlLabel style={{ marginLeft: 10, width: 160 }} control={
            <Checkbox checked={checkedState[index]} onChange={() => handleChange(item.vehileID, index)} />}
            label={item.vehicleNo} />
        ))}
      </div>
      <div style={{ width: "100%", height: 250, }}>
        <Chart
          onLoad={() => getVehicleWeightSummary()}
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data1}
          options={options}
        />
      </div>
    </div>
  );
};

export default HomePage;













