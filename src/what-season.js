import {NotImplementedError} from '../extensions/index.js'

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(/* date */) {
    function getSeasone(date) {
        if (!date) {
            return 'Unable to determine the time of year!'
        }

        if (!date instanceof Date || isNaN(date)) {
            return 'Invalid date!'
        }

        let month = date.getMonth() + 1
        switch (month.toString()) {
            case '12':
            case '1':
            case '2':
                season = 'winter'
                break
            case '3':
            case '4':
            case '5':
                season = 'spring'
                break
            case '6':
            case '7':
            case '8':
                season = 'summer'
                break
            case '9':
            case '10':
            case '11':
                season = 'fall'
                break
        }

        return season
    }
}
