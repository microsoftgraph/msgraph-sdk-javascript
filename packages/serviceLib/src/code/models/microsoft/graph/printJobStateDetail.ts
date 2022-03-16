/** Provides operations to manage the print singleton.  */
export enum PrintJobStateDetail {
    UploadPending = "uploadPending",
    Transforming = "transforming",
    CompletedSuccessfully = "completedSuccessfully",
    CompletedWithWarnings = "completedWithWarnings",
    CompletedWithErrors = "completedWithErrors",
    ReleaseWait = "releaseWait",
    Interpreting = "interpreting",
    UnknownFutureValue = "unknownFutureValue",
}
