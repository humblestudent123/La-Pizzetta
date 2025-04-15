// import React from 'react';
// import './App.css';
// import pizzaImage from './images/f9df39e004c15247b2be6711bc3ec6dc.jpg';  // Импорт изображения
// function App() {
//   return (
//     <div className="App">
//       <h1>Добро пожаловать в магазин пиццы!</h1>
//                 <h2>La Pizzetta</h2>
//                 <h3>"La Pizzetta — вкус, который приносит радость в каждый кусочек!"</h3>
//     </div>
//   );
// }

// export default App;







import React from 'react';
import pizzaImage from './images/f9df39e004c15247b2be6711bc3ec6dc.jpg';  // Импорт изображения

function App() {
  return (
    // <div style={{ 
    //   backgroundImage: `url(${pizzaImage})`, 
    //   backgroundSize: 'cover', 
    //   backgroundPosition: 'center',
    //   height: '300',
    //   margin: 0, // <- можно на всякий случай
    //   padding: 0,
    // }}>
    //   <h1>Добро пожаловать в La Pizzetta!</h1>
    //   <h2>La Pizzetta</h2>
    //   <h3>"La Pizzetta — вкус, который приносит радость в каждый кусочек!"</h3>
    // </div>


    <div
  className="App"
  style={{
    backgroundImage: `url(${pizzaImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
  }}
></div>

  );
}

export default App;





