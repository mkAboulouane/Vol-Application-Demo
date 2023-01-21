import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Billet} from '../model/billet.model';

@Injectable({
  providedIn: 'root'
})
export class BilletService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'billet/';
  }

  private _billets: Array<Billet>;
  private _selectedBillet: Billet;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';
  private _searchModal = '';


  findAll() {
    return this.http.get<Array<Billet>>(this.API);
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
    return this.http.post<any>(this.API + 'filter' + `?page=${page}${params}`, {...this.selectedBillet})
  }


  save(): Observable<Billet> {
    return this.http.post<Billet>(this.API, {...this.selectedBillet});
  }

  edit(): Observable<Billet> {
    return this.http.put<Billet>(this.API, this.selectedBillet);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Billet> {
    return this.http.get<Billet>(this.API + id + '/');
  }

  findByCriteria(billet: Billet): Observable<Array<Billet>>{
    return this.http.post<Array<Billet>>(this.API + 'search/', billet);
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
  
  get billets(): Array<Billet> {
    if (this._billets == null) {
      this._billets = new Array<Billet>();
    }
    return this._billets;
  }

  set billets(value: Array<Billet>) {
    this._billets = value;
  }

  get selectedBillet(): Billet {
    if (this._selectedBillet == null) {
      this._selectedBillet = new Billet();
    }
    return this._selectedBillet;
  }

  set selectedBillet(value: Billet) {
    this._selectedBillet = value;
  }


}