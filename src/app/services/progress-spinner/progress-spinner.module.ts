import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent } from '../../components/progress-spinner/progress-spinner.component';
import { LoaderService } from './loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader-interceptor.service';
import { OverlayService } from './overlay.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [ProgressSpinnerComponent],
  imports: [
    CommonModule,
    OverlayModule,
    MatProgressSpinnerModule
  ],
  providers: [
    OverlayService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  exports: [ProgressSpinnerComponent]
})
export class ProgressSpinnerModule { }
