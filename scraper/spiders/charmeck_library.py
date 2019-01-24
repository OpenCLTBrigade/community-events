import scrapy
from datetime import datetime
import json

class CharmeckSpider(scrapy.Spider):
    name = 'charmeck_library'

    def __init__(self):
        self.urls = [
            'https://www.cmlibrary.org/calendar?page=1',
            'https://www.cmlibrary.org/calendar?page=2',
            'https://www.cmlibrary.org/calendar?page=3',
            'https://www.cmlibrary.org/calendar?page=4',
            'https://www.cmlibrary.org/calendar?page=5'
        ]
        self.all_events = []

    def start_requests(self):

        for url in self.urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):

        view_content = response.css('div.view-content > *')

        for selector in view_content:
            if len(selector.css('h3::text')) > 0:
                date = datetime.strptime(selector.css('h3::text').extract()[0], '%A, %B %d, %Y').strftime('%Y-%m-%d')
            else:
                event_title = selector.css('div.views-row div.left-contents h2.title a::text').extract()[0]
                time_location = self.stitch_time_location(selector.css('div.left-contents'))
                event_summary = selector.css('div.field div.field-items div.even p::text').extract()[0]
                link = selector.css('div.views-row div.right-contents a.btn-white::attr(href)').extract()[0]

                self.all_events.append(dict(
                    date=date,
                    title=event_title,
                    time_location=time_location,
                    summary=event_summary,
                    link='https://cmlibrary.org' + link
                ))

        payload = dict(
            urls=self.urls,
            data=self.all_events
        )

        with open('cmlibrary.json', 'w') as f:
            json.dump(payload, f, indent=4)

    def stitch_time_location(self, selector):
        join_text = selector.css('div.time-location::text').extract_first()
        date_display_single = selector.css('div.time-location span::text').extract_first()
        sub_location = selector.css('div.time-location a::text').extract_first()

        return date_display_single + join_text + sub_location