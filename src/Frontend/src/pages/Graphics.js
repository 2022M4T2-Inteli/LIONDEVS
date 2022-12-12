import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvajs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Graphicss extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Quantidade de Dispositivos"
			},
			subtitles: [{
				text: "80% Disp. Ativos",
				verticalAlign: "center",
				fontSize: 21,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "VL PC", y: 5 },
					{ name: "Windows Notebook", y: 31 },
					{ name: "Chromebooks", y: 40 },
					{ name: "iPad", y: 17 },
					{ name: "Desktop", y: 7 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Graphicss;