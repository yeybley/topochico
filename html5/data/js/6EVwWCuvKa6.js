﻿window.globalProvideData('slide', {
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
    "slideNumberInScene": 37,
    "includeInSlideCounts": true,
    "presenterRef": {
        "id": "none"
    },
    "showAnimationId": "",
    "lmsId": "Slide37",
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
    "id": "6EVwWCuvKa6",
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
                        "value": "_player.62Io9d9R7HS.6X7glahRxEW"
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
        "NavigationRestrictionNextSlide_6EVwWCuvKa6": {
            "kind": "actiongroup",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "ActGrpOnNextButtonClick"
                }
            ]
        },
        "NavigationRestrictionPreviousSlide_6EVwWCuvKa6": {
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
                    "id": "NavigationRestrictionNextSlide_6EVwWCuvKa6"
                }
            ]
        },
        {
            "kind": "onprevslide",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "NavigationRestrictionPreviousSlide_6EVwWCuvKa6"
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
                        "value": "_player.62Io9d9R7HS.6X7glahRxEW"
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
                    "assetId": 347,
                    "id": "6j4CI2M7ZN0"
                }
            ],
            "enableSeek": true,
            "enableReplay": true,
            "timeline": {
                "duration": 15406,
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
                                    "value": "6hnoIZPzeCt"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5dTwMaccZtp"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6CuB0XJols9"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "67rAH9ZrIZ3"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6om1RI4PCtr"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5pSjhzxCvTZ"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5kacuk0gZoq"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6on2IaXjMyx"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6on2IaXjMyx.68aEUrvI4UH"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6on2IaXjMyx.6O8XeylYPLZ"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6on2IaXjMyx.64V0zjB787f"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6on2IaXjMyx.6WGvH5ZV4N8"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6on2IaXjMyx.6IBsOsR21f3"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6on2IaXjMyx.5sPNLOSvXJe"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6pYn97i3VoH"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6oKW2Hw6FqF"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6mSo5klOt02"
                                }
                            },
                            {
                                "kind": "media_seek",
                                "position": 0,
                                "objRef": {
                                    "type": "string",
                                    "value": "6j4CI2M7ZN0"
                                }
                            },
                            {
                                "kind": "media_play",
                                "objRef": {
                                    "type": "string",
                                    "value": "6j4CI2M7ZN0"
                                }
                            },
                            {
                                "kind": "set_volume",
                                "volume": 75,
                                "objRef": {
                                    "type": "string",
                                    "value": "6j4CI2M7ZN0"
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
                        "time": 5500,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6pEfQAqnrpx"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5XKlfSnprwo"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6GiErJTuYjh"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6CjUd141tWP"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6CjUd141tWP.62WYpzwvZ44"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6CjUd141tWP.5WuyNvAtTVv"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6CjUd141tWP.5qKwiU4tBRX"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5vAUPAphK9V"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6POM9FMMG0m"
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
                                    "value": "5zQ1jgazbnG"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "64jeCX2UXzs"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6PBEIWKOkeU"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5d4zDwDBVHx"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6BsDKvON1ju"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6BsDKvON1ju.6Xd438kOTx7"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6BsDKvON1ju.6MIYuuUj6WP"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6BsDKvON1ju.6iBMmPfh91B"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6KvKxFqaQuY"
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
                    "tabIndex": 1,
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
                    "tabIndex": 7,
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
                    "rotateYPos": 30.5,
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
                            "right": 963,
                            "bottom": 61,
                            "altText": "Google Shape;886;p17",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 859
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 963,
                            "height": 61,
                            "strokewidth": 0
                        }
                    },
                    "width": 962,
                    "height": 61,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6hnoIZPzeCt"
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
                            "uniqueId": "5dTwMaccZtp_-1912630226",
                            "id": "01",
                            "linkId": "txt__default_5dTwMaccZtp",
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
                                                "text": "UNIVERSITY\\n",
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
                                                "len": 11,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
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
                                "bottom": 44,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 860
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 806,
                    "yPos": 6,
                    "tabIndex": 6,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 74,
                    "rotateYPos": 23.5,
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
                            "right": 148,
                            "bottom": 47,
                            "altText": "UNIVERSITY\\nFOOD OUTLETS",
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
                    "id": "5dTwMaccZtp"
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
                    "tabIndex": 5,
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
                    "id": "6CuB0XJols9"
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
                            "assetId": 341,
                            "id": "01",
                            "url": "story_content/66HpqkUSGbK.png",
                            "type": "normal",
                            "altText": "Picture 1.png",
                            "width": 72,
                            "height": 71,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 762,
                    "yPos": 4,
                    "tabIndex": 4,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 18,
                    "rotateYPos": 18,
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
                            "right": 36,
                            "bottom": 36,
                            "altText": "Picture 1.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 861
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 36,
                            "height": 36,
                            "strokewidth": 0
                        }
                    },
                    "width": 36,
                    "height": 36,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "67rAH9ZrIZ3"
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
                            "uniqueId": "6om1RI4PCtr_51514603",
                            "id": "01",
                            "linkId": "txt__default_6om1RI4PCtr",
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
                    "depth": 7,
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
                    "id": "6om1RI4PCtr"
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
                    "tabIndex": 17,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 334,
                    "rotateYPos": 223,
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
                    "id": "5pSjhzxCvTZ"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 27,
                    "yPos": 308,
                    "tabIndex": 32,
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
                    "id": "5zQ1jgazbnG"
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
                            "uniqueId": "64jeCX2UXzs_-365698188",
                            "id": "01",
                            "linkId": "txt__default_64jeCX2UXzs",
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
                    "xPos": 34,
                    "yPos": 304,
                    "tabIndex": 31,
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
                    "id": "64jeCX2UXzs"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 27,
                    "yPos": 252,
                    "tabIndex": 23,
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
                    "id": "6pEfQAqnrpx"
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
                            "uniqueId": "5XKlfSnprwo_-2133452345",
                            "id": "01",
                            "linkId": "txt__default_5XKlfSnprwo",
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
                    "xPos": 33,
                    "yPos": 258,
                    "tabIndex": 24,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 83.5,
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
                    "id": "5XKlfSnprwo"
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
                    "tabIndex": 36,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 85,
                    "rotateYPos": 79.5,
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
                    "id": "6GiErJTuYjh"
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
                    "tabIndex": 35,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 77,
                    "rotateYPos": 70,
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
                    "id": "6PBEIWKOkeU"
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
                            "tabIndex": 22,
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
                            "id": "62WYpzwvZ44"
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
                                    "assetId": 342,
                                    "id": "01",
                                    "url": "story_content/6BFRSpZl3xK.png",
                                    "type": "normal",
                                    "altText": "Picture 6.png",
                                    "width": 46,
                                    "height": 90,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 36,
                            "yPos": 0,
                            "tabIndex": 20,
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
                            "id": "5WuyNvAtTVv"
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
                                    "assetId": 343,
                                    "id": "01",
                                    "url": "story_content/5cmIdGD52aS.png",
                                    "type": "normal",
                                    "altText": "Picture 7.png",
                                    "width": 46,
                                    "height": 90,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 18,
                            "yPos": 1,
                            "tabIndex": 21,
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
                            "id": "5qKwiU4tBRX"
                        }
                    ],
                    "accType": "text",
                    "altText": "Group 2",
                    "shapemaskId": "",
                    "xPos": 224,
                    "yPos": 246,
                    "tabIndex": 19,
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
                    "id": "6CjUd141tWP"
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
                            "uniqueId": "5vAUPAphK9V_-356618977",
                            "id": "01",
                            "linkId": "txt__default_5vAUPAphK9V",
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
                    "xPos": 257,
                    "yPos": 260,
                    "tabIndex": 26,
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
                    "id": "5vAUPAphK9V"
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
                            "uniqueId": "5d4zDwDBVHx_-1054029660",
                            "id": "01",
                            "linkId": "txt__default_5d4zDwDBVHx",
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
                    "xPos": 257,
                    "yPos": 316,
                    "tabIndex": 34,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 49,
                    "rotateYPos": 9.5,
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
                    "id": "5d4zDwDBVHx"
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
                            "tabIndex": 30,
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
                            "id": "6Xd438kOTx7"
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
                                    "assetId": 344,
                                    "id": "01",
                                    "url": "story_content/6B5xtQGAwMc.png",
                                    "type": "normal",
                                    "altText": "Picture 9.png",
                                    "width": 45,
                                    "height": 90,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 36,
                            "yPos": 0,
                            "tabIndex": 28,
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
                                    "altText": "Picture 9.png",
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
                            "id": "6MIYuuUj6WP"
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
                                    "assetId": 345,
                                    "id": "01",
                                    "url": "story_content/62EoROBw4OO.png",
                                    "type": "normal",
                                    "altText": "Picture 10.png",
                                    "width": 46,
                                    "height": 90,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 18,
                            "yPos": 1,
                            "tabIndex": 29,
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
                                    "altText": "Picture 10.png",
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
                            "id": "6iBMmPfh91B"
                        }
                    ],
                    "accType": "text",
                    "altText": "Group 14",
                    "shapemaskId": "",
                    "xPos": 224,
                    "yPos": 302,
                    "tabIndex": 27,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 29.5,
                    "rotateYPos": 23,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 18,
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
                    "id": "6BsDKvON1ju"
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
                            "uniqueId": "6POM9FMMG0m_-1831697830",
                            "id": "01",
                            "linkId": "txt__default_6POM9FMMG0m",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 11,
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
                                "right": 15,
                                "bottom": 21,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 863
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 5,
                    "yPos": 258,
                    "tabIndex": 25,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 12.5,
                    "rotateYPos": 11,
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
                            "right": 25,
                            "bottom": 22,
                            "altText": "1",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 862
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 25,
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
                    "width": 25,
                    "height": 22,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6POM9FMMG0m"
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
                            "uniqueId": "6KvKxFqaQuY_1873188293",
                            "id": "01",
                            "linkId": "txt__default_6KvKxFqaQuY",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 11,
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
                                "right": 16,
                                "bottom": 21,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 864
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 5,
                    "yPos": 314,
                    "tabIndex": 33,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 12.5,
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
                            "right": 25,
                            "bottom": 22,
                            "altText": "2",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 862
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 25,
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
                    "width": 25,
                    "height": 22,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6KvKxFqaQuY"
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
                    "depth": 21,
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
                    "id": "5kacuk0gZoq"
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
                                    "uniqueId": "68aEUrvI4UH_1033618916",
                                    "id": "01",
                                    "linkId": "txt__default_68aEUrvI4UH",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 161,
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
                                                        "text": "Socializing with friends around meals\\n",
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
                                                        "len": 38,
                                                        "flowDirection": "leftToRight",
                                                        "cursive": false
                                                    }
                                                ]
                                            },
                                            {
                                                "spans": [
                                                    {
                                                        "text": "Replenishment break",
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
                                        "right": 140,
                                        "bottom": 44,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 866
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 145,
                            "yPos": 0,
                            "tabIndex": 10,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 83.5,
                            "rotateYPos": 23,
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
                                    "right": 167,
                                    "bottom": 46,
                                    "altText": "Socializing with friends around meals\\nReplenishment break",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 865
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 167,
                                    "height": 46,
                                    "strokewidth": 0
                                }
                            },
                            "width": 167,
                            "height": 46,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "68aEUrvI4UH"
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
                                    "uniqueId": "6O8XeylYPLZ_-664234515",
                                    "id": "01",
                                    "linkId": "txt__default_6O8XeylYPLZ",
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
                                        "bottom": 36,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 681
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 314,
                            "yPos": 4,
                            "tabIndex": 13,
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
                            "id": "6O8XeylYPLZ"
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
                                    "uniqueId": "64V0zjB787f_-1786454235",
                                    "id": "01",
                                    "linkId": "txt__default_64V0zjB787f",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 173,
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
                                                        "text": "Elevate ‘The meal Break’\\n",
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
                                                        "len": 25,
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
                                        "right": 148,
                                        "bottom": 30,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 868
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 453,
                            "yPos": 7,
                            "tabIndex": 15,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 89.5,
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
                                    "right": 179,
                                    "bottom": 33,
                                    "altText": "Elevate ‘The meal Break’\\nDiscover New favorite",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 867
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 179,
                                    "height": 33,
                                    "strokewidth": 0
                                }
                            },
                            "width": 179,
                            "height": 33,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "64V0zjB787f"
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
                                    "uniqueId": "6WGvH5ZV4N8_1913447732",
                                    "id": "01",
                                    "linkId": "txt__default_6WGvH5ZV4N8",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 171,
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
                                        "right": 150,
                                        "bottom": 36,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 682
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 644,
                            "yPos": 4,
                            "tabIndex": 14,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 88.5,
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
                                    "right": 177,
                                    "bottom": 40,
                                    "altText": "EXECUTION PRIORITIES\\nBE RELEVANT",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 869
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 177,
                                    "height": 40,
                                    "strokewidth": 0
                                }
                            },
                            "width": 177,
                            "height": 40,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6WGvH5ZV4N8"
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
                                    "uniqueId": "6IBsOsR21f3_1941668361",
                                    "id": "01",
                                    "linkId": "txt__default_6IBsOsR21f3",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 82,
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
                                                        "text": "Menu\\n",
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
                                                        "len": 5,
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
                                        "right": 51,
                                        "bottom": 44,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 871
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 813,
                            "yPos": 0,
                            "tabIndex": 11,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 44,
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
                                    "right": 88,
                                    "bottom": 46,
                                    "altText": "Counter\\nMenu\\nCooler",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 870
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 88,
                                    "height": 46,
                                    "strokewidth": 0
                                }
                            },
                            "width": 88,
                            "height": 46,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6IBsOsR21f3"
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
                                    "uniqueId": "5sPNLOSvXJe_336081269",
                                    "id": "01",
                                    "linkId": "txt__default_5sPNLOSvXJe",
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
                                        "bottom": 36,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 684
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 4,
                            "tabIndex": 12,
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
                            "id": "5sPNLOSvXJe"
                        }
                    ],
                    "accType": "text",
                    "altText": "Agrupar 4",
                    "shapemaskId": "",
                    "xPos": 27,
                    "yPos": 60,
                    "tabIndex": 9,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 450.5,
                    "rotateYPos": 23,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 22,
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
                    "width": 901,
                    "height": 46,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6on2IaXjMyx"
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
                            "assetId": 346,
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
                    "yPos": 124,
                    "tabIndex": 18,
                    "tabEnabled": true,
                    "xOffset": -5,
                    "yOffset": -5,
                    "rotateXPos": 462,
                    "rotateYPos": 0,
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
                            "url": "txt__default_6pYn97i3VoH.png",
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
                    "id": "6pYn97i3VoH"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 340,
                    "yPos": 61,
                    "tabIndex": 16,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": -0.5,
                    "rotateYPos": 25,
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
                    "id": "6oKW2Hw6FqF"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 660,
                    "yPos": 60,
                    "tabIndex": 8,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": -0.5,
                    "rotateYPos": 25,
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
                    "id": "6mSo5klOt02"
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