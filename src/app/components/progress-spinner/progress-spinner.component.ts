import { OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoaderService } from 'src/app/services/progress-spinner/loader.service';
import { AppOverlayConfig, OverlayService } from 'src/app/services/progress-spinner/overlay.service';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  @ViewChild('progressSpinnerRef')
  progressSpinnerRef: TemplateRef<any>;

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  value: number = 50;
  diameter: number = 100;
  loading: boolean;

  private progressSpinnerOverlayConfig: AppOverlayConfig;
  private overlayRef: OverlayRef;

  constructor(
    private vcRef: ViewContainerRef,
    private overlayService: OverlayService,
    private loaderService: LoaderService
    ) { }

  ngOnInit() {
    this.loaderService.isLoading.subscribe(
      l => this.loading = l
    );

    this.progressSpinnerOverlayConfig = {
      hasBackdrop: true
    };

    this.progressSpinnerOverlayConfig['positionStrategy'] = this.overlayService.positionGloballyCenter();

    this.overlayRef = this.overlayService.createOverlay(this.progressSpinnerOverlayConfig);
  }

  ngDoCheck() {
    if (this.loading && !this.overlayRef.hasAttached())
      this.overlayService.attachTemplatePortal(this.overlayRef, this.progressSpinnerRef, this.vcRef);
    else if (!this.loading && this.overlayRef.hasAttached())
      this.overlayRef.detach();
  }
}
