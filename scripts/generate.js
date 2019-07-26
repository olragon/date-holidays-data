const path = require('path');
const Holidays2json = require('date-holidays/scripts/holidays2json');
const fs = require('fs');
const util = require('util');
const asReadFile = util.promisify(fs.readFile);
const asWriteFile = util.promisify(fs.writeFile);

// Monkey patching save function
Holidays2json.prototype.save = async function (filePath) {
    const json = JSON.stringify(this.holidays, null, 2) + '\n';
    return asWriteFile(filePath, json, 'utf8');
};

async function generate() {
    let json = await asReadFile(path.join(__dirname, '..', 'node_modules', 'date-holidays', 'data', 'holidays.json'));
    let data = JSON.parse(json);
    let countryCodes = Object.keys(data.holidays);

    // find inherit countries
    let otherCountries = [];
    let inheritCountries = [];
    let group = {};

    // loop through country and extract data
    countryCodes.forEach(countryCode => {
        let country = data.holidays[countryCode];
        if (country._days) {
            inheritCountries.push(countryCode);

            if (!group[country._days]) {
                group[country._days] = [];
            }
            group[country._days].push(countryCode);
        } else {
            otherCountries.push(countryCode);
        }
    });

    // generate independent countries
    for (let i = 0; i < otherCountries.length; i++) {
        let countryCode = otherCountries[i];
        await new Holidays2json({
            pick: countryCode,
            min: true
        }).getList().build().save(path.join(__dirname, '..', 'data', countryCode + '.json'));
    }

    // generate dependent countries
    for (let i = 0; i < inheritCountries.length; i++) {
        let countryCode = inheritCountries[i];
        let country = data.holidays[countryCode];
        let parentCountryCode = country._days;
        await new Holidays2json({
            pick: [countryCode, parentCountryCode],
            min: true
        }).getList().build().save(path.join(__dirname, '..', 'data', countryCode + '.json'));
    }

    // generate grouped countries
    for (let parentCountry in group) {
        if (group.hasOwnProperty(parentCountry)) {
            let groupCountries = [parentCountry].concat(group[parentCountry])
            await new Holidays2json({
                pick: groupCountries,
                min: true
            }).getList().build().save(path.join(__dirname, '..', 'data', groupCountries.join('-') + '.json'));
        }
    }
}

if (module === require.main) {
    (async () => {
        await generate();
        console.log('Generated');
    })();
}