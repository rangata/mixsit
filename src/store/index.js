import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    posts: [
      {
        title: 'Стоматологичен юнит Tekmil, модел Epica',
        subtitle: 'горно окачеване на шланговете',
        model: 'Epica',
        productDescription: [
          {
            section: 'Работен пулт на стоматолога',
            parameters: [
              {
                name: 'Трипътна ръкохватка Spree/въздух/вода Luzzani Италия',
              },
              {
                name: '4 шлауха с изводи на Борден – 2 или Мидуест'
              },
              {
                name: 'Подвижна помощна масичка с автоклавируема силиконова подложка'
              },
              {
                name: 'Подвижна поставка за наконечниците с автоклавируема силиконова подложка'
              },
              {
                name: 'Пневматична спирачка'
              },

            ],
          },
          {
            section: 'Основен пулт за управление',
            parameters: [
              {
                name: 'Сензори  за  управление  на  стола  и  облегалката,  плювалника и чашката, осветителното тяло и негативоскопа'
              },
              {
                name:'Система за автоматично връщане на стола в първоначална позиция'
              },
              {
                name: 'Негативоскоп'
              },

            ]
          }
        ],
        pictures: [
          {
            link: 'https://www.dentaconbg.com/wp-content/uploads/2014/11/stomatologichen-stol-s-gorno-okachvane-tekmil-epica1.jpg',
            description: ''
          }
        ],
        possibleOptions: [
          {
            title: 'Обратен наконечник Synea Vision обратен наконечник',
            manufacturer: 'W&H - Австрия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/handpieces/synea/vision/synea-vision-wk-99-lt-zoom-image.png',
            ],
            link: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#synea_vision_',
            model: 'WG-991 LT',
            ref: 'REF 30023000',
            description: 'Обратен наконечник 1:5,' +
              ' 5-флексен спрей, размер на главата Ø 9.5 mm, пуш бутон, ' +
              'за турбинни борери с опашка Ø 1.6 mm, светловод',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'компактен светловод'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 9.1 / Ø 9.5 mm'
              },
              {
                title: 'Височина на главата',
                value: '21.2 mm / 21.6 mm(с борер 19 mm)'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:4.5 / 1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '40,000 rpm'
              },
              {
                title: 'Maкс. диаметър на работната част: \n\n Maкс. дължина:',
                value: '2 / 2.5 mm\n' +
                  '21 / 25 mm'
              },
              {
                title: 'Спрей',
                value: '5-флексен (> 50ml/min)'
              },
              {
                title: 'Интензитет на осветяване:',
                value: '25,000 Lux'
              }
            ],
            category: 'Обратни наконечници'
          }
        ]
      },
      {
        title: 'Стоматологичен юнит Tekmil, модел Correcta',
        model: 'Correcta',

        subtitle: 'горно окачеване на шланговете',
        productDescription: [
          {
            section: 'Работен пулт на стоматолога',
            parameters: [
              {
                name: 'Трипътна ръкохватка Spree/въздух/вода Luzzani Италия',
              },
              {
                name: '4 шлауха с изводи на Борден – 2 или Мидуест'
              },
              {
                name: 'Подвижна помощна масичка с автоклавируема силиконова подложка'
              },
              {
                name: 'Подвижна поставка за наконечниците с автоклавируема силиконова подложка'
              },
              {
                name: 'Пневматична спирачка'
              },

            ],
          },
          {
            section: 'Основен пулт за управление',
            parameters: [
              {
                name: 'Сензори  за  управление  на  стола  и  облегалката,  плювалника и чашката, осветителното тяло и негативоскопа'
              },
              {
                name:'Система за автоматично връщане на стола в първоначална позиция'
              },
              {
                name: 'Негативоскоп'
              },

            ]
          }
        ],
        pictures: [
          {
            link: 'https://www.dentaconbg.com/wp-content/uploads/2014/11/stomatologichen-unit-i-stol-tekmil-correcta-gorno-okachvane1.jpg',
            description: ''
          }
        ],
        possibleOptions: [
          {
            title: 'Обратен наконечник Synea Vision обратен наконечник',
            manufacturer: 'W&H - Австрия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/handpieces/synea/vision/synea-vision-wk-99-lt-zoom-image.png',
            ],
            link: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#synea_vision_',
            model: 'WG-99 LT',
            ref: 'REF 30023000',
            description: 'Обратен наконечник 1:5,' +
              ' 5-флексен спрей, размер на главата Ø 9.5 mm, пуш бутон, ' +
              'за турбинни борери с опашка Ø 1.6 mm, светловод',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'компактен светловод'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 9.1 / Ø 9.5 mm'
              },
              {
                title: 'Височина на главата',
                value: '21.2 mm / 21.6 mm(с борер 19 mm)'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:4.5 / 1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '40,000 rpm'
              },
              {
                title: 'Maкс. диаметър на работната част: \n\n Maкс. дължина:',
                value: '2 / 2.5 mm\n' +
                  '21 / 25 mm'
              },
              {
                title: 'Спрей',
                value: '5-флексен (> 50ml/min)'
              },
              {
                title: 'Интензитет на осветяване:',
                value: '25,000 Lux'
              }
            ],
            category: 'Обратни наконечници'
          }
        ]
      },
      {
        title: 'Стоматологичен юнит Tekmil, модел Correcta S',
        subtitle: 'горно окачеване на шланговете',
        productDescription: [
          {
            section: 'Работен пулт на стоматолога',
            parameters: [
              {
                name: 'Трипътна ръкохватка Spree/въздух/вода Luzzani Италия',
              },
              {
                name: '4 шлауха с изводи на Борден – 2 или Мидуест'
              },
              {
                name: 'Подвижна помощна масичка с автоклавируема силиконова подложка'
              },
              {
                name: 'Подвижна поставка за наконечниците с автоклавируема силиконова подложка'
              },
              {
                name: 'Пневматична спирачка'
              },

            ],
          },
          {
            section: 'Основен пулт за управление',
            parameters: [
              {
                name: 'Сензори  за  управление  на  стола  и  облегалката,  плювалника и чашката, осветителното тяло и негативоскопа'
              },
              {
                name:'Система за автоматично връщане на стола в първоначална позиция'
              },
              {
                name: 'Негативоскоп'
              },

            ]
          }
        ],
        model: 'CorrectaS',
        pictures: [
          {
            link: 'https://lh3.googleusercontent.com/tjThkW9MpMbmNjRW3wbkVqVZLm-k6qmqTeNJgFFX7352p74GX8zn-4Au7KcoKiYasd3IXj3RZxOGsW2WGUEyYDGDSDIVCQ4cT-Qy2FnVY10ryFz4WEq-bNzioxeS6jc4MuX6uz5n2tW2lN_W0nvh475hYa7orrt3MZbGl5RqDuiyT9FJxfZp0__zQip9OsoZ2d609xCoonp0ZEjt4RpoIQHrMdwKNWNPVro8sfFh9VFZwEF7YPEPFu-eZ2YRs7Aokzq6QvJ0VsWChP7XQr5JP0idLWduLr8pB065LRORm8TWvlmUP1aTDjMEyuvfYQiUHwnvkD6Fz6iH2pOcY_oZiik21KNoctUu1wlGpK-5cdv9P2DuiTmwYf222Z88C6eGb4ARtvGuof5zoY3drfTk3kLwxyBHqC1hbv0LXSV0nQ-VSKqhZY8IttTpjcXeR_NjV7tbhUWFE6ftf1fVm3uxeJiWfAj7TDh7A5VcJS700kSsLZpnGZ9w4T6GwLtwLDX8deO6KF2WBAI5573iAXuX6qeky2aAcpZ807GARKmsqqJx53LP6Y0ycSchsqFbgVC1HdO1UKJsBrcb52R0f_ApjxUlghGeUnH3=w320-h200-k',
            description: ''
          }
        ],
        possibleOptions: [
          {
            title: 'Обратен наконечник Synea Vision обратен наконечник',
            manufacturer: 'W&H - Австрия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/handpieces/synea/vision/synea-vision-wk-99-lt-zoom-image.png',
            ],
            link: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#synea_vision_',
            model: 'WG-99 LT',
            ref: 'REF 30023000',
            description: 'Обратен наконечник 1:5,' +
              ' 5-флексен спрей, размер на главата Ø 9.5 mm, пуш бутон, ' +
              'за турбинни борери с опашка Ø 1.6 mm, светловод',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'компактен светловод'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 9.1 / Ø 9.5 mm'
              },
              {
                title: 'Височина на главата',
                value: '21.2 mm / 21.6 mm(с борер 19 mm)'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:4.5 / 1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '40,000 rpm'
              },
              {
                title: 'Maкс. диаметър на работната част: \n\n Maкс. дължина:',
                value: '2 / 2.5 mm\n' +
                  '21 / 25 mm'
              },
              {
                title: 'Спрей',
                value: '5-флексен (> 50ml/min)'
              },
              {
                title: 'Интензитет на осветяване:',
                value: '25,000 Lux'
              }
            ],
            category: 'Обратни наконечници'
          }
        ]
      },
      {
        title: 'Стоматологичен юнит Tekmil, модел Diverso',
        model: 'Diverso',
        subtitle: 'долно окачеване на шланговете',
        productDescription: [
          {
            section: 'Работен пулт на стоматолога',
            parameters: [
              {
                name: 'Трипътна ръкохватка Spree/въздух/вода Luzzani Италия',
              },
              {
                name: '4 шлауха с изводи на Борден – 2 или Мидуест'
              },
              {
                name: 'Подвижна помощна масичка с автоклавируема силиконова подложка'
              },
              {
                name: 'Подвижна поставка за наконечниците с автоклавируема силиконова подложка'
              },
              {
                name: 'Пневматична спирачка'
              },

            ],
          },
          {
            section: 'Основен пулт за управление',
            parameters: [
              {
                name: 'Сензори  за  управление  на  стола  и  облегалката,  плювалника и чашката, осветителното тяло и негативоскопа'
              },
              {
                name:'Система за автоматично връщане на стола в първоначална позиция'
              },
              {
                name: 'Негативоскоп'
              },

            ]
          }
        ],
        pictures: [
          {
            link: 'https://www.dentaconbg.com/wp-content/uploads/2017/06/dentalen-unit-s-gorno-okachvane-tekmil-diverso.jpg',
            description: ''
          }
        ],
        possibleOptions: [
          {
            title: 'Обратен наконечник Synea Vision',
            manufacturer: 'W&H - Австрия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/handpieces/synea/vision/synea-vision-wk-99-lt-zoom-image.png',
            ],
            link: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#synea_vision_',
            model: 'WK-93 LT / WK-93 LT S /WK-99 LT / WK-99 LT S',
            ref: 'REF 30023000',
            description: 'Обратен наконечник 1:5,\n' +
              '5-флексен спрей, размер на главата Ø 9.5 mm, пуш бутон,\n' +
              'за турбинни борери с опашка Ø 1.6 mm, светловод',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'компактен светловод'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 9.1 / Ø 9.5 mm'
              },
              {
                title: 'Височина на главата',
                value: '21.2 mm / 21.6 mm(с борер 19 mm)'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:4.5 / 1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '40,000 rpm'
              },
              {
                title: 'Maкс. диаметър на работната част:  Maкс. дължина:',
                value: '2 / 2.5 mm\n' +
                  '21 / 25 mm'
              },
              {
                title: 'Спрей',
                value: '5-флексен (> 50ml/min)'
              },
              {
                title: 'Интензитет на осветяване:',
                value: '25,000 Lux'
              }
            ],
            infoSource: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#_',
            sourceDate: '12.11.2018',
            category: 'Обратни наконечници Synea Vision'
          },
          {
            title: 'Обратен наконечник Synea Vision',
            manufacturer: 'W&H - Австрия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/handpieces/synea/vision/synea-vision-wk-99-lt-zoom-image.png',
            ],
            link: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#synea_vision_',
            model: 'WK-93 LT / WK-93 LT S /WK-99 LT / WK-99 LT S',
            ref: 'REF 30023000',
            description: 'Обратен наконечник 1:4.5,' +
              ' 5-флексен спрей, размер на главата Ø 9.5 mm, пуш бутон, ' +
              'за турбинни борери с опашка Ø 1.6 mm, светловод',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'компактен светловод'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 9.1 / Ø 9.5 mm'
              },
              {
                title: 'Височина на главата',
                value: '21.2 mm / 21.6 mm(с борер 19 mm)'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:4.5 / 1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '40,000 rpm'
              },
              {
                title: 'Maкс. диаметър на работната част: \n\n Maкс. дължина:',
                value: '2 / 2.5 mm\n' +
                  '21 / 25 mm'
              },
              {
                title: 'Спрей',
                value: '5-флексен (> 50ml/min)'
              },
              {
                title: 'Интензитет на осветяване:',
                value: '25,000 Lux'
              }
            ],
            infoSource: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#_',
            sourceDate: '12.11.2018',
            category: 'Обратни наконечници Synea Vision'
          },

          {
            title: 'Обратен наконечник Synea Vision',
            manufacturer: 'W&H - Австрия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/handpieces/synea/vision/synea-vision-wk-99-lt-zoom-image.png',
            ],
            link: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#synea_vision_',
            model: 'WG-99 LT',
            ref: 'REF 30023000',
            description: 'Обратен наконечник 8:1,' +
              ' 5-флексен спрей, размер на главата Ø 9.5 mm, пуш бутон, ' +
              'за турбинни борери с опашка Ø 1.6 mm, светловод',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'компактен светловод'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 9.1 / Ø 9.5 mm'
              },
              {
                title: 'Височина на главата',
                value: '21.2 mm / 21.6 mm(с борер 19 mm)'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:4.5 / 1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '40,000 rpm'
              },
              {
                title: 'Maкс. диаметър на работната част: \n\n Maкс. дължина:',
                value: '2 / 2.5 mm\n' +
                  '21 / 25 mm'
              },
              {
                title: 'Спрей',
                value: '5-флексен (> 50ml/min)'
              },
              {
                title: 'Интензитет на осветяване:',
                value: '25,000 Lux'
              }
            ],
            infoSource: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#_',
            sourceDate: '12.11.2018',
            category: 'Обратни наконечници Synea Vision'
          },
          {
            title: 'Обратен наконечник Synea Fusion',
            manufacturer: 'W&H - Австрия',
            pictures: [
                'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/handpieces/synea/fusion/product-wg-99-lt.png'
            ],
            link: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#synea_vision_',
            model: 'WG-99 LT / WG-99 A',
            ref: 'REF 30007000',
            description: 'Обратен наконечник 1:5,' +
              ' 5-флексен спрей, размер на главата Ø 9.5 mm, пуш бутон, ' +
              'за турбинни борери с опашка Ø 1.6 mm, светловод',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'компактен светловод / без'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 9.5 mm'
              },
              {
                title: 'Височина на главата',
                value: '22.5 mm (с борер 19 mm)'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '40,000 rpm'
              },
              {
                title: 'Maкс. диаметър на работната част: \n\n Maкс. дължина:',
                value: '2.5 mm ; 25 mm'
              },
              {
                title: 'Спрей',
                value: '4-флексен (> 50ml/min)'
              },
              {
                title: 'Интензитет на осветяване:',
                value: '25,000 Lux'
              }
            ],
            category: 'Обратни наконечници Synea Fusion'
          },

          {
            title: 'Обратен наконечник Synea Vision',
            manufacturer: 'W&H - Австрия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/handpieces/synea/vision/synea-vision-wk-99-lt-zoom-image.png',
            ],
            link: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#synea_vision_',
            model: 'WK-56 LT / WK-56 LT S',
            ref: 'REF 30023000',
            description: 'Обратен наконечник 1:1,' +
              ' 5-флексен спрей, размер на главата Ø 9.5 mm, пуш бутон, ' +
              'за турбинни борери с опашка Ø 1.6 mm, светловод',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'компактен светловод'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 9.1 / Ø 9.5 mm'
              },
              {
                title: 'Височина на главата',
                value: '21.2 mm / 21.6 mm(с борер 19 mm)'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:4.5 / 1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '40,000 rpm'
              },
              {
                title: 'Maкс. диаметър на работната част: \n\n Maкс. дължина:',
                value: '2 / 2.5 mm\n' +
                  '21 / 25 mm'
              },
              {
                title: 'Спрей',
                value: '5-флексен (> 50ml/min)'
              },
              {
                title: 'Интензитет на осветяване:',
                value: '25,000 Lux'
              }
            ],
            infoSource: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#_',
            sourceDate: '12.11.2018',
            category: 'Микромотори'
          },
          {
            title: 'Обратен наконечник Synea Vision',
            manufacturer: 'W&H - Австрия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/handpieces/synea/vision/synea-vision-wk-99-lt-zoom-image.png',
            ],
            link: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#synea_vision_',
            model: 'HK-43 LT',
            ref: 'REF 30023000',
            description: 'Обратен наконечник 1:1,' +
              '5-флексен спрей, размер на главата Ø 9.5 mm, пуш бутон, ' +
              'за турбинни борери с опашка Ø 1.6 mm, светловод',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'компактен светловод'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 9.1 / Ø 9.5 mm'
              },
              {
                title: 'Височина на главата',
                value: '21.2 mm / 21.6 mm(с борер 19 mm)'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:4.5 / 1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '40,000 rpm'
              },
              {
                title: 'Maкс. диаметър на работната част: \n\n Maкс. дължина:',
                value: '2 / 2.5 mm\n' +
                  '21 / 25 mm'
              },
              {
                title: 'Спрей',
                value: '5-флексен (> 50ml/min)'
              },
              {
                title: 'Интензитет на осветяване:',
                value: '25,000 Lux'
              }
            ],
            category: 'Микромотори'
          },
          {
            title: 'Турбина Synea Vision',
            manufacturer: 'W&H - Австрия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/turbines/synea/vision/product_tk_97_l.png',
            ],
            link: '',
            model: 'TK-100 L / TK-100 LM',
            ref: '',
            description: 'Иновативна технология и широка продуктова гама за най-високите изисквания.',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'LED+ пръстен/светловод'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 13 mm'
              },
              {
                title: 'Височина на главата',
                value: '21.4 (с борер 19 mm)'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:4.5 / 1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '330,000 rpm'
              },
            ],
            category: 'Турбини'
          },
          {
            title: 'Турбина с LED светлина Synea Vision',
            manufacturer: 'W&H - Австрия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/turbines/synea/vision/product_tk_97_l.png',
            ],
            link: '',
            model: 'TK-100 L / TK-100 LM',
            ref: '',
            description: 'Иновативна технология и широка продуктова гама за най-високите изисквания.Оптимално поле на осветяване с LED+ Оптимален достъп и зрително поле, голяма мощност с перфектен размер на главатаСигурно охлаждане чрез 4-флексен спрей',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'LED+ пръстен/светловод'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 13 mm'
              },
              {
                title: 'Височина на главата',
                value: '21.4 (с борер 19 mm)'
              },
              {
                title: 'Maкс. обороти',
                value: '330,000 rpm'
              },
            ],
            category: 'Турбини'
          },
          {
            title: 'Обратен наконечник Synea Vision',
            manufacturer: 'W&H - Австрия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/handpieces/synea/vision/synea-vision-wk-99-lt-zoom-image.png',
            ],
            link: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#synea_vision_',
            model: 'WG-99 LT',
            ref: 'REF 30023000',
            description: 'Обратен наконечник 1:5,' +
              ' 5-флексен спрей, размер на главата Ø 9.5 mm, пуш бутон, ' +
              'за турбинни борери с опашка Ø 1.6 mm, светловод',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'компактен светловод'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 9.1 / Ø 9.5 mm'
              },
              {
                title: 'Височина на главата',
                value: '21.2 mm / 21.6 mm(с борер 19 mm)'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:4.5 / 1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '40,000 rpm'
              },
              {
                title: 'Maкс. диаметър на работната част: \n\n Maкс. дължина:',
                value: '2 / 2.5 mm\n' +
                  '21 / 25 mm'
              },
              {
                title: 'Спрей',
                value: '5-флексен (> 50ml/min)'
              },
              {
                title: 'Интензитет на осветяване:',
                value: '25,000 Lux'
              }
            ],
            category: 'Микромотори'
          },
          {
            title: 'Обратен наконечник Synea Vision',
            manufacturer: 'W&H - Австрия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/handpieces/synea/vision/synea-vision-wk-99-lt-zoom-image.png',
            ],
            link: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#synea_vision_',
            model: 'WK-66 LT / WK-66 LT S/ WK-86 LT',
            ref: 'REF 30023000',
            description: 'Обратен наконечник 2:1,' +
              ' 5-флексен спрей, размер на главата Ø 9.5 mm, пуш бутон, ' +
              'за турбинни борери с опашка Ø 1.6 mm, светловод',
            optionFeatures: [
              {
                title: 'Светлина',
                value: 'компактен светловод'
              },
              {
                title: 'Размер на главата',
                value: 'Ø 9.1 / Ø 9.5 mm'
              },
              {
                title: 'Височина на главата',
                value: '21.2 mm / 21.6 mm(с борер 19 mm)'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:4.5 / 1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '40,000 rpm'
              },
              {
                title: 'Maкс. диаметър на работната част: \n\n Maкс. дължина:',
                value: '2 / 2.5 mm\n' +
                  '21 / 25 mm'
              },
              {
                title: 'Спрей',
                value: '5-флексен (> 50ml/min)'
              },
              {
                title: 'Интензитет на осветяване:',
                value: '25,000 Lux'
              }
            ],
            infoSource: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#_',
            sourceDate: '12.11.2018',
            category: 'Микромотори'
          },
          {
            title: 'Безмаслен компресор MGF',
            manufacturer: 'MGF - Италия',
            pictures: [
              'https://www.wh.com/mam/images/whcom/global/products/restoration-prosthetics/handpieces/synea/fusion/product-wg-99-lt.png'
            ],
            link: 'https://www.wh.com/bg_bulgaria/dental-products/restoration-prosthetics/handpieces/synea/#synea_vision_',
            model: '20/15 минибокс',
            ref: 'REF 30007000',
            description: 'Безмаслен компресор от фирма МГФ Италия',
            optionFeatures: [
              {
                title: 'Дебит',
                value: '155'
              },
              {
                title: 'Размери',
                value: '255 х 303 х 401 mm'
              },
              {
                title: 'Височина на главата',
                value: '2809'
              },
              {
                title: 'Предавателно съотношение',
                value: '1:5'
              },
              {
                title: 'Maкс. обороти',
                value: '40,000 rpm'
              },
              {
                title: 'Maкс. диаметър на работната част: \n\n Maкс. дължина:',
                value: '2.5 mm ; 25 mm'
              },
              {
                title: 'Спрей',
                value: '4-флексен (> 50ml/min)'
              },
              {
                title: 'Интензитет на осветяване:',
                value: '25,000 Lux'
              }
            ],
            category: 'Безмаслени компресори'
          }
        ]
      },


    ],
    selectedChair: '',
    chosenOptions: [],
    customer: {
      name:'',
      lastname: '',
      phone:'',
      mobile:''
    }
  },
  mutations: {
    selectChair(state, value) {
      return state.selectedChair = value
    },
    selectedOptions(state,value) {
      return state.chosenOptions = value
    }
  },
  actions: {}
})
