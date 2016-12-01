import { GraphRequestCallback, GraphError } from "./common";
export declare class ResponseHandler {
    static init(err: any, res: any, callback: GraphRequestCallback): void;
    static ParseError(rawErr: any): GraphError;
}
