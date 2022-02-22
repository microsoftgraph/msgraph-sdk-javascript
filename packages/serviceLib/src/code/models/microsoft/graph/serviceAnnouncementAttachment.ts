import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceAnnouncementAttachment extends Entity implements Parsable {
    /** The attachment content.  */
    private _content?: string | undefined;
    private _contentType?: string | undefined;
    private _lastModifiedDateTime?: Date | undefined;
    private _name?: string | undefined;
    private _size?: number | undefined;
    /**
     * Instantiates a new serviceAnnouncementAttachment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. The attachment content.
     * @returns a binary
     */
    public get content() {
        return this._content;
    };
    /**
     * Gets the contentType property value. 
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Gets the lastModifiedDateTime property value. 
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the size property value. 
     * @returns a integer
     */
    public get size() {
        return this._size;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["content", (o, n) => { (o as unknown as ServiceAnnouncementAttachment).content = n.getStringValue(); }],
            ["contentType", (o, n) => { (o as unknown as ServiceAnnouncementAttachment).contentType = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as ServiceAnnouncementAttachment).lastModifiedDateTime = n.getDateValue(); }],
            ["name", (o, n) => { (o as unknown as ServiceAnnouncementAttachment).name = n.getStringValue(); }],
            ["size", (o, n) => { (o as unknown as ServiceAnnouncementAttachment).size = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("size", this.size);
    };
    /**
     * Sets the content property value. The attachment content.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Sets the contentType property value. 
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        this._contentType = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. 
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the size property value. 
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
}
