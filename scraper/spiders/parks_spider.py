import scrapy


class ParksSpider(scrapy.Spider):
    name = "parks"

    # TODO: Move to a config file?
    start_urls = [
        'https://apm.activecommunities.com/mecklenburgparks/Activity_Search'
    ]

    def parse(self, response):
        items = []
        rows = response.xpath('//table//tr')

        for row in rows[2:]:
            location = None
            action_text = None
            action_url = None

            cols = row.xpath('.//td')
            title = cols[1].xpath('.//a//text()')[0].extract()
            date = cols[2].xpath('.//text()')[0].extract()

            # Check for the location. Usually either in an anchor if they provide
            # information or in a span for no link to a map but specific details instead.
            try:
                if len(cols[3].xpath('.//a')) > 0:
                    location = cols[3].xpath('.//a//text()')[0].extract()
                elif len(cols[3].xpath('.//span')) > 0:
                    location = cols[3].xpath('.//span//text()')
            except Exception as e:
                self.log('Could not get location information')
                self.log(e)

            # Is there an action link?
            try:
                if len(cols[4].xpath('.//a')) > 0:
                    action_text = cols[4].xpath('.//a//text()')[0].extract()
                    action_url = cols[4].xpath('.//a//@href').extract()[0]
            except Exception as e:
                self.log('Could not get action link')
                self.log(e)

            self.log(title)
            self.log(date)
            self.log(location)
            self.log(action_text)
            self.log(action_url)
            self.log('----')

            items.append({
                title: title,
                date: date
                location: location,
                actionText: action_text,
                actionUrl: action_url
            })

            # Wat.
            items = items.reverse()

        # filename = 'test.json'
        # with open(filename, 'wb') as f:
        #     f.write(rows)
        #     self.log('Saved file %s' % filename)
