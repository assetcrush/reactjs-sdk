![NPM License](https://img.shields.io/npm/l/@assetcrush/reactjs-sdk) ![NPM Version](https://img.shields.io/npm/v/@assetcrush/reactjs-sdk)

#### Please :star: it, thanks :thumbsup:

# assetcrush

A simple reactjs library to resize image on fly.

## What is assetcrush ?

assetcrush is an image resize service for on the fly dynamic resize. If
your users are uploading images of various sizes and then you are
consuming those images on different devices then this service is ideal
for your use. Since every device has different dimensions our sdk will
make sure to get the rightly resized image for you via assetcrush resize
service.

## Getting started

[https://assetcrush.com/en/docs/getting-started](https://assetcrush.com/en/docs/getting-started)

### Installation

```
npm i @assetcrush/reactjs-sdk --save
```

or with yarn

```
yarn add @assetcrush/reactjs-sdk
```

### Usage

```javascript
import React from "react";
import { ImageCrush, setKey } from "@assetcrush/reactjs-sdk";

setKey("123");

function App() {
  return (
    <div style={{ width: 100, height: 100 }}>
      <ImageCrush
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
```

## Props

| Prop     | Type     | Required | Note            |
| -------- | -------- | -------- | --------------- |
| `url`    | `string` | yes      | image url       |
| `width`  | `string` | no       | width of image  |
| `height` | `string` | no       | height of image |

Any additional props are passed down to underlying `<img />` element.

# Run example

```
git clone https://github.com/fawaz-ahmed/asset-crush-reactjs-sdk.git
cd asset-crush-reactjs-sdk/example
yarn install # or npm install

# to run with npm
npm start

# to run with yarn
yarn start
```

## Seeing issues or any feedback or feature suggest ?

Create an [issue](https://github.com/fawaz-ahmed/asset-crush-reactjs-sdk/issues) with github.
