/** Provides operations to manage the deviceAppManagement singleton.  */
export enum WindowsInformationProtectionEnforcementLevel {
    NoProtection = "noProtection",
    EncryptAndAuditOnly = "encryptAndAuditOnly",
    EncryptAuditAndPrompt = "encryptAuditAndPrompt",
    EncryptAuditAndBlock = "encryptAuditAndBlock",
}
