// import React, { useState } from "react";

// const BgChange = () => {
//   //   const colors = ["red", "green", "blue", "black"];
//   // const [bgColor,setbackground] = useState('color');
//   // const changeBg = () =>{
//   //     const color = colors[Math.floor(Math.random() * colors.length)]
//   //     setbackground(color)
//   // }

//   // return(
//   //     <button onClick={changeBg} style={{backgroundColor: bgColor}}>Click Me</button>
//   // )

//   //   const [bgColor, setBg] = useState("yellow");
//   //   let [count, setCount] = useState(1);

//   //   const changeBg = () => {
//   //     const color = colors[Math.floor(Math.random() * colors.length)];
//   //     setBg(color);
//   //     // console.log(`bg changed ${count} times`);
//   //     // setCount(count+1);
//   //   };

//   //   return (
//   //     <>
//   //       <div className="demoDiv" style={{ backgroundColor: bgColor }}></div>
//   //       <button onClick={changeBg}>Click Me</button>
//   //     </>
//   //   );

//   const colors = ["red", "green", "blue", "black"];
//   const [bgColor, setBg] = useState("orange");
//   const [bgColor1, setBg1] = useState("yellow");
//   let [count, setCount] = useState(1);

//   const bgChange = () => {
//     let color = colors[Math.floor(Math.random() * colors.length)];
//     setBg(color);
//     let color1 = colors[Math.floor(Math.random() * colors.length) + 1];
//     setBg1(color1);
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <div
//         style={{
//           backgroundColor: bgColor,
//           width: "100%",
//           height: "auto",
//           padding: "2rem",
//           margin: "0",
//         }}
//       >
//         <button onClick={bgChange}>Click Here to change the color</button>
//         <p style={{marginBottom:'1rem', color:'white', border: "1px solid black", backgroundColor:bgColor1}}>Button Clicked {count} times</p>
//       </div>
//     </>
//   );
// };

// export default BgChange;



import React, { useState } from "react";

const BgChange = () => {
  const colors = ["red", "green", "blue", "black"];
  const [bgColor, setBg] = useState("orange");
  const [count, setCount] = useState(0);

  const changeBackground = () => {
    setBg(colors[Math.floor(Math.random() * colors.length)]);
    setCount(count + 1);
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: "2rem", textAlign: "center" }}>
      <button onClick={changeBackground}>Change Background</button>
      <p>Clicked {count} times</p>
    </div>
  );
};

export default BgChange;
