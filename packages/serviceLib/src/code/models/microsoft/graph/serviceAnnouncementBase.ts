import {Entity, KeyValuePair} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceAnnouncementBase extends Entity implements Parsable {
    /** Additional details about service event. This property doesn't support filters.  */
    private _details?: KeyValuePair[] | undefined;
    /** The end time of the service event.  */
    private _endDateTime?: Date | undefined;
    /** The last modified time of the service event.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** The start time of the service event.  */
    private _startDateTime?: Date | undefined;
    /** The title of the service event.  */
    private _title?: string | undefined;
    /**
     * Instantiates a new serviceAnnouncementBase and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the details property value. Additional details about service event. This property doesn't support filters.
     * @returns a keyValuePair
     */
    public get details() {
        return this._details;
    };
    /**
     * Gets the endDateTime property value. The end time of the service event.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Gets the lastModifiedDateTime property value. The last modified time of the service event.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the startDateTime property value. The start time of the service event.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Gets the title property value. The title of the service event.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["details", (o, n) => { (o as unknown as ServiceAnnouncementBase).details = n.getCollectionOfObjectValues<KeyValuePair>(KeyValuePair); }],
            ["endDateTime", (o, n) => { (o as unknown as ServiceAnnouncementBase).endDateTime = n.getDateValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as ServiceAnnouncementBase).lastModifiedDateTime = n.getDateValue(); }],
            ["startDateTime", (o, n) => { (o as unknown as ServiceAnnouncementBase).startDateTime = n.getDateValue(); }],
            ["title", (o, n) => { (o as unknown as ServiceAnnouncementBase).title = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<KeyValuePair>("details", this.details);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("title", this.title);
    };
    /**
     * Sets the details property value. Additional details about service event. This property doesn't support filters.
     * @param value Value to set for the details property.
     */
    public set details(value: KeyValuePair[] | undefined) {
        this._details = value;
    };
    /**
     * Sets the endDateTime property value. The end time of the service event.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. The last modified time of the service event.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the startDateTime property value. The start time of the service event.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Sets the title property value. The title of the service event.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
