# Classy

Extend this class to add 'on' event listeners to your other es6 classes

## Installation

```bash
npm i @meteora-digital/classy
yarn add @meteora-digital/classy
```

## Usage

```es6
import Classy from '@meteora-digital/classy';

class MyClass extends Classy {
  constructor() {
    super();
  }

  init() {
    // Do something

    this.callback('init', data);
  }
}

MyClass.on('init', (data) => {
  // do something with the data
})
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

