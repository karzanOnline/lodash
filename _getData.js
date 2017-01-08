import metaMap from './_metaMap.js';
import noop from './noop.js';

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
const getData = !metaMap ? noop : func => metaMap.get(func);

export default getData;
