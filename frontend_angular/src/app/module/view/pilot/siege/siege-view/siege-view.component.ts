import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SiegeService} from 'src/app/controller/service/siege.service';
import {Siege} from 'src/app/controller/model/siege.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-siege-view',
  templateUrl: './siege-view.component.html',
  styleUrls: ['./siege-view.component.css']
})
export class SiegeViewComponent implements OnInit {


 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private siegeService: SiegeService)
 {
  }

 ngOnInit(): void {
   this.findById(this.selectedSiege.id);
 }


    
 findById(id: number) {
   this.siegeService.findById(id).subscribe(
       data => this.selectedSiege = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/siege']).then();
  }


//                                         Getters & Setters

  get addModal(): string {
    return this.siegeService.addModal;
  }

  set addModal(value: string) {
    this.siegeService.addModal = value;
  }
  

  get viewModal(): string {
    return this.siegeService.viewModal;
  }

  set viewModal(value: string) {
    this.siegeService.viewModal = value;
  }
  
  get editModal(): string {
    return this.siegeService.editModal;
  }

  set editModal(value: string) {
    this.siegeService.editModal = value;
  }
  
  
  get selectedSiege(): Siege {
    return this.siegeService.selectedSiege;
  }

  set selectedSiege(value: Siege) {
    this.siegeService.selectedSiege = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}