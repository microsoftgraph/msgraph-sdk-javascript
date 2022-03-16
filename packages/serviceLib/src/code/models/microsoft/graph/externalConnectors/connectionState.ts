/** Provides operations to manage the collection of externalConnection entities.  */
export enum ConnectionState {
    Draft = "draft",
    Ready = "ready",
    Obsolete = "obsolete",
    LimitExceeded = "limitExceeded",
    UnknownFutureValue = "unknownFutureValue",
}
