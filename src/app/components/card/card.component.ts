import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public title: string;
  @Input() public description: string;
  @Input() public cover: string;
  @Input() public city: string;

  constructor() { }

  ngOnInit() {}

}
