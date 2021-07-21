import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderPipe } from 'src/pipes/render.pipe';
import { RoundPipe } from 'src/pipes/round.pipe';

// all used pipes



@NgModule({
  declarations: [
    RenderPipe,
    RoundPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RenderPipe,
    RoundPipe
  ]
})
export class PipesModule { }
