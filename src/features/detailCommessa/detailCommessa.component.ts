import { Component, computed, signal, Input, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { CommessaService } from 'src/services/commessa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Day } from 'src/interfaces/interface.table';
CommessaService
@Component({
  selector: 'app-commessa',
  templateUrl: './detailCommessa.component.html',
  styleUrls: ['./detailCommessa.component.scss']
})
export class DetailCommessaComponent implements OnInit {
  @Input('timestamp') timestamp!: string;
  commessaService = inject(CommessaService)
  _route = inject(ActivatedRoute);
  currentDay!: string;
  dati: any
  form!: FormGroup;
  private readonly _fb = inject(FormBuilder);

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
  click() { }

  getFormGroup(name: string) {
    return this.form.get(name) as FormGroup;
  }

  submit(s: any) {
    console.log(s.value)
  }

  // reset() {
  //   return this.form.reset()
  // }

  titleInput: any = [
    { title: 'Mattina' },
    { title: 'Pomeriggio' },
    { title: 'Extra ufficio' },
  ]

  propertiesInput: any = [
    {
      title: 'Sede di lavoro',
      placeholder: 'Seleziona sede di lavoro'
    },
    {
      title: 'Trasferta',
      placeholder: 'Seleziona trasferta'
    },
  ]

  motivation: any = ['Malattia', 'Permesso'];

  ngOnInit(): void {
    this.commessaService.getDayByTimestamp(parseInt(this.timestamp)).subscribe((dato: Day) => {
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
  }


}
