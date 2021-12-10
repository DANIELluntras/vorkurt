import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  weighte: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', weighte: 1 },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', weighte: 1  },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', weighte: 1  },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', weighte: 1  },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', weighte: 1  },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', weighte: 1  },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , weighte: 1 },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' , weighte: 1 },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', weighte: 1  },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', weighte: 1  },
];

@Component({
  selector: 'elix-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListItemsComponent implements OnInit {
  test = 'sfdas';
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
