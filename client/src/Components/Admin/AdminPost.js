import React, { useState } from "react";
import AdminProfile from "./AdminProfile";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PostTable from "./PostTable";
import NewPost from "./NewPost";
const AdminPost = () => {
  const [newPost, setNewPost] = useState(false);
  return (
    <div className="adminPost">
      <div className="adminTop">
        <h2>Correos</h2>
        <AdminProfile></AdminProfile>
      </div>
      {!newPost && (
        <div className="adminPost__body">
          <div style={{ marginBottom: "40px" }}>
            <div>
              <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                APLICAR A SELECCION
              </p>
              <button
                style={{
                  marginRight: "10px",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                ACTIVAR
              </button>
              <button>DESACTIVAR</button>
            </div>
            <div>
              <div>
                <button onClick={() => setNewPost(true)}>
                  <AddCircleIcon></AddCircleIcon>
                </button>
                <p>Agregar nuevo tipo de correo</p>
              </div>
            </div>
          </div>
          {/* <TicketTable></TicketTable> */}
          <PostTable></PostTable>
        </div>
      )}
      {newPost && <NewPost setNewTic={setNewPost}></NewPost>}
    </div>
  );
};

export default AdminPost;
