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
import { NavbarComponent } from './component/navbar/navbar.component';
import { AreaComponent } from './pages/area/area.component';
import { TableComponent } from './component/table/table.component';
import { DatePipe } from '@angular/common';
import { EmailComponent } from './pages/email/email.component';
import { DistributionComponent } from './pages/distribution/distribution.component';
import { FormComponent } from './component/form/form.component';
import { EditEmailComponent } from './pages/email/edit-email/edit-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedFormComponent } from './component/form/shared-form/shared-form.component';
import { EditAreaComponent } from './pages/area/edit-area/edit-area.component';
import { BackComponent } from './component/back/back.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ImageCardComponent,
    BarChartComponent,
    PieChartComponent,
    ItemsListComponent,
    NavbarComponent,
    AreaComponent,
    TableComponent,
    EmailComponent,
    DistributionComponent,
    FormComponent,
    EditEmailComponent,
    SharedFormComponent,
    EditAreaComponent,
    BackComponent,
    FooterComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
