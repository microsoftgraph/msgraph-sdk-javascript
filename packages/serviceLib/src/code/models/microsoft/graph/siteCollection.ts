import {createRootFromDiscriminatorValue} from './createRootFromDiscriminatorValue';
import {Root} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SiteCollection implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The geographic region code for where this site collection resides. Read-only.  */
    private _dataLocationCode?: string | undefined;
    /** The hostname for the site collection. Read-only.  */
    private _hostname?: string | undefined;
    /** If present, indicates that this is a root site collection in SharePoint. Read-only.  */
    private _root?: Root | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new siteCollection and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the dataLocationCode property value. The geographic region code for where this site collection resides. Read-only.
     * @returns a string
     */
    public get dataLocationCode() {
        return this._dataLocationCode;
    };
    /**
     * Sets the dataLocationCode property value. The geographic region code for where this site collection resides. Read-only.
     * @param value Value to set for the dataLocationCode property.
     */
    public set dataLocationCode(value: string | undefined) {
        this._dataLocationCode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["dataLocationCode", (o, n) => { (o as unknown as SiteCollection).dataLocationCode = n.getStringValue(); }],
            ["hostname", (o, n) => { (o as unknown as SiteCollection).hostname = n.getStringValue(); }],
            ["root", (o, n) => { (o as unknown as SiteCollection).root = n.getObjectValue<Root>(createRootFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the hostname property value. The hostname for the site collection. Read-only.
     * @returns a string
     */
    public get hostname() {
        return this._hostname;
    };
    /**
     * Sets the hostname property value. The hostname for the site collection. Read-only.
     * @param value Value to set for the hostname property.
     */
    public set hostname(value: string | undefined) {
        this._hostname = value;
    };
    /**
     * Gets the root property value. If present, indicates that this is a root site collection in SharePoint. Read-only.
     * @returns a root
     */
    public get root() {
        return this._root;
    };
    /**
     * Sets the root property value. If present, indicates that this is a root site collection in SharePoint. Read-only.
     * @param value Value to set for the root property.
     */
    public set root(value: Root | undefined) {
        this._root = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("dataLocationCode", this.dataLocationCode);
        writer.writeStringValue("hostname", this.hostname);
        writer.writeObjectValue<Root>("root", this.root);
        writer.writeAdditionalData(this.additionalData);
    };
}
