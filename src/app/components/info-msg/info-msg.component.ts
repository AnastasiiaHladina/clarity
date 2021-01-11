import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-info-msg',
  templateUrl: './info-msg.component.html',
  styleUrls: ['./info-msg.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoMsgComponent {
  @Input() showQuestion: boolean;
  @Input() whichActions: string;
  @Output() parentAllowEnable = new EventEmitter<void>();
  @Output() parentAllowDisable = new EventEmitter<void>();
  @Output() parentDiscard = new EventEmitter<void>();

  discard() {
    this.parentDiscard.emit();
  }

  allowEnable() {
    this.parentAllowEnable.emit();
  }

  allowDisable() {
    this.parentAllowDisable.emit();
  }
}
