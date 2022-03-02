import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { LayersService } from "../layers.service";
import { MapComponent } from "../../map/map.component";

import { Map, TileLayer, tileLayer } from 'leaflet';

@Component({
  selector: 'app-layers-panel',
  templateUrl: './layers-panel.component.html',
  styleUrls: ['./layers-panel.component.css']
})
export class LayersPanelComponent implements OnInit {

  map: MapComponent;

  mapIds: any;

  year: any;

  layers: string[] = [];

  constructor(private layersService: LayersService) {
    MapComponent.onMapInit.subscribe(map => {
      this.map = map;
    });
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      // #TODO implementar método que puxe para o topo os layers marcados?
      console.log(event.container.data, event.previousIndex);

    }
  }
  
  ngOnInit(): void {
    this.layers = this.layersService.getYears();

    this.mapIds = this.layersService.getMapIds(); // #TODO gambiarra

  }

  factoryLeafletTileLayerFromMapId(mapid: any): TileLayer {
    
    const layer = tileLayer(mapid, {
        attribution: "Google Earth Engine"
    });

    return layer;
  }

  onChange(checked: boolean, year: string): void {
    // #TODO inserir layer no mapa

    if(checked) {

      const layer = this.factoryLeafletTileLayerFromMapId(this.mapIds[year]);

      console.log(`Adiciona a camada do ${year}`);

      console.log(this.map);

      this.map.addLayer(layer, year);

    } else {
      console.log(`Remove a camada do ${year}`);

      this.map.removeLayer(year);
      
    }

  }


}




