import { Pipe, PipeTransform } from '@angular/core';

//custom pipe decorator
@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe
                implements PipeTransform{
//implement pipe interface
        transform(value:string,
            character:string):string{
             return value.replace(character,' ');

            }
}
