import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators/validators.service';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public myForm: FormGroup = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
  });


  get isEmailValid(): boolean {
    return this.myForm.get('email')?.valid as boolean;
  };

  isFieldValid(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  };

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private usersService: UsersService,
    private router: Router

  ) { };



  onLogin():void {
    this.usersService.login(this.myForm.value.email, this.myForm.value.password)
    .subscribe(user => {
      if (user) {
        // Login exitoso, redirige a la página de inicio o a donde sea necesario.
        console.log(user)
        this.router.navigate(['/']);
      } else {
        // Manejar error de autenticación, por ejemplo, mostrar un mensaje de error.
        console.log('Error de autenticación');
      }
    });
  }



}
