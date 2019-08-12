import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  public isLoading: boolean = false;
  public forgotForm: FormGroup;
  public emailWord: string;
  public restoreWord: string;
  public passwordWord: string;
  public buttonWord: string;

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private toastService: ToastService,
  ) {
    translate.get('GLOBAL.EMAIL').subscribe((res: string) => {
      this.emailWord = res;
    });

    translate.get('GLOBAL.RESTORE').subscribe((res: string) => {
      this.restoreWord = res;
    });

    translate.get('GLOBAL.PASSWORD').subscribe((res: string) => {
      this.passwordWord = res;
    });
  }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.buttonWord = `${this.restoreWord} ${this.passwordWord}`;
  }

  get email() {
    return this.forgotForm.get('email');
  }

  public createNewPassword(): void {
    this.isLoading = true;
    this.translate
      .get('GLOBAL.RESTORING', { param: this.passwordWord })
      .subscribe((res: string) => {
        this.buttonWord = res;
      });

    setTimeout(() => {
      this.isLoading = false;
      this.buttonWord = `${this.restoreWord} ${this.passwordWord}`;

      const error = false

      if (!error) {
        this.translate.get('FORGOT_PAGE.SUCCESS').subscribe((res: string) => {
          this.forgotForm.reset();
          this.toastService.presentToast(res, 'success');
        });
        
      } else {
        this.translate.get('FORGOT_PAGE.ERROR').subscribe((res: string) => {
          this.toastService.presentToast(res, 'danger');
        });
      }

    }, 3000);
  }
}
