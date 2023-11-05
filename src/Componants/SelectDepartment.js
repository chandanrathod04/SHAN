import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



function SelectDepartment() {
    let navigate= useNavigate()
   

  return (
    <>
    <h1 style={{fontFamily:"Bold",background:"pink"}}>Select Department</h1>
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={()=>{
    navigate("/mgmcet/icu")
   }}>
        MICU
      </Button>
      <Button variant="secondary" size="lg" onClick={()=>{
    navigate("/ICU")
   }}>
        SICU
      </Button>
      <Button variant="primary" size="lg">
        EMICU
      </Button>
      
    </div>
    
    
    <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/hospitals")
   }}>
       Back
      </Button>
    </>
  );
}

export default SelectDepartment;