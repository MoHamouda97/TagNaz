import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {    
    transform(value, args:string[]) : any {
        if (isNaN(value)) {
            return value;
        }

        return value.toFixed(2);
    }
}