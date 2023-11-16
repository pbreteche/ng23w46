import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CataasFilterComponent} from "../cataas-filter/cataas-filter.component";
import {CataasApiService} from "../cataas-api.service";
import {CataasFilters} from "../cataas.types";

@Component({
  selector: 'app-cataas',
  standalone: true,
  imports: [CommonModule, CataasFilterComponent],
  templateUrl: './cataas.component.html',
  styleUrl: './cataas.component.scss'
})
export class CataasComponent implements OnInit{
  cats: any[] = [];
  constructor(private client: CataasApiService) {
  }

  ngOnInit(): void {
    this.refresh({
      tags: [],
      limit: 10,
    })
  }

  refresh($event: CataasFilters) {
    this.client.fetchCats($event).subscribe(cats => {
      if (!Array.isArray(cats)) {
        return;
      }
      this.cats = cats
    })
  }
}
