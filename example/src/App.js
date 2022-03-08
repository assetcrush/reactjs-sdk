import React from "react";
import { ImageCrushAdoptive, setKey } from "./modules";

setKey("test-key");

const testUrl =
  "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg";

function App() {
  return (
    <div style={{ width: 250, height: 250 }}>
      <ImageCrushAdoptive url={testUrl} />
    </div>
  );
}

export default App;
