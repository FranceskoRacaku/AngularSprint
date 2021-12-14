import { Injectable } from '@angular/core';
import { Product } from './products/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
     const data = this.http.get('https://static.developer.riotgames.com/docs/lol/maps.json');
     return data;
  }
}
