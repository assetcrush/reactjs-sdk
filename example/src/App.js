import React from 'react';
import ImageResize from './ImageResize';
import { setKey } from './key';

setKey('test-key');

const testUrl = 'https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg'

function App() {
  return (
    <div style={{ width: 50, height: 50 }}>
      <ImageResize
        url={testUrl}
        width={200}
        height={200}
      />
    </div>
  );
}

export default App;
