import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { LayersService } from '../layers.service';

@Component({
  selector: 'app-filter-layer',
  templateUrl: './filter-layer.component.html',
  styleUrls: ['./filter-layer.component.css']
})
export class FilterLayerComponent implements OnInit{

  @Output() toppings = new FormControl();

  toppingList: string[] = [];

  // @Output() toppingChecked = new EventEmitter<string[]>();

  constructor (private layerService: LayersService) { }

  ngOnInit(): void {
    this.toppingList = this.layerService.getYears();

  }

  // sendToParent(name: any): void {
  //   this.toppingChecked.emit(name)
  // }

  // reset(): any {
  //   this.layerService.getYears();
  // }

}
