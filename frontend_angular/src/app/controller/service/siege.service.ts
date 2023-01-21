import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Siege} from '../model/siege.model';

@Injectable({
  providedIn: 'root'
})
export class SiegeService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'siege/';
  }

  private _sieges: Array<Siege>;
  private _selectedSiege: Siege;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';


  findAll() {
    return this.http.get<Array<Siege>>(this.API);
  }

  // Pagination size=25 (default)
  getPage(page?: number, size=25) {
    let params = '';
    if (page) page++;
    else page = 1;
    if (size) params = `&size=${size}`;
    return this.http.get<any>(this.API + `page?page=${page}${params}`)
  }


  save(): Observable<Siege> {
    return this.http.post<Siege>(this.API, {...this.selectedSiege});
  }

  edit(): Observable<Siege> {
    return this.http.put<Siege>(this.API, this.selectedSiege);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Siege> {
    return this.http.get<Siege>(this.API + id + '/');
  }

  findByCriteria(siege: Siege): Observable<Array<Siege>>{
    return this.http.post<Array<Siege>>(this.API + 'search/', siege);
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
  
  get sieges(): Array<Siege> {
    if (this._sieges == null) {
      this._sieges = new Array<Siege>();
    }
    return this._sieges;
  }

  set sieges(value: Array<Siege>) {
    this._sieges = value;
  }

  get selectedSiege(): Siege {
    if (this._selectedSiege == null) {
      this._selectedSiege = new Siege();
    }
    return this._selectedSiege;
  }

  set selectedSiege(value: Siege) {
    this._selectedSiege = value;
  }


}