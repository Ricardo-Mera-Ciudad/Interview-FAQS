import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';
import { ValidatorsService } from '../../services/validators/validators.service';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private validatorsService = inject(ValidatorsService);
  private usersService = inject(UsersService);

  public user?: UserData;
  public currentUserId?: number;
  private unsubscribe$ = new Subject<void>();

  public userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  },
    {
      validator: [this.validatorsService.isConfirmedPassword('password', 'confirmPassword')]
    });


  get isEmailValid(): boolean {
    return this.userForm.get('email')?.valid as boolean;
  }

  get currentUser(): UserData {
    const user: UserData = { ...this.userForm.value, id: this.currentUserId };
    return user;
  }


  ngOnInit(): void {
    this.loadUser();
  }


  loadUser() {
    this.usersService.getUpdatedUserSubject()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((users) => {
        this.user = users;
        this.currentUserId = this.user?.id;
        this.userForm.patchValue(this.user);
      });
  }


  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.userForm, field);
  }


  getFieldMessageError(field: string): string | null {
    if (!this.userForm.controls[field]) return null;

    const errors = this.userForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido.';
        case 'emailTaken':
          return 'El email ya existe.';
      }
    }
    return null;
  }


  onSubmit(): void {
    this.userForm.markAllAsTouched();

    if (this.userForm.invalid) return;

    if (this.currentUser.id) {
      this.usersService.updateUser(this.currentUser)
        .pipe(
          takeUntil(this.unsubscribe$)
        )
        .subscribe((_) => {
          this.userForm.reset();
          this.currentUserId = undefined;
        });
      return;
    }

    this.usersService.addUser(this.currentUser)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((_) => {
        this.router.navigate(['/login']);
      });
    this.userForm.reset();
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
