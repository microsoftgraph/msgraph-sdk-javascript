/** Provides operations to manage the collection of drive entities.  */
export enum ComplianceState {
    Unknown = "unknown",
    Compliant = "compliant",
    Noncompliant = "noncompliant",
    Conflict = "conflict",
    Error = "error",
    InGracePeriod = "inGracePeriod",
    ConfigManager = "configManager",
}
