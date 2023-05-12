import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private homeService:HomeService){

  }

  displayedColumns: string[] = ['1', '2', '3','4','5','6','7','8','9','10','11','12','13','14'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>()

  contractRemarks:any = [];
  filterContractRemarks:any = [];


  ngOnInit(){

    this.getAllData()
    this.getAllRemarks()
  }

  getAllData(){
    this.homeService.getAllData().subscribe((result:any)=>{
      console.log(result)
      this.dataSource = new MatTableDataSource<any>(result)
    })
  }

  getAllRemarks(){
    this.homeService.getAllRemarks().subscribe((result:any) =>{
      console.log(result)

      this.contractRemarks = result;
    })
  }

  searchData(event:Event){

    const searchValue = (event.target as HTMLInputElement).value

    this.dataSource.filter=searchValue;

  }

  openRemarks(cdbID:any){
    this.filterContractRemarks = this.contractRemarks.filter((x:any) => x.cdb_id === cdbID)

  }

}
;