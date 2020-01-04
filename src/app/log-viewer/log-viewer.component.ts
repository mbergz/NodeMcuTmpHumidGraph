import { Component } from '@angular/core';
import { LogReaderService } from '../log-reader.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-log-viewer',
    templateUrl: './log-viewer.component.html',
    styleUrls:  ['./log-viewer.component.scss']
  })
  export class LogViewerComponent {
    logReaderService$: Observable<string>;

    constructor(private logReader: LogReaderService) {
        this.logReaderService$ = this.logReader.readFile();
    }

}
