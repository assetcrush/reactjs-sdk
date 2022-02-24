import React from 'react';
import { ImageCrush, setKey } from './modules';

setKey('test-key');

const testUrl = 'https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg';

function App() {
  return (
    <div style={{ width: 50, height: 50 }}>
      <ImageCrush
        url={testUrl}
        width={50}
        height={50}
      />
    </div>
  );
}

export default App;
