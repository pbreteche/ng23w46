import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CataasFilterComponent} from "../cataas-filter/cataas-filter.component";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-cataas',
  standalone: true,
  imports: [CommonModule, CataasFilterComponent],
  templateUrl: './cataas.component.html',
  styleUrl: './cataas.component.scss'
})
export class CataasComponent implements OnInit{
  cats: any[] = [];
  constructor(private client: HttpClient) {
  }

  ngOnInit(): void {
    this.refresh([])
  }

  refresh($event: string[]) {
    const params = new HttpParams({
      fromObject: {
        tags: $event,
        limit: 10,
      }
    })
    this.client.get('https://cataas.com/api/cats', {
      params: params
    }).subscribe(cats => {
      if (!Array.isArray(cats)) {
        return;
      }
      this.cats = cats
    })
  }
}
