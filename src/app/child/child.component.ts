import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-child',
  templateUrl: 'child.component.html',
  styleUrls: ['child.component.css']
})

@Injectable()
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
