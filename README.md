# Vorkurt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

# Patiently cross the montains


### GitPod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Vorkurt/zilpa)

### StackBlitz
<a href="https://stackblitz.com/github//Vorkurt/zilpa">
  <img
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
    alt="Open in StackBlitz"
  />
</a>

### Install application

Run `npm ci`

Run `ng serve` for a dev server. Navigate to `http://localhost:4201/`. The app will automatically reload if you change
any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Run story book

`npm run storybook`

## Material Shared

For using material table you follow the next step

1. at ngOnInit you need to put the initialize table, it should receive an array of objects like this:

```{
 datasource={
  actions:
  {
    iconClass: "class for icon",
    classCss: " class what you need to maipulate in DOM",
    method: " a function "
  },
  editable: "If you want the table be editable: true/false",
  data for table { ES 6 } ...dataTable
}
```

2. In html template you need to declare

```
<elix-table [dataSource] ="data at you initialized in ngOnInit">
  <elix-column-text className="what class css you want for this column"
  [iconClass]="Optional"
  field="column from table"
  name="what name you want to do"> ...
  <elix-column-area-text require !!!  field name > ...
</elix-table>
```

# and enjoy at this beautiful library

## Angular Json

Add all file from bootstrap such as style

## Tsconfig.app.json

I added some property new such as

#### strictPropertyInitialization : true

which we don't need it anymore to initialization evry property

##### Add The @HostListener and @HostBinding

With the HostBinding we can access either one element.
e.g
@HostBinding('style.backgroundColor') backgroundColor: string = 'color' (must to be initialized this parameter)

### For run test cypress

npm e2e
