import React from "react";
import bg_3 from "../images/bg_3.png";
import author from "../images/author.png";
import pet1 from "../images/pet1.png";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { fakeBlog } from "./fakeData";
import BlogCard from "./BlogCard";
const BlogDetails = () => {
  return (
    <div className="blogDetails">
      <div></div>
      <p></p>
      <div>
        <h3 className="blog__title">
          <Link to="/blog">
            <ArrowBackRoundedIcon></ArrowBackRoundedIcon>{" "}
          </Link>
          Regresar al Blog
        </h3>
        <div>
          <div>
            <div>
              <h2>Avances del Blog</h2>
              <p>
                Escrito por <span style={{ color: "#FF6606" }}>John Doe</span>,
                Noviembre 2020
              </p>
              <div>
                <img src={bg_3} alt="" />
              </div>
              <p>
                Vivamus non tortor ac est consequat feugiat vitae eget ipsum.
                Nullam sed varius ante. Proin tortor justo, ullamcorper ac
                ullamcorper sed, tempus quis lectus. Nulla vestibulum odio eget
                faucibus volutpat. Sed pretium magna eget dui lacinia, a
                molestie metus mattis. Donec imperdiet augue scelerisque urna
                cursus facilisis. Donec nec lacinia arcu. Duis maximus tincidunt
                purus, eget commodo magna tincidunt eget. Duis vitae ornare
                arcu. Aliquam convallis, tortor non molestie iaculis, leo lectus
                dictum eros, id cursus diam nisl eu ipsum. Donec dapibus
                condimentum purus, id fringilla nisl pulvinar a. Proin lobortis
                eleifend nisi vel rhoncus. Vestibulum tincidunt est at neque
                dictum, in hendrerit tortor tempus. Nunc mollis leo ultrices,
                pulvinar purus at, pulvinar mi. Suspendisse vel sem eros.
              </p>
            </div>
            <div>
              <button className={"disable-btn"}>
                <ArrowBackIosIcon></ArrowBackIosIcon>
              </button>

              <button className={"disable-btn"}>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </button>
            </div>
            <div>
              <p>2 Comentarios</p>
              <div>
                <div>
                  <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
                </div>
                <div>
                  <h3>
                    Jose Jose -{" "}
                    <span style={{ color: "#FF6606", fontWeight: "normal" }}>
                      9 diciembre 2020
                    </span>
                  </h3>
                  <p>
                    Etiam vel magna sed leo feugiat cursus. Cras mollis blandit{" "}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
                </div>
                <div>
                  <h3>
                    Jose Jose -{" "}
                    <span style={{ color: "#FF6606", fontWeight: "normal" }}>
                      9 diciembre 2020
                    </span>
                  </h3>
                  <p>
                    Etiam vel magna sed leo feugiat cursus. Cras mollis blandit{" "}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <form>
                <h2>Escribe un comentario</h2>
                <div>
                  <div>
                    <label htmlFor="number">Nombre*</label>
                    <input type="text" placeholder="Ingrese su nombre" />
                  </div>
                  <div>
                    <label htmlFor="email">Email*</label>
                    <input type="text" placeholder="Ingrese su email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message">Mensaje*</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="6"
                    placeholder="Escriba su mensaje"
                  ></textarea>
                </div>
                <div className="form_btn">
                  <button type="submit">ENVIAR</button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <h2>Autor del articulo</h2>
            <div>
              <img src={author} alt="" />
            </div>
            <h3>John Doe</h3>
            <p>Etiam vel magna sed leo feugiat cursus. Cras mollis blandit </p>
            <h3>Ultimos post</h3>
            <div className="ultimate__post">
              <img src={pet1} alt="" />
              <div>
                <h2>Avances del Blog</h2>
                <p>
                  Etiam vel magna sed leo feugiat cursus. Cras mollis blandit{" "}
                </p>
                <button>LEER MAS</button>
              </div>
            </div>
            <div className="ultimate__post">
              <img src={pet1} alt="" />
              <div>
                <h2>Avances del Blog</h2>
                <p>
                  Etiam vel magna sed leo feugiat cursus. Cras mollis blandit{" "}
                </p>
                <button>LEER MAS</button>
              </div>
            </div>
            <h2>Tags</h2>
            <div className="tags">
              <Link>Mueble</Link>
              <Link>Azul</Link>
              <Link>Mascotas</Link>
              <Link>Perros</Link>
              <Link>Niños</Link>
              <Link>Rojo</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="blogDetails__same">
        <h3>Post </h3>
        <div>
          {fakeBlog.slice(0, 3).map((x) => (
            <BlogCard x={x}></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
