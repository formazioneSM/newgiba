import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { DayInfo } from 'src/interfaces/interface.table';

@Component({
  selector: 'app-date-navigation',
  templateUrl: './date-navigation.component.html',
  styleUrls: ['./date-navigation.component.scss']
})
export class DateNavigationComponent implements OnInit {
  @Output('changeMonth') changeMonth: EventEmitter<DayInfo> = new EventEmitter();
  @Input('month') month!: DayInfo;

  currentYear = moment().format('YYYY');
  currentMonth: string = moment().lang("it").format('MMMM');

  getAllMonth() {
    return Array.apply(0, Array(12)).map(function (_, i) { return moment().month(i).lang('it').format('MMMM') });
  }

  selectedMonth(selectedMonth: string) {
    this.currentMonth = moment().lang('it').month(selectedMonth).format("MMMM");
    this.changeMonth.emit({
      month: moment().lang('it').month(this.currentMonth).month(),
      year: parseInt(this.currentYear),
    });
  }

  previousMonth() {
    this.changeMonth.emit({
      month: moment().lang('it').month(this.currentMonth).add(-1, "M").month(),
      year: parseInt(this.currentYear),
    });
    this.currentMonth = moment().lang('it').month(this.currentMonth).add(-1, "M").format("MMMM");
    if (this.currentMonth == "dicembre") {
      this.currentYear = moment().year(parseInt(this.currentYear)).add(-1, "y").format('YYYY');
      this.changeMonth.emit({
        month: moment().lang('it').month(this.currentMonth).month(),
        year: parseInt(this.currentYear),
      });
    }
  }

  nextMonth() {
    this.changeMonth.emit({
      month: moment().lang('it').month(this.currentMonth).add(1, "M").month(),
      year: parseInt(this.currentYear),
    });
    this.currentMonth = moment().lang('it').month(this.currentMonth).add(1, "M").format("MMMM");
    if (this.currentMonth == "gennaio") {
      this.currentYear = moment().year(parseInt(this.currentYear)).add(1, "y").format('YYYY');
      this.changeMonth.emit({
        month: moment().lang('it').month(this.currentMonth).month(),
        year: parseInt(this.currentYear),
      });
    }
  }

  ngOnInit() {
    this.getAllMonth()

  }
}
