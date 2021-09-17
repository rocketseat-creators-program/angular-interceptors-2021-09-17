import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    firstname: new FormControl(''),
    age: new FormControl(''),
  });

  constructor(private auth: AuthService) { }

  register(event: Event) {
    event.preventDefault();

    const newUser: User = {...this.registerForm.value};
    this.auth.register(newUser).subscribe();
  }

}
