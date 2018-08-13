import { Item, ItemsService } from '@workspace/common-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemsService.all()
      .subscribe((items: Item[]) => this.items = items);
  }
}
