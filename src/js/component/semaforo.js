import React, { useState, useEffect } from "react";

export function Semaforo() {
	const [color, setColor] = useState("red");
	function actualizarcolor(color) {
		setColor(color);
	}
	return (
		<div className="contenedor">
			<div
				className={`rojo ${color == "rojo" ? "encendido" : ""}`}
				onClick={() => {
					actualizarcolor("rojo");
				}}></div>
			<div
				className={`amarillo ${color == "amarillo" ? "encendido" : ""}`}
				onClick={() => {
					actualizarcolor("amarillo");
				}}></div>
			<div
				className={`verde ${color == "verde" ? "encendido" : ""}`}
				onClick={() => {
					actualizarcolor("verde");
				}}></div>
		</div>
	);
}
