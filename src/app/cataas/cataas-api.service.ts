import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CataasFilters} from "./cataas.types";

@Injectable({
  providedIn: 'root'
})
export class CataasApiService {
  constructor(private client: HttpClient) { }

  fetchCats(filters: CataasFilters) {
    const params = new HttpParams({
      fromObject: filters
    });

    return this.client.get('https://cataas.com/api/cats', {
      params: params
    });
  }
}
