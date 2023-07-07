import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShareService {
  clickedElement: BehaviorSubject<any> = new BehaviorSubject(false);
}
