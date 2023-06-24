﻿window.globalProvideData('slide', 
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
    "slideNumberInScene": 35,
    "includeInSlideCounts": true,
    "presenterRef": {
        "id": "none"
    },
    "showAnimationId": "",
    "lmsId": "Slide35",
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
    "id": "5reQ4I390xS",
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
                        "value": "_player.62Io9d9R7HS.6ns05R1d51I"
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
        "NavigationRestrictionNextSlide_5reQ4I390xS": {
            "kind": "actiongroup",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "ActGrpOnNextButtonClick"
                }
            ]
        },
        "NavigationRestrictionPreviousSlide_5reQ4I390xS": {
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
                    "id": "NavigationRestrictionNextSlide_5reQ4I390xS"
                }
            ]
        },
        {
            "kind": "onprevslide",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "NavigationRestrictionPreviousSlide_5reQ4I390xS"
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
                        "value": "_player.62Io9d9R7HS.6ns05R1d51I"
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
                    "assetId": 335,
                    "id": "5Yr8vrHeCZi"
                }
            ],
            "enableSeek": true,
            "enableReplay": true,
            "timeline": {
                "duration": 28562,
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
                                    "value": "5xHjxUHHXTm"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "68nwhqxJmfZ"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5vyIxrG40VP"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5vyIxrG40VP.5hwDvug85l3"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5vyIxrG40VP.6r8lJQLo7NY"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5vyIxrG40VP.6rKWQER4YGq"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5vyIxrG40VP.6Ry39pZBt81"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5vyIxrG40VP.6LJfedYOAvH"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5vyIxrG40VP.6AyraYroWss"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6N4bdZPaIwS"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5czXWvvzond"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5bGaW90stQK"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6Ekos8XBti6"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6Ekos8XBti6.6hNna9u81uS"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6Ekos8XBti6.5xd6VImDklO"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6Ekos8XBti6.5fd3yqqkIO3"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6Ekos8XBti6.6F1JpZKjRiC"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6Yug9FmoKVe"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5cO3X4uQrLq"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6mDY2T4fucP"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6mpXUHoGHkB"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "62dKOwC2jHe"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6DfmnOBjumk"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5k7oS0JMdKE"
                                }
                            },
                            {
                                "kind": "media_seek",
                                "position": 0,
                                "objRef": {
                                    "type": "string",
                                    "value": "5Yr8vrHeCZi"
                                }
                            },
                            {
                                "kind": "media_play",
                                "objRef": {
                                    "type": "string",
                                    "value": "5Yr8vrHeCZi"
                                }
                            },
                            {
                                "kind": "set_volume",
                                "volume": 75,
                                "objRef": {
                                    "type": "string",
                                    "value": "5Yr8vrHeCZi"
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
                        "time": 11500,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6l5HrhEY6o8"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6TRegiOaVIO"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5YHK7j0xU8U"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 19000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6TGTBcCeCYq"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6U9RkdwNQlM"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "684l6OKs21y"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5kKfYGN5bXq"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6Gmkte4w9J0"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6kaMv8AHp35"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 24000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "68hE52RRYS1"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5bvlrTI66OB"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5VXHksIoLsb"
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
                    "tabIndex": 5,
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
                            "assetId": 314,
                            "id": "01",
                            "url": "story_content/6GfZpCKbWzC.png",
                            "type": "normal",
                            "altText": "Picture 1.png",
                            "width": 1336,
                            "height": 891,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 351,
                    "yPos": 94,
                    "tabIndex": 23,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 334,
                    "rotateYPos": 223,
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
                            "right": 668,
                            "bottom": 446,
                            "altText": "Picture 1.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 804
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 668,
                            "height": 446,
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
                    "width": 668,
                    "height": 446,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5xHjxUHHXTm"
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
                            "assetId": 330,
                            "id": "01",
                            "url": "story_content/6GPqDlI6skj.png",
                            "type": "normal",
                            "altText": "Picture 2.png",
                            "width": 121,
                            "height": 126,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 520,
                    "yPos": 268,
                    "tabIndex": 29,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 30,
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
                            "left": -4,
                            "top": -4,
                            "right": 63,
                            "bottom": 66,
                            "altText": "Picture 2.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 831
                            }
                        },
                        "html5data": {
                            "xPos": -2,
                            "yPos": -2,
                            "width": 63,
                            "height": 66,
                            "strokewidth": 2
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
                    "width": 60,
                    "height": 63,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6TGTBcCeCYq"
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
                            "assetId": 331,
                            "id": "01",
                            "url": "story_content/6jqEiYirGa6.png",
                            "type": "normal",
                            "altText": "Picture 3.png",
                            "width": 118,
                            "height": 122,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 561,
                    "yPos": 401,
                    "tabIndex": 36,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 29,
                    "rotateYPos": 30.5,
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
                            "right": 60,
                            "bottom": 63,
                            "altText": "Picture 3.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 832
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 58,
                            "height": 61,
                            "strokewidth": 2
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
                    "width": 58,
                    "height": 61,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "68hE52RRYS1"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 0,
                    "yPos": -4,
                    "tabIndex": 1,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 481,
                    "rotateYPos": 31.5,
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
                            "right": 963,
                            "bottom": 63,
                            "altText": "Google Shape;886;p17",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 833
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
                    "id": "68nwhqxJmfZ"
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
                                    "uniqueId": "5hwDvug85l3_-1039072680",
                                    "id": "01",
                                    "linkId": "txt__default_5hwDvug85l3",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 139,
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
                                                        "text": "Socializing with friends around meals",
                                                        "style": {
                                                            "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
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
                                                        "len": 37,
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
                                        "right": 140,
                                        "bottom": 30,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 824
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 145,
                            "yPos": 12,
                            "tabIndex": 19,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 72.5,
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
                                    "right": 145,
                                    "bottom": 33,
                                    "altText": "Socializing with friends around meals",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 823
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 145,
                                    "height": 33,
                                    "strokewidth": 0
                                }
                            },
                            "width": 145,
                            "height": 33,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5hwDvug85l3"
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
                                    "uniqueId": "6r8lJQLo7NY_-1316459894",
                                    "id": "01",
                                    "linkId": "txt__default_6r8lJQLo7NY",
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
                                                            "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                                            "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                        "bottom": 38,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 834
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 287,
                            "yPos": 8,
                            "tabIndex": 18,
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
                            "id": "6r8lJQLo7NY"
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
                                    "uniqueId": "6rKWQER4YGq_-1703171472",
                                    "id": "01",
                                    "linkId": "txt__default_6rKWQER4YGq",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 188,
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
                                                        "text": "Elevate ‘The meal Experience’\\n",
                                                        "style": {
                                                            "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
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
                                                        "len": 30,
                                                        "flowDirection": "leftToRight",
                                                        "cursive": false
                                                    }
                                                ]
                                            },
                                            {
                                                "spans": [
                                                    {
                                                        "text": "Discover New favorite",
                                                        "style": {
                                                            "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
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
                                        "right": 179,
                                        "bottom": 30,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 826
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 430,
                            "yPos": 12,
                            "tabIndex": 20,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 97,
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
                                    "right": 194,
                                    "bottom": 33,
                                    "altText": "Elevate ‘The meal Experience’\\nDiscover New favorite",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 825
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 194,
                                    "height": 33,
                                    "strokewidth": 0
                                }
                            },
                            "width": 194,
                            "height": 33,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6rKWQER4YGq"
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
                                    "uniqueId": "6Ry39pZBt81_536211091",
                                    "id": "01",
                                    "linkId": "txt__default_6Ry39pZBt81",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 141,
                                    "height": 51,
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
                                                            "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                                            "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                        "right": 87,
                                        "bottom": 54,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 828
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 645,
                            "yPos": 0,
                            "tabIndex": 15,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 73.5,
                            "rotateYPos": 28.5,
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
                                    "right": 147,
                                    "bottom": 57,
                                    "altText": "EXECUTION PRIORITIES\\nBE RELEVANT",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 827
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 147,
                                    "height": 57,
                                    "strokewidth": 0
                                }
                            },
                            "width": 147,
                            "height": 57,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6Ry39pZBt81"
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
                                    "uniqueId": "6LJfedYOAvH_1867405531",
                                    "id": "01",
                                    "linkId": "txt__default_6LJfedYOAvH",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 100,
                                    "height": 40,
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
                                                        "text": "Counter\\n",
                                                        "style": {
                                                            "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
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
                                                        "len": 8,
                                                        "flowDirection": "leftToRight",
                                                        "cursive": false
                                                    }
                                                ]
                                            },
                                            {
                                                "spans": [
                                                    {
                                                        "text": "Table / Menu\\n",
                                                        "style": {
                                                            "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
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
                                                        "len": 13,
                                                        "flowDirection": "leftToRight",
                                                        "cursive": false
                                                    }
                                                ]
                                            },
                                            {
                                                "spans": [
                                                    {
                                                        "text": "Cooler",
                                                        "style": {
                                                            "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
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
                                        "right": 79,
                                        "bottom": 42,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 835
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 766,
                            "yPos": 6,
                            "tabIndex": 16,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 53,
                            "rotateYPos": 23,
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
                                    "right": 106,
                                    "bottom": 46,
                                    "altText": "Counter\\nTable / Menu\\nCooler",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 829
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 106,
                                    "height": 46,
                                    "strokewidth": 0
                                }
                            },
                            "width": 106,
                            "height": 46,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6LJfedYOAvH"
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
                                    "uniqueId": "6AyraYroWss_-1898117880",
                                    "id": "01",
                                    "linkId": "txt__default_6AyraYroWss",
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
                                                            "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                                            "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                        "bottom": 38,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 836
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 8,
                            "tabIndex": 17,
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
                            "id": "6AyraYroWss"
                        }
                    ],
                    "accType": "text",
                    "altText": "Agrupar 4",
                    "shapemaskId": "",
                    "xPos": 27,
                    "yPos": 60,
                    "tabIndex": 14,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 436,
                    "rotateYPos": 28.5,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 7,
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
                    "width": 872,
                    "height": 57,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5vyIxrG40VP"
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
                            "assetId": 332,
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
                    "xPos": 14,
                    "yPos": 119,
                    "tabIndex": 24,
                    "tabEnabled": true,
                    "xOffset": -5,
                    "yOffset": -5,
                    "rotateXPos": 462,
                    "rotateYPos": 0,
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
                            "url": "txt__default_6N4bdZPaIwS.png",
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
                    "id": "6N4bdZPaIwS"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 312,
                    "yPos": 60,
                    "tabIndex": 21,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": -0.5,
                    "rotateYPos": 25,
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
                            "left": -2,
                            "top": -2,
                            "right": 2,
                            "bottom": 53,
                            "altText": "Straight Connector 6",
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
                    "width": 0,
                    "height": 51,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5czXWvvzond"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 657,
                    "yPos": 61,
                    "tabIndex": 22,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": -0.5,
                    "rotateYPos": 25,
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
                            "left": -2,
                            "top": -2,
                            "right": 2,
                            "bottom": 53,
                            "altText": "Straight Connector 116",
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
                    "width": 0,
                    "height": 51,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5bGaW90stQK"
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
                            "uniqueId": "5bvlrTI66OB_-1937815860",
                            "id": "01",
                            "linkId": "txt__default_5bvlrTI66OB",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 10,
                            "yAccOffset": 6,
                            "width": 6,
                            "height": 14,
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
                                                "text": "4",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 10.125,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 14.081,
                                                    "descent": 2.93,
                                                    "leading": 0,
                                                    "underlinePosition": -1.35,
                                                    "underlineThickness": 0.675,
                                                    "xHeight": 6.669
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
                                    "justification": "center",
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
                                        "foregroundColor": "#FFFFFF",
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
                                "right": 17,
                                "bottom": 22,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 693
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 580,
                    "yPos": 445,
                    "tabIndex": 38,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 12.5,
                    "rotateYPos": 12.5,
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
                            "left": -1,
                            "top": -1,
                            "right": 28,
                            "bottom": 28,
                            "altText": "4",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 687
                            }
                        },
                        "html5data": {
                            "xPos": -1,
                            "yPos": -1,
                            "width": 29,
                            "height": 29,
                            "strokewidth": 2
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
                    "width": 26,
                    "height": 26,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5bvlrTI66OB"
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
                                    "assetId": 315,
                                    "id": "01",
                                    "url": "story_content/5y1GrOiFXpC.png",
                                    "type": "normal",
                                    "altText": "Picture 2.png",
                                    "width": 10,
                                    "height": 36,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 0,
                            "tabIndex": 7,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 2,
                            "rotateYPos": 9,
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
                                    "bottom": 18,
                                    "altText": "Picture 2.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 806
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 4,
                                    "height": 18,
                                    "strokewidth": 0
                                }
                            },
                            "width": 4,
                            "height": 18,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6hNna9u81uS"
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
                                    "assetId": 316,
                                    "id": "01",
                                    "url": "story_content/5oltVPtTGsB.png",
                                    "type": "normal",
                                    "altText": "Picture 3.png",
                                    "width": 30,
                                    "height": 27,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 3,
                            "yPos": 18,
                            "tabIndex": 11,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 7.5,
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
                                    "right": 15,
                                    "bottom": 14,
                                    "altText": "Picture 3.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 807
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 15,
                                    "height": 14,
                                    "strokewidth": 0
                                }
                            },
                            "width": 15,
                            "height": 14,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5xd6VImDklO"
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
                                    "assetId": 317,
                                    "id": "01",
                                    "url": "story_content/6QYrsQ2HLQ6.png",
                                    "type": "normal",
                                    "altText": "Picture 4.png",
                                    "width": 10,
                                    "height": 36,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 49,
                            "yPos": 0,
                            "tabIndex": 8,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 2,
                            "rotateYPos": 9,
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
                                    "right": 4,
                                    "bottom": 18,
                                    "altText": "Picture 4.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 806
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 4,
                                    "height": 18,
                                    "strokewidth": 0
                                }
                            },
                            "width": 4,
                            "height": 18,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5fd3yqqkIO3"
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
                                    "assetId": 316,
                                    "id": "01",
                                    "url": "story_content/5oltVPtTGsB.png",
                                    "type": "normal",
                                    "altText": "Picture 3.png",
                                    "width": 30,
                                    "height": 27,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 34,
                            "yPos": 18,
                            "tabIndex": 12,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 7.5,
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
                                    "right": 15,
                                    "bottom": 14,
                                    "altText": "Picture 3.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 807
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 15,
                                    "height": 14,
                                    "strokewidth": 0
                                }
                            },
                            "width": 15,
                            "height": 14,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6F1JpZKjRiC"
                        }
                    ],
                    "accType": "text",
                    "altText": "Graphic 9",
                    "shapemaskId": "",
                    "xPos": 758,
                    "yPos": 8,
                    "tabIndex": 6,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 26,
                    "rotateYPos": 15.5,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 12,
                    "scrolling": true,
                    "shuffleLock": false,
                    "width": 52,
                    "height": 31,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6Ekos8XBti6"
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
                            "uniqueId": "6Yug9FmoKVe_858151722",
                            "id": "01",
                            "linkId": "txt__default_6Yug9FmoKVe",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 142,
                            "height": 21,
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
                                                "text": "FOOD OUTLETS",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                "right": 130,
                                "bottom": 24,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 808
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 806,
                    "yPos": 11,
                    "tabIndex": 13,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 74,
                    "rotateYPos": 13.5,
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
                            "right": 148,
                            "bottom": 27,
                            "altText": "FOOD OUTLETS",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 679
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 148,
                            "height": 27,
                            "strokewidth": 0
                        }
                    },
                    "width": 148,
                    "height": 27,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6Yug9FmoKVe"
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
                    "tabIndex": 4,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 0,
                    "rotateYPos": 18.5,
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
                    "id": "5cO3X4uQrLq"
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
                            "uniqueId": "6mDY2T4fucP_-74088533",
                            "id": "01",
                            "linkId": "txt__default_6mDY2T4fucP",
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
                                                "text": "SABORES PICOS",
                                                "style": {
                                                    "fontFamily": "\"Topo Chico Regular Char806C23FC\",\"Topo Chico Regular\",\"Topo Chico\"",
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
                                                "len": 13,
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
                                "right": 200,
                                "bottom": 52,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 685
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 134,
                    "yPos": -5,
                    "tabIndex": 0,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 254.5,
                    "rotateYPos": 27.5,
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
                            "right": 510,
                            "bottom": 56,
                            "altText": "SABORES PICOS",
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
                    "id": "6mDY2T4fucP"
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
                            "assetId": 333,
                            "id": "01",
                            "url": "story_content/5uF2EAr6jGZ.png",
                            "type": "normal",
                            "altText": "Picture 10.png",
                            "width": 120,
                            "height": 120,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 835,
                    "yPos": 411,
                    "tabIndex": 37,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 30,
                    "rotateYPos": 30,
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
                            "left": -2,
                            "top": -2,
                            "right": 62,
                            "bottom": 62,
                            "altText": "Picture 10.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 837
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 60,
                            "height": 60,
                            "strokewidth": 2
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
                    "width": 60,
                    "height": 60,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6l5HrhEY6o8"
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
                            "uniqueId": "6TRegiOaVIO_18727936",
                            "id": "01",
                            "linkId": "txt__default_6TRegiOaVIO",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 10,
                            "yAccOffset": 6,
                            "width": 6,
                            "height": 14,
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
                                                "text": "1",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 10.125,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 14.081,
                                                    "descent": 2.93,
                                                    "leading": 0,
                                                    "underlinePosition": -1.35,
                                                    "underlineThickness": 0.675,
                                                    "xHeight": 6.669
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
                                    "justification": "center",
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
                                        "foregroundColor": "#FFFFFF",
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
                                "right": 16,
                                "bottom": 22,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 688
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 854,
                    "yPos": 462,
                    "tabIndex": 39,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 12.5,
                    "rotateYPos": 12.5,
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
                            "left": -1,
                            "top": -1,
                            "right": 28,
                            "bottom": 28,
                            "altText": "1",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 687
                            }
                        },
                        "html5data": {
                            "xPos": -1,
                            "yPos": -1,
                            "width": 29,
                            "height": 29,
                            "strokewidth": 2
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
                    "width": 26,
                    "height": 26,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6TRegiOaVIO"
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
                            "uniqueId": "6U9RkdwNQlM_-1002598674",
                            "id": "01",
                            "linkId": "txt__default_6U9RkdwNQlM",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 10,
                            "yAccOffset": 6,
                            "width": 6,
                            "height": 14,
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
                                                "text": "3",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 10.125,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 14.081,
                                                    "descent": 2.93,
                                                    "leading": 0,
                                                    "underlinePosition": -1.35,
                                                    "underlineThickness": 0.675,
                                                    "xHeight": 6.669
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
                                    "justification": "center",
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
                                        "foregroundColor": "#FFFFFF",
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
                                "right": 17,
                                "bottom": 22,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 691
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 539,
                    "yPos": 321,
                    "tabIndex": 33,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 12.5,
                    "rotateYPos": 12.5,
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
                            "left": -1,
                            "top": -1,
                            "right": 28,
                            "bottom": 28,
                            "altText": "3",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 687
                            }
                        },
                        "html5data": {
                            "xPos": -1,
                            "yPos": -1,
                            "width": 29,
                            "height": 29,
                            "strokewidth": 2
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
                    "width": 26,
                    "height": 26,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6U9RkdwNQlM"
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
                            "uniqueId": "5YHK7j0xU8U_1525431655",
                            "id": "01",
                            "linkId": "txt__default_5YHK7j0xU8U",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 216,
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
                                                "text": "Menu Board",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 14.747,
                                                    "descent": 3.92,
                                                    "leading": 0,
                                                    "underlinePosition": -2.296,
                                                    "underlineThickness": 0.373,
                                                    "xHeight": 9.016
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 20.25,
                                            "firstLineMargin": 0,
                                            "justification": "left",
                                            "listLevel": 1,
                                            "lineSpacingRule": "multiple",
                                            "lineSpacing": 20,
                                            "spacingBefore": 0,
                                            "spacingAfter": 0,
                                            "listStyle": {
                                                "listType": "listNumberedAsArabic",
                                                "listTypeFormat": "period",
                                                "start": 0,
                                                "size": 100,
                                                "bulletChar": 8226,
                                                "bulletFont": "\"Arial Charset0_v8wz5YMo9EE9FF07\",\"Arial\"",
                                                "bulletPicture": {
                                                    "w": 0,
                                                    "h": 0,
                                                    "base64": 0
                                                },
                                                "color": "#000000"
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
                                "right": 118,
                                "bottom": 22,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 838
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 50,
                    "yPos": 213,
                    "tabIndex": 26,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 111,
                    "rotateYPos": 12.5,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "depth": 19,
                    "scrolling": true,
                    "shuffleLock": false,
                    "data": {
                        "hotlinkId": "",
                        "accState": 0,
                        "vectorData": {
                            "left": 0,
                            "top": 0,
                            "right": 222,
                            "bottom": 25,
                            "altText": "Menu Board",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 143
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 222,
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
                    "width": 222,
                    "height": 25,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5YHK7j0xU8U"
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
                            "uniqueId": "6mpXUHoGHkB_1925397884",
                            "id": "01",
                            "linkId": "txt__default_6mpXUHoGHkB",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 158,
                            "height": 28,
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
                                                "text": "Transition",
                                                "style": {
                                                    "fontFamily": "\"ArialBold Charset0_Bold3D70FAD3\",\"Arial\"",
                                                    "fontSize": 18,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#EC0728",
                                                    "linkColor": "#EC0728",
                                                    "ascent": 21.727,
                                                    "descent": 5.086,
                                                    "leading": 0.785,
                                                    "underlinePosition": -2.543,
                                                    "underlineThickness": 2.52,
                                                    "xHeight": 12.445
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "left",
                                            "listLevel": 1,
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 18,
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
                                "right": 118,
                                "bottom": 32,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 774
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 50,
                    "yPos": 175,
                    "tabIndex": 25,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 82,
                    "rotateYPos": 17,
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
                            "right": 164,
                            "bottom": 34,
                            "altText": "Transition",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 708
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 164,
                            "height": 34,
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
                    "width": 164,
                    "height": 34,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6mpXUHoGHkB"
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
                            "uniqueId": "684l6OKs21y_-1334216640",
                            "id": "01",
                            "linkId": "txt__default_684l6OKs21y",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 216,
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
                                                "text": "2. Backlight topper",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 14.747,
                                                    "descent": 3.92,
                                                    "leading": 0,
                                                    "underlinePosition": -2.296,
                                                    "underlineThickness": 0.373,
                                                    "xHeight": 9.016
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
                                                "len": 19,
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
                                "right": 158,
                                "bottom": 21,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 839
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 50,
                    "yPos": 280,
                    "tabIndex": 30,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 111,
                    "rotateYPos": 12.5,
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
                            "right": 222,
                            "bottom": 25,
                            "altText": "2. Backlight topper",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 143
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 222,
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
                    "width": 222,
                    "height": 25,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "684l6OKs21y"
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
                            "uniqueId": "62dKOwC2jHe_-2078827669",
                            "id": "01",
                            "linkId": "txt__default_62dKOwC2jHe",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 158,
                            "height": 28,
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
                                                "text": "Impulse",
                                                "style": {
                                                    "fontFamily": "\"ArialBold Charset0_Bold3D70FAD3\",\"Arial\"",
                                                    "fontSize": 18,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#EC0728",
                                                    "linkColor": "#EC0728",
                                                    "ascent": 21.727,
                                                    "descent": 5.086,
                                                    "leading": 0.785,
                                                    "underlinePosition": -2.543,
                                                    "underlineThickness": 2.52,
                                                    "xHeight": 12.445
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "left",
                                            "listLevel": 1,
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 18,
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
                                "right": 94,
                                "bottom": 32,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 710
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 50,
                    "yPos": 242,
                    "tabIndex": 27,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 82,
                    "rotateYPos": 17,
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
                            "right": 164,
                            "bottom": 34,
                            "altText": "Impulse",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 708
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 164,
                            "height": 34,
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
                    "width": 164,
                    "height": 34,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "62dKOwC2jHe"
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
                            "uniqueId": "5VXHksIoLsb_-1402387884",
                            "id": "01",
                            "linkId": "txt__default_5VXHksIoLsb",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 216,
                            "height": 57,
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
                                                "text": "4. Open Cooler activation\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 14.747,
                                                    "descent": 3.92,
                                                    "leading": 0,
                                                    "underlinePosition": -2.296,
                                                    "underlineThickness": 0.373,
                                                    "xHeight": 9.016
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
                                                "len": 26,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Shelf strip\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 14.747,
                                                    "descent": 3.92,
                                                    "leading": 0,
                                                    "underlinePosition": -2.296,
                                                    "underlineThickness": 0.373,
                                                    "xHeight": 9.016
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 15.188,
                                            "firstLineMargin": 0,
                                            "justification": "left",
                                            "listLevel": 1,
                                            "lineSpacingRule": "multiple",
                                            "lineSpacing": 20,
                                            "spacingBefore": 0,
                                            "spacingAfter": 0,
                                            "listStyle": {
                                                "listType": "bullet",
                                                "listTypeFormat": "plain",
                                                "start": 0,
                                                "size": 100,
                                                "bulletChar": 45,
                                                "bulletFont": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                "bulletPicture": {
                                                    "w": 0,
                                                    "h": 0,
                                                    "base64": 0
                                                },
                                                "color": "#000000"
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Wobbler",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 14.747,
                                                    "descent": 3.92,
                                                    "leading": 0,
                                                    "underlinePosition": -2.296,
                                                    "underlineThickness": 0.373,
                                                    "xHeight": 9.016
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 15.188,
                                            "firstLineMargin": 0,
                                            "justification": "left",
                                            "listLevel": 1,
                                            "lineSpacingRule": "multiple",
                                            "lineSpacing": 20,
                                            "spacingBefore": 0,
                                            "spacingAfter": 0,
                                            "listStyle": {
                                                "listType": "bullet",
                                                "listTypeFormat": "plain",
                                                "start": 0,
                                                "size": 100,
                                                "bulletChar": 45,
                                                "bulletFont": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                "bulletPicture": {
                                                    "w": 0,
                                                    "h": 0,
                                                    "base64": 0
                                                },
                                                "color": "#000000"
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
                                "right": 212,
                                "bottom": 60,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 841
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 50,
                    "yPos": 379,
                    "tabIndex": 35,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 111,
                    "rotateYPos": 31.5,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "depth": 23,
                    "scrolling": true,
                    "shuffleLock": false,
                    "data": {
                        "hotlinkId": "",
                        "accState": 0,
                        "vectorData": {
                            "left": 0,
                            "top": 0,
                            "right": 222,
                            "bottom": 63,
                            "altText": "4. Open Cooler activation\\nShelf strip\\nWobbler",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 840
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 222,
                            "height": 63,
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
                    "width": 222,
                    "height": 63,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5VXHksIoLsb"
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
                            "uniqueId": "6DfmnOBjumk_136264243",
                            "id": "01",
                            "linkId": "txt__default_6DfmnOBjumk",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 158,
                            "height": 28,
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
                                                "text": "Destination",
                                                "style": {
                                                    "fontFamily": "\"ArialBold Charset0_Bold3D70FAD3\",\"Arial\"",
                                                    "fontSize": 18,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#EC0728",
                                                    "linkColor": "#EC0728",
                                                    "ascent": 21.727,
                                                    "descent": 5.086,
                                                    "leading": 0.785,
                                                    "underlinePosition": -2.543,
                                                    "underlineThickness": 2.52,
                                                    "xHeight": 12.445
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "left",
                                            "listLevel": 1,
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 18,
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
                                "right": 134,
                                "bottom": 32,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 709
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 50,
                    "yPos": 341,
                    "tabIndex": 34,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 82,
                    "rotateYPos": 17,
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
                            "right": 164,
                            "bottom": 34,
                            "altText": "Destination",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 708
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 164,
                            "height": 34,
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
                    "width": 164,
                    "height": 34,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6DfmnOBjumk"
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
                    "depth": 25,
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
                    "id": "5k7oS0JMdKE"
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
                            "assetId": 334,
                            "id": "01",
                            "url": "story_content/6l5rIRY8PI3.png",
                            "type": "normal",
                            "altText": "Picture 12.png",
                            "width": 134,
                            "height": 128,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 600,
                    "yPos": 257,
                    "tabIndex": 28,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 33.5,
                    "rotateYPos": 31.5,
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
                            "left": -4,
                            "top": -4,
                            "right": 70,
                            "bottom": 66,
                            "altText": "Picture 12.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 842
                            }
                        },
                        "html5data": {
                            "xPos": -2,
                            "yPos": -2,
                            "width": 70,
                            "height": 66,
                            "strokewidth": 2
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
                    "width": 67,
                    "height": 63,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5kKfYGN5bXq"
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
                            "uniqueId": "6Gmkte4w9J0_1318954989",
                            "id": "01",
                            "linkId": "txt__default_6Gmkte4w9J0",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 10,
                            "yAccOffset": 6,
                            "width": 6,
                            "height": 14,
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
                                                "text": "2",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 10.125,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 14.081,
                                                    "descent": 2.93,
                                                    "leading": 0,
                                                    "underlinePosition": -1.35,
                                                    "underlineThickness": 0.675,
                                                    "xHeight": 6.669
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
                                    "justification": "center",
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
                                        "foregroundColor": "#FFFFFF",
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
                                "right": 17,
                                "bottom": 22,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 690
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 621,
                    "yPos": 309,
                    "tabIndex": 32,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 12.5,
                    "rotateYPos": 12.5,
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
                            "left": -1,
                            "top": -1,
                            "right": 28,
                            "bottom": 28,
                            "altText": "2",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 687
                            }
                        },
                        "html5data": {
                            "xPos": -1,
                            "yPos": -1,
                            "width": 29,
                            "height": 29,
                            "strokewidth": 2
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
                    "width": 26,
                    "height": 26,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6Gmkte4w9J0"
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
                            "uniqueId": "6kaMv8AHp35_71221091",
                            "id": "01",
                            "linkId": "txt__default_6kaMv8AHp35",
                            "type": "acctext",
                            "xPos": 10,
                            "yPos": 5,
                            "xAccOffset": 10,
                            "yAccOffset": 5,
                            "width": 220,
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
                                                "text": "3. Doble Sided Table Tent",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 14.747,
                                                    "descent": 3.92,
                                                    "leading": 0,
                                                    "underlinePosition": -2.296,
                                                    "underlineThickness": 0.373,
                                                    "xHeight": 9.016
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
                                                "len": 25,
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
                                "right": 220,
                                "bottom": 24,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 844
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 44,
                    "yPos": 308,
                    "tabIndex": 31,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 120,
                    "rotateYPos": 14.5,
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
                            "right": 240,
                            "bottom": 29,
                            "altText": "3. Doble Sided Table Tent",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 843
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 240,
                            "height": 29,
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
                    "width": 240,
                    "height": 29,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6kaMv8AHp35"
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
});