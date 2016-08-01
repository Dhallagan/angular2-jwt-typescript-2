import { Component } from '@angular/core';
import {Injectable} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-about',
    templateUrl: 'about.component.html'
})

@Injectable()
export class AboutComponent {
    aboutme: string;

    constructor() {
        this.aboutme = 'Hello, I am an about page, I contain information about the application';
    }
}
