import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {combineLatest} from "rxjs";

@Component({
  selector: 'cva-custom-date-input',
  templateUrl: './custom-date-input.component.html',
  styleUrl: './custom-date-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDateInputComponent),
      multi: true
    }
  ]
})
export class CustomDateInputComponent implements ControlValueAccessor, OnInit {
  public readonly dayControl = new FormControl();
  public readonly monthControl = new FormControl();
  public readonly yearControl = new FormControl();


  public readonly dayInputID = ('day-input-1');
  public readonly monthInputID = ('month-input-1');
  public readonly yearInputID = ('year-input-1');

  public ngOnInit(): void {
    combineLatest([
      this.dayControl.valueChanges,
      this.monthControl.valueChanges,
      this.yearControl.valueChanges
    ]).subscribe(([day, month, year]) => {
      const fieldsAreValid = this.dayControl.valid && this.monthControl.valid && this.yearControl.valid;
      const value = fieldsAreValid ? new Date(year, month - 1, day) : null;

      this.onChange(value);
      this.onTouched();
    });
  }

  private onChange = (value: Date | null) => undefined;
  public registerOnChange(fn: (value: Date | null) => undefined): void {
    this.onChange = fn;
  }

  public onTouched = () => {};
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(date: Date | null): void {
    const value = date ?? new Date();

    const day = value.getDate();
    const month = value.getMonth() + 1;
    const year = value.getFullYear();

    this.dayControl.setValue(day);
    this.monthControl.setValue(month);
    this.yearControl.setValue(year);
  }
}
