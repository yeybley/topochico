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
    "slideNumberInScene": 34,
    "includeInSlideCounts": true,
    "presenterRef": {
        "id": "none"
    },
    "showAnimationId": "",
    "lmsId": "Slide34",
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
    "id": "65iOgmNgQbP",
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
                        "value": "_player.62Io9d9R7HS.5reQ4I390xS"
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
        "NavigationRestrictionNextSlide_65iOgmNgQbP": {
            "kind": "actiongroup",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "ActGrpOnNextButtonClick"
                }
            ]
        },
        "NavigationRestrictionPreviousSlide_65iOgmNgQbP": {
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
                    "id": "NavigationRestrictionNextSlide_65iOgmNgQbP"
                }
            ]
        },
        {
            "kind": "onprevslide",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "NavigationRestrictionPreviousSlide_65iOgmNgQbP"
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
                        "value": "_player.62Io9d9R7HS.5reQ4I390xS"
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
                    "assetId": 329,
                    "id": "5oN1wUh0qwx"
                }
            ],
            "enableSeek": true,
            "enableReplay": true,
            "timeline": {
                "duration": 15312,
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
                                    "value": "5ieF9Micdq7"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6iZJidbivcU"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5VuYXvpw4r2"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6IjG1tPVEg8"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6NN61SKfuVi"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6NN61SKfuVi.6jImPf2LCXs"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6NN61SKfuVi.6ROQ0ErvVfY"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6NN61SKfuVi.6dVECTt7dQc"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6NN61SKfuVi.5kQsgOvVlxM"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "69Gk5CvrJ2q"
                                }
                            },
                            {
                                "kind": "media_seek",
                                "position": 0,
                                "objRef": {
                                    "type": "string",
                                    "value": "5oN1wUh0qwx"
                                }
                            },
                            {
                                "kind": "media_play",
                                "objRef": {
                                    "type": "string",
                                    "value": "5oN1wUh0qwx"
                                }
                            },
                            {
                                "kind": "set_volume",
                                "volume": 75,
                                "objRef": {
                                    "type": "string",
                                    "value": "5oN1wUh0qwx"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6DWaFxDewwn"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5WFehsIdGv1"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5WFehsIdGv1.5n0fehsIslo"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5WFehsIdGv1.618Y6s2TBU4"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5WFehsIdGv1.5xrf7DJZOJA"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5WFehsIdGv1.6ER1Y04xnSq"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5WFehsIdGv1.6F0NJZeiGm8"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5WFehsIdGv1.6VR03EzGwla"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5X50FqBlEhq"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6YUllniAwCs"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6jckZnOFKzq"
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
                        "time": 4000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6LfDJctxI4s"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6WP4enoOoal"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6L3fIlI9SWQ"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6L3fIlI9SWQ.6aTtNnrUQNZ"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6L3fIlI9SWQ.5rnOW50wr34"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6L3fIlI9SWQ.6BiHnJxm1PA"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6RDRY4QaeDj"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6AARhxiJaIt"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6CEQ9HDGDrC"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 9000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5mJ41ZyQIai"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6mE69TYltak"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6dCFrZBOeIn"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6Ugba7u4fdI"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6Ugba7u4fdI.6LWC1EIZ5c0"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6Ugba7u4fdI.5nTRBCxLupu"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6Ugba7u4fdI.6YsDKPDt24T"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6oLEPA5b0cr"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 11000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6aIPOXtOzVP"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5jh5dOAL6bw"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6hx0Yk4YA23"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5nW2c9VCl4f"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6bIYRy2abgt"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6bIYRy2abgt.6dTkOaAhlQM"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6bIYRy2abgt.64xmhsznZPB"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6bIYRy2abgt.5cunqv97UJ0"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6ODFA72ZUpB"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5qDnVzfU19C"
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
                    "tabIndex": 0,
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
                    "id": "5ieF9Micdq7"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 0,
                    "yPos": -1,
                    "tabIndex": 1,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 481,
                    "rotateYPos": 29,
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
                            "bottom": 59,
                            "altText": "Google Shape;886;p17",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 805
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 963,
                            "height": 59,
                            "strokewidth": 0
                        }
                    },
                    "width": 962,
                    "height": 58,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6iZJidbivcU"
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
                    "id": "5VuYXvpw4r2"
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
                            "uniqueId": "6IjG1tPVEg8_-1292665447",
                            "id": "01",
                            "linkId": "txt__default_6IjG1tPVEg8",
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
                    "yPos": 0,
                    "tabIndex": 3,
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
                    "id": "6IjG1tPVEg8"
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
                            "id": "6jImPf2LCXs"
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
                            "id": "6ROQ0ErvVfY"
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
                            "id": "6dVECTt7dQc"
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
                            "id": "5kQsgOvVlxM"
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
                    "depth": 7,
                    "scrolling": true,
                    "shuffleLock": false,
                    "width": 52,
                    "height": 31,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6NN61SKfuVi"
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
                            "uniqueId": "69Gk5CvrJ2q_-395722025",
                            "id": "01",
                            "linkId": "txt__default_69Gk5CvrJ2q",
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
                    "depth": 8,
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
                    "id": "69Gk5CvrJ2q"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 47,
                    "yPos": 294,
                    "tabIndex": 38,
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
                                "i": 809
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
                    "id": "5mJ41ZyQIai"
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
                            "uniqueId": "6mE69TYltak_725469937",
                            "id": "01",
                            "linkId": "txt__default_6mE69TYltak",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 146,
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
                                                "text": "GRAB AND GO",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                "right": 123,
                                "bottom": 22,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 810
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 62,
                    "yPos": 300,
                    "tabIndex": 39,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 76,
                    "rotateYPos": 12.5,
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
                            "right": 152,
                            "bottom": 25,
                            "altText": "GRAB AND GO",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 626
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 152,
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
                    "width": 152,
                    "height": 25,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6mE69TYltak"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 47,
                    "yPos": 344,
                    "tabIndex": 46,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 91,
                    "rotateYPos": 17.5,
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
                            "right": 182,
                            "bottom": 35,
                            "altText": "Google Shape;915;p74",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 811
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
                    "id": "6aIPOXtOzVP"
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
                            "uniqueId": "5jh5dOAL6bw_12246350",
                            "id": "01",
                            "linkId": "txt__default_5jh5dOAL6bw",
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
                                                "text": "CHECKOUT",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                "right": 112,
                                "bottom": 22,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 812
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 62,
                    "yPos": 350,
                    "tabIndex": 47,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 73.5,
                    "rotateYPos": 12.5,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "depth": 12,
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
                            "altText": "CHECKOUT",
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
                    "id": "5jh5dOAL6bw"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 47,
                    "yPos": 241,
                    "tabIndex": 30,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 91,
                    "rotateYPos": 17.5,
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
                            "right": 182,
                            "bottom": 35,
                            "altText": "Google Shape;915;p74",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 813
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
                    "id": "6LfDJctxI4s"
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
                            "uniqueId": "6WP4enoOoal_1713413770",
                            "id": "01",
                            "linkId": "txt__default_6WP4enoOoal",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 161,
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
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                "right": 112,
                                "bottom": 22,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 815
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 53,
                    "yPos": 247,
                    "tabIndex": 31,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 83.5,
                    "rotateYPos": 12.5,
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
                            "right": 167,
                            "bottom": 25,
                            "altText": "COOLER",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 814
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 167,
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
                    "width": 167,
                    "height": 25,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6WP4enoOoal"
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
                                    "assetId": 318,
                                    "id": "01",
                                    "url": "story_content/6EMbjIlMrRf.png",
                                    "type": "normal",
                                    "altText": "Picture 11.png",
                                    "width": 45,
                                    "height": 90,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 2,
                            "tabIndex": 29,
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
                                    "altText": "Picture 11.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 816
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
                            "id": "6aTtNnrUQNZ"
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
                            "tabIndex": 27,
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
                            "id": "5rnOW50wr34"
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
                                    "assetId": 319,
                                    "id": "01",
                                    "url": "story_content/6gIsaNUxgjv.png",
                                    "type": "normal",
                                    "altText": "Picture 13.png",
                                    "width": 46,
                                    "height": 90,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 18,
                            "yPos": 1,
                            "tabIndex": 28,
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
                                    "altText": "Picture 13.png",
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
                            "id": "6BiHnJxm1PA"
                        }
                    ],
                    "accType": "text",
                    "altText": "Group 2",
                    "shapemaskId": "",
                    "xPos": 230,
                    "yPos": 235,
                    "tabIndex": 26,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 29.5,
                    "rotateYPos": 23,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 15,
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
                    "id": "6L3fIlI9SWQ"
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
                            "uniqueId": "6RDRY4QaeDj_686350020",
                            "id": "01",
                            "linkId": "txt__default_6RDRY4QaeDj",
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
                                                    "fontFamily": "\"Topo Chico Regular Char806C23FC\",\"Topo Chico Regular\",\"Topo Chico\"",
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
                    "xPos": 263,
                    "yPos": 249,
                    "tabIndex": 33,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 49,
                    "rotateYPos": 9.5,
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
                    "id": "6RDRY4QaeDj"
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
                            "uniqueId": "6AARhxiJaIt_1994700195",
                            "id": "01",
                            "linkId": "txt__default_6AARhxiJaIt",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 5,
                            "height": 16,
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
                                                "text": "1",
                                                "style": {
                                                    "fontFamily": "\"Topo Chico Regular Char806C23FC\",\"Topo Chico Regular\",\"Topo Chico\"",
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
                                    "i": 817
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 25,
                    "yPos": 248,
                    "tabIndex": 32,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 9.5,
                    "rotateYPos": 11,
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
                    "id": "6AARhxiJaIt"
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
                            "assetId": 320,
                            "id": "01",
                            "url": "story_content/6UEnSc1jhDY.png",
                            "type": "normal",
                            "altText": "Picture 8.png",
                            "width": 340,
                            "height": 318,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 522,
                    "yPos": 378,
                    "tabIndex": 51,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 85,
                    "rotateYPos": 79.5,
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
                            "right": 170,
                            "bottom": 159,
                            "altText": "Picture 8.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 818
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 170,
                            "height": 159,
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
                                                    "dy": "167"
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
                    "width": 170,
                    "height": 159,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6CEQ9HDGDrC"
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
                            "assetId": 321,
                            "id": "01",
                            "url": "story_content/6dao4pMrWJu.png",
                            "type": "normal",
                            "altText": "Picture 9.png",
                            "width": 285,
                            "height": 308,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 570,
                    "yPos": 188,
                    "tabIndex": 25,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 71.5,
                    "rotateYPos": 77,
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
                            "right": 143,
                            "bottom": 154,
                            "altText": "Picture 9.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 819
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 143,
                            "height": 154,
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
                                                    "dy": "357"
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
                    "width": 143,
                    "height": 154,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6hx0Yk4YA23"
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
                            "assetId": 322,
                            "id": "01",
                            "url": "story_content/6g6usCuLuyD.png",
                            "type": "normal",
                            "altText": "Picture 10.png",
                            "width": 308,
                            "height": 279,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 689,
                    "yPos": 356,
                    "tabIndex": 50,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 77,
                    "rotateYPos": 70,
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
                            "right": 154,
                            "bottom": 140,
                            "altText": "Picture 10.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 820
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 154,
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
                                                    "dy": "189"
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
                    "width": 154,
                    "height": 140,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6dCFrZBOeIn"
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
                                    "assetId": 323,
                                    "id": "01",
                                    "url": "story_content/5oZmzGGPWyb.png",
                                    "type": "normal",
                                    "altText": "Picture 14.png",
                                    "width": 46,
                                    "height": 90,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 2,
                            "tabIndex": 37,
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
                                    "altText": "Picture 14.png",
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
                            "id": "6LWC1EIZ5c0"
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
                                    "assetId": 324,
                                    "id": "01",
                                    "url": "story_content/6np2s3QKl2Z.png",
                                    "type": "normal",
                                    "altText": "Picture 15.png",
                                    "width": 46,
                                    "height": 90,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 36,
                            "yPos": 0,
                            "tabIndex": 35,
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
                                    "altText": "Picture 15.png",
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
                            "id": "5nTRBCxLupu"
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
                                    "assetId": 325,
                                    "id": "01",
                                    "url": "story_content/5XLncUEr62s.png",
                                    "type": "normal",
                                    "altText": "Picture 16.png",
                                    "width": 46,
                                    "height": 90,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 18,
                            "yPos": 1,
                            "tabIndex": 36,
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
                                    "altText": "Picture 16.png",
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
                            "id": "6YsDKPDt24T"
                        }
                    ],
                    "accType": "text",
                    "altText": "Group 7",
                    "shapemaskId": "",
                    "xPos": 230,
                    "yPos": 288,
                    "tabIndex": 34,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 29.5,
                    "rotateYPos": 23,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 21,
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
                    "id": "6Ugba7u4fdI"
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
                            "uniqueId": "5nW2c9VCl4f_1745850647",
                            "id": "01",
                            "linkId": "txt__default_5nW2c9VCl4f",
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
                                                    "fontFamily": "\"Topo Chico Regular Char806C23FC\",\"Topo Chico Regular\",\"Topo Chico\"",
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
                    "xPos": 263,
                    "yPos": 302,
                    "tabIndex": 41,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 49,
                    "rotateYPos": 9.5,
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
                    "id": "5nW2c9VCl4f"
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
                                    "assetId": 326,
                                    "id": "01",
                                    "url": "story_content/5ux7Psp83V8.png",
                                    "type": "normal",
                                    "altText": "Picture 17.png",
                                    "width": 46,
                                    "height": 90,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 1,
                            "tabIndex": 45,
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
                                    "altText": "Picture 17.png",
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
                            "id": "6dTkOaAhlQM"
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
                                    "assetId": 327,
                                    "id": "01",
                                    "url": "story_content/65QUC2AeMK9.png",
                                    "type": "normal",
                                    "altText": "Picture 18.png",
                                    "width": 46,
                                    "height": 90,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 36,
                            "yPos": 0,
                            "tabIndex": 43,
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
                                    "altText": "Picture 18.png",
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
                            "id": "64xmhsznZPB"
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
                                    "assetId": 325,
                                    "id": "01",
                                    "url": "story_content/5XLncUEr62s.png",
                                    "type": "normal",
                                    "altText": "Picture 16.png",
                                    "width": 46,
                                    "height": 90,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 18,
                            "yPos": 1,
                            "tabIndex": 44,
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
                                    "altText": "Picture 16.png",
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
                            "id": "5cunqv97UJ0"
                        }
                    ],
                    "accType": "text",
                    "altText": "Group 12",
                    "shapemaskId": "",
                    "xPos": 230,
                    "yPos": 339,
                    "tabIndex": 42,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 29.5,
                    "rotateYPos": 23,
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
                    "width": 59,
                    "height": 46,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6bIYRy2abgt"
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
                            "uniqueId": "6ODFA72ZUpB_-1887896369",
                            "id": "01",
                            "linkId": "txt__default_6ODFA72ZUpB",
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
                                                    "fontFamily": "\"Topo Chico Regular Char806C23FC\",\"Topo Chico Regular\",\"Topo Chico\"",
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
                    "xPos": 263,
                    "yPos": 352,
                    "tabIndex": 49,
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
                    "id": "6ODFA72ZUpB"
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
                            "uniqueId": "6oLEPA5b0cr_1507223049",
                            "id": "01",
                            "linkId": "txt__default_6oLEPA5b0cr",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 5,
                            "height": 16,
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
                                                "text": "2",
                                                "style": {
                                                    "fontFamily": "\"Topo Chico Regular Char806C23FC\",\"Topo Chico Regular\",\"Topo Chico\"",
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
                                "right": 13,
                                "bottom": 21,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 821
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 27,
                    "yPos": 301,
                    "tabIndex": 40,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 9.5,
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
                            "right": 19,
                            "bottom": 22,
                            "altText": "2",
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
                    "id": "6oLEPA5b0cr"
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
                            "uniqueId": "5qDnVzfU19C_-2106551161",
                            "id": "01",
                            "linkId": "txt__default_5qDnVzfU19C",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 5,
                            "height": 16,
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
                                                "text": "3",
                                                "style": {
                                                    "fontFamily": "\"Topo Chico Regular Char806C23FC\",\"Topo Chico Regular\",\"Topo Chico\"",
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
                                "right": 13,
                                "bottom": 21,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 822
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 26,
                    "yPos": 351,
                    "tabIndex": 48,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 9.5,
                    "rotateYPos": 11,
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
                            "right": 19,
                            "bottom": 22,
                            "altText": "3",
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
                    "id": "5qDnVzfU19C"
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
                    "tabIndex": 2,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 65,
                    "rotateYPos": 22.5,
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
                    "id": "6DWaFxDewwn"
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
                                    "uniqueId": "5n0fehsIslo_1852341293",
                                    "id": "01",
                                    "linkId": "txt__default_5n0fehsIslo",
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
                            "yPos": 6,
                            "tabIndex": 20,
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
                            "id": "5n0fehsIslo"
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
                                    "uniqueId": "618Y6s2TBU4_1682309132",
                                    "id": "01",
                                    "linkId": "txt__default_618Y6s2TBU4",
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
                                        "bottom": 37,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 665
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 287,
                            "yPos": 2,
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
                            "id": "618Y6s2TBU4"
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
                                    "uniqueId": "5xrf7DJZOJA_-816605830",
                                    "id": "01",
                                    "linkId": "txt__default_5xrf7DJZOJA",
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
                            "yPos": 6,
                            "tabIndex": 21,
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
                            "id": "5xrf7DJZOJA"
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
                                    "uniqueId": "6ER1Y04xnSq_-1572260453",
                                    "id": "01",
                                    "linkId": "txt__default_6ER1Y04xnSq",
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
                            "yPos": 2,
                            "tabIndex": 19,
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
                            "id": "6ER1Y04xnSq"
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
                                    "uniqueId": "6F0NJZeiGm8_8536012",
                                    "id": "01",
                                    "linkId": "txt__default_6F0NJZeiGm8",
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
                                        "bottom": 43,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 830
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 766,
                            "yPos": 0,
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
                            "id": "6F0NJZeiGm8"
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
                                    "uniqueId": "6VR03EzGwla_679820757",
                                    "id": "01",
                                    "linkId": "txt__default_6VR03EzGwla",
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
                            "yPos": 2,
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
                            "id": "6VR03EzGwla"
                        }
                    ],
                    "accType": "text",
                    "altText": "Agrupar 4",
                    "shapemaskId": "",
                    "xPos": 27,
                    "yPos": 61,
                    "tabIndex": 15,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 436,
                    "rotateYPos": 29.5,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 28,
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
                    "height": 59,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5WFehsIdGv1"
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
                            "assetId": 328,
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
                    "depth": 29,
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
                            "url": "txt__default_5X50FqBlEhq.png",
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
                    "id": "5X50FqBlEhq"
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
                    "tabIndex": 14,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": -0.5,
                    "rotateYPos": 25,
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
                    "width": 0,
                    "height": 51,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6YUllniAwCs"
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
                    "depth": 31,
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
                    "width": 0,
                    "height": 51,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6jckZnOFKzq"
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