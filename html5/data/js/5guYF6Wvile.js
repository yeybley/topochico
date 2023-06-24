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
    "slideNumberInScene": 20,
    "includeInSlideCounts": true,
    "presenterRef": {
        "id": "none"
    },
    "showAnimationId": "",
    "lmsId": "Slide20",
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
    "id": "5guYF6Wvile",
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
                        "value": "_player.62Io9d9R7HS.5rDGL6uEJ1H"
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
        "NavigationRestrictionNextSlide_5guYF6Wvile": {
            "kind": "actiongroup",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "ActGrpOnNextButtonClick"
                }
            ]
        },
        "NavigationRestrictionPreviousSlide_5guYF6Wvile": {
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
                    "id": "NavigationRestrictionNextSlide_5guYF6Wvile"
                }
            ]
        },
        {
            "kind": "onprevslide",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "NavigationRestrictionPreviousSlide_5guYF6Wvile"
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
                        "value": "_player.62Io9d9R7HS.5rDGL6uEJ1H"
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
                    "assetId": 179,
                    "id": "6InKkWp2CRy"
                }
            ],
            "enableSeek": true,
            "enableReplay": true,
            "timeline": {
                "duration": 25812,
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
                                    "value": "6pxAG5pY3Ht"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6oXhg5HxN3A"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5t9YCFqyT2u"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5tHD8YXgR04"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5h0xv7R3NLc"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5wmD3nOHpCg"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5rDs31N6Umg"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5s9A7bKMiFB"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6rSg5vDdkKE"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6CEe0qANK2R"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5wkCOFrLx71"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5k7WoKHW3sv"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6IMPp2BYS2s"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6dl8fbpXWgX"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6GoOJjhzVJL"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5hMFahoJAhU"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5obQxmiINQb"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6b8xiWwbjf9"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5qzIXhl73An"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6MdgZ9UdjAL"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5dcJUo67siw"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5Uni6EI2KSR"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6Q3PBWyhfnn"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6Ty0OjpqLdu"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6iuXZnu5cNM"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5tH785cHEIA"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5n0hDaV5lry"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6kzuq4g7YDH"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6gQMLZJrMyN"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6qYcn1Iz1dC"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5uE6Nj14ADX"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6Ddf5gZHxmE"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5ixTlChHCPX"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "67lVhPjaFCq"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6n0RyZ93A6p"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "64WgiBdvwxl"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6afAQlCTWf2"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6Ot5SOTS8vx"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6oz5pvYeL5R"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6UKpVUEjfRt"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "60kGUMLHwiP"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5WIfAtlXCBM"
                                }
                            },
                            {
                                "kind": "media_seek",
                                "position": 0,
                                "objRef": {
                                    "type": "string",
                                    "value": "6InKkWp2CRy"
                                }
                            },
                            {
                                "kind": "media_play",
                                "objRef": {
                                    "type": "string",
                                    "value": "6InKkWp2CRy"
                                }
                            },
                            {
                                "kind": "set_volume",
                                "volume": 75,
                                "objRef": {
                                    "type": "string",
                                    "value": "6InKkWp2CRy"
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
                    "tabIndex": 1,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 481,
                    "rotateYPos": 23.5,
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
                    "id": "6pxAG5pY3Ht"
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
                            "uniqueId": "6oXhg5HxN3A_1076213855",
                            "id": "01",
                            "linkId": "txt__default_6oXhg5HxN3A",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 353,
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
                                                "text": "TO WIN IN THIS CATEGORY",
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
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 16.2,
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
                                "right": 295,
                                "bottom": 27,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 477
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 349,
                    "yPos": 55,
                    "tabIndex": 3,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 179.5,
                    "rotateYPos": 15,
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
                            "right": 359,
                            "bottom": 30,
                            "altText": "TO WIN IN THIS CATEGORY",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 476
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 359,
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
                    "width": 359,
                    "height": 30,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6oXhg5HxN3A"
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
                            "assetId": 166,
                            "id": "01",
                            "url": "story_content/6gpFvNmrcjC.png",
                            "type": "normal",
                            "altText": "Picture 1.png",
                            "width": 102,
                            "height": 64,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 354,
                    "yPos": 53,
                    "tabIndex": 2,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 25.5,
                    "rotateYPos": 16,
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
                            "right": 51,
                            "bottom": 32,
                            "altText": "Picture 1.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 368
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 51,
                            "height": 32,
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
                    "width": 51,
                    "height": 32,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5t9YCFqyT2u"
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
                            "uniqueId": "5tHD8YXgR04_-252632132",
                            "id": "01",
                            "linkId": "txt__default_5tHD8YXgR04",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 434,
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
                                                "text": "CHANNEL STRATEGY 2023",
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
                                "right": 409,
                                "bottom": 44,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 478
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 260,
                    "yPos": 85,
                    "tabIndex": 4,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 220,
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
                            "right": 440,
                            "bottom": 47,
                            "altText": "CHANNEL STRATEGY 2023",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 369
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 440,
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
                    "width": 440,
                    "height": 47,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5tHD8YXgR04"
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
                            "assetId": 167,
                            "id": "01",
                            "url": "story_content/6DMnQoGLF5K.png",
                            "type": "normal",
                            "altText": "Picture 17",
                            "width": 152,
                            "height": 45,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 212,
                    "yPos": 144,
                    "tabIndex": 12,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 38,
                    "rotateYPos": 11.5,
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
                            "right": 76,
                            "bottom": 23,
                            "altText": "Picture 17",
                            "altTextOverridesText": true,
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 479
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 76,
                            "height": 23,
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
                    "width": 76,
                    "height": 23,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5h0xv7R3NLc"
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
                            "uniqueId": "5wmD3nOHpCg_2058099644",
                            "id": "01",
                            "linkId": "txt__default_5wmD3nOHpCg",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 99,
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
                                                "text": "LARGE \\n",
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
                                                "len": 7,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "STORES",
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
                                "right": 79,
                                "bottom": 40,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 481
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 195,
                    "yPos": 169,
                    "tabIndex": 14,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 52.5,
                    "rotateYPos": 21.5,
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
                            "right": 105,
                            "bottom": 43,
                            "altText": "LARGE \\nSTORES",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 480
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 105,
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
                    "width": 105,
                    "height": 43,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5wmD3nOHpCg"
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
                            "assetId": 168,
                            "id": "01",
                            "url": "story_content/6E0h14MMtVD.png",
                            "type": "normal",
                            "altText": "Picture 21",
                            "width": 74,
                            "height": 68,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 808,
                    "yPos": 137,
                    "tabIndex": 5,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 18.5,
                    "rotateYPos": 17,
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
                            "right": 37,
                            "bottom": 34,
                            "altText": "Picture 21",
                            "altTextOverridesText": true,
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 482
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 37,
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
                    "width": 37,
                    "height": 34,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5rDs31N6Umg"
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
                            "assetId": 169,
                            "id": "01",
                            "url": "story_content/6pyWA2O58tq.png",
                            "type": "normal",
                            "altText": "Picture 74",
                            "width": 94,
                            "height": 56,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 414,
                    "yPos": 138,
                    "tabIndex": 6,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 23.5,
                    "rotateYPos": 14,
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
                            "right": 47,
                            "bottom": 28,
                            "altText": "Picture 74",
                            "altTextOverridesText": true,
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 483
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 47,
                            "height": 28,
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
                    "width": 47,
                    "height": 28,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5s9A7bKMiFB"
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
                            "uniqueId": "6rSg5vDdkKE_-625404328",
                            "id": "01",
                            "linkId": "txt__default_6rSg5vDdkKE",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 134,
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
                                                "text": "E-COMMERCE & DELIVERY APPS",
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
                                                "len": 26,
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
                                "bottom": 40,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 485
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 759,
                    "yPos": 170,
                    "tabIndex": 16,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 70,
                    "rotateYPos": 21.5,
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
                            "right": 140,
                            "bottom": 43,
                            "altText": "E-COMMERCE & DELIVERY APPS",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 484
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 140,
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
                    "width": 140,
                    "height": 43,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6rSg5vDdkKE"
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
                            "assetId": 170,
                            "id": "01",
                            "url": "",
                            "type": "normal",
                            "width": 10,
                            "height": 398,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 169,
                    "yPos": 140,
                    "tabIndex": 9,
                    "tabEnabled": true,
                    "xOffset": -5,
                    "yOffset": -5,
                    "rotateXPos": 0,
                    "rotateYPos": 193.5,
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
                            "right": 10,
                            "bottom": 398,
                            "altText": "Google Shape;676;p40",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 77
                            }
                        },
                        "html5data": {
                            "url": "txt__default_6CEe0qANK2R.png",
                            "xPos": -5,
                            "yPos": -5,
                            "width": 10,
                            "height": 398,
                            "strokewidth": 1,
                            "mask": "17O3X4O5X2O7X1O7X2O6X2O5X5O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X5O5X3O5X2O7X1O7X2O5X4O3X16O"
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
                    "height": 387,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6CEe0qANK2R"
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
                            "uniqueId": "5wkCOFrLx71_-829430736",
                            "id": "01",
                            "linkId": "txt__default_5wkCOFrLx71",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 98,
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
                                                "text": "FOOD\\n",
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
                                                "len": 5,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "OUTLETS",
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
                                "right": 83,
                                "bottom": 40,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 487
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 386,
                    "yPos": 170,
                    "tabIndex": 15,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 52,
                    "rotateYPos": 21.5,
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
                            "right": 104,
                            "bottom": 43,
                            "altText": "FOOD\\nOUTLETS",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 486
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 104,
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
                    "width": 104,
                    "height": 43,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5wkCOFrLx71"
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
                            "uniqueId": "5k7WoKHW3sv_-1306009406",
                            "id": "01",
                            "linkId": "txt__default_5k7WoKHW3sv",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 98,
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
                                                "text": "UNIVERSITY\\n",
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "FOOD COURTS",
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
                                "right": 101,
                                "bottom": 40,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 488
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 588,
                    "yPos": 172,
                    "tabIndex": 17,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 52,
                    "rotateYPos": 21.5,
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
                            "right": 104,
                            "bottom": 43,
                            "altText": "UNIVERSITY\\nFOOD COURTS",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 486
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 104,
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
                    "width": 104,
                    "height": 43,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5k7WoKHW3sv"
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
                            "assetId": 171,
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
                    "xPos": 9,
                    "yPos": 211,
                    "tabIndex": 18,
                    "tabEnabled": true,
                    "xOffset": -5,
                    "yOffset": -5,
                    "rotateXPos": 462,
                    "rotateYPos": 0,
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
                            "url": "txt__default_6IMPp2BYS2s.png",
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
                    "id": "6IMPp2BYS2s"
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
                            "uniqueId": "6dl8fbpXWgX_-1265082127",
                            "id": "01",
                            "linkId": "txt__default_6dl8fbpXWgX",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 139,
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
                                                "text": "BE WHERE\\n",
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
                                                "len": 9,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "IT MATTERS",
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
                                "right": 113,
                                "bottom": 40,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 490
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 14,
                    "yPos": 161,
                    "tabIndex": 13,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 72.5,
                    "rotateYPos": 21.5,
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
                            "right": 145,
                            "bottom": 43,
                            "altText": "BE WHERE\\nIT MATTERS",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 489
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 145,
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
                    "width": 145,
                    "height": 43,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6dl8fbpXWgX"
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
                            "assetId": 172,
                            "id": "01",
                            "url": "",
                            "type": "normal",
                            "width": 10,
                            "height": 398,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 541,
                    "yPos": 140,
                    "tabIndex": 10,
                    "tabEnabled": true,
                    "xOffset": -5,
                    "yOffset": -5,
                    "rotateXPos": 0,
                    "rotateYPos": 193.5,
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
                            "right": 10,
                            "bottom": 398,
                            "altText": "Google Shape;676;p40",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 77
                            }
                        },
                        "html5data": {
                            "url": "txt__default_6GoOJjhzVJL.png",
                            "xPos": -5,
                            "yPos": -5,
                            "width": 10,
                            "height": 398,
                            "strokewidth": 1,
                            "mask": "17O3X4O5X2O7X1O7X2O6X2O5X5O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X5O5X3O5X2O7X1O7X2O5X4O3X16O"
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
                    "height": 387,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6GoOJjhzVJL"
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
                            "assetId": 173,
                            "id": "01",
                            "url": "",
                            "type": "normal",
                            "width": 10,
                            "height": 398,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 744,
                    "yPos": 140,
                    "tabIndex": 11,
                    "tabEnabled": true,
                    "xOffset": -5,
                    "yOffset": -5,
                    "rotateXPos": 0,
                    "rotateYPos": 193.5,
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
                            "right": 10,
                            "bottom": 398,
                            "altText": "Google Shape;676;p40",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 77
                            }
                        },
                        "html5data": {
                            "url": "txt__default_5hMFahoJAhU.png",
                            "xPos": -5,
                            "yPos": -5,
                            "width": 10,
                            "height": 398,
                            "strokewidth": 1,
                            "mask": "17O3X4O5X2O7X1O7X2O6X2O5X5O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X5O5X3O5X2O7X1O7X2O5X4O3X16O"
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
                    "height": 387,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5hMFahoJAhU"
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
                            "uniqueId": "5obQxmiINQb_1693303848",
                            "id": "01",
                            "linkId": "txt__default_5obQxmiINQb",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 141,
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
                                                "text": "UNDERSTAND THE \\n",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBold57192C00\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 10.8,
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
                                "right": 139,
                                "bottom": 40,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 492
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 13,
                    "yPos": 217,
                    "tabIndex": 22,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 73.5,
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
                            "right": 147,
                            "bottom": 43,
                            "altText": "UNDERSTAND THE \\nSHOPPER MISSION",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 491
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 147,
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
                    "width": 147,
                    "height": 43,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5obQxmiINQb"
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
                            "assetId": 174,
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
                    "xPos": 9,
                    "yPos": 270,
                    "tabIndex": 24,
                    "tabEnabled": true,
                    "xOffset": -5,
                    "yOffset": -5,
                    "rotateXPos": 462,
                    "rotateYPos": 0,
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
                            "url": "txt__default_6b8xiWwbjf9.png",
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
                    "id": "6b8xiWwbjf9"
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
                            "uniqueId": "5qzIXhl73An_-2136355416",
                            "id": "01",
                            "linkId": "txt__default_5qzIXhl73An",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 133,
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
                                                "text": "Stocking up favorites for the week",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 34,
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
                                "bottom": 48,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 494
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 189,
                    "yPos": 213,
                    "tabIndex": 19,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 69.5,
                    "rotateYPos": 25.5,
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
                            "right": 139,
                            "bottom": 51,
                            "altText": "Stocking up favorites for the week",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 493
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 139,
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
                    "width": 139,
                    "height": 51,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5qzIXhl73An"
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
                            "uniqueId": "6MdgZ9UdjAL_-991328222",
                            "id": "01",
                            "linkId": "txt__default_6MdgZ9UdjAL",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 141,
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
                                                "text": "ALIGN WITH  THE \\n",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBold57192C00\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 10.8,
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
                                "right": 139,
                                "bottom": 41,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 495
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 12,
                    "yPos": 284,
                    "tabIndex": 27,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 73.5,
                    "rotateYPos": 21.5,
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
                            "right": 147,
                            "bottom": 43,
                            "altText": "ALIGN WITH  THE \\nSTRATEGIC INTENT",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 491
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 147,
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
                    "width": 147,
                    "height": 43,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6MdgZ9UdjAL"
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
                            "uniqueId": "5dcJUo67siw_504281174",
                            "id": "01",
                            "linkId": "txt__default_5dcJUo67siw",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 133,
                            "height": 30,
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
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 73,
                                "bottom": 33,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 497
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 189,
                    "yPos": 288,
                    "tabIndex": 28,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 69.5,
                    "rotateYPos": 18,
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
                            "right": 139,
                            "bottom": 36,
                            "altText": "New News\\nDrive trial",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 496
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 139,
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
                    "width": 139,
                    "height": 36,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5dcJUo67siw"
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
                            "assetId": 175,
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
                    "xPos": 9,
                    "yPos": 339,
                    "tabIndex": 30,
                    "tabEnabled": true,
                    "xOffset": -5,
                    "yOffset": -5,
                    "rotateXPos": 462,
                    "rotateYPos": 0,
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
                            "url": "txt__default_5Uni6EI2KSR.png",
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
                    "id": "5Uni6EI2KSR"
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
                            "uniqueId": "6Q3PBWyhfnn_894871410",
                            "id": "01",
                            "linkId": "txt__default_6Q3PBWyhfnn",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 141,
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
                                                "text": "EXECUTION PRIORITIES\\n",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBold57192C00\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 10.8,
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
                                "right": 120,
                                "bottom": 60,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 498
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 10,
                    "yPos": 354,
                    "tabIndex": 34,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 73.5,
                    "rotateYPos": 31,
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
                            "right": 147,
                            "bottom": 62,
                            "altText": "EXECUTION PRIORITIES\\nBE RELEVANT",
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
                    "id": "6Q3PBWyhfnn"
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
                            "uniqueId": "6Ty0OjpqLdu_-551647943",
                            "id": "01",
                            "linkId": "txt__default_6Ty0OjpqLdu",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 147,
                            "height": 59,
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
                                                "text": "Mineral water Aisle\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 20,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Strategic adjacencies:\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 23,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Healthy snacks\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 15,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Produce",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 144,
                                "bottom": 62,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 500
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 181,
                    "yPos": 353,
                    "tabIndex": 31,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 76.5,
                    "rotateYPos": 32.5,
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
                            "right": 153,
                            "bottom": 65,
                            "altText": "Mineral water Aisle\\nStrategic adjacencies:\\nHealthy snacks\\nProduce",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 499
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 153,
                            "height": 65,
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
                    "width": 153,
                    "height": 65,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6Ty0OjpqLdu"
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
                            "assetId": 176,
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
                    "xPos": 10,
                    "yPos": 427,
                    "tabIndex": 36,
                    "tabEnabled": true,
                    "xOffset": -5,
                    "yOffset": -5,
                    "rotateXPos": 462,
                    "rotateYPos": 0,
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
                            "url": "txt__default_6iuXZnu5cNM.png",
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
                    "id": "6iuXZnu5cNM"
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
                            "uniqueId": "5tH785cHEIA_1669697826",
                            "id": "01",
                            "linkId": "txt__default_5tH785cHEIA",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 141,
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
                                                "text": "BUILD CREDENTIALS\\n",
                                                "style": {
                                                    "fontFamily": "\"Faustina Bold RomanBold57192C00\",\"Faustina Bold Roman\",\"Faustina\"",
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
                                            "lineSpacingRule": "atLeast",
                                            "lineSpacing": 10.8,
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "BE AUTHENTIC",
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
                                "right": 144,
                                "bottom": 41,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 501
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 17,
                    "yPos": 448,
                    "tabIndex": 39,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 73.5,
                    "rotateYPos": 21.5,
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
                            "right": 147,
                            "bottom": 43,
                            "altText": "BUILD CREDENTIALS\\nBE AUTHENTIC",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 491
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 147,
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
                    "width": 147,
                    "height": 43,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5tH785cHEIA"
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
                            "uniqueId": "5n0hDaV5lry_-1325128389",
                            "id": "01",
                            "linkId": "txt__default_5n0hDaV5lry",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 133,
                            "height": 59,
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
                                                "text": "Partner with:\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 14,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Topo’s friends\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 15,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Special activations\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 20,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Pulses",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 133,
                                "bottom": 61,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 503
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 185,
                    "yPos": 438,
                    "tabIndex": 38,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 69.5,
                    "rotateYPos": 32.5,
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
                            "right": 139,
                            "bottom": 65,
                            "altText": "Partner with:\\nTopo’s friends\\nSpecial activations\\nPulses",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 502
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 139,
                            "height": 65,
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
                    "width": 139,
                    "height": 65,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5n0hDaV5lry"
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
                            "uniqueId": "6kzuq4g7YDH_870929376",
                            "id": "01",
                            "linkId": "txt__default_6kzuq4g7YDH",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 165,
                            "height": 44,
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
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 154,
                                "bottom": 47,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 505
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 557,
                    "yPos": 214,
                    "tabIndex": 21,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 85.5,
                    "rotateYPos": 25,
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
                            "right": 171,
                            "bottom": 50,
                            "altText": "Socializing with friends around meals\\nReplenishment break",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 504
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
                    "id": "6kzuq4g7YDH"
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
                            "uniqueId": "6gQMLZJrMyN_-331369393",
                            "id": "01",
                            "linkId": "txt__default_6gQMLZJrMyN",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 151,
                            "height": 44,
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
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 145,
                                "bottom": 48,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 507
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 366,
                    "yPos": 281,
                    "tabIndex": 25,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 78.5,
                    "rotateYPos": 25,
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
                            "right": 157,
                            "bottom": 50,
                            "altText": "Elevate ‘The meal Experience’\\nDiscover New favorite",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 506
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 157,
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
                    "width": 157,
                    "height": 50,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6gQMLZJrMyN"
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
                            "uniqueId": "6qYcn1Iz1dC_-619508519",
                            "id": "01",
                            "linkId": "txt__default_6qYcn1Iz1dC",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 142,
                            "height": 59,
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
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "text": "Table\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Menu\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 55,
                                "bottom": 62,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 509
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 370,
                    "yPos": 353,
                    "tabIndex": 32,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 74,
                    "rotateYPos": 32.5,
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
                            "right": 148,
                            "bottom": 65,
                            "altText": "Counter\\nTable\\nMenu\\nCooler",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 508
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 148,
                            "height": 65,
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
                    "width": 148,
                    "height": 65,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6qYcn1Iz1dC"
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
                            "uniqueId": "5uE6Nj14ADX_-1053889742",
                            "id": "01",
                            "linkId": "txt__default_5uE6Nj14ADX",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 106,
                            "height": 44,
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
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 55,
                                "bottom": 49,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 511
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 561,
                    "yPos": 360,
                    "tabIndex": 35,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 56,
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
                            "left": 0,
                            "top": 0,
                            "right": 112,
                            "bottom": 50,
                            "altText": "Counter\\nMenu\\nCooler",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 510
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 112,
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
                    "width": 112,
                    "height": 50,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5uE6Nj14ADX"
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
                            "uniqueId": "6Ddf5gZHxmE_-1917830030",
                            "id": "01",
                            "linkId": "txt__default_6Ddf5gZHxmE",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 108,
                            "height": 30,
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
                                                "text": "Combos\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Experiential",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 89,
                                "bottom": 33,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 513
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 357,
                    "yPos": 452,
                    "tabIndex": 40,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 57,
                    "rotateYPos": 18,
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
                            "right": 114,
                            "bottom": 36,
                            "altText": "Combos\\nExperiential",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 512
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 114,
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
                    "width": 114,
                    "height": 36,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6Ddf5gZHxmE"
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
                            "uniqueId": "5ixTlChHCPX_1970130477",
                            "id": "01",
                            "linkId": "txt__default_5ixTlChHCPX",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 108,
                            "height": 30,
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
                                                "text": "Combos\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Experiential",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 89,
                                "bottom": 33,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 513
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 561,
                    "yPos": 452,
                    "tabIndex": 41,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 57,
                    "rotateYPos": 18,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "depth": 33,
                    "scrolling": true,
                    "shuffleLock": false,
                    "data": {
                        "hotlinkId": "",
                        "accState": 0,
                        "vectorData": {
                            "left": 0,
                            "top": 0,
                            "right": 114,
                            "bottom": 36,
                            "altText": "Combos\\nExperiential",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 512
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 114,
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
                    "width": 114,
                    "height": 36,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5ixTlChHCPX"
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
                            "uniqueId": "67lVhPjaFCq_364953320",
                            "id": "01",
                            "linkId": "txt__default_67lVhPjaFCq",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 115,
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
                                                "text": "Stocking up favorites for the week",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 34,
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
                                "bottom": 48,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 494
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 760,
                    "yPos": 213,
                    "tabIndex": 20,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 60.5,
                    "rotateYPos": 25.5,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "depth": 34,
                    "scrolling": true,
                    "shuffleLock": false,
                    "data": {
                        "hotlinkId": "",
                        "accState": 0,
                        "vectorData": {
                            "left": 0,
                            "top": 0,
                            "right": 121,
                            "bottom": 51,
                            "altText": "Stocking up favorites for the week",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 514
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 121,
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
                    "width": 121,
                    "height": 51,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "67lVhPjaFCq"
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
                            "uniqueId": "6n0RyZ93A6p_181462488",
                            "id": "01",
                            "linkId": "txt__default_6n0RyZ93A6p",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 172,
                            "height": 59,
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
                                                "text": "Pre-Shop\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "text": "Home\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "text": "Mineral water Category\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 23,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Cross-Category",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 14,
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
                                "bottom": 62,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 516
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 761,
                    "yPos": 353,
                    "tabIndex": 33,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 89,
                    "rotateYPos": 32.5,
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
                            "right": 178,
                            "bottom": 65,
                            "altText": "Pre-Shop\\nHome\\nMineral water Category\\nCross-Category",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 515
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 178,
                            "height": 65,
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
                    "width": 178,
                    "height": 65,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6n0RyZ93A6p"
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
                            "uniqueId": "64WgiBdvwxl_457659997",
                            "id": "01",
                            "linkId": "txt__default_64WgiBdvwxl",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 176,
                            "height": 74,
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
                                                "text": "Social content\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 15,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Collaborations\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 15,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Topo’s friends\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 15,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Special activations\\n",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                "len": 20,
                                                "flowDirection": "leftToRight",
                                                "cursive": false
                                            }
                                        ]
                                    },
                                    {
                                        "spans": [
                                            {
                                                "text": "Pulses",
                                                "style": {
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 133,
                                "bottom": 77,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 518
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 755,
                    "yPos": 430,
                    "tabIndex": 37,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 91,
                    "rotateYPos": 40,
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
                            "left": 0,
                            "top": 0,
                            "right": 182,
                            "bottom": 80,
                            "altText": "Social content\\nCollaborations\\nTopo’s friends\\nSpecial activations\\nPulses",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 517
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 182,
                            "height": 80,
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
                    "height": 80,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "64WgiBdvwxl"
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
                            "uniqueId": "6afAQlCTWf2_-1810131639",
                            "id": "01",
                            "linkId": "txt__default_6afAQlCTWf2",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 146,
                            "height": 44,
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
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 145,
                                "bottom": 48,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 520
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 558,
                    "yPos": 281,
                    "tabIndex": 26,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 76,
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
                            "left": 0,
                            "top": 0,
                            "right": 152,
                            "bottom": 50,
                            "altText": "Elevate ‘The meal Break’\\nDiscover New favorite",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 519
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 152,
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
                    "width": 152,
                    "height": 50,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6afAQlCTWf2"
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
                            "uniqueId": "6Ot5SOTS8vx_-1187551508",
                            "id": "01",
                            "linkId": "txt__default_6Ot5SOTS8vx",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 108,
                            "height": 30,
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
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                                    "fontFamily": "\"Proxima Nova Rg Charset1079827F\",\"Proxima Nova Rg\",\"Proxima Nova\"",
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 73,
                                "bottom": 33,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 497
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 757,
                    "yPos": 288,
                    "tabIndex": 29,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 57,
                    "rotateYPos": 18,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "depth": 38,
                    "scrolling": true,
                    "shuffleLock": false,
                    "data": {
                        "hotlinkId": "",
                        "accState": 0,
                        "vectorData": {
                            "left": 0,
                            "top": 0,
                            "right": 114,
                            "bottom": 36,
                            "altText": "New News\\nDrive trial",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 512
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 114,
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
                    "width": 114,
                    "height": 36,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6Ot5SOTS8vx"
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
                            "uniqueId": "6oz5pvYeL5R_-32775727",
                            "id": "01",
                            "linkId": "txt__default_6oz5pvYeL5R",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 145,
                            "height": 30,
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
                                                    "fontSize": 11,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 11.587,
                                                    "descent": 3.08,
                                                    "leading": 0,
                                                    "underlinePosition": -1.804,
                                                    "underlineThickness": 0.293,
                                                    "xHeight": 7.084
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
                                "right": 139,
                                "bottom": 34,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 522
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 362,
                    "yPos": 220,
                    "tabIndex": 23,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 75.5,
                    "rotateYPos": 18,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "depth": 39,
                    "scrolling": true,
                    "shuffleLock": false,
                    "data": {
                        "hotlinkId": "",
                        "accState": 0,
                        "vectorData": {
                            "left": 0,
                            "top": 0,
                            "right": 151,
                            "bottom": 36,
                            "altText": "Socializing with friends around meals",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 521
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 151,
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
                    "width": 151,
                    "height": 36,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6oz5pvYeL5R"
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
                            "assetId": 177,
                            "id": "01",
                            "url": "story_content/66kUzbuOjea.png",
                            "type": "normal",
                            "altText": "Picture 5.png",
                            "width": 74,
                            "height": 64,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 617,
                    "yPos": 139,
                    "tabIndex": 8,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 18.5,
                    "rotateYPos": 16,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "depth": 40,
                    "scrolling": true,
                    "shuffleLock": false,
                    "data": {
                        "hotlinkId": "",
                        "accState": 0,
                        "vectorData": {
                            "left": 0,
                            "top": 0,
                            "right": 37,
                            "bottom": 32,
                            "altText": "Picture 5.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 523
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 37,
                            "height": 32,
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
                    "width": 37,
                    "height": 32,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6UKpVUEjfRt"
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
                            "assetId": 178,
                            "id": "01",
                            "url": "",
                            "type": "normal",
                            "width": 10,
                            "height": 398,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 350,
                    "yPos": 139,
                    "tabIndex": 7,
                    "tabEnabled": true,
                    "xOffset": -5,
                    "yOffset": -5,
                    "rotateXPos": 0,
                    "rotateYPos": 193.5,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "depth": 41,
                    "scrolling": true,
                    "shuffleLock": false,
                    "data": {
                        "hotlinkId": "",
                        "accState": 0,
                        "vectorData": {
                            "left": 0,
                            "top": 0,
                            "right": 10,
                            "bottom": 398,
                            "altText": "Google Shape;676;p40",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 77
                            }
                        },
                        "html5data": {
                            "url": "txt__default_60kGUMLHwiP.png",
                            "xPos": -5,
                            "yPos": -5,
                            "width": 10,
                            "height": 398,
                            "strokewidth": 1,
                            "mask": "17O3X4O5X2O7X1O7X2O6X2O5X5O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X7O1X5O5X3O5X2O7X1O7X2O5X4O3X16O"
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
                    "height": 387,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "60kGUMLHwiP"
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
                    "depth": 42,
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
                    "id": "5WIfAtlXCBM"
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