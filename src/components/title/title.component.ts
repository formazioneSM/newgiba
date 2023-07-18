import { Component } from '@angular/core';
import {
  isMobile,
} from 'src/shared/utils/functions';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  transformations = {
    isMobile
  }
}
