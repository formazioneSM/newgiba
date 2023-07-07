import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input('style') style: any;
  @Input('text') text: string = '';
  @Input('FormInstance') FormInstance!: FormGroup;
  @Input('formControlNameInstance') formControlNameInstance!: string
}
