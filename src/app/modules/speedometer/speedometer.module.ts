import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SpeedometerContainerComponent} from './containers/speedometer-container/speedometer-container.component';
import {RotateNeedleDirective} from './directives/rotate-needle/rotate-needle.directive';
import {NeedleComponent} from './components/needle/needle.component';


@NgModule({
  declarations: [SpeedometerContainerComponent, RotateNeedleDirective, NeedleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SpeedometerContainerComponent
      }
    ])
  ]
})
export class SpeedometerModule {
}
