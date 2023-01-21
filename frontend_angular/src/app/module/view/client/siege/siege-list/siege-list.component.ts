import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SiegeService} from 'src/app/controller/service/siege.service';
import {Siege} from 'src/app/controller/model/siege.model';
import {SiegeAddComponent} from '../siege-add/siege-add.component';
import {SiegeEditComponent} from '../siege-edit/siege-edit.component';
import {SiegeViewComponent} from '../siege-view/siege-view.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-siege-list',
  templateUrl: './siege-list.component.html',
  styleUrls: ['./siege-list.component.css']
})
export class SiegeListComponent implements OnInit {

 selection = new SelectionModel<Siege>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private siegeService: SiegeService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.siegeService.findAll().subscribe(
      data => this.sieges = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.siegeService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.sieges = data.items;
        this.total = data.total;
      });
  }

  edit(row) {
    this.selectedSiege = {...row};
    const dialogRef = this.dialogModel.open(SiegeEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedSiege = new Siege();
    const dialogRef = this.dialogModel.open(SiegeAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.siegeService.delete(row.id).subscribe(data => {
      data == 1 ? this.sieges = this.sieges.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Siege Deleted Successfully',
      'top',
      'right'
    );
    });
  }


  trackByFn(index, item)  {
    return index;
   }

  confirmDelete(row) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.delete(row);
      }
    });
  }



  view(row) {
    this.selectedSiege = row;
    const dialogRef = this.dialogModel.open(SiegeViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.siegeService.delete(item.id).subscribe( data=> {
        data == 1 ? this.sieges = this.sieges.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " sieges Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Siege>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.sieges.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.sieges.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "numAllee",
    "numRang",
    "classe",
    "actions",
  ];


  showNotification(colorName, text, placementFrom, placementAlign) {
    this.matSnackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  filterDatatable(event) {
    // const val = event.target.value.toLowerCase();
    // const colsAmt = this.columns.length;
    // const keys = Object.keys(this.filteredData[0]);
    // this.data = this.filteredData.filter( 
    //   function (item) {
    //   for (let i = 0; i < colsAmt; i++) {
    //     if (
    //       item[keys[i]].tostring().toLowerCase().indexOf(val) !== -1 ||
    //       !val
    //     ) {
    //       return true;
    //     }
    //   }
    // });  }
}  
columns = [
    {name: 'id'},
    {name: 'numAllee'},
    {name: 'numRang'},
    {name: 'classe'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.siegeService.addModal;
  }

  set addModal(value: string) {
    this.siegeService.addModal = value;
  }
  
  get editModal(): string {
    return this.siegeService.editModal;
  }

  set editModal(value: string) {
    this.siegeService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.siegeService.viewModal;
  }

  set viewModal(value: string) {
    this.siegeService.viewModal = value;
  }
  
  
  get sieges(): Array<Siege> {
    return this.siegeService.sieges;
  }

  set sieges(value: Array<Siege>) {
    this.siegeService.sieges = value;
  }

  get selectedSiege(): Siege {
    return this.siegeService.selectedSiege;
  }

  set selectedSiege(value: Siege) {
    this.siegeService.selectedSiege = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}