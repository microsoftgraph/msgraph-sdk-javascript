export enum DeviceRegistrationState {
    NotRegistered = "notRegistered",
    Registered = "registered",
    Revoked = "revoked",
    KeyConflict = "keyConflict",
    ApprovalPending = "approvalPending",
    CertificateReset = "certificateReset",
    NotRegisteredPendingEnrollment = "notRegisteredPendingEnrollment",
    Unknown = "unknown",
}
