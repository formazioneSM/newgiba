import { FormGroup } from '@angular/forms';
import { Day } from './../../interfaces/interface.table';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-in-out-office',
  templateUrl: './in-out-office.component.html',
  styleUrls: ['./in-out-office.component.scss']
})
export class InOutOfficeComponent {
  @Input('title') title: string = 'Mattina';
  @Input('entrata') entrata!: Day;
  @Input('uscita') uscita!: Day;
  @Input('FormInstance') FormInstance!: FormGroup;
  @Input('formControlNameInstance') formControlNameInstance!: string[]

  optionsIN: string[] = ['8:30', '9:00', '9:30'];
  optionsOUT: string[] = ['17:30', '18:00', '18:30'];

}
