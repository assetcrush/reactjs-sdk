# assetcrush

A simple reactjs library to resize image on fly.

### Installation

```javascript
npm i @assetcrush/reactjs-sdk --save
```

or with yarn

```javascript
yarn add @assetcrush/reactjs-sdk
```

## Usage

### setKey

Place this in your index.js file, this needs to be loaded once at initialization. Get your key by signing up on
[console.assetcrush.com](https://console.assetcrush.com/)

<code>

```javascript
import { setKey } from "./modules";

setKey("test-key");
```

</code>

### ImageCrush

Basic usage of Imagecrush pass width, height and url and let the magic happens.

<code>

```javascript
import React from "react";
import { ImageCrush } from "@assetcrush/reactjs-sdk";

const testUrl =
  "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg";

function App() {
  return (
    <div style={{ width: 50, height: 50 }}>
      <ImageCrush url={testUrl} width={50} height={50} />
    </div>
  );
}

export default App;
```

</code>

### ImageCrushAdoptive

Its the more adoptive method to use you don't need to pass width and height it will inherit width and height from outermost wrapped div

<code>

```javascript
import React from "react";
import { ImageCrushAdoptive } from "@assetcrush/reactjs-sdk";

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
```

</code>

## Props

| Prop     | Type     | Required | Note            |
| -------- | -------- | -------- | --------------- |
| `url`    | `string` | yes      | image url       |
| `width`  | `string` | no       | width of image  |
| `height` | `string` | no       | height of image |

Any additional props are passed down to underlying `<img />` element.

## Run example

```javascript
git clone https://github.com/assetcrush/reactjs-sdk.git
cd reactjs-sdk/example
yarn install # or npm install
```

## Adoptive resize sample

Adoptive method to use this sdk is wrapping it inside div and using ref for responsive width and height

<code>

```javascript
import React, { useRef } from "react";
import { ImageCrush } from "@assetcrush/reactjs-sdk";

const testUrl =
  "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg";

function App() {
  const ref = useRef();

  return (
    <div ref={useRef()} style={{ width: 50, height: 50 }}>
      <ImageCrush
        url={testUrl}
        width={ref.current?.clientWidth}
        height={ref.current?.clientHeight}
      />
    </div>
  );
}

export default App;
```

</code>

## to run with npm

```javascript
npm start
```

## to run with yarn

```javascript
yarn start
```

## Seeing issues or any feedback or feature suggest ?

Create an [issue](https://github.com/assetcrush/reactjs-sdk.git/issues) with github.
