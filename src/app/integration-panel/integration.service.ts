import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { API_BASEURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  toolkit: string = 'toolkit';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(message: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  getLayers(): Observable<any> {
    return this.http.get<Observable<Layers[]>>(`${API_BASEURL}/${this.toolkit}`)
  }

  getLegend(): Observable<any> {
    return this.getLayers().pipe(
      map(layer => layer.legend)
    )
  }
  
}

export interface Layers {
  "id": number,
  "name": string,
  "data": string,
  "shown": boolean,
  "vis": string,
  "legend": any// Legend | null | string
}

export interface Legend {
  params?: any// Params | string | null
}

export interface Params {
  title?: any// string | null,
  layers?: any // any[] | string,
  style?: Style | string,
  orientation?: string
}

export interface Style {
  backgroundColor?: string,
  color?: string,
  fontSize?: string,
  iconSize?: string
}