/** Provides operations to manage the print singleton.  */
export enum PrintJobProcessingState {
    Unknown = "unknown",
    Pending = "pending",
    Processing = "processing",
    Paused = "paused",
    Stopped = "stopped",
    Completed = "completed",
    Canceled = "canceled",
    Aborted = "aborted",
    UnknownFutureValue = "unknownFutureValue",
}
