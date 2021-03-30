import { TestBed } from '@angular/core/testing';

import { DataService, WeekData } from './data.service';

const mockData: WeekData[] = [
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

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data', () => {
    service.getData().subscribe((data) => {
      expect(data).toEqual(mockData);
    })
  });


});
