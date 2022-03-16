/** Provides operations to manage the collection of drive entities.  */
export enum CalendarRoleType {
    None = "none",
    FreeBusyRead = "freeBusyRead",
    LimitedRead = "limitedRead",
    Read = "read",
    Write = "write",
    DelegateWithoutPrivateEventAccess = "delegateWithoutPrivateEventAccess",
    DelegateWithPrivateEventAccess = "delegateWithPrivateEventAccess",
    Custom = "custom",
}
