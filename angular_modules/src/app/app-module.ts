import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DataAndEvenBinding } from './data-and-even-binding/data-and-even-binding';
import { StructuralDirective } from './structural-directive/structural-directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [App, DataAndEvenBinding, StructuralDirective],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
