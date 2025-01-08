import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TxertatuPage } from './txertatu.page';

describe('TxertatuPage', () => {
  let component: TxertatuPage;
  let fixture: ComponentFixture<TxertatuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TxertatuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
