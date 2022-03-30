# Algolia Airports Search

The repository contains code of search from predefined dataset provided by Algolia using [Instantsearch.js](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/) javascript library. InstantSearch.js provides ready to use seach interface with customization.

The [airport dataset](https://github.com/algolia/datasets) has been used for proof of concept. The given search string list relevant result on screen from indexed data.

## Demo

[https://avneetsingh4555.github.io/algolia-airports-search/](https://avneetsingh4555.github.io/algolia-airports-search/)

## Development Setup

### Prerequisites

- Install [Node.js](https://nodejs.org/en/)

### Setting Up a Project

Install the Angular CLI globally:

```
npm install -g @angular/cli
```

Clone repository:

```
git clone https://github.com/avneetsingh4555/algolia-search.git
```

Run the application:

```
cd ./algolia-search
ng serve
```

The serve command will serve application on following url: `http://localhost:4200/`

### Configure Project

Change configuration in `src\environments\environment.ts` file for own preference.

```

algolia_app_id: 'Application ID',
algolia_search_api_key: 'Search-Only API Key',
algolia_index: 'Index Name',

```
