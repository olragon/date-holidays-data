# date-holidays-data

> `date-holidays`'s data extracted to bite-sized JSON files

## Usages

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

## Updates

```
yarn upgrade
node scripts/generate.js
```