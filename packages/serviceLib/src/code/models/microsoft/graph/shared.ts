import {IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Shared implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The identity of the owner of the shared item. Read-only.  */
    private _owner?: IdentitySet | undefined;
    /** Indicates the scope of how the item is shared: anonymous, organization, or users. Read-only.  */
    private _scope?: string | undefined;
    /** The identity of the user who shared the item. Read-only.  */
    private _sharedBy?: IdentitySet | undefined;
    /** The UTC date and time when the item was shared. Read-only.  */
    private _sharedDateTime?: Date | undefined;
    /**
     * Instantiates a new shared and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the owner property value. The identity of the owner of the shared item. Read-only.
     * @returns a identitySet
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Gets the scope property value. Indicates the scope of how the item is shared: anonymous, organization, or users. Read-only.
     * @returns a string
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Gets the sharedBy property value. The identity of the user who shared the item. Read-only.
     * @returns a identitySet
     */
    public get sharedBy() {
        return this._sharedBy;
    };
    /**
     * Gets the sharedDateTime property value. The UTC date and time when the item was shared. Read-only.
     * @returns a Date
     */
    public get sharedDateTime() {
        return this._sharedDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["owner", (o, n) => { (o as unknown as Shared).owner = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["scope", (o, n) => { (o as unknown as Shared).scope = n.getStringValue(); }],
            ["sharedBy", (o, n) => { (o as unknown as Shared).sharedBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["sharedDateTime", (o, n) => { (o as unknown as Shared).sharedDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<IdentitySet>("owner", this.owner);
        writer.writeStringValue("scope", this.scope);
        writer.writeObjectValue<IdentitySet>("sharedBy", this.sharedBy);
        writer.writeDateValue("sharedDateTime", this.sharedDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the owner property value. The identity of the owner of the shared item. Read-only.
     * @param value Value to set for the owner property.
     */
    public set owner(value: IdentitySet | undefined) {
        this._owner = value;
    };
    /**
     * Sets the scope property value. Indicates the scope of how the item is shared: anonymous, organization, or users. Read-only.
     * @param value Value to set for the scope property.
     */
    public set scope(value: string | undefined) {
        this._scope = value;
    };
    /**
     * Sets the sharedBy property value. The identity of the user who shared the item. Read-only.
     * @param value Value to set for the sharedBy property.
     */
    public set sharedBy(value: IdentitySet | undefined) {
        this._sharedBy = value;
    };
    /**
     * Sets the sharedDateTime property value. The UTC date and time when the item was shared. Read-only.
     * @param value Value to set for the sharedDateTime property.
     */
    public set sharedDateTime(value: Date | undefined) {
        this._sharedDateTime = value;
    };
}
