/** Provides operations to manage the auditLogRoot singleton.  */
export enum ProvisioningStepType {
    Import = "import",
    Scoping = "scoping",
    Matching = "matching",
    Processing = "processing",
    ReferenceResolution = "referenceResolution",
    Export = "export",
    UnknownFutureValue = "unknownFutureValue",
}
