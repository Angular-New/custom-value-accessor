import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'cva-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomCounterComponent),
      multi: true
    }
  ]
})
export class CustomCounterComponent implements ControlValueAccessor {
  @Input({
    alias: 'increment',
    required: true
  })
  public incrementProp: number | undefined;

  public counter = 0;

  public onDecrement(): void {
    if (this.incrementProp) {
      this.counter -= this.incrementProp;
      this.onChange(this.counter); // => уведомляем родительский компонент
    }
  }

  public onIncrement(): void {
    if (this.incrementProp) {
      this.counter += this.incrementProp;
      this.onChange(this.counter); // => уведомляем родительский компонент
    }
  }

  public onReset(): void {
    this.counter = 0;
    this.onChange(this.counter);
  }

  private onChange = (counter: number) => {};
  private onTouched = () => {};

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  writeValue(counter: number): void {
    this.counter = counter;
  }
}
