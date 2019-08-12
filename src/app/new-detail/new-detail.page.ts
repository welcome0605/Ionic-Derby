import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface New {
  id: number;
  title: string;
  description: string;
  cover: string;
  city: string;
  type: string;
  bgColorTag: string;
}

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})
export class NewDetailPage implements OnInit {
  public news: New[];
  public new: New;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const newId: number = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    this.show(newId);
  }

  private show(newId): void {
    this.news = [
      {
        id: 1,
        title: 'Ut sunt non cupidatat do et cillum',
        description: `
          Ut sunt non cupidatat do et cillum. 
          Do veniam nisi laboris ullamco irure mollit proident quis.
          Ut sunt non cupidatat do et cillum.
          Do veniam nisi laboris ullamco irure mollit proident quis.
          Ut sunt non cupidatat do et cillum. 
          Do veniam nisi laboris ullamco irure mollit proident quis.
        `,
        cover: '/assets/images/home.png',
        city: 'BCN',
        type: '',
        bgColorTag: '',
      },
      {
        id: 2,
        title: 'Ut sunt non cupidatat do et cillum',
        description: `
          Proident consequat non magna irure eiusmod do duis. 
          Incididunt commodo qui anim nulla consectetur deserunt duis mollit consequat laborum mollit cillum velit. 
          Nisi ex occaecat fugiat cupidatat ullamco fugiat ea incididunt elit labore esse. 
          Sunt consequat ex enim dolor occaecat in occaecat excepteur tempor cillum. 
          Cupidatat enim ipsum non excepteur et. Do cillum irure labore eu laboris aute ut.
        `,
        cover: '/assets/images/home.png',
        city: 'MAD',
        type: 'mini',
        bgColorTag: '#ffd31a',
      },
      {
        id: 3,
        title: 'Ut sunt non cupidatat',
        description: `
          Proident consequat non magna irure eiusmod do duis. 
          Incididunt commodo qui anim nulla consectetur deserunt duis mollit consequat laborum mollit cillum velit. 
          Nisi ex occaecat fugiat cupidatat ullamco fugiat ea incididunt elit labore esse. 
          Sunt consequat ex enim dolor occaecat in occaecat excepteur tempor cillum. 
          Cupidatat enim ipsum non excepteur et. Do cillum irure labore eu laboris aute ut.

          Ea nisi occaecat irure nostrud eiusmod. Ullamco non nisi non aliquip ex aliquip do eu velit esse aliqua eu. 
          Anim consequat et nostrud laboris aliqua sit aliqua tempor. Sint veniam qui non Lorem magna. 
          Duis ea velit aliqua excepteur consequat esse in minim ex culpa proident do pariatur aliqua. 
          Nisi incididunt est ipsum dolore ea Lorem ad officia sunt eiusmod. 
          Occaecat ea dolor esse dolore magna pariatur occaecat do adipisicing.
        `,
        cover: '/assets/images/home.png',
        city: 'París',
        type: 'mini',
        bgColorTag: '#7e57ff',
      },
    ]

    this.new = this.news.find(newItem => newItem.id === newId);
  }
}
