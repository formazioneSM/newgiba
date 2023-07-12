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
  @Input('optionsIn') optionsIn: string[] = []
  @Input('optionsOut') optionsOut: string[] = []

  ngOnDestroy() {
    this.FormInstance.reset();
  }
}
