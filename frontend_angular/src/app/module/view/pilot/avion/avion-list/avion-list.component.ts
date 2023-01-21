import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AvionService} from 'src/app/controller/service/avion.service';
import {Avion} from 'src/app/controller/model/avion.model';
import {AvionAddComponent} from '../avion-add/avion-add.component';
import {AvionEditComponent} from '../avion-edit/avion-edit.component';
import {AvionViewComponent} from '../avion-view/avion-view.component';
import {AvionSearchComponent} from '../avion-search/avion-search.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-avion-list',
  templateUrl: './avion-list.component.html',
  styleUrls: ['./avion-list.component.css']
})
export class AvionListComponent implements OnInit {

 selection = new SelectionModel<Avion>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private avionService: AvionService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.avionService.findAll().subscribe(
      data => this.avions = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.avionService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.avions = data.items;
        this.total = data.total;
      });
  }

  search() {
    const dialogRef = this.dialogModel.open(AvionSearchComponent, {
      width: '760px',
      disableClose: false,
    });
    this.searchModal = dialogRef.id;
  }
  edit(row) {
    this.selectedAvion = {...row};
    const dialogRef = this.dialogModel.open(AvionEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedAvion = new Avion();
    const dialogRef = this.dialogModel.open(AvionAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.avionService.delete(row.id).subscribe(data => {
      data == 1 ? this.avions = this.avions.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Avion Deleted Successfully',
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
    this.selectedAvion = row;
    const dialogRef = this.dialogModel.open(AvionViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.avionService.delete(item.id).subscribe( data=> {
        data == 1 ? this.avions = this.avions.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " avions Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Avion>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.avions.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.avions.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "codeAvion",
    "typeAvion",
    "modeleAvion",
    "nbPassagers",
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
    {name: 'codeAvion'},
    {name: 'typeAvion'},
    {name: 'modeleAvion'},
    {name: 'nbPassagers'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.avionService.addModal;
  }

  set addModal(value: string) {
    this.avionService.addModal = value;
  }
  
  get searchModal(): string {
    return this.avionService.searchModal;
  }

  set searchModal(value: string) {
    this.avionService.searchModal = value;
  }
  
  get editModal(): string {
    return this.avionService.editModal;
  }

  set editModal(value: string) {
    this.avionService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.avionService.viewModal;
  }

  set viewModal(value: string) {
    this.avionService.viewModal = value;
  }
  
  
  get avions(): Array<Avion> {
    return this.avionService.avions;
  }

  set avions(value: Array<Avion>) {
    this.avionService.avions = value;
  }

  get selectedAvion(): Avion {
    return this.avionService.selectedAvion;
  }

  set selectedAvion(value: Avion) {
    this.avionService.selectedAvion = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}