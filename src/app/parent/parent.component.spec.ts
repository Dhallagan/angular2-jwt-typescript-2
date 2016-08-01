/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ParentComponent } from './parent.component';

describe('Component: Parent', () => {
  it('should create an instance', () => {
    let component = new ParentComponent();
    expect(component).toBeTruthy();
  });
});
