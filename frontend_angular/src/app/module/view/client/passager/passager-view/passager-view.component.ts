import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PassagerService} from 'src/app/controller/service/passager.service';
import {Passager} from 'src/app/controller/model/passager.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-passager-view',
  templateUrl: './passager-view.component.html',
  styleUrls: ['./passager-view.component.css']
})
export class PassagerViewComponent implements OnInit {


 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private passagerService: PassagerService)
 {
  }

 ngOnInit(): void {
   this.findById(this.selectedPassager.id);
 }


    
 findById(id: number) {
   this.passagerService.findById(id).subscribe(
       data => this.selectedPassager = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/passager']).then();
  }


//                                         Getters & Setters

  get addModal(): string {
    return this.passagerService.addModal;
  }

  set addModal(value: string) {
    this.passagerService.addModal = value;
  }
  

  get viewModal(): string {
    return this.passagerService.viewModal;
  }

  set viewModal(value: string) {
    this.passagerService.viewModal = value;
  }
  
  get editModal(): string {
    return this.passagerService.editModal;
  }

  set editModal(value: string) {
    this.passagerService.editModal = value;
  }
  
  
  get selectedPassager(): Passager {
    return this.passagerService.selectedPassager;
  }

  set selectedPassager(value: Passager) {
    this.passagerService.selectedPassager = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}