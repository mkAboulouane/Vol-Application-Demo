import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PiloteService} from 'src/app/controller/service/pilote.service';
import {Pilote} from 'src/app/controller/model/pilote.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-pilote-search',
  templateUrl: './pilote-search.component.html',
  styleUrls: ['./pilote-search.component.css']
})
export class PiloteSearchComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private piloteService: PiloteService)
 {
 }

 ngOnInit(): void {
 }


  search() {
    this.piloteService.filter().subscribe(
      data => {
         this.pilotes = data.items;
         this.close();
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  close() {
      this.dialogModel.getDialogById(this.searchModal).close();
  }





//                                         Getters & Setters

  get searchModal(): string {
    return this.piloteService.searchModal;
  }

  set searchModal(value: string) {
    this.piloteService.searchModal = value;
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
