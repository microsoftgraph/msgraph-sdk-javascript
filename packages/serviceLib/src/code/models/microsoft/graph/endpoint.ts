import {DirectoryObject} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Endpoint extends DirectoryObject implements Parsable {
    /** Describes the capability that is associated with this resource. (e.g. Messages, Conversations, etc.)  Not nullable. Read-only.  */
    private _capability?: string | undefined;
    /** Application id of the publishing underlying service. Not nullable. Read-only.  */
    private _providerId?: string | undefined;
    /** Name of the publishing underlying service. Read-only.  */
    private _providerName?: string | undefined;
    /** For Microsoft 365 groups, this is set to a well-known name for the resource (e.g. Yammer.FeedURL etc.). Not nullable. Read-only.  */
    private _providerResourceId?: string | undefined;
    /** URL of the published resource. Not nullable. Read-only.  */
    private _uri?: string | undefined;
    /**
     * Gets the capability property value. Describes the capability that is associated with this resource. (e.g. Messages, Conversations, etc.)  Not nullable. Read-only.
     * @returns a string
     */
    public get capability() {
        return this._capability;
    };
    /**
     * Sets the capability property value. Describes the capability that is associated with this resource. (e.g. Messages, Conversations, etc.)  Not nullable. Read-only.
     * @param value Value to set for the capability property.
     */
    public set capability(value: string | undefined) {
        this._capability = value;
    };
    /**
     * Instantiates a new endpoint and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["capability", (o, n) => { (o as unknown as Endpoint).capability = n.getStringValue(); }],
            ["providerId", (o, n) => { (o as unknown as Endpoint).providerId = n.getStringValue(); }],
            ["providerName", (o, n) => { (o as unknown as Endpoint).providerName = n.getStringValue(); }],
            ["providerResourceId", (o, n) => { (o as unknown as Endpoint).providerResourceId = n.getStringValue(); }],
            ["uri", (o, n) => { (o as unknown as Endpoint).uri = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the providerId property value. Application id of the publishing underlying service. Not nullable. Read-only.
     * @returns a string
     */
    public get providerId() {
        return this._providerId;
    };
    /**
     * Sets the providerId property value. Application id of the publishing underlying service. Not nullable. Read-only.
     * @param value Value to set for the providerId property.
     */
    public set providerId(value: string | undefined) {
        this._providerId = value;
    };
    /**
     * Gets the providerName property value. Name of the publishing underlying service. Read-only.
     * @returns a string
     */
    public get providerName() {
        return this._providerName;
    };
    /**
     * Sets the providerName property value. Name of the publishing underlying service. Read-only.
     * @param value Value to set for the providerName property.
     */
    public set providerName(value: string | undefined) {
        this._providerName = value;
    };
    /**
     * Gets the providerResourceId property value. For Microsoft 365 groups, this is set to a well-known name for the resource (e.g. Yammer.FeedURL etc.). Not nullable. Read-only.
     * @returns a string
     */
    public get providerResourceId() {
        return this._providerResourceId;
    };
    /**
     * Sets the providerResourceId property value. For Microsoft 365 groups, this is set to a well-known name for the resource (e.g. Yammer.FeedURL etc.). Not nullable. Read-only.
     * @param value Value to set for the providerResourceId property.
     */
    public set providerResourceId(value: string | undefined) {
        this._providerResourceId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("capability", this.capability);
        writer.writeStringValue("providerId", this.providerId);
        writer.writeStringValue("providerName", this.providerName);
        writer.writeStringValue("providerResourceId", this.providerResourceId);
        writer.writeStringValue("uri", this.uri);
    };
    /**
     * Gets the uri property value. URL of the published resource. Not nullable. Read-only.
     * @returns a string
     */
    public get uri() {
        return this._uri;
    };
    /**
     * Sets the uri property value. URL of the published resource. Not nullable. Read-only.
     * @param value Value to set for the uri property.
     */
    public set uri(value: string | undefined) {
        this._uri = value;
    };
}
