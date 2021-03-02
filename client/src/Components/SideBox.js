import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import TreeItem from "@material-ui/lab/TreeItem";
import { Button, Checkbox } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles({
  root: {
    Height: 240,
    flexGrow: 1,
    maxWidth: 100,
    flexDirection: "row-reverse",
  },
});
const SideBox = ({
  setMin,
  setMax,
  setSearch,
  catgTypes,
  setCatgTypes,
  setColor,
  color,
}) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [color1, setColor1] = useState(true);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [color4, setColor4] = useState(false);

  const handleColorChange = (e) => {
    if (e.target.name === "color1") {
      setColor("#c2a976");
      setColor1(true);
      setColor2(false);
      setColor3(false);
      setColor4(false);
    } else if (e.target.name === "color2") {
      setColor("#a0b4fa");
      setColor1(false);
      setColor2(true);
      setColor3(false);
      setColor4(false);
    } else if (e.target.name === "color3") {
      setColor("#545454");
      setColor1(false);
      setColor2(false);
      setColor3(true);
      setColor4(false);
    } else {
      setColor("#ffe5b1");
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor4(true);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "Escritorio") {
      setChecked1(event.target.checked);
      const ctg = { ...catgTypes };
      ctg.Escritorio = event.target.checked;
      setCatgTypes(ctg);
    } else if (event.target.name === "Sofa") {
      setChecked2(event.target.checked);
      const ctg = { ...catgTypes };
      ctg.Sofa = event.target.checked;
      setCatgTypes(ctg);
    } else if (event.target.name === "Silla") {
      setChecked3(event.target.checked);
      const ctg = { ...catgTypes };
      ctg.Silla = event.target.checked;
      setCatgTypes(ctg);
    } else if (event.target.name === "Comoda") {
      setChecked4(event.target.checked);
      const ctg = { ...catgTypes };
      ctg.Comoda = event.target.checked;
      setCatgTypes(ctg);
    } else if (event.target.name === "Biblioteca") {
      setChecked5(event.target.checked);
      const ctg = { ...catgTypes };
      ctg.Biblioteca = event.target.checked;
      setCatgTypes(ctg);
    }
  };

  return (
    <div className="sideBox">
      <div className="sideBox__top">
        <h2>Buscar</h2>
        <div>
          <input
            type="text"
            placeholder="¿Qué buscas?"
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon></SearchIcon>
        </div>
      </div>
      <div className="sideBox__range">
        <h2>Rango de Precio</h2>
        <div>
          <div>
            <p>Mínimo</p>
            <div>
              <p>$</p>
              <input
                type="number"
                placeholder="549"
                onChange={(e) => setMin(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p>Máximo</p>
            <div>
              <p>$</p>
              <input
                type="text"
                placeholder="549"
                onChange={(e) => setMax(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="h2">Categoría</h2>
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
          defaultExpandIcon={<ExpandMoreIcon />}
        >
          <TreeItem nodeId="1" label="Muebles">
            <div className="checkBox__container">
              <Checkbox
                name="Escritorio"
                checked={checked1}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Escritorio</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                name="Sofa"
                checked={checked2}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Sofa</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                name="Silla"
                checked={checked3}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Silla</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                name="Comoda"
                checked={checked4}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                name="Biblioteca"
                checked={checked5}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Biblioteca</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                name="Comoda"
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
          </TreeItem>
          <TreeItem nodeId="2" label="Niños">
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Escritorio</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Sofa</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Silla</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Biblioteca</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
          </TreeItem>
          <TreeItem nodeId="3" label="Mascotas">
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Escritorio</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Sofa</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Silla</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Biblioteca</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
          </TreeItem>
          <TreeItem nodeId="4" label="Decoracion">
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Escritorio</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Sofa</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Silla</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Biblioteca</p>
            </div>
            <div className="checkBox__container">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <p>Comoda</p>
            </div>
          </TreeItem>
        </TreeView>
      </div>
      <div className="sideBox__colorCheck">
        <h2 className="h2">Color</h2>
        <div>
          <div className={color1 && "active"}>
            <input
              type="checkbox"
              name="color1"
              onChange={(e) => handleColorChange(e)}
            />
          </div>
          <div className={color2 && "active"}>
            <input
              type="checkbox"
              name="color2"
              onChange={(e) => handleColorChange(e)}
            />
          </div>
          <div className={color3 && "active"}>
            <input
              type="checkbox"
              name="color3"
              onChange={(e) => handleColorChange(e)}
            />
          </div>
          <div className={color4 && "active"}>
            <input
              type="checkbox"
              name="color4"
              onChange={(e) => handleColorChange(e)}
            />
          </div>
          <p>Todos</p>
        </div>
      </div>
    </div>
  );
};

export default SideBox;
