
    const unitsObject = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    const tensObject = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

    module.exports = (num) => {

        if (unitsObject[num]) {
            return unitsObject[num];
        }
        if (tensObject[num]) {
            return tensObject[num];
        }

        if (num < 100) {
            let tens = Math.floor(num / 10) * 10;
            let units = num % 10;

            return tensObject[tens] + ' ' + unitsObject[units];
        }

        if (num < 1000) {
            let hundreds = Math.floor(num / 100);
            let tens = Math.floor((num % 100) / 10) * 10;
            let units = num % 10;

            if (units == 0 && tens == 0) {
                return unitsObject[hundreds] + ' hundred';
            }
            else if (tens !== 0 && unitsObject[tens + units]) {
                return unitsObject[hundreds] + ' hundred' + ' ' + unitsObject[tens + units];
            }
            else if (tens !== 0 && units !== 0) {
                return unitsObject[hundreds] + ' hundred' + ' ' +  tensObject[tens] + ' ' + unitsObject[units];
            }
            else if (units == 0) {
                return unitsObject[hundreds] + ' hundred' + ' ' +  tensObject[tens];
            }
            else if (tens == 0) {
                return unitsObject[hundreds] + ' hundred' + ' ' +  unitsObject[units];
            }


        }
    }


