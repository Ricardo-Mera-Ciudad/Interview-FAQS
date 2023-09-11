import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../services/validators/email-validator.service';
import { ValidatorsService } from '../../services/validators/validators.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public myForm: FormGroup = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required], [this.emailValidator]],
  });


  get isEmailValid(): boolean {
    return this.myForm.get('email')?.valid as boolean;
  };

  isFieldValid(field: string) {
    return this.validatorsService.isFieldValid(this.myForm, field);
  };

  constructor(
    private fb: FormBuilder,
    private emailValidator: EmailValidator,
    private validatorsService: ValidatorsService,

  ) { };





}
