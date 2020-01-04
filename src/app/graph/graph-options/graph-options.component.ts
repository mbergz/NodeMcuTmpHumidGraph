import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-options-graph',
    templateUrl: './graph-options.component.html',
    styleUrls: ['./graph-options.component.scss']
  })
export class GraphOptionsComponent {
    fromDate: Date;
    toDate: Date;
    autoUpdateChecked: boolean;
    updateIntervalMs: number;

    @Input() disabled: boolean;
    @Output() fetchNew = new EventEmitter<void>();
    @Output() newFromDate = new EventEmitter<Date>();
    @Output() newToDate = new EventEmitter<Date>();
    @Output() updateInterval = new EventEmitter<number>();

    fromTimeFocusOut(timeValue: string) {
        this.setNewDateTime(this.fromDate, timeValue);
        this.newFromDate.emit(this.fromDate);
    }

    toTimeFocusOut(timeValue: string) {
        this.setNewDateTime(this.toDate, timeValue);
        this.newToDate.emit(this.toDate);
    }

    onFromDateChange(event: any) {
        this.newFromDate.emit(this.fromDate);
    }

    onToDateChange(event: any) {
        this.newToDate.emit(this.toDate);
    }

    onResetFrom() {
        this.fromDate = undefined;
        this.newFromDate.emit(this.fromDate);
    }

    onResetTo() {
        this.toDate = undefined;
        this.newToDate.emit(this.toDate);
    }

    onFetch(): void {
        this.fetchNew.emit();
    }

    onUpdateCheckBox() {
        if (!this.autoUpdateChecked) {
            this.updateIntervalMs = undefined;
            this.updateInterval.emit(this.updateIntervalMs)
        }
    }

    onUpdateIntervalChange() {
        this.updateInterval.emit(this.updateIntervalMs);
    }

    private setNewDateTime(date: Date, timeValue: string) {
        if (!timeValue) {
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            return;
        }

        const time = timeValue.split(':').length === 2 ? timeValue.concat(':00') : timeValue;

        const regex = /(\d{2}):(\d{2}):(\d{2})/;
        const timeArr = regex.exec(time);
        date.setHours(Number(timeArr[1]));
        date.setMinutes(Number(timeArr[2]));
        date.setSeconds(Number(timeArr[3]));
    }

  }
