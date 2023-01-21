import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PiloteService} from 'src/app/controller/service/pilote.service';
import {Pilote} from 'src/app/controller/model/pilote.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-pilote-edit',
  templateUrl: './pilote-edit.component.html',
  styleUrls: ['./pilote-edit.component.css']
})
export class PiloteEditComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private piloteService: PiloteService)
 {
 }


 ngOnInit(): void {
 }


  edit() {
    this.piloteService.edit().subscribe(
      data => { 
        console.log(`data: ${data}`);
        this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Pilote) {
    let message = 'Pilote edited successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while editing pilote or Reference already exist';
      messageType = 'snackbar-danger';
    } else
    {
      this.pilotes = this.pilotes.filter(i => i.id != data.id);
      this.pilotes = [{...data}, ...this.pilotes];  
      this.close();
//    this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  private redirect() {
    this.router.navigate(['admin/pilote']).then();
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
    return this.piloteService.addModal;
  }

  set addModal(value: string) {
    this.piloteService.addModal = value;
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

}
