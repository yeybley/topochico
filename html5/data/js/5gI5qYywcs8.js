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
    "slideNumberInScene": 8,
    "includeInSlideCounts": true,
    "presenterRef": {
        "id": "none"
    },
    "showAnimationId": "",
    "lmsId": "Slide8",
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
    "id": "5gI5qYywcs8",
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
                        "value": "_player.62Io9d9R7HS.5WElBvopRiG"
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
        "NavigationRestrictionNextSlide_5gI5qYywcs8": {
            "kind": "actiongroup",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "ActGrpOnNextButtonClick"
                }
            ]
        },
        "NavigationRestrictionPreviousSlide_5gI5qYywcs8": {
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
                    "id": "NavigationRestrictionNextSlide_5gI5qYywcs8"
                }
            ]
        },
        {
            "kind": "onprevslide",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "NavigationRestrictionPreviousSlide_5gI5qYywcs8"
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
                        "value": "_player.62Io9d9R7HS.5WElBvopRiG"
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
                    "assetId": 49,
                    "id": "6qLN0WcpePI"
                }
            ],
            "enableSeek": true,
            "enableReplay": true,
            "timeline": {
                "duration": 35875,
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
                                    "value": "64f6yIudHcP"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6D7i2TZ7fPQ"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6TGI4TBYu3p"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6omWbqb3rbu"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6euUp8CXsQl"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6BqyGW18BMx"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5iG6ZkLhpXm"
                                }
                            },
                            {
                                "kind": "media_seek",
                                "position": 0,
                                "objRef": {
                                    "type": "string",
                                    "value": "6qLN0WcpePI"
                                }
                            },
                            {
                                "kind": "media_play",
                                "objRef": {
                                    "type": "string",
                                    "value": "6qLN0WcpePI"
                                }
                            },
                            {
                                "kind": "set_volume",
                                "volume": 75,
                                "objRef": {
                                    "type": "string",
                                    "value": "6qLN0WcpePI"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 500,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6LdvTdFQWyc"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5pvSwL6YRTK"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5pvSwL6YRTK.5WEpup6oEkL"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5pvSwL6YRTK.6QNkczgJeZ3"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5pvSwL6YRTK.6YxxXIe9qgH"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6mgSpNblFTK"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 23000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5YCKtebZtwU"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "68Ikgy3LHDa"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "68Ikgy3LHDa.64bPOfeAHzR"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "68Ikgy3LHDa.6m0UjZ1lMPH"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "68Ikgy3LHDa.5vqafUfWGtF"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "68Ikgy3LHDa.6INiK6rAWd7"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 24250,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6oX16kF8X60"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6IXInAhKTao"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6IXInAhKTao.5eHDQQe2xyU"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6IXInAhKTao.5j1785XuVcP"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6IXInAhKTao.5kuYoNW9DNO"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6IXInAhKTao.6rR9khfHVZn"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 28500,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6k6SpwDDlv3"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "65B93YjGqyS"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "65B93YjGqyS.5VGBaWauDzO"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "65B93YjGqyS.6MU7KATKUHF"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "65B93YjGqyS.5Zr98Eq1viq"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 32000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5ab6eyMFT56"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5ab6eyMFT56.6eoS6gBe8cF"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5ab6eyMFT56.6HHI4VIJB9w"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5ab6eyMFT56.5llGfN8HfqB"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "66z0Q1GYLHq"
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
                    "yPos": 0,
                    "tabIndex": 0,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 481,
                    "rotateYPos": 270,
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
                            "right": 963,
                            "bottom": 540,
                            "altText": "Google Shape;120;gfe5e8fed11_0_194",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 24
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 963,
                            "height": 540,
                            "strokewidth": 0
                        }
                    },
                    "width": 962,
                    "height": 540,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "64f6yIudHcP"
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
                            "uniqueId": "6D7i2TZ7fPQ_-271895858",
                            "id": "01",
                            "linkId": "txt__default_6D7i2TZ7fPQ",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 564,
                            "height": 52,
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
                                                "text": "GROWTH ",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 30.375,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#EC0028",
                                                    "linkColor": "#EC0028",
                                                    "ascent": 42.242,
                                                    "descent": 8.789,
                                                    "leading": 0,
                                                    "underlinePosition": -4.05,
                                                    "underlineThickness": 2.025,
                                                    "xHeight": 20.007
                                                }
                                            },
                                            {
                                                "text": "AMBITION",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 30.375,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 42.242,
                                                    "descent": 8.789,
                                                    "leading": 0,
                                                    "underlinePosition": -4.05,
                                                    "underlineThickness": 2.025,
                                                    "xHeight": 20.007
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
                                            "listLevel": 1,
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 48.6,
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
                                "right": 476,
                                "bottom": 55,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 92
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 230,
                    "yPos": 37,
                    "tabIndex": 2,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 285,
                    "rotateYPos": 29,
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
                            "right": 570,
                            "bottom": 58,
                            "altText": "GROWTH AMBITION",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 91
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 570,
                            "height": 58,
                            "strokewidth": 0
                        }
                    },
                    "width": 570,
                    "height": 58,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6D7i2TZ7fPQ"
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
                            "uniqueId": "6TGI4TBYu3p_-158681508",
                            "id": "01",
                            "linkId": "txt__default_6TGI4TBYu3p",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 674,
                            "height": 45,
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
                                                "text": "TO A CULTURAL BEACON OF AUTHENTICITY,\\n",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                                    "descent": 5.787,
                                                    "leading": 0,
                                                    "underlinePosition": -2.667,
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
                                            "lineSpacingRule": "exactly",
                                            "lineSpacing": 12,
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
                                                "text": "\\n",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                                    "descent": 5.787,
                                                    "leading": 0,
                                                    "underlinePosition": -2.667,
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
                                            "lineSpacingRule": "exactly",
                                            "lineSpacing": 9,
                                            "spacingBefore": 0,
                                            "spacingAfter": 0,
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "AN INCLUSIVE PREMIUM -  CATEGORY AGNOSTIC, ",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                                    "descent": 5.787,
                                                    "leading": 0,
                                                    "underlinePosition": -2.667,
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
                                            "lineSpacingRule": "exactly",
                                            "lineSpacing": 12,
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
                                                "len": 43,
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
                                "top": -12,
                                "right": 643,
                                "bottom": 51,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 103
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 146,
                    "yPos": 136,
                    "tabIndex": 5,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 340,
                    "rotateYPos": 25.5,
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
                            "top": -12,
                            "right": 680,
                            "bottom": 51,
                            "altText": "TO A CULTURAL BEACON OF AUTHENTICITY,\\n\\nAN INCLUSIVE PREMIUM -  CATEGORY AGNOSTIC, ",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 102
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 680,
                            "height": 51,
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
                    "width": 680,
                    "height": 51,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6TGI4TBYu3p"
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
                            "assetId": 34,
                            "id": "01",
                            "url": "story_content/6XXrNWHnSyp.png",
                            "type": "normal",
                            "altText": "Picture 1.png",
                            "width": 78,
                            "height": 34,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 171,
                    "yPos": 135,
                    "tabIndex": 4,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 19.5,
                    "rotateYPos": 8.5,
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
                            "right": 39,
                            "bottom": 17,
                            "altText": "Picture 1.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 95
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 39,
                            "height": 17,
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
                    "width": 39,
                    "height": 17,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6omWbqb3rbu"
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
                            "assetId": 29,
                            "id": "01",
                            "url": "story_content/6gbB7Qyee89.png",
                            "type": "normal",
                            "altText": "Picture 2.png",
                            "width": 226,
                            "height": 148,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 145,
                    "yPos": 39,
                    "tabIndex": 3,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 56.5,
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
                            "right": 113,
                            "bottom": 74,
                            "altText": "Picture 2.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 96
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 113,
                            "height": 74,
                            "strokewidth": 0
                        }
                    },
                    "width": 113,
                    "height": 74,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6euUp8CXsQl"
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
                            "uniqueId": "6oX16kF8X60_1832567486",
                            "id": "01",
                            "linkId": "txt__default_6oX16kF8X60",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 95,
                            "height": 56,
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
                                                "text": "SPIRITED\\n",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
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
                                                "len": 9,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Premixed\\n",
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
                                                "len": 9,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Cocktails",
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
                                                "len": 9,
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
                                "right": 96,
                                "bottom": 59,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 105
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 89,
                    "yPos": 423,
                    "tabIndex": 29,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 54.5,
                    "rotateYPos": 31,
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
                            "right": 109,
                            "bottom": 62,
                            "altText": "SPIRITED\\nPremixed\\nCocktails",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 104
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 109,
                            "height": 62,
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
                                        "easingdir": "easeinout"
                                    },
                                    "scale": {
                                        "path": [
                                            {
                                                "kind": "segment",
                                                "startx": "$ScaleX",
                                                "starty": "$ScaleY",
                                                "dsx": "-90",
                                                "dsy": "-90",
                                                "endx": "100",
                                                "endy": "100",
                                                "dex": "0",
                                                "dey": "0",
                                                "startrelative": false,
                                                "endrelative": true
                                            }
                                        ],
                                        "textonly": false,
                                        "useglobalaxes": false,
                                        "duration": 750,
                                        "easing": "linear",
                                        "easingdir": "easein"
                                    }
                                }
                            ]
                        }
                    ],
                    "width": 109,
                    "height": 62,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6oX16kF8X60"
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
                                    "assetId": 35,
                                    "id": "01",
                                    "url": "story_content/6Gac2DitO7a.png",
                                    "type": "normal",
                                    "altText": "Picture 3.png",
                                    "width": 180,
                                    "height": 240,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 79,
                            "yPos": 1,
                            "tabIndex": 18,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 45,
                            "rotateYPos": 60,
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
                                    "right": 90,
                                    "bottom": 120,
                                    "altText": "Picture 3.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 106
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 90,
                                    "height": 120,
                                    "strokewidth": 0
                                }
                            },
                            "width": 90,
                            "height": 120,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6eoS6gBe8cF"
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
                                    "assetId": 36,
                                    "id": "01",
                                    "url": "story_content/6X2jDqecWVn.png",
                                    "type": "normal",
                                    "altText": "Picture 4.png",
                                    "width": 181,
                                    "height": 242,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 38,
                            "yPos": 1,
                            "tabIndex": 17,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 45,
                            "rotateYPos": 60.5,
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
                                    "right": 90,
                                    "bottom": 121,
                                    "altText": "Picture 4.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 107
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 90,
                                    "height": 121,
                                    "strokewidth": 0
                                }
                            },
                            "width": 90,
                            "height": 121,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6HHI4VIJB9w"
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
                                    "assetId": 37,
                                    "id": "01",
                                    "url": "story_content/5wDAojRJxsq.png",
                                    "type": "normal",
                                    "altText": "Picture 5.png",
                                    "width": 182,
                                    "height": 242,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 0,
                            "tabIndex": 16,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 45.5,
                            "rotateYPos": 60.5,
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
                                    "right": 91,
                                    "bottom": 121,
                                    "altText": "Picture 5.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 108
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 91,
                                    "height": 121,
                                    "strokewidth": 0
                                }
                            },
                            "width": 91,
                            "height": 121,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5llGfN8HfqB"
                        }
                    ],
                    "accType": "text",
                    "altText": "Grupo\\r\\n 5",
                    "shapemaskId": "",
                    "xPos": 754,
                    "yPos": 300,
                    "tabIndex": 15,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 84.5,
                    "rotateYPos": 60.5,
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
                                        "easingdir": "easeinout"
                                    },
                                    "scale": {
                                        "path": [
                                            {
                                                "kind": "segment",
                                                "startx": "$ScaleX",
                                                "starty": "$ScaleY",
                                                "dsx": "-90",
                                                "dsy": "-90",
                                                "endx": "100",
                                                "endy": "100",
                                                "dex": "0",
                                                "dey": "0",
                                                "startrelative": false,
                                                "endrelative": true
                                            }
                                        ],
                                        "textonly": false,
                                        "useglobalaxes": false,
                                        "duration": 750,
                                        "easing": "linear",
                                        "easingdir": "easein"
                                    }
                                }
                            ]
                        }
                    ],
                    "width": 169,
                    "height": 121,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5ab6eyMFT56"
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
                            "uniqueId": "5YCKtebZtwU_1820913621",
                            "id": "01",
                            "linkId": "txt__default_5YCKtebZtwU",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 133,
                            "height": 56,
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
                                                "text": "HARD SELTZER\\n",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
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
                                                "len": 13,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Spiked\\n",
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
                                                "len": 7,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Sparkling Water",
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
                                "right": 137,
                                "bottom": 59,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 110
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 249,
                    "yPos": 423,
                    "tabIndex": 30,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 73.5,
                    "rotateYPos": 31,
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
                            "right": 147,
                            "bottom": 62,
                            "altText": "HARD SELTZER\\nSpiked\\nSparkling Water",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 109
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 147,
                            "height": 62,
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
                                        "easingdir": "easeinout"
                                    },
                                    "scale": {
                                        "path": [
                                            {
                                                "kind": "segment",
                                                "startx": "$ScaleX",
                                                "starty": "$ScaleY",
                                                "dsx": "-90",
                                                "dsy": "-90",
                                                "endx": "100",
                                                "endy": "100",
                                                "dex": "0",
                                                "dey": "0",
                                                "startrelative": false,
                                                "endrelative": true
                                            }
                                        ],
                                        "textonly": false,
                                        "useglobalaxes": false,
                                        "duration": 750,
                                        "easing": "linear",
                                        "easingdir": "easein"
                                    }
                                }
                            ]
                        }
                    ],
                    "width": 147,
                    "height": 62,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5YCKtebZtwU"
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
                                    "assetId": 38,
                                    "id": "01",
                                    "url": "story_content/5v3vqCu5ulP.png",
                                    "type": "normal",
                                    "altText": "Picture 6.png",
                                    "width": 192,
                                    "height": 192,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 159,
                            "yPos": 0,
                            "tabIndex": 26,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 48,
                            "rotateYPos": 48,
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
                                    "right": 96,
                                    "bottom": 96,
                                    "altText": "Picture 6.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 111
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 96,
                                    "height": 96,
                                    "strokewidth": 0
                                }
                            },
                            "width": 96,
                            "height": 96,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5eHDQQe2xyU"
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
                                    "assetId": 39,
                                    "id": "01",
                                    "url": "story_content/6SooOnndLdP.png",
                                    "type": "normal",
                                    "altText": "Picture 7.png",
                                    "width": 192,
                                    "height": 192,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 113,
                            "yPos": 0,
                            "tabIndex": 25,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 48,
                            "rotateYPos": 48,
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
                                    "right": 96,
                                    "bottom": 96,
                                    "altText": "Picture 7.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 111
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 96,
                                    "height": 96,
                                    "strokewidth": 0
                                }
                            },
                            "width": 96,
                            "height": 96,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5j1785XuVcP"
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
                                    "assetId": 40,
                                    "id": "01",
                                    "url": "story_content/6gpizwb5G9d.png",
                                    "type": "normal",
                                    "altText": "Picture 8.png",
                                    "width": 192,
                                    "height": 192,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 67,
                            "yPos": 1,
                            "tabIndex": 27,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 48,
                            "rotateYPos": 48,
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
                                    "right": 96,
                                    "bottom": 96,
                                    "altText": "Picture 8.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 111
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 96,
                                    "height": 96,
                                    "strokewidth": 0
                                }
                            },
                            "width": 96,
                            "height": 96,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5kuYoNW9DNO"
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
                                    "assetId": 41,
                                    "id": "01",
                                    "url": "story_content/5W4InKxnI9F.png",
                                    "type": "normal",
                                    "altText": "Shape\\r\\n\\r\\nDescription automatically generated with medium confidence",
                                    "width": 676,
                                    "height": 35,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 71,
                            "tabIndex": 28,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 169,
                            "rotateYPos": 9,
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
                                    "right": 338,
                                    "bottom": 18,
                                    "altText": "Shape\\r\\n\\r\\nDescription automatically generated with medium confidence",
                                    "altTextOverridesText": true,
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 112
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 338,
                                    "height": 18,
                                    "strokewidth": 0
                                }
                            },
                            "width": 338,
                            "height": 18,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6rR9khfHVZn"
                        }
                    ],
                    "accType": "text",
                    "altText": "Grupo\\r\\n 2",
                    "shapemaskId": "",
                    "xPos": -18,
                    "yPos": 323,
                    "tabIndex": 24,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 169,
                    "rotateYPos": 48.5,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 9,
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
                                        "easingdir": "easeinout"
                                    },
                                    "scale": {
                                        "path": [
                                            {
                                                "kind": "segment",
                                                "startx": "$ScaleX",
                                                "starty": "$ScaleY",
                                                "dsx": "-90",
                                                "dsy": "-90",
                                                "endx": "100",
                                                "endy": "100",
                                                "dex": "0",
                                                "dey": "0",
                                                "startrelative": false,
                                                "endrelative": true
                                            }
                                        ],
                                        "textonly": false,
                                        "useglobalaxes": false,
                                        "duration": 750,
                                        "easing": "linear",
                                        "easingdir": "easein"
                                    }
                                }
                            ]
                        }
                    ],
                    "width": 338,
                    "height": 97,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6IXInAhKTao"
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
                            "uniqueId": "6k6SpwDDlv3_825568894",
                            "id": "01",
                            "linkId": "txt__default_6k6SpwDDlv3",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 146,
                            "height": 72,
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
                                                "text": "TWISTS",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 19.469,
                                                    "descent": 4.051,
                                                    "leading": 0,
                                                    "underlinePosition": -1.867,
                                                    "underlineThickness": 0.933,
                                                    "xHeight": 9.221
                                                }
                                            },
                                            {
                                                "text": "\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova RgBoldBold7F9CE22D\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 12,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 14.72,
                                                    "descent": 3.36,
                                                    "leading": 0,
                                                    "underlinePosition": -1.968,
                                                    "underlineThickness": 0.32,
                                                    "xHeight": 7.728
                                                }
                                            }
                                        ],
                                        "style": {
                                            "flowDirection": "leftToRight",
                                            "leadingMargin": 0,
                                            "trailingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
                                            "listLevel": 1,
                                            "lineSpacingRule": "single",
                                            "lineSpacing": 20,
                                            "spacingBefore": 0,
                                            "spacingAfter": 0,
                                            "listStyle": {
                                                "listType": "none",
                                                "listTypeFormat": "parentheses",
                                                "start": 0,
                                                "size": 100,
                                                "bulletChar": 8226,
                                                "bulletFont": "Arial",
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Sourced Sparkling Mineral water with a twist of citrus flavor",
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
                                            "flowDirection": "leftToRight",
                                            "leadingMargin": 0,
                                            "trailingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
                                            "listLevel": 1,
                                            "lineSpacingRule": "single",
                                            "lineSpacing": 20,
                                            "spacingBefore": 0,
                                            "spacingAfter": 0,
                                            "listStyle": {
                                                "listType": "none",
                                                "listTypeFormat": "parentheses",
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
                                "right": 155,
                                "bottom": 75,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 114
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 574,
                    "yPos": 423,
                    "tabIndex": 31,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 80,
                    "rotateYPos": 39,
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
                            "right": 160,
                            "bottom": 78,
                            "altText": "TWISTS\\nSourced Sparkling Mineral water with a twist of citrus flavor",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 113
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 160,
                            "height": 78,
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
                                        "easingdir": "easeinout"
                                    },
                                    "scale": {
                                        "path": [
                                            {
                                                "kind": "segment",
                                                "startx": "$ScaleX",
                                                "starty": "$ScaleY",
                                                "dsx": "-90",
                                                "dsy": "-90",
                                                "endx": "100",
                                                "endy": "100",
                                                "dex": "0",
                                                "dey": "0",
                                                "startrelative": false,
                                                "endrelative": true
                                            }
                                        ],
                                        "textonly": false,
                                        "useglobalaxes": false,
                                        "duration": 750,
                                        "easing": "linear",
                                        "easingdir": "easein"
                                    }
                                }
                            ]
                        }
                    ],
                    "width": 160,
                    "height": 78,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6k6SpwDDlv3"
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
                            "uniqueId": "66z0Q1GYLHq_1158931692",
                            "id": "01",
                            "linkId": "txt__default_66z0Q1GYLHq",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 119,
                            "height": 56,
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
                                                "text": "SABORES",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 19.469,
                                                    "descent": 4.051,
                                                    "leading": 0,
                                                    "underlinePosition": -1.867,
                                                    "underlineThickness": 0.933,
                                                    "xHeight": 9.221
                                                }
                                            },
                                            {
                                                "text": "\\n",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 7.875,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 10.952,
                                                    "descent": 2.279,
                                                    "leading": 0,
                                                    "underlinePosition": -1.05,
                                                    "underlineThickness": 0.525,
                                                    "xHeight": 5.187
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Flavored\\n",
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
                                                "len": 9,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Sparkling Water",
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
                                "right": 122,
                                "bottom": 59,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 116
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 774,
                    "yPos": 423,
                    "tabIndex": 32,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 66.5,
                    "rotateYPos": 31,
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
                            "right": 133,
                            "bottom": 62,
                            "altText": "SABORES\\nFlavored\\nSparkling Water",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 115
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 133,
                            "height": 62,
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
                                        "easingdir": "easeinout"
                                    },
                                    "scale": {
                                        "path": [
                                            {
                                                "kind": "segment",
                                                "startx": "$ScaleX",
                                                "starty": "$ScaleY",
                                                "dsx": "-90",
                                                "dsy": "-90",
                                                "endx": "100",
                                                "endy": "100",
                                                "dex": "0",
                                                "dey": "0",
                                                "startrelative": false,
                                                "endrelative": true
                                            }
                                        ],
                                        "textonly": false,
                                        "useglobalaxes": false,
                                        "duration": 750,
                                        "easing": "linear",
                                        "easingdir": "easein"
                                    }
                                }
                            ]
                        }
                    ],
                    "width": 133,
                    "height": 62,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "66z0Q1GYLHq"
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
                            "uniqueId": "6BqyGW18BMx_-1194689674",
                            "id": "01",
                            "linkId": "txt__default_6BqyGW18BMx",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 984,
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
                                                "text": "\\n",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 13.5,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#FE0000",
                                                    "linkColor": "#FE0000",
                                                    "ascent": 18.774,
                                                    "descent": 3.906,
                                                    "leading": 0,
                                                    "underlinePosition": -1.8,
                                                    "underlineThickness": 0.9,
                                                    "xHeight": 8.892
                                                }
                                            }
                                        ],
                                        "style": {
                                            "leadingMargin": 0,
                                            "firstLineMargin": 0,
                                            "justification": "center",
                                            "listLevel": 1,
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 16.2,
                                            "spacingBefore": 0,
                                            "spacingAfter": 0,
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "LIFESTYLE MOTHERBRAND ",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 20,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#FE0000",
                                                    "linkColor": "#FE0000",
                                                    "ascent": 27.813,
                                                    "descent": 5.787,
                                                    "leading": 0,
                                                    "underlinePosition": -2.667,
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
                                                "len": 22,
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
                                "right": 666,
                                "bottom": 60,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 118
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": -12,
                    "yPos": 169,
                    "tabIndex": 6,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 495,
                    "rotateYPos": 31.5,
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
                            "right": 990,
                            "bottom": 63,
                            "altText": "\\nLIFESTYLE MOTHERBRAND ",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 117
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 990,
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
                    "width": 990,
                    "height": 63,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6BqyGW18BMx"
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
                    "depth": 13,
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
                    "id": "5iG6ZkLhpXm"
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
                                    "assetId": 42,
                                    "id": "01",
                                    "url": "story_content/5em54cmuuFQ.png",
                                    "type": "normal",
                                    "altText": "Picture 12.png",
                                    "width": 71,
                                    "height": 184,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 0,
                            "tabIndex": 21,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 18,
                            "rotateYPos": 46,
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
                                    "right": 36,
                                    "bottom": 92,
                                    "altText": "Picture 12.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 119
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 36,
                                    "height": 92,
                                    "strokewidth": 0
                                }
                            },
                            "width": 36,
                            "height": 92,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "64bPOfeAHzR"
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
                                    "assetId": 43,
                                    "id": "01",
                                    "url": "story_content/5duKo5GhjLX.png",
                                    "type": "normal",
                                    "altText": "Picture 13.png",
                                    "width": 71,
                                    "height": 184,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 36,
                            "yPos": 0,
                            "tabIndex": 22,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 18,
                            "rotateYPos": 46,
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
                                    "right": 36,
                                    "bottom": 92,
                                    "altText": "Picture 13.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 119
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 36,
                                    "height": 92,
                                    "strokewidth": 0
                                }
                            },
                            "width": 36,
                            "height": 92,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6m0UjZ1lMPH"
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
                                    "assetId": 44,
                                    "id": "01",
                                    "url": "story_content/5tGdJbvldLY.png",
                                    "type": "normal",
                                    "altText": "Picture 14.png",
                                    "width": 70,
                                    "height": 184,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 73,
                            "yPos": 0,
                            "tabIndex": 23,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 18,
                            "rotateYPos": 46,
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
                                    "right": 36,
                                    "bottom": 92,
                                    "altText": "Picture 14.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 120
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 36,
                                    "height": 92,
                                    "strokewidth": 0
                                }
                            },
                            "width": 36,
                            "height": 92,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5vqafUfWGtF"
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
                                    "assetId": 45,
                                    "id": "01",
                                    "url": "story_content/5uD0pgcLQMe.png",
                                    "type": "normal",
                                    "altText": "Picture 15.png",
                                    "width": 71,
                                    "height": 184,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 109,
                            "yPos": 0,
                            "tabIndex": 20,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 18,
                            "rotateYPos": 46,
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
                                    "right": 36,
                                    "bottom": 92,
                                    "altText": "Picture 15.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 119
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 36,
                                    "height": 92,
                                    "strokewidth": 0
                                }
                            },
                            "width": 36,
                            "height": 92,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6INiK6rAWd7"
                        }
                    ],
                    "accType": "text",
                    "altText": "Group 7 3",
                    "shapemaskId": "",
                    "xPos": 251,
                    "yPos": 320,
                    "tabIndex": 19,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 72,
                    "rotateYPos": 46,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 14,
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
                                        "easingdir": "easeinout"
                                    },
                                    "scale": {
                                        "path": [
                                            {
                                                "kind": "segment",
                                                "startx": "$ScaleX",
                                                "starty": "$ScaleY",
                                                "dsx": "-90",
                                                "dsy": "-90",
                                                "endx": "100",
                                                "endy": "100",
                                                "dex": "0",
                                                "dey": "0",
                                                "startrelative": false,
                                                "endrelative": true
                                            }
                                        ],
                                        "textonly": false,
                                        "useglobalaxes": false,
                                        "duration": 750,
                                        "easing": "linear",
                                        "easingdir": "easein"
                                    }
                                }
                            ]
                        }
                    ],
                    "width": 144,
                    "height": 92,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "68Ikgy3LHDa"
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
                            "uniqueId": "6LdvTdFQWyc_-1419671718",
                            "id": "01",
                            "linkId": "txt__default_6LdvTdFQWyc",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 105,
                            "height": 32,
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
                                                "text": "Sourced\\n",
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Mineral Water",
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
                                "right": 108,
                                "bottom": 35,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 121
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 427,
                    "yPos": 465,
                    "tabIndex": 34,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 59.5,
                    "rotateYPos": 19,
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
                            "right": 119,
                            "bottom": 38,
                            "altText": "Sourced\\nMineral Water",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 97
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 119,
                            "height": 38,
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
                    "width": 119,
                    "height": 38,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6LdvTdFQWyc"
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
                                    "assetId": 30,
                                    "id": "01",
                                    "url": "story_content/5lx2v81B2fC.png",
                                    "type": "normal",
                                    "altText": "Picture 3.png",
                                    "width": 79,
                                    "height": 332,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 72,
                            "yPos": 20,
                            "tabIndex": 9,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 19.5,
                            "rotateYPos": 83,
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
                                    "right": 39,
                                    "bottom": 166,
                                    "altText": "Picture 3.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 99
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 39,
                                    "height": 166,
                                    "strokewidth": 0
                                }
                            },
                            "width": 39,
                            "height": 166,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5WEpup6oEkL"
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
                                    "assetId": 31,
                                    "id": "01",
                                    "url": "story_content/5X6BzB8j1Hv.png",
                                    "type": "normal",
                                    "altText": "Picture 4.png",
                                    "width": 78,
                                    "height": 346,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 24,
                            "tabIndex": 10,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 19.5,
                            "rotateYPos": 86.5,
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
                                    "right": 39,
                                    "bottom": 173,
                                    "altText": "Picture 4.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 100
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 39,
                                    "height": 173,
                                    "strokewidth": 0
                                }
                            },
                            "width": 39,
                            "height": 173,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6QNkczgJeZ3"
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
                                    "assetId": 32,
                                    "id": "01",
                                    "url": "story_content/6ol0Y7wQpDr.png",
                                    "type": "normal",
                                    "altText": "Picture 5.png",
                                    "width": 94,
                                    "height": 392,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 34,
                            "yPos": 0,
                            "tabIndex": 8,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 23.5,
                            "rotateYPos": 98,
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
                                    "right": 47,
                                    "bottom": 196,
                                    "altText": "Picture 5.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 101
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 47,
                                    "height": 196,
                                    "strokewidth": 0
                                }
                            },
                            "width": 47,
                            "height": 196,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6YxxXIe9qgH"
                        }
                    ],
                    "accType": "text",
                    "altText": "Google Shape;489;p47",
                    "shapemaskId": "",
                    "xPos": 431,
                    "yPos": 245,
                    "tabIndex": 7,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 56,
                    "rotateYPos": 98.5,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 16,
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
                    "width": 112,
                    "height": 197,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5pvSwL6YRTK"
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
                            "uniqueId": "6mgSpNblFTK_-1801082904",
                            "id": "01",
                            "linkId": "txt__default_6mgSpNblFTK",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 127,
                            "height": 24,
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
                                                "text": "THE ICON",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBoldE69F52A8\",\"Faustina Bold Roman\",\"Faustina\"",
                                                    "fontSize": 14,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#EA0C2A",
                                                    "linkColor": "#EA0C2A",
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
                                "right": 109,
                                "bottom": 27,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 123
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 420,
                    "yPos": 441,
                    "tabIndex": 33,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 66.5,
                    "rotateYPos": 15,
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
                            "right": 133,
                            "bottom": 30,
                            "altText": "THE ICON",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 122
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 133,
                            "height": 30,
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
                    "width": 133,
                    "height": 30,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6mgSpNblFTK"
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
                                    "assetId": 46,
                                    "id": "01",
                                    "url": "story_content/66MbJNHIVMI.png",
                                    "type": "normal",
                                    "altText": "Topo Chico Twist of Lime 12 oz Glass Bottle Pack of 24 – QPLASH.COM",
                                    "width": 62,
                                    "height": 234,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 2,
                            "tabIndex": 13,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 15.5,
                            "rotateYPos": 58.5,
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
                                    "right": 31,
                                    "bottom": 117,
                                    "altText": "Topo Chico Twist of Lime 12 oz Glass Bottle Pack of 24 – QPLASH.COM",
                                    "altTextOverridesText": true,
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 124
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 31,
                                    "height": 117,
                                    "strokewidth": 0
                                }
                            },
                            "width": 31,
                            "height": 117,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5VGBaWauDzO"
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
                                    "assetId": 47,
                                    "id": "01",
                                    "url": "story_content/5gaYMM674Vf.png",
                                    "type": "normal",
                                    "altText": "Topo Chico Twist of Tangerine Review • The Bubbleverse",
                                    "width": 97,
                                    "height": 234,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 57,
                            "yPos": 3,
                            "tabIndex": 14,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 24,
                            "rotateYPos": 58.5,
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
                                    "right": 48,
                                    "bottom": 117,
                                    "altText": "Topo Chico Twist of Tangerine Review • The Bubbleverse",
                                    "altTextOverridesText": true,
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 125
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 48,
                                    "height": 117,
                                    "strokewidth": 0
                                }
                            },
                            "width": 48,
                            "height": 117,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6MU7KATKUHF"
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
                                    "assetId": 48,
                                    "id": "01",
                                    "url": "story_content/5orecaTSLJQ.png",
                                    "type": "normal",
                                    "altText": "Topo Chico Sparkling Water: [1] Bottle | KNEAD BAKEHOUSE + PROVISIONS",
                                    "width": 62,
                                    "height": 240,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 34,
                            "yPos": 0,
                            "tabIndex": 12,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 15.5,
                            "rotateYPos": 60,
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
                                    "right": 31,
                                    "bottom": 120,
                                    "altText": "Topo Chico Sparkling Water: [1] Bottle | KNEAD BAKEHOUSE + PROVISIONS",
                                    "altTextOverridesText": true,
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 126
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 31,
                                    "height": 120,
                                    "strokewidth": 0
                                }
                            },
                            "width": 31,
                            "height": 120,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5Zr98Eq1viq"
                        }
                    ],
                    "accType": "text",
                    "altText": "Grupo\\r\\n 7",
                    "shapemaskId": "",
                    "xPos": 609,
                    "yPos": 294,
                    "tabIndex": 11,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 52.5,
                    "rotateYPos": 60,
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
                                        "easingdir": "easeinout"
                                    },
                                    "scale": {
                                        "path": [
                                            {
                                                "kind": "segment",
                                                "startx": "$ScaleX",
                                                "starty": "$ScaleY",
                                                "dsx": "-90",
                                                "dsy": "-90",
                                                "endx": "100",
                                                "endy": "100",
                                                "dex": "0",
                                                "dey": "0",
                                                "startrelative": false,
                                                "endrelative": true
                                            }
                                        ],
                                        "textonly": false,
                                        "useglobalaxes": false,
                                        "duration": 750,
                                        "easing": "linear",
                                        "easingdir": "easein"
                                    }
                                }
                            ]
                        }
                    ],
                    "width": 105,
                    "height": 120,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "65B93YjGqyS"
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