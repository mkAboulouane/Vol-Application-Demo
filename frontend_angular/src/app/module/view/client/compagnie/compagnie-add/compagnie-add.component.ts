import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CompagnieService} from 'src/app/controller/service/compagnie.service';
import {Compagnie} from 'src/app/controller/model/compagnie.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-compagnie-add',
  templateUrl: './compagnie-add.component.html',
  styleUrls: ['./compagnie-add.component.css']
})
export class CompagnieAddComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private compagnieService: CompagnieService)
 {
 }

 ngOnInit(): void {
   this.selectedCompagnie = new Compagnie();
 }


  save() {
    this.compagnieService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.compagnies = [{...data},...this.compagnies];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Compagnie) {
    let message = 'Compagnie created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating compagnie';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.compagnies = [{...data}, ...this.compagnies];
//      this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this.matSnackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }


  close() {
      this.dialogModel.getDialogById(this.addModal).close();
  }





//                                         Getters & Setters

  get addModal(): string {
    return this.compagnieService.addModal;
  }

  set addModal(value: string) {
    this.compagnieService.addModal = value;
  }
  
  get viewModal(): string {
    return this.compagnieService.viewModal;
  }

  set viewModal(value: string) {
    this.compagnieService.viewModal = value;
  }
  
  get editModal(): string {
    return this.compagnieService.editModal;
  }

  set editModal(value: string) {
    this.compagnieService.editModal = value;
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

}
