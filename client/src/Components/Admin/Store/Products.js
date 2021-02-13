import React from "react";
import ProductsTable from "./ProductsTable";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { MenuItem, NativeSelect, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const Products = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="adminProducts">
      <div className="adminProducts__body">
        <div>
          <div>
            <p style={{ fontSize: "12px", fontWeight: "bold" }}>
              APLICAR A SELECCION
            </p>
            <button
              style={{
                color: "#BF0E08",
                marginRight: "10px",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              ELIMINAR
            </button>
            <button>EDITAR</button>
          </div>
          <div>
            <div>
              <button>
                <AddCircleIcon></AddCircleIcon>
              </button>
              <p>Nuevo producto</p>
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
        </div>
      </div>
      <ProductsTable></ProductsTable>
    </div>
  );
};

export default Products;
