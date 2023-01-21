import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AvionService} from 'src/app/controller/service/avion.service';
import {Avion} from 'src/app/controller/model/avion.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-avion-search',
  templateUrl: './avion-search.component.html',
  styleUrls: ['./avion-search.component.css']
})
export class AvionSearchComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private avionService: AvionService)
 {
 }

 ngOnInit(): void {
 }


  search() {
    this.avionService.filter().subscribe(
      data => {
         this.avions = data.items;
         this.close();
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  close() {
      this.dialogModel.getDialogById(this.searchModal).close();
  }





//                                         Getters & Setters

  get searchModal(): string {
    return this.avionService.searchModal;
  }

  set searchModal(value: string) {
    this.avionService.searchModal = value;
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
