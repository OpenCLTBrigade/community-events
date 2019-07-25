# community-events web scrapers

The web scrapers for the community events project crawl community organization websites that don't export their own structured data feeds and turn them into one. 

We're initially targeting building scrapers for:

* [Charlotte Mecklenburg Library](https://www.cmlibrary.org/calendar?page=1)
* [Mecklenburg County Park and Recreation](https://apm.activecommunities.com/mecklenburgparks/Activity_Search)

You can propose additional websites to be included in the crawl and listing as well.

We'll be using a CI tool to build and publish the website to [GitHub Pages](https://pages.github.com). At build time each crawler should be run and output a json file with the scraped data that will be included in the published build artifacts and used by the frontend.

Since the websites do not format their data (such as date listings, locations, etc.) in a uniform way, we don't expect each crawler to output the same data format. Each organization may need its own implementation on the frontend to display the data properly and we might not always be able to provide filters and search tools for the datasets.

## Development Setup

### Requirements

* Python 3 ([MacOS](https://docs.python-guide.org/starting/install3/osx/) | [Others](https://www.python.org/downloads/)) 
* [Scrapy](https://scrapy.org)

## Deployment Strategy
* CI tool will build frontend and run scrapers to pull data and generate json files.
* json files will be added to `/build` directory for the frontend
* Build artifacts are published to the `gh-pages` branch and the site is hosted on GitHub Pages.

## Contributing

**Bugs and feature requests** can be submitted using the [issue tracker](https://github.com/OpenCLTBrigade/community-events/issues).

Submit your own fixes or features in the code by forking the repository, starting a new branch, and submitting your changes in a [pull request](https://github.com/OpenCLTBrigade/community-events/pulls).

You can also meet with the team in person at one of our [events](https://opencharlotte.org/events/).