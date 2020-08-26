import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = [];
  friends = [];
  id;
  search;

  constructor(private AdminService: AdminService,private router: Router) { }

  ngOnInit(): void {
   
    this.AllUsers();
    this.Allfriends();
  }

  AllUsers(): any {
    this.AdminService.AllUsers().subscribe((data) => {
      this.users =data.users;
      // console.log(this.users);
    });
  }
  Allfriends(): any {
    this.AdminService.AllFriends().subscribe((data) => {
      this.friends = data.friendlist;
    });
}
  Addfriends(id): any {
    this.AdminService.AddFriend(id).subscribe();
    this.AllUsers();
    this.Allfriends();
}
home(){
  this.router.navigate(['/user']);
}

share(){
  this.router.navigate(['/share']);
}

}
