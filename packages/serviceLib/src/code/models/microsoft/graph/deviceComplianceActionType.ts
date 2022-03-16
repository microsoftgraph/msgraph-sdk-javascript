/** Provides operations to manage the deviceManagement singleton.  */
export enum DeviceComplianceActionType {
    NoAction = "noAction",
    Notification = "notification",
    Block = "block",
    Retire = "retire",
    Wipe = "wipe",
    RemoveResourceAccessProfiles = "removeResourceAccessProfiles",
    PushNotification = "pushNotification",
}
