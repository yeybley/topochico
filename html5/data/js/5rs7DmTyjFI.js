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
    "slideNumberInScene": 13,
    "includeInSlideCounts": true,
    "presenterRef": {
        "id": "none"
    },
    "showAnimationId": "",
    "lmsId": "Slide13",
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
    "id": "5rs7DmTyjFI",
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
                        "value": "_player.62Io9d9R7HS.6elnBsCwpwG"
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
        "NavigationRestrictionNextSlide_5rs7DmTyjFI": {
            "kind": "actiongroup",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "ActGrpOnNextButtonClick"
                }
            ]
        },
        "NavigationRestrictionPreviousSlide_5rs7DmTyjFI": {
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
                    "id": "NavigationRestrictionNextSlide_5rs7DmTyjFI"
                }
            ]
        },
        {
            "kind": "onprevslide",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "NavigationRestrictionPreviousSlide_5rs7DmTyjFI"
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
                        "value": "_player.62Io9d9R7HS.6elnBsCwpwG"
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
                    "assetId": 90,
                    "id": "6Rglby4hvqo"
                }
            ],
            "enableSeek": true,
            "enableReplay": true,
            "timeline": {
                "duration": 28104,
                "events": [
                    {
                        "kind": "ontimelinetick",
                        "time": 0,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6QoM6HGVLY5"
                                }
                            },
                            {
                                "kind": "media_seek",
                                "position": 0,
                                "objRef": {
                                    "type": "string",
                                    "value": "6Rglby4hvqo"
                                }
                            },
                            {
                                "kind": "media_play",
                                "objRef": {
                                    "type": "string",
                                    "value": "6Rglby4hvqo"
                                }
                            },
                            {
                                "kind": "set_volume",
                                "volume": 75,
                                "objRef": {
                                    "type": "string",
                                    "value": "6Rglby4hvqo"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6b8hkRGANxA"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 1000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6OhosPCy6zF"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5XUpn6hIEe1"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 2750,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6B68bWvrciL"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6B68bWvrciL.6OVBHP8loPt"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6B68bWvrciL.6OVBHP8loPt.6V3TrRD2qNL"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6B68bWvrciL.6OVBHP8loPt.5jWnG5a4a5b"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6B68bWvrciL.5WukjWV0CIx"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6B68bWvrciL.69ko8ZfqeWc"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6B68bWvrciL.66NfVM0LECH"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6B68bWvrciL.6rEYBEAe1aY"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6B68bWvrciL.6hlqmOqOL4Y"
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
                                    "value": "5oLPIBAfr30"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6VitJXYg1FB"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5do4Y2EvS92"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 13000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6Wiyf4PLm1t"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "66RGUWokBdi"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 20000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "67DAcLTezaH"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "69qeQ2Oxw2z"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 21750,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5dYY8Il0csX"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6FWZm65ehLk"
                                }
                            }
                        ]
                    }
                ]
            },
            "objects": [
                {
                    "kind": "objgroup",
                    "objects": [
                        {
                            "kind": "objgroup",
                            "objects": [
                                {
                                    "kind": "vectorshape",
                                    "rotation": 0,
                                    "accType": "text",
                                    "cliptobounds": false,
                                    "defaultAction": "",
                                    "shapemaskId": "",
                                    "xPos": 0,
                                    "yPos": 0,
                                    "tabIndex": 7,
                                    "tabEnabled": true,
                                    "xOffset": 0,
                                    "yOffset": 0,
                                    "rotateXPos": 140,
                                    "rotateYPos": 126,
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
                                            "right": 281,
                                            "bottom": 253,
                                            "altText": "Google Shape;438;p11",
                                            "pngfb": false,
                                            "pr": {
                                                "l": "Lib",
                                                "i": 217
                                            }
                                        },
                                        "html5data": {
                                            "xPos": 0,
                                            "yPos": 0,
                                            "width": 281,
                                            "height": 253,
                                            "strokewidth": 0
                                        }
                                    },
                                    "width": 280,
                                    "height": 252,
                                    "resume": false,
                                    "useHandCursor": true,
                                    "id": "6V3TrRD2qNL"
                                },
                                {
                                    "kind": "vectorshape",
                                    "rotation": 0,
                                    "accType": "text",
                                    "cliptobounds": false,
                                    "defaultAction": "",
                                    "shapemaskId": "",
                                    "xPos": 45,
                                    "yPos": 195,
                                    "tabIndex": 8,
                                    "tabEnabled": true,
                                    "xOffset": 0,
                                    "yOffset": 0,
                                    "rotateXPos": 95.5,
                                    "rotateYPos": 41,
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
                                            "right": 191,
                                            "bottom": 83,
                                            "altText": "Google Shape;439;p11",
                                            "pngfb": false,
                                            "pr": {
                                                "l": "Lib",
                                                "i": 218
                                            }
                                        },
                                        "html5data": {
                                            "xPos": 0,
                                            "yPos": 0,
                                            "width": 191,
                                            "height": 83,
                                            "strokewidth": 0
                                        }
                                    },
                                    "width": 191,
                                    "height": 82,
                                    "resume": false,
                                    "useHandCursor": true,
                                    "id": "5jWnG5a4a5b"
                                }
                            ],
                            "accType": "text",
                            "altText": "Agrupar 51",
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 61,
                            "tabIndex": 12,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 140,
                            "rotateYPos": 138.5,
                            "scaleX": 100,
                            "scaleY": 100,
                            "alpha": 100,
                            "rotation": 0,
                            "depth": 1,
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
                            "width": 280,
                            "height": 277,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6OVBHP8loPt"
                        },
                        {
                            "kind": "vectorshape",
                            "rotation": 0,
                            "accType": "text",
                            "cliptobounds": false,
                            "defaultAction": "",
                            "shapemaskId": "",
                            "xPos": 86,
                            "yPos": 0,
                            "tabIndex": 9,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 54,
                            "rotateYPos": 54,
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
                                    "right": 109,
                                    "bottom": 109,
                                    "altText": "Google Shape;440;p11",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 219
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 109,
                                    "height": 109,
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
                            "width": 108,
                            "height": 108,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5WukjWV0CIx"
                        },
                        {
                            "kind": "vectorshape",
                            "rotation": 0,
                            "accType": "text",
                            "cliptobounds": false,
                            "defaultAction": "",
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 54,
                            "tabIndex": 11,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 140,
                            "rotateYPos": 64,
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
                                    "right": 281,
                                    "bottom": 129,
                                    "altText": "Google Shape;441;p11",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 220
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 281,
                                    "height": 129,
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
                            "width": 280,
                            "height": 128,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "69ko8ZfqeWc"
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
                                    "assetId": 85,
                                    "id": "01",
                                    "url": "story_content/6EoAX5AruUX.png",
                                    "type": "normal",
                                    "altText": "Picture 1.png",
                                    "width": 232,
                                    "height": 192,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 83,
                            "yPos": 3,
                            "tabIndex": 10,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 58,
                            "rotateYPos": 48,
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
                                    "right": 116,
                                    "bottom": 96,
                                    "altText": "Picture 1.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 221
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 116,
                                    "height": 96,
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
                            "width": 116,
                            "height": 96,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "66NfVM0LECH"
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
                                    "uniqueId": "6rEYBEAe1aY_5960687",
                                    "id": "01",
                                    "linkId": "txt__default_6rEYBEAe1aY",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 274,
                                    "height": 68,
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
                                                        "text": "Health & functional benefits",
                                                        "style": {
                                                            "fontFamily": "\"Faustina Bold ItaItalicA604DE8A\",\"Faustina Bold Italic\",\"Faustina\"",
                                                            "fontSize": 20,
                                                            "fontIsBold": false,
                                                            "fontIsItalic": false,
                                                            "fontIsUnderline": false,
                                                            "fontIsStrikeout": false,
                                                            "elevation": "normal",
                                                            "displayCase": "asIs",
                                                            "foregroundColor": "#000000",
                                                            "linkColor": "#000000",
                                                            "ascent": 27.813,
                                                            "descent": 5.733,
                                                            "leading": 0,
                                                            "underlinePosition": -2,
                                                            "underlineThickness": 1.333,
                                                            "xHeight": 13.173
                                                        }
                                                    }
                                                ],
                                                "style": {
                                                    "leadingMargin": 0,
                                                    "firstLineMargin": 0,
                                                    "justification": "center",
                                                    "listLevel": 1,
                                                    "lineSpacingRule": "atLeast",
                                                    "lineSpacing": 21.6,
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
                                                        "len": 28,
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
                                        "right": 251,
                                        "bottom": 71,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 223
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 1,
                            "yPos": 97,
                            "tabIndex": 13,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 140,
                            "rotateYPos": 37,
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
                                    "right": 280,
                                    "bottom": 74,
                                    "altText": "Health & functional benefits",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 222
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 280,
                                    "height": 74,
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
                            "width": 280,
                            "height": 74,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6rEYBEAe1aY"
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
                                    "uniqueId": "6hlqmOqOL4Y_-380054187",
                                    "id": "01",
                                    "linkId": "txt__default_6hlqmOqOL4Y",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 247,
                                    "height": 71,
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
                                                        "text": "are positioning flavored sparkling waters as lifestyle beverages.",
                                                        "style": {
                                                            "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                            "fontSize": 14,
                                                            "fontIsBold": false,
                                                            "fontIsItalic": false,
                                                            "fontIsUnderline": false,
                                                            "fontIsStrikeout": false,
                                                            "elevation": "normal",
                                                            "displayCase": "asIs",
                                                            "foregroundColor": "#FFFFFF",
                                                            "linkColor": "#FFFFFF",
                                                            "ascent": 19.469,
                                                            "descent": 4.051,
                                                            "leading": 0,
                                                            "underlinePosition": -1.867,
                                                            "underlineThickness": 0.933,
                                                            "xHeight": 9.221
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
                                                        "len": 65,
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
                                        "right": 244,
                                        "bottom": 74,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 225
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 14,
                            "yPos": 206,
                            "tabIndex": 14,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 126.5,
                            "rotateYPos": 38.5,
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
                                    "right": 253,
                                    "bottom": 77,
                                    "altText": "are positioning flavored sparkling waters as lifestyle beverages.",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 224
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 253,
                                    "height": 77,
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
                            "width": 253,
                            "height": 77,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6hlqmOqOL4Y"
                        }
                    ],
                    "accType": "text",
                    "altText": "Grupo\\r\\n 1",
                    "shapemaskId": "",
                    "xPos": 82,
                    "yPos": 149,
                    "tabIndex": 6,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 140.5,
                    "rotateYPos": 169,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 1,
                    "scrolling": true,
                    "shuffleLock": false,
                    "width": 281,
                    "height": 338,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6B68bWvrciL"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 0,
                    "yPos": 0,
                    "tabIndex": 1,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 481,
                    "rotateYPos": 23.5,
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
                            "right": 963,
                            "bottom": 47,
                            "altText": "Google Shape;886;p17",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 201
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 963,
                            "height": 47,
                            "strokewidth": 0
                        }
                    },
                    "width": 962,
                    "height": 47,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6QoM6HGVLY5"
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
                            "uniqueId": "5oLPIBAfr30_1358198386",
                            "id": "01",
                            "linkId": "txt__default_5oLPIBAfr30",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 432,
                            "height": 31,
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
                                                "text": "TRENDS SUPPORTING THE GROWTH",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 18,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 25.032,
                                                    "descent": 5.208,
                                                    "leading": 0,
                                                    "underlinePosition": -2.4,
                                                    "underlineThickness": 1.2,
                                                    "xHeight": 11.856
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "left",
                                            "listLevel": 1,
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 21.6,
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
                                                "len": 28,
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
                                "right": 400,
                                "bottom": 34,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 227
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 447,
                    "yPos": 129,
                    "tabIndex": 4,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 219,
                    "rotateYPos": 18.5,
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
                            "right": 438,
                            "bottom": 37,
                            "altText": "TRENDS SUPPORTING THE GROWTH",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 226
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 438,
                            "height": 37,
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
                    "width": 438,
                    "height": 37,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5oLPIBAfr30"
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
                            "assetId": 86,
                            "id": "01",
                            "url": "story_content/6hLHGrZWGfO.png",
                            "type": "normal",
                            "altText": "Picture 2.png",
                            "width": 92,
                            "height": 72,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 399,
                    "yPos": 131,
                    "tabIndex": 5,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 23,
                    "rotateYPos": 18,
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
                            "right": 46,
                            "bottom": 36,
                            "altText": "Picture 2.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 228
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 46,
                            "height": 36,
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
                    "width": 46,
                    "height": 36,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6VitJXYg1FB"
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
                            "uniqueId": "6OhosPCy6zF_-1111720712",
                            "id": "01",
                            "linkId": "txt__default_6OhosPCy6zF",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 679,
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
                                                "text": "We learned from Flavored Sparkling Drinks",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 24,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 33.376,
                                                    "descent": 6.944,
                                                    "leading": 0,
                                                    "underlinePosition": -3.2,
                                                    "underlineThickness": 1.6,
                                                    "xHeight": 15.808
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
                                            "listLevel": 1,
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 28.8,
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
                                                "len": 41,
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
                                "right": 649,
                                "bottom": 44,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 230
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 186,
                    "yPos": 67,
                    "tabIndex": 2,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 342.5,
                    "rotateYPos": 23.5,
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
                            "right": 685,
                            "bottom": 47,
                            "altText": "We learned from Flavored Sparkling Drinks",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 229
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 685,
                            "height": 47,
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
                    "width": 685,
                    "height": 47,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6OhosPCy6zF"
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
                            "assetId": 87,
                            "id": "01",
                            "url": "story_content/5xjgX5gl5p2.png",
                            "type": "normal",
                            "altText": "Picture 3.png",
                            "width": 180,
                            "height": 96,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 123,
                    "yPos": 67,
                    "tabIndex": 3,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 45,
                    "rotateYPos": 24,
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
                            "right": 90,
                            "bottom": 48,
                            "altText": "Picture 3.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 231
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 90,
                            "height": 48,
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
                    "width": 90,
                    "height": 48,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5XUpn6hIEe1"
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
                            "uniqueId": "67DAcLTezaH_-390832872",
                            "id": "01",
                            "linkId": "txt__default_67DAcLTezaH",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 381,
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
                                                "text": "CAPITALIZE ON HEALTH TRENDS\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova RgBoldBold7F9CE22D\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 17.173,
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
                                                "len": 28,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "WITH FLAVORED WATER",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 12,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 12.64,
                                                    "descent": 3.36,
                                                    "leading": 0,
                                                    "underlinePosition": -1.968,
                                                    "underlineThickness": 0.32,
                                                    "xHeight": 7.728
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
                                            "spacingBefore": 1.688,
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
                                "right": 293,
                                "bottom": 43,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 233
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 442,
                    "yPos": 374,
                    "tabIndex": 18,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 197.5,
                    "rotateYPos": 23,
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
                            "right": 395,
                            "bottom": 46,
                            "altText": "CAPITALIZE ON HEALTH TRENDS\\nWITH FLAVORED WATER",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 232
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 395,
                            "height": 46,
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
                    "width": 395,
                    "height": 46,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "67DAcLTezaH"
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
                            "assetId": 88,
                            "id": "01",
                            "url": "story_content/600Pk8mNP27.png",
                            "type": "normal",
                            "altText": "Picture 4.png",
                            "width": 32,
                            "height": 30,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 417,
                    "yPos": 318,
                    "tabIndex": 17,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 8,
                    "rotateYPos": 7.5,
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
                            "right": 16,
                            "bottom": 15,
                            "altText": "Picture 4.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 234
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 16,
                            "height": 15,
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
                    "width": 16,
                    "height": 15,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6Wiyf4PLm1t"
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
                            "uniqueId": "66RGUWokBdi_1906506819",
                            "id": "01",
                            "linkId": "txt__default_66RGUWokBdi",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 436,
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
                                                "text": "DELIVER EXCITEMENT\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova RgBoldBold7F9CE22D\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 17.173,
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "THROUGH CREATIVE FLAVOR PAIRINGS & INGREDIENTS ",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 12,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 12.64,
                                                    "descent": 3.36,
                                                    "leading": 0,
                                                    "underlinePosition": -1.968,
                                                    "underlineThickness": 0.32,
                                                    "xHeight": 7.728
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
                                            "spacingBefore": 1.688,
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
                                                "len": 47,
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
                                "right": 417,
                                "bottom": 43,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 236
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 442,
                    "yPos": 311,
                    "tabIndex": 16,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 225,
                    "rotateYPos": 23,
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
                            "right": 450,
                            "bottom": 46,
                            "altText": "DELIVER EXCITEMENT\\nTHROUGH CREATIVE FLAVOR PAIRINGS & INGREDIENTS ",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 235
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 450,
                            "height": 46,
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
                    "width": 450,
                    "height": 46,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "66RGUWokBdi"
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
                            "uniqueId": "5dYY8Il0csX_-2032684014",
                            "id": "01",
                            "linkId": "txt__default_5dYY8Il0csX",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 474,
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
                                                "text": "PROVIDE NON-ALCOHOLIC BEVERAGE OPTIONS\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova RgBoldBold7F9CE22D\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 17.173,
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
                                                "len": 39,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "IN A POST-PANDEMIC WORLD",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 12,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 12.64,
                                                    "descent": 3.36,
                                                    "leading": 0,
                                                    "underlinePosition": -1.968,
                                                    "underlineThickness": 0.32,
                                                    "xHeight": 7.728
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
                                            "spacingBefore": 1.688,
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
                                                "len": 24,
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
                                "right": 430,
                                "bottom": 43,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 238
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 442,
                    "yPos": 436,
                    "tabIndex": 20,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 244,
                    "rotateYPos": 23,
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
                            "right": 488,
                            "bottom": 46,
                            "altText": "PROVIDE NON-ALCOHOLIC BEVERAGE OPTIONS\\nIN A POST-PANDEMIC WORLD",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 237
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 488,
                            "height": 46,
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
                    "width": 488,
                    "height": 46,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5dYY8Il0csX"
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
                            "uniqueId": "5do4Y2EvS92_704238699",
                            "id": "01",
                            "linkId": "txt__default_5do4Y2EvS92",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 470,
                            "height": 91,
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
                                                "text": "The shift toward a more balanced lifestyle led the industry to seek out unique ingredients and flavor pairings",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBold57192C00\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 18,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 25.032,
                                                    "descent": 5.208,
                                                    "leading": 0,
                                                    "underlinePosition": -2.4,
                                                    "underlineThickness": 1.2,
                                                    "xHeight": 11.856
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
                                                "len": 110,
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
                                "right": 449,
                                "bottom": 94,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 240
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 403,
                    "yPos": 197,
                    "tabIndex": 15,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 238,
                    "rotateYPos": 48.5,
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
                            "right": 476,
                            "bottom": 97,
                            "altText": "The shift toward a more balanced lifestyle led the industry to seek out unique ingredients and flavor pairings",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 239
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 476,
                            "height": 97,
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
                    "width": 476,
                    "height": 97,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5do4Y2EvS92"
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
                            "assetId": 89,
                            "id": "01",
                            "url": "story_content/5wgqlDrm2Sd.png",
                            "type": "normal",
                            "altText": "Picture 5.png",
                            "width": 32,
                            "height": 30,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 417,
                    "yPos": 382,
                    "tabIndex": 19,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 8,
                    "rotateYPos": 7.5,
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
                            "right": 16,
                            "bottom": 15,
                            "altText": "Picture 5.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 234
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 16,
                            "height": 15,
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
                    "width": 16,
                    "height": 15,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "69qeQ2Oxw2z"
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
                            "assetId": 88,
                            "id": "01",
                            "url": "story_content/600Pk8mNP27.png",
                            "type": "normal",
                            "altText": "Picture 4.png",
                            "width": 32,
                            "height": 30,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 417,
                    "yPos": 442,
                    "tabIndex": 21,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 8,
                    "rotateYPos": 7.5,
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
                            "right": 16,
                            "bottom": 15,
                            "altText": "Picture 4.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 234
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 16,
                            "height": 15,
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
                    "width": 16,
                    "height": 15,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6FWZm65ehLk"
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
                    "tabIndex": 0,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 65,
                    "rotateYPos": 22.5,
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
                    "id": "6b8hkRGANxA"
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