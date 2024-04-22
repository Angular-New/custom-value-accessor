import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'cva-quantity-form',
  templateUrl: './quantity-form.component.html',
  styleUrl: './quantity-form.component.scss'
})
export class QuantityFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);

  public formQuantity!: FormGroup;
  public readonly increment = 10;

  ngOnInit(): void {
    this.formQuantity = this.fb.group({
      quantity: new FormControl(60, [Validators.required, Validators.max(100), Validators.min(0)]),
      name: ['Ivan', Validators.required],
    });

    this.formQuantity.valueChanges.subscribe(v => console.log(v));
  }
}
