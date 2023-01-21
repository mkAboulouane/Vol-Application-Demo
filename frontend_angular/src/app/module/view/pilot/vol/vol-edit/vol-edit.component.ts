import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {VolService} from 'src/app/controller/service/vol.service';
import {Vol} from 'src/app/controller/model/vol.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-vol-edit',
  templateUrl: './vol-edit.component.html',
  styleUrls: ['./vol-edit.component.css']
})
export class VolEditComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private volService: VolService)
 {
 }


 ngOnInit(): void {
 }


  edit() {
    this.volService.edit().subscribe(
      data => { 
        console.log(`data: ${data}`);
        this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Vol) {
    let message = 'Vol edited successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while editing vol or Reference already exist';
      messageType = 'snackbar-danger';
    } else
    {
      this.vols = this.vols.filter(i => i.id != data.id);
      this.vols = [{...data}, ...this.vols];  
      this.close();
//    this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  private redirect() {
    this.router.navigate(['admin/vol']).then();
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
      this.dialogModel.getDialogById(this.editModal).close();
   }

//                                         Getters & Setters
  get addModal(): string {
    return this.volService.addModal;
  }

  set addModal(value: string) {
    this.volService.addModal = value;
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

}
