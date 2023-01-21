import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PassagerService} from 'src/app/controller/service/passager.service';
import {Passager} from 'src/app/controller/model/passager.model';
import {PassagerAddComponent} from '../passager-add/passager-add.component';
import {PassagerEditComponent} from '../passager-edit/passager-edit.component';
import {PassagerViewComponent} from '../passager-view/passager-view.component';
import {PassagerSearchComponent} from '../passager-search/passager-search.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-passager-list',
  templateUrl: './passager-list.component.html',
  styleUrls: ['./passager-list.component.css']
})
export class PassagerListComponent implements OnInit {

 selection = new SelectionModel<Passager>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private passagerService: PassagerService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.passagerService.findAll().subscribe(
      data => this.passagers = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.passagerService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.passagers = data.items;
        this.total = data.total;
      });
  }

  search() {
    const dialogRef = this.dialogModel.open(PassagerSearchComponent, {
      width: '760px',
      disableClose: false,
    });
    this.searchModal = dialogRef.id;
  }
  edit(row) {
    this.selectedPassager = {...row};
    const dialogRef = this.dialogModel.open(PassagerEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedPassager = new Passager();
    const dialogRef = this.dialogModel.open(PassagerAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.passagerService.delete(row.id).subscribe(data => {
      data == 1 ? this.passagers = this.passagers.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Passager Deleted Successfully',
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
    this.selectedPassager = row;
    const dialogRef = this.dialogModel.open(PassagerViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.passagerService.delete(item.id).subscribe( data=> {
        data == 1 ? this.passagers = this.passagers.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " passagers Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Passager>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.passagers.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.passagers.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "nom",
    "cin",
    "prenom",
    "telephone",
    "status",
    "dateNaissance",
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
    {name: 'nom'},
    {name: 'cin'},
    {name: 'prenom'},
    {name: 'telephone'},
    {name: 'status'},
    {name: 'dateNaissance'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.passagerService.addModal;
  }

  set addModal(value: string) {
    this.passagerService.addModal = value;
  }
  
  get searchModal(): string {
    return this.passagerService.searchModal;
  }

  set searchModal(value: string) {
    this.passagerService.searchModal = value;
  }
  
  get editModal(): string {
    return this.passagerService.editModal;
  }

  set editModal(value: string) {
    this.passagerService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.passagerService.viewModal;
  }

  set viewModal(value: string) {
    this.passagerService.viewModal = value;
  }
  
  
  get passagers(): Array<Passager> {
    return this.passagerService.passagers;
  }

  set passagers(value: Array<Passager>) {
    this.passagerService.passagers = value;
  }

  get selectedPassager(): Passager {
    return this.passagerService.selectedPassager;
  }

  set selectedPassager(value: Passager) {
    this.passagerService.selectedPassager = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}