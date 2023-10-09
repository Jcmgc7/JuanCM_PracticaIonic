import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmericaSurPage } from './america-sur.page';

describe('AmericaSurPage', () => {
  let component: AmericaSurPage;
  let fixture: ComponentFixture<AmericaSurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AmericaSurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
