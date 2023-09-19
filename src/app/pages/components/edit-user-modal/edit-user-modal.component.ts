import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';
import { UsersService } from 'src/app/auth/services/users.service';


@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent {
  @Input() user?: UserData | null;
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(private usersService: UsersService) { }

  onSubmit() {
    this.usersService.updateUser(this.user)
    .subscribe((user) => {
      console.log(user);
      this.user = user;
      this.closeModal();
    });
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
}
