import { Component,ViewChild,ElementRef } from '@angular/core';
import { HomeService } from './home.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { AddRemarkDialogComponent } from '../add-remark-dialog/add-remark-dialog.component';
import { UpdateContractDialogComponent } from '../update-contract-dialog/update-contract-dialog.component';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import { DeleteRemarkDialogComponent } from '../delete-remark-dialog/delete-remark-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private snackBar: MatSnackBar,private homeService:HomeService, public dialog: MatDialog){

  }

  @ViewChild('dtDiv', {static:false}) el!: ElementRef

  displayedColumns: string[] = ['1', 'Edit','2', '3','4','5','6','7','8','9','10','11','12','13','14','Delete'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>()

  contracts:any = []

  contractRemarks:any = [];
  filterContractRemarks:any = [];
  addRemarkButton:any = false;

  currentContractSn:any = null
  currentContractEdit:any = null
  currentContractID:any = 'No Contract Selected'

  rowsFound:any

  tabIndex:any = 0;

  // EDIT VAR ---------

  edit_project_id:any 
  edit_project_name:any
  edit_first_party:any
  edit_second_party:any
  edit_project_location:any
  edit_template:any
  edit_type:any
  edit_scope:any
  edit_arn:any
  edit_agreement:any
  edit_contact:any
  edit_contact_ext:any
  edit_director:any

  // ---------------

  ngOnInit(){

    this.getAllData()
    this.getAllRemarks()
  }

  getAllData(){
    this.homeService.getAllData().subscribe((result:any)=>{
      console.log(result)
      this.dataSource = new MatTableDataSource<any>(result)
      this.contracts = result
      this.rowsFound = this.contracts.length
    })
  }

  getAllRemarks(){
   return new Promise<void>((resolve,reject)=>{
    this.homeService.getAllRemarks().subscribe((result:any) =>{

        if(result){
          console.log(result)

          this.contractRemarks = result;
          resolve();
        }
    })
   })
  }

  searchData(event:Event){

    const searchValue = (event.target as HTMLInputElement).value

    this.dataSource.filter=searchValue;
    
    this.rowsFound=this.dataSource.filteredData.length

  }

  openRemarks(cdbID:any,project_id:any){
    this.filterContractRemarks = this.contractRemarks.filter((x:any) => x.cdb_id === cdbID)
    this.currentContractSn = cdbID
    this.currentContractID = project_id
    this.addRemarkButton = true;
  }

  deleteRecord(type:any,d_id:any,project_id:any){
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width:'25%',
      data: { type: type, project_id: project_id, d_id:d_id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  deleteRemark(type:any,d_id:any,project_id:any,cdb_id:any){
    const dialogRef = this.dialog.open(DeleteRemarkDialogComponent, {
      width:'25%',
      data: { type: type, project_id: project_id, d_id:d_id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      this.getAllRemarks().then(() => {
        this.openRemarks(cdb_id, project_id);
      });
    });
  }



  addRemarkDialog(db_id:any,project_id:any){
    const dialogRef2 = this.dialog.open(AddRemarkDialogComponent, {
      width:'25%',
      data:{db_id:db_id,project_id:project_id}
    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      this.getAllRemarks().then(() => {
        this.openRemarks(db_id, project_id);
      });
    });
  }
  
  addNewContract(formData:any){
    console.log(formData.value)
    this.homeService.addNewContract(formData.value).subscribe((result) => {
      if(result){
        this.snackBar.open(`Contract Added`,'Dismiss',{
          duration: 5000
        });

        this.tabIndex = 0;
        this.ngOnInit();
      }
    })
  }

  editContractOpen(db_id:any){

    this.tabIndex = 2
    this.currentContractEdit = db_id;

    let singleEditContractArray = this.contracts.filter((x:any) => x.db_id === db_id)

    console.log(singleEditContractArray)

    this.edit_project_id = singleEditContractArray[0].project_id;
    this.edit_project_name = singleEditContractArray[0].project_name;
    this.edit_first_party = singleEditContractArray[0].first_party;
    this.edit_second_party = singleEditContractArray[0].second_party;
    this.edit_project_location = singleEditContractArray[0].project_location;
    this.edit_template = singleEditContractArray[0].template;
    this.edit_type = singleEditContractArray[0].type;
    this.edit_scope = singleEditContractArray[0].scope;
    this.edit_arn = singleEditContractArray[0].arn;
    this.edit_agreement = singleEditContractArray[0].agreement;
    this.edit_contact = singleEditContractArray[0].contact;
    this.edit_contact_ext = singleEditContractArray[0].contact_ext;
    this.edit_director = singleEditContractArray[0].director;
    



  }

  editContract(formData:any,project_id:any,db_id:any){
    this.homeService.updateContract(db_id,formData.value).subscribe((result) =>{
      if(result){
        this.snackBar.open(`[Contract: ${project_id}] Updated`,'Dismiss',{
          duration: 5000
        });

        this.tabIndex = 0;
        this.ngOnInit();
      }
    })
  }

  updateRemark(remarks_id:any,remarks_header:any,remarks:any,project_id:any,cdb_id:any){
    const dialogRef3 = this.dialog.open(UpdateContractDialogComponent, {
      width:'25%',
      data:{remarks_id:remarks_id,remarks_header:remarks_header,remarks:remarks,project_id:project_id}
    });

    dialogRef3.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getAllRemarks().then(() => {
        this.openRemarks(cdb_id, project_id);
      });
    });
  }

  exportPDF(){

    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
      year:  'numeric',
      month: 'long',
      day:   'numeric',
  });

    let pdf = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'a3',
      putOnlyUsedFonts:true
     });

     pdf.text(`DC Abu Dhabi Contracts Sheet - Generated On ${longEnUSFormatter.format(currentDate)}`,10,10)

     autoTable(pdf,{
      
      html:"#data-table",
      columns: 
         [
          {header: 'SN'},
          {header: 'ID'},
          {header: 'Project'},
          {header: '1st Party'},
          {header: '2nd Party'},
          {header: 'Location'},
          {header: 'Template'},
          {header: 'Type'},
          {header: 'Scope'},
          {header: 'ARN'},
          {header: 'Agreement'},
          {header: 'Contact'},
          {header: 'EXT.'},
          {header: 'Director'},

        ],
    
    })
     pdf.save(`dc-contracts-${timestamp}`);

  }

  getTableFocus(){
    alert('Hi')
  }
}
;