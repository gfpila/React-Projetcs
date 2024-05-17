import React from 'react';
import ReactDOM from 'react-dom/client';
import pizzaData from './data.js';
import "./index.css";

function App() {
    return (
        <div className='container'>
            <Header/>
            <Menu/>
            <Order openHour='12' closeHour='22'/>
            <Footer/>
        </div>
    )
}


function Header () {
    return <header className='header'><h1>Fast React Pizza Co.</h1></header>
}


function Menu () {
    return (
        <main className='menu'>
            <h2>Here's our menu</h2>
            <div className='pizzas'>
                {pizzaData.map((pizza, index) => (<Pizza key={index} index={index} />))}
            </div>
        </main>
    )
}


function Footer () {

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const status = hour < openHour || hour >= closeHour ? "We're currently open!" : "We're currently closed!";
    return (
        <footer>
            {new Date().toLocaleTimeString()} - {status}
            <p>Fast React Pizza Co. © 2021</p>
        </footer>
    )
}


function Pizza(props) {
    const className = pizzaData[props.index].soldOut ? 'pizza sold-out' : 'pizza';
    return (
        <li className={className}>
            <img src={pizzaData[props.index].photoName} alt={pizzaData[props.index].name}/>
            <div>
                <h3>{pizzaData[props.index].name}</h3>
                <p>{pizzaData[props.index].ingredients}</p>
                <span>{pizzaData[props.index].soldOut ? 'Sold Out' : pizzaData[props.index].price + '$'}</span>
            </div>
        </li>
    )
}


function Order({ closeHour, openHour }) {
    return (
      <div className="order">
        <p>
          We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
          online.
        </p>
        <button className="btn">Order</button>
      </div>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)