import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DayInfo, Day, Commessa } from '../../interfaces/interface.table';
import { Component, OnInit, Input, SimpleChanges, inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { timestamp } from 'rxjs';
import { CommessaService } from 'src/services/commessa.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})

export class DaysComponent implements OnInit {
  @Input('dayInfo') dayInfo!: DayInfo;
  @Input('day') day: any
  @Input('timestamp') timestamp!: string;
  commessaService = inject(CommessaService)
  _route = inject(ActivatedRoute);
  dati: any
  form!: FormGroup;
  private readonly _fb = inject(FormBuilder);
  days: Day[] = [];
  commesse: Commessa = {}
  router = inject(Router);
  currentDay: any
  isDesktop: boolean = false
  motivation: any = ['Malattia', 'Permesso'];
  optionsInMorning: string[] = ['8:30', '9:00', '9:30']
  optionsOutMorning: string[] = ['13:00', '13:30']
  optionsInAfternoon: string[] = ['14:00', '14:30', '15:00']
  optionsOutAfternoon: string[] = ['17:30', '18:00', '18:30']
  thisDay: any = moment();
  goToDetail(timestamp: number) {
    if (innerWidth < 768) {
      this.router.navigate(['/commessa-details', timestamp])
    } else {
      this.router.navigate([''])
    }
  }

  dayToTimestamp(day: Day) {
    return moment().year(day.year ?? 0).month(moment().month(day.month ?? 0).format('MMMM')).date((day.position ?? 0)).valueOf();
  }

  setDays() {
    this.days = [...Array(this.dayInfo.totalDays).keys()].map((d: number) => ({
      position: d + 1,
      day: this.getCurrentDay((d + 1), this.dayInfo.month, this.dayInfo.year),
      month: this.dayInfo.month,
      year: this.dayInfo.year,
      commessa: {}
    })

    );
  }

  getCurrentDay(d: number, m: number, y: number) {
    return moment().year(y).month(moment().month(m).format('MMMM')).date(d).lang('it').format('dddd');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.days = [...Array(changes['dayInfo'].currentValue.totalDays).keys()].map((d: number) => ({
      position: d + 1,
      day: this.getCurrentDay((d + 1), changes['dayInfo'].currentValue.month, changes['dayInfo'].currentValue.year),
      month: changes['dayInfo'].currentValue.month,
      year: changes['dayInfo'].currentValue.year,
    }));

  }
  capitalizeFirstLetter(string: any) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getSizeMobile() {
    if (window.innerWidth < 768) {
      return true
    }
    return false
  }

  getSizeDesktop() {
    if (window.innerWidth > 768) {
      return true
    }
    return false
  }


  getFormGroup(name: string) {
    return this.form.get(name) as FormGroup;
  }

  constructor() {
    this.form = this._fb.group({
      'mattina': this._fb.group({
        'entrata': '',
        'uscita': '',
      }),
      'pomeriggio': this._fb.group({
        'entrata': '',
        'uscita': '',
      }),
      'extraUfficio': this._fb.group({
        'entrata': [''],
        'uscita': [''],
      }),
      'assenza': [''],
      'sede': ['', Validators.required],
      'trasferta': [''],
      'reperibilita': ['']
    })
  }

  get sede() {
    return this.form.get('sede ')
  }
  get trasferta() {
    return this.form.get('trasferta')
  }
  get reperibilita() {
    return this.form.get('reperibilita')
  }

  click() { }

  submit(s: any) {
    console.log(s.value)
  }

  ngOnInit(): void {

    this.setDays();
    this.commessaService.getCommessaByDay(5, 6, 2023).subscribe((c: Commessa) => {
      console.log(this.commesse);
    });
    this.commessaService.getDayByTimestamp(parseInt(this.thisDay)).subscribe((dato: Day) => {
      this.form.patchValue({
        'mattina': {
          'entrata': dato.entrataMattina ?? '',
          'uscita': dato.uscitaMattina ?? ''
        },
        'pomeriggio': {
          'entrata': dato.entrataPomeriggio ?? '',
          'uscita': dato.uscitaPomeriggio ?? '',
        },
        'extraUfficio': {
          'entrata': dato.entrataExtraUfficio ?? '',
          'uscita': dato.uscitaExtraUfficio ?? '',
        },
        'assenza': dato.assenza ?? '',
        'sede': dato.sedeDiLavoro ?? '',
        'trasferta': dato.trasferta ?? '',
        'reperibilita': dato.reperibilita ?? ''
      })
      console.log(dato);
    });
    this._route.params.subscribe((params: any,) => {
      this.currentDay = params.id + ' ' + params.day;
    })
    console.log(this.thisDay)
  }

}
