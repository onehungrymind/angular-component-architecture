import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { CommonDataModule } from '@workspace/common-data';
import { MaterialModule } from '@workspace/material';
import { TotalsViewModule } from '@workspace/totals-view';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    MaterialModule,
    CommonDataModule,
    TotalsViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
