import { Injectable } from '@angular/core';
import {Product} from '../components/product/product'
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClientModule) { }

  ngOnInit(): void {

  }

  save(product:Product) {

  }
}
