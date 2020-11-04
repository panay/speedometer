import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-needle',
  templateUrl: './needle.component.html',
  styleUrls: ['./needle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeedleComponent {
}
