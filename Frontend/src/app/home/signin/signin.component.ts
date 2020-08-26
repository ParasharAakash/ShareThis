// // import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// // import { LoginService } from '../../Services/login.service';
// import {HttpClient} from '@angular/common/http';

// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
// })


// export class SigninComponent implements OnInit {

//   usrSignup: FormGroup;
//   successMessage: string;
//   data;
//   imagePath;
  
//   get uemail() {
//     return this.usrSignup.get('uemail');
//   }

//   get upassword() {
//     return this.usrSignup.get('upassword');
//   }


//   constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private http : HttpClient ,private mylogin: LoginService) { }

//   ngOnInit(): void {

//     this.usrSignup= this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required],
//       name: ['', Validators.required],
//       image:['']
//     });

//     this.data = new FormData();
//     this.data.append('name', this.usrSignup.value.name);
//     this.data.append('email', this.usrSignup.value.email);
//     this.data.append('password', this.usrSignup.value.password);
//     this.data.append('image', this.usrSignup.value.image);
//     console.log(this.data);  
//   }
  
//   // imageData(event){
//   //   console.log(event);
//   //   this.imagePath = ((event.elements.namedItem('profile')) as HTMLInputElement).files[0];;
    
//   //   }
  
 






  
// }
//////////////////////////////////

import { LoginService } from '../../Services/login.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userService: LoginService , private toast: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): any {
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const image = ((form.elements.namedItem('image')) as HTMLInputElement).files[0];
    // console.log(profile);
    const values = {
      name,
      email,
      password,
      image
    };

    console.log(values);

    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('image', image);
    console.log(data);

    this.userService.userSignup(data).subscribe(() => {
      // this.toast.success(
      //   'Verify your email to login',
      //   'User created successfully!!',
      //   {
      //     timeOut: 1500,
      //     progressBar: true,
      //     progressAnimation: 'increasing',
      //     positionClass: 'toast-top-right',
      //   }
      // );
      form.reset();
    });
  }



}