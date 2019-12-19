import { Component } from '@angular/core';
import { LogReaderService } from '../log-reader.service';

@Component({
    selector: 'app-log-viewer',
    templateUrl: './log-viewer.component.html',
    styleUrls:  ['./log-viewer.component.scss']
  })
  export class LogViewerComponent {
    private log;

    constructor(private logReader: LogReaderService) {
        this.log = this.logReader.getTest();
    }

}
