import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BilletService} from 'src/app/controller/service/billet.service';
import {Billet} from 'src/app/controller/model/billet.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-billet-view',
  templateUrl: './billet-view.component.html',
  styleUrls: ['./billet-view.component.css']
})
export class BilletViewComponent implements OnInit {


 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private billetService: BilletService)
 {
  }

 ngOnInit(): void {
   this.findById(this.selectedBillet.id);
 }


    
 findById(id: number) {
   this.billetService.findById(id).subscribe(
       data => this.selectedBillet = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/billet']).then();
  }


//                                         Getters & Setters

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
  
  
  get selectedBillet(): Billet {
    return this.billetService.selectedBillet;
  }

  set selectedBillet(value: Billet) {
    this.billetService.selectedBillet = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}