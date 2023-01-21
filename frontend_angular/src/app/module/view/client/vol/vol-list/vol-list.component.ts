import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {VolService} from 'src/app/controller/service/vol.service';
import {Vol} from 'src/app/controller/model/vol.model';
import {VolAddComponent} from '../vol-add/vol-add.component';
import {VolEditComponent} from '../vol-edit/vol-edit.component';
import {VolViewComponent} from '../vol-view/vol-view.component';
import {VolSearchComponent} from '../vol-search/vol-search.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-vol-list',
  templateUrl: './vol-list.component.html',
  styleUrls: ['./vol-list.component.css']
})
export class VolListComponent implements OnInit {

 selection = new SelectionModel<Vol>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private volService: VolService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.volService.findAll().subscribe(
      data => this.vols = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.volService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.vols = data.items;
        this.total = data.total;
      });
  }

  search() {
    const dialogRef = this.dialogModel.open(VolSearchComponent, {
      width: '760px',
      disableClose: false,
    });
    this.searchModal = dialogRef.id;
  }
  edit(row) {
    this.selectedVol = {...row};
    const dialogRef = this.dialogModel.open(VolEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedVol = new Vol();
    const dialogRef = this.dialogModel.open(VolAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.volService.delete(row.id).subscribe(data => {
      data == 1 ? this.vols = this.vols.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Vol Deleted Successfully',
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
    this.selectedVol = row;
    const dialogRef = this.dialogModel.open(VolViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.volService.delete(item.id).subscribe( data=> {
        data == 1 ? this.vols = this.vols.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " vols Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Vol>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.vols.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.vols.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "numVol",
    "villeDepart",
    "villeArrivee",
    "retard",
    "dateDepart",
    "dateArrivee",
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
    {name: 'numVol'},
    {name: 'villeDepart'},
    {name: 'villeArrivee'},
    {name: 'retard'},
    {name: 'dateDepart'},
    {name: 'dateArrivee'},
    {name: 'avion'},
    {name: 'pilote'},
    {name: 'compagnie'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.volService.addModal;
  }

  set addModal(value: string) {
    this.volService.addModal = value;
  }
  
  get searchModal(): string {
    return this.volService.searchModal;
  }

  set searchModal(value: string) {
    this.volService.searchModal = value;
  }
  
  get editModal(): string {
    return this.volService.editModal;
  }

  set editModal(value: string) {
    this.volService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.volService.viewModal;
  }

  set viewModal(value: string) {
    this.volService.viewModal = value;
  }
  
  
  get vols(): Array<Vol> {
    return this.volService.vols;
  }

  set vols(value: Array<Vol>) {
    this.volService.vols = value;
  }

  get selectedVol(): Vol {
    return this.volService.selectedVol;
  }

  set selectedVol(value: Vol) {
    this.volService.selectedVol = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}