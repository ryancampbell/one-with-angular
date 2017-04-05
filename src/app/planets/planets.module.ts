import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ItemFramer } from 'framing/item/item.framer';

import { PlanetsViewModule } from './view/planets-view.module';

import { ItemFormComponent } from './view/item-form/item-form.component';

@NgModule(Framing((framing) => framing
  .import(PlanetsViewModule)
  .frame(new ItemFramer()
    .model({
      title: 'Planets',
    })
    .view({
      itemFormComponent: ItemFormComponent,
    }),
  ),
))
export class PlanetsModule { }
