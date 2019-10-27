import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogReaderService {
  private ENDPOINT = "http://192.168.1.2:8045/log/log";

  constructor(private httpClient: HttpClient) { }

  readFile() {
    return this.httpClient.get(
        this.ENDPOINT, 
        {responseType: 'text'}
      );
  }
}
