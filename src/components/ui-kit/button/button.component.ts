import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input('type') type: any
  @Input('name') name: string = 'Bottone';
  @Input('style') style!: any;
  @Input('disabled') disabled!: string;
}
