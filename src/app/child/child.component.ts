import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
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
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    AfterViewInit,
    AfterViewChecked
{
  //counter = 0;
  //interval: any;
  //channelName = '';
  @Input() channelName = '';

  @ContentChild('projectedContent', { static: true }) projectedContent: any;
  @ViewChild('childContent', { static: true }) childContent: any;

  constructor() {
    console.log('Child Constructor is called');
  }

  ngOnInit() {
    console.log('Child OnInit - component is initialized');

    //this.interval = setInterval(() => {
    //  this.counter = this.counter + 1;
    //  console.log(this.counter);
    //}, 1000);

    console.log('OnInit - ' + this.projectedContent);
    console.log('OnInit - ' + this.childContent);
  }

  ngOnDestroy() {
    //clearInterval(this.interval);
    console.log('Child OnDestroy - component is destroyed');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child OnChanges is called');
    console.log('OnChanges - ' + this.projectedContent);
    console.log('OnChanges - ' + this.childContent);
  }

  ngDoCheck() {
    console.log('Child DoCheck is called');
    console.log('DoCheck - ' + this.projectedContent);
    console.log('DoCheck - ' + this.childContent);
  }

  ngAfterContentInit() {
    console.log('in After Content Init');
    console.log('After Content Init - ' + this.projectedContent);
    console.log('After Content Init - ' + this.childContent);
  }

  ngAfterContentChecked() {
    console.log('in After Content Checked');
    console.log('After Content Checked - ' + this.childContent);
  }

  ngAfterViewInit() {
    console.log('Child After View Init');
    console.log('After View Init - ' + this.childContent);
  }

  ngAfterViewChecked() {
    console.log('Child After View checked');
  }
}
