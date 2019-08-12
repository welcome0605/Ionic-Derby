import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '../reducers/app-settings.reducer';
import { selectAllLanguages } from '../selectors/app-settings.selector';
import { State } from '../reducers';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  public isLoading: boolean = false;
  public errorsImgWord: string[] = [];
  public imageChangedEvent: string = '';
  public languages$: Observable<Languages[]>;
  public profileForm: FormGroup;
  public fullNameWord: string;
  public jobWord: string;
  public emailWord: string;
  public buttonWord: string;

  private createsWord: string;
  private profileWord: string;

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private store: Store<State>,
    private toastService: ToastService,
  ) {
    translate.get('GLOBAL.FULLNAME').subscribe((res: string) => {
      this.fullNameWord = res;
    });

    translate.get('PROFILE_PAGE.JOB').subscribe((res: string) => {
      this.jobWord = res;
    });

    translate.get('GLOBAL.EMAIL').subscribe((res: string) => {
      this.emailWord = res;
    });

    translate.get('GLOBAL.CREATES').subscribe((res: string) => {
      this.createsWord = res;
    });

    translate.get('GLOBAL.PROFILE').subscribe((res: string) => {
      this.profileWord = res;
    });
  }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      job: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      file: [''],
    });

    this.buttonWord = `${this.createsWord} ${this.profileWord}`;
    this.languages$ = this.store.pipe(select(selectAllLanguages));
  }

  get fullName() {
    return this.profileForm.get('fullName');
  }

  get job() {
    return this.profileForm.get('job');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get file() {
    return this.profileForm.get('file');
  }

  public createProfile(): void {
    this.isLoading = true;
    this.translate
      .get('GLOBAL.CREATING', { param: this.profileWord })
      .subscribe((res: string) => {
        this.buttonWord = res;
      });

    const formData = new FormData();
    formData.append('file', this.file.value);

    setTimeout(() => {
      this.isLoading = false;
      this.buttonWord = `${this.createsWord} ${this.profileWord}`;

      const error = false

      if (!error) {
        this.translate.get('PROFILE_PAGE.SUCCESS').subscribe((res: string) => {
          this.profileForm.reset();
          this.imageChangedEvent = '';
          this.toastService.presentToast(res, 'success');
        });
        
      } else {
        this.translate.get('PROFILE_PAGE.ERROR').subscribe((res: string) => {
          this.toastService.presentToast(res, 'danger');
        });
      }
    }, 3000);
  }

  public fileChangeEvent(event: any): void {
    const files: FileList = event.target.files;

    if (files.length > 0) {
      const fileSelected: File = files[0];

      // Size on megabytes.
      const size: number = fileSelected.size / 1024 / 1024;
      const maxSize: number = 3;

      if (!/(jpe?g|png)$/.test(fileSelected.type)) {
        this.translate.get('ERRORS.INVALID_IMG').subscribe((res: string) => {
          this.errorsImgWord.push(res);
        });
      }

      if (size > maxSize) {
        this.translate
          .get('ERRORS.INVALID_SIZE_IMG', { maxSize })
          .subscribe((res: string) => {
            this.errorsImgWord.push(res);
          });
      }

      if (this.errorsImgWord.length === 0) {
        this.imageChangedEvent = event;
        this.file.setValue(fileSelected);
      }
    }
  }
}
