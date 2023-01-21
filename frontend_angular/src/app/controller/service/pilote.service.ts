import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Pilote} from '../model/pilote.model';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'pilote/';
  }

  private _pilotes: Array<Pilote>;
  private _selectedPilote: Pilote;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';
  private _searchModal = '';


  findAll() {
    return this.http.get<Array<Pilote>>(this.API);
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
    return this.http.post<any>(this.API + 'filter' + `?page=${page}${params}`, {...this.selectedPilote})
  }


  save(): Observable<Pilote> {
    return this.http.post<Pilote>(this.API, {...this.selectedPilote});
  }

  edit(): Observable<Pilote> {
    return this.http.put<Pilote>(this.API, this.selectedPilote);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Pilote> {
    return this.http.get<Pilote>(this.API + id + '/');
  }

  findByCriteria(pilote: Pilote): Observable<Array<Pilote>>{
    return this.http.post<Array<Pilote>>(this.API + 'search/', pilote);
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
  
  get pilotes(): Array<Pilote> {
    if (this._pilotes == null) {
      this._pilotes = new Array<Pilote>();
    }
    return this._pilotes;
  }

  set pilotes(value: Array<Pilote>) {
    this._pilotes = value;
  }

  get selectedPilote(): Pilote {
    if (this._selectedPilote == null) {
      this._selectedPilote = new Pilote();
    }
    return this._selectedPilote;
  }

  set selectedPilote(value: Pilote) {
    this._selectedPilote = value;
  }


}