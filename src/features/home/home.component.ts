import { SharedModule } from './../../shared/shared.module';
import { Commessa, DayInfo } from '../../interfaces/interface.table';
import { Component, computed, signal, OnInit, inject } from '@angular/core';
import * as moment from 'moment';
import { CommessaService } from 'src/services/commessa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  days!: DayInfo;
  commessaService = inject(CommessaService);
  day: any
  changeMonth(element: any) {
    this.days = {
      totalDays: moment().month(moment().month(element.month).format('MMMM')).daysInMonth(),
      month: moment().month(moment().month(element.month).format('MMMM')).month(),
      year: moment().year(parseInt(element.year)).year()
    };
  }

  ngOnInit(): void {
    // this.commessaService.getCommesse().subscribe((c: Commessa) => {
    //   console.log(c)
    // })
    this.days = {
      totalDays: moment().daysInMonth(),
      month: moment().month(),
      year: moment().year(),
    }
  }
}
