import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BilletService} from 'src/app/controller/service/billet.service';
import {Billet} from 'src/app/controller/model/billet.model';
import {BilletAddComponent} from '../billet-add/billet-add.component';
import {BilletEditComponent} from '../billet-edit/billet-edit.component';
import {BilletViewComponent} from '../billet-view/billet-view.component';
import {BilletSearchComponent} from '../billet-search/billet-search.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-billet-list',
  templateUrl: './billet-list.component.html',
  styleUrls: ['./billet-list.component.css']
})
export class BilletListComponent implements OnInit {

 selection = new SelectionModel<Billet>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private billetService: BilletService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.billetService.findAll().subscribe(
      data => this.billets = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.billetService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.billets = data.items;
        this.total = data.total;
      });
  }

  search() {
    const dialogRef = this.dialogModel.open(BilletSearchComponent, {
      width: '760px',
      disableClose: false,
    });
    this.searchModal = dialogRef.id;
  }
  edit(row) {
    this.selectedBillet = {...row};
    const dialogRef = this.dialogModel.open(BilletEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedBillet = new Billet();
    const dialogRef = this.dialogModel.open(BilletAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.billetService.delete(row.id).subscribe(data => {
      data == 1 ? this.billets = this.billets.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Billet Deleted Successfully',
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
    this.selectedBillet = row;
    const dialogRef = this.dialogModel.open(BilletViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.billetService.delete(item.id).subscribe( data=> {
        data == 1 ? this.billets = this.billets.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " billets Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Billet>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.billets.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.billets.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "numBillet",
    "dateEmission",
    "datePaiment",
    "dateReservation",
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
    {name: 'numBillet'},
    {name: 'createdAt'},
    {name: 'dateEmission'},
    {name: 'datePaiment'},
    {name: 'dateReservation'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.billetService.addModal;
  }

  set addModal(value: string) {
    this.billetService.addModal = value;
  }
  
  get searchModal(): string {
    return this.billetService.searchModal;
  }

  set searchModal(value: string) {
    this.billetService.searchModal = value;
  }
  
  get editModal(): string {
    return this.billetService.editModal;
  }

  set editModal(value: string) {
    this.billetService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.billetService.viewModal;
  }

  set viewModal(value: string) {
    this.billetService.viewModal = value;
  }
  
  
  get billets(): Array<Billet> {
    return this.billetService.billets;
  }

  set billets(value: Array<Billet>) {
    this.billetService.billets = value;
  }

  get selectedBillet(): Billet {
    return this.billetService.selectedBillet;
  }

  set selectedBillet(value: Billet) {
    this.billetService.selectedBillet = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}