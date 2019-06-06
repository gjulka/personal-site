#!/bin/bash

npm run build
cd ~/Documents/Projects/website4.0/build
aws s3 sync . s3://gauravjulka2