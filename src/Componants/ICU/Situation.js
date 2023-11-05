import React from "react";
import { useForm } from "react-hook-form";
import api from "../../http/index";

const Situation = ({ patientData }) => {
	const { register, handleSubmit } = useForm();

	console.log({ patientData });
	const onSubmit = handleSubmit(async (data) => {
		try {
			const res = await api.post("/api/patient/update", {
				id: patientData.id,
				mrNo: patientData.mrNo,
				// ISBAR: "situation",
				ISBAR: "situation",
				// id: "642d5e148f0df06741aa4fa6",
				// mrNo: 123,
				situation: data,
			});
		} catch (error) {
			console.error(error);
		}
	});

	return (
		<form onSubmit={onSubmit}>
			<h1>SITUATION</h1>
			<label>Oxygen Support</label>
			<select {...register("oxygenSupport.os", { required: false })}>
				{[
					"roomAir",
					"nasalCannula",
					"oxygenMask",
					"venturiMask",
					"highFlowMask",
					"highFlowNasalCannula",
					"bpapMask",
					"Other",
				].map((item) => (
					<option value={item}>{item}</option>
				))}
			</select>
			<br></br>
			<input
				type="text"
				{...register("oxygenSupport.value", { required: false })}
			/>
			<label>Ventilator Support</label>
			<select {...register("ventilatorSupport.vs", { required: false })}>
				{["prvc", "cpap", "simv", "ps", "pc", "other"].map((item) => (
					<option value={item}>{item}</option>
				))}
			</select>
			<label>FIO2</label>
			<input
				type="number"
				{...register("ventilatorSupport.FIO2", { required: false })}
			/>
			<label>PEEP</label>
			<input
				type="text"
				{...register("ventilatorSupport.peep", { required: false })}
			/>
			<label>RR</label>
			<input
				type="text"
				{...register("ventilatorSupport.rr", { required: false })}
			/>
			<label>Tidal volume</label>
			<input
				type="text"
				{...register("ventilatorSupport.tidalVolume", { required: false })}
			/>
			<label>Continuos Infusion</label>
			<label>Inotrope</label>
			<label>Positive Inotrope</label>
			{/* <select {...register("Positive Inotrope")}>
				<option value="None">None</option>
				<option value="PRVC">Dopmaine</option>
				<option value="CPAP">Dobutamine</option>
				<option value="SIMV">Adrenaline</option>
				<option value="PS">Atropine</option>
				<option value="other">Other</option>
			</select> */}
			<select {...register("continuousInfusion.inotrope.positive")}>
				{[
					"noradrenaline",
					"dopamine",
					"dobutamine",
					"adrenaline",
					"atropine",
					"other",
				].map((item) => (
					<option value={item}>{item}</option>
				))}
			</select>
			<label htmlFor="pOther">Pother</label>
			<input type="text" {...register("continuousInfusion.inotrope.pOther")} />
			<label>Negative Inotrope</label>
			<select {...register("continuousInfusion.inotrope.negative")}>
				{[
					"labetalol",
					"nitroglycerin",
					"sodiumNitroprusside",
					"amiodarone",
					"other",
				].map((item) => (
					<option>{item}</option>
				))}
			</select>
			<label htmlFor="nOther">Pother</label>
			<input type="text" {...register("continuousInfusion.inotrope.nOther")} />
			<label>Electrolytes correction</label>
			<select {...register("continuousInfusion.electrolytesCorrection")}>
				<option value="None">None</option>
				<option value="PRVC">Sodium chloride 35</option>
				<option value="CPAP">Potassium chloride</option>
				<option value="other">Other</option>
			</select>
			<label>Immunglobin(IVIg)</label>
			<input
				type="text"
				{...register("continuousInfusion.IVIg", { required: false })}
			/>
			<label>HAI</label>
			<input
				type="text"
				{...register("continuousInfusion.HAI", { required: false })}
			/>
			<label>Fentanyl</label>
			<input
				type="text"
				{...register("continuousInfusion.fentanyl", { required: false })}
			/>
			<label>Atracurium</label>
			<input
				type="text"
				{...register("continuousInfusion.atracurium", { required: false })}
			/>
			<label>Midaozolam</label>
			<input
				type="text"
				{...register("continuousInfusion.midazolam", { required: false })}
			/>
			<label>Sodium bicarbonate</label>
			<input
				type="text"
				{...register("continuousInfusion.sodiumBicarbonate", {
					required: false,
				})}
			/>
			<label>Other</label>
			<input
				type="text"
				{...register("continuousInfusion.other", { required: false })}
			/>
			<label>Nutritional Status</label>
			<label>Oral</label>
			<input
				type="text"
				{...register("nutritionalStatus.oral", { required: false })}
			/>
			<label>Rt Feeding</label>
			<input
				type="text"
				{...register("nutritionalStatus.rtFeeding", { required: false })}
			/>
			<label>NBM</label>
			<input
				type="text"
				{...register("nutritionalStatus.nbm", { required: false })}
			/>
			<label>Other</label>
			<input
				type="text"
				{...register("nutritionalStatus.other", { required: false })}
			/>
			<label>Fluid restriction</label>
			<input
				type="text"
				{...register("nutritionalStatus.fluidRestriction", { required: false })}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Situation;
