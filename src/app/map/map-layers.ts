import { tileLayer } from 'leaflet';

export class BaseLayers {

    static GOOGLE = {
        Maps: {
            url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
            attribution: 'Google Maps',
            factoryLeafletTileLayer: () => tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
                attribution: 'Google Maps'
            })
        },
        Satellite: {
            url: 'https://mt1.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}',
            attribution: ' Google Satellite',
            factoryLeafletTileLayer: () => tileLayer('https://mt1.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
                attribution: ' Google Satellite'
            })
        },
        SatelliteHybrid: {
            url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
            attribution: 'Google Satellite Hybrid',
            factoryLeafletTileLayer: () => tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
                attribution: 'Google Satellite Hybrid'
            })

        },
        Terrain: {
            url: 'https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}',
            attribution: 'Google Terrain',
            factoryLeafletTileLayer: () => tileLayer('https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}', {
                attribution: 'Google Terrain'
            })
        },
        Roads: {
            url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}',
            attribution: 'Google Roads',
            factoryLeafletTileLayer: () => tileLayer('https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}', {
                attribution: 'Google Roads'
            })
        }
    }

    static OSM = {
        Standard: {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: 'Open Street Maps',
            factoryLeafletTileLayer: () => tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Open Street Maps',
            })
        },
        Monochrome: {
            url: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
            attribution: 'Open Street Maps',
            factoryLeafletTileLayer: () => tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
                attribution: 'Open Street Maps',
            })
        }
    }

    static MapBiomas = {
        Classification: {
            url: 'https://brasil.mapserver.mapbiomas.org/wms/coverage.map',
            attribution: 'MapBiomas',
            factoryLeafletTileLayer: () => tileLayer.wms('https://brasil.mapserver.mapbiomas.org/wms/coverage.map', {
                attribution: 'MapBiomas',
                layers: 'coverage',
                format: 'image/png',
                transparent: true,
                territory_ids: '5694',
                year: '2019',
                class_tree_node_ids: '28,36,50,51,52,35,29,37,38,41,40,39,30,43,42,54,56,55,57,53,44,31,45,46,47,34,32,49,48,33',
            } as any)
        }
    }
}
