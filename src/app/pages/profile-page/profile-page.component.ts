import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{

  public userName!: string;

  //constructor(private auth: AngularFireAuth) {}

  ngOnInit() {
    // this.auth.authState.subscribe(user => {
    //   if (user) {
    //     this.userName = user.displayName;
    //   }
    // });
  }

}
