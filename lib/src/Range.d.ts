/**
 * @module Range
 */
/**
* Class representing Range
*/
export declare class Range {
    /** The minimum value of the range */
    minValue: number;
    /** The maximum value of the range */
    maxValue: number;
    /**
     * Creates a range for given min and max values
     * @param {number} [minVal = -1] - The minimum value.
     * @param {number} [maxVal = -1] - The maximum value.
     */
    constructor(minVal?: number, maxVal?: number);
}
