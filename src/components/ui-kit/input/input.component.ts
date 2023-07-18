import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input('day') day: any
  @Input('placeholder') placeholder: string = ""
  @Input('titleInput') titleInput: string = ""
  @Input('defaultValue') defaultValue: string = ""
  @Input('FormInstance') FormInstance!: FormGroup;
  @Input('formControlNameInstance') formControlNameInstance!: string

}

