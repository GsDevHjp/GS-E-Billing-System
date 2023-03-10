import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPartyComponent } from '../add-edit-party/add-edit-party.component';


export interface PeriodicElement {
  S_N_id: number;
  party_name: string;
  mob_no: number;
  party_add: string;
  email_id: string;
  party_contact: string;
  action: string;
  
}
const ELEMENT_DATA:PeriodicElement [] = [
{S_N_id: 1, party_name: 'Aakash', mob_no: 8877817816, party_add: 'hajipur', party_contact: 'munna', email_id: '@Aakashgmail.com', action: ''},
{S_N_id: 2, party_name: 'Raja', mob_no: 7876543277, party_add: 'hajipur', party_contact: 'munna', email_id: '@Rajagmail.com', action: ''},
{S_N_id: 3, party_name: 'Amit', mob_no: 986436454, party_add: 'hajipur', party_contact: 'munna', email_id: '@Amitgmail.com', action: ''},

];


@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  displayedColumns: string[] = ['S_N_id', 'party_name', 'mob_no', 'party_add', 'party_contact', 'email_id', 'action'];
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
   this.matdialog.open(AddEditPartyComponent) 
  }
  edit_party(){
    this.matdialog.open(AddEditPartyComponent)
  }
 
}
