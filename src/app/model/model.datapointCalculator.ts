export enum DataPointTypes {
    TEMP_INSIDE,
    TEMP_OUTSIDE,
    HUMID_INSIDE,
    HUMID_OUTSIDE
}

export class DataPoint {
    x: Date;
    y: number;
}

export class DataPointCalculator {
    private dataPointMap = new Map<DataPointTypes, DataPoint>();


    private tempInsideData = [];
    private humidInsideData = [];
    private tempOutsideData = [];
    private humidOutsideData = [];
    private stripLines = [];

    private fanActive: boolean;
    private heaterActive: boolean;

    getTempInsideData() {
        return this.tempInsideData;
    }

    getHumidInsideData() {
        return this.humidInsideData;
    }

    getTempOutsideData() {
        return this.tempOutsideData;
    }

    getHumidOutsideData() {
        return this.humidOutsideData;
    }

    getStripLines() {
        return this.stripLines;
    }

    calulcateNewDataPoints(logData: Array<string>): void {
        this.resetArrays();
        logData.filter(logLine => logLine.includes('fanActive='))
            .forEach(logLine => {
                const splitLogLine = logLine.split(':');
                const xData = this.getXData(splitLogLine);

                this.tempInsideData.push(this.createDataPoint(xData, 0, splitLogLine));
                this.humidInsideData.push(this.createDataPoint(xData, 1, splitLogLine));
                this.tempOutsideData.push(this.createDataPoint(xData, 2, splitLogLine));
                this.humidOutsideData.push(this.createDataPoint(xData, 3, splitLogLine));

                this.createStripLineData(xData, splitLogLine);
            });
    }

    private resetArrays(): void {
        this.tempInsideData = [];
        this.humidInsideData = [];
        this.tempOutsideData = [];
        this.humidOutsideData = [];
        this.stripLines = [];
    }

    private createDataPoint(xData: any, yIndex: number, splitLogLine: Array<string>) {
        return {
            x: xData,
            y: this.getYData(yIndex, splitLogLine),
        };
    }

    private getXData(splitLogLine: Array<string>): any {
        const xArr: string[] = splitLogLine[0].split('-');
        const month = Number(xArr[1]) - 1; // because lol?
        return new Date(Number(xArr[0]), month, Number(xArr[2]), Number(xArr[3]), Number(xArr[4]), Number(xArr[5]));
    }

    private getYData(index: number, splitLogLine: Array<string>): any {
        const splitOfComma = splitLogLine[1].split(',');
        return Number(splitOfComma[index].split('=')[1]);
    }

    private createStripLineData(xData: any, splitLogLine: Array<string>) {
        const splitOfComma = splitLogLine[1].split(',');

        const newFanActive = splitOfComma[4].split('=')[1] === '1';
        const newHeaterActive = splitOfComma[5].split('=')[1] === '1';

        const fanTurnedOn = newFanActive && !this.fanActive;
        const heaterTurnedOn = newHeaterActive && !this.heaterActive;

        const fanTurnedOff = !newFanActive && this.fanActive;
        const heaterTurnedOff = !newHeaterActive && this.heaterActive;

        if (fanTurnedOn && heaterTurnedOn) {
            this.stripLines.push(this.createStripLine(
                xData,
                'Fan + Heater ON',
                '#940000',
                'center'));
        } else if (fanTurnedOff && heaterTurnedOff) {
            this.stripLines.push(this.createStripLine(
                xData,
                'Fan + Heater OFF',
                '#b6c700',
                'near'));
        } else if (fanTurnedOn) {
            this.stripLines.push(this.createStripLine(
                xData,
                'Fan ON',
                '#0003ab',
                'far'));
        } else if (heaterTurnedOn) {
            this.stripLines.push(this.createStripLine(
                xData,
                'Heater ON',
                '#bd6800',
                'far'));
        } else if (fanTurnedOff) {
            this.stripLines.push(this.createStripLine(
                xData,
                'Fan OFF',
                '#b6c700',
                'near'));
        } else if (heaterTurnedOff) {
            this.stripLines.push(this.createStripLine(
                xData,
                'Heater OFF',
                '#b6c700',
                'near'));
        }
        this.fanActive = newFanActive;
        this.heaterActive = newHeaterActive;
    }

    private createStripLine(xData: any, label: string, color: string, align: string): any {
        return {
            value: xData,
            label,
            thickness: 2,
            color,
            labelFontColor: '#808080',
            labelAlign: align
        };
    }
}