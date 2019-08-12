import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from '../services/toast.service';
import { State } from '../reducers';
import { Observable } from 'rxjs';
import { Languages } from '../reducers/app-settings.reducer';
import { selectAllLanguages } from '../selectors/app-settings.selector';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public loginForm: FormGroup;
  public buttonWord: string;
  public emailWord: string;
  public passwordWord: string;
  public languages$: Observable<Languages[]>;

  private enterWord: string;

  constructor(
    private menu: MenuController,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private toastService: ToastService,
    private store: Store<State>,
  ) { 
    translate.get('GLOBAL.EMAIL').subscribe((res: string) => {
      this.emailWord = res;
    });

    translate.get('GLOBAL.PASSWORD').subscribe((res: string) => {
      this.passwordWord = res;
    });

    translate.get('GLOBAL.ENTER').subscribe((res: string) => {
      this.enterWord = res;
    });
  }

  ngOnInit(): void {
    this.menu.enable(false);
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.buttonWord = this.enterWord;
    this.languages$ = this.store.pipe(select(selectAllLanguages));
  }

  ngOnDestroy(): void {
    this.menu.enable(true);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public login(): void {
    this.isLoading = true;
    this.translate.get('LOGIN_PAGE.LOGGING_IN').subscribe((res: string) => {
      this.buttonWord = res;
    });

    setTimeout(() => {
      this.isLoading = false;
      this.buttonWord = this.enterWord;
      
      const error = true

      if (!error) {
        this.loginForm.reset();
        
      } else {
        this.translate.get('LOGIN_PAGE.ERROR').subscribe((res: string) => {
          this.toastService.presentToast(res, 'danger');
        });
      }

    }, 3000);
  }
}
