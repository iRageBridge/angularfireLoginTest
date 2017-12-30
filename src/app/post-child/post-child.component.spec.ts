import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostChildComponent } from './post-child.component';

describe('PostChildComponent', () => {
  let component: PostChildComponent;
  let fixture: ComponentFixture<PostChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
