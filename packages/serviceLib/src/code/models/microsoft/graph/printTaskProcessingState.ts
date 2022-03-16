/** Provides operations to manage the print singleton.  */
export enum PrintTaskProcessingState {
    Pending = "pending",
    Processing = "processing",
    Completed = "completed",
    Aborted = "aborted",
    UnknownFutureValue = "unknownFutureValue",
}
