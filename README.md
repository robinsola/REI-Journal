# REI Journal
Remake of [REI Co-op Journal](https://www.rei.com/blog), generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3. May 2018, Robin Sola.

## Description
The REI Co-op Journal is a blog type website where members can share their stories and knowledge on a number of outdoor lifestyle topics, including camping, climbing, snow sports, travel, and more. Blog members are able to log into the website, read news stories, how-to articles, and about top-rated gear related to any of the outdoor topics. Members can also post comments and give ratings each of the stories they read.

## Planning
Below is an image from my notebook separating the main webpage into its components, including detailed descriptions of what each component will contain.
![](readme-plan.JPG)
* __story-model:__ class Story { constructor(public title: string, public author: string, public date: string, public article: string, public rating: number }
*  __nav-component:__ list of links for outdoor topics across top page with login button capability. Each link displays a list of stories.
* __highlights-component:__ includes 3 highlighted stories(title, author, date), each clickable to read the  full-length article.
* __news-component, gear-component, skills-component:__ all include a clickable image to read full-length article. Has (title, author, date) and teaser-text from article.
* __full-length-component:__ individual story with title, author, date, full-length article, and rating.
* __comment-component:__ area under full-length-component. Includes text-area to type out comment about that article, and submit button.

## Installation
* Clone project folder in terminal: `$ git clone` repository url
* In terminal, run `$ npm install` in project folder home directory
* In terminal, run `$ ng serve --open` to view in browser

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Technologies Used
* HTML
* CSS/BOOTSTRAP
* JavaScript/JQUERY
* Typescript
* npm and webpack
* Angular

#### Contact
Contact me through github with comments/questions or email: rsolarms@gmail.com

#### License
Copyright (c) 2018 **_Robin Sola_**
