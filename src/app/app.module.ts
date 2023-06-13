import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as d3 from 'd3';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuageChartComponent } from './guage-chart/guage-chart.component';
declare var d3: any;
@NgModule({
  declarations: [AppComponent, GuageChartComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
