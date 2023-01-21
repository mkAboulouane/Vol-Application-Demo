import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {VolService} from 'src/app/controller/service/vol.service';
import {Vol} from 'src/app/controller/model/vol.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-vol-view',
  templateUrl: './vol-view.component.html',
  styleUrls: ['./vol-view.component.css']
})
export class VolViewComponent implements OnInit {


 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private volService: VolService)
 {
  }

 ngOnInit(): void {
   this.findById(this.selectedVol.id);
 }


    
 findById(id: number) {
   this.volService.findById(id).subscribe(
       data => this.selectedVol = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/vol']).then();
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
  
  
  get selectedVol(): Vol {
    return this.volService.selectedVol;
  }

  set selectedVol(value: Vol) {
    this.volService.selectedVol = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}