import React from "react";
import { useForm } from "react-hook-form";
import api from "../../http/index";
const Background = ({ patientData }) => {
	const { register, handleSubmit } = useForm();

	console.log({ patientData });
	const onSubmit = handleSubmit(async (data) => {
		try {
			const res = await api.post("http://localhost:5500/api/patient/update", {
				id: patientData.id,
				mrNo: patientData.mrNo,
				// ISBAR: "situation",
				ISBAR: "background",
				// id: "642d5e148f0df06741aa4fa6",
				// mrNo: 123,
				background: data,
			});
		} catch (error) {
			console.error(error);
		}
	});

	return (
		<form onSubmit={onSubmit}>
			<h1>BACKGROUND</h1>
			<label>Past medical history</label>
			<input
				type="text"
				{...register("pastMedicalHistory", { required: false })}
			/>
			<label>Past surgical history</label>
			<input
				type="text"
				{...register("pastSurgicalHistory", { required: false })}
			/>
			<label>Medication</label>
			<input type="text" {...register("medication", { required: false })} />

			<h1>Blood products</h1>

			<label>whole blood</label>
			<input type="text" {...register("bloodProducts.wholeBlood", { required: false })} />
			<label>Pack red blood cells</label>
			<input
				type="text"
				{...register("bloodProducts.packRedBloodCell", { required: false })}
			/>
			<label>Fresh frozen plasma</label>
			<input
				type="text"
				{...register("bloodProducts.freshFrozenPlasma", { required: false })}
			/>
			<label>Single frozen plasma</label>
			<input
				type="text"
				{...register("bloodProducts.singleDonorPlateletes", { required: false })}
			/>
			<label>Cryoprecipitate antihemophilic factor</label>
			<input
				type="text"
				{...register("bloodProducts.cryoprecipitateAntihemophilicFactor", {
					required: false,
				})}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Background;
