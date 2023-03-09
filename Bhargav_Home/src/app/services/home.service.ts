import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
private name :any = '';
  constructor() { }
  public setName(name: any) {
    this.name = name;
  }
  public getName() {
    return this.name;
  }
}
