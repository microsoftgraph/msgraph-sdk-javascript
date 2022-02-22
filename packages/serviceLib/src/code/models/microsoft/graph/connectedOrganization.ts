import {ConnectedOrganizationState, DirectoryObject, Entity, IdentitySource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConnectedOrganization extends Entity implements Parsable {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** The description of the connected organization.  */
    private _description?: string | undefined;
    /** The display name of the connected organization. Supports $filter (eq).  */
    private _displayName?: string | undefined;
    /** Nullable.  */
    private _externalSponsors?: DirectoryObject[] | undefined;
    /** The identity sources in this connected organization, one of azureActiveDirectoryTenant, domainIdentitySource or externalDomainFederation. Nullable.  */
    private _identitySources?: IdentitySource[] | undefined;
    /** Nullable.  */
    private _internalSponsors?: DirectoryObject[] | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  */
    private _modifiedDateTime?: Date | undefined;
    /** The state of a connected organization defines whether assignment policies with requestor scope type AllConfiguredConnectedOrganizationSubjects are applicable or not.  The possible values are: configured, proposed, unknownFutureValue.  */
    private _state?: ConnectedOrganizationState | undefined;
    /**
     * Instantiates a new connectedOrganization and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the description property value. The description of the connected organization.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the displayName property value. The display name of the connected organization. Supports $filter (eq).
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the externalSponsors property value. Nullable.
     * @returns a directoryObject
     */
    public get externalSponsors() {
        return this._externalSponsors;
    };
    /**
     * Gets the identitySources property value. The identity sources in this connected organization, one of azureActiveDirectoryTenant, domainIdentitySource or externalDomainFederation. Nullable.
     * @returns a identitySource
     */
    public get identitySources() {
        return this._identitySources;
    };
    /**
     * Gets the internalSponsors property value. Nullable.
     * @returns a directoryObject
     */
    public get internalSponsors() {
        return this._internalSponsors;
    };
    /**
     * Gets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get modifiedDateTime() {
        return this._modifiedDateTime;
    };
    /**
     * Gets the state property value. The state of a connected organization defines whether assignment policies with requestor scope type AllConfiguredConnectedOrganizationSubjects are applicable or not.  The possible values are: configured, proposed, unknownFutureValue.
     * @returns a connectedOrganizationState
     */
    public get state() {
        return this._state;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdDateTime", (o, n) => { (o as unknown as ConnectedOrganization).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as ConnectedOrganization).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as ConnectedOrganization).displayName = n.getStringValue(); }],
            ["externalSponsors", (o, n) => { (o as unknown as ConnectedOrganization).externalSponsors = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["identitySources", (o, n) => { (o as unknown as ConnectedOrganization).identitySources = n.getCollectionOfObjectValues<IdentitySource>(IdentitySource); }],
            ["internalSponsors", (o, n) => { (o as unknown as ConnectedOrganization).internalSponsors = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["modifiedDateTime", (o, n) => { (o as unknown as ConnectedOrganization).modifiedDateTime = n.getDateValue(); }],
            ["state", (o, n) => { (o as unknown as ConnectedOrganization).state = n.getEnumValue<ConnectedOrganizationState>(ConnectedOrganizationState); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<DirectoryObject>("externalSponsors", this.externalSponsors);
        writer.writeCollectionOfObjectValues<IdentitySource>("identitySources", this.identitySources);
        writer.writeCollectionOfObjectValues<DirectoryObject>("internalSponsors", this.internalSponsors);
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        writer.writeEnumValue<ConnectedOrganizationState>("state", this.state);
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the description property value. The description of the connected organization.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the displayName property value. The display name of the connected organization. Supports $filter (eq).
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the externalSponsors property value. Nullable.
     * @param value Value to set for the externalSponsors property.
     */
    public set externalSponsors(value: DirectoryObject[] | undefined) {
        this._externalSponsors = value;
    };
    /**
     * Sets the identitySources property value. The identity sources in this connected organization, one of azureActiveDirectoryTenant, domainIdentitySource or externalDomainFederation. Nullable.
     * @param value Value to set for the identitySources property.
     */
    public set identitySources(value: IdentitySource[] | undefined) {
        this._identitySources = value;
    };
    /**
     * Sets the internalSponsors property value. Nullable.
     * @param value Value to set for the internalSponsors property.
     */
    public set internalSponsors(value: DirectoryObject[] | undefined) {
        this._internalSponsors = value;
    };
    /**
     * Sets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the modifiedDateTime property.
     */
    public set modifiedDateTime(value: Date | undefined) {
        this._modifiedDateTime = value;
    };
    /**
     * Sets the state property value. The state of a connected organization defines whether assignment policies with requestor scope type AllConfiguredConnectedOrganizationSubjects are applicable or not.  The possible values are: configured, proposed, unknownFutureValue.
     * @param value Value to set for the state property.
     */
    public set state(value: ConnectedOrganizationState | undefined) {
        this._state = value;
    };
}
