import { Component } from '@angular/core';
import { FileService } from '../../Services/file.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
  providers: [FileService]
})
export class ShareComponent {
  multipleFiles: any = [];
  filesList: any = [];
  sharedWithMe: any = [];
  upload = true;
  fileId = '';
  constructor(
    private http: HttpClient,private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchUploadedFiles();
  }

  selectFiles(event): any {
    if (event.target.files.length > 0) {
      this.multipleFiles = event.target.files;
    }
  }

  onSubmit(form): any {
    const formData = new FormData();
    for (const file of this.multipleFiles) {
      formData.append('files', file);
    }
    form.reset();

    this.http
      .post<any>('http://127.0.0.1:3000/users/upload', formData)
      .subscribe(
        (res) => {
          console.log(res);
          alert('Files uploaded successfully!!');
          this.fetchUploadedFiles();
        },
        (err) => console.log(err)
      );
  }

  fetchUploadedFiles(): any {
    this.http
      .get<any>('http://127.0.0.1:3000/users/getuploadedfile')
      .subscribe(
        (files) => {
          // console.log(files);
          this.filesList = files;
        },
        (err) => console.log(err)
      );
  }

  toggle(data: any): any {
    if (data === 'upload') {
      this.upload = true;
    } else {
      this.upload = false;
    }
  }

  home(){
    this.router.navigate(['/user']);
  }
  
  share(){
    this.router.navigate(['/share']);
  }
}