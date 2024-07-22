// import React, { useState, useEffect } from 'react';
// // import './TrafficLight.css';

// const TrafficLight = () => {
//   const [color, setColor] = useState('green');
//   const colors = ['green', 'yellow', 'red'];
//   const intervals = {
//     green: 3000,
//     yellow: 1000,
//     red: 2000,
//   };

//   useEffect(() => {
//     let currentIndex = 0;
//     const interval = setInterval(() => {
//       setColor(colors[currentIndex]);
//       currentIndex = (currentIndex + 1) % colors.length;
//     }, intervals[colors[currentIndex]]);

//     return () => clearInterval(interval);
//   });

//   return (
//     <div className="border-2 ">
//       <div className={`light ${color === 'green' ? 'green' : ''}`}></div>
//       <div className={`light ${color === 'yellow' ? 'yellow' : ''}`}></div>
//       <div className={`light ${color === 'red' ? 'red' : ''}`}>sadf</div>
//     </div>
//   );
// };

// export default TrafficLight;
