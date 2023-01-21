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
  selector: 'app-billet-search',
  templateUrl: './billet-search.component.html',
  styleUrls: ['./billet-search.component.css']
})
export class BilletSearchComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private billetService: BilletService)
 {
 }

 ngOnInit(): void {
 }


  search() {
    this.billetService.filter().subscribe(
      data => {
         this.billets = data.items;
         this.close();
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  close() {
      this.dialogModel.getDialogById(this.searchModal).close();
  }





//                                         Getters & Setters

  get searchModal(): string {
    return this.billetService.searchModal;
  }

  set searchModal(value: string) {
    this.billetService.searchModal = value;
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
