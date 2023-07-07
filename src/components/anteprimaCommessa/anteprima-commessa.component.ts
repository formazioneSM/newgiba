import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anteprima-commessa',
  templateUrl: './anteprima-commessa.component.html',
  styleUrls: ['./anteprima-commessa.component.scss']
})
export class AnteprimaCommessaComponent {
  @Input('hours') hours: number = 0;
  @Input('commessa') commessa: number = 0;
  @Input('day') day: number = 0;
  @Input('year') year: number = 0;
}
