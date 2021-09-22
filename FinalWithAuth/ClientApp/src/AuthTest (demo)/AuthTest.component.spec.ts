/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AuthTestComponent } from './AuthTest.component';

let component: AuthTestComponent;
let fixture: ComponentFixture<AuthTestComponent>;

describe('demo component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AuthTestComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AuthTestComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});