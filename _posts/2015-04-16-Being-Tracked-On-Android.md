---
layout: post
title: "GPS Tracking on Android"
description: "Finding how you are tracked on Android"
category: articles
tags: [android, gps, python]
comments: false
---

Like everybody else, I have an Android phone too. If you are a developer you must have noticed a file called as GPS.LOG. It is 
the one file which has all your GPS logs in it. This weekend I spend couple of hours hacking with it. He is the outcome. 

## How you get tracked

First of all, connect your Android device to your computer and copy the gps.log file into your desktop:

```sh
cp /Volumes/NO\ NAME/GPS.LOG ~/projects/gps.log
```

Now, we need to find the good data that contain gps coordinates:
```sh
cat ~/projects/gps.log | grep 'position' > ~/cleangps.log
```

The cleangps.log file contains only data that has coordinates on it.

Now, create a log file that only contains coordinates:

```sh
cat ~/cleangps.log | awk '{print $3, $4}' > ~/gpscord.log
# notice the new file is nothing but values seperated by commas, hence write them as csv
cat ~/gpscord.log > ~/gps.csv
```
This csv file is the basis we use to find that location the GPS log was taken.

Prepare virtualenv and install googlemaps:

```sh
mkvirtualenv maps
pip install -U googlemaps
```

Also, follow the clear instructions at https://github.com/googlemaps/google-maps-services-python#api-keys to find your API key.

Here is the python file `track.py` that would find what these coordinate means and how they related to your daily life and place you are frequent to. 

```python
#! /usr/bin/python
import googlemaps
import csv

gmaps_client = googlemaps.Client(key='<Your Server Key Here>')

with open('~/gps.csv') as csvfile:
    gps = csv.reader(csvfile, delimiter=',')
    for row in gps:
        lat = float(row[0])
        longit = float(row[1])
        reverse_geocode_result = gmaps_client.reverse_geocode((lat, longit))
        formatted_address = reverse_geocode_result[0]['formatted_address']
        print row[0], row[1], formatted_address
        print "=" * 150
```

Run this file in your terminal by and check out the output, you will get freaked out for some moment.  
```sh
python track.py
```
