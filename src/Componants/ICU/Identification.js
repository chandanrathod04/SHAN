import React from "react";
import { useForm } from "react-hook-form";
import "./Styles.css";
import { useState } from "react";
import api from "../../http/index";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Situation from "./Situation";
import Assessment from "./Assessment";
import Background from "./Background";
import Recommendation from "./Recommendation";

const Identification = () => {
	let navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const [isOpen, setOpen] = useState(false);
	const [patientData, setPatientData] = useState({});

	const onSubmit = async (data) => {
		try {
			const res = await api.post(
				"/api/patient/identification",
				data
			);
			if (res.status === 200) {
				setPatientData({
					id: res.data.patient._id,
					mrNo: res.data.patient.mrNo,
				});
			}
		} catch (error) {
			// console.log(error.response.data.message);
			alert(error.response.data.message);
		}
	};

	const onSubmitISBAR = async (ISBAR, data) => {
		console.log(data);
		let components = [
			"identification",
			"situation",
			"background",
			"assessment",
			"recommendation",
		];

		// let sendData = {id, mrNo, ISBAR}
		let sendData = { ISBAR };
		sendData[ISBAR] = data;
		console.log(sendData);
		let res;
		// try {
		//   res = await api.post("api/patient/update", sendData);
		//   if (res.status === 200) {
		//     console.log(res.data);
		//   }
		// } catch (error) {
		//   // console.log(error.response.data.message);
		//   alert(error.response.data.message);
		// }
	};

	return (
		<>
			<h1 style={{ fontFamily: "Bold", background: "pink" }}>IDENTIFICATION</h1>
			<form style={{ display: "flex", flexDirection: "column" }}>
				{/* register your input into the hook by invoking the "register" function */}

				{/* include validation with required or other standard HTML validation rules */}
				<label>*Mr Number</label>
				<input
					{...register("mrNo", {
						required: { value: true, message: "Required" },
						maxLength: { value: 10, message: "Max 10 characters allowed" },
					})}
				/>
				{errors.mrNo && <p>{errors.mrNo.message}</p>}
				<label>*Name</label>
				<input type="text" {...register("name", { required: true })} />
				<label>*Department</label>
				<input type="text" {...register("department", { required: true })} />
				<label>Age</label>
				<input {...register("age")} />
				<h4>Gender</h4>
				<label htmlFor="field-male">
					<input
						{...register("sex")}
						type="radio"
						value="Male"
						id="field-male"
					/>
					Male
				</label>
				<label htmlFor="field-female">
					<input
						{...register("sex: ")}
						type="radio"
						value="Female"
						id="field-female"
					/>
					Female
				</label>
				<label htmlFor="field-other">
					<input
						{...register("sex: ")}
						type="radio"
						value="Other"
						id="field-other"
					/>
					Other
				</label>
				<label>Ward</label>
				<select {...register("ward")}>
					<option value="None">none</option>
					<option value="Ward 1">Ward 1</option>
					<option value="Ward 2">Ward 2</option>
				</select>
				<label>Bed Number</label>
				<input type="number" {...register("bedNo", { required: false })} />
				<label>Ipd Number</label>
				<input type="number" {...register("ipdNo", { required: false })} />
				<label>Date Of Admission</label>
				<input
					type="date"
					{...register("dateOfAdmission", { required: false })}
					min={new Date().toISOString().split("T")[0]}
				/>

				{/* errors will return when field validation fails  */}
				<label>Category</label>
				<select {...register("patientCategory")}>
					<option value="None">none</option>
					<option value="WPaying">Paying</option>
					<option value="Mjpjy">Mjpjy</option>
					<option value="Other">Other</option>
				</select>
				<label>Dr Name</label>
				<input type="text" {...register("drName", { required: false })} />
				<label>Unit</label>
				<input type="text" {...register("unit", { required: false })} />
				<label>Diagnosis</label>
				<textarea type="text" {...register("diagnosis", { required: false })} />
				<label>Chief Complaints</label>
				<textarea
					type="text"
					{...register("chiefComplaints", { required: false })}
				/>
				<label>History of present illness</label>
				<textarea
					type="text"
					{...register("historyOfPresentIllness", { required: false })}
				/>
				<label>Allergy</label>
				<textarea type="text" {...register("allergy", { required: false })} />

				{/* <Tabled/> */}

				<button type="submit" onClick={handleSubmit(onSubmit)}>
					Submit
				</button>
			</form>

			<br></br>
			<br></br>
			<br></br>
			<br></br>

			{/* //1 */}

			<Situation patientData={patientData} />

			<br></br>
			<br></br>
			<br></br>
			<br></br>

			{/* 1.5 */}

			<Assessment patientData={patientData} />

			{/* //2 */}
			<Background patientData={patientData} />

			<br></br>
			<br></br>
			<br></br>
			<br></br>

			{/* 3 */}

			<Recommendation patientData={patientData} />
			<Button
				variant="secondary"
				size="lg"
				onClick={() => {
					navigate("/mgmcet/icu");
				}}
			>
				Back
			</Button>
		</>
	);
};

export default Identification;
