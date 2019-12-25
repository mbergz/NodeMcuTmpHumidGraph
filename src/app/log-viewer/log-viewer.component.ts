import { Component } from '@angular/core';
import { LogReaderService } from '../log-reader.service';

@Component({
    selector: 'app-log-viewer',
    templateUrl: './log-viewer.component.html',
    styleUrls:  ['./log-viewer.component.scss']
  })
  export class LogViewerComponent {
    log: string;

    constructor(private logReader: LogReaderService) {
        this.logReader.readFile().subscribe(log => this.log = log);
    }

}
