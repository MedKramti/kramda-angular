import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ImageCardComponent } from './component/image-card/image-card.component';
import { BarChartComponent } from './component/charts/barchart/barchart.component';
import { NgChartsModule } from 'ng2-charts';
import { PieChartComponent } from './component/charts/pie-chart/pie-chart.component';
import { ItemsListComponent } from './component/items-list/items-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ImageCardComponent,
    BarChartComponent,
    PieChartComponent,
    ItemsListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
