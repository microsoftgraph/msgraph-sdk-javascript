/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module Range
 */
/**
* @class
* Class representing Range
*/
export declare class Range {
    /**
     * @public
     * The minimum value of the range
     */
    minValue: number;
    /**
     * @public
     * The maximum value of the range
     */
    maxValue: number;
    /**
     * @constructor
     * Creates a range for given min and max values
     * @param {number} [minVal = -1] - The minimum value.
     * @param {number} [maxVal = -1] - The maximum value.
     * @return An instance of a Range
     */
    constructor(minVal?: number, maxVal?: number);
}
