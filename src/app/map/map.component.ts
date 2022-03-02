import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Map, TileLayer, tileLayer } from 'leaflet';
import { LayersService } from '../layers-panel/layers.service';

import { BaseLayers } from './map-layers';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  @ViewChild('map', { static: true }) mapElement: ElementRef;

  selectedYears: string[] = [];

  mapId: any;

  layers: MapLayer[] = [];

  layer: any;

  map: Map;

  static onMapInit = new EventEmitter<MapComponent>();

  constructor(private layersService: LayersService) { }

  ngOnInit(): void {

    // console.log(this.mapElement)

    this.map = new Map(
      this.mapElement.nativeElement,
      {
        center: [
          -9.617418067950293,
          -48.427734375
        ],
        zoom: 5,
        minZoom: 2,
        maxZoom: 20,
        zoomControl: true
      }
    );

    this.map.addLayer(BaseLayers.OSM.Standard.factoryLeafletTileLayer());

    // console.log(this.map)

    setTimeout(() => {
      this.map.invalidateSize();
    }, 200);

    // console.log(this.mapElement);

    MapComponent.onMapInit.emit(this);

  }

  ngOnDestroy() {

    this.map.clearAllEventListeners;
    this.map.remove();
    
  };



  factoryLeafletTileLayerFromMapId(mapid: any): TileLayer {
    const layer = tileLayer(mapid, {
        attribution: "Google Earth Engine"
    });
    return layer;
  }
  
  addLayer(layer: TileLayer, key: string): void {

    console.log('layer: ', layer);

    this.layers = this.layers.filter(item => {
      if (item.key == key) {
        this.map.removeLayer(item.layer);
        return false;
      } else {
        return true;
      }
    });

    this.layers.push({
      layer: layer,
      key: key
    });


    this.map.addLayer(layer)
  }

  removeLayer(key: string): void {

    this.layers = this.layers.filter(item => {
      if (item.key == key) {

        this.map.removeLayer(item.layer);

        return false;

      } else {

        return true;
        
      }
    });

  }

}

interface MapLayer {
  layer: TileLayer;
  key: string;
  label?: string;
  group?: string;
}

