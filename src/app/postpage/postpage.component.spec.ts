import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpageComponent } from './postpage.component';

describe('PostpageComponent', () => {
  let component: PostpageComponent;
  let fixture: ComponentFixture<PostpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
