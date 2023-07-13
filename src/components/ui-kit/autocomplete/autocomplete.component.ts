import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  @Input('title') title: string = '';
  @Input('value') value: any;
  @Input('defaultValue') defaultValue: any;
  @Input('placeholder') placeholder: string = '';
  @Input('options') options: string[] = ['8:30', '9:00', '9:30'];
  @Input('FormInstance') FormInstance!: FormGroup;
  @Input('formControlNameInstance') formControlNameInstance!: string

  filteredOptions!: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  getFormControl() {
    return this.FormInstance.get(this.formControlNameInstance) as FormControl
  }
  ngOnInit() {
    this.filteredOptions = this.getFormControl().valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
}
