import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSeclcteddata, updatePassanger } from "./redux/actionCreation";

function UpdatePassenger() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { airline, selecteData } = useSelector((state) => state);
  const [updateData, setupdateData] = useState({
    name: `${selecteData && selecteData.name}`,
    trips: `${selecteData?.trips}`,
    airline: `${selecteData.airline && selecteData.airline[0].id}`,
  });

  useEffect(() => {
    dispatch(fetchSeclcteddata(id));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setupdateData({
      ...updateData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/");
    updatePassanger(updateData, id);
    setupdateData({});
    e.preventDefault();
  };
  return (
    <Container sx={{ m: 3, p: 3 }}>
      <Typography
        variant="h4"
        sx={{ backgroundColor: "#1976d2", color: "white" }}
      >
        Update Passenger
      </Typography>
      <form>
        <Paper sx={{ p: 5 }}>
          <Box>
            <TextField
              sx={{ m: 2 }}
              fullWidth
              id="outlined-basic"
              label="Name"
              name="name"
              type="text"
              value={updateData.name}
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              sx={{ m: 2 }}
              fullWidth
              name="trips"
              id="outlined-basic"
              label="Trips"
              value={updateData.trips}
              variant="outlined"
              onChange={handleChange}
            />
            <FormControl fullWidth sx={{ m: 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Airline
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="airline"
                value={updateData.airline}
                label="Airline"
                onChange={handleChange}
              >
                {airline.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Paper>
        <Box sx={{ textAlign: "right", m: 2 }}>
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Update Passenger
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default UpdatePassenger;
