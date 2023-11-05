import {useSelector} from "react-redux";
import { nurseLogout } from "../../http";
import { useNavigate } from 'react-router-dom';



const Nurse = ({onClose}) => {

    const data1 = useSelector((state) => {
      return  state.user;
   })

   const navigate = useNavigate();

function logoutmain(){
localStorage.clear();
navigate('/');
} 

   const logout = async ()=>{
  
    const result = await nurseLogout();
    console.log(result);
    console.log("logout");
   }

  return (
  
    <div style={{position:"fixed",bottom:"0",background:"black",height:"100vh",width:"20%"}}>
        {/* <Navbar /> */}
      <div style={{display:"flex",justifyContent:"space-between"}}>
    <h1 style={{fontFamily:"Bold" ,borderBottom: "1px solid rgb(212, 212, 212)",backgroundColor: "grey"}}>Nurse</h1>
    
      </div>
      
      <h2 style={{color:"white", fontFamily: "Arial",borderBottom: "1px solid rgb(212, 212, 212)"}}>{data1.user.username}</h2>
      <button onClick={logoutmain} onSubmit={()=>{
    navigate("/")
   }}>Log Out</button>
    </div>
  )
}

export default Nurse;