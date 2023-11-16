import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {CataasFilters} from "../cataas.types";

@Component({
  selector: 'app-cataas-filter',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatSliderModule],
  templateUrl: './cataas-filter.component.html',
  styleUrl: './cataas-filter.component.scss'
})
export class CataasFilterComponent implements OnInit  {
  tags: string[] = [];
  selectedTags: string[] = [];
  limit = 10;
  @Output()
  onChange = new EventEmitter<CataasFilters>();
  constructor(private client: HttpClient) {
  }

  ngOnInit(): void {
    this.client.get('https://cataas.com/api/tags')
      .subscribe(data => {
        if (!Array.isArray(data)) {
          return;
        }
        this.tags = data
      })
  }
  select() {
    if (this.selectedTags.length > 0 && this.limit != null) {
      this.onChange.emit({
        tags: this.selectedTags,
        limit: this.limit
      });
    }
  }
}
