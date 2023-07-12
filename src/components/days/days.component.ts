import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DayInfo, Day, Commessa } from '../../interfaces/interface.table';
import { Component, OnInit, Input, SimpleChanges, inject, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { CommessaService } from 'src/services/commessa.service';
import { dayToTimestamp, fromNumberToDaysArray, getFormGroup, isMobile } from 'src/shared/utils/functions';
import { day } from 'src/services/days.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})

export class DaysComponent implements OnInit {
  /************************************ API COMPONENT ********************************************/
  /**
   * @description API COMPONENT - tutte le proprietà in ingresso e in uscita del component
   */
  // @Input('dayInfo') dayInfo!: DayInfo;
  @Input('day') day: any
  @Input('timestamp') timestamp!: string;
/************************************ API COMPONENT ********************************************/


/************************************ CLASS MEMBERS ********************************************/
/**
 * @description CLASS MEMBERS - Tutti i membri della classe
 */
  dayInfo = day;
  transformations = {
    dayToTimestamp,
    getFormGroup,
    isMobile
  }
  commessaService = inject(CommessaService)
  _route = inject(ActivatedRoute);
  dati: any
  form!: FormGroup;
  private readonly _fb = inject(FormBuilder);
  days = computed<Day[]>(() => fromNumberToDaysArray(this.dayInfo())) ;
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
/************************************ CLASS MEMBERS ********************************************/



/************************************ CLASS METHODS ********************************************/
/**
 * @description CLASS METHODS - Tutti i metodi della classe
 */
  goToDetail(timestamp: number) {
    if (innerWidth < 768) {
      this.router.navigate(['/commessa-details', timestamp])
    } else {
      this.router.navigate([''])
    }
  }
  submit(s: any) {
    console.log(s.value)
  }
/************************************ CLASS METHODS ********************************************/



/************************************ CLASS LIFECYCLE METHODS ********************************************/
  /**
 * @description CLASS LIFECYCLE METHODS - Tutti i metodi del ciclo di vita del componente
 */
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
  ngOnInit(): void {
    this.commessaService.getCommessaByDay(5, 7, 2023).subscribe((c: Commessa) => {
      console.log('COMMESSA', c);
    });
    forkJoin(this.days().map((d:Day) => {
      let time:number = dayToTimestamp(d);
      return this.commessaService.getDayByTimestamp((time as number))
    })).subscribe((res:any[]) => {
      console.log('risposta esagerata', res)
    }, error => {
      console.error('ERRORE MORTALE', error)
    })
    // this.days().forEach((d:Day) => {
    // })
    // this.commessaService.getDayByTimestamp(parseInt(this.thisDay)).subscribe((dato: Day) => {
      // this.form.patchValue({
      //   'mattina': {
      //     'entrata': dato.entrataMattina ?? '',
      //     'uscita': dato.uscitaMattina ?? ''
      //   },
      //   'pomeriggio': {
      //     'entrata': dato.entrataPomeriggio ?? '',
      //     'uscita': dato.uscitaPomeriggio ?? '',
      //   },
      //   'extraUfficio': {
      //     'entrata': dato.entrataExtraUfficio ?? '',
      //     'uscita': dato.uscitaExtraUfficio ?? '',
      //   },
      //   'assenza': dato.assenza ?? '',
      //   'sede': dato.sedeDiLavoro ?? '',
      //   'trasferta': dato.trasferta ?? '',
      //   'reperibilita': dato.reperibilita ?? ''
      // })
    // });
    this._route.params.subscribe((params: any,) => {
      this.currentDay = params.id + ' ' + params.day;
    })
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   this.days = fromNumberToDaysArray(changes['dayInfo'].currentValue)
  // }
  /************************************ CLASS LIFECYCLE METHODS ********************************************/
}