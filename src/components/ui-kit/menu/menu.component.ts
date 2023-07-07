import { Component, Input, inject, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input('disabled') disabled!: boolean;
  @Input('selectedOption') selectedOption!: string;
  @Input('options') options!: string[];
  @Output('onClick') onClick = new EventEmitter();

  click: boolean = false;

  onChangeMonth(value: string) {
    this.onClick.emit(value);
  }

  toogleMenu() {
    this.click = !this.click;
  }

  closedMenu() {
    this.click = false;
  }

  ngOnInit(): void {

  }
}
