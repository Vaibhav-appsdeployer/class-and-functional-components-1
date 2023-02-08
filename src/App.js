import React from "react";
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <Navbar  />
      <h1>Heading</h1>
      <p>Paragraph</p>
    </div>
  );
}

export default App;


// Most of the time we use function components instent of class components Bcoz it is easy to implement and better to understand  

// 1. import react and another files that you want to add in this file 
// 2.  create a function name it based on your file name (else to mantain)
// 3. in this function return the main structure (main code that contains the basic structure) 
// 4. at the end Export the default function






// import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>this is also a heading</h1>
//         <p> This is para</p>
//       </div>
//     );
//   }
// }

// export default App;





