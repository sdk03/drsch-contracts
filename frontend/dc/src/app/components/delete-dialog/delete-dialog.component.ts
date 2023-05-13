import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { DeleteDialogService } from './delete-dialog.service';
import { HomeService } from '../home/home.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

  constructor(private snackBar: MatSnackBar,public dialogRef: MatDialogRef<HomeComponent>,@Inject(MAT_DIALOG_DATA) public data: any, public homeService:HomeService) {}
  

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteConfirm(d_id:any,project_id:any){
    this.homeService.deleteContract(d_id).subscribe((result) =>{
      if(result){
        this.snackBar.open(`[Contract: ${project_id}] Deleted`,'Dismiss',{
          duration: 5000
        });

        this.onNoClick();
      }
    })
  }

}
