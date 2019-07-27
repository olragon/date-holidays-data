# date-holidays-data

> `date-holidays`'s data extracted to bite-sized JSON files

Version should be synchronized with [date-holidays](https://github.com/commenthol/date-holidays) 

## Install

With npm
```
npm install date-holidays-data --save
```

With yarn

```
yarn add date-holidays-data --save
```

## Usage

Data only

```
// Holidays of United States of America
const dataUs = require('date-holidays-data/data/US.json');

// Holidays of American Samoa, includes United States of America
const dataAsIncludesUs = require('date-holidays-data/data/AS.json');

// Holidays of United States of America, American Samoa, Guam
const dataUsAsGu = require('date-holidays-data/data/US-AS-GM.json');
```

Use with [date-holidays-parser](https://github.com/commenthol/date-holidays-parser)
```
// Holidays of United States of America
const dataUs = require('date-holidays-data/data/US.json');

const Holidays = require('date-holidays-parser');
const hd = new Holidays(data);

// ...
```

## Update

```
yarn upgrade
node scripts/generate.js
```

## License

- Data: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
- Source Code: [MIT](https://opensource.org/licenses/MIT)
