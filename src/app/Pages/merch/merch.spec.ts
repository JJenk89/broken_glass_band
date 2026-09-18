import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Merch } from './merch';
import { MerchService } from '../../merch.service';
import { MerchData } from './merch-model';

describe('Merch', () => {
  let component: Merch;
  let fixture: ComponentFixture<Merch>;
  let merchServiceSpy: any;

  // Fake data that mimics what the real API would return.
  // Keeping it small and obviously "fake" makes tests easy to read.
  const mockMerch: MerchData[] = [
    { id: 1, name: 'Test Shirt', description: 'A shirt for testing.', price: 25 },
    { id: 2, name: 'Test Hoodie', description: 'A hoodie for testing.', price: 45 },
  ];

  beforeEach(async () => {
    // jasmine.createSpyObj creates a fake object that has the same
    // method names as MerchService, but each method is a "spy" —
    // it records calls and lets us control what it returns.
    merchServiceSpy = {
      getMerch: () => of(mockMerch),
    };

    // Tell the spy: whenever getMerch() is called, return an Observable
    // that immediately emits our mock data. `of()` from rxjs creates
    // an Observable that synchronously emits the value(s) you give it.

    await TestBed.configureTestingModule({
      imports: [Merch],
      // This is the key line: whenever anything in this test asks the
      // injector for MerchService, hand it our spy instead of the real thing.
      providers: [{ provide: MerchService, useValue: merchServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(Merch);
    component = fixture.componentInstance;
    // NOTE: fixture.detectChanges() runs change detection, which is what
    // actually triggers Angular to construct the component (run the
    // constructor) and render the template.
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a card for each merchandise item returned by the service', () => {
    // ARRANGE: already done in beforeEach — the spy is set up,
    // the component has been created and change detection has run.

    // ACT: nothing further to do — the constructor already called
    // merchService.getMerch().subscribe(...) during component creation.

    // ASSERT: query the rendered DOM and check it matches our mock data.
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.card');

    expect(cards.length).toBe(2);
    expect(cards[0].querySelector('h3')?.textContent).toContain('Test Shirt');
    expect(cards[1].querySelector('h3')?.textContent).toContain('Test Hoodie');
  });
});