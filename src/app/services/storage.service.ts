import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  put(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
