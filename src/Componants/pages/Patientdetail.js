import axios from 'axios';
import {useState,useEffect} from'react'
import { useForm } from "react-hook-form";
import api, { addPatientIdentification } from "../../http/index.js"
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useCallback } from "react";
import {useSelector} from "react-redux";



const Patientdetail = () => {
    const {id, mrNo} = useParams();
    const [patientD, setPatientD] = useState({});
    const [edit, setEdit] = useState(false)
    let navigate= useNavigate()

    useEffect(() => {
      async function getPatient() {
        try {
          const data = await api.get(`/api/patient/${id}/${mrNo}`);
          const patientData = data.data.patient;
          setPatientD(patientData);
        } catch (err) {
          console.log(err.response.data.message);
        }
      }
      getPatient();
    }, []);

    
  return (
    <>
   <h1 style={{ fontFamily: "Bold",background:"pink" }}>Patient Details</h1>

   <h1>identification</h1>
   <label style={{fontSize:"20px"}}>MrNo</label>
   <input type="text" value={patientD.mrNo} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Name</label>
   <input type="text" value={patientD.identification?.name} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Age</label>
   <input type="text" value={patientD.identification?.age} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

    <label style={{fontSize:"20px"}}>Sex</label>
    <input type="text" value={patientD.identification?.sex} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

    <label style={{fontSize:"20px"}}>Ward</label>
   <input type="text" value={patientD.identification?.ward} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Bed No</label>
   <input type="text" value={patientD.identification?.bedNo} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Date Of Addmision</label>
   <input type="text" value={patientD.identification?.dateOfAdmission} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Patient Category</label>
   <input type="text" value={patientD.identification?.patientCategory} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Dr Name</label>
   <input type="text" value={patientD.identification?.drName} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   
   <label style={{fontSize:"20px"}}>Unit</label>
   <input type="text" value={patientD.identification?.unit} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Diagnosis</label>
   <input type="text" value={patientD.identification?.diagnosis} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Chief Complaints: </label>
   <input type="text" value={patientD.identification?.chiefComplaints} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   
   <label style={{fontSize:"20px"}}>History Of PresentIllness</label>
   <input type="text" value={patientD.identification?.historyOfPresentIllness} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Allergy</label>
   <input type="text" value={patientD.identification?.allergy} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <h1>Situation</h1>

   <label style={{fontSize:"20px"}}>Oxygen Support</label>
   <input type="text" value={patientD.situation?.oxygenSupport.os} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Ventilator Support</label>
   <input type="text" value={patientD.situation?.ventilatorSupport.vs} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

  
   <label style={{fontSize:"20px"}}>FiO2</label>
   <input type="text" value={patientD.situation?.ventilatorSupport.fiO2} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Peep</label>
   <input type="text" value={patientD.identification?.peep} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Rr</label>
   <input type="text" value={patientD.situation?.oxygenSupport.rr} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>TidalVolume</label>
   <input type="text" value={patientD.situation?.ventilatorSupport.tidalVolume} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   <label style={{fontSize:"20px"}}>Other</label>
   <input type="text" value={patientD.situation?.ventilatorSupport.other} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   
   <label style={{fontSize:"30px"}}>ContinuousInfusion</label>
   <label style={{fontSize:"25px"}}>Inotrope</label>

   <label style={{fontSize:"20px"}}>Positive</label>
   <input type="text" value={patientD.situation?.continuousInfusion.inotrope.positive} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   <label style={{fontSize:"20px"}}>Pother</label>
   <input type="text" value={patientD.situation?.continuousInfusion.inotrope.pOther} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    
   <label style={{fontSize:"20px"}}>Negative</label>
   <input type="text" value={patientD.situation?.continuousInfusion.inotrope.negative} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   <label style={{fontSize:"20px"}}>Nother</label>
   <input type="text" value={patientD.situation?.continuousInfusion.inotrope.nOther} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   
   <label style={{fontSize:"20px"}}>electrolytesCorrection</label>
   <input type="text" value={patientD.situation?.continuousInfusion.inotrope.electrolytesCorrection} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Immunglobin(IVIg)</label>
   <input type="text" value={patientD.situation?.continuousInfusion.inotrope.IVIg} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>HAI</label>
   <input type="text" value={patientD.situation?.continuousInfusion.inotrope.HAI} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   
   <label style={{fontSize:"20px"}}>Fentanyl</label>
   <input type="text" value={patientD.situation?.continuousInfusion.inotrope.fentanyl} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Atracurium</label>
   <input type="text" value={patientD.situation?.continuousInfusion.inotrope.atracurium} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Midazolam(IVIg)</label>
   <input type="text" value={patientD.situation?.continuousInfusion.inotrope.midazolam} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>SodiumBicarbonate</label>
   <input type="text" value={patientD.situation?.continuousInfusion.inotrope.sodiumBicarbonate} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   
   <label style={{fontSize:"20px"}}>Other</label>
   <input type="text" value={patientD.situation?.continuousInfusion.inotrope.other} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label>Nutritional Status</label>

   <label style={{fontSize:"20px"}}>Oral</label>
   <input type="text" value={patientD.situation?.nutritionalStatus.oral} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>RtFeeding</label>
   <input type="text" value={patientD.situation?.nutritionalStatus.rtFeeding} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    
   <label style={{fontSize:"20px"}}>Nbm</label>
   <input type="text" value={patientD.situation?.nutritionalStatus.nbm} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Other</label>
   <input type="text" value={patientD.situation?.nutritionalStatus.other} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

    <label style={{fontSize:"20px"}}>fluidRestriction</label>
   <input type="text" value={patientD.situation?.nutritionalStatus.fluidRestriction} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    
  <h1>Assessment</h1>

  <label style={{fontSize:"30px"}}>Vital signs</label>
  <label style={{fontSize:"20px"}}>Temperature</label>
   <input type="text" value={patientD.assessment?.vitalSigns.temperature} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    
   <label style={{fontSize:"20px"}}>Pulse</label>
   <input type="text" value={patientD.assessment?.vitalSigns.pulse} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"20px"}}>Respiration</label>
   <input type="text" value={patientD.assessment?.vitalSigns.respiration} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

  
   <label style={{fontSize:"20px"}}>Spo2</label>
   <input type="text" value={patientD.assessment?.spo2} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   
   <label style={{fontSize:"25px"}}>Other Parameters</label>
     <label style={{fontSize:"20px"}}>Etco2</label>
   <input type="text" value={patientD.assessment?.otherParameters.etco2} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   <label style={{fontSize:"20px"}}>Cvp</label>
   <input type="text" value={patientD.assessment?.otherParameters.cvp} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   <label style={{fontSize:"20px"}}>Abp</label>
   <input type="text" value={patientD.assessment?.otherParameters.abp} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   <label style={{fontSize:"20px"}}>Ecg</label>
   <input type="text" value={patientD.assessment?.ecg} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   <label style={{fontSize:"20px"}}>Arrhythmia</label>
   <input type="text" value={patientD.assessment?.arrhythmia} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
  
   <label style={{fontSize:"20px"}}>Intake</label>
   <input type="text" value={patientD.assessment?.intake} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    
   <label style={{fontSize:"20px"}}>Output</label>
   <input type="text" value={patientD.assessment?.output} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
  
   <label style={{fontSize:"30px"}}>Investigations</label>
   <label style={{fontSize:"25px"}}>Pathology</label>
   <label style={{fontSize:"20px"}}>Random blood sugar</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.randomBloodSugar} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
  
   <label style={{fontSize:"20px"}}>Hemoglobin</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.hemoglobin} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
  
   <label style={{fontSize:"20px"}}>Wbc</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.wbc} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
  
   <label style={{fontSize:"20px"}}>Rbc</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.rbc} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
  
   <label style={{fontSize:"20px"}}>PlateletCount</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.plateletCount} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
  
   <label style={{fontSize:"20px"}}>Creatine</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.creatine} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   <label style={{fontSize:"20px"}}>Sodium</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.sodium} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
  
   <label style={{fontSize:"20px"}}>Potassium</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.potassium} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
  
   <label style={{fontSize:"20px"}}>Chloride</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.chloride} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
  
   <label style={{fontSize:"20px"}}>Abg</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.abg} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
  
   <label style={{fontSize:"20px"}}>Hhh</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.hhh} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   <label style={{fontSize:"20px"}}>Lft</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.lft} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   <label style={{fontSize:"20px"}}>CoagulationProfile</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.coagulationProfile} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   <label style={{fontSize:"20px"}}>Other</label>
   <input type="text" value={patientD.assessment?.investigations.pathology.other} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    

   <label style={{fontSize:"30px"}}>Radiology</label>
   <label style={{fontSize:"20px"}}>Other</label>
   <input type="text" value={patientD.radiology?.investigations.xray} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    
   <label style={{fontSize:"20px"}}>CtScan</label>
   <input type="text" value={patientD.radiology?.investigations.ctScan} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
 
   <label style={{fontSize:"20px"}}>Mri</label>
   <input type="text" value={patientD.radiology?.investigations.mri} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    
   <label style={{fontSize:"20px"}}>Other</label>
   <input type="text" value={patientD.radiology?.investigations.other} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>

