import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {VolService} from 'src/app/controller/service/vol.service';
import {Vol} from 'src/app/controller/model/vol.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-vol-add',
  templateUrl: './vol-add.component.html',
  styleUrls: ['./vol-add.component.css']
})
export class VolAddComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private volService: VolService)
 {
 }

 ngOnInit(): void {
   this.selectedVol = new Vol();
 }


  save() {
    this.volService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.vols = [{...data},...this.vols];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Vol) {
    let message = 'Vol created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating vol';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.vols = [{...data}, ...this.vols];
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
    return this.volService.addModal;
  }

  set addModal(value: string) {
    this.volService.addModal = value;
  }
  
  get viewModal(): string {
    return this.volService.viewModal;
  }

  set viewModal(value: string) {
    this.volService.viewModal = value;
  }
  
  get editModal(): string {
    return this.volService.editModal;
  }

  set editModal(value: string) {
    this.volService.editModal = value;
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

}
