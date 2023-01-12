import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, searchText: any): any[] {
    if(!value || !searchText){
      return value;
    }
    //if i remove else condition and try to write in capital letter it not shows any result 
    else {
      searchText = searchText.toLowerCase();
    }

    // return value.filter((book:any)=>{
    //   return book.keys.reduce((bookTitle:any,author:any)=>{
    //     return book.bookTitle || book.author.toLowerCase().includes(searchText);
    //   });
    //   });

    //includes() determines whether an array contains a specified element that we have typed only comparing 
    return value.filter((filterObj: any) => {
      return filterObj.bookTitle.toLowerCase().includes(searchText) || filterObj.author.toLowerCase().includes(searchText);
    })
    }
  
}
