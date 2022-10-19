import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Currency = () => {
  const [list, setlist] = useState([]);
  const [fromTemp, setfromTemp] = useState("");
  const [fromMeasure, setfromMeasure] = useState(1);
  const [toTemp, settoTemp] = useState("");
  const [toMeasure, settoMeasure] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/currency")
      .then(res => {
        setlist(res.data);
        setfromTemp(res.data[0].code)
        settoTemp(res.data[11].code)
        setfromMeasure(1)
      })
      .catch(err => console.log("err : ", err));
  }, []);

  useEffect(() => {
    if(fromTemp && toTemp) {
        axios
        .post("http://localhost:5000/currency",{
            from:fromTemp,
            to:toTemp,
            amount:fromMeasure
        })
        .then(res => {
            res?.data && settoMeasure(res.data.result)
        })
        .catch(err => console.log("err : ", err));
    }
  }, [fromTemp,toTemp,fromMeasure]);

  return (
    <div>
        <Stack direction="column" spacing={3}>
            <Typography variant="h5" component="h5"> Convert Currency From </Typography>
            <Stack direction="row">
                <div>
                <TextField id="outlined-basic" variant="outlined" value={fromMeasure} onChange={e=>setfromMeasure(e.target.value)} InputLabelProps={{ shrink: false }} />
                </div>
                <div>
                <FormControl sx={{ minWidth: 160 }}>
                    <Select value={fromTemp} onChange={e => setfromTemp(e.target.value)} displayEmpty inputProps={{ "aria-label": "Without label" }}>
                    {list.map(ele => (
                        <MenuItem value={ele.code} key={ele.code}>{ele.name}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                </div>
            </Stack>
            <Typography variant="h1" component="h1"></Typography>
            <Typography variant="h5" component="h5"> Convert Temparature To </Typography>
            <Stack direction="row">
                <div>
                <TextField id="outlined-basic" variant="outlined" value={toMeasure} onChange={e=>settoMeasure(e.target.value)} InputLabelProps={{ shrink: false }} />
                </div>
                <div>
                <FormControl sx={{ minWidth: 160 }}>
                    <Select value={toTemp} onChange={e => settoTemp(e.target.value)} displayEmpty inputProps={{ "aria-label": "Without label" }}>
                    {list.map(ele => (
                        <MenuItem value={ele.code} key={ele.code}>{ele.name}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                </div>
            </Stack>
            <Button variant="contained" onClick={()=>{
                const from = fromTemp
                const to = toTemp
                const fromAmount = fromMeasure
                const toAmount = toMeasure
                setfromTemp(to)
                settoTemp(from)
                setfromMeasure(toAmount)
                settoMeasure(fromAmount)
            }}>
                Swap
            </Button>
        </Stack>
    </div>
  );
};
export default Currency;
