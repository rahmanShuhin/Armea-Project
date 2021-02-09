import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import RequestTable from "./RequestTable";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const Requests = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="adminRequest">
      <div className="adminRequest__body">
        <div>
          <div>
            <SearchIcon></SearchIcon>
            <input type="text" placeholder="Buscar pedido" />
          </div>
        </div>
        <div className="productSort">
          <small>ordenar por:</small>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">CATEGORIA</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>DECORACIÓN</MenuItem>
              <MenuItem value={20}>MASCOTAS</MenuItem>
              <MenuItem value={30}>MUEBLES</MenuItem>
              <MenuItem value={30}>NIÑOS</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <RequestTable></RequestTable>
    </div>
  );
};

export default Requests;
