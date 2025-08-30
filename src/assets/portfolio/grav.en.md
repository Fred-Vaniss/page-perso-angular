### Grav template building test
#### Test project for Why Agency

* February 2021
* Used technologies: PHP, Twig
* Project finished in one day.

{{gallery:0}}

With Why Agency, we had a client who had the particularity of asking a website based on a lightweight and environmentally friendly CMS. We work on WordPress and we knew that we have to find another CMS.

We approached the [Grav](https://getgrav.org/) option, it's an open source CMS based on Symfony, which is *Flat-File* (using raw files instead of a database) and uses Markdown for articles and content.

Grav being CMS less known than WordPress, we have fewer options for themes already built. So I suggested to the team to try the approach of building a Grav theme ourselves from a static HTML theme.

So I started this test using [a free Bootstrap theme "Creative"](https://startbootstrap.com/theme/creative). I had absolutely no experience on building a theme nor the Twig language. It was a total discovery for me and it took me a lot of research on the official Grav documentation and observing how the other themes were constructed.

Before beginning to convert the HTML into Twig theme, I first analyzed the HTML layout to determine how to cut it, what elements will be repeated to display different contents under the same structure, and how the data will be saved.

It took me a while day to build this theme. As I discover new tricks, I even took the time to customize the Back-Office panels according to the module.

This test was successful, I learned a lot about this test and we will be able to create other themes than what is already proposed.
