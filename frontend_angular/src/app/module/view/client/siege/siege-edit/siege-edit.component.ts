import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SiegeService} from 'src/app/controller/service/siege.service';
import {Siege} from 'src/app/controller/model/siege.model';
import {AvionService} from 'src/app/controller/service/avion.service';
import {AvionAddComponent} from '../../avion/avion-add/avion-add.component';
import {Avion} from 'src/app/controller/model/avion.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-siege-edit',
  templateUrl: './siege-edit.component.html',
  styleUrls: ['./siege-edit.component.css']
})
export class SiegeEditComponent implements OnInit {

 constructor(private router: Router,
             private avionService: AvionService,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private siegeService: SiegeService)
 {
 }


 ngOnInit(): void {
    this.findAllAvions();
 }


  edit() {
    this.siegeService.edit().subscribe(
      data => { 
        console.log(`data: ${data}`);
        this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Siege) {
    let message = 'Siege edited successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while editing siege or Reference already exist';
      messageType = 'snackbar-danger';
    } else
    {
      this.sieges = this.sieges.filter(i => i.id != data.id);
      this.sieges = [{...data}, ...this.sieges];  
      this.close();
//    this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  private findAllAvions() {
    this.avionService.findAll().subscribe(
      data => { 
          this.avions = data;
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }


  private redirect() {
    this.router.navigate(['admin/siege']).then();
  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this.matSnackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
  newAvion()   {
    const dialogRef = this.dialogModel.open(AvionAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addAvionDialog = dialogRef.id;
  }



  
 close() {
      this.dialogModel.getDialogById(this.editModal).close();
   }

//                                         Getters & Setters

  get addAvionDialog(): string {
    return this.avionService.addModal;
  }

  set addAvionDialog(value: string) {
     this.avionService.addModal = value;
  }


  get avions(): Array<Avion> {
    return this.avionService.avions;
  }

  set avions(value: Array<Avion>) {
     this.avionService.avions = value;
  }

  get addModal(): string {
    return this.siegeService.addModal;
  }

  set addModal(value: string) {
    this.siegeService.addModal = value;
  }
  
  get editModal(): string {
    return this.siegeService.editModal;
  }

  set editModal(value: string) {
    this.siegeService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.siegeService.viewModal;
  }

  set viewModal(value: string) {
    this.siegeService.viewModal = value;
  }
  
  get sieges(): Array<Siege> {
    return this.siegeService.sieges;
  }

  set sieges(value: Array<Siege>) {
    this.siegeService.sieges = value;
  }

  get selectedSiege(): Siege {
    return this.siegeService.selectedSiege;
  }

  set selectedSiege(value: Siege) {
    this.siegeService.selectedSiege = value;
  }

}
