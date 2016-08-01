import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router'; // import

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES] // inject
})

@Injectable()
export class AppComponent {
  title = 'app works!';
}
