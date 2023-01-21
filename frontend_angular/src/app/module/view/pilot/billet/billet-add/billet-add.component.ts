import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BilletService} from 'src/app/controller/service/billet.service';
import {Billet} from 'src/app/controller/model/billet.model';
import {PassagerService} from 'src/app/controller/service/passager.service';
import {PassagerAddComponent} from '../../passager/passager-add/passager-add.component';
import {Passager} from 'src/app/controller/model/passager.model';
import {SiegeService} from 'src/app/controller/service/siege.service';
import {SiegeAddComponent} from '../../siege/siege-add/siege-add.component';
import {Siege} from 'src/app/controller/model/siege.model';
import {VolService} from 'src/app/controller/service/vol.service';
import {VolAddComponent} from '../../vol/vol-add/vol-add.component';
import {Vol} from 'src/app/controller/model/vol.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-billet-add',
  templateUrl: './billet-add.component.html',
  styleUrls: ['./billet-add.component.css']
})
export class BilletAddComponent implements OnInit {

 constructor(private router: Router,
             private passagerService: PassagerService,
             private siegeService: SiegeService,
             private volService: VolService,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private billetService: BilletService)
 {
 }

 ngOnInit(): void {
    this.findAllPassagers();
    this.findAllSieges();
    this.findAllVols();
   this.selectedBillet = new Billet();
 }


  save() {
    this.billetService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.billets = [{...data},...this.billets];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Billet) {
    let message = 'Billet created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating billet';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.billets = [{...data}, ...this.billets];
//      this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  private findAllPassagers() {
    this.passagerService.findAll().subscribe(
      data => { 
          this.passagers = data;
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }


  private findAllSieges() {
    this.siegeService.findAll().subscribe(
      data => { 
          this.sieges = data;
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }


  private findAllVols() {
    this.volService.findAll().subscribe(
      data => { 
          this.vols = data;
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }


  showNotification(colorName, text, placementFrom, placementAlign) {
    this.matSnackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }


  newPassager()   {
    const dialogRef = this.dialogModel.open(PassagerAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addPassagerDialog = dialogRef.id;
  }


  newSiege()   {
    const dialogRef = this.dialogModel.open(SiegeAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addSiegeDialog = dialogRef.id;
  }


  newVol()   {
    const dialogRef = this.dialogModel.open(VolAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addVolDialog = dialogRef.id;
  }


  close() {
      this.dialogModel.getDialogById(this.addModal).close();
  }





//                                         Getters & Setters


  get addPassagerDialog(): string {
    return this.passagerService.addModal;
  }

  set addPassagerDialog(value: string) {
     this.passagerService.addModal = value;
  }


  get passagers(): Array<Passager> {
    return this.passagerService.passagers;
  }

  set passagers(value: Array<Passager>) {
     this.passagerService.passagers = value;
  }


  get addSiegeDialog(): string {
    return this.siegeService.addModal;
  }

  set addSiegeDialog(value: string) {
     this.siegeService.addModal = value;
  }


  get sieges(): Array<Siege> {
    return this.siegeService.sieges;
  }

  set sieges(value: Array<Siege>) {
     this.siegeService.sieges = value;
  }


  get addVolDialog(): string {
    return this.volService.addModal;
  }

  set addVolDialog(value: string) {
     this.volService.addModal = value;
  }


  get vols(): Array<Vol> {
    return this.volService.vols;
  }

  set vols(value: Array<Vol>) {
     this.volService.vols = value;
  }

  get addModal(): string {
    return this.billetService.addModal;
  }

  set addModal(value: string) {
    this.billetService.addModal = value;
  }
  
  get viewModal(): string {
    return this.billetService.viewModal;
  }

  set viewModal(value: string) {
    this.billetService.viewModal = value;
  }
  
  get editModal(): string {
    return this.billetService.editModal;
  }

  set editModal(value: string) {
    this.billetService.editModal = value;
  }
  
  get billets(): Array<Billet> {
    return this.billetService.billets;
  }

  set billets(value: Array<Billet>) {
    this.billetService.billets = value;
  }

  get selectedBillet(): Billet {
    return this.billetService.selectedBillet;
  }

  set selectedBillet(value: Billet) {
    this.billetService.selectedBillet = value;
  }

}
