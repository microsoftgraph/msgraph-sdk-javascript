const DEFAULT_FILE_SIZE: number = 5 * 1024 * 1024;  // 5 MB (a multiple of 320 KB) "recommended size is between 5 - 10 MB"

const roundTo320KB = (value: number): number => {
    if (value > (320 * 1024)) {
        value = Math.floor(value / (320 * 1024)) * 320 * 1024;
    }
    return value;
}

export const getValidRangeSize = (rangeSize: number = DEFAULT_FILE_SIZE): number => {
    const sixtyMB = 60 * 1024 * 1024;
    if (rangeSize > sixtyMB) {
        rangeSize = sixtyMB;
    }
    return roundTo320KB(rangeSize);
}
