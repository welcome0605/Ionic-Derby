import { Component, OnInit } from '@angular/core';

interface Art {
  category: string;
  title: string;
  cover: string;
  content: string;
  bgColor: string;
}

interface DynamicStyles {
  backgroundImage: string;
  linearGradient: string;
}

@Component({
  selector: 'app-art',
  templateUrl: './art.page.html',
  styleUrls: ['./art.page.scss'],
})
export class ArtPage implements OnInit {
  public art: Art;
  public dynamicStyles: DynamicStyles;

  constructor() { }

  ngOnInit() {
    this.art = {
      category: 'Arte Egipcio',
      title: 'Teotihuacán',
      cover: '/assets/images/art.jpeg',
      content: `
        Culpa aute amet occaecat aliquip et do dolor minim aliquip Lorem esse do laboris officia. Nisi ex do eu ad laboris nisi ipsum et labore esse. 
        Ullamco irure do ea culpa exercitation amet consectetur sit consequat anim. Voluptate incididunt in sint cillum dolore cupidatat excepteur qui eiusmod. 
        Dolore velit ullamco nostrud elit cillum velit. Incididunt minim adipisicing fugiat incididunt dolore dolore excepteur quis adipisicing.

        Nostrud in do et Lorem consectetur proident minim nostrud proident. Eiusmod nisi magna dolore sit deserunt est nulla id officia aute culpa labore. 
        Sit anim ullamco quis cupidatat non Lorem dolore cupidatat. Ut duis est ullamco est laboris. Consectetur dolor do non proident labore deserunt.

        Et magna consectetur consectetur esse mollit nisi ad voluptate qui officia ullamco dolor laborum aliqua. Pariatur occaecat ex consectetur do consequat in deserunt. 
        Laborum exercitation dolor id sit et. Tempor nisi ut commodo exercitation ex velit sint dolor voluptate tempor enim. 
        Ea ullamco fugiat dolor dolor reprehenderit mollit aute cillum. Id qui sit labore laborum.

        Aliqua adipisicing nisi deserunt ullamco amet consequat cupidatat est. Lorem veniam enim nostrud cillum mollit qui est. 
        Ullamco ad elit dolor officia adipisicing excepteur nisi voluptate labore excepteur. Eiusmod sint proident enim aute occaecat sunt reprehenderit consectetur aliqua.
      `,
      bgColor: 'orange',
    }

    this.dynamicStyles = {
      backgroundImage: `url(${this.art.cover})`,
      linearGradient: `linear-gradient(transparent 10%, ${this.art.bgColor} 90%)`,
    }
  }
}
