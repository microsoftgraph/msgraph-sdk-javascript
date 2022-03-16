/** Provides operations to manage the deviceAppManagement singleton.  */
export enum ManagedAppDataEncryptionType {
    UseDeviceSettings = "useDeviceSettings",
    AfterDeviceRestart = "afterDeviceRestart",
    WhenDeviceLockedExceptOpenFiles = "whenDeviceLockedExceptOpenFiles",
    WhenDeviceLocked = "whenDeviceLocked",
}
