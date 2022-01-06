import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dia = `${moment().format('DD')} de ${moment().format('MM')} de ${moment().format('YYYY')}` ;
}
