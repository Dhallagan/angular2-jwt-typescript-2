// base imports
import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

// custom imports
import {RegisterService} from './register.service';

@Component({
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  moduleId: module.id,
  selector: 'app-register',
  styleUrls: ['register.component.css'],
  templateUrl: 'register.component.html'
})

@Injectable()
export class RegisterComponent {
  private submitted: boolean = false;
  private registered: boolean = false;
  private registrationForm: FormGroup;
  private usernameField: AbstractControl;
  private passwordField: AbstractControl;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {
  this.registrationForm = fb.group({
      password: ['', Validators.required],
      username: ['', Validators.required]
    });

    this.usernameField = this.registrationForm.controls['username'];
    this.passwordField = this.registrationForm.controls['password'];
  }

  public onSubmit(form: any) {
    // debugger;
    this.registerService.regUser(form.username, form.password).subscribe((result) => {
      if (result) {
        this.registered = true;
        this.router.navigate(['home']);
      }
    });

    this.submitted = true;
  }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  // active = true;

  // newHero() {
  //   this.model = new RegisterModel(42, '', '');
  //   this.active = false;
  //   setTimeout(() => this.active = true, 0);
  // }
}
