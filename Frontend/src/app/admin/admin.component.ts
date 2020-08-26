import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users = [];
  i=0;
  activeUsers;
  search;
  constructor(private router: Router , private AdminService: AdminService) {}

  ngOnInit(): void {
    this.AllUsers();
    this.OnlineUsers();
    // this.TotalUsers();
  }

  AllUsers(): any {
    this.AdminService.AllUsers().subscribe((data) => {
      this.users =data.users;
      // console.log(this.users);
    });
    
  }
  TotalUsers(): any {
    this.AdminService.AllUsers().subscribe((data) => {
      // console.log(data);
      // this.totalusers =data.total;
      // console.log(this.totalusers);
    });
    
  }

  toggleBlockedState(blockState, id): any {
    blockState = !blockState;
    this.AdminService.Block(blockState, id).subscribe(() =>{
      this.AllUsers();
    });
  }

  OnlineUsers(): any {
    this.AdminService.OnlineUsers().subscribe((data) => {
      // console.log(active);
      this.activeUsers = data.activeuser;
      // this.OnlineUsers();
      console.log(this.activeUsers)
    });
  }
  about(){
    this.router.navigate(['/aboutus']);
  }
  
  contact(){
    this.router.navigate(['/contactus']);
  }

  // onScroll() {
  //   console.log('scrolled!!');
  // }
 

// }
}