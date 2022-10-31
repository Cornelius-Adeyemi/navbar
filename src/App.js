import logo from './logo.svg';
import './App.css';
import {Navigate, Icon} from "./navigate";
import {links, social} from "./data";
import { FaBars } from 'react-icons/fa';
import {useState, useEffect} from "react";




function App() {

  const [toggle, setToggle] = useState(false);

  const showButton = ()=>{
    if(window.innerWidth >880){
      setToggle(false)
    }
    }

  window.addEventListener("resize", showButton);

  return (
    <div className="App">
      <nav className='navbar'>
       <div className='navbar-container'> 
       <div className='mobile-bar'> <img src={logo} alt="logo"/>
       <FaBars className={toggle? 'fabar fabar-active':'fabar'} onClick={()=>setToggle(!toggle)}/>
       </div>
        <ul className={toggle?"navigate active":"navigate"}>
          {links.map((item, index)=>{
            return <Navigate text={item.text} key={index}/>
          })}
        </ul>
        <ul className='social'>
         {social.map((item, index)=> <Icon url={item.url} component={item.icon} key={index} />)}
        </ul>
        
       </div>
      </nav>
    </div>
  );
}

export default App;
