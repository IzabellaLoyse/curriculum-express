import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getDataItem(key: string) {
    const data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }
  }

  setDataItem(key: string, data: string | object) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
