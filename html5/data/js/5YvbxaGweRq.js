window.globalProvideData('slide', {
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
    "slideNumberInScene": 27,
    "includeInSlideCounts": true,
    "presenterRef": {
        "id": "none"
    },
    "showAnimationId": "",
    "lmsId": "Slide27",
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
    "id": "5YvbxaGweRq",
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
                        "value": "_player.62Io9d9R7HS.5dg7u4SvH5a"
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
        "NavigationRestrictionNextSlide_5YvbxaGweRq": {
            "kind": "actiongroup",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "ActGrpOnNextButtonClick"
                }
            ]
        },
        "NavigationRestrictionPreviousSlide_5YvbxaGweRq": {
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
                    "id": "NavigationRestrictionNextSlide_5YvbxaGweRq"
                }
            ]
        },
        {
            "kind": "onprevslide",
            "actions": [
                {
                    "kind": "exe_actiongroup",
                    "id": "NavigationRestrictionPreviousSlide_5YvbxaGweRq"
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
                        "value": "_player.62Io9d9R7HS.5dg7u4SvH5a"
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
                    "assetId": 254,
                    "id": "6HkgbWlUNXj"
                }
            ],
            "enableSeek": true,
            "enableReplay": true,
            "timeline": {
                "duration": 47656,
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
                                    "value": "5ZP8JqzzSsu"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6lAHqw5L11M"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5ydtwCMo7FZ"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "61WETkLnO0D"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5bbI8n04ax2"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5bbI8n04ax2.64AniRIcsgN"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5bbI8n04ax2.5cftmesC6oZ"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5bbI8n04ax2.6NCKw91GeBo"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5bbI8n04ax2.64yahxEwtj6"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5bbI8n04ax2.5W25r3kQKpd"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5bbI8n04ax2.6bXmYAxLm33"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5bbI8n04ax2.5wwDBLGgEEh"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6K7q7ZKxgXy"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6PosbKB25sW"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6XatCfTSnSn"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6XatCfTSnSn.6HxpJjzZINt"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6XatCfTSnSn.5vue0h6XJVj"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6XatCfTSnSn.5tjkvATZLOl"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6XatCfTSnSn.6nldKT8pwHI"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6XatCfTSnSn.6UDGqi6omsn"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6XatCfTSnSn.5XyvbdUzJRH"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6jnH7zrpITu"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5WQnZP51VHt"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6dDGiScGnc4"
                                }
                            },
                            {
                                "kind": "media_seek",
                                "position": 0,
                                "objRef": {
                                    "type": "string",
                                    "value": "6HkgbWlUNXj"
                                }
                            },
                            {
                                "kind": "media_play",
                                "objRef": {
                                    "type": "string",
                                    "value": "6HkgbWlUNXj"
                                }
                            },
                            {
                                "kind": "set_volume",
                                "volume": 75,
                                "objRef": {
                                    "type": "string",
                                    "value": "6HkgbWlUNXj"
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
                        "time": 23000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6Mq6r4Q5ZCD"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5m6iWBurnIb"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6KUiV8m0Mj2"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6KUiV8m0Mj2.6rSQ02zLsZz"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6KUiV8m0Mj2.6GwruNtOxAq"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "6KUiV8m0Mj2.6gXf8OjJMTH"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6EKmCa9cvqo"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5pkjkS3k8Pb"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5kFgyrFY8jj"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 27500,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6CdnNOF62LC"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6Vby88k4I9q"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6IKkOgvGlQo"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6Kp13ALWhn6"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5vSfBahgTqn"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5vSfBahgTqn.63Rq0ZTdwrL"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5vSfBahgTqn.5rvecEeNd8m"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5vSfBahgTqn.5dGBOo2uLvG"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6h1IqkmmmgH"
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
                                    "value": "5e7ss4DP16e"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5yAxjqFGgmw"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5xru2rmRDVx"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "67hxa8lbYep"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "67hxa8lbYep.5ZtJcCGpuhV"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "67hxa8lbYep.6GKJitEPwQA"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "67hxa8lbYep.6p753fdfBpA"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5gvd9HrGlkf"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6bjkPE7szpH"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 39000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6oz7jdFrmIL"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6HBoWARFnlZ"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6jvlQc42dBM"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5e9UXAVzYAJ"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5e9UXAVzYAJ.5pclvmbc5CE"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5e9UXAVzYAJ.6PBCaPsRCdi"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5e9UXAVzYAJ.6G38dCwRTpC"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "64MUqTpRTV8"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "63cSSsVvSDK"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "ontimelinetick",
                        "time": 44000,
                        "actions": [
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5W4PVpSW1ER"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6hNR6WrICxg"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6o6iJZf6WaG"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "5f69DLTjH4x"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5f69DLTjH4x.5V4OjQ1n07y"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5f69DLTjH4x.6cG48ApLfCW"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "appear",
                                "objRef": {
                                    "type": "string",
                                    "value": "5f69DLTjH4x.6FTZdgevUr5"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "672ehrIio3y"
                                }
                            },
                            {
                                "kind": "show",
                                "transition": "custom",
                                "animationId": "Entrance",
                                "reverse": false,
                                "objRef": {
                                    "type": "string",
                                    "value": "6YfsAAHbCU0"
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
                    "tabIndex": 16,
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
                            "assetId": 226,
                            "id": "01",
                            "url": "story_content/6XEFpDF5EJg.png",
                            "type": "normal",
                            "altText": "Picture 1.png",
                            "width": 1334,
                            "height": 870,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 293,
                    "yPos": 105,
                    "tabIndex": 27,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 333.5,
                    "rotateYPos": 217.5,
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
                            "right": 667,
                            "bottom": 435,
                            "altText": "Picture 1.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 612
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 667,
                            "height": 435,
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
                    "width": 667,
                    "height": 435,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5ZP8JqzzSsu"
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
                    "rotateYPos": 30.5,
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
                            "bottom": 61,
                            "altText": "Google Shape;886;p17",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 613
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
                    "id": "6lAHqw5L11M"
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
                            "uniqueId": "5ydtwCMo7FZ_463492846",
                            "id": "01",
                            "linkId": "txt__default_5ydtwCMo7FZ",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 142,
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
                                                "text": "LARGE STORE",
                                                "style": {
                                                    "fontFamily": Serif,
                                                    "fontSize": 9,
                                                    "fontIsBold": false,
                                                    "fontIsItalic": false,
                                                    "fontIsUnderline": false,
                                                    "fontIsStrikeout": false,
                                                    "elevation": "normal",
                                                    "displayCase": "asIs",
                                                    "foregroundColor": "#000000",
                                                    "linkColor": "#000000",
                                                    "ascent": 12.516,
                                                    "descent": 2.604,
                                                    "leading": 0,
                                                    "underlinePosition": -1.2,
                                                    "underlineThickness": 0.6,
                                                    "xHeight": 5.928
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
                                "right": 112,
                                "bottom": 19,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 615
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 806,
                    "yPos": 11,
                    "tabIndex": 17,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 74,
                    "rotateYPos": 11,
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
                            "right": 148,
                            "bottom": 22,
                            "altText": "LARGE STORE",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 614
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 148,
                            "height": 22,
                            "strokewidth": 0
                        }
                    },
                    "width": 148,
                    "height": 22,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5ydtwCMo7FZ"
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
                    "tabIndex": 15,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 0,
                    "rotateYPos": 18.5,
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
                    "id": "61WETkLnO0D"
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
                                    "assetId": 227,
                                    "id": "01",
                                    "url": "story_content/6F98ApeWXvt.png",
                                    "type": "normal",
                                    "altText": "Picture 3.png",
                                    "width": 31,
                                    "height": 40,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 2,
                            "yPos": 20,
                            "tabIndex": 6,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 8,
                            "rotateYPos": 10,
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
                                    "right": 16,
                                    "bottom": 20,
                                    "altText": "Picture 3.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 617
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 16,
                                    "height": 20,
                                    "strokewidth": 0
                                }
                            },
                            "width": 16,
                            "height": 20,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "64AniRIcsgN"
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
                                    "assetId": 228,
                                    "id": "01",
                                    "url": "story_content/5hLYX6k0B8T.png",
                                    "type": "normal",
                                    "altText": "Picture 5.png",
                                    "width": 32,
                                    "height": 40,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 20,
                            "yPos": 20,
                            "tabIndex": 8,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 8,
                            "rotateYPos": 10,
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
                                    "right": 16,
                                    "bottom": 20,
                                    "altText": "Picture 5.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 618
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 16,
                                    "height": 20,
                                    "strokewidth": 0
                                }
                            },
                            "width": 16,
                            "height": 20,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5cftmesC6oZ"
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
                                    "assetId": 229,
                                    "id": "01",
                                    "url": "story_content/6rEgEUcCQ1x.png",
                                    "type": "normal",
                                    "altText": "Picture 7.png",
                                    "width": 16,
                                    "height": 28,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 37,
                            "yPos": 21,
                            "tabIndex": 10,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 3.5,
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
                                    "right": 7,
                                    "bottom": 14,
                                    "altText": "Picture 7.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 619
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 7,
                                    "height": 14,
                                    "strokewidth": 0
                                }
                            },
                            "width": 7,
                            "height": 14,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6NCKw91GeBo"
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
                                    "assetId": 230,
                                    "id": "01",
                                    "url": "story_content/5w2RxLbfwwh.png",
                                    "type": "normal",
                                    "altText": "Picture 8.png",
                                    "width": 15,
                                    "height": 28,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 47,
                            "yPos": 21,
                            "tabIndex": 11,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 3.5,
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
                                    "right": 7,
                                    "bottom": 14,
                                    "altText": "Picture 8.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 620
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 7,
                                    "height": 14,
                                    "strokewidth": 0
                                }
                            },
                            "width": 7,
                            "height": 14,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "64yahxEwtj6"
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
                                    "assetId": 230,
                                    "id": "01",
                                    "url": "story_content/5w2RxLbfwwh.png",
                                    "type": "normal",
                                    "altText": "Picture 8.png",
                                    "width": 15,
                                    "height": 28,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 56,
                            "yPos": 21,
                            "tabIndex": 12,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 3.5,
                            "rotateYPos": 7,
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
                                    "right": 7,
                                    "bottom": 14,
                                    "altText": "Picture 8.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 620
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 7,
                                    "height": 14,
                                    "strokewidth": 0
                                }
                            },
                            "width": 7,
                            "height": 14,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5W25r3kQKpd"
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
                                    "assetId": 231,
                                    "id": "01",
                                    "url": "story_content/5p8kB0OOvgd.png",
                                    "type": "normal",
                                    "altText": "Picture 10.png",
                                    "width": 132,
                                    "height": 75,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 4,
                            "tabIndex": 5,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 33,
                            "rotateYPos": 18.5,
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
                                    "right": 66,
                                    "bottom": 37,
                                    "altText": "Picture 10.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 621
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 66,
                                    "height": 37,
                                    "strokewidth": 0
                                }
                            },
                            "width": 66,
                            "height": 37,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6bXmYAxLm33"
                        },
                        {
                            "kind": "vectorshape",
                            "rotation": 90,
                            "accType": "image",
                            "cliptobounds": false,
                            "defaultAction": "",
                            "imagelib": [
                                {
                                    "kind": "imagedata",
                                    "assetId": 232,
                                    "id": "01",
                                    "url": "story_content/5ZXzQEolneu.png",
                                    "type": "normal",
                                    "altText": "Picture 11.png",
                                    "width": 20,
                                    "height": 38,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 21,
                            "yPos": 0,
                            "tabIndex": 4,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 4.5,
                            "rotateYPos": 9.5,
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
                                    "right": 9,
                                    "bottom": 19,
                                    "altText": "Picture 11.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 622
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 9,
                                    "height": 19,
                                    "strokewidth": 0
                                }
                            },
                            "width": 9,
                            "height": 19,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5wwDBLGgEEh"
                        }
                    ],
                    "accType": "text",
                    "altText": "Graphic 9",
                    "shapemaskId": "",
                    "xPos": 755,
                    "yPos": -1,
                    "tabIndex": 3,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 33,
                    "rotateYPos": 20,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 7,
                    "scrolling": true,
                    "shuffleLock": false,
                    "width": 66,
                    "height": 40,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5bbI8n04ax2"
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
                            "uniqueId": "6K7q7ZKxgXy_-207258417",
                            "id": "01",
                            "linkId": "txt__default_6K7q7ZKxgXy",
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
                                                    "fontFamily": Serif,
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
                    "xPos": 136,
                    "yPos": 2,
                    "tabIndex": 14,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 254.5,
                    "rotateYPos": 27.5,
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
                    "id": "6K7q7ZKxgXy"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 19,
                    "yPos": 402,
                    "tabIndex": 70,
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
                    "id": "5W4PVpSW1ER"
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
                            "uniqueId": "6hNR6WrICxg_1509799638",
                            "id": "01",
                            "linkId": "txt__default_6hNR6WrICxg",
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
                                                "text": "PRODUCE",
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
                                "right": 109,
                                "bottom": 22,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 627
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 34,
                    "yPos": 409,
                    "tabIndex": 73,
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
                            "altText": "PRODUCE",
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
                    "id": "6hNR6WrICxg"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 19,
                    "yPos": 320,
                    "tabIndex": 51,
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
                    "id": "5e7ss4DP16e"
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
                            "uniqueId": "5yAxjqFGgmw_1883408173",
                            "id": "01",
                            "linkId": "txt__default_5yAxjqFGgmw",
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
                                                "text": "CHECKOUT – FRONT END COOLER",
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
                                                "len": 27,
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
                                "right": 143,
                                "bottom": 40,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 629
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 34,
                    "yPos": 316,
                    "tabIndex": 46,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 73.5,
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
                            "right": 147,
                            "bottom": 43,
                            "altText": "CHECKOUT – FRONT END COOLER",
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
                    "id": "5yAxjqFGgmw"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 19,
                    "yPos": 360,
                    "tabIndex": 63,
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
                                "i": 630
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
                    "id": "6oz7jdFrmIL"
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
                            "uniqueId": "6HBoWARFnlZ_-1247915160",
                            "id": "01",
                            "linkId": "txt__default_6HBoWARFnlZ",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 167,
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
                                                "text": "DELI AND/OR CHECKOUT",
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
                                "right": 134,
                                "bottom": 40,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 632
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 23,
                    "yPos": 355,
                    "tabIndex": 57,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 86.5,
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
                            "right": 173,
                            "bottom": 43,
                            "altText": "DELI AND/OR CHECKOUT",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 631
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 173,
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
                    "width": 173,
                    "height": 43,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6HBoWARFnlZ"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 19,
                    "yPos": 278,
                    "tabIndex": 42,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 91,
                    "rotateYPos": 17.5,
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
                    "id": "6CdnNOF62LC"
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
                            "uniqueId": "6Vby88k4I9q_-1570809793",
                            "id": "01",
                            "linkId": "txt__default_6Vby88k4I9q",
                            "type": "acctext",
                            "xPos": 3,
                            "yPos": 3,
                            "xAccOffset": 3,
                            "yAccOffset": 3,
                            "width": 176,
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
                                "right": 170,
                                "bottom": 40,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 635
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 19,
                    "yPos": 273,
                    "tabIndex": 37,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 91,
                    "rotateYPos": 21.5,
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
                            "bottom": 43,
                            "altText": "ENTRYWAY – LOBBY, \\nPERIMETER or END CAP",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 634
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 182,
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
                    "width": 182,
                    "height": 43,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6Vby88k4I9q"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 19,
                    "yPos": 236,
                    "tabIndex": 34,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 91,
                    "rotateYPos": 17.5,
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
                    "id": "6Mq6r4Q5ZCD"
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
                            "assetId": 233,
                            "id": "01",
                            "url": "story_content/6W2uBfPNn3A.png",
                            "type": "normal",
                            "altText": "Picture 12.png",
                            "width": 309,
                            "height": 348,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 808,
                    "yPos": 322,
                    "tabIndex": 52,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 77,
                    "rotateYPos": 87,
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
                            "right": 154,
                            "bottom": 174,
                            "altText": "Picture 12.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 637
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 154,
                            "height": 174,
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
                                                    "dy": "223"
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
                    "height": 174,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5m6iWBurnIb"
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
                            "assetId": 234,
                            "id": "01",
                            "url": "story_content/5iJK5DcEbFR.png",
                            "type": "normal",
                            "altText": "Picture 13.png",
                            "width": 222,
                            "height": 290,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 761,
                    "yPos": 315,
                    "tabIndex": 45,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 55.5,
                    "rotateYPos": 72.5,
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
                            "right": 111,
                            "bottom": 145,
                            "altText": "Picture 13.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 638
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 111,
                            "height": 145,
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
                                                    "dy": "230"
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
                    "width": 111,
                    "height": 145,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6o6iJZf6WaG"
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
                            "assetId": 235,
                            "id": "01",
                            "url": "story_content/5k4ngeeUIWe.png",
                            "type": "normal",
                            "altText": "Picture 14.png",
                            "width": 922,
                            "height": 356,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 369,
                    "yPos": 341,
                    "tabIndex": 56,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 230.5,
                    "rotateYPos": 89,
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
                            "right": 461,
                            "bottom": 178,
                            "altText": "Picture 14.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 639
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 461,
                            "height": 178,
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
                                                    "dy": "204"
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
                    "width": 461,
                    "height": 178,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5xru2rmRDVx"
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
                            "assetId": 236,
                            "id": "01",
                            "url": "story_content/64eJTGnvEZb.png",
                            "type": "normal",
                            "altText": "Picture 15.png",
                            "width": 218,
                            "height": 187,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 694,
                    "yPos": 358,
                    "tabIndex": 62,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 54.5,
                    "rotateYPos": 47,
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
                            "right": 109,
                            "bottom": 94,
                            "altText": "Picture 15.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 640
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 109,
                            "height": 94,
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
                                                    "dy": "187"
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
                    "width": 109,
                    "height": 94,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6jvlQc42dBM"
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
                            "assetId": 237,
                            "id": "01",
                            "url": "story_content/6IKtjBXRzx2.png",
                            "type": "normal",
                            "altText": "Picture 16.png",
                            "width": 960,
                            "height": 413,
                            "mobiledx": 0,
                            "mobiledy": 0
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": 291,
                    "yPos": 336,
                    "tabIndex": 55,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 240,
                    "rotateYPos": 103.5,
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
                            "right": 480,
                            "bottom": 207,
                            "altText": "Picture 16.png",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 641
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 480,
                            "height": 207,
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
                                                    "dy": "209"
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
                    "width": 480,
                    "height": 207,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6IKkOgvGlQo"
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
                                    "assetId": 238,
                                    "id": "01",
                                    "url": "story_content/6YuVHBiocpq.png",
                                    "type": "normal",
                                    "altText": "Picture 17.png",
                                    "width": 47,
                                    "height": 86,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 2,
                            "tabIndex": 61,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 11.5,
                            "rotateYPos": 21.5,
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
                                    "bottom": 43,
                                    "altText": "Picture 17.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 642
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 23,
                                    "height": 43,
                                    "strokewidth": 0
                                }
                            },
                            "width": 23,
                            "height": 43,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5pclvmbc5CE"
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
                                    "assetId": 239,
                                    "id": "01",
                                    "url": "story_content/6LDTRKUp0XH.png",
                                    "type": "normal",
                                    "altText": "Picture 18.png",
                                    "width": 47,
                                    "height": 86,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 37,
                            "yPos": 0,
                            "tabIndex": 59,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 11.5,
                            "rotateYPos": 21.5,
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
                                    "bottom": 43,
                                    "altText": "Picture 18.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 642
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 23,
                                    "height": 43,
                                    "strokewidth": 0
                                }
                            },
                            "width": 23,
                            "height": 43,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6PBCaPsRCdi"
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
                                    "assetId": 240,
                                    "id": "01",
                                    "url": "story_content/6DUlaarLNVA.png",
                                    "type": "normal",
                                    "altText": "Picture 19.png",
                                    "width": 47,
                                    "height": 86,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 18,
                            "yPos": 1,
                            "tabIndex": 60,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 11.5,
                            "rotateYPos": 21.5,
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
                                    "bottom": 43,
                                    "altText": "Picture 19.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 642
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 23,
                                    "height": 43,
                                    "strokewidth": 0
                                }
                            },
                            "width": 23,
                            "height": 43,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6G38dCwRTpC"
                        }
                    ],
                    "accType": "text",
                    "altText": "Group 11",
                    "shapemaskId": "",
                    "xPos": 207,
                    "yPos": 357,
                    "tabIndex": 58,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 30,
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
                    "width": 60,
                    "height": 44,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5e9UXAVzYAJ"
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
                                    "assetId": 241,
                                    "id": "01",
                                    "url": "story_content/5ppiil3iO9q.png",
                                    "type": "normal",
                                    "altText": "Picture 23.png",
                                    "width": 67,
                                    "height": 76,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 0,
                            "tabIndex": 67,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 17,
                            "rotateYPos": 19,
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
                                    "bottom": 38,
                                    "altText": "Picture 23.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 643
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 34,
                                    "height": 38,
                                    "strokewidth": 0
                                }
                            },
                            "width": 34,
                            "height": 38,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5V4OjQ1n07y"
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
                                    "assetId": 242,
                                    "id": "01",
                                    "url": "story_content/6WtX6IlzMB3.png",
                                    "type": "normal",
                                    "altText": "Picture 24.png",
                                    "width": 74,
                                    "height": 76,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 29,
                            "yPos": 1,
                            "tabIndex": 68,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 18.5,
                            "rotateYPos": 19,
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
                                    "right": 37,
                                    "bottom": 38,
                                    "altText": "Picture 24.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 644
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 37,
                                    "height": 38,
                                    "strokewidth": 0
                                }
                            },
                            "width": 37,
                            "height": 38,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6cG48ApLfCW"
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
                                    "assetId": 243,
                                    "id": "01",
                                    "url": "story_content/6qnM6u5cjZv.png",
                                    "type": "normal",
                                    "altText": "Picture 25.png",
                                    "width": 73,
                                    "height": 76,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 57,
                            "yPos": 2,
                            "tabIndex": 69,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 18.5,
                            "rotateYPos": 19,
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
                                    "right": 37,
                                    "bottom": 38,
                                    "altText": "Picture 25.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 645
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 37,
                                    "height": 38,
                                    "strokewidth": 0
                                }
                            },
                            "width": 37,
                            "height": 38,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6FTZdgevUr5"
                        }
                    ],
                    "accType": "text",
                    "altText": "Group 37",
                    "shapemaskId": "",
                    "xPos": 210,
                    "yPos": 398,
                    "tabIndex": 66,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 47,
                    "rotateYPos": 20,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 24,
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
                    "width": 94,
                    "height": 40,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5f69DLTjH4x"
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
                                    "assetId": 244,
                                    "id": "01",
                                    "url": "story_content/64YerVBpQtc.png",
                                    "type": "normal",
                                    "altText": "Picture 26.png",
                                    "width": 47,
                                    "height": 84,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 2,
                            "tabIndex": 50,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 11.5,
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
                                    "right": 23,
                                    "bottom": 42,
                                    "altText": "Picture 26.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 646
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 23,
                                    "height": 42,
                                    "strokewidth": 0
                                }
                            },
                            "width": 23,
                            "height": 42,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5ZtJcCGpuhV"
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
                                    "assetId": 245,
                                    "id": "01",
                                    "url": "story_content/63EuBQPxeRo.png",
                                    "type": "normal",
                                    "altText": "Picture 27.png",
                                    "width": 47,
                                    "height": 84,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 37,
                            "yPos": 0,
                            "tabIndex": 48,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 11.5,
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
                                    "right": 23,
                                    "bottom": 42,
                                    "altText": "Picture 27.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 646
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 23,
                                    "height": 42,
                                    "strokewidth": 0
                                }
                            },
                            "width": 23,
                            "height": 42,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6GKJitEPwQA"
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
                                    "assetId": 246,
                                    "id": "01",
                                    "url": "story_content/5jMjvcusuIn.png",
                                    "type": "normal",
                                    "altText": "Picture 28.png",
                                    "width": 47,
                                    "height": 84,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 19,
                            "yPos": 1,
                            "tabIndex": 49,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 11.5,
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
                                    "right": 23,
                                    "bottom": 42,
                                    "altText": "Picture 28.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 646
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 23,
                                    "height": 42,
                                    "strokewidth": 0
                                }
                            },
                            "width": 23,
                            "height": 42,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6p753fdfBpA"
                        }
                    ],
                    "accType": "text",
                    "altText": "Group 57",
                    "shapemaskId": "",
                    "xPos": 207,
                    "yPos": 316,
                    "tabIndex": 47,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 30,
                    "rotateYPos": 21.5,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 25,
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
                    "width": 60,
                    "height": 43,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "67hxa8lbYep"
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
                                    "assetId": 247,
                                    "id": "01",
                                    "url": "story_content/6Lq0gPLxuji.png",
                                    "type": "normal",
                                    "altText": "Picture 20.png",
                                    "width": 68,
                                    "height": 84,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 0,
                            "tabIndex": 30,
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
                                    "altText": "Picture 20.png",
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
                            "id": "6rSQ02zLsZz"
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
                                    "assetId": 248,
                                    "id": "01",
                                    "url": "story_content/6fUtWZORPv4.png",
                                    "type": "normal",
                                    "altText": "Picture 21.png",
                                    "width": 76,
                                    "height": 84,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 30,
                            "yPos": 1,
                            "tabIndex": 31,
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
                                    "altText": "Picture 21.png",
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
                            "id": "6GwruNtOxAq"
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
                                    "assetId": 249,
                                    "id": "01",
                                    "url": "story_content/6g7H1JraYrM.png",
                                    "type": "normal",
                                    "altText": "Picture 22.png",
                                    "width": 75,
                                    "height": 84,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 59,
                            "yPos": 2,
                            "tabIndex": 32,
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
                                    "altText": "Picture 22.png",
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
                            "id": "6gXf8OjJMTH"
                        }
                    ],
                    "accType": "text",
                    "altText": "Group 33",
                    "shapemaskId": "",
                    "xPos": 208,
                    "yPos": 230,
                    "tabIndex": 29,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 48,
                    "rotateYPos": 22,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 26,
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
                    "id": "6KUiV8m0Mj2"
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
                            "uniqueId": "6EKmCa9cvqo_1369816085",
                            "id": "01",
                            "linkId": "txt__default_6EKmCa9cvqo",
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
                    "xPos": 25,
                    "yPos": 232,
                    "tabIndex": 33,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 83.5,
                    "rotateYPos": 21.5,
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
                    "id": "6EKmCa9cvqo"
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
                            "uniqueId": "5pkjkS3k8Pb_-1027866880",
                            "id": "01",
                            "linkId": "txt__default_5pkjkS3k8Pb",
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
                    "xPos": 289,
                    "yPos": 245,
                    "tabIndex": 36,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 49,
                    "rotateYPos": 9.5,
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
                    "id": "5pkjkS3k8Pb"
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
                            "uniqueId": "5kFgyrFY8jj_-490586015",
                            "id": "01",
                            "linkId": "txt__default_5kFgyrFY8jj",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 19,
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
                                "right": 19,
                                "bottom": 21,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 655
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": -8,
                    "yPos": 242,
                    "tabIndex": 35,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 16.5,
                    "rotateYPos": 11,
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
                            "right": 33,
                            "bottom": 22,
                            "altText": "1",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 654
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 33,
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
                    "width": 33,
                    "height": 22,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5kFgyrFY8jj"
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
                            "uniqueId": "5gvd9HrGlkf_738980849",
                            "id": "01",
                            "linkId": "txt__default_5gvd9HrGlkf",
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
                    "xPos": 241,
                    "yPos": 326,
                    "tabIndex": 54,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 49,
                    "rotateYPos": 9.5,
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
                    "id": "5gvd9HrGlkf"
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
                            "uniqueId": "672ehrIio3y_-2129180478",
                            "id": "01",
                            "linkId": "txt__default_672ehrIio3y",
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
                    "xPos": 289,
                    "yPos": 407,
                    "tabIndex": 72,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 49,
                    "rotateYPos": 9.5,
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
                    "id": "672ehrIio3y"
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
                            "uniqueId": "6Kp13ALWhn6_-530752207",
                            "id": "01",
                            "linkId": "txt__default_6Kp13ALWhn6",
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
                    "xPos": 288,
                    "yPos": 289,
                    "tabIndex": 44,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 49,
                    "rotateYPos": 9.5,
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
                    "id": "6Kp13ALWhn6"
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
                            "uniqueId": "64MUqTpRTV8_1373576851",
                            "id": "01",
                            "linkId": "txt__default_64MUqTpRTV8",
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
                    "xPos": 239,
                    "yPos": 368,
                    "tabIndex": 65,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 49,
                    "rotateYPos": 9.5,
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
                    "id": "64MUqTpRTV8"
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
                                    "assetId": 250,
                                    "id": "01",
                                    "url": "story_content/6Wjnm8p5yeU.png",
                                    "type": "normal",
                                    "altText": "Picture 29.png",
                                    "width": 70,
                                    "height": 84,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 0,
                            "yPos": 0,
                            "tabIndex": 39,
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
                                    "altText": "Picture 29.png",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 657
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
                            "id": "63Rq0ZTdwrL"
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
                                    "assetId": 251,
                                    "id": "01",
                                    "url": "story_content/5Uu02z0DVem.png",
                                    "type": "normal",
                                    "altText": "Picture 30.png",
                                    "width": 76,
                                    "height": 84,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 30,
                            "yPos": 1,
                            "tabIndex": 40,
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
                                    "altText": "Picture 30.png",
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
                            "id": "5rvecEeNd8m"
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
                                    "assetId": 252,
                                    "id": "01",
                                    "url": "story_content/6OYpwwyB08j.png",
                                    "type": "normal",
                                    "altText": "Picture 31.png",
                                    "width": 75,
                                    "height": 84,
                                    "mobiledx": 0,
                                    "mobiledy": 0
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 59,
                            "yPos": 2,
                            "tabIndex": 41,
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
                                    "altText": "Picture 31.png",
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
                            "id": "5dGBOo2uLvG"
                        }
                    ],
                    "accType": "text",
                    "altText": "Group 67",
                    "shapemaskId": "",
                    "xPos": 208,
                    "yPos": 273,
                    "tabIndex": 38,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 48,
                    "rotateYPos": 22,
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
                    "width": 96,
                    "height": 44,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "5vSfBahgTqn"
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
                            "uniqueId": "6h1IqkmmmgH_2016063775",
                            "id": "01",
                            "linkId": "txt__default_6h1IqkmmmgH",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 19,
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
                                "right": 20,
                                "bottom": 21,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 658
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": -7,
                    "yPos": 280,
                    "tabIndex": 43,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 16.5,
                    "rotateYPos": 11,
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
                            "right": 33,
                            "bottom": 22,
                            "altText": "2",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 654
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 33,
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
                    "width": 33,
                    "height": 22,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6h1IqkmmmgH"
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
                            "uniqueId": "6YfsAAHbCU0_73270489",
                            "id": "01",
                            "linkId": "txt__default_6YfsAAHbCU0",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 19,
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
                                                "text": "5",
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
                                "right": 20,
                                "bottom": 21,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 659
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": -6,
                    "yPos": 406,
                    "tabIndex": 71,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 16.5,
                    "rotateYPos": 11,
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
                            "right": 33,
                            "bottom": 22,
                            "altText": "5",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 654
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 33,
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
                    "width": 33,
                    "height": 22,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6YfsAAHbCU0"
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
                            "uniqueId": "63cSSsVvSDK_1511172262",
                            "id": "01",
                            "linkId": "txt__default_63cSSsVvSDK",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 19,
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
                                "right": 20,
                                "bottom": 21,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 660
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": -7,
                    "yPos": 364,
                    "tabIndex": 64,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 16.5,
                    "rotateYPos": 11,
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
                            "right": 33,
                            "bottom": 22,
                            "altText": "4",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 654
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 33,
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
                    "width": 33,
                    "height": 22,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "63cSSsVvSDK"
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
                            "uniqueId": "6bjkPE7szpH_557871733",
                            "id": "01",
                            "linkId": "txt__default_6bjkPE7szpH",
                            "type": "acctext",
                            "xPos": 7,
                            "yPos": 3,
                            "xAccOffset": 7,
                            "yAccOffset": 3,
                            "width": 19,
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
                                "right": 20,
                                "bottom": 21,
                                "pngfb": false,
                                "pr": {
                                    "l": "Lib",
                                    "i": 661
                                }
                            }
                        }
                    ],
                    "shapemaskId": "",
                    "xPos": -7,
                    "yPos": 324,
                    "tabIndex": 53,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 16.5,
                    "rotateYPos": 11,
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
                            "right": 33,
                            "bottom": 22,
                            "altText": "3",
                            "pngfb": false,
                            "pr": {
                                "l": "Lib",
                                "i": 654
                            }
                        },
                        "html5data": {
                            "xPos": 0,
                            "yPos": 0,
                            "width": 33,
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
                    "width": 33,
                    "height": 22,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6bjkPE7szpH"
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
                    "depth": 39,
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
                    "id": "6PosbKB25sW"
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
                                    "uniqueId": "6HxpJjzZINt_524508117",
                                    "id": "01",
                                    "linkId": "txt__default_6HxpJjzZINt",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 132,
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
                                                        "text": "Stocking up favorites for the week\\t",
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
                                                        "len": 35,
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
                                        "right": 129,
                                        "bottom": 30,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 663
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 145,
                            "yPos": 7,
                            "tabIndex": 25,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 69,
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
                                    "right": 138,
                                    "bottom": 33,
                                    "altText": "Stocking up favorites for the week\\t",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 662
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 138,
                                    "height": 33,
                                    "strokewidth": 0
                                }
                            },
                            "width": 138,
                            "height": 33,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6HxpJjzZINt"
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
                                    "uniqueId": "5vue0h6XJVj_-1171509436",
                                    "id": "01",
                                    "linkId": "txt__default_5vue0h6XJVj",
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
                            "xPos": 282,
                            "yPos": 3,
                            "tabIndex": 23,
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
                            "id": "5vue0h6XJVj"
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
                                    "uniqueId": "5tjkvATZLOl_8102476",
                                    "id": "01",
                                    "linkId": "txt__default_5tjkvATZLOl",
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
                                        "bottom": 30,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 667
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 427,
                            "yPos": 7,
                            "tabIndex": 26,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 57,
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
                                    "right": 115,
                                    "bottom": 33,
                                    "altText": "New News\\nDrive trial",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 666
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 115,
                                    "height": 33,
                                    "strokewidth": 0
                                }
                            },
                            "width": 114,
                            "height": 33,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "5tjkvATZLOl"
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
                                    "uniqueId": "6nldKT8pwHI_1937660303",
                                    "id": "01",
                                    "linkId": "txt__default_6nldKT8pwHI",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 161,
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
                            "xPos": 540,
                            "yPos": 3,
                            "tabIndex": 24,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 83.5,
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
                                    "right": 167,
                                    "bottom": 40,
                                    "altText": "EXECUTION PRIORITIES\\nBE RELEVANT",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 668
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 167,
                                    "height": 40,
                                    "strokewidth": 0
                                }
                            },
                            "width": 167,
                            "height": 40,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6nldKT8pwHI"
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
                                    "uniqueId": "6UDGqi6omsn_1886661491",
                                    "id": "01",
                                    "linkId": "txt__default_6UDGqi6omsn",
                                    "type": "acctext",
                                    "xPos": 3,
                                    "yPos": 3,
                                    "xAccOffset": 3,
                                    "yAccOffset": 3,
                                    "width": 188,
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
                                                        "text": "Mineral water Aisle\\n",
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
                                                        "len": 23,
                                                        "flowDirection": "leftToRight",
                                                        "cursive": false
                                                    }
                                                ]
                                            },
                                            {
                                                "spans": [
                                                    {
                                                        "text": "Healthy snacks / Produce",
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
                                                        "bulletFont": Serif,
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
                                        "right": 162,
                                        "bottom": 43,
                                        "pngfb": false,
                                        "pr": {
                                            "l": "Lib",
                                            "i": 671
                                        }
                                    }
                                }
                            ],
                            "shapemaskId": "",
                            "xPos": 706,
                            "yPos": 0,
                            "tabIndex": 21,
                            "tabEnabled": true,
                            "xOffset": 0,
                            "yOffset": 0,
                            "rotateXPos": 97,
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
                                    "right": 194,
                                    "bottom": 46,
                                    "altText": "Mineral water Aisle\\nStrategic adjacencies:\\nHealthy snacks / Produce",
                                    "pngfb": false,
                                    "pr": {
                                        "l": "Lib",
                                        "i": 670
                                    }
                                },
                                "html5data": {
                                    "xPos": 0,
                                    "yPos": 0,
                                    "width": 194,
                                    "height": 46,
                                    "strokewidth": 0
                                }
                            },
                            "width": 194,
                            "height": 46,
                            "resume": false,
                            "useHandCursor": true,
                            "id": "6UDGqi6omsn"
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
                                    "uniqueId": "5XyvbdUzJRH_-1994877800",
                                    "id": "01",
                                    "linkId": "txt__default_5XyvbdUzJRH",
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
                            "yPos": 3,
                            "tabIndex": 22,
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
                            "id": "5XyvbdUzJRH"
                        }
                    ],
                    "accType": "text",
                    "altText": "Agrupar 4",
                    "shapemaskId": "",
                    "xPos": 37,
                    "yPos": 72,
                    "tabIndex": 20,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": 450,
                    "rotateYPos": 23,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "rotation": 0,
                    "depth": 40,
                    "scrolling": true,
                    "shuffleLock": false,
                    "width": 900,
                    "height": 46,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6XatCfTSnSn"
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
                            "assetId": 253,
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
                    "yPos": 134,
                    "tabIndex": 28,
                    "tabEnabled": true,
                    "xOffset": -5,
                    "yOffset": -5,
                    "rotateXPos": 462,
                    "rotateYPos": 0,
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
                            "url": "txt__default_6jnH7zrpITu.png",
                            "xPos": -5,
                            "yPos": -5,
                            "width": 934,
                            "height": 11,
                            "strokewidth": 1,
                            "mask": "750O2X398O2X5O5X394O5X3O3A1X3O3A1X3O3A1X4O5X394O5X5O3X396O3X74EO"
                        }
                    },
                    "width": 924,
                    "height": 0,
                    "resume": false,
                    "useHandCursor": true,
                    "id": "6jnH7zrpITu"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 323,
                    "yPos": 70,
                    "tabIndex": 18,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": -0.5,
                    "rotateYPos": 25,
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
                    "id": "5WQnZP51VHt"
                },
                {
                    "kind": "vectorshape",
                    "rotation": 0,
                    "accType": "text",
                    "cliptobounds": false,
                    "defaultAction": "",
                    "shapemaskId": "",
                    "xPos": 552,
                    "yPos": 71,
                    "tabIndex": 19,
                    "tabEnabled": true,
                    "xOffset": 0,
                    "yOffset": 0,
                    "rotateXPos": -0.5,
                    "rotateYPos": 25,
                    "scaleX": 100,
                    "scaleY": 100,
                    "alpha": 100,
                    "depth": 43,
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
                    "id": "6dDGiScGnc4"
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