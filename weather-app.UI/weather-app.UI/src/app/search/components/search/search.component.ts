import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  inputLocation: string = '';
  location: string = '';
  
  ngOnInit(): void {
    
  }

  onSearch(e: any){
    console.log(e.value);
    this.inputLocation = this.location;
  }

}
