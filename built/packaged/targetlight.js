var pxtTargetBundle = {
    "id": "zylixcode",
    "nickname": "zylixcode",
    "name": "ZylixCode Cloud",
    "title": "ZylixCode Cloud IDE",
    "description": "Next-gen block and JavaScript editor for micro:bit. Reimagined with a modern dark interface and neon accents.",
    "corepkg": "core",
    "cloud": {
        "workspace": false,
        "packages": true,
        "sharing": false,
        "thumbnails": true,
        "publishing": false,
        "importing": false,
        "showBadges": false,
        "preferredPackages": [],
        "githubPackages": true,
        "cloudProviders": {
            "github": {
                "id": "github",
                "name": "GitHub",
                "icon": "docs/static/providers/github-mark.png",
                "identity": false,
                "order": 3
            },
            "google": {
                "id": "google",
                "name": "Google",
                "icon": "docs/static/providers/google-logo.svg",
                "identity": false,
                "redirect": false,
                "order": 2
            },
            "clever": {
                "id": "clever",
                "name": "Clever",
                "icon": "docs/static/providers/clever-logo.png",
                "identity": false,
                "redirect": false,
                "order": 3
            }
        }
    },
    "compile": {
        "isNative": false,
        "hasHex": true,
        "deployDrives": "(MICROBIT|MBED)",
        "driveName": "MICROBIT",
        "hexMimeType": "application/x-microbit-hex",
        "openocdScript": "source [find interface/cmsis-dap.cfg]; source [find target/nrf51.cfg]",
        "flashUsableEnd": 242688,
        "flashEnd": 242688,
        "flashCodeAlign": 1024,
        "floatingPoint": true,
        "taggedInts": true,
        "utf8": false,
        "gc": true,
        "imageRefTag": 9,
        "shimRenames": {
            "sendBufferAsm": "light::sendWS2812Buffer"
        },
        "patches": {
            "0.0.0 - 1.0.0": [
                {
                    "type": "package",
                    "map": {
                        "microbit": "core",
                        "microbit-bluetooth": "bluetooth",
                        "microbit-radio": "radio",
                        "microbit-devices": "devices",
                        "microbit-led": "",
                        "microbit-music": "",
                        "microbit-game": "",
                        "microbit-pins": "",
                        "microbit-serial": ""
                    }
                },
                {
                    "type": "missingPackage",
                    "map": {
                        "radio\\s*\\.": "radio",
                        "bluetooth\\s*\\.": "bluetooth",
                        "devices\\s*\\.": "devices"
                    }
                },
                {
                    "type": "api",
                    "map": {
                        "bluetooth\\s*\\.\\s*uartRead\\s*\\((.*?)\\)": "bluetooth.uartReadUntil($1)",
                        "bluetooth\\s*\\.\\s*uartWrite\\s*\\((.*?)\\)": "bluetooth.uartWriteUntil($1)",
                        "input\\s*\\.\\s*calibrate\\s*\\(": "input.calibrateCompass(",
                        "radio\\s*\\.\\s*onDataPacketReceived\\(\\s*\\(\\{\\s*receivedNumber\\s*\\}\\)\\s*=>\\s*\\{": "radio.onReceivedNumber(function (receivedNumber) {",
                        "radio\\s*\\.\\s*onDataPacketReceived\\(\\s*\\(\\{\\s*receivedString: name, receivedNumber: value\\s*\\}\\)\\s*=>\\s*\\{": "radio.onReceivedValue(function (name, value) {",
                        "radio\\s*\\.\\s*onDataPacketReceived\\(\\s*\\(\\{\\s*receivedString\\s*\\}\\)\\s*=>\\s*\\{": "radio.onReceivedString(function (receivedString) {"
                    }
                },
                {
                    "type": "blockId",
                    "map": {
                        "device_get_acceleration": "device_acceleration"
                    }
                },
                {
                    "type": "blockValue",
                    "map": {
                        "device_print_message.message": "text"
                    }
                }
            ],
            "0.0.0 - 1.4.12": [
                {
                    "type": "api",
                    "map": {
                        "DisplayMode\\s*\\.\\s*BackAndWhite": "DisplayMode.BlackAndWhite"
                    }
                }
            ],
            "0.0.0 - 3.1.10": [
                {
                    "type": "package",
                    "map": {
                        "pxt-microbit-v2-extension": "microphone"
                    }
                }
            ],
            "0.0.0 - 3.0.18": [
                {
                    "type": "missingPackage",
                    "map": {
                        ".*": "microphone"
                    }
                }
            ]
        },
        "hidSelectors": [
            {
                "usagePage": "0xFF00",
                "usageId": "0x0001",
                "vid": "0x0d28",
                "pid": "0x0204"
            }
        ],
        "webUSB": true,
        "useNewFunctions": true,
        "nativeType": "thumb",
        "switches": {},
        "jsRefCounting": false,
        "noSourceInFlash": true
    },
    "compileService": {
        "yottaTarget": "bbc-microbit-classic-gcc@https://github.com/lancaster-university/yotta-target-bbc-microbit-classic-gcc",
        "yottaCorePackage": "microbit",
        "githubCorePackage": "lancaster-university/microbit",
        "gittag": "v2.2.0-rc6",
        "serviceId": "microbit",
        "dockerImage": "pext/yotta:gcc5",
        "yottaBinary": "pxt-microbit-app-combined.hex"
    },
    "multiVariants": [
        "mbdal",
        "mbcodal"
    ],
    "alwaysMultiVariant": true,
    "variants": {
        "mbdal": {
            "compile": {},
            "compileService": {}
        },
        "mbcodal": {
            "compile": {
                "flashCodeAlign": 4096,
                "flashUsableEnd": 471040,
                "flashEnd": 524288
            },
            "compileService": {
                "buildEngine": "codal",
                "codalTarget": {
                    "name": "codal-microbit-v2",
                    "url": "https://github.com/lancaster-university/codal-microbit-v2",
                    "branch": "v0.3.5",
                    "type": "git"
                },
                "codalBinary": "MICROBIT",
                "githubCorePackage": "lancaster-university/microbit-v2-samples",
                "gittag": "v0.2.13",
                "serviceId": "mbcodal2",
                "dockerImage": "pext/yotta:latest",
                "yottaConfigCompatibility": true
            }
        }
    },
    "runtime": {
        "mathBlocks": true,
        "loopsBlocks": true,
        "pauseUntilBlock": {
            "category": "loops",
            "weight": 25
        },
        "logicBlocks": true,
        "variablesBlocks": true,
        "textBlocks": true,
        "listsBlocks": true,
        "functionBlocks": true,
        "breakBlock": true,
        "continueBlock": true,
        "functionsOptions": {
            "useNewFunctions": true,
            "extraFunctionEditorTypes": [
                {
                    "typeName": "game.LedSprite",
                    "label": "LedSprite",
                    "icon": "send",
                    "defaultName": "sprite"
                },
                {
                    "typeName": "Image",
                    "label": "Image",
                    "icon": "image outline",
                    "defaultName": "image"
                }
            ]
        },
        "onStartColor": "#3b82f6",
        "onStartNamespace": "basic",
        "onStartWeight": 54
    },
    "simulator": {
        "autoRun": true,
        "streams": false,
        "aspectRatio": 1.22,
        "parts": true,
        "partsAspectRatio": 0.69,
        "messageSimulators": {
            "robot": {
                "url": "https://microsoft.github.io/microbit-robot/?parentOrigin=$PARENT_ORIGIN$",
                "localHostUrl": "http://localhost:3000/microbit-robot/?parentOrigin=$PARENT_ORIGIN$",
                "aspectRatio": 1.22,
                "permanent": true
            }
        },
        "testSimulatorExtensions": {},
        "boardDefinition": {
            "visual": "microbit",
            "gpioPinBlocks": [
                [
                    "P0"
                ],
                [
                    "P1"
                ],
                [
                    "P2"
                ],
                [
                    "P3"
                ],
                [
                    "P4",
                    "P5",
                    "P6",
                    "P7"
                ],
                [
                    "P8",
                    "P9",
                    "P10",
                    "P11",
                    "P12"
                ],
                [
                    "P16"
                ]
            ],
            "gpioPinMap": {
                "P0": "P0",
                "P1": "P1",
                "P2": "P2",
                "P3": "P3",
                "P4": "P4",
                "P5": "P5",
                "P6": "P6",
                "P7": "P7",
                "P8": "P8",
                "P9": "P9",
                "P10": "P10",
                "P11": "P11",
                "P12": "P12",
                "P13": "P13",
                "P14": "P14",
                "P15": "P15",
                "P16": "P16",
                "P19": "P19",
                "P20": "P20"
            },
            "spiPins": {
                "MOSI": "P15",
                "MISO": "P14",
                "SCK": "P13"
            },
            "i2cPins": {
                "SDA": "P20",
                "SCL": "P19"
            },
            "analogInPins": [
                "P0",
                "P1",
                "P2",
                "P3",
                "P10"
            ],
            "groundPins": [
                "GND"
            ],
            "threeVoltPins": [
                "+3v3"
            ],
            "attachPowerOnRight": true,
            "onboardComponents": [
                "accelerometer",
                "buttonpair",
                "ledmatrix",
                "speaker",
                "bluetooth",
                "thermometer",
                "compass",
                "builtinspeaker",
                "microphone",
                "logotouch",
                "flashlog",
                "v2"
            ],
            "pinStyles": {
                "P0": "croc",
                "P1": "croc",
                "P2": "croc",
                "GND": "croc",
                "+3v3": "croc"
            },
            "marginWhenBreadboarding": [
                0,
                0,
                80,
                0
            ]
        }
    },
    "serial": {
        "nameFilter": "^(mbed Serial Port|DAPLink CMSIS-DAP)",
        "log": true,
        "useEditor": true,
        "editorTheme": {
            "graphBackground": "#1e293b",
            "lineColors": [
                "#3b82f6",
                "#a855f7",
                "#8b5cf6",
                "#06b6d4",
                "#ec4899",
                "#f59e0b"
            ]
        },
        "vendorId": "0x0d28",
        "productId": "0x0204",
        "rawHID": true
    },
    "queryVariants": {
        "hidemenu": {
            "appTheme": {
                "hideMenuBar": true
            }
        },
        "hidelanguage": {
            "appTheme": {
                "selectLanguage": false
            }
        },
        "editor": {
            "appTheme": {
                "showHomeScreen": false
            }
        },
        "androidapp": {
            "compile": {
                "webUSB": false
            },
            "appTheme": {
                "disableBlobObjectDownload": true
            }
        },
        "skillsMap=1": {
            "appTheme": {
                "hideReplaceMyCode": false
            }
        },
        "teachertool=1": {
            "appTheme": {
                "hideMenuBar": true,
                "workspaceSearch": true,
                "noReloadOnUpdate": true
            }
        }
    },
    "uploadDocs": true,
    "versions": {
        "target": "9.1.1",
        "pxt": "13.0.1"
    },
    "blocksprj": {
        "id": "blocksprj",
        "config": {
            "name": "{0} block",
            "dependencies": {
                "core": "*",
                "radio": "*",
                "microphone": "*"
            },
            "description": "",
            "files": [
                "main.blocks",
                "main.ts",
                "README.md"
            ],
            "additionalFilePaths": []
        },
        "files": {
            "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <block type=\"pxt-on-start\"></block>\n  <block type=\"device_forever\"></block>\n</xml>",
            "main.ts": "\n",
            "README.md": ""
        }
    },
    "tsprj": {
        "id": "tsprj",
        "config": {
            "name": "{0} bit",
            "dependencies": {
                "core": "*",
                "radio": "*",
                "microphone": "*"
            },
            "description": "",
            "files": [
                "main.ts",
                "README.md"
            ],
            "additionalFilePaths": []
        },
        "files": {
            "main.ts": "basic.showLeds(`\n    . . . . .\n    . # . # .\n    . . . . .\n    # . . . #\n    . # # # .\n    `);",
            "README.md": ""
        }
    },
    "colorThemeMap": {
        "pxt-high-contrast": {
            "id": "pxt-high-contrast",
            "name": "High Contrast",
            "weight": 100,
            "monacoBaseTheme": "hc-black",
            "colors": {
                "pxt-header-background": "#000000",
                "pxt-header-foreground": "#FFFFFF",
                "pxt-header-background-hover": "#000000",
                "pxt-header-foreground-hover": "#FFFFFF",
                "pxt-header-stencil": "#FFFFFF",
                "pxt-primary-background": "#000000",
                "pxt-primary-foreground": "#FFFFFF",
                "pxt-primary-background-hover": "#000000",
                "pxt-primary-foreground-hover": "#FFFFFF",
                "pxt-primary-accent": "#000000",
                "pxt-secondary-background": "#000000",
                "pxt-secondary-foreground": "#FFFFFF",
                "pxt-secondary-background-hover": "#000000",
                "pxt-secondary-foreground-hover": "#FFFFFF",
                "pxt-secondary-accent": "#000000",
                "pxt-tertiary-background": "#000000",
                "pxt-tertiary-foreground": "#FFFFFF",
                "pxt-tertiary-background-hover": "#000000",
                "pxt-tertiary-foreground-hover": "#FFFFFF",
                "pxt-tertiary-accent": "#000000",
                "pxt-target-background1": "#000000",
                "pxt-target-foreground1": "#FFFFFF",
                "pxt-target-background1-hover": "#000000",
                "pxt-target-foreground1-hover": "#cccccc",
                "pxt-target-stencil1": "#FFFFFF",
                "pxt-target-background2": "#000000",
                "pxt-target-foreground2": "#FFFFFF",
                "pxt-target-background2-hover": "#000000",
                "pxt-target-foreground2-hover": "#cccccc",
                "pxt-target-stencil2": "#FFFFFF",
                "pxt-target-background3": "#000000",
                "pxt-target-foreground3": "#FFFFFF",
                "pxt-target-background3-hover": "#000000",
                "pxt-target-foreground3-hover": "#cccccc",
                "pxt-target-stencil3": "#FFFFFF",
                "pxt-neutral-background1": "#000000",
                "pxt-neutral-foreground1": "#FFFFFF",
                "pxt-neutral-background1-hover": "#000000",
                "pxt-neutral-foreground1-hover": "#FFFFFF",
                "pxt-neutral-stencil1": "#FFFFFF",
                "pxt-neutral-background2": "#000000",
                "pxt-neutral-foreground2": "#FFFFFF",
                "pxt-neutral-background2-hover": "#000000",
                "pxt-neutral-foreground2-hover": "#FFFFFF",
                "pxt-neutral-stencil2": "#FFFFFF",
                "pxt-neutral-background3": "#000000",
                "pxt-neutral-foreground3": "#FFFFFF",
                "pxt-neutral-background3-hover": "#000000",
                "pxt-neutral-foreground3-hover": "#FFFFFF",
                "pxt-neutral-stencil3": "#FFFFFF",
                "pxt-neutral-background3-alpha90": "#000000E5",
                "pxt-neutral-base": "rgba(255, 255, 255, 1)",
                "pxt-neutral-alpha0": "rgba(255, 255, 255, 0)",
                "pxt-neutral-alpha10": "rgba(255, 255, 255, 0.1)",
                "pxt-neutral-alpha20": "rgba(255, 255, 255, 0.2)",
                "pxt-neutral-alpha50": "rgba(255, 255, 255, 0.5)",
                "pxt-neutral-alpha80": "rgba(255, 255, 255, 0.8)",
                "pxt-link": "#807FFF",
                "pxt-link-hover": "#BBBBFF",
                "pxt-focus-border": "#FFFF00",
                "pxt-success": "#00FF00",
                "pxt-success-foreground": "#000000",
                "pxt-success-hover": "#00FF00",
                "pxt-success-alpha10": "#00FF0019",
                "pxt-warning": "#00FFFF",
                "pxt-warning-foreground": "#FFFFFF",
                "pxt-warning-hover": "#00FFFF",
                "pxt-warning-alpha10": "#00FFFF19",
                "pxt-error": "#880000",
                "pxt-error-foreground": "#FFFFFF",
                "pxt-error-hover": "#880000",
                "pxt-error-alpha10": "#88000019",
                "pxt-colors-purple-background": "#FF00FF",
                "pxt-colors-purple-foreground": "#000000",
                "pxt-colors-purple-hover": "#FF00FF",
                "pxt-colors-purple-alpha10": "#FF00FF19",
                "pxt-colors-orange-background": "#FF7F00",
                "pxt-colors-orange-foreground": "#000000",
                "pxt-colors-orange-hover": "#FF7F00",
                "pxt-colors-orange-alpha10": "#FF7F0019",
                "pxt-colors-brown-background": "#d1b7a3",
                "pxt-colors-brown-foreground": "#FFFFFF",
                "pxt-colors-brown-hover": "#d1b7a3",
                "pxt-colors-brown-alpha10": "#d1b7a319",
                "pxt-colors-blue-background": "#0078D7",
                "pxt-colors-blue-foreground": "#FFFFFF",
                "pxt-colors-blue-hover": "#0086F1",
                "pxt-colors-blue-alpha10": "#0078D719",
                "pxt-colors-green-background": "#00FF00",
                "pxt-colors-green-foreground": "#000000",
                "pxt-colors-green-hover": "#00FF00",
                "pxt-colors-green-alpha10": "#00FF0019",
                "pxt-colors-red-background": "#880000",
                "pxt-colors-red-foreground": "#FFFFFF",
                "pxt-colors-red-hover": "#880000",
                "pxt-colors-red-alpha10": "#88000019",
                "pxt-colors-teal-background": "#5BE0FF",
                "pxt-colors-teal-foreground": "#000000",
                "pxt-colors-teal-hover": "#5BE0FF",
                "pxt-colors-teal-alpha10": "#5BE0FF19",
                "pxt-colors-yellow-background": "#FFFF00",
                "pxt-colors-yellow-foreground": "#000000",
                "pxt-colors-yellow-hover": "#FFFF00",
                "pxt-colors-yellow-alpha10": "#FFFF0019"
            },
            "overrideCss": ".common-button {\n    color: var(--pxt-neutral-foreground2) !important;\n    background-color: var(--pxt-neutral-background2) !important;\n    border-color: var(--pxt-neutral-foreground2) !important;\n}\n\n.common-button:hover, .common-button:focus {\n    outline: 2px solid var(--pxt-colors-yellow-background) !important;\n    z-index: 1;\n}\n\n.common-button.home-share-button {\n    border: 1px solid var(--pxt-neutral-foreground2) !important;\n}\n\n/*\nOverride default button background for the area menu, which requires transparency,\nbut still use a fairly opaque one to keep focus/visibility on the main buttons.\n*/\n.area-menu-container .area-button {\n    background-color: var(--pxt-neutral-alpha80) !important;\n}\n\n/*\n * \"User-provided content\" header in the import modal.\n */\n.ui.violet.message .header {\n    color: var(--pxt-colors-purple-background) !important;\n}\n\n/*\n * Checkbox styles\n * In HC the neutral and primary colors are the same, so we need to differentiate with\n * a different background color when checked.\n */\n.common-checkbox.toggle input:checked~label:before,\ndiv.field .ui.toggle.checkbox input:checked~label:before {\n    background-color: var(--pxt-colors-purple-background) !important;\n}\n\n.common-checkbox-icon.checked {\n    background-color: var(--pxt-colors-purple-background);\n    color: var(--pxt-colors-purple-foreground);\n    border-color: var(--pxt-colors-purple-hover);\n}\n\n.common-checkbox-icon.checked i.fas.fa-check {\n    color: var(--pxt-colors-purple-foreground);\n}\n\n/*\n * Make toggle \"handle\" more visible for HC\n */\n.common-checkbox.toggle label:after {\n    background-color: var(--pxt-neutral-foreground1) !important;\n}\n\n/*\n * Selection highlights\n */\n\n.blocklyContextMenu {\n    border: 3px solid var(--pxt-colors-yellow-background) !important;\n}\n\n.blocklyWidgetDiv .blocklyMenu.blocklyContextMenu .blocklyMenuItem.blocklyMenuItemHighlight {\n    border: 3px solid var(--pxt-colors-yellow-background) !important;\n}\n\n/*\n * Toolbox\n */\n.blocklyTreeRow:hover {\n    outline: 3px solid var(--pxt-colors-yellow-background) !important;\n}\n\n#blocklySearchInput i {\n    color: var(--pxt-neutral-foreground1);\n    opacity: 1;\n}\n\n/*\n * Inverted image colors\n */\n.barcharticon,\n.blockly-ws-search-next-btn,\n.blockly-ws-search-previous-btn,\n.blockly-ws-search-close-btn {\n    filter: invert(1);\n}\n\n/* Sim toolbar */\n#simulator .editor-sidebar .simtoolbar .debug-button.active,\n#simulator .editor-sidebar .simtoolbar .debug-button.active:hover {\n    /* Make active state more apparent with a yellow border */\n    color: var(--pxt-neutral-foreground2) !important;\n    background: var(--pxt-neutral-background2) !important;\n    border: 3px solid var(--pxt-colors-yellow-background) !important;\n}\n\n/* Image Editor */\n.image-editor-topbar, .image-editor-bottombar, .image-editor-sidebar {\n    background: var(--pxt-neutral-background1) !important;\n}\n.image-editor-tool-buttons {\n    background: none !important;\n}\n.image-editor-button,\n.image-editor-input,\n.image-editor-confirm {\n    border: 1px solid var(--pxt-neutral-foreground1);\n}\n.image-editor-canvas, .image-editor-canvas:hover, .image-editor-canvas:focus {\n    outline: none !important;\n}\n.cursor-button {\n    /* remove margin since we now have a border around the cursor buttons and it looks better centered */\n    margin-right: 0;\n}\n\n/* Toolbox */\n.pxtToolbox:not(.invertedToolbox) span.blocklyTreeLabel {\n    color: var(--pxt-target-foreground3);\n}\n\n.pxtToolbox:not(.invertedToolbox) .blocklyTreeSelected span.blocklyTreeLabel,\n.pxtToolbox:not(.invertedToolbox) .blocklyTreeSelected span.blocklyTreeIcon {\n    color: var(--pxt-target-foreground3);\n}\n\n.pxtToolbox:not(.invertedToolbox) .blocklyTreeRow:not(.blocklyTreeSelected) .blocklyTreeLabel {\n    color: var(--pxt-target-foreground3);\n}\n\n.pxtToolbox:not(.invertedToolbox) .blocklyTreeRow:not(.blocklyTreeSelected):hover,\n.pxtToolbox:not(.invertedToolbox) .blocklyTreeRow:not(.blocklyTreeSelected):focus {\n    background-color: #404040;\n}\n\n.blocksEditorOuter #blocklyTrashIcon {\n    color: var(--pxt-primary-foreground);\n}\n\n/*\n * Teaching Bubbles\n */\n.teaching-bubble,\n.teaching-bubble .teaching-bubble-navigation-buttons > .common-button {\n    background: var(--pxt-neutral-background1) !important;\n    color: var(--pxt-neutral-foreground1) !important;\n    border: solid var(--pxt-neutral-foreground1) !important;\n}\n\n.teaching-bubble-cutout {\n    border: 0.25rem solid var(--pxt-neutral-alpha20);\n}\n\n.teaching-bubble .ai-footer {\n    opacity: 1 !important;\n}\n\n.teaching-bubble-arrow,\n.teaching-bubble .ai-footer-text,\n.teaching-bubble .feedback-button,\n.teaching-bubble .feedback-button.disabled,\n.teaching-bubble .teaching-bubble-steps {\n    color: var(--pxt-neutral-foreground1) !important;\n}\n\n/*\n * Side Docs\n */\n\n#sidedocs {\n    background-color: var(--pxt-neutral-foreground1);\n}\n\n#sidedocsbar a i,\n#sidedocsbar a span {\n    color: var(--pxt-neutral-background1) !important;\n}\n\n#sidedocsbar a:hover,\n#sidedocsbar a:focus {\n    /* Yellow does not contrast well against white background */\n    outline: 3px solid var(--pxt-neutral-background1) !important;\n}\n\n#sidedocsbar a:hover i,\n#sidedocsbar a:focus i,\n#sidedocsbar a:hover span,\n#sidedocsbar a:focus span {\n    color: var(--pxt-link-hover) !important;\n}\n\n/*\n * Editor Toggle\n */\n#editortoggle .selected.item {\n    transition: none;\n    &:focus {\n        box-shadow: inset 0 0 0 6px #000000 !important;\n    }\n    >.icon {\n        color: #000000 !important;\n    }\n}\n\n#editordropdown.ui.button.active > .icon {\n    color: #000000 !important;\n}\n\n/*\n * Dropdown Menu\n */\n.common-menu-dropdown-item:hover,\n.common-menu-dropdown > .menu-button.expanded {\n    outline: var(--pxt-focus-border) solid 3px !important;\n    outline-offset: -4px;\n    z-index: 1;\n}\n\ntable.diffview.update .diff-added .ch-added {\n    color: var(--pxt-neutral-background1) !important;\n    outline-color: var(--pxt-neutral-background1) !important;\n}\n\n.blocklyFieldSliderDropdown {\n    background-color: var(--pxt-neutral-background1) !important;\n    border-color: var(--pxt-neutral-foreground1) !important;\n}\n\n.blocklyFieldSliderDropdown .blocklyFieldSliderLabel {\n    color: var(--pxt-neutral-foreground1) !important;\n}\n\n.blocklyFieldSliderDropdown input[type=range].blocklyFieldSlider {\n    outline: none !important;\n    background-color: var(--pxt-neutral-background1) !important;\n    --blocklyFieldSliderBackgroundColor: var(--pxt-neutral-background1) !important;\n    --blocklyFieldSliderThumbColor: var(--pxt-neutral-foreground1) !important;\n    --blocklyFieldSliderThumbBorderColor: var(--pxt-neutral-foreground1) !important;\n}\n\n.blocklyFieldSliderDropdown input[type=range].blocklyFieldSlider:hover::-webkit-slider-runnable-track, .blocklyFieldSliderDropdown input[type=range].blocklyFieldSlider:focus-visible::-webkit-slider-runnable-track {\n    outline: solid 3px var(--pxt-focus-border) !important;\n}\n\ninput[type=range].blocklyFieldSlider::-webkit-slider-runnable-track {\n    border: solid 1px var(--pxt-neutral-foreground1) !important;\n    box-sizing: content-box;\n}\n\ninput[type=range].blocklyFieldSlider::-moz-range-track {\n    border: solid 1px var(--pxt-neutral-foreground1) !important;\n    box-sizing: content-box;\n}\n\n.blocklyFieldSliderDropdown input[type=range].blocklyFieldSlider:hover::-moz-range-track, .blocklyFieldSliderDropdown input[type=range].blocklyFieldSlider:focus-visible::-moz-range-track {\n    outline: solid 3px var(--pxt-focus-border) !important;\n}"
        },
        "microbit-dark": {
            "id": "microbit-dark",
            "name": "ZylixCode Dark",
            "weight": 60,
            "monacoBaseTheme": "vs-dark",
            "colors": {
                "pxt-header-background": "#0f172a",
                "pxt-header-foreground": "#ffffff",
                "pxt-header-background-hover": "#1e293b",
                "pxt-header-foreground-hover": "#ffffff",
                "pxt-header-stencil": "#334155",
                "pxt-primary-background": "#3b82f6",
                "pxt-primary-foreground": "#ffffff",
                "pxt-primary-background-hover": "#2563eb",
                "pxt-primary-foreground-hover": "#ffffff",
                "pxt-primary-accent": "#60a5fa",
                "pxt-secondary-background": "#a855f7",
                "pxt-secondary-foreground": "#ffffff",
                "pxt-secondary-background-hover": "#9333ea",
                "pxt-secondary-foreground-hover": "#ffffff",
                "pxt-secondary-accent": "#c084fc",
                "pxt-tertiary-background": "#06b6d4",
                "pxt-tertiary-foreground": "#ffffff",
                "pxt-tertiary-background-hover": "#0891b2",
                "pxt-tertiary-foreground-hover": "#ffffff",
                "pxt-tertiary-accent": "#22d3ee",
                "pxt-target-background1": "#1e293b",
                "pxt-target-foreground1": "#e2e8f0",
                "pxt-target-background1-hover": "#0f172a",
                "pxt-target-foreground1-hover": "#ffffff",
                "pxt-target-stencil1": "#475569",
                "pxt-target-background2": "#0f172a",
                "pxt-target-foreground2": "#e2e8f0",
                "pxt-target-background2-hover": "#1e293b",
                "pxt-target-foreground2-hover": "#ffffff",
                "pxt-target-stencil2": "#334155",
                "pxt-target-background3": "#1e293b",
                "pxt-target-foreground3": "#e2e8f0",
                "pxt-target-background3-hover": "#0f172a",
                "pxt-target-foreground3-hover": "#ffffff",
                "pxt-target-stencil3": "#334155",
                "pxt-neutral-background1": "#1e293b",
                "pxt-neutral-foreground1": "#e2e8f0",
                "pxt-neutral-background1-hover": "#0f172a",
                "pxt-neutral-foreground1-hover": "#ffffff",
                "pxt-neutral-stencil1": "#475569",
                "pxt-neutral-background2": "#0f172a",
                "pxt-neutral-foreground2": "#e2e8f0",
                "pxt-neutral-background2-hover": "#1e293b",
                "pxt-neutral-foreground2-hover": "#ffffff",
                "pxt-neutral-stencil2": "#475569",
                "pxt-neutral-background3": "#1e293b",
                "pxt-neutral-foreground3": "#e2e8f0",
                "pxt-neutral-background3-hover": "#0f172a",
                "pxt-neutral-foreground3-hover": "#ffffff",
                "pxt-neutral-stencil3": "#334155",
                "pxt-neutral-background3-alpha90": "#1e293be6",
                "pxt-neutral-base": "rgba(148, 163, 184, 1)",
                "pxt-neutral-alpha0": "rgba(148, 163, 184, 0)",
                "pxt-neutral-alpha10": "rgba(148, 163, 184, 0.1)",
                "pxt-neutral-alpha20": "rgba(148, 163, 184, 0.2)",
                "pxt-neutral-alpha50": "rgba(148, 163, 184, 0.5)",
                "pxt-neutral-alpha80": "rgba(148, 163, 184, 0.8)",
                "pxt-link": "#60a5fa",
                "pxt-link-hover": "#93bbfc",
                "pxt-focus-border": "#3b82f6",
                "pxt-colors-purple-background": "#a855f7",
                "pxt-colors-purple-foreground": "#ffffff",
                "pxt-colors-purple-hover": "#9333ea",
                "pxt-colors-purple-alpha10": "#a855f719",
                "pxt-colors-orange-background": "#f97316",
                "pxt-colors-orange-foreground": "#ffffff",
                "pxt-colors-orange-hover": "#ea580c",
                "pxt-colors-orange-alpha10": "#f9731619",
                "pxt-colors-brown-background": "#92400e",
                "pxt-colors-brown-foreground": "#ffffff",
                "pxt-colors-brown-hover": "#78350f",
                "pxt-colors-brown-alpha10": "#92400e19",
                "pxt-colors-blue-background": "#3b82f6",
                "pxt-colors-blue-foreground": "#ffffff",
                "pxt-colors-blue-hover": "#2563eb",
                "pxt-colors-blue-alpha10": "#3b82f619",
                "pxt-colors-green-background": "#10b981",
                "pxt-colors-green-foreground": "#ffffff",
                "pxt-colors-green-hover": "#059669",
                "pxt-colors-green-alpha10": "#10b98119",
                "pxt-colors-red-background": "#ef4444",
                "pxt-colors-red-foreground": "#ffffff",
                "pxt-colors-red-hover": "#dc2626",
                "pxt-colors-red-alpha10": "#ef444419",
                "pxt-colors-teal-background": "#14b8a6",
                "pxt-colors-teal-foreground": "#ffffff",
                "pxt-colors-teal-hover": "#0d9488",
                "pxt-colors-teal-alpha10": "#14b8a619",
                "pxt-colors-yellow-background": "#facc15",
                "pxt-colors-yellow-foreground": "#0f172a",
                "pxt-colors-yellow-hover": "#eab308",
                "pxt-colors-yellow-alpha10": "#facc1519"
            },
            "overrideCss": "/* ============================================\n   ZylixCode Dark Theme Overrides - Neon Slate\n   Colors: #0f172a (Deep Slate), #1e293b (Slate)\n   Accents: #3b82f6 (Neon Blue), #a855f7 (Neon Purple)\n   ============================================ */\n\n/* --- 1. Focus & Accent Fixes (Neon Blue instead of Yellow) --- */\n#simulator .editor-sidebar .filemenu {\n    --pxt-focus-border: #3b82f6; /* Changed from yellow to ZylixCode Neon Blue */\n}\n\n#langmodal #availablelocales .langoption .header {\n    /* Better contrast than default, which is purple */\n    color: var(--pxt-neutral-foreground1);\n}\n\n/* --- 2. Toolbox & Blockly Text Contrast --- */\n.pxtToolbox span.blocklyTreeLabel,\n.pxtToolbox .blocklyTreeSelected span.blocklyTreeLabel,\n.pxtToolbox .blocklyTreeSelected .blocklyTreeIcon {\n    color: var(--pxt-target-foreground3);\n}\n\n.pxtToolbox #advanced > .blocklyTreeRow {\n    border-color: var(--pxt-neutral-alpha80);\n}\n.pxtToolbox #advanced > .blocklyTreeRow .blocklyTreeIcon {\n    color: var(--pxt-neutral-alpha80);\n}\n\n/* --- 3. Icons Brightness (Neon Pop Effect) --- */\n.pxtToolbox #serial .blocklyTreeIcon,\n.tutorial-container .serial span.docs.inlineblock,\n.pxtToolbox #control .blocklyTreeIcon,\n.tutorial-container .control span.docs.inlineblock {\n    /* Boosts brightness and saturation to make neon colors pop on dark bg */\n    filter: brightness(1.3) saturate(2.5);\n}\n\n/* --- 4. Menu & Card Borders --- */\n#mainmenu {\n    border-bottom: 1px solid var(--pxt-header-stencil);\n}\n\n.projectsdialog .ui.card:hover {\n    border-color: var(--pxt-focus-border) !important;\n    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3) !important; /* Neon glow on hover */\n}\n\n/* --- 5. Simulator & Sidebar Backgrounds --- */\n#simulator #editorSidebar.editor-sidebar {\n    background-color: var(--pxt-target-background1);\n}\n\n.fullscreensim #boardview {\n    background: var(--pxt-target-background2);\n}\n\n/* --- 6. Inverted Image Filters (Search Icons etc.) --- */\n.barcharticon,\n.blockly-ws-search-next-btn,\n.blockly-ws-search-previous-btn,\n.blockly-ws-search-close-btn {\n    filter: invert(1);\n}\n\n/* --- 7. Immersive Reader Button --- */\n.modals .ui.button.immersive-reader-button,\n#mainmenu .immersive-reader-button.ui.item,\n#simulator .editor-sidebar .immersive-reader-button.ui.item {\n    background-image: url(\"/static/icons/immersive-reader-light.svg\") !important;\n}\n\n/* --- 8. Carousel Arrows --- */\n.carouselarrow {\n    opacity: 0.9;\n}\n\n/* --- 9. Inverted Buttons (Dark Background) --- */\nbutton.ui.button.inverted:not(.teaching-bubble-button),\nbutton.common-button.inverted:not(.teaching-bubble-button) {\n    background-color: var(--pxt-neutral-background2) !important;\n}\n\nbutton.ui.button.inverted:hover:not(.teaching-bubble-button),\nbutton.common-button.inverted:hover:not(.teaching-bubble-button) {\n    background-color: var(--pxt-neutral-background2-hover) !important;\n}\n\n/* --- 10. Diff View (Git/Update changes) --- */\ntable.diffview.update .diff-added .ch-added {\n    color: var(--pxt-neutral-background1) !important;\n}\n\n/* ============================================\n   🚀 ZYLIXCODE ADDITIONS (Custom Neon Enhancements)\n   ============================================ */\n\n/* --- 11. Custom Scrollbars (Neon Blue Track & Thumb) --- */\n::-webkit-scrollbar {\n    width: 10px;\n    height: 10px;\n    background: #0f172a; /* Deep slate background */\n}\n::-webkit-scrollbar-track {\n    background: #1e293b; /* Slightly lighter slate for track */\n    border-radius: 6px;\n}\n::-webkit-scrollbar-thumb {\n    background: #3b82f6; /* Neon Blue thumb */\n    border-radius: 6px;\n    border: 2px solid #0f172a; /* Gives a sleek inset look */\n}\n::-webkit-scrollbar-thumb:hover {\n    background: #a855f7; /* Turns Neon Purple on hover */\n}\n\n/* --- 12. Text Selection (Neon Blue highlight) --- */\n::selection {\n    background: #3b82f6 !important;\n    color: #ffffff !important;\n}\n::-moz-selection {\n    background: #3b82f6 !important;\n    color: #ffffff !important;\n}\n\n/* --- 13. Toolbox Hover & Selection States --- */\n.blocklyTreeRow:not(.blocklyTreeSelected):hover {\n    background-color: #1e293b !important; /* Slate hover */\n    border-radius: 4px;\n}\n.blocklyTreeSelected {\n    background-color: #3b82f6 !important; /* Neon Blue selection */\n    border-radius: 4px;\n}\n.blocklyTreeSelected .blocklyTreeLabel {\n    color: #ffffff !important;\n}\n\n/* --- 14. Blockly Workspace Background --- */\n.blocklyMainBackground {\n    fill: #0f172a !important; /* Force deep slate workspace bg */\n}\n\n/* --- 15. Flyout Background --- */\n.blocklyFlyoutBackground {\n    fill: #1e293b !important; /* Slate flyout bg */\n    fill-opacity: 0.95 !important;\n}\n\n/* --- 16. Dropdown & Widget Accents --- */\n.blocklyDropdownMenu .blocklyMenuItemSelected {\n    background-color: #3b82f6 !important;\n}\n.blocklyWidgetDiv .blocklyMenu {\n    background-color: #1e293b !important;\n    border: 1px solid #334155 !important;\n}\n\n/* --- 17. Simulator Status / Info Bar --- */\n.sim-info-bar {\n    background-color: #0f172a !important;\n    border-top: 1px solid #1e293b !important;\n}\n#mainmenu .home.icon,\n#mainmenu a[href*=\"home\"],\n#mainmenu .item.home,\n#mainmenu .ui.item .home.icon {\n    display: none !important;\n}\n\n/* Hide any text-based Home link */\n#mainmenu .item:not(.logo):not(.ui.image):contains(\"Home\") {\n    display: none !important;\n}\n\n/* Just in case it's a div or span */\n#mainmenu [data-content=\"Home\"],\n#mainmenu [aria-label=\"Home\"] {\n    display: none !important;\n}\n"
        }
    }
}