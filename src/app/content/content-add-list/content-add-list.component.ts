import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-add-list',
  templateUrl: './content-add-list.component.html',
  styleUrls: ['./content-add-list.component.css']
})
export class ContentAddListComponent implements OnInit {

  contents = [
    {
      'id': 'article',
      'name': 'Article',
      'description': 'Utilisez les articles pour des contenus possédant une temporalité tels que des actualités, des communiqués de presse ou des billets de blog.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
