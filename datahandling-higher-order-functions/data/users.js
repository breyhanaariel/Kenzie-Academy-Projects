const users = [
  {
    _id: "5efb83d333dadb00fc5f68e4",
    isActive: true,
    balance: "$2,967.17",
    picture: "http://placehold.it/32x32",
    age: 21,
    eyeColor: "green",
    name: "Gregory Villarreal",
    company: "BLUPLANET",
    email: "undefined.undefined@bluplanet.name",
    phone: "+1 (866) 544-2326",
    registered: "Friday, May 24, 2019 3:08 PM",
    tags: ["quis", "irure", "consequat", "ut", "occaecat"],
  },
  {
    _id: "5efb83d395950fc8903bba53",
    isActive: false,
    balance: "$2,637.19",
    picture: "http://placehold.it/32x32",
    age: 39,
    eyeColor: "brown",
    name: "Bowman Jensen",
    company: "HOMETOWN",
    email: "undefined.undefined@hometown.net",
    phone: "+1 (830) 443-2439",
    registered: "Friday, December 22, 2017 10:55 AM",
    tags: ["esse", "qui", "in", "duis", "occaecat"],
  },
  {
    _id: "5efb83d3e45933c8a0479e5b",
    isActive: true,
    balance: "$1,079.30",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "brown",
    name: "Berg Carson",
    company: "WRAPTURE",
    email: "undefined.undefined@wrapture.ca",
    phone: "+1 (929) 407-2380",
    registered: "Tuesday, October 27, 2015 2:18 PM",
    tags: ["officia", "ipsum", "incididunt", "incididunt", "ex"],
  },
  {
    _id: "5efb83d36e7778bb0230a2aa",
    isActive: true,
    balance: "$3,915.06",
    picture: "http://placehold.it/32x32",
    age: 37,
    eyeColor: "green",
    name: "Ronda Chapman",
    company: "TEMORAK",
    email: "undefined.undefined@temorak.tv",
    phone: "+1 (891) 562-3602",
    registered: "Tuesday, November 29, 2016 3:10 PM",
    tags: ["amet", "consequat", "ullamco", "eiusmod", "et"],
  },
  {
    _id: "5efb83d3cecde79b94a4265e",
    isActive: false,
    balance: "$2,532.87",
    picture: "http://placehold.it/32x32",
    age: 27,
    eyeColor: "brown",
    name: "Jackson Daugherty",
    company: "CODACT",
    email: "undefined.undefined@codact.com",
    phone: "+1 (942) 445-3169",
    registered: "Saturday, January 30, 2016 4:41 AM",
    tags: ["mollit", "reprehenderit", "dolor", "ea", "enim"],
  },
  {
    _id: "5efb83d35b94c3bad2a4df23",
    isActive: false,
    balance: "$3,353.60",
    picture: "http://placehold.it/32x32",
    age: 31,
    eyeColor: "green",
    name: "Ellis Sanders",
    company: "KENGEN",
    email: "undefined.undefined@kengen.info",
    phone: "+1 (810) 464-3506",
    registered: "Friday, July 27, 2018 3:07 PM",
    tags: ["occaecat", "nulla", "et", "id", "in"],
  },
  {
    _id: "5efb83d3e80a4c10b9167042",
    isActive: false,
    balance: "$3,731.47",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "blue",
    name: "Helen Allen",
    company: "UXMOX",
    email: "undefined.undefined@uxmox.biz",
    phone: "+1 (920) 514-2910",
    registered: "Friday, February 1, 2019 8:52 PM",
    tags: ["commodo", "tempor", "aliquip", "ex", "excepteur"],
  },
  {
    _id: "5efb83d391a98db185027ec3",
    isActive: false,
    balance: "$1,411.73",
    picture: "http://placehold.it/32x32",
    age: 28,
    eyeColor: "blue",
    name: "Patricia Whitney",
    company: "CALLFLEX",
    email: "undefined.undefined@callflex.me",
    phone: "+1 (927) 475-3151",
    registered: "Wednesday, June 24, 2015 9:28 PM",
    tags: ["ea", "consequat", "dolor", "fugiat", "eu"],
  },
  {
    _id: "5efb83d303bbf4e4014a63a6",
    isActive: true,
    balance: "$2,006.31",
    picture: "http://placehold.it/32x32",
    age: 27,
    eyeColor: "green",
    name: "Jackie Sanford",
    company: "MUSIX",
    email: "undefined.undefined@musix.co.uk",
    phone: "+1 (838) 524-2597",
    registered: "Thursday, February 4, 2016 2:44 PM",
    tags: ["et", "eiusmod", "minim", "sit", "qui"],
  },
  {
    _id: "5efb83d3b7a89c5a28170eda",
    isActive: false,
    balance: "$1,732.67",
    picture: "http://placehold.it/32x32",
    age: 23,
    eyeColor: "blue",
    name: "Nguyen Velazquez",
    company: "SUSTENZA",
    email: "undefined.undefined@sustenza.org",
    phone: "+1 (908) 517-2879",
    registered: "Tuesday, March 11, 2014 2:21 AM",
    tags: ["aliqua", "non", "dolor", "esse", "exercitation"],
  },
  {
    _id: "5efb83d34b1c10d5422c4f73",
    isActive: false,
    balance: "$3,374.64",
    picture: "http://placehold.it/32x32",
    age: 30,
    eyeColor: "blue",
    name: "Avery Fernandez",
    company: "AEORA",
    email: "undefined.undefined@aeora.io",
    phone: "+1 (908) 537-3585",
    registered: "Wednesday, April 12, 2017 5:10 PM",
    tags: ["incididunt", "non", "qui", "officia", "veniam"],
  },
  {
    _id: "5efb83d33be90fbfa73ac603",
    isActive: false,
    balance: "$2,410.60",
    picture: "http://placehold.it/32x32",
    age: 29,
    eyeColor: "brown",
    name: "Mcintosh Cruz",
    company: "IDEALIS",
    email: "undefined.undefined@idealis.biz",
    phone: "+1 (826) 568-2769",
    registered: "Friday, April 17, 2015 12:15 PM",
    tags: ["ipsum", "veniam", "aliquip", "aliqua", "ad"],
  },
  {
    _id: "5efb83d3510574f6c2d213f5",
    isActive: false,
    balance: "$3,761.75",
    picture: "http://placehold.it/32x32",
    age: 31,
    eyeColor: "blue",
    name: "Laverne Knapp",
    company: "RODEOMAD",
    email: "undefined.undefined@rodeomad.name",
    phone: "+1 (937) 416-3627",
    registered: "Friday, May 23, 2014 5:11 PM",
    tags: ["in", "ipsum", "magna", "sunt", "tempor"],
  },
  {
    _id: "5efb83d31391d3bf8540fe65",
    isActive: true,
    balance: "$1,379.73",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "brown",
    name: "Hinton Mcguire",
    company: "OLYMPIX",
    email: "undefined.undefined@olympix.net",
    phone: "+1 (827) 451-2993",
    registered: "Tuesday, December 3, 2019 8:23 PM",
    tags: ["ut", "mollit", "amet", "sint", "ipsum"],
  },
  {
    _id: "5efb83d364148399e0cc7cea",
    isActive: false,
    balance: "$1,122.76",
    picture: "http://placehold.it/32x32",
    age: 39,
    eyeColor: "green",
    name: "Sophie Webb",
    company: "OVERFORK",
    email: "undefined.undefined@overfork.ca",
    phone: "+1 (963) 468-2425",
    registered: "Tuesday, September 25, 2018 11:13 PM",
    tags: ["minim", "sint", "ex", "irure", "duis"],
  },
  {
    _id: "5efb83d38747c1201a2a164e",
    isActive: true,
    balance: "$2,615.91",
    picture: "http://placehold.it/32x32",
    age: 32,
    eyeColor: "brown",
    name: "Kayla Trujillo",
    company: "SPACEWAX",
    email: "undefined.undefined@spacewax.tv",
    phone: "+1 (935) 545-3145",
    registered: "Friday, November 30, 2018 6:19 AM",
    tags: ["qui", "nulla", "esse", "culpa", "commodo"],
  },
  {
    _id: "5efb83d35747019d47cdcf60",
    isActive: false,
    balance: "$3,250.71",
    picture: "http://placehold.it/32x32",
    age: 27,
    eyeColor: "green",
    name: "Charlotte Tyler",
    company: "DARWINIUM",
    email: "undefined.undefined@darwinium.com",
    phone: "+1 (834) 595-2683",
    registered: "Thursday, July 30, 2015 12:48 PM",
    tags: ["deserunt", "cillum", "culpa", "sunt", "ipsum"],
  },
  {
    _id: "5efb83d3134e2f5d874c4d16",
    isActive: false,
    balance: "$2,168.69",
    picture: "http://placehold.it/32x32",
    age: 22,
    eyeColor: "brown",
    name: "Susan Sweeney",
    company: "ZENCO",
    email: "undefined.undefined@zenco.info",
    phone: "+1 (915) 464-2610",
    registered: "Friday, January 10, 2020 1:16 PM",
    tags: ["ut", "ad", "fugiat", "eu", "labore"],
  },
  {
    _id: "5efb83d36e0bbaf471ceae12",
    isActive: true,
    balance: "$1,020.85",
    picture: "http://placehold.it/32x32",
    age: 27,
    eyeColor: "brown",
    name: "Edwina Sherman",
    company: "COGNICODE",
    email: "undefined.undefined@cognicode.biz",
    phone: "+1 (956) 597-3682",
    registered: "Monday, July 6, 2015 9:38 AM",
    tags: ["officia", "cillum", "aute", "irure", "qui"],
  },
  {
    _id: "5efb83d3f3a880e2994fa001",
    isActive: false,
    balance: "$2,565.61",
    picture: "http://placehold.it/32x32",
    age: 24,
    eyeColor: "blue",
    name: "Guthrie Ferguson",
    company: "LYRIA",
    email: "undefined.undefined@lyria.me",
    phone: "+1 (964) 491-2158",
    registered: "Monday, May 11, 2015 3:45 AM",
    tags: ["dolore", "laborum", "fugiat", "excepteur", "eu"],
  },
  {
    _id: "5efb83d38234717ffc7dda4d",
    isActive: false,
    balance: "$1,694.38",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "green",
    name: "Bernard Vega",
    company: "VIASIA",
    email: "undefined.undefined@viasia.co.uk",
    phone: "+1 (950) 546-2625",
    registered: "Thursday, August 7, 2014 2:09 AM",
    tags: ["magna", "fugiat", "cupidatat", "ullamco", "sint"],
  },
  {
    _id: "5efb83d345052612bd076b9c",
    isActive: false,
    balance: "$1,877.10",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "brown",
    name: "Katina Mccullough",
    company: "EVENTEX",
    email: "undefined.undefined@eventex.org",
    phone: "+1 (848) 513-3880",
    registered: "Thursday, November 10, 2016 5:12 PM",
    tags: ["tempor", "ad", "ullamco", "sit", "commodo"],
  },
  {
    _id: "5efb83d3966f2f7452e18aba",
    isActive: false,
    balance: "$2,461.54",
    picture: "http://placehold.it/32x32",
    age: 21,
    eyeColor: "blue",
    name: "Bass Odom",
    company: "ETERNIS",
    email: "undefined.undefined@eternis.io",
    phone: "+1 (862) 521-3369",
    registered: "Sunday, April 3, 2016 6:36 PM",
    tags: ["tempor", "do", "duis", "dolore", "irure"],
  },
  {
    _id: "5efb83d3aea9676332c4097e",
    isActive: false,
    balance: "$3,301.23",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "green",
    name: "Dalton Cook",
    company: "OVATION",
    email: "undefined.undefined@ovation.biz",
    phone: "+1 (942) 490-2584",
    registered: "Saturday, September 16, 2017 4:43 AM",
    tags: ["minim", "nulla", "duis", "laborum", "ut"],
  },
  {
    _id: "5efb83d37544d59e7084b6a8",
    isActive: true,
    balance: "$3,834.76",
    picture: "http://placehold.it/32x32",
    age: 29,
    eyeColor: "blue",
    name: "Mcmahon Hebert",
    company: "SINGAVERA",
    email: "undefined.undefined@singavera.name",
    phone: "+1 (950) 472-2511",
    registered: "Monday, March 26, 2018 6:21 AM",
    tags: ["commodo", "ex", "ad", "culpa", "eu"],
  },
  {
    _id: "5efb83d34a75f6dbedaf45d1",
    isActive: false,
    balance: "$1,994.86",
    picture: "http://placehold.it/32x32",
    age: 40,
    eyeColor: "green",
    name: "Amparo Stewart",
    company: "LOTRON",
    email: "undefined.undefined@lotron.net",
    phone: "+1 (929) 583-3287",
    registered: "Thursday, November 1, 2018 6:55 PM",
    tags: ["nostrud", "commodo", "cupidatat", "deserunt", "Lorem"],
  },
  {
    _id: "5efb83d30e45632fcf3cfbf2",
    isActive: true,
    balance: "$2,296.86",
    picture: "http://placehold.it/32x32",
    age: 22,
    eyeColor: "blue",
    name: "Arline Davidson",
    company: "QOT",
    email: "undefined.undefined@qot.ca",
    phone: "+1 (807) 434-2350",
    registered: "Wednesday, April 9, 2014 2:40 PM",
    tags: ["voluptate", "commodo", "eu", "esse", "reprehenderit"],
  },
  {
    _id: "5efb83d37103b5a1d6a67645",
    isActive: true,
    balance: "$2,245.17",
    picture: "http://placehold.it/32x32",
    age: 33,
    eyeColor: "brown",
    name: "Oliver Blanchard",
    company: "KOFFEE",
    email: "undefined.undefined@koffee.tv",
    phone: "+1 (913) 569-3846",
    registered: "Saturday, January 7, 2017 2:20 AM",
    tags: ["sunt", "consectetur", "nulla", "magna", "eu"],
  },
  {
    _id: "5efb83d323b8526edd13f3bd",
    isActive: true,
    balance: "$3,169.89",
    picture: "http://placehold.it/32x32",
    age: 38,
    eyeColor: "blue",
    name: "Monroe Mosley",
    company: "NETUR",
    email: "undefined.undefined@netur.com",
    phone: "+1 (897) 425-3026",
    registered: "Tuesday, February 28, 2017 4:25 AM",
    tags: ["dolore", "in", "cillum", "laborum", "est"],
  },
  {
    _id: "5efb83d3d9fa3b9e953da407",
    isActive: true,
    balance: "$2,211.15",
    picture: "http://placehold.it/32x32",
    age: 30,
    eyeColor: "brown",
    name: "Mariana Ewing",
    company: "FISHLAND",
    email: "undefined.undefined@fishland.info",
    phone: "+1 (803) 548-2593",
    registered: "Friday, February 8, 2019 1:19 AM",
    tags: ["voluptate", "velit", "est", "ut", "quis"],
  },
];
