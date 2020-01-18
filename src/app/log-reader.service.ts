import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Observable, observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogReaderService {
  //private ENDPOINT = 'http://192.168.1.2:8045/log/log';
  private ENDPOINT = 'http://192.168.1.2:7070/tmphumid/log';

  constructor(private httpClient: HttpClient) { }

  readFile() {
    return of(this.getTest());
    //return this.httpClient.get(
    //  this.ENDPOINT,
    //  { responseType: 'text' }
    //);

  }

  getTest(): string {
    return `
  2019-10-26-17-26-33:tmpInside=23.60,humidInside=60.50,tmpOutside=23.60,humidOutside=59.30,fanActive=0,heaterActive=0
  2019-10-26-17-26-59:tmpInside=23.60,humidInside=60.40,tmpOutside=23.60,humidOutside=59.10,fanActive=0,heaterActive=0
  2019-10-26-17-27-26:tmpInside=23.60,humidInside=60.10,tmpOutside=23.60,humidOutside=58.90,fanActive=0,heaterActive=0
  2019-10-26-17-27-52:tmpInside=23.60,humidInside=60.00,tmpOutside=23.60,humidOutside=58.80,fanActive=0,heaterActive=0
  2019-10-26-17-28-18:tmpInside=23.70,humidInside=60.10,tmpOutside=23.60,humidOutside=58.70,fanActive=0,heaterActive=0
  2019-10-26-17-28-44:tmpInside=23.60,humidInside=60.30,tmpOutside=23.60,humidOutside=59.00,fanActive=0,heaterActive=0
  2019-10-26-17-29-10:tmpInside=23.60,humidInside=60.40,tmpOutside=23.60,humidOutside=59.20,fanActive=0,heaterActive=0
  2019-10-26-17-29-36:tmpInside=23.60,humidInside=60.70,tmpOutside=23.60,humidOutside=59.50,fanActive=0,heaterActive=0
  2019-10-26-17-30-02:tmpInside=23.60,humidInside=60.70,tmpOutside=23.60,humidOutside=59.40,fanActive=0,heaterActive=0
  2019-10-26-17-30-28:tmpInside=23.60,humidInside=60.70,tmpOutside=23.60,humidOutside=59.40,fanActive=0,heaterActive=0
  2019-10-26-17-30-54:tmpInside=23.60,humidInside=60.80,tmpOutside=23.60,humidOutside=59.50,fanActive=0,heaterActive=0
  2019-10-26-17-31-20:tmpInside=23.60,humidInside=60.80,tmpOutside=23.60,humidOutside=59.60,fanActive=0,heaterActive=0
  2019-10-26-17-31-46:tmpInside=23.60,humidInside=60.60,tmpOutside=23.60,humidOutside=59.20,fanActive=0,heaterActive=0
  2019-10-26-17-32-12:tmpInside=23.60,humidInside=60.40,tmpOutside=23.60,humidOutside=59.20,fanActive=0,heaterActive=0
  2019-10-26-17-32-39:tmpInside=23.60,humidInside=60.10,tmpOutside=23.50,humidOutside=58.70,fanActive=0,heaterActive=0
  2019-10-26-17-33-05:tmpInside=23.60,humidInside=59.90,tmpOutside=23.50,humidOutside=58.50,fanActive=0,heaterActive=0
  2019-10-26-17-33-31:tmpInside=23.50,humidInside=59.90,tmpOutside=23.50,humidOutside=58.60,fanActive=0,heaterActive=0
  2019-10-26-17-33-57:tmpInside=23.60,humidInside=59.90,tmpOutside=23.50,humidOutside=58.50,fanActive=0,heaterActive=0
  2019-10-26-17-34-23:tmpInside=23.50,humidInside=59.40,tmpOutside=23.50,humidOutside=58.10,fanActive=0,heaterActive=0
  2019-10-26-17-34-49:tmpInside=23.50,humidInside=59.60,tmpOutside=23.50,humidOutside=58.30,fanActive=0,heaterActive=0
  2019-10-26-17-35-15:tmpInside=23.50,humidInside=59.40,tmpOutside=23.50,humidOutside=58.20,fanActive=0,heaterActive=0
  2019-10-26-17-35-41:tmpInside=23.50,humidInside=59.40,tmpOutside=23.50,humidOutside=58.20,fanActive=0,heaterActive=0
  2019-10-26-17-36-07:tmpInside=23.50,humidInside=59.50,tmpOutside=23.50,humidOutside=58.20,fanActive=0,heaterActive=0
  2019-10-26-17-36-33:tmpInside=23.50,humidInside=59.50,tmpOutside=23.40,humidOutside=58.20,fanActive=0,heaterActive=0
  2019-10-26-17-36-59:tmpInside=23.50,humidInside=59.90,tmpOutside=23.50,humidOutside=58.60,fanActive=0,heaterActive=0
  2019-10-26-17-37-25:tmpInside=23.50,humidInside=59.80,tmpOutside=23.40,humidOutside=58.50,fanActive=0,heaterActive=0
  2019-10-26-17-37-51:tmpInside=23.50,humidInside=59.60,tmpOutside=23.40,humidOutside=58.40,fanActive=0,heaterActive=0
  2019-10-26-17-38-18:tmpInside=23.50,humidInside=59.80,tmpOutside=23.40,humidOutside=58.50,fanActive=0,heaterActive=0
  2019-10-26-17-38-44:tmpInside=23.50,humidInside=59.90,tmpOutside=23.50,humidOutside=58.80,fanActive=0,heaterActive=0
  2019-10-26-17-39-10:tmpInside=23.50,humidInside=60.10,tmpOutside=23.40,humidOutside=58.90,fanActive=0,heaterActive=0
  2019-10-26-17-39-36:tmpInside=23.50,humidInside=59.70,tmpOutside=23.40,humidOutside=58.40,fanActive=0,heaterActive=0
  2019-10-26-17-40-02:tmpInside=23.50,humidInside=59.40,tmpOutside=23.50,humidOutside=58.30,fanActive=0,heaterActive=0
  2019-10-26-17-40-28:tmpInside=23.50,humidInside=59.90,tmpOutside=23.40,humidOutside=58.60,fanActive=0,heaterActive=0
  2019-10-26-17-40-54:tmpInside=23.50,humidInside=59.40,tmpOutside=23.40,humidOutside=58.10,fanActive=0,heaterActive=0
  2019-10-26-17-41-20:tmpInside=23.50,humidInside=59.50,tmpOutside=23.50,humidOutside=58.40,fanActive=0,heaterActive=0
  2019-10-26-17-41-46:tmpInside=23.50,humidInside=60.10,tmpOutside=23.40,humidOutside=58.90,fanActive=0,heaterActive=0
  2019-10-26-17-42-12:tmpInside=23.50,humidInside=60.50,tmpOutside=23.50,humidOutside=59.10,fanActive=0,heaterActive=0
  2019-10-26-17-42-38:tmpInside=23.50,humidInside=59.70,tmpOutside=23.50,humidOutside=58.50,fanActive=0,heaterActive=0
  2019-10-26-17-43-04:tmpInside=23.60,humidInside=60.10,tmpOutside=23.50,humidOutside=58.60,fanActive=0,heaterActive=0
  2019-10-26-17-43-31:tmpInside=23.60,humidInside=60.10,tmpOutside=23.50,humidOutside=58.70,fanActive=0,heaterActive=0
  2019-10-26-17-43-57:tmpInside=23.60,humidInside=60.50,tmpOutside=23.60,humidOutside=59.40,fanActive=0,heaterActive=0
  2019-10-26-17-44-23:tmpInside=23.60,humidInside=60.50,tmpOutside=23.50,humidOutside=59.30,fanActive=0,heaterActive=0
  2019-10-26-17-44-49:tmpInside=23.50,humidInside=60.30,tmpOutside=23.50,humidOutside=59.20,fanActive=0,heaterActive=0
  2019-10-26-17-45-15:tmpInside=23.50,humidInside=60.30,tmpOutside=23.50,humidOutside=59.00,fanActive=0,heaterActive=0
  2019-10-26-17-45-41:tmpInside=23.60,humidInside=60.10,tmpOutside=23.50,humidOutside=58.90,fanActive=0,heaterActive=0
  2019-10-26-17-46-07:tmpInside=23.60,humidInside=60.40,tmpOutside=23.50,humidOutside=59.20,fanActive=0,heaterActive=0
  2019-10-26-17-46-33:tmpInside=23.60,humidInside=60.20,tmpOutside=23.50,humidOutside=59.00,fanActive=0,heaterActive=0
  2019-10-26-17-46-59:tmpInside=23.50,humidInside=60.10,tmpOutside=23.50,humidOutside=58.90,fanActive=0,heaterActive=0
  2019-10-26-17-47-25:tmpInside=23.60,humidInside=60.40,tmpOutside=23.50,humidOutside=59.10,fanActive=0,heaterActive=0
  2019-10-26-17-47-51:tmpInside=23.60,humidInside=60.20,tmpOutside=23.50,humidOutside=58.90,fanActive=0,heaterActive=0
  2019-10-26-17-48-17:tmpInside=23.50,humidInside=59.80,tmpOutside=23.50,humidOutside=58.50,fanActive=0,heaterActive=0
  2019-10-26-17-48-44:tmpInside=23.50,humidInside=59.90,tmpOutside=23.50,humidOutside=58.70,fanActive=0,heaterActive=0
  2019-10-26-17-49-10:tmpInside=23.60,humidInside=59.80,tmpOutside=23.50,humidOutside=58.60,fanActive=0,heaterActive=0
  2019-10-26-17-51-46:tmpInside=23.50,humidInside=59.80,tmpOutside=23.50,humidOutside=58.60,fanActive=0,heaterActive=0
  2019-10-26-17-52-12:tmpInside=23.60,humidInside=59.40,tmpOutside=23.50,humidOutside=58.20,fanActive=0,heaterActive=0
  2019-10-26-17-52-38:tmpInside=23.50,humidInside=60.00,tmpOutside=23.50,humidOutside=59.00,fanActive=0,heaterActive=0
  2019-10-26-17-53-04:tmpInside=23.50,humidInside=60.30,tmpOutside=23.50,humidOutside=59.10,fanActive=0,heaterActive=0
  2019-10-26-17-53-30:tmpInside=23.50,humidInside=59.90,tmpOutside=23.50,humidOutside=58.80,fanActive=0,heaterActive=0
  2019-10-26-17-53-56:tmpInside=23.60,humidInside=60.10,tmpOutside=23.50,humidOutside=59.00,fanActive=0,heaterActive=0
  2019-10-26-17-54-23:tmpInside=23.60,humidInside=60.60,tmpOutside=23.50,humidOutside=59.30,fanActive=0,heaterActive=0
  2019-10-26-17-54-49:tmpInside=23.50,humidInside=60.10,tmpOutside=23.50,humidOutside=58.90,fanActive=0,heaterActive=0
  2019-10-26-17-55-15:tmpInside=23.50,humidInside=60.30,tmpOutside=23.50,humidOutside=59.10,fanActive=0,heaterActive=0
  2019-10-26-17-55-41:tmpInside=23.60,humidInside=60.10,tmpOutside=23.50,humidOutside=59.00,fanActive=0,heaterActive=0
  2019-10-26-17-56-07:tmpInside=23.60,humidInside=60.50,tmpOutside=23.50,humidOutside=59.30,fanActive=0,heaterActive=0
  2019-10-26-17-56-33:tmpInside=23.60,humidInside=60.20,tmpOutside=23.50,humidOutside=58.90,fanActive=0,heaterActive=0
  2019-10-26-17-56-59:tmpInside=23.60,humidInside=60.10,tmpOutside=23.50,humidOutside=58.90,fanActive=0,heaterActive=0
  2019-10-26-17-57-25:tmpInside=23.60,humidInside=59.90,tmpOutside=23.50,humidOutside=58.70,fanActive=0,heaterActive=0
  2019-10-26-17-57-51:tmpInside=23.60,humidInside=60.10,tmpOutside=23.50,humidOutside=59.10,fanActive=0,heaterActive=0
  2019-10-26-17-58-17:tmpInside=23.60,humidInside=60.20,tmpOutside=23.60,humidOutside=59.10,fanActive=0,heaterActive=0
  2019-10-26-17-58-43:tmpInside=23.60,humidInside=60.10,tmpOutside=23.60,humidOutside=59.10,fanActive=0,heaterActive=0
  2019-10-26-17-59-10:tmpInside=23.60,humidInside=60.20,tmpOutside=23.60,humidOutside=59.20,fanActive=0,heaterActive=0
  2019-10-26-17-59-36:tmpInside=23.60,humidInside=60.10,tmpOutside=23.60,humidOutside=59.00,fanActive=0,heaterActive=0
  2019-10-26-18-00-02:tmpInside=23.60,humidInside=59.20,tmpOutside=23.60,humidOutside=58.10,fanActive=0,heaterActive=0
  2019-10-26-18-00-28:tmpInside=23.60,humidInside=59.80,tmpOutside=23.50,humidOutside=58.50,fanActive=0,heaterActive=0
  2019-10-26-18-00-54:tmpInside=23.60,humidInside=59.40,tmpOutside=23.50,humidOutside=58.10,fanActive=0,heaterActive=0
  2019-10-26-18-01-20:Humidity inside (80.20) is above allowed threshold value (74.30), turning fan ON
  2019-10-26-18-01-20:tmpInside=23.60,humidInside=80.20,tmpOutside=23.60,humidOutside=65.40,fanActive=1,heaterActive=0
  2019-10-26-18-01-26:tmpInside=23.60,humidInside=69.10,tmpOutside=23.60,humidOutside=62.60,fanActive=1,heaterActive=0
  2019-10-26-18-01-26:Humidity inside (69.10) is below the max value - 5% (69.30), turning fan OFF
  2019-10-26-18-01-46:tmpInside=23.70,humidInside=61.00,tmpOutside=23.60,humidOutside=59.00,fanActive=0,heaterActive=0
  2019-10-26-18-02-12:tmpInside=23.60,humidInside=60.40,tmpOutside=23.60,humidOutside=58.90,fanActive=0,heaterActive=0
  2019-10-26-18-02-38:tmpInside=23.60,humidInside=60.10,tmpOutside=23.60,humidOutside=58.70,fanActive=0,heaterActive=0
  2019-10-26-18-02-50:Humidity inside (89.80) is above allowed threshold value (74.27), turning fan ON
  2019-10-26-18-02-50:Humidity inside (89.80) is above allowed threshold value + 12% (86.27), Turning heater ON
  2019-10-26-18-02-56:tmpInside=23.80,humidInside=77.40,tmpOutside=23.70,humidOutside=72.00,fanActive=1,heaterActive=1
  2019-10-26-18-03-02:tmpInside=23.80,humidInside=67.50,tmpOutside=23.70,humidOutside=65.70,fanActive=1,heaterActive=1
  2019-10-26-18-03-02:Humidity inside (67.50) is below the max value - 5% (69.27), turning fan OFF
  2019-10-26-18-03-02:Humidity inside (67.50) is below allowed threshold value - 5% (69.27), Turning heater OFF
  2019-10-26-18-03-04:tmpInside=23.80,humidInside=67.50,tmpOutside=23.70,humidOutside=65.70,fanActive=0,heaterActive=0
  2019-10-26-18-03-31:tmpInside=23.80,humidInside=60.70,tmpOutside=23.70,humidOutside=59.40,fanActive=0,heaterActive=0
  2019-10-26-18-03-57:tmpInside=23.80,humidInside=59.50,tmpOutside=23.70,humidOutside=58.20,fanActive=0,heaterActive=0
  2019-10-26-18-04-23:tmpInside=23.80,humidInside=59.20,tmpOutside=23.70,humidOutside=58.00,fanActive=0,heaterActive=0
  2019-10-26-18-04-49:tmpInside=23.70,humidInside=59.10,tmpOutside=23.70,humidOutside=57.90,fanActive=0,heaterActive=0
  2019-10-26-18-05-15:tmpInside=23.70,humidInside=58.90,tmpOutside=23.70,humidOutside=57.80,fanActive=0,heaterActive=0
  2019-10-26-18-05-41:tmpInside=23.80,humidInside=59.20,tmpOutside=23.80,humidOutside=57.90,fanActive=0,heaterActive=0
  2019-10-26-18-06-07:tmpInside=23.70,humidInside=59.70,tmpOutside=23.70,humidOutside=58.40,fanActive=0,heaterActive=0
  2019-10-26-18-06-33:tmpInside=23.70,humidInside=60.10,tmpOutside=23.70,humidOutside=58.70,fanActive=0,heaterActive=0
  2019-10-26-18-06-59:tmpInside=23.70,humidInside=59.20,tmpOutside=23.70,humidOutside=57.70,fanActive=0,heaterActive=0
  2019-10-26-18-07-25:tmpInside=23.90,humidInside=58.70,tmpOutside=23.80,humidOutside=57.40,fanActive=0,heaterActive=0
  2019-10-26-18-07-51:tmpInside=24.00,humidInside=59.30,tmpOutside=24.00,humidOutside=58.10,fanActive=0,heaterActive=0
  2019-10-26-18-08-17:tmpInside=23.90,humidInside=59.30,tmpOutside=23.90,humidOutside=57.90,fanActive=0,heaterActive=0
  2019-10-26-18-08-43:tmpInside=23.90,humidInside=58.70,tmpOutside=23.90,humidOutside=57.50,fanActive=0,heaterActive=0
  2019-10-26-18-09-10:tmpInside=24.00,humidInside=58.80,tmpOutside=24.00,humidOutside=57.70,fanActive=0,heaterActive=0
  2019-10-26-18-09-36:tmpInside=24.00,humidInside=59.60,tmpOutside=24.00,humidOutside=58.40,fanActive=0,heaterActive=0
  2019-10-26-18-10-02:tmpInside=23.90,humidInside=58.70,tmpOutside=24.00,humidOutside=57.50,fanActive=0,heaterActive=0
  2019-10-26-18-10-28:tmpInside=23.90,humidInside=59.60,tmpOutside=23.90,humidOutside=58.30,fanActive=0,heaterActive=0
  2019-10-26-18-10-54:tmpInside=23.80,humidInside=60.00,tmpOutside=23.80,humidOutside=58.60,fanActive=0,heaterActive=0
  2019-10-26-18-11-20:tmpInside=23.80,humidInside=60.10,tmpOutside=23.80,humidOutside=58.70,fanActive=0,heaterActive=0
  2019-10-26-18-11-46:tmpInside=23.80,humidInside=60.40,tmpOutside=23.80,humidOutside=59.00,fanActive=0,heaterActive=0
  2019-10-26-18-12-12:tmpInside=23.80,humidInside=60.40,tmpOutside=23.80,humidOutside=59.00,fanActive=0,heaterActive=0
  2019-10-26-18-12-38:tmpInside=23.80,humidInside=60.40,tmpOutside=23.80,humidOutside=59.10,fanActive=0,heaterActive=0
  2019-10-26-18-13-04:tmpInside=23.80,humidInside=60.60,tmpOutside=23.80,humidOutside=59.20,fanActive=0,heaterActive=0
  2019-10-26-18-13-30:tmpInside=23.80,humidInside=60.50,tmpOutside=23.80,humidOutside=59.10,fanActive=0,heaterActive=0
  2019-10-26-18-13-56:tmpInside=23.80,humidInside=60.50,tmpOutside=23.80,humidOutside=59.00,fanActive=0,heaterActive=0
  2019-10-26-18-14-23:tmpInside=23.80,humidInside=60.60,tmpOutside=23.80,humidOutside=59.20,fanActive=0,heaterActive=0
  2019-10-26-18-14-49:tmpInside=23.80,humidInside=60.60,tmpOutside=23.80,humidOutside=59.20,fanActive=0,heaterActive=0
  2019-10-26-18-15-15:tmpInside=23.80,humidInside=60.60,tmpOutside=23.80,humidOutside=59.40,fanActive=0,heaterActive=0
  2019-10-26-18-15-41:tmpInside=23.80,humidInside=60.70,tmpOutside=23.80,humidOutside=59.50,fanActive=0,heaterActive=0
  2019-10-26-18-16-07:tmpInside=23.80,humidInside=60.70,tmpOutside=23.80,humidOutside=59.30,fanActive=0,heaterActive=0
  2019-10-26-18-16-33:tmpInside=23.80,humidInside=60.80,tmpOutside=23.90,humidOutside=59.60,fanActive=0,heaterActive=0
  2019-10-26-18-16-59:tmpInside=23.90,humidInside=60.60,tmpOutside=23.90,humidOutside=59.40,fanActive=0,heaterActive=0
  2019-10-26-18-17-25:tmpInside=23.80,humidInside=60.60,tmpOutside=23.90,humidOutside=59.40,fanActive=0,heaterActive=0
  2019-10-26-18-17-51:tmpInside=23.80,humidInside=61.00,tmpOutside=23.90,humidOutside=59.80,fanActive=0,heaterActive=0
  2019-10-26-18-18-17:tmpInside=23.80,humidInside=60.80,tmpOutside=23.90,humidOutside=59.50,fanActive=0,heaterActive=0
  2019-10-26-18-18-43:tmpInside=23.90,humidInside=60.90,tmpOutside=23.90,humidOutside=59.50,fanActive=0,heaterActive=0
  2019-10-26-18-19-09:tmpInside=23.90,humidInside=60.80,tmpOutside=23.90,humidOutside=59.60,fanActive=0,heaterActive=0
  2019-10-26-18-19-36:tmpInside=23.90,humidInside=61.00,tmpOutside=23.90,humidOutside=59.70,fanActive=0,heaterActive=0
  2019-10-26-18-20-02:tmpInside=23.90,humidInside=60.80,tmpOutside=24.00,humidOutside=59.60,fanActive=0,heaterActive=0
  2019-10-26-18-20-28:tmpInside=23.90,humidInside=60.80,tmpOutside=24.00,humidOutside=59.50,fanActive=0,heaterActive=0
  2019-10-26-18-20-54:tmpInside=23.90,humidInside=60.70,tmpOutside=24.00,humidOutside=59.50,fanActive=0,heaterActive=0
  2019-10-26-18-21-20:tmpInside=23.90,humidInside=61.10,tmpOutside=24.00,humidOutside=59.80,fanActive=0,heaterActive=0
  2019-10-26-18-21-46:tmpInside=23.90,humidInside=60.60,tmpOutside=24.00,humidOutside=59.40,fanActive=0,heaterActive=0
  2019-10-26-18-22-12:tmpInside=23.90,humidInside=60.50,tmpOutside=24.00,humidOutside=59.40,fanActive=0,heaterActive=0
  2019-10-26-18-22-38:tmpInside=23.90,humidInside=60.80,tmpOutside=24.00,humidOutside=59.50,fanActive=0,heaterActive=0
  2019-10-26-18-23-04:tmpInside=23.90,humidInside=60.60,tmpOutside=24.00,humidOutside=59.30,fanActive=0,heaterActive=0
  2019-10-26-18-23-30:tmpInside=23.90,humidInside=60.80,tmpOutside=24.10,humidOutside=59.40,fanActive=0,heaterActive=0
  2019-10-26-18-23-56:tmpInside=24.00,humidInside=60.60,tmpOutside=24.10,humidOutside=59.10,fanActive=0,heaterActive=0
  2019-10-26-18-24-22:tmpInside=23.90,humidInside=60.80,tmpOutside=24.10,humidOutside=59.40,fanActive=0,heaterActive=0
  2019-10-26-18-24-49:tmpInside=23.90,humidInside=60.80,tmpOutside=24.00,humidOutside=59.30,fanActive=0,heaterActive=0
  2019-10-26-18-25-15:tmpInside=23.90,humidInside=61.10,tmpOutside=24.00,humidOutside=59.80,fanActive=0,heaterActive=0
  2019-10-26-18-25-41:tmpInside=23.90,humidInside=61.10,tmpOutside=24.00,humidOutside=59.70,fanActive=0,heaterActive=0
  2019-10-26-18-26-07:tmpInside=23.80,humidInside=61.20,tmpOutside=23.90,humidOutside=59.80,fanActive=0,heaterActive=0
  2019-10-26-18-26-33:tmpInside=23.80,humidInside=61.50,tmpOutside=23.90,humidOutside=60.10,fanActive=0,heaterActive=0
  2019-10-26-18-26-59:tmpInside=23.70,humidInside=61.50,tmpOutside=23.80,humidOutside=60.10,fanActive=0,heaterActive=0
  2019-10-26-18-27-25:tmpInside=23.70,humidInside=61.40,tmpOutside=23.80,humidOutside=60.00,fanActive=0,heaterActive=0
  2019-10-26-18-27-51:tmpInside=23.70,humidInside=62.00,tmpOutside=23.80,humidOutside=60.60,fanActive=0,heaterActive=0
  2019-10-26-18-29-09:tmpInside=23.60,humidInside=62.20,tmpOutside=23.70,humidOutside=60.80,fanActive=0,heaterActive=0
  2019-10-26-18-29-35:tmpInside=23.60,humidInside=62.40,tmpOutside=23.70,humidOutside=60.90,fanActive=0,heaterActive=0
  2019-10-26-18-30-02:tmpInside=23.60,humidInside=62.30,tmpOutside=23.70,humidOutside=60.90,fanActive=0,heaterActive=0
  2019-10-26-18-30-28:tmpInside=23.60,humidInside=61.90,tmpOutside=23.70,humidOutside=60.50,fanActive=0,heaterActive=0
  2019-10-26-18-30-54:tmpInside=23.70,humidInside=61.90,tmpOutside=23.70,humidOutside=60.40,fanActive=0,heaterActive=0
  2019-10-26-18-31-20:tmpInside=23.80,humidInside=62.30,tmpOutside=23.80,humidOutside=60.90,fanActive=0,heaterActive=0
  2019-10-26-18-31-46:tmpInside=23.80,humidInside=62.10,tmpOutside=23.90,humidOutside=60.70,fanActive=0,heaterActive=0
  2019-10-26-18-32-12:tmpInside=23.80,humidInside=61.90,tmpOutside=23.90,humidOutside=60.60,fanActive=0,heaterActive=0
  2019-10-26-18-32-38:tmpInside=23.90,humidInside=61.60,tmpOutside=24.00,humidOutside=60.20,fanActive=0,heaterActive=0
  2019-10-26-18-33-04:tmpInside=23.90,humidInside=61.50,tmpOutside=24.00,humidOutside=60.20,fanActive=0,heaterActive=0
  2019-10-26-18-33-30:tmpInside=23.90,humidInside=61.40,tmpOutside=24.00,humidOutside=60.30,fanActive=0,heaterActive=0
  2019-10-26-18-33-56:tmpInside=23.90,humidInside=61.70,tmpOutside=24.00,humidOutside=60.40,fanActive=0,heaterActive=0
  2019-10-26-18-34-22:tmpInside=23.90,humidInside=61.30,tmpOutside=24.00,humidOutside=60.10,fanActive=0,heaterActive=0
  2019-10-26-18-34-48:tmpInside=23.90,humidInside=61.60,tmpOutside=24.00,humidOutside=60.30,fanActive=0,heaterActive=0
  2019-10-26-18-35-15:tmpInside=23.90,humidInside=61.40,tmpOutside=24.00,humidOutside=60.20,fanActive=0,heaterActive=0
  2019-10-26-18-35-41:tmpInside=23.90,humidInside=61.60,tmpOutside=23.90,humidOutside=60.30,fanActive=0,heaterActive=0
  2019-10-26-18-36-07:tmpInside=23.90,humidInside=61.20,tmpOutside=23.90,humidOutside=60.00,fanActive=0,heaterActive=0
  2019-10-26-18-36-33:tmpInside=23.90,humidInside=61.80,tmpOutside=24.00,humidOutside=60.80,fanActive=0,heaterActive=0
  2019-10-26-18-36-59:tmpInside=23.90,humidInside=61.80,tmpOutside=23.90,humidOutside=60.60,fanActive=0,heaterActive=0
  2019-10-26-18-37-25:tmpInside=23.80,humidInside=61.80,tmpOutside=23.80,humidOutside=60.60,fanActive=0,heaterActive=0
  2019-10-26-18-37-51:tmpInside=23.80,humidInside=61.90,tmpOutside=23.80,humidOutside=60.80,fanActive=0,heaterActive=0
  2019-10-26-18-38-17:tmpInside=23.80,humidInside=61.70,tmpOutside=23.80,humidOutside=60.50,fanActive=0,heaterActive=0
  2019-10-26-18-38-43:tmpInside=23.80,humidInside=62.00,tmpOutside=23.80,humidOutside=60.70,fanActive=0,heaterActive=0
  2019-10-26-18-39-09:tmpInside=23.80,humidInside=62.10,tmpOutside=23.80,humidOutside=60.80,fanActive=0,heaterActive=0
  2019-10-26-18-39-35:tmpInside=23.80,humidInside=62.10,tmpOutside=23.80,humidOutside=60.90,fanActive=0,heaterActive=0
  2019-10-26-18-40-01:tmpInside=23.80,humidInside=63.10,tmpOutside=23.80,humidOutside=61.70,fanActive=0,heaterActive=0
  2019-10-26-18-40-28:tmpInside=23.80,humidInside=62.90,tmpOutside=23.90,humidOutside=61.70,fanActive=0,heaterActive=0
  2019-10-26-18-40-54:tmpInside=23.80,humidInside=64.10,tmpOutside=23.90,humidOutside=62.70,fanActive=0,heaterActive=0
  2019-10-26-18-41-20:tmpInside=23.80,humidInside=64.80,tmpOutside=23.90,humidOutside=63.60,fanActive=0,heaterActive=0
  2019-10-26-18-41-46:tmpInside=23.80,humidInside=65.10,tmpOutside=23.80,humidOutside=63.80,fanActive=0,heaterActive=0
  2019-10-26-18-42-12:tmpInside=23.80,humidInside=65.00,tmpOutside=23.80,humidOutside=63.70,fanActive=0,heaterActive=0
  2019-10-26-18-42-38:tmpInside=23.80,humidInside=65.20,tmpOutside=23.80,humidOutside=63.90,fanActive=0,heaterActive=0
  2019-10-26-18-43-04:tmpInside=23.80,humidInside=66.00,tmpOutside=23.80,humidOutside=64.70,fanActive=0,heaterActive=0
  2019-10-26-18-43-30:tmpInside=23.90,humidInside=64.60,tmpOutside=23.90,humidOutside=63.50,fanActive=0,heaterActive=0
  2019-10-26-18-43-56:tmpInside=23.80,humidInside=64.40,tmpOutside=23.90,humidOutside=63.10,fanActive=0,heaterActive=0
  2019-10-26-18-44-22:tmpInside=23.90,humidInside=64.30,tmpOutside=23.90,humidOutside=63.40,fanActive=0,heaterActive=0
  2019-10-26-18-44-48:tmpInside=23.90,humidInside=64.20,tmpOutside=23.90,humidOutside=63.00,fanActive=0,heaterActive=0
  2019-10-26-18-45-14:tmpInside=23.90,humidInside=63.60,tmpOutside=24.00,humidOutside=62.40,fanActive=0,heaterActive=0
  2019-10-26-18-45-41:tmpInside=23.90,humidInside=64.30,tmpOutside=24.00,humidOutside=63.10,fanActive=0,heaterActive=0
  2019-10-26-18-46-07:tmpInside=23.90,humidInside=64.50,tmpOutside=24.00,humidOutside=63.40,fanActive=0,heaterActive=0
  2019-10-26-18-46-33:tmpInside=23.90,humidInside=64.60,tmpOutside=23.90,humidOutside=63.30,fanActive=0,heaterActive=0
  2019-10-26-18-46-59:tmpInside=23.90,humidInside=64.50,tmpOutside=23.90,humidOutside=63.30,fanActive=0,heaterActive=0
  2019-10-26-18-47-25:tmpInside=23.80,humidInside=64.30,tmpOutside=23.80,humidOutside=63.20,fanActive=0,heaterActive=0
  2019-10-26-18-47-51:tmpInside=23.80,humidInside=64.40,tmpOutside=23.80,humidOutside=63.20,fanActive=0,heaterActive=0
  2019-10-26-18-48-17:tmpInside=23.80,humidInside=64.50,tmpOutside=23.80,humidOutside=63.30,fanActive=0,heaterActive=0
  2019-10-26-18-48-43:tmpInside=23.80,humidInside=64.80,tmpOutside=23.80,humidOutside=63.60,fanActive=0,heaterActive=0
  2019-10-26-18-49-09:tmpInside=23.80,humidInside=64.50,tmpOutside=23.80,humidOutside=63.30,fanActive=0,heaterActive=0
  2019-10-26-18-49-35:tmpInside=23.80,humidInside=64.40,tmpOutside=23.80,humidOutside=63.50,fanActive=0,heaterActive=0
  2019-10-26-18-50-01:tmpInside=23.90,humidInside=64.30,tmpOutside=23.90,humidOutside=63.20,fanActive=0,heaterActive=0
  2019-10-26-18-50-27:tmpInside=23.90,humidInside=64.20,tmpOutside=23.90,humidOutside=63.30,fanActive=0,heaterActive=0
  2019-10-26-18-50-54:tmpInside=23.90,humidInside=64.20,tmpOutside=23.90,humidOutside=63.20,fanActive=0,heaterActive=0
  2019-10-26-18-51-20:tmpInside=23.90,humidInside=64.40,tmpOutside=23.90,humidOutside=63.50,fanActive=0,heaterActive=0
  2019-10-26-18-51-46:tmpInside=24.00,humidInside=64.60,tmpOutside=23.90,humidOutside=63.80,fanActive=0,heaterActive=0
  2019-10-26-18-52-12:tmpInside=23.90,humidInside=64.40,tmpOutside=23.90,humidOutside=63.60,fanActive=0,heaterActive=0
  2019-10-26-18-52-38:tmpInside=24.00,humidInside=64.70,tmpOutside=23.90,humidOutside=63.90,fanActive=0,heaterActive=0
  2019-10-26-18-53-04:tmpInside=23.90,humidInside=64.70,tmpOutside=24.00,humidOutside=66.80,fanActive=0,heaterActive=0
  2019-10-26-18-53-30:tmpInside=23.90,humidInside=64.30,tmpOutside=24.00,humidOutside=66.20,fanActive=0,heaterActive=0
  2019-10-26-18-53-56:tmpInside=24.00,humidInside=64.70,tmpOutside=24.00,humidOutside=66.40,fanActive=0,heaterActive=0
  2019-10-26-18-54-22:tmpInside=24.00,humidInside=64.00,tmpOutside=24.00,humidOutside=66.00,fanActive=0,heaterActive=0
  2019-10-26-18-54-48:tmpInside=24.00,humidInside=64.10,tmpOutside=24.00,humidOutside=66.20,fanActive=0,heaterActive=0
  2019-10-26-18-55-14:tmpInside=24.00,humidInside=64.40,tmpOutside=24.00,humidOutside=66.40,fanActive=0,heaterActive=0
  2019-10-26-18-55-40:tmpInside=24.00,humidInside=64.40,tmpOutside=24.10,humidOutside=66.50,fanActive=0,heaterActive=0
  2019-10-26-18-56-07:tmpInside=24.00,humidInside=63.80,tmpOutside=24.00,humidOutside=66.00,fanActive=0,heaterActive=0
  2019-10-26-18-56-33:tmpInside=24.00,humidInside=64.50,tmpOutside=24.00,humidOutside=66.50,fanActive=0,heaterActive=0
  2019-10-26-18-56-59:tmpInside=24.00,humidInside=64.20,tmpOutside=24.00,humidOutside=66.40,fanActive=0,heaterActive=0
  2019-10-26-18-57-25:tmpInside=24.00,humidInside=64.60,tmpOutside=24.00,humidOutside=66.70,fanActive=0,heaterActive=0
  2019-10-26-18-57-51:tmpInside=24.00,humidInside=64.30,tmpOutside=24.00,humidOutside=66.30,fanActive=0,heaterActive=0
  2019-10-26-18-58-17:tmpInside=24.00,humidInside=64.30,tmpOutside=24.10,humidOutside=66.60,fanActive=0,heaterActive=0
  2019-10-26-18-58-43:tmpInside=24.00,humidInside=64.60,tmpOutside=24.00,humidOutside=66.80,fanActive=0,heaterActive=0
  2019-10-26-18-59-09:tmpInside=24.00,humidInside=64.50,tmpOutside=24.00,humidOutside=66.50,fanActive=0,heaterActive=0
  2019-10-26-18-59-35:tmpInside=24.00,humidInside=64.70,tmpOutside=24.10,humidOutside=67.10,fanActive=0,heaterActive=0
  2019-10-26-19-00-01:tmpInside=24.00,humidInside=64.40,tmpOutside=24.00,humidOutside=66.90,fanActive=0,heaterActive=0
  2019-10-26-19-00-27:tmpInside=24.00,humidInside=64.00,tmpOutside=24.00,humidOutside=66.40,fanActive=0,heaterActive=0
  2019-10-26-19-00-53:tmpInside=23.90,humidInside=64.80,tmpOutside=24.00,humidOutside=67.30,fanActive=0,heaterActive=0
  2019-10-26-19-01-19:tmpInside=23.90,humidInside=64.30,tmpOutside=24.00,humidOutside=66.60,fanActive=0,heaterActive=0
  2019-10-26-19-01-46:tmpInside=24.00,humidInside=64.50,tmpOutside=24.00,humidOutside=66.90,fanActive=0,heaterActive=0
  2019-10-26-19-02-12:tmpInside=24.00,humidInside=64.20,tmpOutside=24.00,humidOutside=66.60,fanActive=0,heaterActive=0
  2019-10-26-19-02-38:tmpInside=24.00,humidInside=64.40,tmpOutside=24.00,humidOutside=66.80,fanActive=0,heaterActive=0
  2019-10-26-19-03-04:tmpInside=24.00,humidInside=64.80,tmpOutside=24.00,humidOutside=67.20,fanActive=0,heaterActive=0
  2019-10-26-19-03-30:tmpInside=24.00,humidInside=64.50,tmpOutside=24.00,humidOutside=66.90,fanActive=0,heaterActive=0
  2019-10-26-19-03-56:tmpInside=24.10,humidInside=64.40,tmpOutside=24.00,humidOutside=67.10,fanActive=0,heaterActive=0
  2019-10-26-19-04-22:tmpInside=24.00,humidInside=64.70,tmpOutside=24.10,humidOutside=67.20,fanActive=0,heaterActive=0
  2019-10-26-19-04-48:tmpInside=24.00,humidInside=64.60,tmpOutside=24.00,humidOutside=67.10,fanActive=0,heaterActive=0
  2019-10-26-19-05-14:tmpInside=24.00,humidInside=64.60,tmpOutside=24.00,humidOutside=67.00,fanActive=0,heaterActive=0
  2019-10-26-19-05-40:tmpInside=24.10,humidInside=64.30,tmpOutside=24.00,humidOutside=66.90,fanActive=0,heaterActive=0
  2019-10-26-19-06-06:tmpInside=24.10,humidInside=64.00,tmpOutside=24.00,humidOutside=66.80,fanActive=0,heaterActive=0
  2019-10-26-19-06-32:tmpInside=24.10,humidInside=63.90,tmpOutside=24.00,humidOutside=66.90,fanActive=0,heaterActive=0
  2019-10-26-19-06-59:tmpInside=24.10,humidInside=64.10,tmpOutside=24.10,humidOutside=66.80,fanActive=0,heaterActive=0
  2019-10-26-19-07-25:tmpInside=24.10,humidInside=64.10,tmpOutside=24.10,humidOutside=66.60,fanActive=0,heaterActive=0
  2019-10-26-19-07-51:tmpInside=24.10,humidInside=64.70,tmpOutside=24.10,humidOutside=67.60,fanActive=0,heaterActive=0
  2019-10-26-19-08-17:tmpInside=24.10,humidInside=65.00,tmpOutside=24.10,humidOutside=67.90,fanActive=0,heaterActive=0
  2019-10-26-19-08-43:tmpInside=24.10,humidInside=65.20,tmpOutside=24.20,humidOutside=68.10,fanActive=0,heaterActive=0
  2019-10-26-19-09-09:tmpInside=24.10,humidInside=64.40,tmpOutside=24.10,humidOutside=67.30,fanActive=0,heaterActive=0
  2019-10-26-19-09-35:tmpInside=24.00,humidInside=63.90,tmpOutside=24.10,humidOutside=66.80,fanActive=0,heaterActive=0
  2019-10-26-19-10-01:tmpInside=24.00,humidInside=63.60,tmpOutside=24.00,humidOutside=66.50,fanActive=0,heaterActive=0
  2019-10-26-19-10-27:tmpInside=24.00,humidInside=64.00,tmpOutside=24.00,humidOutside=66.80,fanActive=0,heaterActive=0
  2019-10-26-19-10-53:tmpInside=24.00,humidInside=63.80,tmpOutside=24.00,humidOutside=66.70,fanActive=0,heaterActive=0
  2019-10-26-19-11-19:tmpInside=23.90,humidInside=65.00,tmpOutside=24.00,humidOutside=67.90,fanActive=0,heaterActive=0
  2019-10-26-19-11-45:tmpInside=23.90,humidInside=64.40,tmpOutside=23.90,humidOutside=67.30,fanActive=0,heaterActive=0
  2019-10-26-19-12-12:tmpInside=23.80,humidInside=64.50,tmpOutside=23.90,humidOutside=67.40,fanActive=0,heaterActive=0
  2019-10-26-19-12-38:tmpInside=23.80,humidInside=64.20,tmpOutside=23.80,humidOutside=67.50,fanActive=0,heaterActive=0
  2019-10-26-19-13-04:tmpInside=23.80,humidInside=64.60,tmpOutside=23.80,humidOutside=67.20,fanActive=0,heaterActive=0
  2019-10-26-19-13-30:tmpInside=23.80,humidInside=65.10,tmpOutside=23.80,humidOutside=68.00,fanActive=0,heaterActive=0
  2019-10-26-19-13-56:tmpInside=23.80,humidInside=64.40,tmpOutside=23.80,humidOutside=67.50,fanActive=0,heaterActive=0
  2019-10-26-19-14-22:tmpInside=23.80,humidInside=64.90,tmpOutside=23.80,humidOutside=68.00,fanActive=0,heaterActive=0
  2019-10-26-19-14-48:tmpInside=23.70,humidInside=64.80,tmpOutside=23.80,humidOutside=67.90,fanActive=0,heaterActive=0
  `;
  }
}
