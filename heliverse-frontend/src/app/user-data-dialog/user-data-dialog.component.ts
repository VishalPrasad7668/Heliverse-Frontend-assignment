import { Component, Inject } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-data-dialog',
  templateUrl: './user-data-dialog.component.html',
  styleUrls: ['./user-data-dialog.component.css']
})
export class UserDataDialogComponent {
  receivedData:any;
  
  constructor(public dialogRef:MatDialogRef<DashboardComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { 
    this.receivedData = data;
  }
}
