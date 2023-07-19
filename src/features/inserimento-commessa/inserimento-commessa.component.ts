import { Commessa } from './../../interfaces/interface.table';
import { CommessaService } from 'src/services/commessa.service';
import { Component, Input, inject } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserimento-commessa',
  templateUrl: './inserimento-commessa.component.html',
  styleUrls: ['./inserimento-commessa.component.scss']
})
export class InserimentoCommessaComponent {
  @Input('timestamp') timestamp!: number;
  private _commesseService = inject(CommessaService);
  form!: FormGroup;
  formControls: any[] = [];
  router = inject(Router)
  private _fb = inject(FormBuilder);
  optionCommessa = ['1', '2', '3', '4', '5', '6', '7', '8']
  descriptionCommessa: any;
  somma: number = 0
  datoInserito: any
  constructor() { }

  submit(formValue: any) {
    this._commesseService.saveCommessaByDay(this.timestamp, formValue.value).subscribe({
      next: (response: any) => {

      },
      error: (error: any) => {
        this.datoInserito = formValue.value
        console.log(this.datoInserito)
      }
    })
  }
  getFormControlName(name: string) {
    return name.replace(' ', '').toLowerCase();
  }

  // comeBack() {
  //   this.router.navigate('/commessa-detail', time)
  // }

  ngOnInit() {
    this._commesseService.getCommesse().subscribe((commesse: any) => {
      this.descriptionCommessa = commesse
      let commessa = commesse.items[0].commesse.map((c: any) => c.commessa)
        .reduce((a: any, v: any) => {
          return {
            ...a,
            [v.replace(' ', '').toLowerCase()]: ['', Validators.required],
          };
        }, {});
      this.form = this._fb.group({ ...commessa });
      this.formControls = Object.keys(this.form.controls).map(
        (k: any) => ({ key: k, value: this.form.controls[k].value })
      );
      this.form.valueChanges.subscribe((object: any) => {
        this.somma = 0
        Object.keys(object).forEach((key: string) => {
          this.somma += parseInt(object[key]) ? parseInt(object[key]) : 0;
          console.log(this.somma);
        })
      });
      this._commesseService.getHoursByDay(this.timestamp).subscribe((r: any) => {
        let controls = Object.keys(this.form.controls).map(
          (k: any) => ({
            key: k, value: r.find((hour: any) => {
              return hour.commessa.toLowerCase() === k
            })?.hours
          })
        ).reduce((a: any, v: any) => {
          return {
            ...a,
            [v.key.replace(' ', '').toLowerCase()]: v.value
          };
        }, {});
        console.log(controls)
        this.form.patchValue(controls)
      })
    });
  }
}