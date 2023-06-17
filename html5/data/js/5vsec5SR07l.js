window.globalProvideData(
  "slide",
  {
  "title": "Diapositiva sin título",
  "trackViews": true,
  "showMenuResultIcon": false,
  "viewGroupId": "",
  "historyGroupId": "",
  "videoZoom": "",
  "scrolling": false,
  "transition": "appear",
  "transDuration": 0,
  "transDir": 1,
  "wipeTrans": false,
  "slideLock": false,
  "navIndex": -1,
  "globalAudioId": "",
  "thumbnailid": "",
  "slideNumberInScene": 30,
  "includeInSlideCounts": true,
  "presenterRef": {
    "id": "none"
  },
  "showAnimationId": "",
  "lmsId": "Slide30",
  "width": 960,
  "height": 540,
  "resume": false,
  "background": {
    "type": "fill",
    "fill": {
      "type": "linear",
      "rotation": 90,
      "colors": [
        {
          "kind": "color",
          "rgb": "0xFFFFFF",
          "alpha": 100,
          "stop": 0
        }
      ]
    }
  },
  "id": "5vsec5SR07l",
  "actionGroups": {
    "ActGrpOnNextButtonClick": {
      "kind": "actiongroup",
      "actions": [
        {
          "kind": "gotoplay",
          "window": "_current",
          "wndtype": "normal",
          "objRef": {
            "type": "string",
            "value": "_player.62Io9d9R7HS.5WZ1Q5rVxVC"
          }
        }
      ]
    },
    "ActGrpOnAllTimelinesComplete": {
      "kind": "actiongroup",
      "actions": [
        {
          "kind": "exe_actiongroup",
          "id": "ActGrpOnNextButtonClick"
        }
      ]
    },
    "ActGrpOnPrevButtonClick": {
      "kind": "actiongroup",
      "actions": [
        {
          "kind": "history_prev"
        }
      ]
    },
    "NavigationRestrictionNextSlide_5vsec5SR07l": {
      "kind": "actiongroup",
      "actions": [
        {
          "kind": "exe_actiongroup",
          "id": "ActGrpOnNextButtonClick"
        }
      ]
    },
    "NavigationRestrictionPreviousSlide_5vsec5SR07l": {
      "kind": "actiongroup",
      "actions": [
        {
          "kind": "exe_actiongroup",
          "id": "ActGrpOnPrevButtonClick"
        }
      ]
    }
  },
  "events": [
    {
      "kind": "onslidestart",
      "actions": [
        {
          "kind": "if_action",
          "condition": {
            "statement": {
              "kind": "compare",
              "operator": "eq",
              "valuea": "_playerVars.#hasPrevHistory",
              "typea": "var",
              "valueb": false,
              "typeb": "boolean"
            }
          },
          "thenActions": [
            {
              "kind": "enable_window_control",
              "name": "previous",
              "enable": false,
              "affectTabStop": true
            }
          ]
        }
      ]
    },
    {
      "kind": "onbeforeslidein",
      "actions": [
        {
          "kind": "if_action",
          "condition": {
            "statement": {
              "kind": "compare",
              "operator": "eq",
              "valuea": "$WindowId",
              "typea": "property",
              "valueb": "_frame",
              "typeb": "string"
            }
          },
          "thenActions": [
            {
              "kind": "set_frame_layout",
              "name": "pxabnsnfns01011100101"
            }
          ],
          "elseActions": [
            {
              "kind": "set_window_control_layout",
              "name": "pxabnsnfns01011100101"
            }
          ]
        }
      ]
    },
    {
      "kind": "onallopentimelinescomplete",
      "actions": [
        {
          "kind": "exe_actiongroup",
          "id": "ActGrpOnAllTimelinesComplete"
        }
      ]
    },
    {
      "kind": "onnextslide",
      "actions": [
        {
          "kind": "exe_actiongroup",
          "id": "NavigationRestrictionNextSlide_5vsec5SR07l"
        }
      ]
    },
    {
      "kind": "onprevslide",
      "actions": [
        {
          "kind": "exe_actiongroup",
          "id": "NavigationRestrictionPreviousSlide_5vsec5SR07l"
        }
      ]
    },
    {
      "kind": "ontimelinecomplete",
      "actions": [
        {
          "kind": "gotoplay",
          "window": "_current",
          "wndtype": "normal",
          "objRef": {
            "type": "string",
            "value": "_player.62Io9d9R7HS.5WZ1Q5rVxVC"
          }
        }
      ]
    },
    {
      "kind": "ontransitionin",
      "actions": [
        {
          "kind": "adjustvar",
          "variable": "_player.LastSlideViewed_62voLKkyAR3",
          "operator": "set",
          "value": {
            "type": "string",
            "value": "_player."
          }
        },
        {
          "kind": "adjustvar",
          "variable": "_player.LastSlideViewed_62voLKkyAR3",
          "operator": "add",
          "value": {
            "type": "property",
            "value": "$AbsoluteId"
          }
        }
      ]
    }
  ],
  "slideLayers": [
    {
      "audiolib": [
        {
          "kind": "audio",
          "assetId": 294,
          "id": "69ScL8to4B6"
        }
      ],
      "enableSeek": true,
      "enableReplay": true,
      "timeline": {
        "duration": 18281,
        "events": [
          {
            "kind": "ontimelinetick",
            "time": 0,
            "actions": [
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6kJY5NHeYJQ"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6fIjzynLztn"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6g4hb2sm9fF"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6gQ9JEKf5Up"
                }
              },
              {
                "kind": "media_seek",
                "position": 0,
                "objRef": {
                  "type": "string",
                  "value": "69ScL8to4B6"
                }
              },
              {
                "kind": "media_play",
                "objRef": {
                  "type": "string",
                  "value": "69ScL8to4B6"
                }
              },
              {
                "kind": "set_volume",
                "volume": 75,
                "objRef": {
                  "type": "string",
                  "value": "69ScL8to4B6"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6izuwLIdrku"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "5h6RTmz69cD"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6Om9lRGI9VS"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6Om9lRGI9VS.6ob48DzOdOZ"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6Om9lRGI9VS.5zJNKRjyjtd"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6Om9lRGI9VS.6kj9kmE4Dj5"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6Om9lRGI9VS.6ZTqQmFLqPS"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6Om9lRGI9VS.6QaecAJgIVX"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6Om9lRGI9VS.6WdZMeXOKnK"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6Om9lRGI9VS.5VgC87Clk6M"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6Om9lRGI9VS.6ZcIysACpOo"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6dSaBASN2P0"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6dSaBASN2P0.5scoTeKq3mC"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6dSaBASN2P0.6ZwGJAvWBvF"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6dSaBASN2P0.5VggEGVu5n7"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6dSaBASN2P0.6pvTxOPrXbg"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6dSaBASN2P0.5XneTrsOYhS"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6dSaBASN2P0.6Uh9tdWy4jB"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "5vrVHZ1Dsy9"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6E01TSsmPPf"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6B7YcTz7JDZ"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6NVj2tbBAyh"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "5aq9dOkiGLU"
                }
              }
            ]
          },
          {
            "kind": "ontimelinetick",
            "time": 6984,
            "actions": [
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6FLfNEso6Lm"
                }
              }
            ]
          },
          {
            "kind": "ontimelinetick",
            "time": 7000,
            "actions": [
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6IVEcSzmQNP"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6IVEcSzmQNP.6NNfWYWZjRo"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6IVEcSzmQNP.5asCAniXeyA"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6IVEcSzmQNP.6EunuVyuq61"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "64uGtcuxgJw"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "5xP4PVIXGDv"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "69MHR0IUjb8"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6Quz7HDSLAm"
                }
              }
            ]
          },
          {
            "kind": "ontimelinetick",
            "time": 8750,
            "actions": [
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6k1cGWuSCF2"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "5mzn3pOgxcl"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6fUydl3W2ZU"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "67Ako7WT0Zt"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "5sMnqtNr6nu"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "5sMnqtNr6nu.6jWTT5J7lSb"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "5sMnqtNr6nu.5ge46e8hhRv"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "5sMnqtNr6nu.6MHtuJj7sGH"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "5ivQYziqCIg"
                }
              }
            ]
          },
          {
            "kind": "ontimelinetick",
            "time": 13750,
            "actions": [
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "67Oj5tMS3nu"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6icuQXb0TSM"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "5UzHNRtmlib"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "5kdaE24CTSM"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "5kdaE24CTSM.5lPsKQsqLNW"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "5kdaE24CTSM.6jzJ6pddqo3"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "5kdaE24CTSM.5r4OfCU1Lv0"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6UF8tzcAnZf"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "5aWMGC9aeQi"
                }
              }
            ]
          },
          {
            "kind": "ontimelinetick",
            "time": 16500,
            "actions": [
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6URaBu9dqa0"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6rgLWag28xy"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "6GcKAbID8Gi"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6GcKAbID8Gi.6aPBltAQPX8"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6GcKAbID8Gi.5aX6HNKADyY"
                }
              },
              {
                "kind": "show",
                "transition": "appear",
                "objRef": {
                  "type": "string",
                  "value": "6GcKAbID8Gi.6rRvU0qboE5"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "5glnNtEKLbw"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "5WoZIIeSAyb"
                }
              },
              {
                "kind": "show",
                "transition": "custom",
                "animationId": "Entrance",
                "reverse": false,
                "objRef": {
                  "type": "string",
                  "value": "5elgZuwzc1v"
                }
              }
            ]
          }
        ]
      },
      "objects": [
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "shapemaskId": "",
          "xPos": 0,
          "yPos": -2,
          "tabIndex": 2,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 481,
          "rotateYPos": 28.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 1,
          "scrolling": false,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 963,
              "bottom": 58,
              "altText": "Google Shape;120;gfe5e8fed11_0_194",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 610
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 963,
              "height": 58,
              "strokewidth": 0
            }
          },
          "width": 962,
          "height": 57,
          "resume": false,
          "useHandCursor": true,
          "id": "6NVj2tbBAyh"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "image",
          "cliptobounds": false,
          "defaultAction": "",
          "imagelib": [
            {
              "kind": "imagedata",
              "assetId": 225,
              "id": "01",
              "url": "story_content/659ad2t05ZW.png",
              "type": "normal",
              "altText": "Google Shape;16;p45",
              "width": 286,
              "height": 78,
              "mobiledx": 0,
              "mobiledy": 0
            }
          ],
          "shapemaskId": "",
          "xPos": 45,
          "yPos": 8,
          "tabIndex": 15,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 71.5,
          "rotateYPos": 19.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 2,
          "scrolling": false,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 143,
              "bottom": 39,
              "altText": "Google Shape;16;p45",
              "altTextOverridesText": true,
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 611
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 143,
              "height": 39,
              "strokewidth": 0
            }
          },
          "width": 143,
          "height": 39,
          "resume": false,
          "useHandCursor": true,
          "id": "5aq9dOkiGLU"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "image",
          "cliptobounds": false,
          "defaultAction": "",
          "imagelib": [
            {
              "kind": "imagedata",
              "assetId": 270,
              "id": "01",
              "url": "story_content/67O75vJWG0v.png",
              "type": "normal",
              "altText": "layout_tdc.jpg",
              "width": 1040,
              "height": 816,
              "mobiledx": 0,
              "mobiledy": 0
            }
          ],
          "shapemaskId": "",
          "xPos": 438,
          "yPos": 134,
          "tabIndex": 26,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 260,
          "rotateYPos": 204,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 3,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 520,
              "bottom": 408,
              "altText": "layout_tdc.jpg",
              "altTextOverridesText": true,
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 734
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 520,
              "height": 408,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 520,
          "height": 408,
          "resume": false,
          "useHandCursor": true,
          "id": "6kJY5NHeYJQ"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "shapemaskId": "",
          "xPos": 0,
          "yPos": -5,
          "tabIndex": 0,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 481,
          "rotateYPos": 31.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 4,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 963,
              "bottom": 63,
              "altText": "Google Shape;886;p17",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 735
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 963,
              "height": 63,
              "strokewidth": 0
            }
          },
          "width": 962,
          "height": 63,
          "resume": false,
          "useHandCursor": true,
          "id": "6fIjzynLztn"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "shapemaskId": "",
          "xPos": 738,
          "yPos": 5,
          "tabIndex": 13,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 0,
          "rotateYPos": 18.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 5,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": -2,
              "top": -2,
              "right": 2,
              "bottom": 39,
              "altText": "Google Shape;676;p40",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 616
              }
            },
            "html5data": {
              "xPos": -2,
              "yPos": -2,
              "width": 4,
              "height": 41,
              "strokewidth": 1
            }
          },
          "width": 0,
          "height": 37,
          "resume": false,
          "useHandCursor": true,
          "id": "6g4hb2sm9fF"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "6gQ9JEKf5Up_-28927171",
              "id": "01",
              "linkId": "txt__default_6gQ9JEKf5Up",
              "type": "acctext",
              "xPos": 3,
              "yPos": 3,
              "xAccOffset": 3,
              "yAccOffset": 3,
              "width": 503,
              "height": 49,
              "valign": "center",
              "wordwrap": true,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "PRODUCT PLACEMENT OPPORTUNITIES",
                        "style": {
                          "fontFamily": Serif
                          ,
                          "fontSize": 24,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 28.96,
                          "descent": 4.64,
                          "leading": 4.8,
                          "underlinePosition": 0,
                          "underlineThickness": 2.272,
                          "xHeight": 19.2
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "left",
                      "listLevel": 1,
                      "lineSpacingRule": "atLeast",
                      "lineSpacing": 25.2,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 31,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 472,
                "bottom": 50,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 624
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 134,
          "yPos": -5,
          "tabIndex": 1,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 254.5,
          "rotateYPos": 27.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 6,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 510,
              "bottom": 56,
              "altText": "PRODUCT PLACEMENT OPPORTUNITIES",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 623
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 510,
              "height": 56,
              "strokewidth": 0
            }
          },
          "width": 509,
          "height": 55,
          "resume": false,
          "useHandCursor": true,
          "id": "6gQ9JEKf5Up"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "image",
          "cliptobounds": false,
          "defaultAction": "",
          "imagelib": [
            {
              "kind": "imagedata",
              "assetId": 271,
              "id": "01",
              "url": "story_content/5g1H7GfjiwD.png",
              "type": "normal",
              "altText": "Picture 2.png",
              "width": 206,
              "height": 180,
              "mobiledx": 0,
              "mobiledy": 0
            }
          ],
          "shapemaskId": "",
          "xPos": 626,
          "yPos": 255,
          "tabIndex": 37,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 51.5,
          "rotateYPos": 45,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 7,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 103,
              "bottom": 90,
              "altText": "Picture 2.png",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 736
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 103,
              "height": 90,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "position": {
                    "relativerotation": false,
                    "relativestartpoint": false,
                    "path": [
                      {
                        "kind": "segment",
                        "type": "line",
                        "anchora": {
                          "x": "$RawXPos",
                          "y": "$RawYPos",
                          "dx": "0",
                          "dy": "290"
                        },
                        "anchorb": {
                          "x": "$RawXPos",
                          "y": "$RawYPos",
                          "dx": "0",
                          "dy": "0"
                        }
                      }
                    ],
                    "duration": 750,
                    "easing": "cubic",
                    "easingdir": "easeout"
                  }
                }
              ]
            }
          ],
          "width": 103,
          "height": 90,
          "resume": false,
          "useHandCursor": true,
          "id": "6k1cGWuSCF2"
        },
        {
          "kind": "objgroup",
          "objects": [
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 272,
                  "id": "01",
                  "url": "story_content/5d26dZRkXUu.png",
                  "type": "normal",
                  "altText": "Picture 4.png",
                  "width": 46,
                  "height": 90,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 0,
              "yPos": 2,
              "tabIndex": 32,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 11.5,
              "rotateYPos": 22.5,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 1,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 23,
                  "bottom": 45,
                  "altText": "Picture 4.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 737
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 23,
                  "height": 45,
                  "strokewidth": 0
                }
              },
              "width": 23,
              "height": 45,
              "resume": false,
              "useHandCursor": true,
              "id": "6NNfWYWZjRo"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 273,
                  "id": "01",
                  "url": "story_content/6oCInAJI5TT.png",
                  "type": "normal",
                  "altText": "Picture 5.png",
                  "width": 46,
                  "height": 90,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 36,
              "yPos": 0,
              "tabIndex": 30,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 11.5,
              "rotateYPos": 22.5,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 2,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 23,
                  "bottom": 45,
                  "altText": "Picture 5.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 737
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 23,
                  "height": 45,
                  "strokewidth": 0
                }
              },
              "width": 23,
              "height": 45,
              "resume": false,
              "useHandCursor": true,
              "id": "5asCAniXeyA"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 274,
                  "id": "01",
                  "url": "story_content/6j8kGdkchjT.png",
                  "type": "normal",
                  "altText": "Picture 6.png",
                  "width": 46,
                  "height": 90,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 18,
              "yPos": 1,
              "tabIndex": 31,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 11.5,
              "rotateYPos": 22.5,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 3,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 23,
                  "bottom": 45,
                  "altText": "Picture 6.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 737
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 23,
                  "height": 45,
                  "strokewidth": 0
                }
              },
              "width": 23,
              "height": 45,
              "resume": false,
              "useHandCursor": true,
              "id": "6EunuVyuq61"
            }
          ],
          "accType": "text",
          "altText": "Group 2",
          "shapemaskId": "",
          "xPos": 224,
          "yPos": 230,
          "tabIndex": 29,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 29.5,
          "rotateYPos": 23,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "rotation": 0,
          "depth": 8,
          "scrolling": true,
          "shuffleLock": false,
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 59,
          "height": 46,
          "resume": false,
          "useHandCursor": true,
          "id": "6IVEcSzmQNP"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "shapemaskId": "",
          "xPos": 27,
          "yPos": 373,
          "tabIndex": 60,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 91,
          "rotateYPos": 17.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 9,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 182,
              "bottom": 35,
              "altText": "Google Shape;915;p74",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 625
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 182,
              "height": 35,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 182,
          "height": 35,
          "resume": false,
          "useHandCursor": true,
          "id": "6URaBu9dqa0"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "6rgLWag28xy_1047660212",
              "id": "01",
              "linkId": "txt__default_6rgLWag28xy",
              "type": "acctext",
              "xPos": 3,
              "yPos": 3,
              "xAccOffset": 3,
              "yAccOffset": 3,
              "width": 161,
              "height": 37,
              "valign": "top",
              "wordwrap": true,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "GRAB AND GO OPEN COOLER",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 11,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 15.297,
                          "descent": 3.183,
                          "leading": 0,
                          "underlinePosition": -1.467,
                          "underlineThickness": 0.733,
                          "xHeight": 7.245
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "center",
                      "listLevel": 1,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 23,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 153,
                "bottom": 40,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 738
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 35,
          "yPos": 370,
          "tabIndex": 59,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 83.5,
          "rotateYPos": 21.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 10,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 167,
              "bottom": 43,
              "altText": "GRAB AND GO OPEN COOLER",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 650
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 167,
              "height": 43,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 167,
          "height": 43,
          "resume": false,
          "useHandCursor": true,
          "id": "6rgLWag28xy"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "64uGtcuxgJw_-1842429171",
              "id": "01",
              "linkId": "txt__default_64uGtcuxgJw",
              "type": "acctext",
              "xPos": 7,
              "yPos": 3,
              "xAccOffset": 7,
              "yAccOffset": 3,
              "width": 84,
              "height": 13,
              "valign": "top",
              "wordwrap": true,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "12oz can",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 8,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 9.653,
                          "descent": 1.547,
                          "leading": 1.6,
                          "underlinePosition": 0,
                          "underlineThickness": 0.757,
                          "xHeight": 6.4
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "center",
                      "listLevel": 1,
                      "lineSpacingRule": "atLeast",
                      "lineSpacing": 9.45,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 8,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 70,
                "bottom": 18,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 656
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 257,
          "yPos": 244,
          "tabIndex": 36,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 49,
          "rotateYPos": 9.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 11,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 98,
              "bottom": 19,
              "altText": "12oz can",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 652
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 98,
              "height": 19,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 98,
          "height": 19,
          "resume": false,
          "useHandCursor": true,
          "id": "64uGtcuxgJw"
        },
        {
          "kind": "objgroup",
          "objects": [
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 275,
                  "id": "01",
                  "url": "story_content/6SO1QVV1GWP.png",
                  "type": "normal",
                  "altText": "Picture 7.png",
                  "width": 46,
                  "height": 90,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 0,
              "yPos": 2,
              "tabIndex": 58,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 11.5,
              "rotateYPos": 22.5,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 1,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 23,
                  "bottom": 45,
                  "altText": "Picture 7.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 737
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 23,
                  "height": 45,
                  "strokewidth": 0
                }
              },
              "width": 23,
              "height": 45,
              "resume": false,
              "useHandCursor": true,
              "id": "6aPBltAQPX8"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 273,
                  "id": "01",
                  "url": "story_content/6oCInAJI5TT.png",
                  "type": "normal",
                  "altText": "Picture 5.png",
                  "width": 46,
                  "height": 90,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 36,
              "yPos": 0,
              "tabIndex": 56,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 11.5,
              "rotateYPos": 22.5,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 2,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 23,
                  "bottom": 45,
                  "altText": "Picture 5.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 737
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 23,
                  "height": 45,
                  "strokewidth": 0
                }
              },
              "width": 23,
              "height": 45,
              "resume": false,
              "useHandCursor": true,
              "id": "5aX6HNKADyY"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 274,
                  "id": "01",
                  "url": "story_content/6j8kGdkchjT.png",
                  "type": "normal",
                  "altText": "Picture 6.png",
                  "width": 46,
                  "height": 90,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 18,
              "yPos": 1,
              "tabIndex": 57,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 11.5,
              "rotateYPos": 22.5,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 3,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 23,
                  "bottom": 45,
                  "altText": "Picture 6.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 737
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 23,
                  "height": 45,
                  "strokewidth": 0
                }
              },
              "width": 23,
              "height": 45,
              "resume": false,
              "useHandCursor": true,
              "id": "6rRvU0qboE5"
            }
          ],
          "accType": "text",
          "altText": "Group 14",
          "shapemaskId": "",
          "xPos": 218,
          "yPos": 367,
          "tabIndex": 55,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 29.5,
          "rotateYPos": 23,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "rotation": 0,
          "depth": 12,
          "scrolling": true,
          "shuffleLock": false,
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 59,
          "height": 46,
          "resume": false,
          "useHandCursor": true,
          "id": "6GcKAbID8Gi"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "5glnNtEKLbw_-1792670554",
              "id": "01",
              "linkId": "txt__default_5glnNtEKLbw",
              "type": "acctext",
              "xPos": 7,
              "yPos": 3,
              "xAccOffset": 7,
              "yAccOffset": 3,
              "width": 84,
              "height": 13,
              "valign": "top",
              "wordwrap": true,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "12oz can",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 8,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 9.653,
                          "descent": 1.547,
                          "leading": 1.6,
                          "underlinePosition": 0,
                          "underlineThickness": 0.757,
                          "xHeight": 6.4
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "center",
                      "listLevel": 1,
                      "lineSpacingRule": "atLeast",
                      "lineSpacing": 9.45,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 8,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 70,
                "bottom": 18,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 656
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 254,
          "yPos": 381,
          "tabIndex": 62,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 49,
          "rotateYPos": 9.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 13,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 98,
              "bottom": 19,
              "altText": "12oz can",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 652
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 98,
              "height": 19,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 98,
          "height": 19,
          "resume": false,
          "useHandCursor": true,
          "id": "5glnNtEKLbw"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "5xP4PVIXGDv_1001008869",
              "id": "01",
              "linkId": "txt__default_5xP4PVIXGDv",
              "type": "acctext",
              "xPos": 7,
              "yPos": 3,
              "xAccOffset": 7,
              "yAccOffset": 3,
              "width": 5,
              "height": 16,
              "valign": "center",
              "wordwrap": false,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "1",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 10,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 12.067,
                          "descent": 1.933,
                          "leading": 2,
                          "underlinePosition": 0,
                          "underlineThickness": 0.947,
                          "xHeight": 8
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "left",
                      "listLevel": 1,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 1,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 12,
                "bottom": 21,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 740
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 2,
          "yPos": 243,
          "tabIndex": 35,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 9.5,
          "rotateYPos": 11,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 14,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 19,
              "bottom": 22,
              "altText": "1",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 739
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 19,
              "height": 22,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 19,
          "height": 22,
          "resume": false,
          "useHandCursor": true,
          "id": "5xP4PVIXGDv"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "5WoZIIeSAyb_1018508537",
              "id": "01",
              "linkId": "txt__default_5WoZIIeSAyb",
              "type": "acctext",
              "xPos": 7,
              "yPos": 3,
              "xAccOffset": 7,
              "yAccOffset": 3,
              "width": 7,
              "height": 16,
              "valign": "center",
              "wordwrap": false,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "4",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 10,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 12.067,
                          "descent": 1.933,
                          "leading": 2,
                          "underlinePosition": 0,
                          "underlineThickness": 0.947,
                          "xHeight": 8
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "left",
                      "listLevel": 1,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 1,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 14,
                "bottom": 21,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 742
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 4,
          "yPos": 380,
          "tabIndex": 61,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 10.5,
          "rotateYPos": 11,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 15,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 21,
              "bottom": 22,
              "altText": "4",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 741
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 21,
              "height": 22,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 21,
          "height": 22,
          "resume": false,
          "useHandCursor": true,
          "id": "5WoZIIeSAyb"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "shapemaskId": "",
          "xPos": 27,
          "yPos": 326,
          "tabIndex": 52,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 91,
          "rotateYPos": 17.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 16,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 182,
              "bottom": 35,
              "altText": "Google Shape;915;p74",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 633
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 182,
              "height": 35,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 182,
          "height": 35,
          "resume": false,
          "useHandCursor": true,
          "id": "67Oj5tMS3nu"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "6icuQXb0TSM_1142548382",
              "id": "01",
              "linkId": "txt__default_6icuQXb0TSM",
              "type": "acctext",
              "xPos": 3,
              "yPos": 3,
              "xAccOffset": 3,
              "yAccOffset": 3,
              "width": 178,
              "height": 37,
              "valign": "top",
              "wordwrap": true,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "ENTRYWAY – LOBBY, \\n",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 11,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 15.297,
                          "descent": 3.183,
                          "leading": 0,
                          "underlinePosition": -1.467,
                          "underlineThickness": 0.733,
                          "xHeight": 7.245
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "center",
                      "listLevel": 1,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 19,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  },
                  {
                    "spans": [
                      {
                        "text": "PERIMETER or END CAP",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 11,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 15.297,
                          "descent": 3.183,
                          "leading": 0,
                          "underlinePosition": -1.467,
                          "underlineThickness": 0.733,
                          "xHeight": 7.245
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "center",
                      "listLevel": 1,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 20,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 171,
                "bottom": 40,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 744
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 25,
          "yPos": 321,
          "tabIndex": 47,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 92,
          "rotateYPos": 21.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 17,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 184,
              "bottom": 43,
              "altText": "ENTRYWAY – LOBBY, \\nPERIMETER or END CAP",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 743
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 184,
              "height": 43,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 184,
          "height": 43,
          "resume": false,
          "useHandCursor": true,
          "id": "6icuQXb0TSM"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "5UzHNRtmlib_1996630386",
              "id": "01",
              "linkId": "txt__default_5UzHNRtmlib",
              "type": "acctext",
              "xPos": 7,
              "yPos": 3,
              "xAccOffset": 7,
              "yAccOffset": 3,
              "width": 84,
              "height": 13,
              "valign": "top",
              "wordwrap": true,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "4pk 12oz can",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 8,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 9.653,
                          "descent": 1.547,
                          "leading": 1.6,
                          "underlinePosition": 0,
                          "underlineThickness": 0.757,
                          "xHeight": 6.4
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "center",
                      "listLevel": 1,
                      "lineSpacingRule": "atLeast",
                      "lineSpacing": 9.45,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 12,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 79,
                "bottom": 18,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 653
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 295,
          "yPos": 334,
          "tabIndex": 54,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 49,
          "rotateYPos": 9.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 18,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 98,
              "bottom": 19,
              "altText": "4pk 12oz can",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 652
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 98,
              "height": 19,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 98,
          "height": 19,
          "resume": false,
          "useHandCursor": true,
          "id": "5UzHNRtmlib"
        },
        {
          "kind": "objgroup",
          "objects": [
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 276,
                  "id": "01",
                  "url": "story_content/5jUFOv0YrrV.png",
                  "type": "normal",
                  "altText": "Picture 10.png",
                  "width": 68,
                  "height": 84,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 0,
              "yPos": 0,
              "tabIndex": 49,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 17,
              "rotateYPos": 21,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 1,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 34,
                  "bottom": 42,
                  "altText": "Picture 10.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 647
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 34,
                  "height": 42,
                  "strokewidth": 0
                }
              },
              "width": 34,
              "height": 42,
              "resume": false,
              "useHandCursor": true,
              "id": "5lPsKQsqLNW"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 277,
                  "id": "01",
                  "url": "story_content/6jx6NUlpdrP.png",
                  "type": "normal",
                  "altText": "Picture 11.png",
                  "width": 76,
                  "height": 84,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 30,
              "yPos": 0,
              "tabIndex": 50,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 19,
              "rotateYPos": 21,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 2,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 38,
                  "bottom": 42,
                  "altText": "Picture 11.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 648
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 38,
                  "height": 42,
                  "strokewidth": 0
                }
              },
              "width": 38,
              "height": 42,
              "resume": false,
              "useHandCursor": true,
              "id": "6jzJ6pddqo3"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 278,
                  "id": "01",
                  "url": "story_content/6ozEEu8sMwc.png",
                  "type": "normal",
                  "altText": "Picture 12.png",
                  "width": 75,
                  "height": 84,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 59,
              "yPos": 2,
              "tabIndex": 51,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 19,
              "rotateYPos": 21,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 3,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 38,
                  "bottom": 42,
                  "altText": "Picture 12.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 649
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 38,
                  "height": 42,
                  "strokewidth": 0
                }
              },
              "width": 38,
              "height": 42,
              "resume": false,
              "useHandCursor": true,
              "id": "5r4OfCU1Lv0"
            }
          ],
          "accType": "text",
          "altText": "Group 30",
          "shapemaskId": "",
          "xPos": 215,
          "yPos": 322,
          "tabIndex": 48,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 48,
          "rotateYPos": 22,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "rotation": 0,
          "depth": 19,
          "scrolling": true,
          "shuffleLock": false,
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 96,
          "height": 44,
          "resume": false,
          "useHandCursor": true,
          "id": "5kdaE24CTSM"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "5mzn3pOgxcl_-607557759",
              "id": "01",
              "linkId": "txt__default_5mzn3pOgxcl",
              "type": "acctext",
              "xPos": 7,
              "yPos": 3,
              "xAccOffset": 7,
              "yAccOffset": 3,
              "width": 7,
              "height": 16,
              "valign": "center",
              "wordwrap": false,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "2",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 10,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 12.067,
                          "descent": 1.933,
                          "leading": 2,
                          "underlinePosition": 0,
                          "underlineThickness": 0.947,
                          "xHeight": 8
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "left",
                      "listLevel": 1,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 1,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 14,
                "bottom": 21,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 745
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 2,
          "yPos": 290,
          "tabIndex": 45,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 10.5,
          "rotateYPos": 11,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 20,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 21,
              "bottom": 22,
              "altText": "2",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 741
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 21,
              "height": 22,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 21,
          "height": 22,
          "resume": false,
          "useHandCursor": true,
          "id": "5mzn3pOgxcl"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "shapemaskId": "",
          "xPos": 27,
          "yPos": 283,
          "tabIndex": 44,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 91,
          "rotateYPos": 17.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 21,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 182,
              "bottom": 35,
              "altText": "Google Shape;915;p74",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 636
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 182,
              "height": 35,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 182,
          "height": 35,
          "resume": false,
          "useHandCursor": true,
          "id": "6fUydl3W2ZU"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "67Ako7WT0Zt_-1259666436",
              "id": "01",
              "linkId": "txt__default_67Ako7WT0Zt",
              "type": "acctext",
              "xPos": 3,
              "yPos": 3,
              "xAccOffset": 3,
              "yAccOffset": 3,
              "width": 161,
              "height": 37,
              "valign": "top",
              "wordwrap": true,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "WATER AISLE/ FLAVOR SODAS AISLE",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 11,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 15.297,
                          "descent": 3.183,
                          "leading": 0,
                          "underlinePosition": -1.467,
                          "underlineThickness": 0.733,
                          "xHeight": 7.245
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "center",
                      "listLevel": 1,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 31,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 163,
                "bottom": 40,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 651
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 35,
          "yPos": 278,
          "tabIndex": 39,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 83.5,
          "rotateYPos": 21.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 22,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 167,
              "bottom": 43,
              "altText": "WATER AISLE/ FLAVOR SODAS AISLE",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 650
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 167,
              "height": 43,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 167,
          "height": 43,
          "resume": false,
          "useHandCursor": true,
          "id": "67Ako7WT0Zt"
        },
        {
          "kind": "objgroup",
          "objects": [
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 279,
                  "id": "01",
                  "url": "story_content/650O4C4ikqe.png",
                  "type": "normal",
                  "altText": "Picture 13.png",
                  "width": 69,
                  "height": 84,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 0,
              "yPos": 0,
              "tabIndex": 41,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 17,
              "rotateYPos": 21,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 1,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 34,
                  "bottom": 42,
                  "altText": "Picture 13.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 746
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 34,
                  "height": 42,
                  "strokewidth": 0
                }
              },
              "width": 34,
              "height": 42,
              "resume": false,
              "useHandCursor": true,
              "id": "6jWTT5J7lSb"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 280,
                  "id": "01",
                  "url": "story_content/5tlZbRNFJ2z.png",
                  "type": "normal",
                  "altText": "Picture 14.png",
                  "width": 77,
                  "height": 84,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 30,
              "yPos": 1,
              "tabIndex": 42,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 19,
              "rotateYPos": 21,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 2,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 38,
                  "bottom": 42,
                  "altText": "Picture 14.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 747
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 38,
                  "height": 42,
                  "strokewidth": 0
                }
              },
              "width": 38,
              "height": 42,
              "resume": false,
              "useHandCursor": true,
              "id": "5ge46e8hhRv"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 281,
                  "id": "01",
                  "url": "story_content/6HtQd2yqkcn.png",
                  "type": "normal",
                  "altText": "Picture 15.png",
                  "width": 75,
                  "height": 84,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 59,
              "yPos": 2,
              "tabIndex": 43,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 19,
              "rotateYPos": 21,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 3,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 38,
                  "bottom": 42,
                  "altText": "Picture 15.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 649
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 38,
                  "height": 42,
                  "strokewidth": 0
                }
              },
              "width": 38,
              "height": 42,
              "resume": false,
              "useHandCursor": true,
              "id": "6MHtuJj7sGH"
            }
          ],
          "accType": "text",
          "altText": "Group 37",
          "shapemaskId": "",
          "xPos": 217,
          "yPos": 278,
          "tabIndex": 40,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 48,
          "rotateYPos": 22,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "rotation": 0,
          "depth": 23,
          "scrolling": true,
          "shuffleLock": false,
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 96,
          "height": 44,
          "resume": false,
          "useHandCursor": true,
          "id": "5sMnqtNr6nu"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "5ivQYziqCIg_269085403",
              "id": "01",
              "linkId": "txt__default_5ivQYziqCIg",
              "type": "acctext",
              "xPos": 7,
              "yPos": 3,
              "xAccOffset": 7,
              "yAccOffset": 3,
              "width": 84,
              "height": 13,
              "valign": "top",
              "wordwrap": true,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "4pk 12oz can",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 8,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 9.653,
                          "descent": 1.547,
                          "leading": 1.6,
                          "underlinePosition": 0,
                          "underlineThickness": 0.757,
                          "xHeight": 6.4
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "center",
                      "listLevel": 1,
                      "lineSpacingRule": "atLeast",
                      "lineSpacing": 9.45,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 12,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 79,
                "bottom": 18,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 653
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 298,
          "yPos": 291,
          "tabIndex": 46,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 49,
          "rotateYPos": 9.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 24,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 98,
              "bottom": 19,
              "altText": "4pk 12oz can",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 652
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 98,
              "height": 19,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 98,
          "height": 19,
          "resume": false,
          "useHandCursor": true,
          "id": "5ivQYziqCIg"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "6UF8tzcAnZf_1235025725",
              "id": "01",
              "linkId": "txt__default_6UF8tzcAnZf",
              "type": "acctext",
              "xPos": 7,
              "yPos": 3,
              "xAccOffset": 7,
              "yAccOffset": 3,
              "width": 7,
              "height": 16,
              "valign": "center",
              "wordwrap": false,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "3",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 10,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 12.067,
                          "descent": 1.933,
                          "leading": 2,
                          "underlinePosition": 0,
                          "underlineThickness": 0.947,
                          "xHeight": 8
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "left",
                      "listLevel": 1,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 1,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 14,
                "bottom": 21,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 748
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 2,
          "yPos": 333,
          "tabIndex": 53,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 10.5,
          "rotateYPos": 11,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 25,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 21,
              "bottom": 22,
              "altText": "3",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 741
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 21,
              "height": 22,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 21,
          "height": 22,
          "resume": false,
          "useHandCursor": true,
          "id": "6UF8tzcAnZf"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "shapemaskId": "",
          "xPos": 27,
          "yPos": 236,
          "tabIndex": 33,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 91,
          "rotateYPos": 17.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 26,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 182,
              "bottom": 35,
              "altText": "Google Shape;915;p74",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 628
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 182,
              "height": 35,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 182,
          "height": 35,
          "resume": false,
          "useHandCursor": true,
          "id": "69MHR0IUjb8"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "image",
          "cliptobounds": false,
          "defaultAction": "",
          "imagelib": [
            {
              "kind": "imagedata",
              "assetId": 282,
              "id": "01",
              "url": "story_content/6ClX7Eg84Ry.png",
              "type": "normal",
              "altText": "Picture 16.png",
              "width": 390,
              "height": 279,
              "mobiledx": 0,
              "mobiledy": 0
            }
          ],
          "shapemaskId": "",
          "xPos": 656,
          "yPos": 204,
          "tabIndex": 27,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 97.5,
          "rotateYPos": 70,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 27,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 195,
              "bottom": 140,
              "altText": "Picture 16.png",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 749
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 195,
              "height": 140,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "position": {
                    "relativerotation": false,
                    "relativestartpoint": false,
                    "path": [
                      {
                        "kind": "segment",
                        "type": "line",
                        "anchora": {
                          "x": "$RawXPos",
                          "y": "$RawYPos",
                          "dx": "0",
                          "dy": "341"
                        },
                        "anchorb": {
                          "x": "$RawXPos",
                          "y": "$RawYPos",
                          "dx": "0",
                          "dy": "0"
                        }
                      }
                    ],
                    "duration": 750,
                    "easing": "cubic",
                    "easingdir": "easeout"
                  }
                }
              ]
            }
          ],
          "width": 195,
          "height": 140,
          "resume": false,
          "useHandCursor": true,
          "id": "6FLfNEso6Lm"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "6Quz7HDSLAm_1106396104",
              "id": "01",
              "linkId": "txt__default_6Quz7HDSLAm",
              "type": "acctext",
              "xPos": 3,
              "yPos": 3,
              "xAccOffset": 3,
              "yAccOffset": 3,
              "width": 141,
              "height": 19,
              "valign": "top",
              "wordwrap": true,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "COOLER",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 11,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#FFFFFF",
                          "linkColor": "#FFFFFF",
                          "ascent": 15.297,
                          "descent": 3.183,
                          "leading": 0,
                          "underlinePosition": -1.467,
                          "underlineThickness": 0.733,
                          "xHeight": 7.245
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "center",
                      "listLevel": 1,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 6,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 102,
                "bottom": 22,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 751
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 42,
          "yPos": 241,
          "tabIndex": 34,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 73.5,
          "rotateYPos": 12.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 28,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 147,
              "bottom": 25,
              "altText": "COOLER",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 750
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 147,
              "height": 25,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 147,
          "height": 25,
          "resume": false,
          "useHandCursor": true,
          "id": "6Quz7HDSLAm"
        },
        {
          "kind": "vectorshape",
          "rotation": 15.745,
          "accType": "image",
          "cliptobounds": false,
          "defaultAction": "",
          "imagelib": [
            {
              "kind": "imagedata",
              "assetId": 283,
              "id": "01",
              "url": "story_content/6DIcjkQBDMv.png",
              "type": "normal",
              "altText": "Picture 3.png",
              "width": 172,
              "height": 122,
              "mobiledx": 0,
              "mobiledy": 0
            }
          ],
          "shapemaskId": "",
          "xPos": 570,
          "yPos": 204,
          "tabIndex": 28,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 43,
          "rotateYPos": 30.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 29,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 86,
              "bottom": 61,
              "altText": "Picture 3.png",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 752
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 86,
              "height": 61,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "position": {
                    "relativerotation": false,
                    "relativestartpoint": false,
                    "path": [
                      {
                        "kind": "segment",
                        "type": "line",
                        "anchora": {
                          "x": "$RawXPos",
                          "y": "$RawYPos",
                          "dx": "0",
                          "dy": "341"
                        },
                        "anchorb": {
                          "x": "$RawXPos",
                          "y": "$RawYPos",
                          "dx": "0",
                          "dy": "0"
                        }
                      }
                    ],
                    "duration": 750,
                    "easing": "cubic",
                    "easingdir": "easeout"
                  }
                }
              ]
            }
          ],
          "width": 86,
          "height": 61,
          "resume": false,
          "useHandCursor": true,
          "id": "5elgZuwzc1v"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "image",
          "cliptobounds": false,
          "defaultAction": "",
          "imagelib": [
            {
              "kind": "imagedata",
              "assetId": 284,
              "id": "01",
              "url": "story_content/5sdsO28u5lz.png",
              "type": "normal",
              "altText": "Picture 17.png",
              "width": 262,
              "height": 344,
              "mobiledx": 0,
              "mobiledy": 0
            }
          ],
          "shapemaskId": "",
          "xPos": 544,
          "yPos": 266,
          "tabIndex": 38,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 65,
          "rotateYPos": 86,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 30,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 130,
              "bottom": 172,
              "altText": "Picture 17.png",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 753
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 130,
              "height": 172,
              "strokewidth": 0
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "position": {
                    "relativerotation": false,
                    "relativestartpoint": false,
                    "path": [
                      {
                        "kind": "segment",
                        "type": "line",
                        "anchora": {
                          "x": "$RawXPos",
                          "y": "$RawYPos",
                          "dx": "0",
                          "dy": "279"
                        },
                        "anchorb": {
                          "x": "$RawXPos",
                          "y": "$RawYPos",
                          "dx": "0",
                          "dy": "0"
                        }
                      }
                    ],
                    "duration": 750,
                    "easing": "cubic",
                    "easingdir": "easeout"
                  }
                }
              ]
            }
          ],
          "width": 130,
          "height": 172,
          "resume": false,
          "useHandCursor": true,
          "id": "5aWMGC9aeQi"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "textLib": [
            {
              "kind": "textdata",
              "uniqueId": "6izuwLIdrku_-1171441107",
              "id": "01",
              "linkId": "txt__default_6izuwLIdrku",
              "type": "acctext",
              "xPos": 3,
              "yPos": 3,
              "xAccOffset": 3,
              "yAccOffset": 3,
              "width": 142,
              "height": 41,
              "valign": "top",
              "wordwrap": true,
              "textshadow": false,
              "shadowIndex": -1,
              "scrollOverflow": false,
              "vartext": {
                "blocks": [
                  {
                    "spans": [
                      {
                        "text": "CONVENIENCE STORES",
                        "style": {
                          "fontFamily": Serif,
                          "fontSize": 12,
                          "fontIsBold": false,
                          "fontIsItalic": false,
                          "fontIsUnderline": false,
                          "fontIsStrikeout": false,
                          "elevation": "normal",
                          "displayCase": "asIs",
                          "foregroundColor": "#000000",
                          "linkColor": "#000000",
                          "ascent": 16.688,
                          "descent": 3.472,
                          "leading": 0,
                          "underlinePosition": -1.6,
                          "underlineThickness": 0.8,
                          "xHeight": 7.904
                        }
                      }
                    ],
                    "style": {
                      "leadingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "center",
                      "listLevel": 1,
                      "lineSpacingRule": "atLeast",
                      "lineSpacing": 14.4,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100,
                        "bulletChar": 8226,
                        "bulletFont": "Arial",
                        "bulletPicture": {
                          "w": 0,
                          "h": 0,
                          "base64": 0
                        }
                      },
                      "tagType": "P"
                    },
                    "runs": [
                      {
                        "idx": 0,
                        "len": 18,
                        "flowDirection": "leftToRight",
                        "cursive": false
                      }
                    ]
                  }
                ],
                "defaultBlockStyle": {
                  "flowDirection": "leftToRight",
                  "leadingMargin": 0,
                  "trailingMargin": 0,
                  "firstLineMargin": 0,
                  "justification": "left",
                  "defaultTabStop": 48,
                  "listLevel": 0,
                  "lineSpacingRule": "multiple",
                  "lineSpacing": 20,
                  "indentSize": 36,
                  "spacingBefore": 0,
                  "spacingAfter": 0,
                  "baseSpanStyle": {
                    "fontFamily": "Arial",
                    "fontSize": 12,
                    "fontIsBold": false,
                    "fontIsItalic": false,
                    "fontIsUnderline": false,
                    "fontIsStrikeout": false,
                    "underlineStyle": "normal",
                    "elevation": "normal",
                    "spacing": 0,
                    "ignoreKerningTable": false,
                    "displayCase": "asIs",
                    "languageId": 0,
                    "foregroundColor": "#000000",
                    "linkColor": "#0563C1"
                  },
                  "listStyle": {
                    "listType": "none",
                    "listTypeFormat": "plain",
                    "start": 0,
                    "size": 100
                  }
                },
                "direction": "horizontal"
              },
              "vectortext": {
                "left": 0,
                "top": 0,
                "right": 132,
                "bottom": 44,
                "pngfb": false,
                "pr": {
                  "l": "Lib",
                  "i": 755
                }
              }
            }
          ],
          "shapemaskId": "",
          "xPos": 806,
          "yPos": 6,
          "tabIndex": 14,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 74,
          "rotateYPos": 23.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 31,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 148,
              "bottom": 47,
              "altText": "CONVENIENCE STORES",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 754
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 148,
              "height": 47,
              "strokewidth": 0
            }
          },
          "width": 148,
          "height": 47,
          "resume": false,
          "useHandCursor": true,
          "id": "6izuwLIdrku"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "image",
          "cliptobounds": false,
          "defaultAction": "",
          "imagelib": [
            {
              "kind": "imagedata",
              "assetId": 83,
              "id": "01",
              "url": "story_content/5ZAkpPyzvSd.png",
              "type": "normal",
              "altText": "Picture 5.png",
              "width": 260,
              "height": 89,
              "mobiledx": 0,
              "mobiledy": 0
            }
          ],
          "shapemaskId": "",
          "xPos": -6,
          "yPos": -1,
          "tabIndex": 3,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 65,
          "rotateYPos": 22.5,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 32,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 130,
              "bottom": 45,
              "altText": "Picture 5.png",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 216
              }
            },
            "html5data": {
              "xPos": 0,
              "yPos": 0,
              "width": 130,
              "height": 45,
              "strokewidth": 0
            }
          },
          "width": 130,
          "height": 45,
          "resume": false,
          "useHandCursor": true,
          "id": "5h6RTmz69cD"
        },
        {
          "kind": "objgroup",
          "objects": [
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 285,
                  "id": "01",
                  "url": "story_content/5luyGE8x46R.png",
                  "type": "normal",
                  "altText": "Picture 19.png",
                  "width": 10,
                  "height": 28,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 32,
              "yPos": 23,
              "tabIndex": 9,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 2,
              "rotateYPos": 7,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 1,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 4,
                  "bottom": 14,
                  "altText": "Picture 19.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 756
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 4,
                  "height": 14,
                  "strokewidth": 0
                }
              },
              "width": 4,
              "height": 14,
              "resume": false,
              "useHandCursor": true,
              "id": "6ob48DzOdOZ"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 286,
                  "id": "01",
                  "url": "story_content/5ddB2rPQC0Z.png",
                  "type": "normal",
                  "altText": "Picture 20.png",
                  "width": 7,
                  "height": 28,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 26,
              "yPos": 23,
              "tabIndex": 11,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 1,
              "rotateYPos": 7,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 2,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 2,
                  "bottom": 14,
                  "altText": "Picture 20.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 757
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 2,
                  "height": 14,
                  "strokewidth": 0
                }
              },
              "width": 2,
              "height": 14,
              "resume": false,
              "useHandCursor": true,
              "id": "5zJNKRjyjtd"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 287,
                  "id": "01",
                  "url": "story_content/5UxqQxx2BOD.png",
                  "type": "normal",
                  "altText": "Picture 21.png",
                  "width": 6,
                  "height": 28,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 20,
              "yPos": 23,
              "tabIndex": 10,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 1,
              "rotateYPos": 7,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 3,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 2,
                  "bottom": 14,
                  "altText": "Picture 21.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 758
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 2,
                  "height": 14,
                  "strokewidth": 0
                }
              },
              "width": 2,
              "height": 14,
              "resume": false,
              "useHandCursor": true,
              "id": "6kj9kmE4Dj5"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 288,
                  "id": "01",
                  "url": "story_content/6kEPN8qlXFY.png",
                  "type": "normal",
                  "altText": "Picture 22.png",
                  "width": 10,
                  "height": 28,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 13,
              "yPos": 23,
              "tabIndex": 12,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 2,
              "rotateYPos": 7,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 4,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 4,
                  "bottom": 14,
                  "altText": "Picture 22.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 756
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 4,
                  "height": 14,
                  "strokewidth": 0
                }
              },
              "width": 4,
              "height": 14,
              "resume": false,
              "useHandCursor": true,
              "id": "6ZTqQmFLqPS"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 289,
                  "id": "01",
                  "url": "story_content/5xHLLfnagw4.png",
                  "type": "normal",
                  "altText": "Picture 23.png",
                  "width": 84,
                  "height": 37,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 3,
              "yPos": 21,
              "tabIndex": 8,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 21,
              "rotateYPos": 9,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 5,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 42,
                  "bottom": 18,
                  "altText": "Picture 23.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 759
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 42,
                  "height": 18,
                  "strokewidth": 0
                }
              },
              "width": 42,
              "height": 18,
              "resume": false,
              "useHandCursor": true,
              "id": "6QaecAJgIVX"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 290,
                  "id": "01",
                  "url": "story_content/5a6PZ8aw8lC.png",
                  "type": "normal",
                  "altText": "Picture 24.png",
                  "width": 94,
                  "height": 10,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 0,
              "yPos": 16,
              "tabIndex": 7,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 23.5,
              "rotateYPos": 2,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 6,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 47,
                  "bottom": 4,
                  "altText": "Picture 24.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 760
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 47,
                  "height": 4,
                  "strokewidth": 0
                }
              },
              "width": 47,
              "height": 4,
              "resume": false,
              "useHandCursor": true,
              "id": "6WdZMeXOKnK"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 291,
                  "id": "01",
                  "url": "story_content/6A6v1bzq1Mg.png",
                  "type": "normal",
                  "altText": "Picture 25.png",
                  "width": 27,
                  "height": 36,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 21,
              "yPos": 0,
              "tabIndex": 5,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 6.5,
              "rotateYPos": 9,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 7,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 13,
                  "bottom": 18,
                  "altText": "Picture 25.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 761
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 13,
                  "height": 18,
                  "strokewidth": 0
                }
              },
              "width": 13,
              "height": 18,
              "resume": false,
              "useHandCursor": true,
              "id": "5VgC87Clk6M"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "image",
              "cliptobounds": false,
              "defaultAction": "",
              "imagelib": [
                {
                  "kind": "imagedata",
                  "assetId": 292,
                  "id": "01",
                  "url": "story_content/5sdwLWFQoSJ.png",
                  "type": "normal",
                  "altText": "Picture 26.png",
                  "width": 4,
                  "height": 4,
                  "mobiledx": 0,
                  "mobiledy": 0
                }
              ],
              "shapemaskId": "",
              "xPos": 23,
              "yPos": 15,
              "tabIndex": 6,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 1,
              "rotateYPos": 1,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 8,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 2,
                  "bottom": 2,
                  "altText": "Picture 26.png",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 762
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 2,
                  "height": 2,
                  "strokewidth": 0
                }
              },
              "width": 2,
              "height": 2,
              "resume": false,
              "useHandCursor": true,
              "id": "6ZcIysACpOo"
            }
          ],
          "accType": "text",
          "altText": "Graphic 9",
          "shapemaskId": "",
          "xPos": 760,
          "yPos": 3,
          "tabIndex": 4,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 23.5,
          "rotateYPos": 19,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "rotation": 0,
          "depth": 33,
          "scrolling": true,
          "shuffleLock": false,
          "width": 47,
          "height": 38,
          "resume": false,
          "useHandCursor": true,
          "id": "6Om9lRGI9VS"
        },
        {
          "kind": "objgroup",
          "objects": [
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "text",
              "cliptobounds": false,
              "defaultAction": "",
              "textLib": [
                {
                  "kind": "textdata",
                  "uniqueId": "5scoTeKq3mC_-131667008",
                  "id": "01",
                  "linkId": "txt__default_5scoTeKq3mC",
                  "type": "acctext",
                  "xPos": 3,
                  "yPos": 3,
                  "xAccOffset": 3,
                  "yAccOffset": 3,
                  "width": 108,
                  "height": 27,
                  "valign": "top",
                  "wordwrap": true,
                  "textshadow": false,
                  "shadowIndex": -1,
                  "scrollOverflow": false,
                  "vartext": {
                    "blocks": [
                      {
                        "spans": [
                          {
                            "text": "On-the-go\\n",
                            "style": {
                              "fontFamily": Serif,
                              "fontSize": 10,
                              "fontIsBold": false,
                              "fontIsItalic": false,
                              "fontIsUnderline": false,
                              "fontIsStrikeout": false,
                              "elevation": "normal",
                              "displayCase": "asIs",
                              "foregroundColor": "#000000",
                              "linkColor": "#000000",
                              "ascent": 10.533,
                              "descent": 2.8,
                              "leading": 0,
                              "underlinePosition": -1.64,
                              "underlineThickness": 0.267,
                              "xHeight": 6.44
                            }
                          }
                        ],
                        "style": {
                          "leadingMargin": 0,
                          "firstLineMargin": 0,
                          "justification": "left",
                          "listLevel": 1,
                          "lineSpacingRule": "multiple",
                          "lineSpacing": 20,
                          "spacingBefore": 0,
                          "spacingAfter": 0,
                          "listStyle": {
                            "listType": "none",
                            "listTypeFormat": "plain",
                            "start": 0,
                            "size": 100,
                            "bulletChar": 8226,
                            "bulletFont": "Arial",
                            "bulletPicture": {
                              "w": 0,
                              "h": 0,
                              "base64": 0
                            }
                          },
                          "tagType": "P"
                        },
                        "runs": [
                          {
                            "idx": 0,
                            "len": 10,
                            "flowDirection": "leftToRight",
                            "cursive": false
                          }
                        ]
                      },
                      {
                        "spans": [
                          {
                            "text": "Fill-in",
                            "style": {
                              "fontFamily": Serif,
                              "fontSize": 10,
                              "fontIsBold": false,
                              "fontIsItalic": false,
                              "fontIsUnderline": false,
                              "fontIsStrikeout": false,
                              "elevation": "normal",
                              "displayCase": "asIs",
                              "foregroundColor": "#000000",
                              "linkColor": "#000000",
                              "ascent": 10.533,
                              "descent": 2.8,
                              "leading": 0,
                              "underlinePosition": -1.64,
                              "underlineThickness": 0.267,
                              "xHeight": 6.44
                            }
                          }
                        ],
                        "style": {
                          "leadingMargin": 0,
                          "firstLineMargin": 0,
                          "justification": "left",
                          "listLevel": 1,
                          "lineSpacingRule": "multiple",
                          "lineSpacing": 20,
                          "spacingBefore": 0,
                          "spacingAfter": 0,
                          "listStyle": {
                            "listType": "none",
                            "listTypeFormat": "plain",
                            "start": 0,
                            "size": 100,
                            "bulletChar": 8226,
                            "bulletFont": "Arial",
                            "bulletPicture": {
                              "w": 0,
                              "h": 0,
                              "base64": 0
                            }
                          },
                          "tagType": "P"
                        },
                        "runs": [
                          {
                            "idx": 0,
                            "len": 7,
                            "flowDirection": "leftToRight",
                            "cursive": false
                          }
                        ]
                      }
                    ],
                    "defaultBlockStyle": {
                      "flowDirection": "leftToRight",
                      "leadingMargin": 0,
                      "trailingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "left",
                      "defaultTabStop": 48,
                      "listLevel": 0,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "indentSize": 36,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "baseSpanStyle": {
                        "fontFamily": "Arial",
                        "fontSize": 12,
                        "fontIsBold": false,
                        "fontIsItalic": false,
                        "fontIsUnderline": false,
                        "fontIsStrikeout": false,
                        "underlineStyle": "normal",
                        "elevation": "normal",
                        "spacing": 0,
                        "ignoreKerningTable": false,
                        "displayCase": "asIs",
                        "languageId": 0,
                        "foregroundColor": "#000000",
                        "linkColor": "#0563C1"
                      },
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100
                      }
                    },
                    "direction": "horizontal"
                  },
                  "vectortext": {
                    "left": 0,
                    "top": 0,
                    "right": 63,
                    "bottom": 31,
                    "pngfb": false,
                    "pr": {
                      "l": "Lib",
                      "i": 763
                    }
                  }
                }
              ],
              "shapemaskId": "",
              "xPos": 145,
              "yPos": 3,
              "tabIndex": 22,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 57,
              "rotateYPos": 16.5,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 1,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 114,
                  "bottom": 33,
                  "altText": "On-the-go\\nFill-in",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 666
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 114,
                  "height": 33,
                  "strokewidth": 0
                }
              },
              "width": 114,
              "height": 33,
              "resume": false,
              "useHandCursor": true,
              "id": "5scoTeKq3mC"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "text",
              "cliptobounds": false,
              "defaultAction": "",
              "textLib": [
                {
                  "kind": "textdata",
                  "uniqueId": "6ZwGJAvWBvF_1561928178",
                  "id": "01",
                  "linkId": "txt__default_6ZwGJAvWBvF",
                  "type": "acctext",
                  "xPos": 3,
                  "yPos": 3,
                  "xAccOffset": 3,
                  "yAccOffset": 3,
                  "width": 141,
                  "height": 34,
                  "valign": "top",
                  "wordwrap": true,
                  "textshadow": false,
                  "shadowIndex": -1,
                  "scrollOverflow": false,
                  "vartext": {
                    "blocks": [
                      {
                        "spans": [
                          {
                            "text": "ALIGN WITH  THE \\n",
                            "style": {
                              "fontFamily": Serif,
                              "fontSize": 10,
                              "fontIsBold": false,
                              "fontIsItalic": false,
                              "fontIsUnderline": false,
                              "fontIsStrikeout": false,
                              "elevation": "normal",
                              "displayCase": "asIs",
                              "foregroundColor": "#000000",
                              "linkColor": "#000000",
                              "ascent": 13.907,
                              "descent": 2.893,
                              "leading": 0,
                              "underlinePosition": -1.333,
                              "underlineThickness": 0.667,
                              "xHeight": 6.587
                            }
                          }
                        ],
                        "style": {
                          "leadingMargin": 0,
                          "firstLineMargin": 0,
                          "justification": "left",
                          "listLevel": 1,
                          "lineSpacingRule": "atLeast",
                          "lineSpacing": 12.6,
                          "spacingBefore": 0,
                          "spacingAfter": 0,
                          "listStyle": {
                            "listType": "none",
                            "listTypeFormat": "plain",
                            "start": 0,
                            "size": 100,
                            "bulletChar": 8226,
                            "bulletFont": "Arial",
                            "bulletPicture": {
                              "w": 0,
                              "h": 0,
                              "base64": 0
                            }
                          },
                          "tagType": "P"
                        },
                        "runs": [
                          {
                            "idx": 0,
                            "len": 17,
                            "flowDirection": "leftToRight",
                            "cursive": false
                          }
                        ]
                      },
                      {
                        "spans": [
                          {
                            "text": "STRATEGIC INTENT",
                            "style": {
                              "fontFamily": Serif,
                              "fontSize": 10,
                              "fontIsBold": false,
                              "fontIsItalic": false,
                              "fontIsUnderline": false,
                              "fontIsStrikeout": false,
                              "elevation": "normal",
                              "displayCase": "asIs",
                              "foregroundColor": "#000000",
                              "linkColor": "#000000",
                              "ascent": 13.907,
                              "descent": 2.893,
                              "leading": 0,
                              "underlinePosition": -1.333,
                              "underlineThickness": 0.667,
                              "xHeight": 6.587
                            }
                          }
                        ],
                        "style": {
                          "leadingMargin": 0,
                          "firstLineMargin": 0,
                          "justification": "left",
                          "listLevel": 1,
                          "lineSpacingRule": "atLeast",
                          "lineSpacing": 12.6,
                          "spacingBefore": 0,
                          "spacingAfter": 0,
                          "listStyle": {
                            "listType": "none",
                            "listTypeFormat": "plain",
                            "start": 0,
                            "size": 100,
                            "bulletChar": 8226,
                            "bulletFont": "Arial",
                            "bulletPicture": {
                              "w": 0,
                              "h": 0,
                              "base64": 0
                            }
                          },
                          "tagType": "P"
                        },
                        "runs": [
                          {
                            "idx": 0,
                            "len": 16,
                            "flowDirection": "leftToRight",
                            "cursive": false
                          }
                        ]
                      }
                    ],
                    "defaultBlockStyle": {
                      "flowDirection": "leftToRight",
                      "leadingMargin": 0,
                      "trailingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "left",
                      "defaultTabStop": 48,
                      "listLevel": 0,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "indentSize": 36,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "baseSpanStyle": {
                        "fontFamily": "Arial",
                        "fontSize": 12,
                        "fontIsBold": false,
                        "fontIsItalic": false,
                        "fontIsUnderline": false,
                        "fontIsStrikeout": false,
                        "underlineStyle": "normal",
                        "elevation": "normal",
                        "spacing": 0,
                        "ignoreKerningTable": false,
                        "displayCase": "asIs",
                        "languageId": 0,
                        "foregroundColor": "#000000",
                        "linkColor": "#0563C1"
                      },
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100
                      }
                    },
                    "direction": "horizontal"
                  },
                  "vectortext": {
                    "left": 0,
                    "top": 0,
                    "right": 121,
                    "bottom": 37,
                    "pngfb": false,
                    "pr": {
                      "l": "Lib",
                      "i": 764
                    }
                  }
                }
              ],
              "shapemaskId": "",
              "xPos": 268,
              "yPos": 0,
              "tabIndex": 20,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 73.5,
              "rotateYPos": 20,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 2,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 147,
                  "bottom": 40,
                  "altText": "ALIGN WITH  THE \\nSTRATEGIC INTENT",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 664
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 147,
                  "height": 40,
                  "strokewidth": 0
                }
              },
              "width": 147,
              "height": 40,
              "resume": false,
              "useHandCursor": true,
              "id": "6ZwGJAvWBvF"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "text",
              "cliptobounds": false,
              "defaultAction": "",
              "textLib": [
                {
                  "kind": "textdata",
                  "uniqueId": "5VggEGVu5n7_402307460",
                  "id": "01",
                  "linkId": "txt__default_5VggEGVu5n7",
                  "type": "acctext",
                  "xPos": 3,
                  "yPos": 3,
                  "xAccOffset": 3,
                  "yAccOffset": 3,
                  "width": 122,
                  "height": 27,
                  "valign": "top",
                  "wordwrap": true,
                  "textshadow": false,
                  "shadowIndex": -1,
                  "scrollOverflow": false,
                  "vartext": {
                    "blocks": [
                      {
                        "spans": [
                          {
                            "text": "New News\\n",
                            "style": {
                              "fontFamily": Serif,
                              "fontSize": 10,
                              "fontIsBold": false,
                              "fontIsItalic": false,
                              "fontIsUnderline": false,
                              "fontIsStrikeout": false,
                              "elevation": "normal",
                              "displayCase": "asIs",
                              "foregroundColor": "#000000",
                              "linkColor": "#000000",
                              "ascent": 10.533,
                              "descent": 2.8,
                              "leading": 0,
                              "underlinePosition": -1.64,
                              "underlineThickness": 0.267,
                              "xHeight": 6.44
                            }
                          }
                        ],
                        "style": {
                          "leadingMargin": 0,
                          "firstLineMargin": 0,
                          "justification": "left",
                          "listLevel": 1,
                          "lineSpacingRule": "multiple",
                          "lineSpacing": 20,
                          "spacingBefore": 0,
                          "spacingAfter": 0,
                          "listStyle": {
                            "listType": "none",
                            "listTypeFormat": "plain",
                            "start": 0,
                            "size": 100,
                            "bulletChar": 8226,
                            "bulletFont": "Arial",
                            "bulletPicture": {
                              "w": 0,
                              "h": 0,
                              "base64": 0
                            }
                          },
                          "tagType": "P"
                        },
                        "runs": [
                          {
                            "idx": 0,
                            "len": 9,
                            "flowDirection": "leftToRight",
                            "cursive": false
                          }
                        ]
                      },
                      {
                        "spans": [
                          {
                            "text": "Drive trial",
                            "style": {
                              "fontFamily": Serif,
                              "fontSize": 10,
                              "fontIsBold": false,
                              "fontIsItalic": false,
                              "fontIsUnderline": false,
                              "fontIsStrikeout": false,
                              "elevation": "normal",
                              "displayCase": "asIs",
                              "foregroundColor": "#000000",
                              "linkColor": "#000000",
                              "ascent": 10.533,
                              "descent": 2.8,
                              "leading": 0,
                              "underlinePosition": -1.64,
                              "underlineThickness": 0.267,
                              "xHeight": 6.44
                            }
                          }
                        ],
                        "style": {
                          "leadingMargin": 0,
                          "firstLineMargin": 0,
                          "justification": "left",
                          "listLevel": 1,
                          "lineSpacingRule": "multiple",
                          "lineSpacing": 20,
                          "spacingBefore": 0,
                          "spacingAfter": 0,
                          "listStyle": {
                            "listType": "none",
                            "listTypeFormat": "plain",
                            "start": 0,
                            "size": 100,
                            "bulletChar": 8226,
                            "bulletFont": "Arial",
                            "bulletPicture": {
                              "w": 0,
                              "h": 0,
                              "base64": 0
                            }
                          },
                          "tagType": "P"
                        },
                        "runs": [
                          {
                            "idx": 0,
                            "len": 11,
                            "flowDirection": "leftToRight",
                            "cursive": false
                          }
                        ]
                      }
                    ],
                    "defaultBlockStyle": {
                      "flowDirection": "leftToRight",
                      "leadingMargin": 0,
                      "trailingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "left",
                      "defaultTabStop": 48,
                      "listLevel": 0,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "indentSize": 36,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "baseSpanStyle": {
                        "fontFamily": "Arial",
                        "fontSize": 12,
                        "fontIsBold": false,
                        "fontIsItalic": false,
                        "fontIsUnderline": false,
                        "fontIsStrikeout": false,
                        "underlineStyle": "normal",
                        "elevation": "normal",
                        "spacing": 0,
                        "ignoreKerningTable": false,
                        "displayCase": "asIs",
                        "languageId": 0,
                        "foregroundColor": "#000000",
                        "linkColor": "#0563C1"
                      },
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100
                      }
                    },
                    "direction": "horizontal"
                  },
                  "vectortext": {
                    "left": 0,
                    "top": 0,
                    "right": 67,
                    "bottom": 31,
                    "pngfb": false,
                    "pr": {
                      "l": "Lib",
                      "i": 766
                    }
                  }
                }
              ],
              "shapemaskId": "",
              "xPos": 409,
              "yPos": 3,
              "tabIndex": 23,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 64,
              "rotateYPos": 16.5,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 3,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 128,
                  "bottom": 33,
                  "altText": "New News\\nDrive trial",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 765
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 128,
                  "height": 33,
                  "strokewidth": 0
                }
              },
              "width": 128,
              "height": 33,
              "resume": false,
              "useHandCursor": true,
              "id": "5VggEGVu5n7"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "text",
              "cliptobounds": false,
              "defaultAction": "",
              "textLib": [
                {
                  "kind": "textdata",
                  "uniqueId": "6pvTxOPrXbg_1385005006",
                  "id": "01",
                  "linkId": "txt__default_6pvTxOPrXbg",
                  "type": "acctext",
                  "xPos": 3,
                  "yPos": 3,
                  "xAccOffset": 3,
                  "yAccOffset": 3,
                  "width": 163,
                  "height": 34,
                  "valign": "top",
                  "wordwrap": true,
                  "textshadow": false,
                  "shadowIndex": -1,
                  "scrollOverflow": false,
                  "vartext": {
                    "blocks": [
                      {
                        "spans": [
                          {
                            "text": "EXECUTION PRIORITIES\\n",
                            "style": {
                              "fontFamily": Serif,
                              "fontSize": 10,
                              "fontIsBold": false,
                              "fontIsItalic": false,
                              "fontIsUnderline": false,
                              "fontIsStrikeout": false,
                              "elevation": "normal",
                              "displayCase": "asIs",
                              "foregroundColor": "#000000",
                              "linkColor": "#000000",
                              "ascent": 13.907,
                              "descent": 2.893,
                              "leading": 0,
                              "underlinePosition": -1.333,
                              "underlineThickness": 0.667,
                              "xHeight": 6.587
                            }
                          }
                        ],
                        "style": {
                          "leadingMargin": 0,
                          "firstLineMargin": 0,
                          "justification": "left",
                          "listLevel": 1,
                          "lineSpacingRule": "atLeast",
                          "lineSpacing": 12.6,
                          "spacingBefore": 0,
                          "spacingAfter": 0,
                          "listStyle": {
                            "listType": "none",
                            "listTypeFormat": "plain",
                            "start": 0,
                            "size": 100,
                            "bulletChar": 8226,
                            "bulletFont": "Arial",
                            "bulletPicture": {
                              "w": 0,
                              "h": 0,
                              "base64": 0
                            }
                          },
                          "tagType": "P"
                        },
                        "runs": [
                          {
                            "idx": 0,
                            "len": 21,
                            "flowDirection": "leftToRight",
                            "cursive": false
                          }
                        ]
                      },
                      {
                        "spans": [
                          {
                            "text": "BE RELEVANT",
                            "style": {
                              "fontFamily": Serif,
                              "fontSize": 10,
                              "fontIsBold": false,
                              "fontIsItalic": false,
                              "fontIsUnderline": false,
                              "fontIsStrikeout": false,
                              "elevation": "normal",
                              "displayCase": "asIs",
                              "foregroundColor": "#000000",
                              "linkColor": "#000000",
                              "ascent": 13.907,
                              "descent": 2.893,
                              "leading": 0,
                              "underlinePosition": -1.333,
                              "underlineThickness": 0.667,
                              "xHeight": 6.587
                            }
                          }
                        ],
                        "style": {
                          "leadingMargin": 0,
                          "firstLineMargin": 0,
                          "justification": "left",
                          "listLevel": 1,
                          "lineSpacingRule": "atLeast",
                          "lineSpacing": 12.6,
                          "spacingBefore": 0,
                          "spacingAfter": 0,
                          "listStyle": {
                            "listType": "none",
                            "listTypeFormat": "plain",
                            "start": 0,
                            "size": 100,
                            "bulletChar": 8226,
                            "bulletFont": "Arial",
                            "bulletPicture": {
                              "w": 0,
                              "h": 0,
                              "base64": 0
                            }
                          },
                          "tagType": "P"
                        },
                        "runs": [
                          {
                            "idx": 0,
                            "len": 11,
                            "flowDirection": "leftToRight",
                            "cursive": false
                          }
                        ]
                      }
                    ],
                    "defaultBlockStyle": {
                      "flowDirection": "leftToRight",
                      "leadingMargin": 0,
                      "trailingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "left",
                      "defaultTabStop": 48,
                      "listLevel": 0,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "indentSize": 36,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "baseSpanStyle": {
                        "fontFamily": "Arial",
                        "fontSize": 12,
                        "fontIsBold": false,
                        "fontIsItalic": false,
                        "fontIsUnderline": false,
                        "fontIsStrikeout": false,
                        "underlineStyle": "normal",
                        "elevation": "normal",
                        "spacing": 0,
                        "ignoreKerningTable": false,
                        "displayCase": "asIs",
                        "languageId": 0,
                        "foregroundColor": "#000000",
                        "linkColor": "#0563C1"
                      },
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100
                      }
                    },
                    "direction": "horizontal"
                  },
                  "vectortext": {
                    "left": 0,
                    "top": 0,
                    "right": 150,
                    "bottom": 37,
                    "pngfb": false,
                    "pr": {
                      "l": "Lib",
                      "i": 669
                    }
                  }
                }
              ],
              "shapemaskId": "",
              "xPos": 528,
              "yPos": 0,
              "tabIndex": 21,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 84.5,
              "rotateYPos": 20,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 4,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 169,
                  "bottom": 40,
                  "altText": "EXECUTION PRIORITIES\\nBE RELEVANT",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 767
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 169,
                  "height": 40,
                  "strokewidth": 0
                }
              },
              "width": 169,
              "height": 40,
              "resume": false,
              "useHandCursor": true,
              "id": "6pvTxOPrXbg"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "text",
              "cliptobounds": false,
              "defaultAction": "",
              "textLib": [
                {
                  "kind": "textdata",
                  "uniqueId": "5XneTrsOYhS_-234402322",
                  "id": "01",
                  "linkId": "txt__default_5XneTrsOYhS",
                  "type": "acctext",
                  "xPos": 3,
                  "yPos": 3,
                  "xAccOffset": 3,
                  "yAccOffset": 3,
                  "width": 137,
                  "height": 27,
                  "valign": "top",
                  "wordwrap": true,
                  "textshadow": false,
                  "shadowIndex": -1,
                  "scrollOverflow": false,
                  "vartext": {
                    "blocks": [
                      {
                        "spans": [
                          {
                            "text": "Mineral water cooler\\n",
                            "style": {
                              "fontFamily": Serif,
                              "fontSize": 10,
                              "fontIsBold": false,
                              "fontIsItalic": false,
                              "fontIsUnderline": false,
                              "fontIsStrikeout": false,
                              "elevation": "normal",
                              "displayCase": "asIs",
                              "foregroundColor": "#000000",
                              "linkColor": "#000000",
                              "ascent": 10.533,
                              "descent": 2.8,
                              "leading": 0,
                              "underlinePosition": -1.64,
                              "underlineThickness": 0.267,
                              "xHeight": 6.44
                            }
                          }
                        ],
                        "style": {
                          "leadingMargin": 0,
                          "firstLineMargin": 0,
                          "justification": "left",
                          "listLevel": 1,
                          "lineSpacingRule": "multiple",
                          "lineSpacing": 20,
                          "spacingBefore": 0,
                          "spacingAfter": 0,
                          "listStyle": {
                            "listType": "none",
                            "listTypeFormat": "plain",
                            "start": 0,
                            "size": 100,
                            "bulletChar": 8226,
                            "bulletFont": "Arial",
                            "bulletPicture": {
                              "w": 0,
                              "h": 0,
                              "base64": 0
                            }
                          },
                          "tagType": "P"
                        },
                        "runs": [
                          {
                            "idx": 0,
                            "len": 21,
                            "flowDirection": "leftToRight",
                            "cursive": false
                          }
                        ]
                      },
                      {
                        "spans": [
                          {
                            "text": "Exclusive End-cap",
                            "style": {
                              "fontFamily": Serif,
                              "fontSize": 10,
                              "fontIsBold": false,
                              "fontIsItalic": false,
                              "fontIsUnderline": false,
                              "fontIsStrikeout": false,
                              "elevation": "normal",
                              "displayCase": "asIs",
                              "foregroundColor": "#000000",
                              "linkColor": "#000000",
                              "ascent": 10.533,
                              "descent": 2.8,
                              "leading": 0,
                              "underlinePosition": -1.64,
                              "underlineThickness": 0.267,
                              "xHeight": 6.44
                            }
                          }
                        ],
                        "style": {
                          "leadingMargin": 0,
                          "firstLineMargin": 0,
                          "justification": "left",
                          "listLevel": 1,
                          "lineSpacingRule": "multiple",
                          "lineSpacing": 20,
                          "spacingBefore": 0,
                          "spacingAfter": 0,
                          "listStyle": {
                            "listType": "none",
                            "listTypeFormat": "plain",
                            "start": 0,
                            "size": 100,
                            "bulletChar": 8226,
                            "bulletFont": "Arial",
                            "bulletPicture": {
                              "w": 0,
                              "h": 0,
                              "base64": 0
                            }
                          },
                          "tagType": "P"
                        },
                        "runs": [
                          {
                            "idx": 0,
                            "len": 17,
                            "flowDirection": "leftToRight",
                            "cursive": false
                          }
                        ]
                      }
                    ],
                    "defaultBlockStyle": {
                      "flowDirection": "leftToRight",
                      "leadingMargin": 0,
                      "trailingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "left",
                      "defaultTabStop": 48,
                      "listLevel": 0,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "indentSize": 36,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "baseSpanStyle": {
                        "fontFamily": "Arial",
                        "fontSize": 12,
                        "fontIsBold": false,
                        "fontIsItalic": false,
                        "fontIsUnderline": false,
                        "fontIsStrikeout": false,
                        "underlineStyle": "normal",
                        "elevation": "normal",
                        "spacing": 0,
                        "ignoreKerningTable": false,
                        "displayCase": "asIs",
                        "languageId": 0,
                        "foregroundColor": "#000000",
                        "linkColor": "#0563C1"
                      },
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100
                      }
                    },
                    "direction": "horizontal"
                  },
                  "vectortext": {
                    "left": 0,
                    "top": 0,
                    "right": 123,
                    "bottom": 31,
                    "pngfb": false,
                    "pr": {
                      "l": "Lib",
                      "i": 769
                    }
                  }
                }
              ],
              "shapemaskId": "",
              "xPos": 695,
              "yPos": 3,
              "tabIndex": 24,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 71.5,
              "rotateYPos": 16.5,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 5,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 143,
                  "bottom": 33,
                  "altText": "Mineral water cooler\\nExclusive End-cap",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 768
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 143,
                  "height": 33,
                  "strokewidth": 0
                }
              },
              "width": 143,
              "height": 33,
              "resume": false,
              "useHandCursor": true,
              "id": "5XneTrsOYhS"
            },
            {
              "kind": "vectorshape",
              "rotation": 0,
              "accType": "text",
              "cliptobounds": false,
              "defaultAction": "",
              "textLib": [
                {
                  "kind": "textdata",
                  "uniqueId": "6Uh9tdWy4jB_-1193879627",
                  "id": "01",
                  "linkId": "txt__default_6Uh9tdWy4jB",
                  "type": "acctext",
                  "xPos": 3,
                  "yPos": 3,
                  "xAccOffset": 3,
                  "yAccOffset": 3,
                  "width": 141,
                  "height": 34,
                  "valign": "top",
                  "wordwrap": true,
                  "textshadow": false,
                  "shadowIndex": -1,
                  "scrollOverflow": false,
                  "vartext": {
                    "blocks": [
                      {
                        "spans": [
                          {
                            "text": "UNDERSTAND THE \\n",
                            "style": {
                              "fontFamily": Serif,
                              "fontSize": 10,
                              "fontIsBold": false,
                              "fontIsItalic": false,
                              "fontIsUnderline": false,
                              "fontIsStrikeout": false,
                              "elevation": "normal",
                              "displayCase": "asIs",
                              "foregroundColor": "#000000",
                              "linkColor": "#000000",
                              "ascent": 13.907,
                              "descent": 2.893,
                              "leading": 0,
                              "underlinePosition": -1.333,
                              "underlineThickness": 0.667,
                              "xHeight": 6.587
                            }
                          }
                        ],
                        "style": {
                          "leadingMargin": 0,
                          "firstLineMargin": 0,
                          "justification": "center",
                          "listLevel": 1,
                          "lineSpacingRule": "atLeast",
                          "lineSpacing": 12.6,
                          "spacingBefore": 0,
                          "spacingAfter": 0,
                          "listStyle": {
                            "listType": "none",
                            "listTypeFormat": "plain",
                            "start": 0,
                            "size": 100,
                            "bulletChar": 8226,
                            "bulletFont": "Arial",
                            "bulletPicture": {
                              "w": 0,
                              "h": 0,
                              "base64": 0
                            }
                          },
                          "tagType": "P"
                        },
                        "runs": [
                          {
                            "idx": 0,
                            "len": 16,
                            "flowDirection": "leftToRight",
                            "cursive": false
                          }
                        ]
                      },
                      {
                        "spans": [
                          {
                            "text": "SHOPPER MISSION",
                            "style": {
                              "fontFamily": Serif,
                              "fontSize": 10,
                              "fontIsBold": false,
                              "fontIsItalic": false,
                              "fontIsUnderline": false,
                              "fontIsStrikeout": false,
                              "elevation": "normal",
                              "displayCase": "asIs",
                              "foregroundColor": "#000000",
                              "linkColor": "#000000",
                              "ascent": 13.907,
                              "descent": 2.893,
                              "leading": 0,
                              "underlinePosition": -1.333,
                              "underlineThickness": 0.667,
                              "xHeight": 6.587
                            }
                          }
                        ],
                        "style": {
                          "leadingMargin": 0,
                          "firstLineMargin": 0,
                          "justification": "center",
                          "listLevel": 1,
                          "lineSpacingRule": "atLeast",
                          "lineSpacing": 12.6,
                          "spacingBefore": 0,
                          "spacingAfter": 0,
                          "listStyle": {
                            "listType": "none",
                            "listTypeFormat": "plain",
                            "start": 0,
                            "size": 100,
                            "bulletChar": 8226,
                            "bulletFont": "Arial",
                            "bulletPicture": {
                              "w": 0,
                              "h": 0,
                              "base64": 0
                            }
                          },
                          "tagType": "P"
                        },
                        "runs": [
                          {
                            "idx": 0,
                            "len": 15,
                            "flowDirection": "leftToRight",
                            "cursive": false
                          }
                        ]
                      }
                    ],
                    "defaultBlockStyle": {
                      "flowDirection": "leftToRight",
                      "leadingMargin": 0,
                      "trailingMargin": 0,
                      "firstLineMargin": 0,
                      "justification": "left",
                      "defaultTabStop": 48,
                      "listLevel": 0,
                      "lineSpacingRule": "multiple",
                      "lineSpacing": 20,
                      "indentSize": 36,
                      "spacingBefore": 0,
                      "spacingAfter": 0,
                      "baseSpanStyle": {
                        "fontFamily": "Arial",
                        "fontSize": 12,
                        "fontIsBold": false,
                        "fontIsItalic": false,
                        "fontIsUnderline": false,
                        "fontIsStrikeout": false,
                        "underlineStyle": "normal",
                        "elevation": "normal",
                        "spacing": 0,
                        "ignoreKerningTable": false,
                        "displayCase": "asIs",
                        "languageId": 0,
                        "foregroundColor": "#000000",
                        "linkColor": "#0563C1"
                      },
                      "listStyle": {
                        "listType": "none",
                        "listTypeFormat": "plain",
                        "start": 0,
                        "size": 100
                      }
                    },
                    "direction": "horizontal"
                  },
                  "vectortext": {
                    "left": 0,
                    "top": 0,
                    "right": 133,
                    "bottom": 37,
                    "pngfb": false,
                    "pr": {
                      "l": "Lib",
                      "i": 672
                    }
                  }
                }
              ],
              "shapemaskId": "",
              "xPos": 0,
              "yPos": 0,
              "tabIndex": 19,
              "tabEnabled": true,
              "xOffset": 0,
              "yOffset": 0,
              "rotateXPos": 73.5,
              "rotateYPos": 20,
              "scaleX": 100,
              "scaleY": 100,
              "alpha": 100,
              "depth": 6,
              "scrolling": true,
              "shuffleLock": false,
              "data": {
                "hotlinkId": "",
                "accState": 0,
                "vectorData": {
                  "left": 0,
                  "top": 0,
                  "right": 147,
                  "bottom": 40,
                  "altText": "UNDERSTAND THE \\nSHOPPER MISSION",
                  "pngfb": false,
                  "pr": {
                    "l": "Lib",
                    "i": 664
                  }
                },
                "html5data": {
                  "xPos": 0,
                  "yPos": 0,
                  "width": 147,
                  "height": 40,
                  "strokewidth": 0
                }
              },
              "width": 147,
              "height": 40,
              "resume": false,
              "useHandCursor": true,
              "id": "6Uh9tdWy4jB"
            }
          ],
          "accType": "text",
          "altText": "Agrupar 4",
          "shapemaskId": "",
          "xPos": 73,
          "yPos": 69,
          "tabIndex": 18,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": 419,
          "rotateYPos": 20,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "rotation": 0,
          "depth": 34,
          "scrolling": true,
          "shuffleLock": false,
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 838,
          "height": 40,
          "resume": false,
          "useHandCursor": true,
          "id": "6dSaBASN2P0"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "imagelib": [
            {
              "kind": "imagedata",
              "assetId": 293,
              "id": "01",
              "url": "",
              "type": "normal",
              "width": 934,
              "height": 11,
              "mobiledx": 0,
              "mobiledy": 0
            }
          ],
          "shapemaskId": "",
          "xPos": 13,
          "yPos": 120,
          "tabIndex": 25,
          "tabEnabled": true,
          "xOffset": -5,
          "yOffset": -5,
          "rotateXPos": 462,
          "rotateYPos": 0,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 35,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": 0,
              "top": 0,
              "right": 934,
              "bottom": 11,
              "altText": "Google Shape;676;p40",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 77
              }
            },
            "html5data": {
              "url": "txt__default_5vrVHZ1Dsy9.png",
              "xPos": -5,
              "yPos": -5,
              "width": 934,
              "height": 11,
              "strokewidth": 1,
              "mask": "750O2X398O2X5O5X394O5X3O3A1X3O3A1X3O3A1X4O5X394O5X5O3X396O3X74EO"
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 924,
          "height": 0,
          "resume": false,
          "useHandCursor": true,
          "id": "5vrVHZ1Dsy9"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "shapemaskId": "",
          "xPos": 314,
          "yPos": 59,
          "tabIndex": 16,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": -0.5,
          "rotateYPos": 25,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 36,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": -2,
              "top": -2,
              "right": 2,
              "bottom": 53,
              "altText": "Conector recto 6",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 673
              }
            },
            "html5data": {
              "xPos": -2,
              "yPos": -2,
              "width": 4,
              "height": 55,
              "strokewidth": 1
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 0,
          "height": 51,
          "resume": false,
          "useHandCursor": true,
          "id": "6E01TSsmPPf"
        },
        {
          "kind": "vectorshape",
          "rotation": 0,
          "accType": "text",
          "cliptobounds": false,
          "defaultAction": "",
          "shapemaskId": "",
          "xPos": 581,
          "yPos": 59,
          "tabIndex": 17,
          "tabEnabled": true,
          "xOffset": 0,
          "yOffset": 0,
          "rotateXPos": -0.5,
          "rotateYPos": 25,
          "scaleX": 100,
          "scaleY": 100,
          "alpha": 100,
          "depth": 37,
          "scrolling": true,
          "shuffleLock": false,
          "data": {
            "hotlinkId": "",
            "accState": 0,
            "vectorData": {
              "left": -2,
              "top": -2,
              "right": 2,
              "bottom": 53,
              "altText": "Conector recto 116",
              "pngfb": false,
              "pr": {
                "l": "Lib",
                "i": 673
              }
            },
            "html5data": {
              "xPos": -2,
              "yPos": -2,
              "width": 4,
              "height": 55,
              "strokewidth": 1
            }
          },
          "animations": [
            {
              "kind": "animation",
              "id": "Entrance",
              "duration": 750,
              "hidetextatstart": true,
              "animateshapewithtext": false,
              "tweens": [
                {
                  "kind": "tween",
                  "time": 0,
                  "duration": 750,
                  "alpha": {
                    "path": [
                      {
                        "kind": "segment",
                        "start": "0",
                        "dstart": "0",
                        "end": "100",
                        "dend": "0"
                      }
                    ],
                    "duration": 750,
                    "easing": "linear",
                    "easingdir": "easein"
                  }
                }
              ]
            }
          ],
          "width": 0,
          "height": 51,
          "resume": false,
          "useHandCursor": true,
          "id": "6B7YcTz7JDZ"
        }
      ],
      "startTime": -1,
      "elapsedTimeMode": "normal",
      "useHandCursor": false,
      "resume": false,
      "kind": "slidelayer",
      "isBaseLayer": true
    }
  ]
,
  });
