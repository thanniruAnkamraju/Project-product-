import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private baseURL="http://localhost:8080/products";

  constructor(private httpClient:HttpClient) { }

  updateProduct(id:number,product:Product){
    return this.httpClient.post(`${this.baseURL}`,product);
  }
  getProduct(id:number):Observable<object>{
    return this.httpClient.get<Product>(`${this.baseURL}`);
  }
  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  getProductsList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
    
    }

    createProduct(product:Product):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,product);
  }
  deleteProduct(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
