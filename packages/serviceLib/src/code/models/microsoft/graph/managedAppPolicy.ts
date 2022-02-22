import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppPolicy extends Entity implements Parsable {
    /** The date and time the policy was created.  */
    private _createdDateTime?: Date | undefined;
    /** The policy's description.  */
    private _description?: string | undefined;
    /** Policy display name.  */
    private _displayName?: string | undefined;
    /** Last time the policy was modified.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** Version of the entity.  */
    private _version?: string | undefined;
    /**
     * Instantiates a new managedAppPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date and time the policy was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the description property value. The policy's description.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the displayName property value. Policy display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the lastModifiedDateTime property value. Last time the policy was modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the version property value. Version of the entity.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdDateTime", (o, n) => { (o as unknown as ManagedAppPolicy).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as ManagedAppPolicy).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as ManagedAppPolicy).displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as ManagedAppPolicy).lastModifiedDateTime = n.getDateValue(); }],
            ["version", (o, n) => { (o as unknown as ManagedAppPolicy).version = n.getStringValue(); }],
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
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Sets the createdDateTime property value. The date and time the policy was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the description property value. The policy's description.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the displayName property value. Policy display name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. Last time the policy was modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the version property value. Version of the entity.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
