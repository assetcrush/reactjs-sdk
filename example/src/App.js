import React from "react";
import ImageCrush from "./ImageCrush";
import { setKey } from "./key";

setKey("123");

function App() {
  return (
    <div style={{ width: 50, height: 50 }}>
      <ImageCrush
        url={
          "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg"
        }
        width={50}
        height={50}
      />
    </div>
  );
}

export default App;
