import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    return ( 
        <>
        <ul>
            <li><NavLink to="/dashboard"  style={({isActive})=>{return{backgroundColor: isActive ?  'skyblue': ''}}}>Dashboard</NavLink></li>
        </ul>
    </>
    );
    };
    export default Navbar;