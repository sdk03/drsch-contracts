import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { HomeService } from '../home/home.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-contract-dialog',
  templateUrl: './update-contract-dialog.component.html',
  styleUrls: ['./update-contract-dialog.component.css']
})
export class UpdateContractDialogComponent {

  
  constructor(private snackBar: MatSnackBar,public dialogRef: MatDialogRef<HomeComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private homeService: HomeService){}

  ngOnInit(){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateRemark(remarks_id:any,form_data:any,project_id:any){
    console.log(form_data.value)
    let remarks_header = form_data.value.remarks_header;
    let remarks = form_data.value.remarks;


    this.homeService.updateRemarkConfirmed(remarks_id,remarks_header,remarks).subscribe((result) =>{

      if(result){
        console.log(result)
        this.snackBar.open(`[Remark: ID ${remarks_id}] in [Contract: ${project_id}] Updated`,'Dismiss',{
          duration: 5000
        });

        this.onNoClick();
      }

    })

  }
}
