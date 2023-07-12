import { DayInfo } from '../../interfaces/interface.table';
import {
  Component,
  OnInit,
  inject,
  Input,
  signal,
  Signal,
} from '@angular/core';
import * as moment from 'moment';
import { CommessaService } from 'src/services/commessa.service';
import {  day } from 'src/services/days.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input('timestamp') timestamp!: string;
  day = day;
  commessaService = inject(CommessaService);
  changeMonth(element: any) {
    this.day.set({
      totalDays: moment()
        .month(moment().month(element.month).format('MMMM'))
        .daysInMonth(),
      month: moment()
        .month(moment().month(element.month).format('MMMM'))
        .month(),
      year: moment().year(parseInt(element.year)).year(),
    })
  }

  getSizeDesktop() {
    if (window.innerWidth < 768) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.day.set({
      totalDays: moment().daysInMonth(),
      month: moment().month(),
      year: moment().year(),
    });
  }
}
