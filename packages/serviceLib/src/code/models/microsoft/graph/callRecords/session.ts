import {Entity} from '../';
import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {createFailureInfoFromDiscriminatorValue} from './createFailureInfoFromDiscriminatorValue';
import {createSegmentFromDiscriminatorValue} from './createSegmentFromDiscriminatorValue';
import {Endpoint, FailureInfo, Segment} from './index';
import {Modality} from './modality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Session extends Entity implements Parsable {
    /** Endpoint that answered the session.  */
    private _callee?: Endpoint | undefined;
    /** Endpoint that initiated the session.  */
    private _caller?: Endpoint | undefined;
    /** UTC time when the last user left the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _endDateTime?: Date | undefined;
    /** Failure information associated with the session if the session failed.  */
    private _failureInfo?: FailureInfo | undefined;
    /** List of modalities present in the session. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.  */
    private _modalities?: Modality[] | undefined;
    /** The list of segments involved in the session. Read-only. Nullable.  */
    private _segments?: Segment[] | undefined;
    /** UTC time when the first user joined the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _startDateTime?: Date | undefined;
    /**
     * Gets the callee property value. Endpoint that answered the session.
     * @returns a endpoint
     */
    public get callee() {
        return this._callee;
    };
    /**
     * Sets the callee property value. Endpoint that answered the session.
     * @param value Value to set for the callee property.
     */
    public set callee(value: Endpoint | undefined) {
        this._callee = value;
    };
    /**
     * Gets the caller property value. Endpoint that initiated the session.
     * @returns a endpoint
     */
    public get caller() {
        return this._caller;
    };
    /**
     * Sets the caller property value. Endpoint that initiated the session.
     * @param value Value to set for the caller property.
     */
    public set caller(value: Endpoint | undefined) {
        this._caller = value;
    };
    /**
     * Instantiates a new session and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the endDateTime property value. UTC time when the last user left the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. UTC time when the last user left the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Gets the failureInfo property value. Failure information associated with the session if the session failed.
     * @returns a failureInfo
     */
    public get failureInfo() {
        return this._failureInfo;
    };
    /**
     * Sets the failureInfo property value. Failure information associated with the session if the session failed.
     * @param value Value to set for the failureInfo property.
     */
    public set failureInfo(value: FailureInfo | undefined) {
        this._failureInfo = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["callee", (o, n) => { (o as unknown as Session).callee = n.getObjectValue<Endpoint>(createEndpointFromDiscriminatorValue); }],
            ["caller", (o, n) => { (o as unknown as Session).caller = n.getObjectValue<Endpoint>(createEndpointFromDiscriminatorValue); }],
            ["endDateTime", (o, n) => { (o as unknown as Session).endDateTime = n.getDateValue(); }],
            ["failureInfo", (o, n) => { (o as unknown as Session).failureInfo = n.getObjectValue<FailureInfo>(createFailureInfoFromDiscriminatorValue); }],
            ["modalities", (o, n) => { (o as unknown as Session).modalities = n.getEnumValues<Modality>(Modality); }],
            ["segments", (o, n) => { (o as unknown as Session).segments = n.getCollectionOfObjectValues<Segment>(createSegmentFromDiscriminatorValue); }],
            ["startDateTime", (o, n) => { (o as unknown as Session).startDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Gets the modalities property value. List of modalities present in the session. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.
     * @returns a modality
     */
    public get modalities() {
        return this._modalities;
    };
    /**
     * Sets the modalities property value. List of modalities present in the session. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.
     * @param value Value to set for the modalities property.
     */
    public set modalities(value: Modality[] | undefined) {
        this._modalities = value;
    };
    /**
     * Gets the segments property value. The list of segments involved in the session. Read-only. Nullable.
     * @returns a segment
     */
    public get segments() {
        return this._segments;
    };
    /**
     * Sets the segments property value. The list of segments involved in the session. Read-only. Nullable.
     * @param value Value to set for the segments property.
     */
    public set segments(value: Segment[] | undefined) {
        this._segments = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Endpoint>("callee", this.callee);
        writer.writeObjectValue<Endpoint>("caller", this.caller);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeObjectValue<FailureInfo>("failureInfo", this.failureInfo);
        this.modalities && writer.writeEnumValue<Modality>("modalities", ...this.modalities);
        writer.writeCollectionOfObjectValues<Segment>("segments", this.segments);
        writer.writeDateValue("startDateTime", this.startDateTime);
    };
    /**
     * Gets the startDateTime property value. UTC time when the first user joined the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. UTC time when the first user joined the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
}
