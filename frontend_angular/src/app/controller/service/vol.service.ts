import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Vol} from '../model/vol.model';

@Injectable({
  providedIn: 'root'
})
export class VolService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'vol/';
  }

  private _vols: Array<Vol>;
  private _selectedVol: Vol;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';
  private _searchModal = '';


  findAll() {
    return this.http.get<Array<Vol>>(this.API);
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
    return this.http.post<any>(this.API + 'filter' + `?page=${page}${params}`, {...this.selectedVol})
  }


  save(): Observable<Vol> {
    return this.http.post<Vol>(this.API, {...this.selectedVol});
  }

  edit(): Observable<Vol> {
    return this.http.put<Vol>(this.API, this.selectedVol);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Vol> {
    return this.http.get<Vol>(this.API + id + '/');
  }

  findByCriteria(vol: Vol): Observable<Array<Vol>>{
    return this.http.post<Array<Vol>>(this.API + 'search/', vol);
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
  
  get vols(): Array<Vol> {
    if (this._vols == null) {
      this._vols = new Array<Vol>();
    }
    return this._vols;
  }

  set vols(value: Array<Vol>) {
    this._vols = value;
  }

  get selectedVol(): Vol {
    if (this._selectedVol == null) {
      this._selectedVol = new Vol();
    }
    return this._selectedVol;
  }

  set selectedVol(value: Vol) {
    this._selectedVol = value;
  }


}