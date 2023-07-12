import { HttpClient } from '@angular/common/http';
import { Commessa, Day } from './../interfaces/interface.table';
import { Injectable, inject, OnInit } from '@angular/core';
import { Observable, from, delay, timestamp } from 'rxjs';
import { filter, first, take, tap, toArray } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CommessaService implements OnInit {

  _http = inject(HttpClient)

  days: Day[] = [{
    day: 4,
    month: 6,
    year: 2023,
    entrataMattina: 9,
    uscitaMattina: 13,
    entrataPomeriggio: 14,
    uscitaPomeriggio: 18,
    sedeDiLavoro: 'SmartWorking',
  }]

  commesse: Commessa[] = [{
    hours: 8,
    quantity: 2,
    day: 5,
    month: 7,
    year: 2023,
  }];

  commesseMoccate: any = [
    {
      "id": 1,
      "commessa": "07HRDIR250HR",
      "descriptionCommessa": "Attività di supporto HR",
      "hours": 4,
      "timestamp": "1688460734957"
    },
    {
      "id": 2,
      "commessa": "12ITPRE620",
      "descriptionCommessa": "Presale commessa BU ITS",
      "hours": 2,
      "timestamp": "1688460734957"
    },
    {
      "id": 3,
      "commessa": "02SIKUW619",
      "descriptionCommessa": "Progetto VHMM",
      "hours": 2,
      "timestamp": "1688460734957"

    }
  ]


  getCommessaByDay(day: number, month: number, year: number): Observable<Commessa> {
    return from(this.commesse).pipe(
      filter((c: Commessa) => {
        return c.day == day && c.month == (month + 1) && c.year == year;
      }),
     
    )
  }

  getCommesse() {
    return this._http.get(`http://127.0.0.1:8090/api/collections/Giba/records`);
  }

  getHoursByDay(timestamp: number) {
    return from(this.commesseMoccate).pipe(
      filter((t: any) => {
        return timestamp == t.timestamp
      }),
      toArray()
    );
  }

  saveCommessaByDay(timestamp: number, body: any) {
    return this._http.post(`http://127.0.0.1:8090/api/collections/Giba/records/${timestamp}`, body)
  }

  getDayByTimestamp(timestamp: number):Observable<Day> {
    let date = moment(timestamp);
    let day = date.date();
    let month = date.month();
    let year = date.year();
    return from(this.days).pipe(
      filter((t: any) => {
        return (t.day == day) && (t.month == month) && (t.year == year);
      })
      );
  }

  postCommessa(id: any, body: any) {
    return this._http.post(id, body).subscribe((e: any) => {
      console.log(e)
    })
  }

  constructor() { }

  ngOnInit(): void {
  }
}
