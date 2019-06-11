#!/bin/bash

aws s3 rm s3://www.gauravjulka.me --recursive
npm run build
cd ~/Documents/Projects/website4.0/build
aws s3 sync . s3://www.gauravjulka.me
cd ~/Documents/Projects/website4.0