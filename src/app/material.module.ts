import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule],
  declarations: [],
})
export class MaterialModule {}
