# assetcrush

A simple reactjs library to resize image on fly.

## What is assetcrush ?

[assetcrush](https://assetcrush.com/) is an image resize service for on the fly dynamic resize. If
your users are uploading images of various sizes and then you are
consuming those images on different devices then this service is ideal
for your use. Since every device has different dimensions our sdk will
make sure to get the rightly resized image for you via assetcrush resize
service.

### Installation

```
npm i -S @assetcrush/reactjs-sdk
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
import { setKey } from "@assetcrush/reactjs-sdk";

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


### Props

| Prop     | Type     | Required | Note            |
| -------- | -------- | -------- | --------------- |
| `url`    | `string` | yes      | image url       |
| `width`  | `string` | no       | width of image  |
| `height` | `string` | no       | height of image |
| `animated` | `bool` | no       | image fade in effect |
| `reloadIconColor` | `string` | no       | color of reload icon if image fails |
| `spinnerIcon` | `string` | no       | spinner component icon while image loads |
| `spinnerColor` | `string` | no       | color of spinner |
| `hideSpinner` | `bool` | no       | render spinner while image loads or not |
| `onError` | `func` | no       | if image fails to load (returns error details) |
| `onLoad` | `func` | no       | if image loads successfully (returns image headers) |

Any additional props are passed down to underlying `<img />` element.


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
| `backgroundColor`    | `string` | no      | color of background layer of image       |
| `debounce` | `number` | no       | image layout handler debounce |
| `wrapperStyle` | `object` | no       | style object for outermost div |
| `url`    | `string` | yes      | image url       |
| `width`  | `string` | no       | width of image  |
| `height` | `string` | no       | height of image |
| `animated` | `bool` | no       | image fade in effect |
| `reloadIconColor` | `string` | no       | color of reload icon if image fails |
| `spinnerIcon` | `string` | no       | spinner component icon while image loads |
| `spinnerColor` | `string` | no       | color of spinner |
| `hideSpinner` | `bool` | no       | render spinner while image loads or not |
| `onError` | `func` | no       | if image fails to load (returns error details) |
| `onLoad` | `func` | no       | if image loads successfully (returns image headers) |

Any additional props are passed down to underlying `<img />` component.

## Run example

```javascript
git clone https://github.com/assetcrush/reactjs-sdk.git
cd reactjs-sdk/example
yarn install # or npm install


export default App;
```

## to run with npm
```javascript
npm start
```

## to run with yarn

```javascript
yarn start
```
## Testing with Jest

Make sure to add `jest.useFakeTimers();` to your test file.
See [Stackoverflow](https://stackoverflow.com/questions/50793885/referenceerror-you-are-trying-to-import-a-file-after-the-jest-environment-has) post and [jest timer mocks](https://jestjs.io/docs/timer-mocks)

## Seeing issues or any feedback or feature suggest ?

Create an [issue](https://github.com/assetcrush/reactjs-sdk.git/issues) with github.
