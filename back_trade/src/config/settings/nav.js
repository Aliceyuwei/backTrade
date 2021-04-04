export default {
    // 左側選單
    nav: {
        // noSub: 是否有子選單
        // uniqueKey: 唯一的Key
        // textKey: 展開時文字的key
        // textKeyShort: 縮小時時文字的key
        // linkName: router裡的路徑名稱
        // sub: 子選單內容, {uniqueKey: 'xxx', linkName: 'xxx', textKey: 'XXX', textKeyShort: 'XXX'}

        // 總覽
        overview: {
            noSub: true,
            uniqueKey: 'overview',
            textKey: '總覽',
            linkName: 'overview',
            permissionGroup: 'overview'
        },
        // 賽事下載
        gameDownload: {
            noSub: false,
            uniqueKey: 'gameDownload',
            textKey: '賽事下載',
            linkName: 'gameDownload',
            permissionKey: 'game_download',
            permissionGroup: 'matchDownload',
            sub: [
                // 一般賽事下載
                {
                    uniqueKey: 'gameDownload',
                    textKey: '一般賽事下載',
                    linkName: 'gameDownload',
                    permissionGroup: 'matchDownload',
                    permissionKey: 'gameDownload'
                },
                // 冠軍賽事下載
                {
                    uniqueKey: 'tournamentDownload',
                    textKey: '冠軍賽事下載',
                    linkName: 'tournamentDownload',
                    permissionGroup: 'matchDownload',
                    permissionKey: 'tournamentDownload'
                }
            ]
        },
        // 賽事開盤
        gameOpen: {
            noSub: false,
            textKey: '賽事開盤',
            // 顯示所有球種
            allSport: true,
            permissionGroup: 'matchOpen',
            sub: [
                // 新增專一球種
                // 足球
                {
                    uniqueKey: 'gameTemplateOnlyFT',
                    textKey: '足球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 1,
                    params: {
                        template: 'regular_events',
                        sport_id: 1
                    }
                },
                // 籃球
                {
                    uniqueKey: 'gameTemplateOnlyBK',
                    textKey: '籃球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 2,
                    params: {
                        template: 'regular_events',
                        sport_id: 2
                    }
                },
                // 美式足球
                {
                    uniqueKey: 'gameTemplateOnlyAFB',
                    textKey: '美式足球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 3,
                    params: {
                        template: 'regular_events',
                        sport_id: 3
                    }
                },
                // 羽毛球
                {
                    uniqueKey: 'gameTemplateOnlyBM',
                    textKey: '羽毛球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 9,
                    params: {
                        template: 'regular_events',
                        sport_id: 9
                    }
                },
                // 棒球
                {
                    uniqueKey: 'gameTemplateOnlyBS',
                    textKey: '棒球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 5,
                    params: {
                        template: 'regular_events',
                        sport_id: 5
                    }
                },
                // 拳擊
                {
                    uniqueKey: 'gameTemplateOnlyBG',
                    textKey: '拳擊',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 12,
                    params: {
                        template: 'regular_events',
                        sport_id: 12
                    }
                },
                // 板球
                {
                    uniqueKey: 'gameTemplateOnlyCT',
                    textKey: '板球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 30,
                    params: {
                        template: 'regular_events',
                        sport_id: 30
                    }
                },
                // 飛鏢
                {
                    uniqueKey: 'gameTemplateOnlyDT',
                    textKey: '飛鏢',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 24,
                    params: {
                        template: 'regular_events',
                        sport_id: 24
                    }
                },
                //  高爾夫
                {
                    uniqueKey: 'gameTemplateOnlyGF',
                    textKey: '高爾夫',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 21,
                    params: {
                        template: 'regular_events',
                        sport_id: 21
                    }
                },
                // 手球
                {
                    uniqueKey: 'gameTemplateOnlyHB',
                    textKey: '手球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 18,
                    params: {
                        template: 'regular_events',
                        sport_id: 18
                    }
                },
                // 冰球
                {
                    uniqueKey: 'gameTemplateOnlyIce',
                    textKey: '冰球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 6,
                    params: {
                        template: 'regular_events',
                        sport_id: 6
                    }
                },
                // 賽車
                {
                    uniqueKey: 'gameTemplateOnlyMS',
                    textKey: '賽車',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 20,
                    params: {
                        template: 'regular_events',
                        sport_id: 20
                    }
                },
                // 撞球
                {
                    uniqueKey: 'gameTemplateOnlySN',
                    textKey: '撞球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 10,
                    params: {
                        template: 'regular_events',
                        sport_id: 10
                    }
                },
                // 乒乓
                {
                    uniqueKey: 'gameTemplateOnlyTT',
                    textKey: '乒乓',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 14,
                    params: {
                        template: 'regular_events',
                        sport_id: 14
                    }
                },
                // 網球
                {
                    uniqueKey: 'gameTemplateOnlyTN',
                    textKey: '網球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 4,
                    params: {
                        template: 'regular_events',
                        sport_id: 4
                    }
                },
                // 排球
                {
                    uniqueKey: 'gameTemplateOnlyVB',
                    textKey: '排球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 7,
                    params: {
                        template: 'regular_events',
                        sport_id: 7
                    }
                },

                // 電競足球
                {
                    uniqueKey: 'gameTemplate133',
                    textKey: '電競足球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 133,
                    params: {
                        template: 'regular_events',
                        sport_id: 133
                    }
                },
                // 電競籃球
                {
                    uniqueKey: 'gameTemplate134',
                    textKey: '電競籃球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 134,
                    params: {
                        template: 'regular_events',
                        sport_id: 134
                    }
                },
                // 電競冰球
                {
                    uniqueKey: 'gameTemplate161',
                    textKey: '電競冰球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 161,
                    params: {
                        template: 'regular_events',
                        sport_id: 161
                    }
                },
                // 電競網球
                {
                    uniqueKey: 'gameTemplate160',
                    textKey: '電競網球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 160,
                    params: {
                        template: 'regular_events',
                        sport_id: 160
                    }
                },
                // 電競排球162
                {
                    uniqueKey: 'gameTemplate162',
                    textKey: '電競排球',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 162,
                    params: {
                        template: 'regular_events',
                        sport_id: 162
                    }
                },
                // 電競
                {
                    uniqueKey: 'gameTemplateOnlyESP',
                    textKey: '電競',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 8,
                    params: {
                        template: 'regular_events',
                        sport_id: 8
                    }
                },
                // CS:GO
                {
                    uniqueKey: 'gameTemplateOnlyCSGO',
                    textKey: 'CS:GO',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 83,
                    params: {
                        template: 'regular_events',
                        sport_id: 83
                    }
                },
                // Dota 2
                {
                    uniqueKey: 'gameTemplateOnlyDota2',
                    textKey: 'Dota 2',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 84,
                    params: {
                        template: 'regular_events',
                        sport_id: 84
                    }
                },
                // KOG
                {
                    uniqueKey: 'gameTemplateOnlyKOG',
                    textKey: 'KOG',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 148,
                    params: {
                        template: 'regular_events',
                        sport_id: 148
                    }
                },
                // LOL
                {
                    uniqueKey: 'gameTemplateOnlyLOL',
                    textKey: 'LOL',
                    linkName: 'gameTemplate',
                    permissionGroup: 'matchOpen',
                    permissionKey: 85,
                    params: {
                        template: 'regular_events',
                        sport_id: 85
                    }
                },
                // 冠軍賽
                {
                    uniqueKey: 'tournamentOpen',
                    textKey: '冠軍賽',
                    linkName: 'tournamentOpen',
                    permissionGroup: 'matchOpen',
                    permissionKey: 0,
                    params: {
                        template: 'tournaments',
                        sport_id: 0
                    }
                }
            ]
        },
        // // 風險監控
        // riskMonitor: {
        //     noSub: false,
        //     textKey: 'TEXT_RISK_MONITOR',
        //     permissionGroup: 'riskMonitor',
        //     sub: [
        //         // 即時注單
        //         {
        //             uniqueKey: 'realTimeWager',
        //             textKey: 'TEXT_REAL_TIME_WAGER',
        //             linkName: 'realTimeWager',
        //             permissionGroup: 'riskMonitor',
        //             permissionKey: 'realTimeWager',
        //             target: '_blank'
        //         },
        //         // 注單檢索
        //         {
        //             uniqueKey: 'wagerSearch',
        //             textKey: 'TEXT_WAGER_SEARCH',
        //             linkName: 'wagerSearch',
        //             permissionGroup: 'riskMonitor',
        //             permissionKey: 'wagerSearch'
        //         },
        //         // 報表(簡易)
        //         // {
        //         //     uniqueKey: 'reportSimple',
        //         //     textKey: 'TEXT_MATCH_REPORT',
        //         //     textKeyShort: 'TEXT_MATCH_REPORT',
        //         //     linkName: 'reportSimple',
        //         //     permissionKey: 'risk_monitor'
        //         // },
        //         // 新風控頁面
        //         {
        //             uniqueKey: 'derpyForecast',
        //             textKey: 'TEXT_FORECAST_RESULT',
        //             linkName: 'derpyForecast',
        //             target: '_blank',
        //             permissionGroup: 'riskMonitor',
        //             permissionKey: 'forecast'
        //         },
        //         // 取消注單
        //         {
        //             uniqueKey: 'cancelWager',
        //             textKey: 'TEXT_CANCEL_WAGER',
        //             linkName: 'cancelWager',
        //             permissionGroup: 'riskMonitor',
        //             permissionKey: 'cancelWager'
        //         },

        //         // 註銷紀錄
        //         {
        //             uniqueKey: 'cancelRecord',
        //             textKey: 'TEXT_CANCEL_RECORD',
        //             linkName: 'cancelRecord',
        //             permissionGroup: 'riskMonitor',
        //             permissionKey: 'cancelRecord'
        //         },

        //         // 賽程記錄
        //         {
        //             textKey: 'TEXT_GAME_CHANGES',
        //             permissionGroup: 'riskMonitor',
        //             permissionKey: 'operationRecord',
        //             hasSub: true,
        //             sub: [
        //                 {
        //                     uniqueKey: 'operationRecord',
        //                     textKey: 'TEXT_REGULAR_EVENT',
        //                     linkName: 'operationRecord',
        //                     permissionGroup: 'riskMonitor',
        //                     permissionKey: 'operationRecord'
        //                 },
        //                 {
        //                     uniqueKey: 'tournamentRecord',
        //                     textKey: 'TEXT_TOURNAMENT',
        //                     linkName: 'tournamentRecord',
        //                     permissionGroup: 'riskMonitor',
        //                     permissionKey: 'operationRecord'
        //                 }
        //             ]
        //         },
        //         // AC搜尋頁
        //         {
        //             uniqueKey: 'autoCloseSearch',
        //             textKey: 'TEXT_AUTO_CLOSE',
        //             linkName: 'autoCloseSearch',
        //             permissionGroup: 'riskMonitor',
        //             permissionKey: 'autoCloseSearch'
        //         }

        //     ]
        // },
        // // 比分輸入
        // scoreInput: {
        //     noSub: false,
        //     limit_mode: 'Y',
        //     textKey: 'TEXT_SCORE_INPUT',
        //     // 顯示所有球種
        //     allSport: true,
        //     permissionGroup: 'scoreInput',
        //     sub: [
        //         // 足球
        //         {
        //             uniqueKey: 'soccerScore',
        //             textKey: 'TEXT_FT',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 1,
        //             params: {
        //                 sport_id: 1
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 籃球
        //         {
        //             uniqueKey: 'basketballScore',
        //             textKey: 'TEXT_BK',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 2,
        //             params: {
        //                 sport_id: 2
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 美式足球
        //         {
        //             uniqueKey: 'footballScore',
        //             textKey: 'TEXT_FB',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 3,
        //             params: {
        //                 sport_id: 3
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 羽球
        //         {
        //             uniqueKey: 'badmintonScore',
        //             textKey: 'TEXT_FEATHER_BALL',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 9,
        //             params: {
        //                 sport_id: 9
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 棒球
        //         {
        //             uniqueKey: 'baseballScore',
        //             textKey: 'TEXT_BS',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 5,
        //             params: {
        //                 sport_id: 5
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 拳擊
        //         {
        //             uniqueKey: 'boxingScore',
        //             textKey: 'TEXT_BOXING',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 12,
        //             params: {
        //                 sport_id: 12
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 板球
        //         {
        //             uniqueKey: 'cricketScore',
        //             textKey: 'TEXT_CRICKET',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 30,
        //             params: {
        //                 sport_id: 30
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 飛鏢
        //         {
        //             uniqueKey: 'dartScore',
        //             textKey: 'TEXT_DART',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 24,
        //             params: {
        //                 sport_id: 24
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 高爾夫
        //         {
        //             uniqueKey: 'golfScore',
        //             textKey: 'TEXT_GOLF',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 21,
        //             params: {
        //                 sport_id: 21
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 手球
        //         {
        //             uniqueKey: 'handballScore',
        //             textKey: 'TEXT_HAND_BALL',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 18,
        //             params: {
        //                 sport_id: 18
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 冰上曲棍球
        //         {
        //             uniqueKey: 'hockeyScore',
        //             textKey: 'TEXT_ICE_BALL',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 6,
        //             params: {
        //                 sport_id: 6
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 賽車
        //         {
        //             uniqueKey: 'raceCarScore',
        //             textKey: 'TEXT_MOTOR_SPORTS',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 20,
        //             params: {
        //                 sport_id: 20
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 撞球
        //         {
        //             uniqueKey: 'snookerScore',
        //             textKey: 'TEXT_POOLBALL',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 10,
        //             params: {
        //                 sport_id: 10
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 桌球
        //         {
        //             uniqueKey: 'tableTennisScore',
        //             textKey: 'TEXT_PP',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 14,
        //             params: {
        //                 sport_id: 14
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 網球
        //         {
        //             uniqueKey: 'tennisScore',
        //             textKey: 'TEXT_TN',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 4,
        //             params: {
        //                 sport_id: 4
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 排球
        //         {
        //             uniqueKey: 'volleyballScore',
        //             textKey: 'TEXT_VB',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 7,
        //             params: {
        //                 sport_id: 7
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 電子競技
        //         {
        //             uniqueKey: 'eSportScore',
        //             textKey: 'TEXT_E_SPORT',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 8,
        //             params: {
        //                 sport_id: 8
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // CS：GO
        //         {
        //             uniqueKey: 'CSGOScore',
        //             textKey: 'TEXT_SPORT_83',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 83,
        //             params: {
        //                 sport_id: 83
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // Dota 2
        //         {
        //             uniqueKey: 'Dota2Score',
        //             textKey: 'TEXT_SPORT_84',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 84,
        //             params: {
        //                 sport_id: 84
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // KOG
        //         {
        //             uniqueKey: 'KOGScore',
        //             textKey: 'TEXT_SPORT_148',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 148,
        //             params: {
        //                 sport_id: 148
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // LOL
        //         {
        //             uniqueKey: 'LOLScore',
        //             textKey: 'TEXT_SPORT_85',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 85,
        //             params: {
        //                 sport_id: 85
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 電競足球
        //         {
        //             textKey: 'TEXT_E_SOCCER',
        //             uniqueKey: 'FIFAScore',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 133,
        //             params: {
        //                 sport_id: 133
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 電競籃球
        //         {
        //             textKey: 'TEXT_E_BASKETBALL',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 134,
        //             params: {
        //                 sport_id: 134
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         //  電競冰球
        //         {
        //             uniqueKey: 'eIceHockeyScore',
        //             textKey: 'TEXT_E_ICE_HOCKEY',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 161,
        //             params: {
        //                 sport_id: 161
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 電競網球
        //         {
        //             uniqueKey: 'eTennisScore',
        //             textKey: 'TEXT_E_TENNIS',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 160,
        //             params: {
        //                 sport_id: 160
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },

        //         // 電競排球
        //         {
        //             uniqueKey: 'eVolleyballScore',
        //             textKey: 'TEXT_E_VOLLEYBALL',
        //             linkName: 'scoreInputByPeriod',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 162,
        //             params: {
        //                 sport_id: 162
        //             },
        //             query: {
        //                 init: true
        //             }
        //         },
        //         // 冠軍賽
        //         {
        //             uniqueKey: 'tournamentScoreInput',
        //             textKey: 'TEXT_TOURNAMENT',
        //             linkName: 'tournamentScoreInput',
        //             permissionGroup: 'scoreInput',
        //             permissionKey: 0,
        //             params: {
        //                 sport_id: 0
        //             }
        //         }
        //     ]
        // },
        // // 預設參數
        // presetParam: {
        //     noSub: false,
        //     textKey: 'TEXT_PRESET_PARAM',
        //     permissionGroup: 'presetParam',
        //     sub: [
        //         // 參數名片
        //         {
        //             uniqueKey: 'paramCard',
        //             textKey: 'TEXT_PARAM_CARD',
        //             linkName: 'paramCard',
        //             permissionGroup: 'presetParam',
        //             permissionKey: 'paramCard'
        //         },
        //         // 聯盟套用
        //         {
        //             uniqueKey: 'leagueApply',
        //             textKey: 'TEXT_LEAGUE_APPLY',
        //             linkName: 'leagueApply',
        //             permissionGroup: 'presetParam',
        //             permissionKey: 'leagueApply'
        //         },
        //         // 秒進單設定
        //         {
        //             uniqueKey: 'periodBetSetting',
        //             textKey: 'TEXT_PERIOD_BET_SETTING',
        //             linkName: 'periodBetSetting',
        //             permissionGroup: 'presetParam',
        //             permissionKey: 'periodBetSetting'
        //         }
        //     ]
        // },
        // // 管理
        // manage: {
        //     noSub: false,
        //     textKey: 'TEXT_MANAGE',
        //     permissionGroup: 'manage',
        //     sub: [
        //         // 公告設定
        //         {
        //             uniqueKey: 'declarationSetting',
        //             textKey: 'TEXT_DECLARATION_SETTING',
        //             linkName: 'declarationSetting',
        //             permissionGroup: 'manage',
        //             permissionKey: 'announcements'
        //         },
        //         // 系統預設
        //         {
        //             uniqueKey: 'systemPreset',
        //             textKey: 'TEXT_SYSTEM_PRESET',
        //             linkName: 'systemPreset',
        //             permissionGroup: 'manage',
        //             permissionKey: 'systemPreset'
        //         },

        //         // 會員管理
        //         {
        //             uniqueKey: 'memberAccount',
        //             textKey: 'TEXT_MEMBER_ACCOUNT_MANAGEMENT',
        //             linkName: 'memberAccount',
        //             permissionGroup: 'manage',
        //             permissionKey: 'memberAccount'
        //         },
        //         // 會員標籤
        //         {
        //             uniqueKey: 'memberTag',
        //             textKey: 'TEXT_MEMBER_TAG',
        //             linkName: 'memberTag',
        //             permissionGroup: 'manage',
        //             permissionKey: 'memberTag'
        //         },
        //         // 聯盟排序
        //         {
        //             uniqueKey: 'leagueSortSetting',
        //             textKey: 'TEXT_LEAGUE_SORT_SETTING',
        //             linkName: 'leagueSortSetting',
        //             permissionGroup: 'manage',
        //             permissionKey: 'leagueSortSetting'
        //         },
        //         // 自動比分輸入設定
        //         {
        //             uniqueKey: 'autoScoreSettle',
        //             textKey: 'TEXT_AUTOMATICALLY_SCORE_SETTLEMENT',
        //             linkName: 'autoScoreSettle',
        //             permissionGroup: 'manage',
        //             permissionKey: 'autoScoreSettle'
        //         },
        //         // 自動開放賽事設定
        //         {
        //             uniqueKey: 'autoGameOpenSettle',
        //             textKey: 'TEXT_AUTOMATICALLY_GAME_OPEN',
        //             linkName: 'autoGameOpenSettle',
        //             permissionGroup: 'manage',
        //             permissionKey: 'autoGameOpenSettle'
        //         },
        //         // 風控設定
        //         {
        //             uniqueKey: 'riskManager',
        //             textKey: 'TEXT_LIVE_SLIP_REJECT_SETTING',
        //             linkName: 'riskManager',
        //             permissionGroup: 'manage',
        //             permissionKey: 'riskManager'
        //         },
        //         // XBB球種與玩法列表
        //         {
        //             uniqueKey: 'sportTypeManage',
        //             textKey: 'TEXT_XBB_SPORT_AND_BET_TYPE_LIST',
        //             linkName: 'sportTypeManage',
        //             permissionGroup: 'manage',
        //             permissionKey: 'sportTypeManage'
        //         },
        //         // 注單顏色設定
        //         {
        //             uniqueKey: 'wagerColorSetting',
        //             textKey: 'TEXT_WAGER_COLOR_SETTING',
        //             linkName: 'wagerColorSetting',
        //             permissionGroup: 'manage',
        //             permissionKey: 'wagerColorSetting'
        //         }
        //         /*
        //                         // 帳號權限
        //                         {
        //                             uniqueKey: 'accountAuthority',
        //                             textKey: 'TEXT_ACCOUNT_AUTHORITY',
        //                             textKeyShort: 'TEXT_ACCOUNT_AUTHORITY',
        //                             linkName: 'accountAuthority'
        //                         }
        //         */
        //     ]
        // },
        // // 報表
        // report: {
        //     noSub: false,
        //     textKey: 'TEXT_REPORT',
        //     permissionGroup: 'report',
        //     sub: [
        //         // 特殊會員標籤
        //         {
        //             uniqueKey: 'customerReport',
        //             textKey: 'TEXT_SPECIAL_CUSTOMER_REPORT',
        //             linkName: 'customerReport',
        //             permissionGroup: 'report',
        //             permissionKey: 'customerReport'
        //         },
        //         // 聯盟報表
        //         {
        //             uniqueKey: 'leagueReport',
        //             textKey: 'TEXT_LEAGUE_REPORT',
        //             linkName: 'leagueReport',
        //             permissionGroup: 'report',
        //             permissionKey: 'leagueReport'
        //         },
        //         // 過關單報表
        //         {
        //             uniqueKey: 'comboReport',
        //             textKey: 'TEXT_COMBO_REPORT',
        //             linkName: 'comboReport',
        //             permissionGroup: 'report',
        //             permissionKey: 'comboReport'
        //         },
        //         // 分類帳目明細報表
        //         {
        //             uniqueKey: 'detailReport',
        //             textKey: 'TEXT_DETAIL_REPORT',
        //             linkName: 'detailReport',
        //             permissionGroup: 'report',
        //             permissionKey: 'detailReport'
        //         },
        //         // 玩法分類帳目報表
        //         {
        //             uniqueKey: 'betTypeReport',
        //             textKey: 'TEXT_BET_TYPE_REPORT',
        //             linkName: 'betTypeReport',
        //             permissionGroup: 'report',
        //             permissionKey: 'betTypeReport'
        //         }
        //     ]
        // },
        // // 後台->工程師專用頁籤
        // backend: {
        //     noSub: false,
        //     textKey: 'TEXT_BACKEND',
        //     permissionGroup: 'backend',
        //     sub: [
        //         // 玩法注項管理頁面
        //         {
        //             uniqueKey: 'betTypeSetting',
        //             textKey: 'TEXT_BET_TYPE_SETTING',
        //             linkName: 'betTypeSetting',
        //             permissionGroup: 'backend',
        //             permissionKey: 'betTypeSetting'
        //         }
        //     ]
        // }
    }
};
