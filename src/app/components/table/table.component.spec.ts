import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TableComponent } from './table.component';
import { DataServiceMock } from 'src/app/mocks/data.service.mock';
describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let debug: DebugElement;
  let element = HTMLElement;
  let service: DataServiceMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [],
      providers: []
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance; // table test component
        component.ngOnInit();
        debug = fixture.debugElement.query(By.css('form'));
        element = debug.nativeElement;
        // service = debug.injector.get(TriangleChallengeService);
      });
  }));
});
