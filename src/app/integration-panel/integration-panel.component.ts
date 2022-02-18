import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { IntegrationService, Layers } from './integration.service';
import { MatExpansionPanel } from '@angular/material/expansion';


@Component({
  selector: 'app-integration-panel',
  templateUrl: './integration-panel.component.html',
  styleUrls: ['./integration-panel.component.css']
})
export class IntegrationPanelComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  // layers$: Observable<Layers[]> = new Observable<Layers[]>();
  layers$ = {} as Layers[];

  classLegend: any;

  legend$: Observable<Layers[]> = new Observable<Layers[]>();

  constructor(private integration: IntegrationService) { }

  ngOnInit(): void {
    // this.layers$ = this.integration.getLayers()
    this.integration.getLayers()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(resp => this.layers$ = resp );
    
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  hasLayerLabel(): any {
    this.integration.getLayers()
      .pipe(
        map(layer => layer.params.layers)
      )
      .subscribe(data => this.classLegend = data)
  }

}




// Read: https://medium.com/angular-in-depth/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794
