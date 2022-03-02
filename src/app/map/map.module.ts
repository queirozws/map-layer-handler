import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayersPanelComponent } from '../layers-panel/layers-panel/layers-panel.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { FilterLayerComponent } from '../layers-panel/filter-layer/filter-layer.component';
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MapComponent } from './map.component';

@NgModule({
  declarations: [
    LayersPanelComponent,
    FilterLayerComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LayersPanelComponent,
    FilterLayerComponent,
    MapComponent
  ]
})
export class MapModule { }
