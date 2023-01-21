import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CompagnieService} from 'src/app/controller/service/compagnie.service';
import {Compagnie} from 'src/app/controller/model/compagnie.model';
import {CompagnieAddComponent} from '../compagnie-add/compagnie-add.component';
import {CompagnieEditComponent} from '../compagnie-edit/compagnie-edit.component';
import {CompagnieViewComponent} from '../compagnie-view/compagnie-view.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-compagnie-list',
  templateUrl: './compagnie-list.component.html',
  styleUrls: ['./compagnie-list.component.css']
})
export class CompagnieListComponent implements OnInit {

 selection = new SelectionModel<Compagnie>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private compagnieService: CompagnieService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.compagnieService.findAll().subscribe(
      data => this.compagnies = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.compagnieService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.compagnies = data.items;
        this.total = data.total;
      });
  }

  edit(row) {
    this.selectedCompagnie = {...row};
    const dialogRef = this.dialogModel.open(CompagnieEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedCompagnie = new Compagnie();
    const dialogRef = this.dialogModel.open(CompagnieAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.compagnieService.delete(row.id).subscribe(data => {
      data == 1 ? this.compagnies = this.compagnies.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Compagnie Deleted Successfully',
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
    this.selectedCompagnie = row;
    const dialogRef = this.dialogModel.open(CompagnieViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.compagnieService.delete(item.id).subscribe( data=> {
        data == 1 ? this.compagnies = this.compagnies.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " compagnies Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Compagnie>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.compagnies.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.compagnies.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "code",
    "nom",
    "siegeSocial",
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
    {name: 'code'},
    {name: 'nom'},
    {name: 'siegeSocial'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.compagnieService.addModal;
  }

  set addModal(value: string) {
    this.compagnieService.addModal = value;
  }
  
  get editModal(): string {
    return this.compagnieService.editModal;
  }

  set editModal(value: string) {
    this.compagnieService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.compagnieService.viewModal;
  }

  set viewModal(value: string) {
    this.compagnieService.viewModal = value;
  }
  
  
  get compagnies(): Array<Compagnie> {
    return this.compagnieService.compagnies;
  }

  set compagnies(value: Array<Compagnie>) {
    this.compagnieService.compagnies = value;
  }

  get selectedCompagnie(): Compagnie {
    return this.compagnieService.selectedCompagnie;
  }

  set selectedCompagnie(value: Compagnie) {
    this.compagnieService.selectedCompagnie = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}