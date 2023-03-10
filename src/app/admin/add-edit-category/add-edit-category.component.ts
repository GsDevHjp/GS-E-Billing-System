import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  Category_Form: any;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Category_Form = this.fb.group({
      Category:['',Validators.required],
      Description:[],
        
    })
  }
  category_form(){
    this.Category_Form.reset()
  }
  
}