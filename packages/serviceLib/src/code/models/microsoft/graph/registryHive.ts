/** Provides operations to manage the security singleton.  */
export enum RegistryHive {
    Unknown = "unknown",
    CurrentConfig = "currentConfig",
    CurrentUser = "currentUser",
    LocalMachineSam = "localMachineSam",
    LocalMachineSecurity = "localMachineSecurity",
    LocalMachineSoftware = "localMachineSoftware",
    LocalMachineSystem = "localMachineSystem",
    UsersDefault = "usersDefault",
    UnknownFutureValue = "unknownFutureValue",
}
