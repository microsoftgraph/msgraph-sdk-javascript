import {Entity} from '../';
import {Acl, ExternalItemContent, Properties} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalItem extends Entity implements Parsable {
    /** An array of access control entries. Each entry specifies the access granted to a user or group. Required.  */
    private _acl?: Acl[] | undefined;
    /** A plain-text  representation of the contents of the item. The text in this property is full-text indexed. Optional.  */
    private _content?: ExternalItemContent | undefined;
    /** A property bag with the properties of the item. The properties MUST conform to the schema defined for the externalConnection. Required.  */
    private _properties?: Properties | undefined;
    /**
     * Instantiates a new externalItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the acl property value. An array of access control entries. Each entry specifies the access granted to a user or group. Required.
     * @returns a acl
     */
    public get acl() {
        return this._acl;
    };
    /**
     * Gets the content property value. A plain-text  representation of the contents of the item. The text in this property is full-text indexed. Optional.
     * @returns a externalItemContent
     */
    public get content() {
        return this._content;
    };
    /**
     * Gets the properties property value. A property bag with the properties of the item. The properties MUST conform to the schema defined for the externalConnection. Required.
     * @returns a properties
     */
    public get properties() {
        return this._properties;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["acl", (o, n) => { (o as unknown as ExternalItem).acl = n.getCollectionOfObjectValues<Acl>(Acl); }],
            ["content", (o, n) => { (o as unknown as ExternalItem).content = n.getObjectValue<ExternalItemContent>(ExternalItemContent); }],
            ["properties", (o, n) => { (o as unknown as ExternalItem).properties = n.getObjectValue<Properties>(Properties); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Acl>("acl", this.acl);
        writer.writeObjectValue<ExternalItemContent>("content", this.content);
        writer.writeObjectValue<Properties>("properties", this.properties);
    };
    /**
     * Sets the acl property value. An array of access control entries. Each entry specifies the access granted to a user or group. Required.
     * @param value Value to set for the acl property.
     */
    public set acl(value: Acl[] | undefined) {
        this._acl = value;
    };
    /**
     * Sets the content property value. A plain-text  representation of the contents of the item. The text in this property is full-text indexed. Optional.
     * @param value Value to set for the content property.
     */
    public set content(value: ExternalItemContent | undefined) {
        this._content = value;
    };
    /**
     * Sets the properties property value. A property bag with the properties of the item. The properties MUST conform to the schema defined for the externalConnection. Required.
     * @param value Value to set for the properties property.
     */
    public set properties(value: Properties | undefined) {
        this._properties = value;
    };
}
