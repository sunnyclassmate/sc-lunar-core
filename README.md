# sc-lunar-core

# Features!
  - 양력 -> 음력으로 변환한다.
  - 음력 -> 양력으로 변환한다.
  - 한국시간 30분 보정
  - 음력일 유효성 체크
  
This package use lib of [cky-lunar-calendar], convert a date to lunar date with timezone (default timezone is GMT+9)
  
### Installation
  
```sh
$ npm install @sunnyclassmate/sc-lunar-core --save
```  
### function
* **solar2Lunar *(datetime)***
    * `datetime` ***<[number]()>***: solar datetime,  ex> 19720126, 197201261130
- return Array [date, month, year]

> solar datetime을  lunar datetime으로 변경한다.
----

* **lunar2Solar *(datetime)***
    * `date` ***<[number]()>***: lunar datetime,  ex> 19720126, 197201261130 
- return `Array [date, month, year]`
> lunar datetime을  solar datetime으로 변경한다.

### publish
package.json을 편집해서, version을 증가한후에, 다음 명령어로 배포한다.    

```sh
$ npm publish
```  
  
License
----

MIT
 
[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [cky-lunar-calendar]: <https://github.com/Chickyky/cky-lunar-calendar>