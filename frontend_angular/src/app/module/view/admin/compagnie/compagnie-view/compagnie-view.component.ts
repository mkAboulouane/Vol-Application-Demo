import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CompagnieService} from 'src/app/controller/service/compagnie.service';
import {Compagnie} from 'src/app/controller/model/compagnie.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-compagnie-view',
  templateUrl: './compagnie-view.component.html',
  styleUrls: ['./compagnie-view.component.css']
})
export class CompagnieViewComponent implements OnInit {


 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private compagnieService: CompagnieService)
 {
  }

 ngOnInit(): void {
   this.findById(this.selectedCompagnie.id);
 }


    
 findById(id: number) {
   this.compagnieService.findById(id).subscribe(
       data => this.selectedCompagnie = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/compagnie']).then();
  }


//                                         Getters & Setters

  get addModal(): string {
    return this.compagnieService.addModal;
  }

  set addModal(value: string) {
    this.compagnieService.addModal = value;
  }
  

  get viewModal(): string {
    return this.compagnieService.viewModal;
  }

  set viewModal(value: string) {
    this.compagnieService.viewModal = value;
  }
  
  get editModal(): string {
    return this.compagnieService.editModal;
  }

  set editModal(value: string) {
    this.compagnieService.editModal = value;
  }
  
  
  get selectedCompagnie(): Compagnie {
    return this.compagnieService.selectedCompagnie;
  }

  set selectedCompagnie(value: Compagnie) {
    this.compagnieService.selectedCompagnie = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}