import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Passager} from '../model/passager.model';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'passager/';
  }

  private _passagers: Array<Passager>;
  private _selectedPassager: Passager;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';
  private _searchModal = '';


  findAll() {
    return this.http.get<Array<Passager>>(this.API);
  }

  // Pagination size=25 (default)
  getPage(page?: number, size=25) {
    let params = '';
    if (page) page++;
    else page = 1;
    if (size) params = `&size=${size}`;
    return this.http.get<any>(this.API + `page?page=${page}${params}`)
  }

  filter(page?: number, size=25) {
    let params = '';
    if (page) page++;
    else page = 1;
    if (size) params = `&size=${size}`;
    return this.http.post<any>(this.API + 'filter' + `?page=${page}${params}`, {...this.selectedPassager})
  }


  save(): Observable<Passager> {
    return this.http.post<Passager>(this.API, {...this.selectedPassager});
  }

  edit(): Observable<Passager> {
    return this.http.put<Passager>(this.API, this.selectedPassager);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Passager> {
    return this.http.get<Passager>(this.API + id + '/');
  }

  findByCriteria(passager: Passager): Observable<Array<Passager>>{
    return this.http.post<Array<Passager>>(this.API + 'search/', passager);
  }



//                      Getters & Setters 

  get addModal(): string {
    return this._addModal;
  }

  set addModal(value: string) {
    this._addModal = value;
  }
  
  get editModal(): string {
    return this._editModal;
  }

  set editModal(value: string) {
    this._editModal = value;
  }
  
  
  get viewModal(): string {
    return this._viewModal;
  }

  set viewModal(value: string) {
    this._viewModal = value;
  }
  
  get searchModal(): string {
    return this._searchModal;
  }

  set searchModal(value: string) {
    this._searchModal = value;
  }
  
  get passagers(): Array<Passager> {
    if (this._passagers == null) {
      this._passagers = new Array<Passager>();
    }
    return this._passagers;
  }

  set passagers(value: Array<Passager>) {
    this._passagers = value;
  }

  get selectedPassager(): Passager {
    if (this._selectedPassager == null) {
      this._selectedPassager = new Passager();
    }
    return this._selectedPassager;
  }

  set selectedPassager(value: Passager) {
    this._selectedPassager = value;
  }


}