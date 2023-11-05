import React from "react";
import { useForm } from "react-hook-form";
import api from "../../http/index";


const Recommendation = ({ patientData }) => {
	const { register, handleSubmit } = useForm();

	console.log({ patientData });
	const onSubmit = handleSubmit(async (data) => {
		try {
			const res = await api.post("/api/patient/update", {
				id: patientData.id,
				mrNo: patientData.mrNo,
				// ISBAR: "situation",
				ISBAR: "recommendation",
				// id: "642d5e148f0df06741aa4fa6",
				// mrNo: 123,
				recommendation: data,
			});
		} catch (error) {
			console.error(error);
		}
	});
	return (
		<form onSubmit={onSubmit}>
			<h1>RECOMMENDATION</h1>
			<label>Pending medication</label>
			<input
				type="text"
				{...register("pendingMedication", { required: false })}
			/>
			<label>Pending reports</label>
			<input
				type="text"
				{...register("pendingReports", { required: false })}
			/>
			<label>Refrences</label>
			<input type="text" {...register("references", { required: false })} />
			<label>Special order</label>
			<input type="text" {...register("specialOrder", { required: false })} />
			<label>Pending procedures</label>
			<input
				type="text"
				{...register("pendingProcedures", { required: false })}
			/>
			<label>Other order</label>
			<input type="text" {...register("otherOrder", { required: false })} />

			<button type="submit">Submit</button>
		</form>
	);
};

export default Recommendation;
