import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PassagerService} from 'src/app/controller/service/passager.service';
import {Passager} from 'src/app/controller/model/passager.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-passager-search',
  templateUrl: './passager-search.component.html',
  styleUrls: ['./passager-search.component.css']
})
export class PassagerSearchComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private passagerService: PassagerService)
 {
 }

 ngOnInit(): void {
 }


  search() {
    this.passagerService.filter().subscribe(
      data => {
         this.passagers = data.items;
         this.close();
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  close() {
      this.dialogModel.getDialogById(this.searchModal).close();
  }





//                                         Getters & Setters

  get searchModal(): string {
    return this.passagerService.searchModal;
  }

  set searchModal(value: string) {
    this.passagerService.searchModal = value;
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
