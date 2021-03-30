import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface WeekData {
  name: string;
  isCurrentDay: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data: WeekData[] = [
    {
      name: 'Mon',
      isCurrentDay: false
    },
    {
      name: 'Tue',
      isCurrentDay: true
    },
    {
      name: 'Wed',
      isCurrentDay: false
    },
    {
      name: 'Thu',
      isCurrentDay: false
    },
    {
      name: 'Fri',
      isCurrentDay: false
    },
    {
      name: 'Sat',
      isCurrentDay: false
    },
    {
      name: 'Sun',
      isCurrentDay: false
    }
  ];

  getData(): Observable<WeekData[]> {
    return of(this.data);
  }

}
