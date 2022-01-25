import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAddress } from '../interfaces/address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private readonly API = 'https://viacep.com.br/ws/';


  constructor(private http: HttpClient) {}

  getAddress(zipCode: string): Observable<IAddress> {
    return this.http.get<IAddress>(`${this.API}${zipCode}/json/`);
  }
}
