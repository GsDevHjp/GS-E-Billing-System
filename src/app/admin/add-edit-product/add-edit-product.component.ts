import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  ShopForm: any;
  ngOnInit(): void {
    this.ShopForm = this.FromBuilder.group({
    Shop_name: ['', Validators.required],
    Shop_photo: [''],
  
    })
    throw new Error('Method not implemented.');
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
}