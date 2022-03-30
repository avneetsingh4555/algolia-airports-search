import { Component } from '@angular/core';
import algoliasearch from 'algoliasearch';
import { environment } from './../environments/environment';

const searchClient = algoliasearch(
  environment.algolia_app_id,
  environment.algolia_search_api_key
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Algolia Search';
  config = {
    indexName: environment.algolia_index,
    searchClient,
  };

  public searchParameters = { query: '' };
}
