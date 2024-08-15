import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import About from "./components/About";
import MyData from "./components/MyData";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="React js" mode={mode} togglemode={togglemode} />
        

        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/sonu"
              element={
                <TextFrom heading="Enter the Text to Analyze" mode={mode} />
              }
            />
            <Route path="/monu" element={<MyData />} />
          </Routes>
        </div>

        {/* If you want to render the About component by default, you can include it outside of the Routes */}
        {/* <About /> */}
      </Router>
    </>
  );
}

export default App;

// import "./App.css";
// import Navbar from "./components/Navbar";
// import TextFrom from "./components/TextFrom";
// import About from "./components/About";
// import MyData from "./components/MyData"
// import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes, // Import Routes instead of Switch
//   Route,
// } from "react-router-dom";

// function App() {
//   const [mode, setmode] = useState("dark");

//   const togglemode = () => {
//     if (mode === "light") {
//       setmode("dark");
//       document.body.style.backgroundColor = "grey";
//     } else {
//       setmode("light");
//       document.body.style.backgroundColor = "white";
//     }
//   };

//   return (
//     <>
//       <Router>
//         <Navbar title="React js" mode={mode} togglemode={togglemode} />
//         <MyData/>

//         <div className="container">
//           <Routes>
//             <Route path="/about" element={<About />} />
//             <Route
//               path="/sonu"
//               element={
//                 <TextFrom heading="Enter the Text to Analyze" mode={mode} />
//               }
//             />

//             <Routes>
//             <Route path="/monu" element={<MyData />} />

//           </Routes>
//         </div>

//         {/* If you want to render the About component by default, you can include it outside of the Routes */}
//         {/* <About /> */}
//       </Router>
//     </>
//   );
// }

// export default App;

// // import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./components/Navbar";
// // import MyData from "./components/MyData";
// import TextFrom from "./components/TextFrom";
// import About from "./components/About";
// import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   const [mode, setmode] = useState('dark');

//   const togglemode = (() => {
//     if (mode === 'light') {
//       setmode('dark');
//       document.body.style.backgroundColor = 'grey';
//     }
//     else {
//       setmode('light');
//       document.body.style.backgroundColor = "white";

//     }
//   })

//   return (
//     <>
//       <Router>
//         <Navbar title="React js" mode={mode} togglemode={togglemode} />
//         {/* <MyData classNmae="" name="Sonu singh Bhardwaj" post="software Engineer"/> */}

//         <div className="container">
//           <switch>
//             <Route path="./about">
//               <About />
//             </Route>

//             <Route path="/">
//               <TextFrom heading="Enter the Text to Analyze" mode={mode} />
//             </Route>
//           </switch>
//         </div>

//         <About />
//       </Router>
//     </>
//   );
// }

// export default App;

// // import React, { useState } from "react";
// // import logo from "./logo.svg";
// // import "./App.css";
// // import Navbar from "./components/Navbar";

// // function App() {
// //   const [title, setTitle] = useState("Sonu Kumar");

// //   const handleTitleChange = (event) => {
// //     setTitle(event.target.value);
// //   };

// //   return (
// //     <>
// //       <input
// //         type="text"
// //         placeholder="Enter title"
// //         value={title}
// //         onChange={handleTitleChange}
// //       />
// //       <Navbar title={title} />
// //     </>
// //   );
// // }

// // export default App;
