import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-mouse-coordinates',
  standalone: true,
  imports: [],
  templateUrl: './mouse-coordinates.component.html',
  styleUrl: './mouse-coordinates.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MouseCoordinatesComponent {
  @Input() position: { x: number; y: number } | null = { x: 0, y: 0 };
  @Input() tracking: boolean | null = false;
}
