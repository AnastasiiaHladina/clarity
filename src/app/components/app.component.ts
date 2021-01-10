import { Component, OnInit } from '@angular/core';
import { DiskService } from '../service/disk/disk.service';
import { Observable } from 'rxjs';
import { Disk } from '../interface/disks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Clarity';
  errorMsg = '';
  showQuestion = false;
  whichActions: string;
  selectedDisks: Disk[] = [];
  disabledDisk: Disk[] = [];
  disks$: Observable<Disk[]>;

  constructor(private diskService: DiskService) {}

  ngOnInit(): void {
      this.disks$ = this.diskService.getDisks();
  }

  editVisibility(whichAction) {
    if (this.selectedDisks.length === 1) {
      this.errorMsg = '';
      const isDisabled = this.disabledDisk.includes(this.selectedDisks[0]);
      if (isDisabled && whichAction === 'disable') {
        this.errorMsg = 'This drive has already been disabled';
      } else if (!isDisabled && whichAction === 'enable') {
        this.errorMsg = 'This drive does not disabled';
      } else {
        this.whichActions = whichAction;
        this.showQuestion = true;
      }
    } else if (this.selectedDisks.length > 1) {
      this.errorMsg = 'User can enable or disable only one drive';
    } else if (this.selectedDisks.length < 1) {
      this.errorMsg = 'You should choose one drive';
    }
  }

  allowEnable() {
    const index = this.disabledDisk.indexOf(this.selectedDisks[0]);
    this.disabledDisk.splice(index, 1);
    this.selectedDisks = [];
    this.discard();
  }

  allowDisable() {
    this.disabledDisk.push(this.selectedDisks[0]);
    this.selectedDisks = [];
    this.discard();
  }

  discard() {
    this.showQuestion = false;
    this.errorMsg = '';
    this.whichActions = '';
  }

  compare(disk) {
    return this.disabledDisk.includes(disk);
  }
}
