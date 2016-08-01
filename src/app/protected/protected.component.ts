import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-protected',
  templateUrl: 'protected.component.html',
  styleUrls: ['protected.component.css']
})

@Injectable()
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
