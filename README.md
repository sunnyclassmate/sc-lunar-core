# sc-lunar-core

# Features!
  - Convert solar date with timezone to lunar date
  - And revert lunar date to solar date
  - Check Lunar date validity
  
This package use lib of [cky-lunar-calendar], convert a date to lunar date with timezone (default timezone is GMT+7)
  
### Installation
  
```sh
$ npm install @sunnycalssmate/sc-lunar-core --save
```  
### function
* **solar2Lunar *(date, month, yeaer, timezone)***
    * `date` ***<[number]()>***: solar date
    * `month` ***<[number]()>***: solar month
    * `year` ***<[number]()>***: solar year
    * `timezone` ***<[number]()>***: `optional`, timezone in GMT of your location you want, `default is 9`
- return Array [date, month, year]

> convert solar date to lunar date with timezone optional.
----

* **lunar2Solar *(date, month, yeaer, timezone)***
    * `date` ***<[number]()>***: lunar date
    * `month` ***<[number]()>***: lunar month
    * `year` ***<[number]()>***: lunar year
    * `timezone` ***<[number]()>***: `optional`, timezone in GMT of your location you want, `default is 7`
- return `Array [date, month, year]`
> convert lunar date to solar date with timezone optional.

  
License
----

MIT
 
[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [cky-lunar-calendar]: <https://github.com/Chickyky/cky-lunar-calendar>