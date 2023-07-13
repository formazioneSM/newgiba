import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Day } from './../../interfaces/interface.table';
import { Component, Input, inject } from '@angular/core';
@Component({
  selector: 'app-in-out-office',
  templateUrl: './in-out-office.component.html',
  styleUrls: ['./in-out-office.component.scss'],
})
export class InOutOfficeComponent {
  @Input('title') title: string = 'Mattina';
  @Input('entrata') entrata!: Day;
  @Input('day') day!: Day;
  @Input('uscita') uscita!: Day;
  // @Input('FormInstance') FormInstance!: FormGroup;
  @Input('formControlNameInstance') formControlNameInstance!: string[];
  @Input('formGroupInstanceName') formGroupInstanceName!: string;
  @Input('optionsIn') optionsIn: string[] = [];
  @Input('optionsOut') optionsOut: string[] = [];

  form!: FormGroup;
  private readonly _fb = inject(FormBuilder);

  getProperlyValue(name:string, value:any){
    if(name == 'entrata' && this.formGroupInstanceName == 'mattina'){
      return value.entrataMattina
    }else if(name == 'entrata' && this.formGroupInstanceName == 'pomeriggio' ){
      return value.entrataPomeriggio
    }else if(name == 'uscita' && this.formGroupInstanceName == 'mattina'){
      return value.uscitaMattina
    }else if(name == 'uscita' && this.formGroupInstanceName == 'pomeriggio'){
      return value.uscitaPomeriggio
    }else if(name == 'entrata' && this.formGroupInstanceName == 'extraUfficio'){
      return value.entrataExtraUfficio
    }else if(name == 'uscita' && this.formGroupInstanceName == 'extraUfficio'){
      return value.uscitaExtraUfficio
    }
  }
getFormGroup(form:FormGroup){
  return form.get(this.formGroupInstanceName) as FormGroup;
}
  ngOnInit() {
    let controls = this.formControlNameInstance.reduce(
      (acc: any, curr: any) => ({ ...acc, [curr]: [this.getProperlyValue(curr, this.day), Validators.required] }),
      {}
    );
    this.form = this._fb.group({
      [this.formGroupInstanceName]: this._fb.group(controls)
    });
  }
  ngOnDestroy() {
    this.form.reset();
  }
}
