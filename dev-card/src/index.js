import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

function App() {
    return  <Card />
}

function Card() {

    const skills = [
        {'skill': 'Python 🐱‍🐉', 'style': {backgroundColor: 'lightBlue'}},
        {'skill': 'NodeJS 👍 ', 'style': {backgroundColor: 'crimson'}},
        {'skill': 'Git and GitHub 👊', 'style': {backgroundColor: 'yellow'}},
        {'skill': 'HTML + CSS 🤞', 'style': {backgroundColor: 'lightGreen'}},
        {'skill': 'MySQL + Firebird ✨', 'style': {backgroundColor: 'coral'}},
    ]
    return (
        <main>
            <img src="./unnamed.jpg" alt='me' className='me'></img>
            <div>
                <h2 className='title'>Gustavo Faustino</h2>
                <h3 className='description'>Desenvolvedor full-stack em Contabilitá, especializado em Python e NodeJS. Em quanto não estou codando, gosto de jogos e de animes.</h3>
                <div className='skills'>{skills.map((skillObj) => (<Skill name={skillObj.skill} style={skillObj.style} />))}</div>
            </div>
        </main>
    )
}

function Skill ( {name, style}) {
    return <h3 className='skill' style={style}>{name}</h3>
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)