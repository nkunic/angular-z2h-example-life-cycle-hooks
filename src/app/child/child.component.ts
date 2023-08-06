import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {
  //counter = 0;
  //interval: any;
  //channelName = '';
  @Input() channelName = '';

  constructor() {
    console.log('Child Constructor is called');
  }

  ngOnInit() {
    console.log('Child OnInit is called');

    //this.interval = setInterval(() => {
    //  this.counter = this.counter + 1;
    //  console.log(this.counter);
    //}, 1000);
  }

  ngOnDestroy() {
    //clearInterval(this.interval);
    console.log('Child OnDestroy is called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child OnChanges is called');
  }
}
