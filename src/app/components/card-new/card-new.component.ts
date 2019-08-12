import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.scss'],
})
export class CardNewComponent implements OnInit {
  @Input() public title: string;
  @Input() public description: string;
  @Input() public cover: string;
  @Input() public city: string;
  @Input() public type: string;
  @Input() public bgColorTag: string;
  
  constructor() { }

  ngOnInit() {}

}
