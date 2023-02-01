import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from '@chat/chat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@chat-components/components.module';
import { MatCardModule } from '@angular/material/card';
import { AngularMaterialModule } from '@material-module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatRoutingModule,
    ComponentsModule,
    AngularMaterialModule
  ]
})
export class ChatModule { }
