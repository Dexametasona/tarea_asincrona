import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  idiomas:string[]=['Angular', 'CSS', 'vue.js', 'React', 'Python', 'JavaScript'];

  anadir(valor:string){
    this.idiomas.push(valor)
  }

  ngOnInit(): void {
  }

}
