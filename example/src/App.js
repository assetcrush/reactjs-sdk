import React from "react";
import ImageResize from "./ImageResize";
import { setKey } from "./key";

setKey("123");

function App() {
  return (
    <div style={{ width: 50, height: 50 }}>
      <ImageResize
        url={
          "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg"
        }
        width={"100"}
        height={"100"}
      />
    </div>
  );
}

export default App;
