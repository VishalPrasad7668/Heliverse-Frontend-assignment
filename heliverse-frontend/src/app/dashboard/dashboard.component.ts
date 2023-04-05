import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../service/data.service';
import { UserDataDialogComponent } from '../user-data-dialog/user-data-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  userData:any
  page:any;

  searchText:any;
  
  constructor(private dataService:DataService,private dialog:MatDialog){}

  ngOnInit(): void {
    this.dataService.getDatas().subscribe(
      response => {
        console.log(response)
        this.userData = response;
      }
    )
  }

  openUserDetails(user:any){
    const dialogRef = this.dialog.open(UserDataDialogComponent,{
      width:'500px',
      data:{ 
        id : user.id,
        first_name : user.first_name,
        last_name : user.last_name,
        email : user.email,
        gender : user.gender,
        avatar : user.avatar,
        domain : user.domain,
        available : user.available

      }
    });
  }
}
