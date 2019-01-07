import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
  state
} from '@angular/animations';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  src: string;
  animtions: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  animations: [
    trigger('right', [
      state(
        'out1',
        style({
          transform: 'translateY(100%)',
          display: 'none'
        })
      ),
      state(
        'in1',
        style({
          transform: 'translateY(0)',
          display: 'block'
        })
      ),
      state(
        'out2',
        style({
          transform: 'translateX(100%)',
          display: 'none'
        })
      ),
      state(
        'in2',
        style({
          transform: 'translateX(0)',
          display: 'block'
        })
      ),
      transition(':enter', [
        style({ transform: 'translateY{-100%}' }),
        animate(
          800,
          keyframes([
            style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
          ])
        )
      ])
    ]),

    trigger('top', [
      state(
        'smaller',
        style({
          transform: 'rotate(360deg)'
        })
      ),
      state(
        'larger',
        style({
          transform: 'rotate(360deg)'
        })
      ),
      transition(':enter', [
        style({ transform: 'translateY{-100%}' }),
        animate(
          800,
          keyframes([
            style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    ]),
    trigger('left', [
      state(
        'smaller',
        style({
          transform: 'rotate(360deg)'
        })
      ),
      state(
        'larger',
        style({
          transform: 'rotate(360deg)'
        })
      ),
      transition(':enter', [
        style({ transform: 'translateY{-100%}' }),
        animate(
          800,
          keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    ]),

    trigger('down', [
      state(
        'smaller',
        style({
          transform: 'rotate(360deg)'
        })
      ),
      state(
        'larger',
        style({
          transform: 'rotate(360deg)'
        })
      ),
      transition(':enter', [
        style({ transform: 'translateY{-100%}' }),
        animate(
          800,
          keyframes([
            style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    ])
  ]
})
export class GridComponent implements OnInit {
  constructor() {}
  tiles: Tile[] = [
    {
      text: 'One',
      cols: 6,
      rows: 3,
      src: '../../assets/wallpaper2you_13001.jpg',
      animtions: '@right'
    },
    {
      text: 'Two',
      cols: 6,
      rows: 3,
      src: '../../assets/899555.jpg',
      animtions: '@down'
    },
    {
      text: 'Three',
      cols: 6,
      rows: 3,
      src: '../../assets/Cruise-Ship-Wallpaper-HD-08325.jpg',
      animtions: '@top'
    },
    {
      text: 'Four',
      cols: 6,
      rows: 3,
      src: '../../assets/Tanker-Ship-Wallpaper-HD-08528.jpg',
      animtions: '@left'
    }
  ];

  tiles1: Tile[] = [
    {
      text: 'One',
      cols: 6,
      rows: 3,
      src: '../../assets/wallpaper2you_13001.jpg',
      animtions: '@right'
    },
    {
      text: 'Two',
      cols: 6,
      rows: 3,
      src: '../../assets/899555.jpg',
      animtions: '@down'
    },
    {
      text: 'Three',
      cols: 6,
      rows: 3,
      src: '../../assets/Cruise-Ship-Wallpaper-HD-08325.jpg',
      animtions: '@top'
    },
    {
      text: 'Four',
      cols: 6,
      rows: 3,
      src: '../../assets/Tanker-Ship-Wallpaper-HD-08528.jpg',
      animtions: '@left'
    }
  ];

  tiles2: Tile[] = [
    {
      text: 'One',
      cols: 6,
      rows: 3,
      src: '../../assets/899555.jpg',
      animtions: '@right'
    },
    {
      text: 'Two',
      cols: 6,
      rows: 3,
      src: '../../assets/Tanker-Ship-Wallpaper-HD-08528.jpg',
      animtions: '@down'
    },
    {
      text: 'Three',
      cols: 6,
      rows: 3,
      src: '../../assets/wallpaper2you_13001.jpg',
      animtions: '@top'
    },
    {
      text: 'Four',
      cols: 6,
      rows: 3,
      src: '../../assets/Cruise-Ship-Wallpaper-HD-08325.jpg',
      animtions: '@left'
    }
  ];

  tiles3: Tile[] = [
    {
      text: 'One',
      cols: 6,
      rows: 3,
      src: '../../assets/Tanker-Ship-Wallpaper-HD-08528.jpg',
      animtions: '@right'
    },
    {
      text: 'Two',
      cols: 6,
      rows: 3,
      src: '../../assets/Cruise-Ship-Wallpaper-HD-08325.jpg',
      animtions: '@down'
    },
    {
      text: 'Three',
      cols: 6,
      rows: 3,
      src: '../../assets/899555.jpg',
      animtions: '@top'
    },
    {
      text: 'Four',
      cols: 6,
      rows: 3,
      src: '../../assets/wallpaper2you_13001.jpg',
      animtions: '@left'
    }
  ];

  tiles4: Tile[] = [
    {
      text: 'One',
      cols: 6,
      rows: 3,
      src: '../../assets/Cruise-Ship-Wallpaper-HD-08325.jpg',
      animtions: '@right'
    },
    {
      text: 'Two',
      cols: 6,
      rows: 3,
      src: '../../assets/wallpaper2you_13001.jpg',
      animtions: '@down'
    },
    {
      text: 'Three',
      cols: 6,
      rows: 3,
      src: '../../assets/Tanker-Ship-Wallpaper-HD-08528.jpg',
      animtions: '@top'
    },
    {
      text: 'Four',
      cols: 6,
      rows: 3,
      src: '../../assets/899555.jpg',
      animtions: '@left'
    }
  ];
  counter = 1;
  tile = 'this.tiles';
  state = 'in1';
  state1 = 'out2';
  ngOnInit() {}
  animate() {
    this.state = 'out1' ;
    this.state1 = 'in2' ;
    if ((this.counter === 1)) {
      this.tiles = this.tiles1;
    }
    if ((this.counter === 2)) {
      this.tiles = this.tiles2;
    }
    if ((this.counter === 3)) {
      this.tiles = this.tiles3;
    }
    if ((this.counter === 4)) {
      this.tiles = this.tiles4;
    }
    this.counter ++;
    if (this.counter > 4) {
      this.counter = 1;
    }
  }
}
