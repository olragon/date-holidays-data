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
yarn add date-holidays-data
```

## Usage

### Data only

```js
// Holidays of United States of America
const dataUs = require('date-holidays-data/data/US.json');

// Holidays of American Samoa, includes United States of America
const dataAsIncludesUs = require('date-holidays-data/data/AS.json');

// Holidays of United States of America, American Samoa, Guam
const dataUsAsGu = require('date-holidays-data/data/US-AS-GM.json');
```

### Use with [date-holidays-parser](https://github.com/commenthol/date-holidays-parser)

```js
// Holidays of United States of America
const dataUs = require('date-holidays-data/data/US.json');

const Holidays = require('date-holidays-parser');
const hd = new Holidays(dataUs);

// get supported countries
hd.getCountries()

// get supported states e.g. for US
hd.getStates('US')

// ...
```

### Selective multiple countries

#### Install lodash.merge
```
yarn add lodash.merge
```

#### Use `lodash.merge` to combine data
```js
const Holidays = require('date-holidays-parser');
const dataUs = require('date-holidays-data/data/US.json');
const dataVn = require('date-holidays-data/data/VN.json');
const merge = require('lodash.merge');
const dataUsVn = merge(dataUs, dataVn);
const hd = new Holidays(dataUsVn);
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