<h1>Background</h1>
<label style={{fontSize:"20px"}}>Past Medical History</label>
   <input type="text" value={patientD.background?.pastMedicalHistory } style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    
   <label style={{fontSize:"20px"}}>Past Surgical History</label>
   <input type="text" value={patientD.background?.pastSurgicalHistory} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
 
   <label style={{fontSize:"20px"}}>Medication</label>
   <input type="text" value={patientD.background?.medication} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    

   <label style={{fontSize:"20px"}}>Blood products</label>
   <label style={{fontSize:"20px"}}>wholeBlood</label>
   <input type="text" value={patientD.background?.bloodProducts.wholeBlood } style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    
   <label style={{fontSize:"20px"}}>Fresh Frozen Plasma</label>
   <input type="text" value={patientD.background?.bloodProducts.freshFrozenPlasma} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
 
   <label style={{fontSize:"20px"}}>Single Donor Plateletes</label>
   <input type="text" value={patientD.background?.bloodProducts.singleDonorPlateletes} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    
   <label style={{fontSize:"20px"}}>Cryoprecipitate Antihemophilic Factor</label>
   <input type="text" value={patientD.background?.bloodProducts.cryoprecipitateAntihemophilicFactor} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>


   <h1>Recommendation</h1>
<label style={{fontSize:"20px"}}>Pending Medication</label>
   <input type="text" value={patientD.recommendation?.pendingMedication } style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
   
   <label style={{fontSize:"20px"}}>Pending Reports</label>
   <input type="text" value={patientD.recommendation?.pendingReports} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
 
   <label style={{fontSize:"20px"}}>Special Order</label>
   <input type="text" value={patientD.recommendation?.specialOrder} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    
   <label style={{fontSize:"20px"}}>Pending Procedure</label>
   <input type="text" value={patientD.recommendation?.pendingProcedures} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
 
   <label style={{fontSize:"20px"}}>Other Order</label>
   <input type="text" value={patientD.recommendation?.otherOrder} style={{color:"white",fontSize:"15px"}} disabled={(edit)? false:true}/>
    
   
   <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/mgmcet/icu")
   }}>
       Back
      </Button>
   </>
  )
}

export default Patientdetail