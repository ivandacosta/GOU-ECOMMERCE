import React from "react";
import "./Home.css";
//components
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

function Home() {
  return (
    <div>
      <div class="contenedor">
        <h1>
          Productos destacados..<span>&#160;</span>
        </h1>
      </div>
      <ItemDetailContainer />
    </div>
  );
}

export default Home;
