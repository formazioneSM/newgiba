import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { DayInfo } from 'src/interfaces/interface.table';
import { CommessaService } from 'src/services/commessa.service';
@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrls: ['./home-desktop.component.scss']
})
export class HomeDesktopComponent implements OnInit {
  days!: DayInfo;
  _fb = inject(FormBuilder)
  form!: FormGroup
  commessaService = inject(CommessaService);
  day: any

  constructor() {
    this.form = this._fb.group({
      'mattina': this._fb.group({
        'entrata': ['', Validators.required],
        'uscita': ['', Validators.required],
      }),
      'pomeriggio': this._fb.group({
        'entrata': ['', Validators.required],
        'uscita': ['', Validators.required],
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


  getFormGroup(name: string) {
    return this.form.get(name) as FormGroup;
  }

  submit(s: any) {
    console.log(s.value)
  }

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
