### My personal website redone in Angular

* 2023
* Used technology: Angular
* Project done in three weeks

I got interested in Angular in my free time, so I rebuilt [my React website](modal:fred-react) to Angular.

{{gallery:0}}

The result is much more cleaner thanks to the ability to iterate directly in the HTML template with **ngFor*.

The big difference is for displaying the texts in *career* and the articles in the *portfolio*:
* In **React** I exploited the *JSX* which was specific to it and which I could not use it in Angular.
* To work around the problem in **Angular** I used a module to be able to write my text in **Markdown** which is a cleaner format rather than putting HTML tags in each paragraph.

A new feature  that I also brought to my website is the ability to display an article from my portfolio directly from a query string in the address bar (the address is also updated when an article is displayed).
