import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PiloteService} from 'src/app/controller/service/pilote.service';
import {Pilote} from 'src/app/controller/model/pilote.model';
import {PiloteAddComponent} from '../pilote-add/pilote-add.component';
import {PiloteEditComponent} from '../pilote-edit/pilote-edit.component';
import {PiloteViewComponent} from '../pilote-view/pilote-view.component';
import {PiloteSearchComponent} from '../pilote-search/pilote-search.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-pilote-list',
  templateUrl: './pilote-list.component.html',
  styleUrls: ['./pilote-list.component.css']
})
export class PiloteListComponent implements OnInit {

 selection = new SelectionModel<Pilote>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private piloteService: PiloteService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.piloteService.findAll().subscribe(
      data => this.pilotes = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.piloteService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.pilotes = data.items;
        this.total = data.total;
      });
  }

  search() {
    const dialogRef = this.dialogModel.open(PiloteSearchComponent, {
      width: '760px',
      disableClose: false,
    });
    this.searchModal = dialogRef.id;
  }
  edit(row) {
    this.selectedPilote = {...row};
    const dialogRef = this.dialogModel.open(PiloteEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedPilote = new Pilote();
    const dialogRef = this.dialogModel.open(PiloteAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.piloteService.delete(row.id).subscribe(data => {
      data == 1 ? this.pilotes = this.pilotes.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Pilote Deleted Successfully',
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
    this.selectedPilote = row;
    const dialogRef = this.dialogModel.open(PiloteViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.piloteService.delete(item.id).subscribe( data=> {
        data == 1 ? this.pilotes = this.pilotes.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " pilotes Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Pilote>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.pilotes.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.pilotes.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "matricule",
    "nom",
    "prenom",
    "qualif",
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
    {name: 'matricule'},
    {name: 'nom'},
    {name: 'prenom'},
    {name: 'qualif'},
    {name: 'compagnie'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.piloteService.addModal;
  }

  set addModal(value: string) {
    this.piloteService.addModal = value;
  }
  
  get searchModal(): string {
    return this.piloteService.searchModal;
  }

  set searchModal(value: string) {
    this.piloteService.searchModal = value;
  }
  
  get editModal(): string {
    return this.piloteService.editModal;
  }

  set editModal(value: string) {
    this.piloteService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.piloteService.viewModal;
  }

  set viewModal(value: string) {
    this.piloteService.viewModal = value;
  }
  
  
  get pilotes(): Array<Pilote> {
    return this.piloteService.pilotes;
  }

  set pilotes(value: Array<Pilote>) {
    this.piloteService.pilotes = value;
  }

  get selectedPilote(): Pilote {
    return this.piloteService.selectedPilote;
  }

  set selectedPilote(value: Pilote) {
    this.piloteService.selectedPilote = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}