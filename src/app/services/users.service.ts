import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { map } from 'rxjs/operators';

// Modelo de la respuesta del servidor
interface ResponseUsers {
  results: User[];
  info: any;
}
// ¿Modelo para los datos que provee la API?
// ¿Modelo para los datos que maneja y muestra la app?

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  // ¿Las variables con la dirección de la API y los endpoints podría ir en el environment?
  private api = 'https://randomuser.me/api/';
  private endpoint = '?results';

  constructor(private http: HttpClient) {}

  getUsers(results: number = 5) {
    const url = `${this.api}${this.endpoint}=${results}`;
    return this.http.get<ResponseUsers>(url).pipe( map(response => response.results) );
  }
}
