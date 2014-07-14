FROM dockerfile/nodejs
ADD . /code
WORKDIR /code
RUN npm install
CMD node bin/www