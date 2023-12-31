import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Day, Commessa } from '../../interfaces/interface.table';

import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  inject,
  computed,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { CommessaService } from 'src/services/commessa.service';
import {
  dayToTimestamp,
  fromNumberToDaysArray,
  getFormGroup,
  isMobile,
  checkDay
} from 'src/shared/utils/functions';
import { day } from 'src/services/days.service';
import { merge, switchMap, toArray } from 'rxjs';
import { mergeAll, tap } from 'rxjs/operators';
import { redDays } from 'src/shared/utils/costants';
@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss'],
})
export class DaysComponent implements OnInit {
  /************************************ API COMPONENT ********************************************/
  /**
   * @description API COMPONENT - tutte le proprietà in ingresso e in uscita del component
   */
  // @Input('dayInfo') dayInfo!: DayInfo;
  @Input('day') day: any;
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
    isMobile,
    checkDay
  };
  rd = redDays
  commessaService = inject(CommessaService);
  _route = inject(ActivatedRoute);
  form!: FormGroup;
  private readonly _fb = inject(FormBuilder);
  days = computed<Day[]>(() => fromNumberToDaysArray(this.dayInfo()));
  commesse: Commessa = {};
  router = inject(Router);
  currentDay: any;
  dayss = signal(this.days);
  isDesktop: boolean = false;
  currentYear = moment().year();
  motivation: any = ['Malattia', 'Permesso'];
  default = 0;
  getCommesse = this.commessaService.getData()
  optionsInMorning: string[] = ['8:30', '9:00', '9:30'];
  optionsOutMorning: string[] = ['13:00', '13:30'];
  optionsInAfternoon: string[] = ['14:00', '14:30', '15:00'];
  optionsOutAfternoon: string[] = ['17:30', '18:00', '18:30'];

  /************************************ CLASS MEMBERS ********************************************/

  /************************************ CLASS METHODS ********************************************/
  /**
   * @description CLASS METHODS - Tutti i metodi della classe
   */
  goToDetail(timestamp: number) {
    if (innerWidth < 768) {
      this.router.navigate(['/commessa-details', timestamp]);
    } else {
      this.router.navigate(['']);
    }
  }
  goToCommessa(timestamp: number) {
    if (innerWidth > 768) {
      this.router.navigate(['/commessa-details/', timestamp, 'insertCommesse']);
    } else {
      this.router.navigate(['']);
    }
  }
  submit(s: any) {
    console.log(s.value);
  }


  mostraDato() {
    this.commessaService.getData().subscribe((e: any) => {
      console.log(e)
    })
  }
  /************************************ CLASS METHODS ********************************************/

  /************************************ CLASS LIFECYCLE METHODS ********************************************/
  /**
   * @description CLASS LIFECYCLE METHODS - Tutti i metodi del ciclo di vita del componente
   */
  constructor() {

    this.form = this._fb.group({
      mattina: this._fb.group({
        entrata: '',
        uscita: '',
      }),
      pomeriggio: this._fb.group({
        entrata: '',
        uscita: '',
      }),
      extraUfficio: this._fb.group({
        entrata: [''],
        uscita: [''],
      }),
      assenza: [''],
      sedeDiLavoro: ['', Validators.required],
      trasferta: [''],
      reperibilita: [''],
    });
  }
  get sedeDiLavoro() {
    return this.form.get('sedeDiLavoro');
  }
  get trasferta() {
    return this.form.get('trasferta');
  }
  get reperibilita() {
    return this.form.get('reperibilita');
  }
  ngOnInit(): void {
    this.commessaService
      .getCommessaByDay(5, 7, 2023)
      .subscribe((c: Commessa) => {
        // console.log('COMMESSA', c);
      });
    merge(
      this.days().map((d: Day) => {
        let time: number = dayToTimestamp(d);
        return this.commessaService.getDayByTimestamp(time as number);
      })
    ).pipe(

      tap((d: any) => console.log('risposta dentro days', d)),
      // switchMap((e) => {
      //   return e.pipe(
      //     tap((e) => console.log('tap dentro lo switchmap', e))
      //   )
      // }),
      // tap((d: any) => console.log('risposta dentro days', d)),

      toArray()
    )

      .subscribe(
        (res: any) => {
          console.log('risposta esagerata', res);
          this.dayss.mutate((days: Signal<Day[]>) => {
            let indexInDays = days().findIndex((d: Day) => res.find((dd: any) => dd.day == d.position && dd.month == d.month && dd.year == d.year));
            let dayToReplace = res.find((d: Day) => days().find((dd) => dd.position == d.day && dd.month == d.month && dd.year == d.year));
            if (indexInDays !== -1 && dayToReplace) {
              dayToReplace['day'] = days()[indexInDays].day;
              dayToReplace['position'] = days()[indexInDays].position;
              days()[indexInDays] = dayToReplace;
            }
          })
        },
        (error) => {
          console.error('ERRORE MORTALE', error);
        }
      );
    this._route.params.subscribe((params: any) => {
      this.currentDay = params.id + ' ' + params.day;
    });

    this.commessaService.getData().subscribe((e: any) => {
      console.log(e.items[0].data[0])
    })
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.days = fromNumberToDaysArray(changes['dayInfo'].currentValue)
  // }
  /************************************ CLASS LIFECYCLE METHODS ********************************************/
}
