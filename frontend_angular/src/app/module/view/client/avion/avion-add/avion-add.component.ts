import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AvionService} from 'src/app/controller/service/avion.service';
import {Avion} from 'src/app/controller/model/avion.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-avion-add',
  templateUrl: './avion-add.component.html',
  styleUrls: ['./avion-add.component.css']
})
export class AvionAddComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private avionService: AvionService)
 {
 }

 ngOnInit(): void {
   this.selectedAvion = new Avion();
 }


  save() {
    this.avionService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.avions = [{...data},...this.avions];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Avion) {
    let message = 'Avion created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating avion';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.avions = [{...data}, ...this.avions];
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
    return this.avionService.addModal;
  }

  set addModal(value: string) {
    this.avionService.addModal = value;
  }
  
  get viewModal(): string {
    return this.avionService.viewModal;
  }

  set viewModal(value: string) {
    this.avionService.viewModal = value;
  }
  
  get editModal(): string {
    return this.avionService.editModal;
  }

  set editModal(value: string) {
    this.avionService.editModal = value;
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

}
