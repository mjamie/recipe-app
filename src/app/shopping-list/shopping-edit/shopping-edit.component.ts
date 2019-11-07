import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const inName = this.nameInputRef.nativeElement.value;
    const inAmount = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingredient(inName,inAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
