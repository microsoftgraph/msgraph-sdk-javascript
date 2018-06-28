import { GraphRequestCallback, GraphError } from "./common";
export declare class ResponseHandler {
    static init(res: any, err: any, resContents: any, callback: GraphRequestCallback): void;
    static ParseError(rawErr: Error): GraphError;
    static defaultGraphError(statusCode: number): GraphError;
    static buildGraphErrorFromErrorObject(errObj: Error): GraphError;
    static buildGraphErrorFromResponseObject(errObj: any, statusCode: number): GraphError;
}
