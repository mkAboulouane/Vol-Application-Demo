import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {VolService} from 'src/app/controller/service/vol.service';
import {Vol} from 'src/app/controller/model/vol.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-vol-search',
  templateUrl: './vol-search.component.html',
  styleUrls: ['./vol-search.component.css']
})
export class VolSearchComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private volService: VolService)
 {
 }

 ngOnInit(): void {
 }


  search() {
    this.volService.filter().subscribe(
      data => {
         this.vols = data.items;
         this.close();
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  close() {
      this.dialogModel.getDialogById(this.searchModal).close();
  }





//                                         Getters & Setters

  get searchModal(): string {
    return this.volService.searchModal;
  }

  set searchModal(value: string) {
    this.volService.searchModal = value;
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
