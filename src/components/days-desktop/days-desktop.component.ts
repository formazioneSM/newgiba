import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Commessa, Day, DayInfo } from 'src/interfaces/interface.table';
import { CommessaService } from 'src/services/commessa.service';
@Component({
  selector: 'app-days-desktop',
  templateUrl: './days-desktop.component.html',
  styleUrls: ['./days-desktop.component.scss']
})
export class DaysDesktopComponent {
  @Input('dayInfo') dayInfo!: DayInfo;
  @Input('currentDay') currentDay!: DayInfo;
  @Input('day') day: any
  commessaService = inject(CommessaService)
  days: Day[] = [];
  commesse: Commessa = {}
  timestamp: any
  router = inject(Router);


  goToDetail(timestamp: number) {
    this.router.navigate(['/commessa-details', timestamp]);
  }


  //modifica eseguita qui 30/06
  // dayToTimestamp(day: Day) {
  //   return moment().year(day.year ?? 0).month(moment().month(day.month ?? 0).format('MMMM') + 1).date((day.position ?? 0) - 1).valueOf();
  // }
  dayToTimestamp(day: Day) {
    return moment().year(day.year ?? 0).month(moment().month(day.month ?? 0).format('MMMM')).date((day.position ?? 0)).valueOf();
  }

  // setDays() {
  //   this.days = [...Array(this.dayInfo.totalDays).keys()].map((d: number) => ({
  //     position: d + 1,
  //     day: this.getCurrentDay((d + 1), this.dayInfo.month, this.dayInfo.year),
  //     month: this.dayInfo.month + 1,
  //     year: this.dayInfo.year,
  //     commessa: {}
  //   }));
  // }

  setDays() {
    this.days = [...Array(this.dayInfo.totalDays).keys()].map((d: number) => ({
      position: d + 1,
      day: this.getCurrentDay((d + 1), this.dayInfo.month, this.dayInfo.year),
      month: this.dayInfo.month,
      year: this.dayInfo.year,
      commessa: {}
    }));
  }

  getCurrentDay(d: number, m: number, y: number) {
    return moment().year(y).month(moment().month(m).format('MMMM')).date(d).lang('it').format('dddd');
  }

  //RESTIUISCE MESE SUCCESSIVO
  // ngOnChanges(changes: SimpleChanges) {
  //   this.days = [...Array(changes['dayInfo'].currentValue.totalDays).keys()].map((d: number) => ({
  //     position: d + 1,
  //     day: this.getCurrentDay((d + 1), changes['dayInfo'].currentValue.month, changes['dayInfo'].currentValue.year),
  //     month: changes['dayInfo'].currentValue.month + 1,
  //     year: changes['dayInfo'].currentValue.year,
  //   }));
  // }

  ngOnChanges(changes: SimpleChanges) {
    this.days = [...Array(changes['dayInfo'].currentValue.totalDays).keys()].map((d: number) => ({
      position: d + 1,
      day: this.getCurrentDay((d + 1), changes['dayInfo'].currentValue.month, changes['dayInfo'].currentValue.year),
      month: changes['dayInfo'].currentValue.month,
      year: changes['dayInfo'].currentValue.year,
    }));
  }



  ngOnInit(): void {
    this.setDays();
    this.commessaService.getCommessaByDay(5, 6, 2023).subscribe((c: Commessa) => {
      console.log(this.commesse);
    });

  }
}
