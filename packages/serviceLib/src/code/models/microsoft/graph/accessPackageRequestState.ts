/** Provides operations to manage the identityGovernance singleton.  */
export enum AccessPackageRequestState {
    Submitted = "submitted",
    PendingApproval = "pendingApproval",
    Delivering = "delivering",
    Delivered = "delivered",
    DeliveryFailed = "deliveryFailed",
    Denied = "denied",
    Scheduled = "scheduled",
    Canceled = "canceled",
    PartiallyDelivered = "partiallyDelivered",
    UnknownFutureValue = "unknownFutureValue",
}
