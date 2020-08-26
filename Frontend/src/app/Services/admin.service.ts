import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  Block(block, id): any {
    return this.http.put(`http://localhost:3000/admin/block/${id}`, block);
  }

  updateOnline(online, id): any {
    return this.http.put(`http://localhost:3000/admin/online/${id}`, online);
  }

  OnlineUsers(): any {
    return this.http.get(`http://localhost:3000/admin/online`);
  }
  AllUsers(): any {
    return this.http.get('http://localhost:3000/admin/allusers');
  }
  TotalUsers(): any {
    return this.http.get('http://localhost:3000/admin/totalusers');
  }
  AddFriend(id): any {
    return this.http.put(`http://localhost:3000/users/addfriend/${id}`, id);
  }

  AllFriends(): any {
    return this.http.get('http://localhost:3000/users/allfriends');
  }

// removeFromFriendList(id): any{
//     return this.http.delete(`${this.friendUrl}/removefriend/${id}`, id);
  
  
// }

}
