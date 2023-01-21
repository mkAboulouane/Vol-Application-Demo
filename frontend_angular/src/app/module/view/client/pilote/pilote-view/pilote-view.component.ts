import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PiloteService} from 'src/app/controller/service/pilote.service';
import {Pilote} from 'src/app/controller/model/pilote.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-pilote-view',
  templateUrl: './pilote-view.component.html',
  styleUrls: ['./pilote-view.component.css']
})
export class PiloteViewComponent implements OnInit {


 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private piloteService: PiloteService)
 {
  }

 ngOnInit(): void {
   this.findById(this.selectedPilote.id);
 }


    
 findById(id: number) {
   this.piloteService.findById(id).subscribe(
       data => this.selectedPilote = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/pilote']).then();
  }


//                                         Getters & Setters

  get addModal(): string {
    return this.piloteService.addModal;
  }

  set addModal(value: string) {
    this.piloteService.addModal = value;
  }
  

  get viewModal(): string {
    return this.piloteService.viewModal;
  }

  set viewModal(value: string) {
    this.piloteService.viewModal = value;
  }
  
  get editModal(): string {
    return this.piloteService.editModal;
  }

  set editModal(value: string) {
    this.piloteService.editModal = value;
  }
  
  
  get selectedPilote(): Pilote {
    return this.piloteService.selectedPilote;
  }

  set selectedPilote(value: Pilote) {
    this.piloteService.selectedPilote = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}