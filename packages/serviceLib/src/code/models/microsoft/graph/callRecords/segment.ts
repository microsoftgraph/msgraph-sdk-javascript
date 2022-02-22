import {Entity} from '../';
import {Endpoint, FailureInfo, Media} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Segment extends Entity implements Parsable {
    /** Endpoint that answered this segment.  */
    private _callee?: Endpoint | undefined;
    /** Endpoint that initiated this segment.  */
    private _caller?: Endpoint | undefined;
    /** UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _endDateTime?: Date | undefined;
    /** Failure information associated with the segment if it failed.  */
    private _failureInfo?: FailureInfo | undefined;
    /** Media associated with this segment.  */
    private _media?: Media[] | undefined;
    /** UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _startDateTime?: Date | undefined;
    /**
     * Instantiates a new segment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the callee property value. Endpoint that answered this segment.
     * @returns a endpoint
     */
    public get callee() {
        return this._callee;
    };
    /**
     * Gets the caller property value. Endpoint that initiated this segment.
     * @returns a endpoint
     */
    public get caller() {
        return this._caller;
    };
    /**
     * Gets the endDateTime property value. UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Gets the failureInfo property value. Failure information associated with the segment if it failed.
     * @returns a failureInfo
     */
    public get failureInfo() {
        return this._failureInfo;
    };
    /**
     * Gets the media property value. Media associated with this segment.
     * @returns a media
     */
    public get media() {
        return this._media;
    };
    /**
     * Gets the startDateTime property value. UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["callee", (o, n) => { (o as unknown as Segment).callee = n.getObjectValue<Endpoint>(Endpoint); }],
            ["caller", (o, n) => { (o as unknown as Segment).caller = n.getObjectValue<Endpoint>(Endpoint); }],
            ["endDateTime", (o, n) => { (o as unknown as Segment).endDateTime = n.getDateValue(); }],
            ["failureInfo", (o, n) => { (o as unknown as Segment).failureInfo = n.getObjectValue<FailureInfo>(FailureInfo); }],
            ["media", (o, n) => { (o as unknown as Segment).media = n.getCollectionOfObjectValues<Media>(Media); }],
            ["startDateTime", (o, n) => { (o as unknown as Segment).startDateTime = n.getDateValue(); }],
        ]);
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
        writer.writeCollectionOfObjectValues<Media>("media", this.media);
        writer.writeDateValue("startDateTime", this.startDateTime);
    };
    /**
     * Sets the callee property value. Endpoint that answered this segment.
     * @param value Value to set for the callee property.
     */
    public set callee(value: Endpoint | undefined) {
        this._callee = value;
    };
    /**
     * Sets the caller property value. Endpoint that initiated this segment.
     * @param value Value to set for the caller property.
     */
    public set caller(value: Endpoint | undefined) {
        this._caller = value;
    };
    /**
     * Sets the endDateTime property value. UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Sets the failureInfo property value. Failure information associated with the segment if it failed.
     * @param value Value to set for the failureInfo property.
     */
    public set failureInfo(value: FailureInfo | undefined) {
        this._failureInfo = value;
    };
    /**
     * Sets the media property value. Media associated with this segment.
     * @param value Value to set for the media property.
     */
    public set media(value: Media[] | undefined) {
        this._media = value;
    };
    /**
     * Sets the startDateTime property value. UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
}
