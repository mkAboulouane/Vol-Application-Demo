import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PassagerService} from 'src/app/controller/service/passager.service';
import {Passager} from 'src/app/controller/model/passager.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-passager-add',
  templateUrl: './passager-add.component.html',
  styleUrls: ['./passager-add.component.css']
})
export class PassagerAddComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private passagerService: PassagerService)
 {
 }

 ngOnInit(): void {
   this.selectedPassager = new Passager();
 }


  save() {
    this.passagerService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.passagers = [{...data},...this.passagers];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Passager) {
    let message = 'Passager created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating passager';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.passagers = [{...data}, ...this.passagers];
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
    return this.passagerService.addModal;
  }

  set addModal(value: string) {
    this.passagerService.addModal = value;
  }
  
  get viewModal(): string {
    return this.passagerService.viewModal;
  }

  set viewModal(value: string) {
    this.passagerService.viewModal = value;
  }
  
  get editModal(): string {
    return this.passagerService.editModal;
  }

  set editModal(value: string) {
    this.passagerService.editModal = value;
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

}
