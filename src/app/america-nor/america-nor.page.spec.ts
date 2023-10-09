import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmericaNorPage } from './america-nor.page';

describe('AmericaNorPage', () => {
  let component: AmericaNorPage;
  let fixture: ComponentFixture<AmericaNorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AmericaNorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
