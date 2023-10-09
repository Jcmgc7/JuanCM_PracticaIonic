import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfricPage } from './afric.page';

describe('AfricPage', () => {
  let component: AfricPage;
  let fixture: ComponentFixture<AfricPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AfricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
