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

// Create a new class that extends Classy
class MyClassController extends Classy {
  constructor() {
    super();
  }

  init() {
    // Do something

    // Include the callback method in your class to trigger the event
    this.callback('init', data);
  }
}

// Create a new instance of your class
const MyClass = new MyClassController();

// Add an event listener to your class
MyClass.on('init', (data) => {
  // do something with the data
});

// Trigger the method, which will trigger the event
MyClass.init();
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
