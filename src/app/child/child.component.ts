import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked
{
  //counter = 0;
  //interval: any;
  //channelName = '';
  @Input() channelName = '';

  @ContentChild('projectedContent') projectedContent: any;

  constructor() {
    console.log('Child Constructor is called');
  }

  ngOnInit() {
    console.log('Child OnInit is called');

    //this.interval = setInterval(() => {
    //  this.counter = this.counter + 1;
    //  console.log(this.counter);
    //}, 1000);

    console.log('OnInit - ' + this.projectedContent);
  }

  ngOnDestroy() {
    //clearInterval(this.interval);
    console.log('Child OnDestroy is called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child OnChanges is called');
    console.log('OnChanges - ' + this.projectedContent);
  }

  ngDoCheck() {
    console.log('Parent DoCheck is called');
    console.log('DoCheck - ' + this.projectedContent);
  }

  ngAfterContentInit() {
    console.log('in After Content Init');
    console.log('AfterContentInit - ' + this.projectedContent);
  }

  ngAfterContentChecked() {
    console.log('in After Content Checked');
  }
}
