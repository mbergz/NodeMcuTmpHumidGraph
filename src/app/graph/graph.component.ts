import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';
import { LogReaderService } from '../log-reader.service';
import { DataPointCalculator } from '../model/model.datapointCalculator';
import { CanvjasJsService } from './canvjas.js.service';
import { fromEvent, Subscription, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { timer, Observable, Subject } from 'rxjs';
import { switchMap, takeUntil, catchError, finalize } from 'rxjs/operators';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  private chart;
  private canvjasJsGraph: any;
  private dataPointCalculator: DataPointCalculator;
  isGraphLoading: boolean;

  private fromDate: Date;
  private toDate: Date;
  private subscription: Subscription;

  constructor(
    private logReader: LogReaderService,
    //private canvajsJsService: CanvjasJsService,
    //@Inject(DOCUMENT) private readonly document: any
  ) {
    this.dataPointCalculator = new DataPointCalculator();
  }

  renderGraph(): void {
    this.chart = new CanvasJS.Chart('chartContainer', {
      title: {
        text: ''
      },
      zoomEnabled: true,
      axisX: {
        stripLines: this.dataPointCalculator.getStripLines(),
        valueFormatString: 'YY/MM/DD HH:mm:ss',
        minimum: this.getFromDate(),
        maximum: this.getToDate()
      },
      axisY: [{
        title: 'Humidity',
        lineColor: '#C24642',
        tickColor: '#C24642',
        labelFontColor: '#C24642',
        titleFontColor: '#C24642',
        suffix: '%'
      },
      {
        title: 'Temperature',
        lineColor: '#369EAD',
        tickColor: '#369EAD',
        labelFontColor: '#369EAD',
        titleFontColor: '#369EAD',
        suffix: '°C'
      }],
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: 'pointer',
        itemclick: toggleDataSeries
      },
      data: [{
        type: 'line',
        name: 'TemperatureInside',
        color: '#369EAD',
        xValueFormatString: 'YY/MM/DD HH:mm:ss',
        showInLegend: true,
        axisYIndex: 1,
        dataPoints: this.dataPointCalculator.getTempInsideData()
      },
      {
        type: 'line',
        name: 'TemperatureOutside',
        color: '#36ad72',
        axisYIndex: 1,
        showInLegend: true,
        dataPoints: this.dataPointCalculator.getTempOutsideData()
      },
      {
        type: 'line',
        name: 'HumidityInside',
        color: '#C24642',
        axisYIndex: 0,
        showInLegend: true,
        dataPoints: this.dataPointCalculator.getHumidInsideData()
      },
      {
        type: 'line',
        name: 'HumidityOutside',
        color: '#e89907',
        axisYIndex: 0,
        showInLegend: true,
        dataPoints: this.dataPointCalculator.getHumidOutsideData()
      },
      ]
    });
    this.chart.render();

    function toggleDataSeries(e) {
      if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      e.chart.render();
    }
  }

  ngOnInit() {
    this.renderGraph();
    this.onNewFetch();
    /*
    this.canvajsJsService.lazyLoadCanvasJs().subscribe(_ => {
      if (!this.canvjasJsGraph) {
        CanvasJS = this.document.defaultView.CanvasJS;
        this.renderGraph();
      }
    });
    */
  }
  onNewFromDate(fromDate: Date) {
    this.fromDate = fromDate;
    this.renderGraph();
  }

  onNewToDate(toDate: Date) {
    this.toDate = toDate;
    this.renderGraph();
  }

  onNewUpdateInterval(newInterval: number) {
    if (this.subscription || !newInterval) {
      this.subscription.unsubscribe();
    }
    this.subscription = timer(0, newInterval)
    .pipe(
      switchMap(() => this.logReader.readFile()))
      .subscribe(log => this.handleLogData(log));
  }

  onNewFetch(): void {
    this.isGraphLoading = true;

    this.logReader.readFile()
    .subscribe(log => {
        this.isGraphLoading = false;
        this.handleLogData(log);
    }, error =>  {
      console.log(error);
    });
  }

  private handleLogData(log: string) {
    const resLog = log.split('\n').filter(data => data.length !== 0);
    this.dataPointCalculator.calulcateNewDataPoints(resLog);
    this.renderGraph();
  }

  private getFromDate(): Date {
    return this.fromDate ? this.fromDate : this.dataPointCalculator.getInitalFromDate();
  }
  private getToDate(): Date {
    return this.toDate ? this.toDate : this.dataPointCalculator.getInitalToDate();
  }

}
