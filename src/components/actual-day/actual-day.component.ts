import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actual-day',
  templateUrl: './actual-day.component.html',
  styleUrls: ['./actual-day.component.scss']
})
export class ActualDayComponent {
  @Input('currentDay') currentDay: string = '';
}
