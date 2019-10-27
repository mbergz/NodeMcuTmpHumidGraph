/*app.component.ts*/
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { LogReaderService } from './log-reader.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  private chart;
  private tempInsideData = [];
  /*[
    { x: new Date(2017, 0o0, 7), y: 85.4 }, 
    { x: new Date(2017, 0o0, 14), y: 92.7 , indexLabel: "FAN, Heater ON",markerColor: "red", markerType: "triangle"},
    { x: new Date(2017, 0o0, 21), y: 64.9 },
    { x: new Date(2017, 0o0, 28), y: 58.0 , indexLabel: "FAN OFF",markerColor: "blue", markerType: "triangle"},
    { x: new Date(2017, 0o1, 4), y: 63.4 },
    { x: new Date(2017, 0o1, 11), y: 69.9 },
    { x: new Date(2017, 0o1, 18), y: 88.9 },
    { x: new Date(2017, 0o1, 25), y: 66.3 },
    { x: new Date(2017, 0o2, 4), y: 82.7 },
    { x: new Date(2017, 0o2, 11), y: 60.2 },
    { x: new Date(2017, 0o2, 18), y: 87.3 },
    { x: new Date(2017, 0o2, 25), y: 98.5 }
  ];
  */
  private humidInsideData = [];
  private tempOutsideData = [];
  private humidOutsideData= [];

  private fanActive: boolean;
  private heaterActive: boolean;

  constructor(private logReader: LogReaderService) {}

  updateGraph(): void {
    this.chart = new CanvasJS.Chart("chartContainer", {
      title:{
        text: "NODE MCU temp and humid controller"
      },
      zoomEnabled: true,
      axisX:{  
        stripLines: [{
          value: new Date(2019, 11, 26, 18, 53, 56),
          label: "test label",
          thickness: 20,
          labelFontColor: "#808080"
          //labelAlign: "near"
        }],
        valueFormatString: "DD/MM/YY HH:mm:ss"
      },
      axisY:[{
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
        dataPoints: this.tempInsideData
      },
      {
        type: "line",
        name: "TemperatureOutside",
        color: "#369EAD",
        axisYIndex: 1,
        showInLegend: true,
        dataPoints: this.tempOutsideData
      },
      {
        type: "line",
        name: "HumidityInside",
        color: "#C24642",
        axisYIndex: 0,
        showInLegend: true,
        dataPoints: this.humidInsideData
      },
      {
        type: "line",
        name: "HumidityOutside",
        color: "#C24642",
        axisYIndex: 0,
        showInLegend: true,
        dataPoints: this.humidOutsideData
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
      this.calulcateNewDataPoints(resLog);
      this.updateGraph();
    }); 
  }

  calulcateNewDataPoints(logData: Array<String>): void {
    this.tempInsideData = [];
    this.humidInsideData = [];
    this.tempOutsideData = [];
    this.humidOutsideData= [];
    logData.filter(logLine => logLine.includes('fanActive='))
      .forEach(logLine => {
        const splitLogLine = logLine.split(':');  
        const xData = this.getXData(splitLogLine);
        this.tempInsideData.push( 
          { 
            x: xData, 
            y: this.getYData(0,splitLogLine),
          }
        );
        this.humidInsideData.push(
          this.createDataForHumidInside(xData, splitLogLine)
        );
        this.tempOutsideData.push( 
          { 
            x: xData, 
            y: this.getYData(2,splitLogLine) 
          }
        );
        this.humidOutsideData.push( 
          { 
            x: xData, 
            y: this.getYData(3,splitLogLine) 
          }
        );
        
      });
  }

  private getXData(splitLogLine: Array<String>): any {
    const xArr: String[] = splitLogLine[0].split('-');
    return new Date(Number(xArr[0]), Number(xArr[1]),Number(xArr[2]),Number(xArr[3]),Number(xArr[4]),Number(xArr[5]));
  }
  
  private getYData(index: number, splitLogLine: Array<String>): any {
    const splitOfComma = splitLogLine[1].split(',');
    return Number(splitOfComma[index].split('=')[1]);
  }

  private createDataForHumidInside(xData: any, splitLogLine: Array<String>) {
    let returnData: any;
    const splitOfComma = splitLogLine[1].split(',');

    const newFanActive = splitOfComma[4].split('=')[1] === '1';
    const newHeaterActive = splitOfComma[5].split('=')[1] === '1';
    
    const fanTurnedOn = newFanActive && !this.fanActive;
    const heaterTurnedOn = newHeaterActive !&& this.heaterActive;

    const fanTurnedOff = !newFanActive && this.fanActive;
    const heaterTurnedOff = !newHeaterActive && this.heaterActive;

    if (fanTurnedOn && this.heaterActive || heaterTurnedOn && this.fanActive) {
      returnData = { 
        x: xData, 
        y: this.getYData(1,splitLogLine),
        indexLabel: "Fan + Heater ON",
        markerColor: "red",
        markerType: "square"
      }
    } else if (fanTurnedOn && !this.heaterActive) {
      returnData = { 
        x: xData, 
        y: this.getYData(1,splitLogLine),
        indexLabel: "Fan ON",
        markerColor: "blue",
        markerType: "triangle"
      }
    } else if (heaterTurnedOn && !this.fanActive) {
      returnData =  { 
        x: xData, 
        y: this.getYData(1,splitLogLine),
        indexLabel: "Heater ON",
        markerColor: "orange",
        markerType: "circle"
      }
    } else if(fanTurnedOff)
      returnData =  { 
        x: xData, 
        y: this.getYData(1,splitLogLine),
        indexLabel: "Fan OFF",
        markerColor: "yellow",
        markerType: "triangle"
      }
     else if (heaterTurnedOff) {
      returnData =  { 
        x: xData, 
        y: this.getYData(1,splitLogLine),
        indexLabel: "Heater OFF",
        markerColor: "yellow",
        markerType: "circle"
      }
    } else {
      returnData = { 
        x: xData, 
        y: this.getYData(1,splitLogLine)
      }
    }

    this.fanActive = newFanActive;
    this.heaterActive = newHeaterActive;
    return returnData;
  }


}