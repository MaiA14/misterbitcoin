import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { BitcoinTransferComponent } from './components/bitcoin-transfer/bitcoin-transfer.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ContactNavbarComponent } from './components/contact-navbar/contact-navbar.component';
import { TransferPreviewComponent } from './components/transfer-preview/transfer-preview.component';
import { TransferListComponent } from './components/transfer-list/transfer-list.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ForbiddenValidatorDirective } from './directives/forbidden-name.directive';
import { ChartComponent } from './components/chart/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    BitcoinTransferComponent,
    ContactFilterComponent,
    ContactNavbarComponent,
    TransferPreviewComponent,
    TransferListComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactPageComponent,
    HomePageComponent,
    SignupPageComponent,
    StatisticPageComponent,
    ContactFilterComponent,
    ForbiddenValidatorDirective,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
