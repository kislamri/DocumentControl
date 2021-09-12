import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-find-document',
  templateUrl: './find-document.component.html',
  styleUrls: ['./find-document.component.css']
})
export class FindDocumentComponent implements OnInit {

  filterBy = ''
  documentControlNo = ''
  department = ''
  notFound = true

  pageTitle: string = 'Find Document';
  listFilter : string = 'doc';

  documents: any[] = [
    {
      "filterby": "",
      "documentContronNo": "",
      "department" :""
    }
  ]

  constructor(private router:Router,
    private route: ActivatedRoute,
     private authService: AuthService,
     private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(){
    console.log('submitted', this.filterBy,
    this.documentControlNo, this.department);
    this.router.navigateByUrl('/filemanagement');
  }

  newdoc(){
    this.router.navigateByUrl('/addNewDoc')
  }

  cancel(){
    this.router.navigateByUrl('/home')
  }

  
}
