import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-cataas-filter',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './cataas-filter.component.html',
  styleUrl: './cataas-filter.component.scss'
})
export class CataasFilterComponent implements OnInit  {

  tags: string[] = [];
  selectedTags: string[] = [];
  @Output()
  onChange = new EventEmitter<string[]>();
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
    this.onChange.emit(this.selectedTags);
  }
}
