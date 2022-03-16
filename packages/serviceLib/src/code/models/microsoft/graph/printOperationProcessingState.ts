/** Provides operations to manage the print singleton.  */
export enum PrintOperationProcessingState {
    NotStarted = "notStarted",
    Running = "running",
    Succeeded = "succeeded",
    Failed = "failed",
    UnknownFutureValue = "unknownFutureValue",
}
