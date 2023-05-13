import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeService } from '../home/home.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteDialogService {

  constructor(private snackBar: MatSnackBar, private homeService:HomeService) { }

  deleteRemarkConfirmed(type:any, d_id:any, project_id:any){
    this.homeService.deleteRemarkConfirmed(d_id).subscribe((result) => {
      if(result){
        this.snackBar.open(`[Remark: ID ${d_id}] in [Contract: ${project_id}] Deleted`,'Dismiss',{
          duration: 5000
        });

      }
    })
  }


}
