import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {

  usrSignup: FormGroup;
  successMessage: string;

  
  get uemail() {
    return this.usrSignup.get('uemail');
  }

  get upassword() {
    return this.usrSignup.get('upassword');
  }


  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private http : HttpClient ,private mylogin: LoginService) { }

  ngOnInit(): void {

      this.usrSignup= this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      image:['']
    });
  
  }
  

  onfileselect(event){
  console.log(event);
  this.usrSignup.value.image = event.target.file[0];
  
  }


 


Signup() {
    console.log(this.usrSignup.value);
    this.mylogin.userSignup(this.usrSignup.value)
      .subscribe(data => {
        if (data) {
          this.successMessage = "User Login Successfull"
        }
        else {
          this.successMessage = "Some Error"
        }
      })

    this.router.navigate(['/']);
    alert("You can Login now");
  }

  
}
