import { Component } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { DayComponent } from './day.component';

@Component({
  template: `
    <app-day [displayName]="name" [isCurrentDay]="today"></app-day>
  `
})
class TestHostComponent {
  name = 'Monday';
  today = true;
}

describe('DayComponent', () => {
  let componentHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let day: HTMLParagraphElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        DayComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    componentHost = fixture.componentInstance;
    day = fixture.nativeElement.querySelector('p');
    fixture.detectChanges();
  });

  it('should show name', () => {
    expect(day.textContent).toContain('Monday');
  });

  it('should highlight current day when input is true', () => {
    expect(day).toHaveClass('current');
  });

  it('should not highlight current day when input is false', () => {
    componentHost.today = false;
    fixture.detectChanges();
    expect(day).not.toHaveClass('current');
  });

});
