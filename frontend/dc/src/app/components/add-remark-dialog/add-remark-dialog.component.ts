import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { HomeService } from '../home/home.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-remark-dialog',
  templateUrl: './add-remark-dialog.component.html',
  styleUrls: ['./add-remark-dialog.component.css']
})
export class AddRemarkDialogComponent {

  constructor(public dialogRef: MatDialogRef<HomeComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private homeService:HomeService,private snackBar: MatSnackBar){}

  ngOnInit(){}

  addNewRemarkConfirmed(db_id:any,project_id:any,form_data:any){
    this.homeService.addNewRemarkConfirmed(db_id,form_data.value).subscribe((result) =>{
      if(result){
        this.snackBar.open(`Remark for Contract: ${project_id} Added`,'Dismiss',{
          duration:3000
        });
        
        this.dialogRef.close();

      }else{
        this.snackBar.open(`Error`,'Dismiss',{
          duration:3000
        });
        this.dialogRef.close();

      }
    })
  }

}
