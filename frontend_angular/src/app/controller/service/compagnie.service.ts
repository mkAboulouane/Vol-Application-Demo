import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Compagnie} from '../model/compagnie.model';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'compagnie/';
  }

  private _compagnies: Array<Compagnie>;
  private _selectedCompagnie: Compagnie;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';


  findAll() {
    return this.http.get<Array<Compagnie>>(this.API);
  }

  // Pagination size=25 (default)
  getPage(page?: number, size=25) {
    let params = '';
    if (page) page++;
    else page = 1;
    if (size) params = `&size=${size}`;
    return this.http.get<any>(this.API + `page?page=${page}${params}`)
  }


  save(): Observable<Compagnie> {
    return this.http.post<Compagnie>(this.API, {...this.selectedCompagnie});
  }

  edit(): Observable<Compagnie> {
    return this.http.put<Compagnie>(this.API, this.selectedCompagnie);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Compagnie> {
    return this.http.get<Compagnie>(this.API + id + '/');
  }

  findByCriteria(compagnie: Compagnie): Observable<Array<Compagnie>>{
    return this.http.post<Array<Compagnie>>(this.API + 'search/', compagnie);
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
  
  get compagnies(): Array<Compagnie> {
    if (this._compagnies == null) {
      this._compagnies = new Array<Compagnie>();
    }
    return this._compagnies;
  }

  set compagnies(value: Array<Compagnie>) {
    this._compagnies = value;
  }

  get selectedCompagnie(): Compagnie {
    if (this._selectedCompagnie == null) {
      this._selectedCompagnie = new Compagnie();
    }
    return this._selectedCompagnie;
  }

  set selectedCompagnie(value: Compagnie) {
    this._selectedCompagnie = value;
  }


}