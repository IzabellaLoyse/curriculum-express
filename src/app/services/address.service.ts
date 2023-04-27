import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IAddress } from '../interfaces/address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private readonly API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getAddress(zipCode: string): Observable<IAddress> {
    return this.http.get<IAddress>(`${this.API}${zipCode}/json/`);
  }
}
