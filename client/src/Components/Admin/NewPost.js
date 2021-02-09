import React from "react";
import TextFormat from "./TextFormat";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const NewPost = ({ setNewTic }) => {
  return (
    <div className="newTicket">
      <div className="newTicket__top">
        <button onClick={() => setNewTic(false)}>
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </button>
        <h3>Nueva entrada</h3>
      </div>
      <div className="newTicket__bottom">
        <small>titulo de la entrada</small>
        <form action="">
          <input type="text" placeholder="Titulo entrada" />
          <div style={{ width: "400px" }}>
            <TextFormat></TextFormat>
          </div>
          <textarea name="" id="" cols="100" rows="10"></textarea>
          <div>
            <button>borrador</button>
            <button>publicar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
