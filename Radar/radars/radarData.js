//This is the title for your window tab, and your Radar
document.title = "FundApps Technology Radar (July 2017)";

//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                  ,{'r':500,'name':'Remove'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
  {
    "quadrant": "Platforms / Tooling / Services / IT",
    "left": 45,
    "top": 18,
    "color": "#8FA227",
    "items": [
      //Hold

      //Assess
      { "name": "Active Directory",           "pc":{ "r":230,"t":133 }, "movement": "c" },
      { "name": "Nomad",                      "pc":{ "r":250,"t":165 }, "movement": "c" },
      { "name": "Intruder.io",                "pc":{ "r":225,"t":120 }, "movement": "c" },

      //Trial
      { "name": "Okta",                       "pc":{ "r":170,"t":150 }, "movement": "c" },
      { "name": "Amazon Aurora",              "pc":{ "r":130,"t":170 }, "movement": "c" },
      { "name": "Vault",                      "pc":{ "r":170,"t":110 }, "movement": "c" },
      { "name": "Docker (development)",       "pc":{ "r":150,"t":95 },  "movement": "c", "url":"https://www.docker.com/"},
      { "name": "Amazon Inspector",           "pc":{ "r":180,"t":105 }, "movement": "c" },   

      //Adopt
      { "name": "Windows 2016",               "pc":{ "r":80,"t":100 }, "movement": "c" },
      { "name": "SQL Server 2016",            "pc":{ "r":80,"t":120 }, "movement": "c" },
      { "name": ".NET 4.6.2",                 "pc":{ "r":80,"t":140 }, "movement": "c" },
      { "name": "Consul (KV)",                "pc":{ "r":80,"t":160 }, "movement": "c" },
      { "name": "Sentry",                     "pc":{ "r":50,"t":100 }, "movement": "c" },
      { "name": "Grafana",                    "pc":{ "r":50,"t":120 }, "movement": "c" },
      { "name": "Alert Logic Cloud Insight",  "pc":{ "r":50,"t":140 }, "movement": "c" }
    ]
  },
  { 
    "quadrant": "Rapptr Core",
    "left": w-200+30,
    "top" : 18,
    "color": "#587486",
    "items": [
      //Hold
      { "name": "Octopus",  "pc": { "r": 360, "t": 82 }, "movement": "c" },
      { "name": "MSpec",    "pc": { "r": 380, "t": 56 }, "movement": "c" },
      { "name": "JQGrid",   "pc": { "r": 330, "t": 5 },  "movement": "c" },
      { "name": "RabbitMQ", "pc": { "r": 330, "t": 18 }, "movement": "c" },
      { "name": "F#",       "pc": { "r": 330, "t": 18 }, "movement": "c" },
      { "name": "Gulp",     "pc": { "r": 330, "t": 18 }, "movement": "c" },
      { "name": "NPM",      "pc": { "r": 330, "t": 18 }, "movement": "c" }

      //Assess
      { "name": "ZeroMQ",   "pc": { "r": 280, "t": 74 }, "movement": "c" },
      { "name": "Webpack",  "pc": { "r": 280, "t": 78 }, "movement": "c" },
      { "name": "Consul",   "pc": { "r": 260, "t": 75 }, "movement": "c" },
      { "name": "DbUp",     "pc": { "r": 260, "t": 48 }, "movement": "c" },
      { "name": "Postgres", "pc": { "r": 280, "t": 51 }, "movement": "c" },

      //Trial
      { "name": "React",     "pc": { "r": 170, "t": 19 }, "movement": "t" },
      { "name": "Amazon S3", "pc": { "r": 150, "t": 69 }, "movement": "c" },
      { "name": "XUnit",     "pc": { "r": 110, "t": 70 }, "movement": "c" },

      //Adopt
      { "name": "ESNext",   "pc": { "r": 80, "t": 56 }, "movement": "c" },
      { "name": "Yarn",     "pc": { "r": 12, "t": 25 }, "movement": "c" },
      { "name": "Flow",     "pc": { "r": 30, "t": 72 }, "movement": "c" }
    ]
  },
  { 
    "quadrant": "Data Services / RegData",
    "left": 45,
    "top": (h/2 + 18),
    "color": "#DC6F1D",
    "items": [
      //Hold
      { "name": "SQLServer",              "pc": { "r": 390, "t": 215 }, "movement": "c" },
      { "name": "Angular",                "pc": { "r": 390, "t": 185 }, "movement": "c" },
      { "name": "WebApi",                 "pc": { "r": 390, "t": 235 }, "movement": "c" },
      { "name": "Newtonsoft.Json",        "pc": { "r": 390, "t": 245 }, "movement": "c" },

      //Assess
      { "name": "Suave",                  "pc": { "r": 250, "t": 260 }, "movement": "c" },
      { "name": "Amazon S3 for Crawls",   "pc": { "r": 275, "t": 260 }, "movement": "t" },

      //Trial
      { "name": "Postgres + SQLProvider", "pc":{ "r": 130, "t": 260 }, "movement": "t" },
      { "name": "OneLogin",               "pc":{ "r": 130, "t": 230 }, "movement": "c" },
      { "name": "Angular-JWT",            "pc":{ "r": 190, "t": 190 }, "movement": "c" },

      //Adopt
      { "name": "Amazon RDS (Postgres)",  "pc": { "r": 30, "t": 225 }, "movement": "c" }
    ]
  },
  {
    "quadrant": "Rapptr Components - Notifications, Tasks, Rule Commentary",
    "color": "#B70062",
    "left": (w-200+30),
    "top": (h/2 + 18),
    "items": [
      //Hold
      { "name": "Directus",              "pc": { "r": 360, "t": 270 }, "movement": "c" },
      { "name": "Amazon Lambda (JS)",    "pc": { "r": 390, "t": 290 }, "movement": "c" },
      { "name": "Amazon Dynamo",         "pc": { "r": 375, "t": 310 }, "movement": "c" },
      { "name": "Amazon RDS (MySQL)",    "pc": { "r": 375, "t": 330 }, "movement": "c" },
      { "name": "Nancy",                 "pc": { "r": 345, "t": 350 }, "movement": "c" },
      { "name": "Owin",                  "pc": { "r": 355, "t": 370 }, "movement": "c" }

      //Assess
      //Trial
      { "name": "C# Xplat/.NET Core",    "pc": { "r": 150, "t": 298 }, "movement": "c" }

      //Adopt
      { "name": ".NET Standard",         "pc": { "r": 60, "t": 290 }, "movement": "c" },
      { "name": "Amazon RDS (Postgres)", "pc": { "r": 60, "t": 310 }, "movement": "c" },

    ]
  }
];