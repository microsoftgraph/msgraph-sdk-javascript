export class Range {
    minValue: number
    maxValue: number
    constructor(minVal: number = -1, maxVal: number = -1) {
        let self = this;
        self.minValue = minVal;
        self.maxValue = maxVal;
    }
}