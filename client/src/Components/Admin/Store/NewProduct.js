import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import image from "../../../images/image.png";
import play from "../../../images/play.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const NewProduct = ({ setShowNew }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  return (
    <div className="adminNewProduct">
      <div className="adminNewProduct__top">
        <button onClick={() => setShowNew(false)}>
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </button>
        <h3>Nueva entrada</h3>
      </div>
      <div className="adminNewProduct__bottom">
        <>
          <form>
            <div>
              <div>
                <label htmlFor="name">NOMBRE DEL PRODUCTO </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre del producto"
                />
              </div>
              <div className="special_div">
                <div className="select_fu">
                  <label htmlFor="furniture">CATEGORIA</label>
                  <select
                    name="furniture"
                    id=""
                    placeholder="muebles"
                    style={{ color: "#66788A" }}
                  >
                    <option value="" disabled selected>
                      muebles
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity">Stock</label>
                  <input type="text" placeholder="Cantidad" name="quantity" />
                </div>
              </div>
              <div className="special_div">
                <div>
                  <label htmlFor="regular_price">precio regular</label>
                  <input
                    type="text"
                    placeholder="Precio"
                    name="regular_price"
                  />
                </div>
                <div>
                  <label htmlFor="discount_price">precio descuento</label>
                  <input
                    type="text"
                    placeholder="Precio"
                    name="discount_price"
                  />
                </div>
              </div>
              <p
                style={{
                  textTransform: "uppercase",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                fecha de oferta
              </p>
              <div style={{ marginBottom: "10px" }} className="special_div">
                <div>
                  <p>inicio</p>
                  <div>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
                <div>
                  <p>final</p>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
              </div>
              <div>
                <div className="select_fu">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id=""
                    cols="20"
                    rows="5"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lorem, sed volutpat massa. Pellentesque ullamcorper fermentum nunc sed hendrerit. Nunc congue faucibus est, a bibendum ex lobortis ut. Sed pharetra interdum pharetra."
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h4 style={{ marginBottom: "10px" }}>FOTOS</h4>
                <div className="photo__box">
                  <div>
                    <input type="file" name="foto" id="" />
                    <div>
                      <img src={image} alt="" />
                      <small>subir foto</small>
                    </div>
                  </div>
                  <div>
                    <input type="file" name="foto" id="" />
                    <div>
                      <img src={image} alt="" />
                      <small>subir foto</small>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "30px" }}>
                <h4 style={{ marginBottom: "10px" }}>VIDEOS</h4>
                <div className="video__box">
                  <div>
                    <input type="file" name="foto" id="" />
                    <div>
                      <img src={play} alt="" />
                      <small>subir video</small>
                    </div>
                  </div>
                  <div>
                    <input type="file" name="foto" id="" />
                    <div>
                      <img src={play} alt="" />
                      <small>subir video</small>
                    </div>
                  </div>
                </div>
              </div>
              <button>agregar</button>
            </div>
          </form>
        </>
      </div>
    </div>
  );
};

export default NewProduct;
