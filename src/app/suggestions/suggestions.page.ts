import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.page.html',
  styleUrls: ['./suggestions.page.scss'],
})
export class SuggestionsPage implements OnInit {
  public isLoading: boolean = false;
  public suggestionForm: FormGroup;
  public emailWord: string;
  public phoneWord: string;
  public commentsWord: string;
  public sendWord: string;
  public suggestionWord: string;

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private toastService: ToastService,
  ) {
    translate.get('GLOBAL.PHONE').subscribe((res: string) => {
      this.phoneWord = res;
    });

    translate.get('GLOBAL.EMAIL').subscribe((res: string) => {
      this.emailWord = res;
    });

    translate.get('GLOBAL.COMMENTS').subscribe((res: string) => {
      this.commentsWord = res;
    });

    translate.get('GLOBAL.SEND').subscribe((res: string) => {
      this.sendWord = res;
    });

    translate.get('GLOBAL.SUGGESTION').subscribe((res: string) => {
      this.suggestionWord = res;
    });
  }

  ngOnInit(): void {
    this.suggestionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }

  get email() {
    return this.suggestionForm.get('email');
  }

  get phone() {
    return this.suggestionForm.get('phone');
  }

  get comments() {
    return this.suggestionForm.get('comments');
  }

  public createSuggestion(): void {
    this.isLoading = true;
    this.translate
      .get('GLOBAL.LOADING', { type: this.suggestionWord })
      .subscribe((res: string) => {
        this.sendWord = res;
      });

    setTimeout(() => {
      this.isLoading = false;
      this.translate.get('GLOBAL.SEND').subscribe((res: string) => {
        this.sendWord = res;
      });

      const error = false

      if (!error) {
        this.translate.get('SUGGESTIONS_PAGE.SUCCESS').subscribe((res: string) => {
          this.suggestionForm.reset();
          this.toastService.presentToast(res, 'success');
        });
        
      } else {
        this.translate.get('SUGGESTIONS_PAGE.ERROR').subscribe((res: string) => {
          this.toastService.presentToast(res, 'danger');
        });
      }
    }, 3000);
  }
}
