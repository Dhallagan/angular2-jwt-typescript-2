import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
