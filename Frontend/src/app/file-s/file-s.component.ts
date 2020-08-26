import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from '../Services/file.service';
import {saveAs} from 'file-saver';

const uri = 'http://localhost:3000/users/upload';
@Component({
    selector: 'app-file-s',
    templateUrl: './file-s.component.html',
    styleUrls: ['./file-s.component.css'],
    providers:[FileService]
})
export class FileSComponent implements OnInit{
  multipleFiles: any = [];
    uploader:FileUploader = new FileUploader({url:uri});

    attachmentList:any = [];

    constructor(private _fileService:FileService, private http : HttpClient){

        this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
            this.attachmentList.push((response));
        }
    }

    ngOnInit(): void {
      
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
      // form.reset();
  
      this.http
        .post<any>('http://127.0.0.1:3000/users/upload', formData)
        .subscribe(
          (res) => {
            console.log(res);
          },
          (err) => console.log(err)
        );
    }
  
  

    download(index){
        var filename = this.attachmentList[index].uploadname;

        this._fileService.downloadFile(filename)
        .subscribe(
            data => saveAs(data, filename),
            error => console.error(error)
        );
    }
}