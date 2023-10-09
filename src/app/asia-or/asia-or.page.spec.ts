import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsiaOrPage } from './asia-or.page';

describe('AsiaOrPage', () => {
  let component: AsiaOrPage;
  let fixture: ComponentFixture<AsiaOrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsiaOrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
