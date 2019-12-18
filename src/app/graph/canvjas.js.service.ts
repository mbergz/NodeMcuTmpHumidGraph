import { Injectable, Inject } from '@angular/core';
import { ReplaySubject, Observable, forkJoin } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
  })
  export class CanvjasJsService {
    private loadedLibraries: { [url: string]: ReplaySubject<any> } = {};

    constructor(@Inject(DOCUMENT) private readonly document: any) {}

    lazyLoadCanvasJs(): Observable<any> {
      return forkJoin([
        this.loadScript('assets/canvasjs.min.js')
      ]);
    }

    private loadScript(url: string): Observable<any> {
      if (this.loadedLibraries[url]) {
        return this.loadedLibraries[url].asObservable();
      }

      this.loadedLibraries[url] = new ReplaySubject();

      const script = this.document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = url;
      script.onload = () => {
        this.loadedLibraries[url].next();
        this.loadedLibraries[url].complete();
      };

      this.document.body.appendChild(script);

      return this.loadedLibraries[url].asObservable();
    }

  }
