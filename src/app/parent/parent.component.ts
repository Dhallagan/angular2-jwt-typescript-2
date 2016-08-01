import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-parent',
  templateUrl: 'parent.component.html',
  styleUrls: ['parent.component.css']
})

@Injectable()
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
