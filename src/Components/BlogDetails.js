import React from "react";
import bg_3 from "../images/bg_3.png";
import author from "../images/author.png";
import pet1 from "../images/pet1.png";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const BlogDetails = () => {
  return (
    <div className="blogDetails">
      <div></div>
      <p>Regresar al Blog</p>
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
              faucibus volutpat. Sed pretium magna eget dui lacinia, a molestie
              metus mattis. Donec imperdiet augue scelerisque urna cursus
              facilisis. Donec nec lacinia arcu. Duis maximus tincidunt purus,
              eget commodo magna tincidunt eget. Duis vitae ornare arcu. Aliquam
              convallis, tortor non molestie iaculis, leo lectus dictum eros, id
              cursus diam nisl eu ipsum. Donec dapibus condimentum purus, id
              fringilla nisl pulvinar a. Proin lobortis eleifend nisi vel
              rhoncus. Vestibulum tincidunt est at neque dictum, in hendrerit
              tortor tempus. Nunc mollis leo ultrices, pulvinar purus at,
              pulvinar mi. Suspendisse vel sem eros.
            </p>
            <div>
              <button className={"disable-btn"}>
                <ArrowBackIosIcon></ArrowBackIosIcon>
              </button>

              <button className={"disable-btn"}>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </button>
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
    </div>
  );
};

export default BlogDetails;
