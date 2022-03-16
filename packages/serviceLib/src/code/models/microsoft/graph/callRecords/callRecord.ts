import {Entity, IdentitySet} from '../';
import {createIdentitySetFromDiscriminatorValue} from '../createIdentitySetFromDiscriminatorValue';
import {CallType} from './callType';
import {createSessionFromDiscriminatorValue} from './createSessionFromDiscriminatorValue';
import {Session} from './index';
import {Modality} from './modality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallRecord extends Entity implements Parsable {
    /** UTC time when the last user left the call. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _endDateTime?: Date | undefined;
    /** Meeting URL associated to the call. May not be available for a peerToPeer call record type.  */
    private _joinWebUrl?: string | undefined;
    /** UTC time when the call record was created. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _lastModifiedDateTime?: Date | undefined;
    /** List of all the modalities used in the call. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.  */
    private _modalities?: Modality[] | undefined;
    /** The organizing party's identity.  */
    private _organizer?: IdentitySet | undefined;
    /** List of distinct identities involved in the call.  */
    private _participants?: IdentitySet[] | undefined;
    /** List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable.  */
    private _sessions?: Session[] | undefined;
    /** UTC time when the first user joined the call. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _startDateTime?: Date | undefined;
    /** Indicates the type of the call. Possible values are: unknown, groupCall, peerToPeer, unknownFutureValue.  */
    private _type?: CallType | undefined;
    /** Monotonically increasing version of the call record. Higher version call records with the same id includes additional data compared to the lower version.  */
    private _version?: number | undefined;
    /**
     * Instantiates a new callRecord and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the endDateTime property value. UTC time when the last user left the call. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. UTC time when the last user left the call. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["endDateTime", (o, n) => { (o as unknown as CallRecord).endDateTime = n.getDateValue(); }],
            ["joinWebUrl", (o, n) => { (o as unknown as CallRecord).joinWebUrl = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as CallRecord).lastModifiedDateTime = n.getDateValue(); }],
            ["modalities", (o, n) => { (o as unknown as CallRecord).modalities = n.getEnumValues<Modality>(Modality); }],
            ["organizer", (o, n) => { (o as unknown as CallRecord).organizer = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["participants", (o, n) => { (o as unknown as CallRecord).participants = n.getCollectionOfObjectValues<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["sessions", (o, n) => { (o as unknown as CallRecord).sessions = n.getCollectionOfObjectValues<Session>(createSessionFromDiscriminatorValue); }],
            ["startDateTime", (o, n) => { (o as unknown as CallRecord).startDateTime = n.getDateValue(); }],
            ["type", (o, n) => { (o as unknown as CallRecord).type = n.getEnumValue<CallType>(CallType); }],
            ["version", (o, n) => { (o as unknown as CallRecord).version = n.getNumberValue(); }],
        ]);
    };
    /**
     * Gets the joinWebUrl property value. Meeting URL associated to the call. May not be available for a peerToPeer call record type.
     * @returns a string
     */
    public get joinWebUrl() {
        return this._joinWebUrl;
    };
    /**
     * Sets the joinWebUrl property value. Meeting URL associated to the call. May not be available for a peerToPeer call record type.
     * @param value Value to set for the joinWebUrl property.
     */
    public set joinWebUrl(value: string | undefined) {
        this._joinWebUrl = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. UTC time when the call record was created. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. UTC time when the call record was created. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the modalities property value. List of all the modalities used in the call. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.
     * @returns a modality
     */
    public get modalities() {
        return this._modalities;
    };
    /**
     * Sets the modalities property value. List of all the modalities used in the call. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.
     * @param value Value to set for the modalities property.
     */
    public set modalities(value: Modality[] | undefined) {
        this._modalities = value;
    };
    /**
     * Gets the organizer property value. The organizing party's identity.
     * @returns a identitySet
     */
    public get organizer() {
        return this._organizer;
    };
    /**
     * Sets the organizer property value. The organizing party's identity.
     * @param value Value to set for the organizer property.
     */
    public set organizer(value: IdentitySet | undefined) {
        this._organizer = value;
    };
    /**
     * Gets the participants property value. List of distinct identities involved in the call.
     * @returns a identitySet
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. List of distinct identities involved in the call.
     * @param value Value to set for the participants property.
     */
    public set participants(value: IdentitySet[] | undefined) {
        this._participants = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        this.modalities && writer.writeEnumValue<Modality>("modalities", ...this.modalities);
        writer.writeObjectValue<IdentitySet>("organizer", this.organizer);
        writer.writeCollectionOfObjectValues<IdentitySet>("participants", this.participants);
        writer.writeCollectionOfObjectValues<Session>("sessions", this.sessions);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeEnumValue<CallType>("type", this.type);
        writer.writeNumberValue("version", this.version);
    };
    /**
     * Gets the sessions property value. List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable.
     * @returns a session
     */
    public get sessions() {
        return this._sessions;
    };
    /**
     * Sets the sessions property value. List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable.
     * @param value Value to set for the sessions property.
     */
    public set sessions(value: Session[] | undefined) {
        this._sessions = value;
    };
    /**
     * Gets the startDateTime property value. UTC time when the first user joined the call. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. UTC time when the first user joined the call. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the type property value. Indicates the type of the call. Possible values are: unknown, groupCall, peerToPeer, unknownFutureValue.
     * @returns a callType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Indicates the type of the call. Possible values are: unknown, groupCall, peerToPeer, unknownFutureValue.
     * @param value Value to set for the type property.
     */
    public set type(value: CallType | undefined) {
        this._type = value;
    };
    /**
     * Gets the version property value. Monotonically increasing version of the call record. Higher version call records with the same id includes additional data compared to the lower version.
     * @returns a int64
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Monotonically increasing version of the call record. Higher version call records with the same id includes additional data compared to the lower version.
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        this._version = value;
    };
}
