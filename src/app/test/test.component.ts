import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges {

  title = "Angular"
  changeValue
  @Input() name = '';
  @Output() outputEvent = new EventEmitter();


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.changeValue = `輸入屬性從 ${changes['name'].previousValue}變更為 : ${changes['name'].currentValue}`
  }

  ngOnInit() {
  }

  onBtnClick() {
    this.outputEvent.emit();
  }
}
