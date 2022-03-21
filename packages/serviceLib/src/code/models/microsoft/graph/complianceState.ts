/** Provides operations to manage the deviceManagement singleton.  */
export enum ComplianceState {
    Unknown = "unknown",
    Compliant = "compliant",
    Noncompliant = "noncompliant",
    Conflict = "conflict",
    Error = "error",
    InGracePeriod = "inGracePeriod",
    ConfigManager = "configManager",
}
