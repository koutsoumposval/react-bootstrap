# React Bootstrap Setup

The stack is made of React and is built by Webpack. 
TailwindCSS provides utility classes for styling and last but not least Jest provides all testing tools.

## Usage
### Setup
Simply install all assets with `npm`  
```npm install```

### Development
And for development run dev server with hot reloading  
```npm run dev```

### Testing
Testing is done with `jest`  
```npm test```

### Build
```npm run build```  
This will create a `bundle.js` and `bundle.css` in the dist folder. The `index.html` file already there will pick them up automatically. The used server still needs to gzip the created bundles.

## More on

#### Tailwind: https://tailwindcss.com/docs 
CSS utility library recently released in alpha by (amongst others) Adam Wathan and Steve Schoger. Using CSS utilities helps keeping a consistent interface while keeping the footprint low. It also defaults to using system fonts reducing the overhead of loading webfonts. [History of CSS patterns by Adam Wathan](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/).

#### React: https://reactjs.org/docs/
JavaScript view layer by Facebook. It is fast and lightweight. Aiming for a high seperation of concerns.

#### Jest: https://facebook.github.io/jest/
JavaScript testing framework. Jest contains everything needed to run tests. i.e. Jest contains a virtual DOM, a test runner and assertion tools. As well as functionality to create snapshots to visually compare the results of rendered components.

#### StandardJS: https://standardjs.com/rules.html
JavaScript coding style. Standard aims to be a clean and simple style.

#### AirBnB react style: [github.com/airbnb/javascript](https://github.com/airbnb/javascript/tree/master/react)
complement to StandardJS for writing React components. AirBnB has quite the experience with building React apps. Their styleguide aims to prevent one from making mistakes.  
***note**: StandardJS is leading whenever AirBnB and Standard rules conflict.*

## Credits
All credits are going to [Maarten Bicknese][0]. This is a simple bootstrap template for personal use.

[0]: https://github.com/mbicknese
