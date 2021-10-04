import {NotImplementedError} from '../extensions/index.js'

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(/* matrix */) {
    function countCats(backyard) {
        let cats = 0
        backyard.forEach(element => {
            element.forEach(element => {
                if (element === '^^') {
                    cats++
                }
            })
        })
        return cats
    }
}
