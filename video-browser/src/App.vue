<template>
    <div class="container">
        <SearchBar @clickSearch="onClickSearch"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectedVideo"/>
            <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'MyApiKey';
const MOCKUP_CHANNELS = [
    {
      "kind": "youtube#searchResult",
      "etag": "K5pUIC_2OHBs8VjqZp_bvnPAO08",
      "id": {
        "kind": "youtube#video",
        "videoId": "rzj4FFi7wt8"
      },
      "snippet": {
        "publishedAt": "2016-08-22T02:30:49Z",
        "channelId": "UCTl3QQTvqHFjurroKxexy2Q",
        "title": "Men&#39;s Archery Individual Gold Medal Match | Rio 2016 Replay",
        "description": "Bonchan Ku wins gold for Korea in the Archery Men's Individual Gold Medal Match. Subscribe to the Olympics & hit the bell! http://oly.ch/Subscribe Visit the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/rzj4FFi7wt8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/rzj4FFi7wt8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/rzj4FFi7wt8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Olympics",
        "liveBroadcastContent": "none",
        "publishTime": "2016-08-22T02:30:49Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "1vpueuyzLDbzwxx4bKYGu_Yzsc8",
      "id": {
        "kind": "youtube#video",
        "videoId": "BEG-ly9tQGk"
      },
      "snippet": {
        "publishedAt": "2015-01-23T11:56:09Z",
        "channelId": "UCJZ94qp4dtCw0Q5UQqAkg7w",
        "title": "Lars Andersen: A new level of archery",
        "description": "The ultimate archery trick. Proving that Hollywood archery is not historical. It is not possible to tell the whole story about archery in a 5 minute video. so this video ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/BEG-ly9tQGk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/BEG-ly9tQGk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/BEG-ly9tQGk/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "larsandersen23",
        "liveBroadcastContent": "none",
        "publishTime": "2015-01-23T11:56:09Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "ZM5LQ2f5ST0BEYN1ETKBt0XPm44",
      "id": {
        "kind": "youtube#video",
        "videoId": "ilA-uusMHis"
      },
      "snippet": {
        "publishedAt": "2019-09-03T14:00:05Z",
        "channelId": "UCb467UvO4jRgKxWX1oqtkzA",
        "title": "Ana Vazquez v Valentina Acosta – recurve junior women gold | World Youth Championships 2019",
        "description": "Recurve junior women's gold medal match between Ana Paula Vazquez of Mexico and Valentina Acosta Giraldo of Colombia at the 2019 World Archery Youth ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ilA-uusMHis/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ilA-uusMHis/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ilA-uusMHis/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "World Archery",
        "liveBroadcastContent": "none",
        "publishTime": "2019-09-03T14:00:05Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "BuIgGicg73h-vHf9bqhIxi4KZR4",
      "id": {
        "kind": "youtube#video",
        "videoId": "1o9RGnujlkI"
      },
      "snippet": {
        "publishedAt": "2011-05-24T21:48:08Z",
        "channelId": "UCcMfrOX7f4B1ns7wTJe6pSA",
        "title": "Archery - Fast Shooting (Murmansk)",
        "description": "a dagger technique Seregedel's school Initially I named this technique \"kinzhalnaya\" (Adjective from a word \"kinzhal\"(dagger)) because a dagger it is possible to ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/1o9RGnujlkI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/1o9RGnujlkI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/1o9RGnujlkI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "SeregedelReal",
        "liveBroadcastContent": "none",
        "publishTime": "2011-05-24T21:48:08Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "PkruG-RVQWDaQ1WT3c1yMSMG2YQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "7sBqcfm0al4"
      },
      "snippet": {
        "publishedAt": "2020-11-23T17:00:06Z",
        "channelId": "UCftwRNsjfRo08xYE31tkiyw",
        "title": "Olympic Archer Breaks Down Video Game Archery | WIRED",
        "description": "Olympic archer Mackenzie Brown breaks down how archery is portrayed in video games. More and more video games are featuring bows in combat, but just ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/7sBqcfm0al4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/7sBqcfm0al4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/7sBqcfm0al4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "WIRED",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-23T17:00:06Z"
      }
    }
];

export default {
    name: 'App',
    components: {
        SearchBar,
        VideoList,
        VideoDetail
    },
    data() {
        return {
            videos: [],
            selectedVideo: null
        };
    },
    methods: {
        onClickSearch(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => {
                this.videos = response.data.items;
                // this.selectedVideo = null;
            }).catch(() => {
                this.videos = MOCKUP_CHANNELS;
            });
        },
        onVideoSelect(video) {
            this.selectedVideo = video;
        }
    }
};
</script>