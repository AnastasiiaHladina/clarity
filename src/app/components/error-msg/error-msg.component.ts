import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMsgComponent {
  @Input() errorMsg: string;
  @Output() parentDiscard = new EventEmitter<void>();

  discard() {
    this.parentDiscard.emit();
  }
}
