// base imports
import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

// custom imports
import {AuthService} from '../auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

@Injectable()
export class LoginComponent {
  private submitted: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  public onSubmit(form: any) {
    this.authService.login(form.username, form.password).subscribe((result) => {
      if (result) {
        this.router.navigate(['home']);
      }
    });

    this.submitted = true;
  }
}
