import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private closeWord: string;

  constructor(
    private toastController: ToastController, 
    private translate: TranslateService
  ) {
    translate.get('GLOBAL.CLOSE').subscribe((res: string) => {
      this.closeWord = res;
    });
  }

  public async presentToast(message: string, type: string){
    let color: string; 

    switch (type) {
      case 'success': 
        color = 'primary';
        break;

      case 'danger':
        color = 'danger';
        break;

      case 'warning':
        color = 'warning';
        break;
    }

    const toast = await this.toastController.create({
      color,
      message,
      keyboardClose: true,
      showCloseButton: true,
      closeButtonText: this.closeWord,
      position: 'top',
      duration: 4000,
    });
    toast.present();
  }
}
