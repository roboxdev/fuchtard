import React from 'react';
import {render} from 'react-dom';

import {Header} from './components/header';
import {Footer} from './components/footer';
import {Cart} from './components/cart';
import {SEOAbout} from './components/seoabout';

const food_data = [
    {
        "id": 2,
        "food_itemsy": [
            {
                "id": 5,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Кядя комплекс",
                "photo": "http://127.0.0.1:8000/media/food_items/food4.jpg",
                "description": "Суп и кя хе",
                "raw_price": 2800,
                "category": 2,
                "tags": []
            },
            {
                "id": 6,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Утка с овощами",
                "photo": "http://127.0.0.1:8000/media/food_items/food5.jpg",
                "description": "Филе утки, болгарский перец, морковь и лук",
                "raw_price": 1400,
                "category": 2,
                "tags": []
            },
            {
                "id": 7,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Тубу кимчи",
                "photo": "http://127.0.0.1:8000/media/food_items/food6.jpg",
                "description": "Тубу, жареный кичи соус(острое)",
                "raw_price": 1990,
                "category": 2,
                "tags": []
            },
            {
                "id": 8,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Джеюк поккым",
                "photo": "http://127.0.0.1:8000/media/food_items/food7.jpg",
                "description": "Маринованные в остро-сладком соусе кусочки говядины, обжаренные с болгарским перцем, репчатым луком и морковью.",
                "raw_price": 1990,
                "category": 2,
                "tags": []
            },
            {
                "id": 9,
                "visible": true,
                "enabled": true,
                "position": 4,
                "title": "Скумбрия жаренная",
                "photo": "http://127.0.0.1:8000/media/food_items/food8.jpg",
                "description": "Кусочки скумбрии, обжаренные до аппетитной золотистой корочки. Украшается дольками лимона.",
                "raw_price": 1680,
                "category": 2,
                "tags": []
            },
            {
                "id": 10,
                "visible": true,
                "enabled": true,
                "position": 5,
                "title": "Мясо по-тайски (Курица)",
                "photo": "http://127.0.0.1:8000/media/food_items/food9.jpg",
                "description": "Нежные кусочки куринго филе , обжаренные с болгарским перцем, репчатым луком, Огурец, помидорами, чесноком и специями.",
                "raw_price": 1580,
                "category": 2,
                "tags": []
            },
            {
                "id": 11,
                "visible": true,
                "enabled": true,
                "position": 6,
                "title": "Мясо по-тайски (Говядина)",
                "photo": "http://127.0.0.1:8000/media/food_items/food10.jpg",
                "description": "Нежные кусочки говядины , обжаренные с болгарским перцем, репчатым луком, Огурец, помидорами, чесноком и специями.",
                "raw_price": 1580,
                "category": 2,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 0,
        "expanded": true,
        "title": "Корейская кухня - Горячее",
        "slug": "korejskaya-kuhnya-goryachee"
    },
    {
        "id": 3,
        "food_itemsy": [
            {
                "id": 13,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Кукси",
                "photo": "http://127.0.0.1:8000/media/food_items/food12.jpg",
                "description": "Корейская лапша с жареным  мясом говядины, яичным блинчиком, свежими огурцами, помидорами и капустой. Подается в холодномс острой приправой.",
                "raw_price": 1340,
                "category": 3,
                "tags": []
            },
            {
                "id": 12,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Рамен",
                "photo": "http://127.0.0.1:8000/media/food_items/food11.jpg",
                "description": "",
                "raw_price": 850,
                "category": 3,
                "tags": []
            },
            {
                "id": 14,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Кядя суп",
                "photo": "http://127.0.0.1:8000/media/food_items/food13.jpg",
                "description": "Корейский суп",
                "raw_price": 1400,
                "category": 3,
                "tags": []
            },
            {
                "id": 15,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Кимчи тиге",
                "photo": "http://127.0.0.1:8000/media/food_items/food14.jpg",
                "description": "Острый суп из говядины с добавлением корейской капусты, грибов Шитаки и кусочков соевого творога Тубу. Подается с отварным рисом (паби).",
                "raw_price": 1680,
                "category": 3,
                "tags": []
            },
            {
                "id": 16,
                "visible": true,
                "enabled": true,
                "position": 4,
                "title": "Юккедянг",
                "photo": "http://127.0.0.1:8000/media/food_items/food15.jpg",
                "description": "Острый суп из говядины с добавлением папоротника, грибов, фунчозы, проросших бобов и яйца. Подается с отварным рисом (паби).",
                "raw_price": 1680,
                "category": 3,
                "tags": []
            },
            {
                "id": 17,
                "visible": true,
                "enabled": true,
                "position": 5,
                "title": "Тыби тяй",
                "photo": "http://127.0.0.1:8000/media/food_items/food16.jpg",
                "description": "Корейский суп на основе соевой пасты с добавлением овощей, кусочков соевого творога Тубу и мясом ( говядина).",
                "raw_price": 1380,
                "category": 3,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 1,
        "expanded": true,
        "title": "Корейская кухня - Супы",
        "slug": "korejskaya-kuhnya-supy"
    },
    {
        "id": 1,
        "food_itemsy": [
            {
                "id": 4,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Хе из куриных желудков",
                "photo": "http://127.0.0.1:8000/media/food_items/food3.jpg",
                "description": "Закуска из куриных желудков, моркови и репчатого лука.",
                "raw_price": 990,
                "category": 1,
                "tags": []
            },
            {
                "id": 3,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Хе из рыбы",
                "photo": "http://127.0.0.1:8000/media/food_items/food2.jpg",
                "description": "Кусочки рыбы (Судак),маринованные в острых специях с луком,болгарским перцем,моркови, чесноком и уксусом.",
                "raw_price": 1290,
                "category": 1,
                "tags": []
            },
            {
                "id": 2,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Кимчи",
                "photo": "http://127.0.0.1:8000/media/food_items/food1.jpg",
                "description": "Острая закуска из маринованной хрустящей корейской капусты.",
                "raw_price": 780,
                "category": 1,
                "tags": [
                    1
                ]
            },
            {
                "id": 1,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Кя хе",
                "photo": "http://127.0.0.1:8000/media/food_items/food0.jpg",
                "description": "Острая закуска",
                "raw_price": 1500,
                "category": 1,
                "tags": [
                    1
                ]
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 2,
        "expanded": true,
        "title": "Корейская кухня - Салаты",
        "slug": "korejskaya-kuhnya-salaty"
    },
    {
        "id": 4,
        "food_itemsy": [],
        "visible": true,
        "enabled": false,
        "position": 3,
        "expanded": true,
        "title": "Пицца",
        "slug": "pizza"
    },
    {
        "id": 6,
        "food_itemsy": [
            {
                "id": 32,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Говядина филе",
                "photo": "http://127.0.0.1:8000/media/food_items/food31.jpg",
                "description": "2 палочки шашлыка на шпажках, заправленный лук   и шашлычный соус",
                "raw_price": 750,
                "category": 6,
                "tags": []
            },
            {
                "id": 33,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Баранина филе",
                "photo": "http://127.0.0.1:8000/media/food_items/food32.jpg",
                "description": "2 палочки шашлыка на шпажках, заправленный лук   и шашлычный соус",
                "raw_price": 750,
                "category": 6,
                "tags": []
            },
            {
                "id": 34,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Утиное филе",
                "photo": "http://127.0.0.1:8000/media/food_items/food33.jpg",
                "description": "2 палочки шашлыка на шпажках, заправленный лук   и шашлычный соус",
                "raw_price": 550,
                "category": 6,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 4,
        "expanded": true,
        "title": "Шашлыки",
        "slug": "shashlyki"
    },
    {
        "id": 5,
        "food_itemsy": [
            {
                "id": 18,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Мини сет 32шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food17.jpg",
                "description": "хос с лососем, хос с угрем, хос с огурцом, хос с авокадо",
                "raw_price": 2279,
                "category": 5,
                "tags": []
            },
            {
                "id": 19,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Спайси сет 19 шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food18.jpg",
                "description": "Острый гункан угорь\nСенсей\nОстрый хосомаки с лососем",
                "raw_price": 2639,
                "category": 5,
                "tags": []
            },
            {
                "id": 20,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Калифорния сет 36шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food19.jpg",
                "description": "калифорния с лососем, калифорния с угрем, калиф с крабом, калифорния с креветками",
                "raw_price": 4794,
                "category": 5,
                "tags": []
            },
            {
                "id": 21,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Филадельфия сет 36шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food20.jpg",
                "description": "фил с огурцом, фил с угрем, фила с тобико, филадельфия",
                "raw_price": 4554,
                "category": 5,
                "tags": []
            },
            {
                "id": 22,
                "visible": true,
                "enabled": true,
                "position": 4,
                "title": "Сет «Smokie» 34 шт.",
                "photo": "http://127.0.0.1:8000/media/food_items/food21.jpg",
                "description": "Фила\nСливочный угорь\nХос. огурец\nХос. Лосось",
                "raw_price": 4194,
                "category": 5,
                "tags": []
            },
            {
                "id": 23,
                "visible": true,
                "enabled": true,
                "position": 5,
                "title": "Теплый сет 36шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food22.jpg",
                "description": "Америка, Темпура, Мураками, Чиз Эби",
                "raw_price": 4794,
                "category": 5,
                "tags": []
            },
            {
                "id": 24,
                "visible": true,
                "enabled": true,
                "position": 6,
                "title": "Сет «Трио» 27 шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food23.jpg",
                "description": "Фила классик\nФила Раунд\nФила Икура",
                "raw_price": 4794,
                "category": 5,
                "tags": []
            },
            {
                "id": 25,
                "visible": true,
                "enabled": true,
                "position": 7,
                "title": "Сет№6 50 шт.",
                "photo": "http://127.0.0.1:8000/media/food_items/food24.jpg",
                "description": "Онигара, Калифорния с крабом, хосомаки с тунцом, хосомаки с огурцом, хосомаки с лососем, хосомаки с угрем.",
                "raw_price": 5868,
                "category": 5,
                "tags": []
            },
            {
                "id": 26,
                "visible": true,
                "enabled": true,
                "position": 8,
                "title": "Сет№4 62 шт.",
                "photo": "http://127.0.0.1:8000/media/food_items/food25.jpg",
                "description": "Зелена река, Бонито, Онигара, Калифорния с крабом, Калифорния с лососем, Филадельфия, хосомаки с лососем.(56шт)",
                "raw_price": 7068,
                "category": 5,
                "tags": []
            },
            {
                "id": 27,
                "visible": true,
                "enabled": true,
                "position": 9,
                "title": "Сет№1 129 шт.",
                "photo": "http://127.0.0.1:8000/media/food_items/food26.jpg",
                "description": "Сливочный угорь , Бонито, Фила классик , Сливочный лосось , Аляска, Калифорния с крабом, Сальмон скин, хос с креветкой, хос с огурцом, хос с авокадо, хос с крабом, хос с тунцом, хос с угрем, хос с лососем, суши тунец , суши креветки , суши лосось, суши томаго, суши угорь.",
                "raw_price": 13074,
                "category": 5,
                "tags": []
            },
            {
                "id": 28,
                "visible": true,
                "enabled": true,
                "position": 10,
                "title": "Сет№5 68 шт.",
                "photo": "http://127.0.0.1:8000/media/food_items/food27.jpg",
                "description": "Сливочный лосось, Сливочный угорь, Калифорния с крабом, Ясай, хосомаки с угрем, хосомаки с тунцом, хосомаки с лососем, хосомаки с огурцом.",
                "raw_price": 7068,
                "category": 5,
                "tags": []
            },
            {
                "id": 29,
                "visible": true,
                "enabled": true,
                "position": 11,
                "title": "Гигант сет 102шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food28.jpg",
                "description": "Аляска, Бонито, Кал с лососем, Кал с угрем, Кал с крабом, зеленая река, 6 видов хосомаки",
                "raw_price": 9954,
                "category": 5,
                "tags": []
            },
            {
                "id": 30,
                "visible": true,
                "enabled": true,
                "position": 12,
                "title": "Сет№2 63 шт.",
                "photo": "http://127.0.0.1:8000/media/food_items/food29.jpg",
                "description": "Филадельфия классик, Канада, Сливочный лосось, Калифорния с лососем, хос с лососем, хос с огурцом, хос с тунцом, гункан чукка, суши лосось, суши угорь",
                "raw_price": 9588,
                "category": 5,
                "tags": []
            },
            {
                "id": 31,
                "visible": true,
                "enabled": true,
                "position": 13,
                "title": "Сет№3 72 шт.",
                "photo": "http://127.0.0.1:8000/media/food_items/food30.jpg",
                "description": "Филадельфия, Сливочный лосось, Калифорния с креветкой, Филадельфия с тобико, Оттава, Аляска, Йоко, Лава.",
                "raw_price": 9588,
                "category": 5,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 5,
        "expanded": true,
        "title": "Ассорти",
        "slug": "assorti"
    },
    {
        "id": 7,
        "food_itemsy": [
            {
                "id": 35,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Скин",
                "photo": "http://127.0.0.1:8000/media/food_items/food34.jpg",
                "description": "",
                "raw_price": 1194,
                "category": 7,
                "tags": []
            },
            {
                "id": 36,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Филадельфия икура",
                "photo": "http://127.0.0.1:8000/media/food_items/food35.jpg",
                "description": "Сыр\nИкура\nЛосось",
                "raw_price": 2034,
                "category": 7,
                "tags": []
            },
            {
                "id": 37,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Нагоя",
                "photo": "http://127.0.0.1:8000/media/food_items/food36.jpg",
                "description": "Сыр\nОгурец\nЖар. Лосось\nТобика",
                "raw_price": 1434,
                "category": 7,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 6,
        "expanded": true,
        "title": "Роллы New",
        "slug": "rolly-new"
    },
    {
        "id": 8,
        "food_itemsy": [
            {
                "id": 39,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Филадельфия Раунд 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food38.jpg",
                "description": "сыр, огурец, лосось",
                "raw_price": 1494,
                "category": 8,
                "tags": []
            },
            {
                "id": 40,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Филадельфия с угрем 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food39.jpg",
                "description": "сыр, угорь",
                "raw_price": 1494,
                "category": 8,
                "tags": []
            },
            {
                "id": 41,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Филадельфия классик 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food40.jpg",
                "description": "сыр, лосось",
                "raw_price": 1494,
                "category": 8,
                "tags": []
            },
            {
                "id": 38,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Вулкан",
                "photo": "http://127.0.0.1:8000/media/food_items/food37.jpg",
                "description": "Сыр\nЛосось\nОгурец\nСпай Соус",
                "raw_price": 1374,
                "category": 8,
                "tags": []
            },
            {
                "id": 42,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Филадельфия с тобико 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food41.jpg",
                "description": "сыр, тобико",
                "raw_price": 1194,
                "category": 8,
                "tags": []
            },
            {
                "id": 43,
                "visible": true,
                "enabled": true,
                "position": 4,
                "title": "Филадельфия 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food42.jpg",
                "description": "сыр, лосось",
                "raw_price": 1134,
                "category": 8,
                "tags": []
            },
            {
                "id": 44,
                "visible": true,
                "enabled": true,
                "position": 5,
                "title": "Филадельфия с огурцом 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food43.jpg",
                "description": "сыр, огурец",
                "raw_price": 899,
                "category": 8,
                "tags": []
            },
            {
                "id": 45,
                "visible": true,
                "enabled": true,
                "position": 6,
                "title": "Бонито 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food44.jpg",
                "description": "сыр, огурец, лосось, бонито",
                "raw_price": 1139,
                "category": 8,
                "tags": []
            },
            {
                "id": 46,
                "visible": true,
                "enabled": true,
                "position": 7,
                "title": "Калифорния с крабом 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food45.jpg",
                "description": "майонез, огурец, краб, тобико",
                "raw_price": 1194,
                "category": 8,
                "tags": []
            },
            {
                "id": 47,
                "visible": true,
                "enabled": true,
                "position": 8,
                "title": "Калифорния с креветками 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food46.jpg",
                "description": "майонез, огурец, креветки, тобико",
                "raw_price": 1199,
                "category": 8,
                "tags": []
            },
            {
                "id": 48,
                "visible": true,
                "enabled": true,
                "position": 9,
                "title": "Калифорния с лососем 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food47.jpg",
                "description": "майонез, огурец, лосось. тобико",
                "raw_price": 1314,
                "category": 8,
                "tags": []
            },
            {
                "id": 49,
                "visible": true,
                "enabled": true,
                "position": 10,
                "title": "Калифорния с угрем 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food48.jpg",
                "description": "майонез, огурец, угорь, тобико",
                "raw_price": 1494,
                "category": 8,
                "tags": []
            },
            {
                "id": 50,
                "visible": true,
                "enabled": true,
                "position": 11,
                "title": "Сливочный лосось 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food49.jpg",
                "description": "сыр, огурец, тобико, лосось",
                "raw_price": 1374,
                "category": 8,
                "tags": []
            },
            {
                "id": 51,
                "visible": true,
                "enabled": true,
                "position": 12,
                "title": "Сливочный угорь 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food50.jpg",
                "description": "сыр, огурец, тобико, угорь",
                "raw_price": 1374,
                "category": 8,
                "tags": []
            },
            {
                "id": 52,
                "visible": true,
                "enabled": true,
                "position": 13,
                "title": "Онигара 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food51.jpg",
                "description": "сыр, угорь, такуан",
                "raw_price": 1434,
                "category": 8,
                "tags": []
            },
            {
                "id": 53,
                "visible": true,
                "enabled": true,
                "position": 14,
                "title": "Аляска 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food52.jpg",
                "description": "сыр, огурец, лосось, кунжут",
                "raw_price": 1139,
                "category": 8,
                "tags": []
            },
            {
                "id": 54,
                "visible": true,
                "enabled": true,
                "position": 15,
                "title": "Цезарь 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food53.jpg",
                "description": "соус цезарь, айсберг, курица х\\к, сыр чизбургер",
                "raw_price": 954,
                "category": 8,
                "tags": []
            },
            {
                "id": 55,
                "visible": true,
                "enabled": true,
                "position": 16,
                "title": "Унаги 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food54.jpg",
                "description": "огурец, угорь, кунжут",
                "raw_price": 1194,
                "category": 8,
                "tags": []
            },
            {
                "id": 56,
                "visible": true,
                "enabled": true,
                "position": 17,
                "title": "Акура 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food55.jpg",
                "description": "сыр, огурец, угорь, креветки, лосось х\\к",
                "raw_price": 1494,
                "category": 8,
                "tags": []
            },
            {
                "id": 57,
                "visible": true,
                "enabled": true,
                "position": 18,
                "title": "Канада 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food56.jpg",
                "description": "майонез, огурец, лосось, угорь",
                "raw_price": 1434,
                "category": 8,
                "tags": []
            },
            {
                "id": 58,
                "visible": true,
                "enabled": true,
                "position": 19,
                "title": "Йоко 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food57.jpg",
                "description": "лосось, икура, сыр",
                "raw_price": 1434,
                "category": 8,
                "tags": []
            },
            {
                "id": 59,
                "visible": true,
                "enabled": true,
                "position": 20,
                "title": "Золотой дракон 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food58.jpg",
                "description": "сыр, огурец, лосось х\\к, икура",
                "raw_price": 1554,
                "category": 8,
                "tags": []
            },
            {
                "id": 60,
                "visible": true,
                "enabled": true,
                "position": 21,
                "title": "Зеленая река 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food59.jpg",
                "description": "сыр, огурец, лосось, укроп",
                "raw_price": 1014,
                "category": 8,
                "tags": []
            },
            {
                "id": 61,
                "visible": true,
                "enabled": true,
                "position": 22,
                "title": "Планета 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food60.jpg",
                "description": "сыр, огурец, такуан, лосось",
                "raw_price": 1014,
                "category": 8,
                "tags": []
            },
            {
                "id": 62,
                "visible": true,
                "enabled": true,
                "position": 23,
                "title": "Ясай 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food61.jpg",
                "description": "сыр, огурец, помидор, светофор, лист салата",
                "raw_price": 954,
                "category": 8,
                "tags": []
            },
            {
                "id": 63,
                "visible": true,
                "enabled": true,
                "position": 24,
                "title": "Манхеттан 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food62.jpg",
                "description": "сыр, огурец, угорь, лосось, тобико, кунжут",
                "raw_price": 1434,
                "category": 8,
                "tags": []
            },
            {
                "id": 64,
                "visible": true,
                "enabled": true,
                "position": 25,
                "title": "Токио 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food63.jpg",
                "description": "сыр, огурец, жаренный лосось",
                "raw_price": 1314,
                "category": 8,
                "tags": []
            },
            {
                "id": 65,
                "visible": true,
                "enabled": true,
                "position": 26,
                "title": "Чукка 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food64.jpg",
                "description": "сыр, чукка, угорь, кунжут",
                "raw_price": 1134,
                "category": 8,
                "tags": []
            },
            {
                "id": 66,
                "visible": true,
                "enabled": true,
                "position": 27,
                "title": "Оттава 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food65.jpg",
                "description": "огурец, угорь, кунжут",
                "raw_price": 1314,
                "category": 8,
                "tags": []
            },
            {
                "id": 67,
                "visible": true,
                "enabled": true,
                "position": 28,
                "title": "Инь-Янь 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food66.jpg",
                "description": "лосось, угорь",
                "raw_price": 1194,
                "category": 8,
                "tags": []
            },
            {
                "id": 68,
                "visible": true,
                "enabled": true,
                "position": 29,
                "title": "Чакин 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food67.jpg",
                "description": "сыр, икура, омлет",
                "raw_price": 1314,
                "category": 8,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 7,
        "expanded": true,
        "title": "Роллы",
        "slug": "rolly"
    },
    {
        "id": 9,
        "food_itemsy": [
            {
                "id": 69,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Теплый ролл Темпура 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food68.jpg",
                "description": "имбирь, огурец, креветки",
                "raw_price": 1199,
                "category": 9,
                "tags": []
            },
            {
                "id": 70,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Мураками 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food69.jpg",
                "description": "сыр, огурец, лосось, креветки, угорь, майонез",
                "raw_price": 1439,
                "category": 9,
                "tags": []
            },
            {
                "id": 71,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Америка 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food70.jpg",
                "description": "сыр, огурец, лосось, угорь",
                "raw_price": 1439,
                "category": 9,
                "tags": []
            },
            {
                "id": 72,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Темпура угорь 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food71.jpg",
                "description": "сыр, угорь",
                "raw_price": 1199,
                "category": 9,
                "tags": []
            },
            {
                "id": 73,
                "visible": true,
                "enabled": true,
                "position": 4,
                "title": "Темпура лосось 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food72.jpg",
                "description": "сыр, лосось",
                "raw_price": 1199,
                "category": 9,
                "tags": []
            },
            {
                "id": 74,
                "visible": true,
                "enabled": true,
                "position": 5,
                "title": "Темпура креветка 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food73.jpg",
                "description": "сыр, креветки",
                "raw_price": 1199,
                "category": 9,
                "tags": []
            },
            {
                "id": 75,
                "visible": true,
                "enabled": true,
                "position": 6,
                "title": "Темпура краб 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food74.jpg",
                "description": "сыр, краб",
                "raw_price": 1199,
                "category": 9,
                "tags": []
            },
            {
                "id": 76,
                "visible": true,
                "enabled": true,
                "position": 7,
                "title": "Чиз Эби 9шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food75.jpg",
                "description": "сыр, огурец, креветки, майонез, тобико",
                "raw_price": 1199,
                "category": 9,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 8,
        "expanded": true,
        "title": "Теплые роллы",
        "slug": "teplye-rolly"
    },
    {
        "id": 10,
        "food_itemsy": [
            {
                "id": 77,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Суши лосось 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food76.jpg",
                "description": "",
                "raw_price": 300,
                "category": 10,
                "tags": []
            },
            {
                "id": 78,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Суши копченый лосось 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food77.jpg",
                "description": "",
                "raw_price": 300,
                "category": 10,
                "tags": []
            },
            {
                "id": 79,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Суши тунец 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food78.jpg",
                "description": "",
                "raw_price": 300,
                "category": 10,
                "tags": []
            },
            {
                "id": 80,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Суши креветки 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food79.jpg",
                "description": "",
                "raw_price": 300,
                "category": 10,
                "tags": []
            },
            {
                "id": 81,
                "visible": true,
                "enabled": true,
                "position": 4,
                "title": "Суши угорь 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food80.jpg",
                "description": "",
                "raw_price": 300,
                "category": 10,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 9,
        "expanded": true,
        "title": "Суши",
        "slug": "sushi"
    },
    {
        "id": 11,
        "food_itemsy": [
            {
                "id": 82,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Острые хосомаки с Лососем 8шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food81.jpg",
                "description": "лосось, спайс соус",
                "raw_price": 599,
                "category": 11,
                "tags": []
            },
            {
                "id": 83,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Острые хосомаки с Угрем 8шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food82.jpg",
                "description": "угорь, спайс соус",
                "raw_price": 779,
                "category": 11,
                "tags": []
            },
            {
                "id": 84,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Хосомаки Креветки 8шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food83.jpg",
                "description": "",
                "raw_price": 779,
                "category": 11,
                "tags": []
            },
            {
                "id": 85,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Хосомаки Огурец 8шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food84.jpg",
                "description": "сыр, огурец",
                "raw_price": 479,
                "category": 11,
                "tags": []
            },
            {
                "id": 86,
                "visible": true,
                "enabled": true,
                "position": 4,
                "title": "Хосомаки Авокадо 8шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food85.jpg",
                "description": "",
                "raw_price": 539,
                "category": 11,
                "tags": []
            },
            {
                "id": 87,
                "visible": true,
                "enabled": true,
                "position": 5,
                "title": "Хосомаки Угорь 8шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food86.jpg",
                "description": "",
                "raw_price": 899,
                "category": 11,
                "tags": []
            },
            {
                "id": 88,
                "visible": true,
                "enabled": true,
                "position": 6,
                "title": "Хосомаки Тунец 8шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food87.jpg",
                "description": "",
                "raw_price": 779,
                "category": 11,
                "tags": []
            },
            {
                "id": 89,
                "visible": true,
                "enabled": true,
                "position": 7,
                "title": "Хосомаки Лосось 8шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food88.jpg",
                "description": "",
                "raw_price": 719,
                "category": 11,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 10,
        "expanded": true,
        "title": "Хосомаки",
        "slug": "hosomaki"
    },
    {
        "id": 12,
        "food_itemsy": [
            {
                "id": 90,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Гункан Икура 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food89.jpg",
                "description": "",
                "raw_price": 594,
                "category": 12,
                "tags": []
            },
            {
                "id": 91,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Гункан Тобико оранжевая 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food90.jpg",
                "description": "",
                "raw_price": 474,
                "category": 12,
                "tags": []
            },
            {
                "id": 92,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Гункан Чукка 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food91.jpg",
                "description": "",
                "raw_price": 354,
                "category": 12,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 11,
        "expanded": true,
        "title": "Гунканы",
        "slug": "gunkany"
    },
    {
        "id": 13,
        "food_itemsy": [
            {
                "id": 93,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Запеченный гункан Креветки 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food92.jpg",
                "description": "креветки, майонез, тобико",
                "raw_price": 354,
                "category": 13,
                "tags": []
            },
            {
                "id": 94,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Запеченный гункан Тунец 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food93.jpg",
                "description": "тунец, майонез, тобико",
                "raw_price": 354,
                "category": 13,
                "tags": []
            },
            {
                "id": 95,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Запеченный гункан Лосось 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food94.jpg",
                "description": "лосось, майонез, тобико",
                "raw_price": 354,
                "category": 13,
                "tags": []
            },
            {
                "id": 96,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Запеченный гункан Угорь 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food95.jpg",
                "description": "угорь, майонез, тобико",
                "raw_price": 354,
                "category": 13,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 12,
        "expanded": true,
        "title": "Запеченные гунканы",
        "slug": "zapechennye-gunkany"
    },
    {
        "id": 14,
        "food_itemsy": [
            {
                "id": 97,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Острый гункан Креветки 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food96.jpg",
                "description": "креветки, спайс соус",
                "raw_price": 354,
                "category": 14,
                "tags": []
            },
            {
                "id": 98,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Острый гункан Тунец 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food97.jpg",
                "description": "тунец, спайс соус",
                "raw_price": 354,
                "category": 14,
                "tags": []
            },
            {
                "id": 99,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Острый гункан Лосось 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food98.jpg",
                "description": "лосось, спайс соус",
                "raw_price": 354,
                "category": 14,
                "tags": []
            },
            {
                "id": 100,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Острый гункан Угорь 1шт",
                "photo": "http://127.0.0.1:8000/media/food_items/food99.jpg",
                "description": "угорь, спайс соус",
                "raw_price": 354,
                "category": 14,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 13,
        "expanded": true,
        "title": "Острые гунканы",
        "slug": "ostrye-gunkany"
    },
    {
        "id": 15,
        "food_itemsy": [
            {
                "id": 101,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Салат Темпура",
                "photo": "http://127.0.0.1:8000/media/food_items/food100.jpg",
                "description": "ролл темпура, лист салата, лола росса, айсберг, помидоры, огурцы, васаби соус",
                "raw_price": 1194,
                "category": 15,
                "tags": []
            },
            {
                "id": 102,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Салат Ясай",
                "photo": "http://127.0.0.1:8000/media/food_items/food101.jpg",
                "description": "лист салата, лола росса, айсберг, помидор, огурцы, майонезный соус",
                "raw_price": 539,
                "category": 15,
                "tags": []
            },
            {
                "id": 103,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Салат Чукка",
                "photo": "http://127.0.0.1:8000/media/food_items/food102.jpg",
                "description": "чукка, лимон, лист салата, ореховый соус",
                "raw_price": 839,
                "category": 15,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 14,
        "expanded": true,
        "title": "Салаты",
        "slug": "salaty"
    },
    {
        "id": 16,
        "food_itemsy": [
            {
                "id": 104,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Набэ удон",
                "photo": "http://127.0.0.1:8000/media/food_items/food103.jpg",
                "description": "удон, грибы, порей, мирин, морской коктейль, зел лук, суимоно,",
                "raw_price": 1079,
                "category": 16,
                "tags": []
            },
            {
                "id": 105,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Мисо с лососем",
                "photo": "http://127.0.0.1:8000/media/food_items/food104.jpg",
                "description": "мисо паста, шампиньоны, зеленый лук, тофу, вакаме, лосось",
                "raw_price": 839,
                "category": 16,
                "tags": []
            },
            {
                "id": 106,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Дзосуй суп",
                "photo": "http://127.0.0.1:8000/media/food_items/food105.jpg",
                "description": "суимоно бульон, мирин, яйцо, креветки, зел лук, рис, вакаме",
                "raw_price": 1079,
                "category": 16,
                "tags": []
            },
            {
                "id": 107,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Спайси мисо",
                "photo": "http://127.0.0.1:8000/media/food_items/food106.jpg",
                "description": "креветки, аджика, тадеги, мисо паста, шампиньоны, зеленый лук, вакаме, тофе",
                "raw_price": 1079,
                "category": 16,
                "tags": []
            },
            {
                "id": 108,
                "visible": true,
                "enabled": true,
                "position": 4,
                "title": "Мисо суп",
                "photo": "http://127.0.0.1:8000/media/food_items/food107.jpg",
                "description": "мисо паста, шампиньоны, зеленый лук, тофу, вакаме",
                "raw_price": 659,
                "category": 16,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 15,
        "expanded": true,
        "title": "Супы",
        "slug": "supy"
    },
    {
        "id": 17,
        "food_itemsy": [
            {
                "id": 109,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Терияки лосось",
                "photo": "http://127.0.0.1:8000/media/food_items/food108.jpg",
                "description": "лосось, терияки соус, лимон, рис, кунжут",
                "raw_price": 2094,
                "category": 17,
                "tags": []
            },
            {
                "id": 110,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Терияки курица",
                "photo": "http://127.0.0.1:8000/media/food_items/food109.jpg",
                "description": "курица, терияки соус, помидоры, рис, кунжут",
                "raw_price": 1199,
                "category": 17,
                "tags": []
            },
            {
                "id": 111,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Торикацу",
                "photo": "http://127.0.0.1:8000/media/food_items/food110.jpg",
                "description": "курица, тонкацу соус, майонез, помидоры, лист салата, яйцо, мука, панко, фри",
                "raw_price": 1619,
                "category": 17,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 16,
        "expanded": true,
        "title": "Горячие блюда",
        "slug": "goryachie-blyuda"
    },
    {
        "id": 18,
        "food_itemsy": [
            {
                "id": 112,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Кушияки лосось",
                "photo": "http://127.0.0.1:8000/media/food_items/food111.jpg",
                "description": "лосось, терияки соус, лист салата, лимон.",
                "raw_price": 1379,
                "category": 18,
                "tags": []
            },
            {
                "id": 113,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Кушияки курица",
                "photo": "http://127.0.0.1:8000/media/food_items/food112.jpg",
                "description": "курица, терияки соус, лист салата, помидор",
                "raw_price": 959,
                "category": 18,
                "tags": []
            },
            {
                "id": 114,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Кушияки креветки",
                "photo": "http://127.0.0.1:8000/media/food_items/food113.jpg",
                "description": "креветки, терияки соус, лист салата, лимон",
                "raw_price": 1439,
                "category": 18,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 17,
        "expanded": true,
        "title": "Шашлычки",
        "slug": "shashlychki"
    },
    {
        "id": 19,
        "food_itemsy": [
            {
                "id": 115,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Удон с курицей",
                "photo": "http://127.0.0.1:8000/media/food_items/food114.jpg",
                "description": "курица, удон, светофор, морковь, лук реп, соев соус, аджинамото, ташида, кинза",
                "raw_price": 1019,
                "category": 19,
                "tags": []
            },
            {
                "id": 116,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Удон с морепродуктами",
                "photo": "http://127.0.0.1:8000/media/food_items/food115.jpg",
                "description": "удон, светофор, морковь, лук репчатый, ташида, кинза, аджинамото, морской коктейль",
                "raw_price": 1019,
                "category": 19,
                "tags": []
            },
            {
                "id": 117,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Удон с овощами",
                "photo": "http://127.0.0.1:8000/media/food_items/food116.jpg",
                "description": "удон, светофор, морковь, лук реп, соев соус, аджинамото, кинза,",
                "raw_price": 779,
                "category": 19,
                "tags": []
            },
            {
                "id": 118,
                "visible": true,
                "enabled": true,
                "position": 3,
                "title": "Теппан с морепродуктами",
                "photo": "http://127.0.0.1:8000/media/food_items/food117.jpg",
                "description": "морской коктейль, светофор, лук репчатый, морковь, соевый соус, кунжутное масло, аджинамото, ташида, черный перец, рис, яйцо",
                "raw_price": 1019,
                "category": 19,
                "tags": []
            },
            {
                "id": 119,
                "visible": true,
                "enabled": true,
                "position": 4,
                "title": "Теппан с курицей",
                "photo": "http://127.0.0.1:8000/media/food_items/food118.jpg",
                "description": "курица, светофор, лук реп, морковь, соевый  соус, кунжутное масло, аджинамото, ташида, черный перец, рия, яйцо",
                "raw_price": 839,
                "category": 19,
                "tags": []
            },
            {
                "id": 120,
                "visible": true,
                "enabled": true,
                "position": 5,
                "title": "Теппан с овощами",
                "photo": "http://127.0.0.1:8000/media/food_items/food119.jpg",
                "description": "светофор, лук реп, морковь, соев соус, кунжутное масло, аджинамото, ташида, черный перец, рис, яйцо",
                "raw_price": 719,
                "category": 19,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 18,
        "expanded": true,
        "title": "Лапша и рис",
        "slug": "lapsha-i-ris"
    },
    {
        "id": 20,
        "food_itemsy": [
            {
                "id": 121,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Имбирный лимонад 1L",
                "photo": "http://127.0.0.1:8000/media/food_items/food120.jpg",
                "description": "",
                "raw_price": 800,
                "category": 20,
                "tags": []
            },
            {
                "id": 122,
                "visible": true,
                "enabled": true,
                "position": 1,
                "title": "Ice tea лимон 1L",
                "photo": "http://127.0.0.1:8000/media/food_items/food121.jpg",
                "description": "Ice tea лимон",
                "raw_price": 600,
                "category": 20,
                "tags": []
            },
            {
                "id": 123,
                "visible": true,
                "enabled": true,
                "position": 2,
                "title": "Махито 1L",
                "photo": "http://127.0.0.1:8000/media/food_items/food122.jpg",
                "description": "",
                "raw_price": 800,
                "category": 20,
                "tags": []
            }
        ],
        "visible": true,
        "enabled": true,
        "position": 19,
        "expanded": true,
        "title": "Напитки",
        "slug": "napitki"
    },
    {
        "id": 21,
        "food_itemsy": [
            {
                "id": 125,
                "visible": true,
                "enabled": true,
                "position": 0,
                "title": "Магнитик",
                "photo": "http://127.0.0.1:8000/media/food_items/3251.jpg",
                "description": "Магнитик для холодильника",
                "raw_price": 10000,
                "category": 21,
                "tags": []
            }
        ],
        "visible": false,
        "enabled": true,
        "position": 20,
        "expanded": true,
        "title": "Подарки",
        "slug": "podarki"
    }
];


class FoodItem extends React.Component {
    render() {
        return (
            <div>
        <div className="food-item-container col-xs-12 col-sm-4 col-md-3">
          <div className="food-item" data-food-id="{{ food_item.id }}" data-food-title="{{ food_item.title }}" data-food-price="{{ food_item.price }}">
            <div className="food-photo"><img className="img-responsive" src="{% static food_item.photo.url %}" /></div>
            <div className="food-text">
              <h4 className="food-title">
                <a role="button" data-toggle="collapse" href="#food-category-{{ food_category.id }}-item-{{ food_item.id }}-details" aria-expanded="false" aria-controls="food-category-{{ food_category.id }}-item-{{ food_item.id }}-details">{this.props.title}</a>
              </h4>
              <div className="food-description">
                <p>{this.props.description}</p>
              </div>
              <div className="food-details collapse" id="food-category-{{ food_category.id }}-item-{{ food_item.id }}-details">
              </div>
              <div className="food-tags">
                {'{'}% for food_tag in food_item.tags.all %{'}'}
                <span className="label label-warning">{'{'}{'{'} food_tag.title {'}'}{'}'}</span>
                {'{'}% endfor %{'}'}
              </div>
            </div>
            <div className="buttons-and-price-block row">
              <div>
                <div className="col-xs-4 price-block">
                  {'{'}% if food_item.raw_price != food_item.price %{'}'}
                  <p className="food-raw-price">{'{'}{'{'} food_item.raw_price|floatformat:"0" {'}'}{'}'}&nbsp;〒</p>
                  {'{'}% endif %{'}'}
                  <p className="food-price">{'{'}{'{'} food_item.price|floatformat:"0" {'}'}{'}'}&nbsp;〒</p>
                </div>
                <div className="col-xs-8">
                  <div className="quantity-buttons btn-group btn-group-justified btn-group-raised">
                    <a href="#" className="btn btn-primary quantity-button quantity-decrease invisible">
                      -
                      <div className="ripple-container" />
                    </a>
                    <a href="javascript:void(0)" className="btn quantity-counter invisible">0</a>
                    <a href="#" className="btn btn-primary quantity-button quantity-increase">
                      <i className="material-icons">add_shopping_cart</i>
                      <div className="ripple-container" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        )
    }
}


class FoodCategory extends React.Component {

    render() {
        const food_items = this.props.food_items.map((food_item) => {
            return <FoodItem key={food_item.id}
                             title={food_item.title}
                             description={food_item.description}/>
        });
        return (
        <div className="food-category" id={this.props.slug}>
        <div className="food-category-title">
          <h3>
            <a role="button" data-toggle="collapse" href="#food-items-{{ food_category.id }}" aria-expanded="{% if food_category.expanded %}true{% else %}false{% endif %}" aria-controls="food-items-{{ food_category.id }}">{this.props.title}
              <i className="pull-right collapse-arrow material-icons">keyboard_arrow_up</i>
            </a>
          </h3>
        </div>
        <div className="list-group food-items-container collapse{% if food_category.expanded %} in{% endif %}" id="food-items-{{ food_category.id }}">
          {'{'}% for food_item in food_category.fooditem_set.all %{'}'}
          {'{'}% if forloop.first %{'}'}
          {food_items}
          <div className="row">
            {'{'}% endif %{'}'}
            {'{'}% include 'food/_food-item.html' %{'}'}
            {'{'}% if forloop.last %{'}'}</div>{'{'}% endif %{'}'}
          {'{'}% endfor %{'}'}
        </div>
      </div>
        )
    }
}


class NavBar extends React.Component {
    render() {
        return(
            <div className="scrollbar navbar navbar-default navbar-fixed-top hidden">
        <div className="container">
          <div id="navbar-container" className="navbar-header">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a id="current_category" href="#" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                  <b className="caret" /></a>
                <ul className="dropdown-menu scrollable-menu">
                  <li><a href="#scroll-to-top">В начало</a></li>
                  <li className="divider" />
                  {'{'}% for food_category in object_list %{'}'}
                  {'{'}% if food_category.enabled and food_category.visible and food_category.fooditem_set.exists %{'}'}
                  <li><a href="#{{ food_category.slug }}">{'{'}{'{'} food_category.title {'}'}{'}'}</a></li>
                  {'{'}% endif %{'}'}
                  {'{'}% endfor %{'}'}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

        )
    }
}



class CarouselItem extends React.Component {
    render() {
        return (
            <div className="item"
                 style={{backgroundImage: 'url(' + this.props.image + ')'}}>
                <div className="carousel-caption">
                    <h3>{this.props.heading}</h3>
                    <p>{this.props.subheading}</p>
                </div>
            </div>

        )
    }
}


class Carousel extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
        }
    }

    loadCarouselsFromServer() {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/banners/',
            dataType: 'json',
            success: (data) => {
                this.setState({data: data});
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    componentDidMount() {
        this.loadCarouselsFromServer();
    }

    render() {
         const carousel_items = this.state.data.map((carousel_item) => {
            return <CarouselItem key={carousel_item.id}
                                 image={carousel_item.image}
                                 heading={carousel_item.heading}
                                 subheading={carousel_item.subheading}/>
        });
        return(
            <div>
                {carousel_items}
        <div id="banner_carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#banner_carousel" data-slide-to="{{ forloop.counter0 }}" className="{% if forloop.first %}active {% endif %}" />
          </ol>
          <div className="carousel-inner" role="listbox">
              {carousel_items}
          </div>
          <a className="left carousel-control" href="#banner_carousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#banner_carousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

        )
    }
}


class StickyBar extends React.Component {
    render() {
        return(
            <div>
        <div className="sticky_bar">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4 center-block">
                <div className="sticky_bar_inner">
                  <form id="cart_form" action="{% url 'order:cart-update-view' %}" method="POST">
                    {'{'}% csrf_token %{'}'}
                    <div className="btn-group btn-group-justified btn-group-raised">
                      <a href="#" className="btn btn-primary" id="cart-overlay-button">
                        <span>
                          <span id="cart-total-price">0</span>
                          <span>&nbsp;〒&nbsp;&nbsp;&nbsp;</span>
                        </span>
                      </a>
                      <a className="order_button btn btn-danger" id="cart_form_submit_button" data-loading-text="Подождите..." disabled>&nbsp;&nbsp;&nbsp;Заказать</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky_bar">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4 center-block">
                <div className="sticky_bar_inner">
                  <a id="gift_button" href="javascript:void(0)" className="center-block btn btn-raised btn-primary btn-fab">
                    <span className="available-gifts" data-gift-breakpoints="{{ view.get_gift_breakpoints|escapejs }}">
                      <i className="mdi mdi-gift gift-icon" aria-hidden="true" />
                      <span className="gifts-counter badge hidden" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        )
    }
}




class FoodMenu extends React.Component {

    render() {
        const menu_data = this.props.menu_data.map((food_category) => {
            return <FoodCategory key={food_category.slug}
                                 title={food_category.title}
                                 caption={food_category.slug}
                                 food_items={food_category.food_itemsy}
            />
        });

        return (
            <div>
                <Header />
                <div className='container'>
                    <Carousel/>
                    {menu_data}
                    <SEOAbout/>
                </div>
                <NavBar />
                <Cart />
                <StickyBar />
                <Footer />
            </div>
        );
    }
}

if ($('body').hasClass('test')) {
    render(<FoodMenu menu_data={food_data}/>, document.getElementById('react-test'));
}
