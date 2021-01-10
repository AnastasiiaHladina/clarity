import { BusType } from './busType';

export interface Disk {
  id: string;
  name: string;
  lun: number;
  busType: BusType;
  blockSize: number;
  sizeInBlocks: number;
}
