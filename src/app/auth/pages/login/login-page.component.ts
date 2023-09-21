import { Component, OnDestroy, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators/validators.service';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { PagesService } from '../../../pages/services/pages.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnDestroy {

  private fb = inject(FormBuilder);
  private validatorsService = inject(ValidatorsService);
  private usersService = inject(UsersService);
  private router = inject(Router);
  private pagesService = inject(PagesService);
  private unsubscribe$ = new Subject<void>();

  public myForm: FormGroup = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
  });


  get isEmailValid(): boolean {
    return this.myForm.get('email')?.valid as boolean;
  };


  isFieldValid(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  };


  chooseCategory(category: string): void {
    this.pagesService.setCategory(category)
  };


  onLogin(): void {
    this.usersService.login(this.myForm.value.email, this.myForm.value.password)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(user => {
        if (user) {
          this.router.navigate(['/']);
        } else {
          console.log('Error de autenticación');
        }
      });
  };


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };


}
