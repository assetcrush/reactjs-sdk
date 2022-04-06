import React from "react";
import { ImageCrushAdoptive, setKey } from "./modules";

setKey("test-key");

const testUrl =
  "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg";

function App() {
  return (
    <div style={{ width: 50, height: 50 }}>
      <ImageCrushAdoptive url={testUrl} />
    </div>
  );
}

export default App;
