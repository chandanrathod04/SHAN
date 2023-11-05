import React from "react";
import { useForm } from "react-hook-form";
import api from "../../http/index";

const Assessment =  ({ patientData }) => {
	const { register, handleSubmit } = useForm();

	console.log({ patientData });
	const onSubmit = handleSubmit(async (data) => {
		try {
			const res = await api.post("/api/patient/update", {
				id: patientData.id,
				mrNo: patientData.mrNo,
				// ISBAR: "situation",
				ISBAR: "assessment",
				// id: "642d5e148f0df06741aa4fa6",
				// mrNo: 123,
				assessment: data,
			});
		} catch (error) {
			console.error(error);
		}
	});

	return (
		<form onSubmit={onSubmit}>
			<h1>ASSESMENT</h1>

			<h2 style={{ color: "white" }}>Vital signs</h2>
			<br></br>
			<br></br>
			<label>Temperature</label>
			<input type="text" {...register("vitalSigns.temperature", { required: false })} />
			<label>Pulse</label>
			<input type="text" {...register("vitalSigns.pulse", { required: false })} />
			<label>Respiration</label>
			<input type="text" {...register("vitalSigns.respiration", { required: false })} />
			<label>Blood pressure</label>
			
			<label>Sistolic</label>
			<input type="text" {...register("vitalSigns.bloodPressure.sistolic", { required: false })} />
            <label>distolic</label>
			<input type="text" {...register("vitalSigns.bloodPressure.distolic", { required: false })} />
            <label>Spo2</label>
			<input type="text" {...register("vitalSigns.spo2", { required: false })} />

             
			<label>Other Parameters</label>
			<label>ETCO2</label>
			<input type="text" {...register("otherParameters.etco2", { required: false })} />
			<label>CVP</label>
			<input type="text" {...register("otherParameters.cvp", { required: false })} />
			<label>ABP</label>
			<input type="text" {...register("otherParameters.abp", { required: false })} />

			<label>ECG</label>
			<select {...register("vitalSigns.ecg")}>
			{[
					"sr",
					"sb",
					"st",
					
				].map((item) => (
					<option value={item}>{item}</option>
				))}
			</select>

			<h1>Or</h1>

			<label>Arrhythmia</label>
			<select {...register("arrhythmia")}>
			{[
					"svt", "af", "af1", "vTach", "vf",
					
				].map((item) => (
					<option value={item}>{item}</option>
				))}
			</select>

			<label>Intake</label>
			<input type="text" {...register("intake", { required: false })} />
			<label>Output</label>
			<input type="text" {...register("output", { required: false })} />

			<h1>Investigations</h1>
			<label>Pathology</label>
			<label>Random blood sugar</label>
			<input
				type="text"
				{...register("investigations.pathology.randomBloodSugar", { required: false })}
			/>
			<label>Hemoglobin</label>
			<input type="text" {...register("investigations.pathology.hemoglobin", { required: false })} />
			<label>WBC</label>
			<input type="text" {...register("investigations.pathology.wbc", { required: false })} />
			<label>RBC</label>
			<input type="text" {...register("investigations.pathology.rbc", { required: false })} />
			<label>Platelet count</label>
			<input type="text" {...register("investigations.pathology.plateletCount", { required: false })} />
			<label>Creatine</label>
			<input type="text" {...register("investigations.pathology.creatine", { required: false })} />
			<label>Sodium </label>
			<input
				type="text"
				{...register("investigations.pathology.sodium", { required: false })}
			/>
			<label> Potassium</label>
			<input
				type="text"
				{...register("investigations.pathology.potassium", { required: false })}
			/>
			<label>Chloride</label>
			<input type="text" {...register("investigations.pathology.chloride", { required: false })} />
			<label>ABG</label>
			<input type="text" {...register("investigations.pathology.abg", { required: false })} />
			<label>HHH</label>
			<input type="text" {...register("investigations.pathology.hhh", { required: false })} />
			<label>LFT</label>
			<input type="text" {...register("investigations.pathology.lft", { required: false })} />
			<label>Coagulation Profile</label>
			<input
				type="text"
				{...register("investigations.pathology.coagulationProfile", { required: false })}
			/>
			<label>Other</label>
			<input type="text" {...register("investigations.pathology.other", { required: false })} />

			<h1>Radiology</h1>
			<label>X-Ray</label>
			<input type="text" {...register("investigations.radiology.xray", { required: false })} />
			<label>Ct-scan</label>
			<input type="text" {...register("investigations.radiology.ctScan", { required: false })} />
			<label>MRI</label>
			<input type="text" {...register("investigations.radiology.mri", { required: false })} />
			<label>Other</label>
			<input type="text" {...register("investigations.radiology.other", { required: false })} />

			<button type="submit">Submit</button>

			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</form>
	);
};

export default Assessment;
