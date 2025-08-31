### My personal website redone in Angular

* **Date**: 2023
* **Technology**: Angular
* **Duration**: Three weeks

After experimenting with React, I wanted to explore Angular in my free time. To do so, I rebuilt [my original website developed with React](modal:fred-react) using Angular.

{{gallery:0}}

The result is more structured, thanks in particular to Angular’s ability to iterate directly within HTML templates using **ngFor**.

The main difference lies in the way text is displayed in the *timeline* and *portfolio* sections:

*	In **React**, I relied on **JSX**, which is specific to that framework and not available in Angular.
*	In **Angular**, I worked around this by using a module that allows content to be written in **Markdown**, a cleaner and more maintainable format than embedding raw HTML tags into each paragraph.

I also introduced a new feature: the ability to display a portfolio article directly through a query string in the URL. The address updates automatically when an article is opened, making sharing and navigation smoother.
