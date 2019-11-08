/*app.component.ts*/
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { LogReaderService } from './log-reader.service';
import { DataPointCalculator } from './model/model.datapointCalculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  private chart;
  private dataPointCalculator: DataPointCalculator;

  constructor(private logReader: LogReaderService) {
    this.dataPointCalculator = new DataPointCalculator();
   }

  updateGraph(): void {
    this.chart = new CanvasJS.Chart("chartContainer", {
      title: {
        text: "NODE MCU temp and humid controller"
      },
      zoomEnabled: true,
      axisX: {
        stripLines: this.dataPointCalculator.getStripLines(),
        valueFormatString: "DD/MM/YY HH:mm:ss"
      },
      axisY: [{
        title: "Humidity",
        lineColor: "#C24642",
        tickColor: "#C24642",
        labelFontColor: "#C24642",
        titleFontColor: "#C24642",
        suffix: "%"
      },
      {
        title: "Temperature",
        lineColor: "#369EAD",
        tickColor: "#369EAD",
        labelFontColor: "#369EAD",
        titleFontColor: "#369EAD",
        suffix: "°C"
      }],
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        itemclick: toggleDataSeries
      },
      data: [{
        type: "line",
        name: "TemperatureInside",
        color: "#369EAD",
        xValueFormatString: "DD/MM/YY HH:mm:ss",
        showInLegend: true,
        axisYIndex: 1,
        dataPoints: this.dataPointCalculator.getTempInsideData()
      },
      {
        type: "line",
        name: "TemperatureOutside",
        color: "#369EAD",
        axisYIndex: 1,
        showInLegend: true,
        dataPoints: this.dataPointCalculator.getTempOutsideData()
      },
      {
        type: "line",
        name: "HumidityInside",
        color: "#C24642",
        axisYIndex: 0,
        showInLegend: true,
        dataPoints: this.dataPointCalculator.getHumidInsideData()
      },
      {
        type: "line",
        name: "HumidityOutside",
        color: "#C24642",
        axisYIndex: 0,
        showInLegend: true,
        dataPoints: this.dataPointCalculator.getHumidOutsideData()
      },
      ]
    });
    this.chart.render();

    function toggleDataSeries(e) {
      if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      e.chart.render();
    }
  }

  ngOnInit() {
    this.onFetch();
  }

  onFetch(): void {
    this.logReader.readFile().subscribe(data => {
      let resLog = data.split('\n').filter(data => data.length != 0);
      this.dataPointCalculator.calulcateNewDataPoints(resLog);
      this.updateGraph();
    });
  }

 

}