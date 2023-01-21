import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AvionService} from 'src/app/controller/service/avion.service';
import {Avion} from 'src/app/controller/model/avion.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-avion-view',
  templateUrl: './avion-view.component.html',
  styleUrls: ['./avion-view.component.css']
})
export class AvionViewComponent implements OnInit {


 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private avionService: AvionService)
 {
  }

 ngOnInit(): void {
   this.findById(this.selectedAvion.id);
 }


    
 findById(id: number) {
   this.avionService.findById(id).subscribe(
       data => this.selectedAvion = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/avion']).then();
  }


//                                         Getters & Setters

  get addModal(): string {
    return this.avionService.addModal;
  }

  set addModal(value: string) {
    this.avionService.addModal = value;
  }
  

  get viewModal(): string {
    return this.avionService.viewModal;
  }

  set viewModal(value: string) {
    this.avionService.viewModal = value;
  }
  
  get editModal(): string {
    return this.avionService.editModal;
  }

  set editModal(value: string) {
    this.avionService.editModal = value;
  }
  
  
  get selectedAvion(): Avion {
    return this.avionService.selectedAvion;
  }

  set selectedAvion(value: Avion) {
    this.avionService.selectedAvion = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}