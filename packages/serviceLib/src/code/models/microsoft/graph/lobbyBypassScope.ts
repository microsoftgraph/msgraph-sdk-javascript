/** Provides operations to manage the cloudCommunications singleton.  */
export enum LobbyBypassScope {
    Organizer = "organizer",
    Organization = "organization",
    OrganizationAndFederated = "organizationAndFederated",
    Everyone = "everyone",
    UnknownFutureValue = "unknownFutureValue",
    Invited = "invited",
    OrganizationExcludingGuests = "organizationExcludingGuests",
}
