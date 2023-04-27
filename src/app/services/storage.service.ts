import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public getDataItem(key: string): any {
    const data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }
  }

  public setDataItem(key: string, data: string | object): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
