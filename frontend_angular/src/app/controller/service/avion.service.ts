import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Avion} from '../model/avion.model';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'avion/';
  }

  private _avions: Array<Avion>;
  private _selectedAvion: Avion;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';
  private _searchModal = '';


  findAll() {
    return this.http.get<Array<Avion>>(this.API);
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
    return this.http.post<any>(this.API + 'filter' + `?page=${page}${params}`, {...this.selectedAvion})
  }


  save(): Observable<Avion> {
    return this.http.post<Avion>(this.API, {...this.selectedAvion});
  }

  edit(): Observable<Avion> {
    return this.http.put<Avion>(this.API, this.selectedAvion);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Avion> {
    return this.http.get<Avion>(this.API + id + '/');
  }

  findByCriteria(avion: Avion): Observable<Array<Avion>>{
    return this.http.post<Array<Avion>>(this.API + 'search/', avion);
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
  
  get avions(): Array<Avion> {
    if (this._avions == null) {
      this._avions = new Array<Avion>();
    }
    return this._avions;
  }

  set avions(value: Array<Avion>) {
    this._avions = value;
  }

  get selectedAvion(): Avion {
    if (this._selectedAvion == null) {
      this._selectedAvion = new Avion();
    }
    return this._selectedAvion;
  }

  set selectedAvion(value: Avion) {
    this._selectedAvion = value;
  }


}