/** Provides operations to manage the auditLogRoot singleton.  */
export enum ProvisioningAction {
    Other = "other",
    Create = "create",
    Delete = "delete",
    Disable = "disable",
    Update = "update",
    StagedDelete = "stagedDelete",
    UnknownFutureValue = "unknownFutureValue",
}
