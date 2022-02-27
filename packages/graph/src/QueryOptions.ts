export interface QueryOptions {
    count?: boolean,
    filter?: string,
    orderby?: string[],
    search?: string,
    select?: string[],
    skip?: number,
    top?: number
}