import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { DeleteDialogService } from '../delete-dialog/delete-dialog.service';
import { HomeService } from '../home/home.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-remark-dialog',
  templateUrl: './delete-remark-dialog.component.html',
  styleUrls: ['./delete-remark-dialog.component.css']
})
export class DeleteRemarkDialogComponent {
  constructor(private snackBar: MatSnackBar,public dialogRef: MatDialogRef<HomeComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private homeService:HomeService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteConfirm(type:any,d_id:any,project_id:any){
   
      this.homeService.deleteRemarkConfirmed(d_id).subscribe((result) =>{
        if(result){
          this.snackBar.open(`[Remark: ID ${d_id}] in [Contract: ${project_id}] Deleted`,'Dismiss',{
            duration: 5000
          });

          this.onNoClick();
        }
      })
    
  }
}
