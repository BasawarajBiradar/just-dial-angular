import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TsysMainComponent } from './tsys-main/tsys-main.component';
import { HeadMenuComponent } from './head-menu/head-menu.component';
import { FooterComponent } from './footer/footer.component';
import { FootMenuComponent } from './foot-menu/foot-menu.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemComponent } from './item/item.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import {  RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
import { from } from 'rxjs';
import { HomepageComponent } from './homepage/homepage.component';

const routesConfig: Routes=[
  {
    path:'',
    component: HomepageComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'about-us',
    component:AboutUsComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'support',
    component:SupportComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadMenuComponent,
    FooterComponent,
    FootMenuComponent,
    MainContainerComponent,
    ListItemsComponent,
    ItemComponent,
    AboutUsComponent,
    ContactUsComponent,
    TsysMainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
