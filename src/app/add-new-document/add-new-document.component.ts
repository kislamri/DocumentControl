import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-new-document',
  templateUrl: './add-new-document.component.html',
  styleUrls: ['./add-new-document.component.css']
})
export class AddNewDocumentComponent implements OnInit {

  
  documentControlNo = ''
  department = ''
  createdBy = ''
  checkedBy = ''
  approvedBy = ''
  notFound = true

  pageTitle: string = 'Find Document';
  listFilter : string = 'doc';

  

  constructor(private router:Router,
    private route: ActivatedRoute,
     private authService: AuthService,
     private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(){
    console.log('submitted', this.createdBy,
    this.documentControlNo, this.department,
    this.checkedBy, this.approvedBy);
    this.router.navigateByUrl('/addNewDoc');
  }
cancel(){
  this.router.navigateByUrl('/home')
}
  
}