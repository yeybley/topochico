window.globalProvideData('slide', 
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
    "slideNumberInScene": 10,
    "includeInSlideCounts": true,
    "presenterRef": {
        "id": "none"
    },
    "showAnimationId": "",
    "lmsId": "Slide10",
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
    "id": "6La5NBSB9IA",
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
                        "value": "_player.62Io9d9R7HS.5qDbRlvvYvb"
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
        "NavigationRestrictionNextSlide_6La5NBSB9IA": {
            "kind": "actiongroup",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "ActGrpOnNextButtonClick"
                }
            ]
        },
        "NavigationRestrictionPreviousSlide_6La5NBSB9IA": {
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
                    "id": "NavigationRestrictionNextSlide_6La5NBSB9IA"
                }
            ]
        },
        {
            "kind": "onprevslide",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "NavigationRestrictionPreviousSlide_6La5NBSB9IA"
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
                        "value": "_player.62Io9d9R7HS.5qDbRlvvYvb"
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
                    "assetId": 74,
                    "id": "5aPUdOqAEPD"
                }
            ],
            "enableSeek": true,
            "enableReplay": true,
            "timeline": {
                "duration": 56396,
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
                                    "value": "64J8zjyudUb"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6QjMecSXCn4"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6QjMecSXCn4.6YIhl6XelZY"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6QjMecSXCn4.6r9thPbKC8L"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6QjMecSXCn4.5xWHm519PNJ"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6QjMecSXCn4.61C3k9sLP8A"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6QjMecSXCn4.5XF9GydkXIv"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6QjMecSXCn4.5ub0THOjXAv"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6KfPpWJZ8j0"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6fC6x4D6wbR"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6TgqXewsh2m"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5YqMjbTYbaF"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "61LYnnBhPbd"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6DIwts3aiHc"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6XbWpC8my11"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6FnOzOlPCth"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6GiyT0ibmcm"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5g1X1j21HkC"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5UqvvY2NNzC"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6kfze0cJJgM"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5VuW7KVjhEm"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5WlbrvoODth"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "64uoI6KHQK8"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6kqq9WMiIpP"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6AXOTBBAY4C"
                                }
                            },
                            {
                                "kind": "media_seek",
                                "position": 0,
                                "objRef": {
                                    "type": "string",
                                    "value": "5aPUdOqAEPD"
                                }
                            },
                            {
                                "kind": "media_play",
                                "objRef": {
                                    "type": "string",
                                    "value": "5aPUdOqAEPD"
                                }
                            },
                            {
                                "kind": "set_volume",
                                "volume": 75,
                                "objRef": {
                                    "type": "string",
                                    "value": "5aPUdOqAEPD"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6KQ4qz3qKsH"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6oSSgLiY1zr"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 15000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "66jFmdhbEme"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 22000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6RJEXtwgm6h"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 31000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5oVM53D4sw6"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 38500,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5gMaNrg4YEr"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 47000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6WIjWtpRahz"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 50000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5y7mz6DWmjj"
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
                    "imagelib": [
                        {
                            "kind": "imagedata",
                            "assetId": 59,
                            "id": "01",
                            "url": "",
                            "type": "normal",
                            "width": 664,
                            "height": 11,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 158,
                    "yPos": 278,
                    "tabIndex": 17,
                    "tabEnabled": true,
                    "xOffset": -5,
                    "yOffset": -5,
                    "rotateXPos": 327,
                    "rotateYPos": 0,
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
                            "right": 664,
                            "bottom": 11,
                            "altText": "Google Shape;715;p17",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 77
                            }
                        },
                        "html5data": {
                            "url": "txt__default_64J8zjyudUb.png",
                            "xPos": -5,
                            "yPos": -5,
                            "width": 664,
                            "height": 11,
                            "strokewidth": 1,
                            "mask": "534O2X28AO2X5O5X286O5X3O293X3O293X3O293X4O5X286O5X5O3X288O3X532O"
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
                    "width": 654,
                    "height": 0,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "64J8zjyudUb"
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
                                    "assetId": 60,
                                    "id": "01",
                                    "url": "story_content/6gaN9Q5MCGi_RBFC7D7.png",
                                    "type": "normal",
                                    "altText": "Google Shape;716;p17",
                                    "width": 236,
                                    "height": 227,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 0,
                            "tabIndex": 6,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 59,
                            "rotateYPos": 56.5,
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
                                    "right": 118,
                                    "bottom": 113,
                                    "altText": "Google Shape;716;p17",
                                    "altTextOverridesText": true,
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 162
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 118,
                                    "height": 113,
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
                            "width": 118,
                            "height": 113,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6YIhl6XelZY"
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
                                    "assetId": 61,
                                    "id": "01",
                                    "url": "story_content/6iPEX9qiZIB_RBFC7D7.png",
                                    "type": "normal",
                                    "altText": "Google Shape;719;p17",
                                    "width": 236,
                                    "height": 227,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 154,
                            "yPos": 0,
                            "tabIndex": 7,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 59,
                            "rotateYPos": 56.5,
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
                                    "right": 118,
                                    "bottom": 113,
                                    "altText": "Google Shape;719;p17",
                                    "altTextOverridesText": true,
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 162
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 118,
                                    "height": 113,
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
                            "width": 118,
                            "height": 113,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6r9thPbKC8L"
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
                                    "assetId": 62,
                                    "id": "01",
                                    "url": "story_content/5lZqipenL2z_RBFC7D7.png",
                                    "type": "normal",
                                    "altText": "Google Shape;722;p17",
                                    "width": 236,
                                    "height": 227,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 313,
                            "yPos": 0,
                            "tabIndex": 8,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 59,
                            "rotateYPos": 56.5,
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
                                    "right": 118,
                                    "bottom": 113,
                                    "altText": "Google Shape;722;p17",
                                    "altTextOverridesText": true,
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 162
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 118,
                                    "height": 113,
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
                            "width": 118,
                            "height": 113,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5xWHm519PNJ"
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
                                    "assetId": 63,
                                    "id": "01",
                                    "url": "story_content/6YOQYfEPyCx_RBFC7D7.png",
                                    "type": "normal",
                                    "altText": "Google Shape;726;p17",
                                    "width": 236,
                                    "height": 227,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 625,
                            "yPos": 0,
                            "tabIndex": 10,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 59,
                            "rotateYPos": 56.5,
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
                                    "right": 118,
                                    "bottom": 113,
                                    "altText": "Google Shape;726;p17",
                                    "altTextOverridesText": true,
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 162
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 118,
                                    "height": 113,
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
                            "width": 118,
                            "height": 113,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "61C3k9sLP8A"
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
                                    "assetId": 64,
                                    "id": "01",
                                    "url": "story_content/5jVb9ZS62O8_RBFC7D7.png",
                                    "type": "normal",
                                    "altText": "Google Shape;729;p17",
                                    "width": 236,
                                    "height": 227,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 779,
                            "yPos": 0,
                            "tabIndex": 11,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 59,
                            "rotateYPos": 56.5,
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
                                    "right": 118,
                                    "bottom": 113,
                                    "altText": "Google Shape;729;p17",
                                    "altTextOverridesText": true,
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 162
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 118,
                                    "height": 113,
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
                            "width": 118,
                            "height": 113,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5XF9GydkXIv"
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
                                    "assetId": 65,
                                    "id": "01",
                                    "url": "story_content/5mTD0f4lNMV_RBFC7D7.png",
                                    "type": "normal",
                                    "altText": "Google Shape;724;p17",
                                    "width": 236,
                                    "height": 227,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 471,
                            "yPos": 0,
                            "tabIndex": 9,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 59,
                            "rotateYPos": 56.5,
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
                                    "right": 118,
                                    "bottom": 113,
                                    "altText": "Google Shape;724;p17",
                                    "altTextOverridesText": true,
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 162
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 118,
                                    "height": 113,
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
                            "width": 118,
                            "height": 113,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5ub0THOjXAv"
                        }
                    ],
                    "accType": "text",
                    "altText": "Grupo\\r\\n 1",
                    "shapemaskId": "",
                    "xPos": 37,
                    "yPos": 220,
                    "tabIndex": 5,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 448.5,
                    "rotateYPos": 56.5,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 2,
                    "scrolling": true,
                    "shuffleLock": false,
                    "width": 897,
                    "height": 113,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6QjMecSXCn4"
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
                    "tabIndex": 0,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 479.5,
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
                            "left": -1,
                            "top": -1,
                            "right": 961,
                            "bottom": 47,
                            "altText": "Rectangle 11",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 38
                            }
                        },
                        "html5data": {
                            "xPos": -1,
                            "yPos": -1,
                            "width": 962,
                            "height": 48,
                            "strokewidth": 2
                        }
                    },
                    "width": 960,
                    "height": 46,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6KfPpWJZ8j0"
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
                            "assetId": 15,
                            "id": "01",
                            "url": "story_content/5hFRJyQ4aGK.png",
                            "type": "normal",
                            "altText": "Google Shape;16;p45",
                            "width": 198,
                            "height": 54,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 8,
                    "yPos": 9,
                    "tabIndex": 1,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 49.5,
                    "rotateYPos": 13.5,
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
                            "right": 99,
                            "bottom": 27,
                            "altText": "Google Shape;16;p45",
                            "altTextOverridesText": true,
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 39
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 99,
                            "height": 27,
                            "strokewidth": 0
                        }
                    },
                    "width": 99,
                    "height": 27,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6fC6x4D6wbR"
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
                            "assetId": 66,
                            "id": "01",
                            "url": "story_content/6gaN9Q5MCGi.png",
                            "type": "normal",
                            "altText": "Google Shape;716;p17",
                            "width": 236,
                            "height": 227,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 37,
                    "yPos": 220,
                    "tabIndex": 4,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 59,
                    "rotateYPos": 56.5,
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
                            "right": 118,
                            "bottom": 113,
                            "altText": "Google Shape;716;p17",
                            "altTextOverridesText": true,
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 162
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 118,
                            "height": 113,
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
                    "width": 118,
                    "height": 113,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "66jFmdhbEme"
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
                            "uniqueId": "6TgqXewsh2m_872159228",
                            "id": "01",
                            "linkId": "txt__default_6TgqXewsh2m",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 146,
                            "height": 36,
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
                                                "text": "ICONICITY\\n",
                                                "style": {
                                                    "fontFamily": "\"Topo Chico RegularBBold9B50965A\",\"Topo Chico Regular\",\"Topo Chico\"",
                                                    "fontSize": 11.25,
                                                    "fontIsBold": true,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 13.185,
                                                    "descent": 1.98,
                                                    "leading": 2.835,
                                                    "underlinePosition": 0,
                                                    "underlineThickness": 1.065,
                                                    "xHeight": 9
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "& INTRINSICS",
                                                "style": {
                                                    "fontFamily": "\"Topo Chico RegularBBold9B50965A\",\"Topo Chico Regular\",\"Topo Chico\"",
                                                    "fontSize": 11.25,
                                                    "fontIsBold": true,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 13.185,
                                                    "descent": 1.98,
                                                    "leading": 2.835,
                                                    "underlinePosition": 0,
                                                    "underlineThickness": 1.065,
                                                    "xHeight": 9
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
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
                                "right": 120,
                                "bottom": 42,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 164
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 11,
                    "yPos": 333,
                    "tabIndex": 18,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 76,
                    "rotateYPos": 21,
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
                            "right": 152,
                            "bottom": 42,
                            "altText": "ICONICITY\\n& INTRINSICS",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 163
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 152,
                            "height": 42,
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
                    "height": 42,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6TgqXewsh2m"
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
                            "uniqueId": "5YqMjbTYbaF_-1545683525",
                            "id": "01",
                            "linkId": "txt__default_5YqMjbTYbaF",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 118,
                            "height": 62,
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
                                                "text": "play a key role in highlighting the brand’s authentic credentials.",
                                                "style": {
                                                    "fontFamily": "\"Arial Charset0_v8wz5YMo9EE9FF07\",\"Arial\"",
                                                    "fontSize": 10,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 12.07,
                                                    "descent": 2.826,
                                                    "leading": 0.436,
                                                    "underlinePosition": -1.413,
                                                    "underlineThickness": 0.977,
                                                    "xHeight": 6.914
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
                                                "len": 66,
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
                                "right": 117,
                                "bottom": 65,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 166
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 28,
                    "yPos": 390,
                    "tabIndex": 28,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 62,
                    "rotateYPos": 34,
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
                            "right": 124,
                            "bottom": 68,
                            "altText": "play a key role in highlighting the brand’s authentic credentials.",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 165
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 124,
                            "height": 68,
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
                    "width": 124,
                    "height": 68,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5YqMjbTYbaF"
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
                            "assetId": 67,
                            "id": "01",
                            "url": "story_content/6iPEX9qiZIB.png",
                            "type": "normal",
                            "altText": "Google Shape;719;p17",
                            "width": 236,
                            "height": 227,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 191,
                    "yPos": 220,
                    "tabIndex": 12,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 59,
                    "rotateYPos": 56.5,
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
                            "right": 118,
                            "bottom": 113,
                            "altText": "Google Shape;719;p17",
                            "altTextOverridesText": true,
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 162
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 118,
                            "height": 113,
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
                    "width": 118,
                    "height": 113,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6RJEXtwgm6h"
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
                            "uniqueId": "61LYnnBhPbd_1203865161",
                            "id": "01",
                            "linkId": "txt__default_61LYnnBhPbd",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 143,
                            "height": 36,
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
                                                "text": "NON-\\n",
                                                "style": {
                                                    "fontFamily": "\"Topo Chico RegularBBold9B50965A\",\"Topo Chico Regular\",\"Topo Chico\"",
                                                    "fontSize": 11.25,
                                                    "fontIsBold": true,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 13.185,
                                                    "descent": 1.98,
                                                    "leading": 2.835,
                                                    "underlinePosition": 0,
                                                    "underlineThickness": 1.065,
                                                    "xHeight": 9
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
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
                                                "len": 5,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "TRADITIONAL",
                                                "style": {
                                                    "fontFamily": "\"Topo Chico RegularBBold9B50965A\",\"Topo Chico Regular\",\"Topo Chico\"",
                                                    "fontSize": 11.25,
                                                    "fontIsBold": true,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 13.185,
                                                    "descent": 1.98,
                                                    "leading": 2.835,
                                                    "underlinePosition": 0,
                                                    "underlineThickness": 1.065,
                                                    "xHeight": 9
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
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
                                "right": 120,
                                "bottom": 42,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 168
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 164,
                    "yPos": 333,
                    "tabIndex": 19,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 74.5,
                    "rotateYPos": 21,
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
                            "right": 149,
                            "bottom": 42,
                            "altText": "NON-\\nTRADITIONAL",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 167
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 149,
                            "height": 42,
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
                    "width": 149,
                    "height": 42,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "61LYnnBhPbd"
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
                            "uniqueId": "6DIwts3aiHc_-918867241",
                            "id": "01",
                            "linkId": "txt__default_6DIwts3aiHc",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 124,
                            "height": 62,
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
                                                "text": "Out of the box comms rather than the typical shopper messaging.",
                                                "style": {
                                                    "fontFamily": "\"Arial Charset0_v8wz5YMo9EE9FF07\",\"Arial\"",
                                                    "fontSize": 10,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 12.07,
                                                    "descent": 2.826,
                                                    "leading": 0.436,
                                                    "underlinePosition": -1.413,
                                                    "underlineThickness": 0.977,
                                                    "xHeight": 6.914
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
                                                "len": 63,
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
                                "right": 125,
                                "bottom": 65,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 170
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 175,
                    "yPos": 390,
                    "tabIndex": 29,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 65,
                    "rotateYPos": 34,
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
                            "right": 130,
                            "bottom": 68,
                            "altText": "Out of the box comms rather than the typical shopper messaging.",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 169
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 130,
                            "height": 68,
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
                    "width": 130,
                    "height": 68,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6DIwts3aiHc"
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
                            "assetId": 68,
                            "id": "01",
                            "url": "story_content/5lZqipenL2z.png",
                            "type": "normal",
                            "altText": "Google Shape;722;p17",
                            "width": 236,
                            "height": 227,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 350,
                    "yPos": 220,
                    "tabIndex": 13,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 59,
                    "rotateYPos": 56.5,
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
                            "right": 118,
                            "bottom": 113,
                            "altText": "Google Shape;722;p17",
                            "altTextOverridesText": true,
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 162
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 118,
                            "height": 113,
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
                    "width": 118,
                    "height": 113,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5oVM53D4sw6"
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
                            "assetId": 69,
                            "id": "01",
                            "url": "story_content/6faMuZPbS4s.png",
                            "type": "normal",
                            "altText": "Picture 5.png",
                            "width": 342,
                            "height": 130,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 318,
                    "yPos": 333,
                    "tabIndex": 22,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 85.5,
                    "rotateYPos": 25,
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
                            "right": 171,
                            "bottom": 50,
                            "altText": "Picture 5.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 171
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 171,
                            "height": 50,
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
                    "width": 171,
                    "height": 50,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6XbWpC8my11"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 342,
                    "yPos": 348,
                    "tabIndex": 24,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 61,
                    "rotateYPos": -0.5,
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
                            "left": -2,
                            "top": -2,
                            "right": 125,
                            "bottom": 2,
                            "altText": "Línea 1",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 172
                            }
                        },
                        "html5data": {
                            "xPos": -2,
                            "yPos": -2,
                            "width": 127,
                            "height": 4,
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
                    "width": 123,
                    "height": 0,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6FnOzOlPCth"
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
                            "assetId": 70,
                            "id": "01",
                            "url": "story_content/6YOQYfEPyCx.png",
                            "type": "normal",
                            "altText": "Google Shape;726;p17",
                            "width": 236,
                            "height": 227,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 662,
                    "yPos": 220,
                    "tabIndex": 15,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 59,
                    "rotateYPos": 56.5,
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
                            "right": 118,
                            "bottom": 113,
                            "altText": "Google Shape;726;p17",
                            "altTextOverridesText": true,
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 162
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 118,
                            "height": 113,
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
                    "width": 118,
                    "height": 113,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6WIjWtpRahz"
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
                            "uniqueId": "6GiyT0ibmcm_2100929223",
                            "id": "01",
                            "linkId": "txt__default_6GiyT0ibmcm",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 118,
                            "height": 36,
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
                                                "text": "SCALABLE & ADAPTABLE",
                                                "style": {
                                                    "fontFamily": "\"Topo Chico RegularBBold9B50965A\",\"Topo Chico Regular\",\"Topo Chico\"",
                                                    "fontSize": 11.25,
                                                    "fontIsBold": true,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 13.185,
                                                    "descent": 1.98,
                                                    "leading": 2.835,
                                                    "underlinePosition": 0,
                                                    "underlineThickness": 1.065,
                                                    "xHeight": 9
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
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
                                "right": 104,
                                "bottom": 42,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 174
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 654,
                    "yPos": 333,
                    "tabIndex": 21,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 62,
                    "rotateYPos": 21,
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
                            "right": 124,
                            "bottom": 42,
                            "altText": "SCALABLE & ADAPTABLE",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 173
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 124,
                            "height": 42,
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
                    "width": 124,
                    "height": 42,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6GiyT0ibmcm"
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
                            "uniqueId": "5g1X1j21HkC_-1815543771",
                            "id": "01",
                            "linkId": "txt__default_5g1X1j21HkC",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 118,
                            "height": 46,
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
                                                "text": "to different market realities and customer needs. ",
                                                "style": {
                                                    "fontFamily": "\"Arial Charset0_v8wz5YMo9EE9FF07\",\"Arial\"",
                                                    "fontSize": 10,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 12.07,
                                                    "descent": 2.826,
                                                    "leading": 0.436,
                                                    "underlinePosition": -1.413,
                                                    "underlineThickness": 0.977,
                                                    "xHeight": 6.914
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
                                                "len": 50,
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
                                "right": 120,
                                "bottom": 50,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 176
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 655,
                    "yPos": 391,
                    "tabIndex": 32,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 62,
                    "rotateYPos": 26,
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
                            "right": 124,
                            "bottom": 52,
                            "altText": "to different market realities and customer needs. ",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 175
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 124,
                            "height": 52,
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
                    "width": 124,
                    "height": 52,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5g1X1j21HkC"
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
                            "assetId": 71,
                            "id": "01",
                            "url": "story_content/5jVb9ZS62O8.png",
                            "type": "normal",
                            "altText": "Google Shape;729;p17",
                            "width": 236,
                            "height": 227,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 816,
                    "yPos": 220,
                    "tabIndex": 16,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 59,
                    "rotateYPos": 56.5,
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
                            "right": 118,
                            "bottom": 113,
                            "altText": "Google Shape;729;p17",
                            "altTextOverridesText": true,
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 162
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 118,
                            "height": 113,
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
                    "width": 118,
                    "height": 113,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5y7mz6DWmjj"
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
                            "assetId": 72,
                            "id": "01",
                            "url": "story_content/5kagEH6RK6K.png",
                            "type": "normal",
                            "altText": "Picture 9.png",
                            "width": 260,
                            "height": 130,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 807,
                    "yPos": 333,
                    "tabIndex": 23,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 65,
                    "rotateYPos": 25,
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
                            "right": 130,
                            "bottom": 50,
                            "altText": "Picture 9.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 177
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 130,
                            "height": 50,
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
                    "width": 130,
                    "height": 50,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5UqvvY2NNzC"
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
                            "uniqueId": "6kfze0cJJgM_1455526390",
                            "id": "01",
                            "linkId": "txt__default_6kfze0cJJgM",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 116,
                            "height": 62,
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
                                                "text": "because we do not tell shoppers what to do, we inspire them to act.",
                                                "style": {
                                                    "fontFamily": "\"Arial Charset0_v8wz5YMo9EE9FF07\",\"Arial\"",
                                                    "fontSize": 10,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 12.07,
                                                    "descent": 2.826,
                                                    "leading": 0.436,
                                                    "underlinePosition": -1.413,
                                                    "underlineThickness": 0.977,
                                                    "xHeight": 6.914
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
                                                "len": 67,
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
                                "bottom": 65,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 179
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 809,
                    "yPos": 390,
                    "tabIndex": 31,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 61,
                    "rotateYPos": 34,
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
                            "right": 122,
                            "bottom": 68,
                            "altText": "because we do not tell shoppers what to do, we inspire them to act.",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 178
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 122,
                            "height": 68,
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
                    "width": 122,
                    "height": 68,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6kfze0cJJgM"
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
                            "uniqueId": "5VuW7KVjhEm_-1159614143",
                            "id": "01",
                            "linkId": "txt__default_5VuW7KVjhEm",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 128,
                            "height": 62,
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
                                                "text": "it’s about the attitude that connects with culture and inspires action.",
                                                "style": {
                                                    "fontFamily": "\"Arial Charset0_v8wz5YMo9EE9FF07\",\"Arial\"",
                                                    "fontSize": 10,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 12.07,
                                                    "descent": 2.826,
                                                    "leading": 0.436,
                                                    "underlinePosition": -1.413,
                                                    "underlineThickness": 0.977,
                                                    "xHeight": 6.914
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
                                                "len": 71,
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
                                "bottom": 65,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 181
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 335,
                    "yPos": 388,
                    "tabIndex": 27,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 67,
                    "rotateYPos": 34,
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
                            "right": 134,
                            "bottom": 68,
                            "altText": "it’s about the attitude that connects with culture and inspires action.",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 180
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 134,
                            "height": 68,
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
                    "width": 134,
                    "height": 68,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5VuW7KVjhEm"
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
                            "uniqueId": "5WlbrvoODth_-351509285",
                            "id": "01",
                            "linkId": "txt__default_5WlbrvoODth",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 141,
                            "height": 77,
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
                                                "text": "enabling consumers to feel they discover the brand rather than the brand interrupting their journey.",
                                                "style": {
                                                    "fontFamily": "\"Arial Charset0_v8wz5YMo9EE9FF07\",\"Arial\"",
                                                    "fontSize": 10,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 12.07,
                                                    "descent": 2.826,
                                                    "leading": 0.436,
                                                    "underlinePosition": -1.413,
                                                    "underlineThickness": 0.977,
                                                    "xHeight": 6.914
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
                                                "len": 100,
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
                                "right": 145,
                                "bottom": 81,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 183
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 489,
                    "yPos": 390,
                    "tabIndex": 30,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 73.5,
                    "rotateYPos": 41.5,
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
                            "right": 147,
                            "bottom": 83,
                            "altText": "enabling consumers to feel they discover the brand rather than the brand interrupting their journey.",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 182
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 147,
                            "height": 83,
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
                    "height": 83,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5WlbrvoODth"
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
                            "uniqueId": "64uoI6KHQK8_2060085586",
                            "id": "01",
                            "linkId": "txt__default_64uoI6KHQK8",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 152,
                            "height": 36,
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
                                                "text": "SURPRISING\\n",
                                                "style": {
                                                    "fontFamily": "\"Topo Chico RegularBBold9B50965A\",\"Topo Chico Regular\",\"Topo Chico\"",
                                                    "fontSize": 11.25,
                                                    "fontIsBold": true,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 13.185,
                                                    "descent": 1.98,
                                                    "leading": 2.835,
                                                    "underlinePosition": 0,
                                                    "underlineThickness": 1.065,
                                                    "xHeight": 9
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "(YET SUBTLE)",
                                                "style": {
                                                    "fontFamily": "\"Topo Chico RegularBBold9B50965A\",\"Topo Chico Regular\",\"Topo Chico\"",
                                                    "fontSize": 11.25,
                                                    "fontIsBold": true,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 13.185,
                                                    "descent": 1.98,
                                                    "leading": 2.835,
                                                    "underlinePosition": 0,
                                                    "underlineThickness": 1.065,
                                                    "xHeight": 9
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
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
                                "right": 124,
                                "bottom": 42,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 185
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 485,
                    "yPos": 333,
                    "tabIndex": 20,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 79,
                    "rotateYPos": 21,
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
                            "right": 158,
                            "bottom": 42,
                            "altText": "SURPRISING\\n(YET SUBTLE)",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 184
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 158,
                            "height": 42,
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
                    "width": 158,
                    "height": 42,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "64uoI6KHQK8"
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
                            "assetId": 73,
                            "id": "01",
                            "url": "story_content/5mTD0f4lNMV.png",
                            "type": "normal",
                            "altText": "Google Shape;724;p17",
                            "width": 236,
                            "height": 227,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 508,
                    "yPos": 220,
                    "tabIndex": 14,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 59,
                    "rotateYPos": 56.5,
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
                            "right": 118,
                            "bottom": 113,
                            "altText": "Google Shape;724;p17",
                            "altTextOverridesText": true,
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 162
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 118,
                            "height": 113,
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
                    "width": 118,
                    "height": 113,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5gMaNrg4YEr"
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
                            "uniqueId": "6kqq9WMiIpP_-1073211439",
                            "id": "01",
                            "linkId": "txt__default_6kqq9WMiIpP",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 933,
                            "height": 20,
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
                                                "text": "STAYING TRUE TO TOPO CHICO AND THE MOMENTS WE PARTICIPATE IN.",
                                                "style": {
                                                    "fontFamily": "\"Topo Chico Regular Char806C23FC\",\"Topo Chico Regular\",\"Topo Chico\"",
                                                    "fontSize": 11.25,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 13.575,
                                                    "descent": 2.175,
                                                    "leading": 2.25,
                                                    "underlinePosition": 0,
                                                    "underlineThickness": 1.065,
                                                    "xHeight": 9
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
                                            "listLevel": 1,
                                            "lineSpacingRule": "multiple",
                                            "lineSpacing": 22,
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
                                                "len": 61,
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
                                "right": 690,
                                "bottom": 25,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 187
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 11,
                    "yPos": 145,
                    "tabIndex": 3,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 469.5,
                    "rotateYPos": 13,
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
                            "right": 939,
                            "bottom": 26,
                            "altText": "STAYING TRUE TO TOPO CHICO AND THE MOMENTS WE PARTICIPATE IN.",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 186
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 939,
                            "height": 26,
                            "strokewidth": 0
                        }
                    },
                    "width": 939,
                    "height": 26,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6kqq9WMiIpP"
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
                            "uniqueId": "6AXOTBBAY4C_52734157",
                            "id": "01",
                            "linkId": "txt__default_6AXOTBBAY4C",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 799,
                            "height": 42,
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
                                                "text": "Shopper comms guardrails",
                                                "style": {
                                                    "fontFamily": "\"FaustinaBold CharseBold96FFC365\",\"Faustina\"",
                                                    "fontSize": 24.75,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#EC0728",
                                                    "linkColor": "#EC0728",
                                                    "ascent": 34.419,
                                                    "descent": 7.161,
                                                    "leading": 0,
                                                    "underlinePosition": -3.3,
                                                    "underlineThickness": 1.65,
                                                    "xHeight": 16.302
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
                                            "listLevel": 1,
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 39.6,
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
                                "right": 598,
                                "bottom": 45,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 189
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 77,
                    "yPos": 95,
                    "tabIndex": 2,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 402.5,
                    "rotateYPos": 24,
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
                            "right": 805,
                            "bottom": 48,
                            "altText": "Shopper comms guardrails",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 188
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 805,
                            "height": 48,
                            "strokewidth": 0
                        }
                    },
                    "width": 805,
                    "height": 48,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6AXOTBBAY4C"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 821,
                    "yPos": 366,
                    "tabIndex": 26,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 51,
                    "rotateYPos": -0.5,
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
                            "left": -2,
                            "top": -2,
                            "right": 105,
                            "bottom": 2,
                            "altText": "Línea 2",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 190
                            }
                        },
                        "html5data": {
                            "xPos": -2,
                            "yPos": -2,
                            "width": 107,
                            "height": 4,
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
                    "width": 103,
                    "height": 0,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6KQ4qz3qKsH"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 846,
                    "yPos": 348,
                    "tabIndex": 25,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 25.5,
                    "rotateYPos": -0.5,
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
                            "left": -2,
                            "top": -2,
                            "right": 54,
                            "bottom": 2,
                            "altText": "Línea 3",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 191
                            }
                        },
                        "html5data": {
                            "xPos": -2,
                            "yPos": -2,
                            "width": 56,
                            "height": 4,
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
                    "width": 52,
                    "height": 0,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6oSSgLiY1zr"
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