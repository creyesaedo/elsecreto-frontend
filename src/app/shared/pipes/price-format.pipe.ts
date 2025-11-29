import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat',
  standalone: true
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined) {
      return '';
    }
    
    // Formatea el número con punto como separador de miles
    // Ejemplo: 50000 -> "50.000", 120000 -> "120.000"
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}

