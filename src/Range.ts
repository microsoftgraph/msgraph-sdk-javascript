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
export class Range {

    /**
     * @public
     * The minimum value of the range
     */
    public minValue: number

    /**
     * @public
     * The maximum value of the range
     */
    public maxValue: number

    /**
     * @constructor
     * Creates a range for given min and max values
     * @param {number} [minVal = -1] - The minimum value.
     * @param {number} [maxVal = -1] - The maximum value.
     * @return An instance of a Range
     */
    constructor(minVal: number = -1, maxVal: number = -1) {
        let self = this;
        self.minValue = minVal;
        self.maxValue = maxVal;
    }
}
