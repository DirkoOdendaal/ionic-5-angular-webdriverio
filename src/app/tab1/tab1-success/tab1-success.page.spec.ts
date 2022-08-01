import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab1SuccessPage } from './tab1-success.page';

describe('Tab1SuccessPage', () => {
  let component: Tab1SuccessPage;
  let fixture: ComponentFixture<Tab1SuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1SuccessPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1SuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
