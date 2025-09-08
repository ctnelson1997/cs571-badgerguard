FROM httpd:2.4
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf

RUN mkdir -p /usr/local/apache2/htdocs/tools/su24/badgerguard
COPY ./public/badgerguard.js /usr/local/apache2/htdocs/tools/su24/badgerguard/badgerguard.js

RUN mkdir -p /usr/local/apache2/htdocs/tools/f24/badgerguard
COPY ./public/badgerguard.js /usr/local/apache2/htdocs/tools/f24/badgerguard/badgerguard.js

RUN mkdir -p /usr/local/apache2/htdocs/tools/s25/badgerguard
COPY ./public/badgerguard.js /usr/local/apache2/htdocs/tools/s25/badgerguard/badgerguard.js

RUN mkdir -p /usr/local/apache2/htdocs/tools/su25/badgerguard
COPY ./public/badgerguardv2.js /usr/local/apache2/htdocs/tools/su25/badgerguard/badgerguard.js