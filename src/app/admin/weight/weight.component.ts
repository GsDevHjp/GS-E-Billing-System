import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditWeightComponent } from '../add-edit-weight/add-edit-weight.component';

export interface PeriodicElement {
  weight_id: number;
  weight: number;
  weight_des: string;
  action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
  {weight_id: 1, weight: 10, weight_des: 'gold', action: 'bca'},
  {weight_id: 2, weight: 12, weight_des: 'pen', action: 'mca'},
  {weight_id: 3, weight: 13, weight_des: 'Rice', action: 'mba'},

];
@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  displayedColumns: string[] = ['weight_id', 'weight', 'weight_des', 'action' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog
  ){

  }
  ngOnInit(): void {
   
  }
  add_shop(){
   this.matdialog.open(AddEditWeightComponent) 
  }

  edit_weight(){
    this.matdialog.open(AddEditWeightComponent)
  }
 
}
