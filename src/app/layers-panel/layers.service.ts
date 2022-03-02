import { EventEmitter, Injectable } from '@angular/core';
// import { Observable, from } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LayersService {

  static layers: EventEmitter<string[]> = new EventEmitter<string[]>();

  static anosSelecionados: any;

  mapIdProp: any;

  constructor() { }

  getMapIds(): any {
    return {
      "2020": "https://earthengine.googleapis.com/v1alpha/projects/ee-queirozws/maps/1cc52e59b2506f27690dce2ff0045157-276d8ec89fc829d825ec49f259943d0d/tiles/{z}/{x}/{y}",
      "2019": "https://earthengine.googleapis.com/v1alpha/projects/ee-queirozws/maps/87bda868e130849648d34726381e4a70-86d7281297b319408f95d9970e0e943d/tiles/{z}/{x}/{y}",
      "2018": "https://earthengine.googleapis.com/v1alpha/projects/ee-queirozws/maps/a9d9a543c14e4da5a1502e528d9514d5-949ce82ab4f737fdec21630944250c57/tiles/{z}/{x}/{y}"
      // "2020": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      // "2019": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      // "2018": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    }
  }

  getYears(): string[] {
    return [
      // "(All)",
      "2020",
      "2019",
      "2018",
      // "2017",
      // "2016",
      // "2015",
      // "2014",
      // "2013",
      // "2012",
      // "2011",
      // "2010",
      // "2009",
      // "2008",
      // "2007",
      // "2006",
      // "2005",
      // "2004",
      // "2003",
      // "2002",
      // "2001",
      // "2000",
      // "1999",
      // "1998",
      // "1997",
      // "1996",
      // "1995",
      // "1994",
      // "1993",
      // "1992",
      // "1991",
      // "1990",
      // "1989",
      // "1988",
      // "1987",
      // "1986",
      // "1985",
    ]
  }
}

  // layers = [
  //   "Mosaic",
  //   "Classification",
  //   "Integration",
  //   "Agriculture",
  //   "Agriculture (irrigated)",
  //   "Aquaculture",
  //   "Coastal Zone",
  //   "Mining",
  //   "Pasture",
  //   "Planted Forest",
  //   "Urban",
  //   "Water",
  //   "Collection 3.1",
  //   "Collection 4.1",
  //   "Collection 5.0",
  //   "Collection 6.0",
  //   "Collection 6.0 (filtered)",
  //   "Incidents",
  //   "States",
  //   "Difference",
  //   "Grids",
  //   "Biomes",
  //   "Indigenous Land",
  //   "Protected Areas",
  //   "ESRI 2020",
  // ];

