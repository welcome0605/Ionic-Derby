import { Component, OnInit } from '@angular/core';

interface Award {
  id: number;
  name: string;
  description: string;
  icon: string;
  point: number;
  disabled: boolean;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public awards: Award[];
  public totalPoints: number;

  constructor() { }

  ngOnInit() {
    this.getAwards();
    this.getTotalPoints();
  }

  private getAwards(): void {
    this.awards = [
      {
        id: 1,
        name: 'Premio 1',
        description: 'Por tener un buen perfil',
        icon: '/assets/images/icons/Premio_01_ico.png',
        point: 62.5,
        disabled: false,
      },
      {
        id: 2,
        name: 'Premio 2',
        description: 'Por demostrar que estás al día',
        icon: '/assets/images/icons/Premio_02_ico.png',
        point: 62.5,
        disabled: false,
      },
      {
        id: 3,
        name: 'Premio 3',
        description: 'Por dar tu opinión',
        icon: '/assets/images/icons/Premio_03_ico.png',
        point: 62.5,
        disabled: true,
      },
      {
        id: 4,
        name: 'Premio 4',
        description: 'Por tener la mejor puntuación anual',
        icon: '/assets/images/icons/Premio_04_ico.png',
        point: 62.5,
        disabled: true,
      },
      {
        id: 5,
        name: 'Premio 5',
        description: 'Por responder bien el juego',
        icon: '/assets/images/icons/Premio_05_ico.png',
        point: 62.5,
        disabled: false,
      },
      {
        id: 6,
        name: 'Premio 6',
        description: 'Por ser el Nº 1 en el ranking',
        icon: '/assets/images/icons/Premio_06_ico.png',
        point: 62.5,
        disabled: true,
      },
      {
        id: 7,
        name: 'Premio 7',
        description: 'Por ser muy popular en redes',
        icon: '/assets/images/icons/Premio_07_ico.png',
        point: 62.5,
        disabled: false,
      },
      {
        id: 8,
        name: 'Premio 8',
        description: 'Por estar bien informad@',
        icon: '/assets/images/icons/Premio_08_ico.png',
        point: 62.5,
        disabled: true,
      },
    ]
  }

  private getTotalPoints(): void {
    this.totalPoints = this.awards.reduce((totalSum, { point, disabled }) => {
      if (!disabled) {
        return totalSum + point;
      }

      return totalSum;
    }, 0);
  }
}
