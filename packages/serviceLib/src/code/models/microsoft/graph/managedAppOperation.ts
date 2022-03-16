import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppOperation extends Entity implements Parsable {
    /** The operation name.  */
    private _displayName?: string | undefined;
    /** The last time the app operation was modified.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** The current state of the operation  */
    private _state?: string | undefined;
    /** Version of the entity.  */
    private _version?: string | undefined;
    /**
     * Instantiates a new managedAppOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The operation name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The operation name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["displayName", (o, n) => { (o as unknown as ManagedAppOperation).displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as ManagedAppOperation).lastModifiedDateTime = n.getDateValue(); }],
            ["state", (o, n) => { (o as unknown as ManagedAppOperation).state = n.getStringValue(); }],
            ["version", (o, n) => { (o as unknown as ManagedAppOperation).version = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the lastModifiedDateTime property value. The last time the app operation was modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The last time the app operation was modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("state", this.state);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Gets the state property value. The current state of the operation
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The current state of the operation
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
    /**
     * Gets the version property value. Version of the entity.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Version of the entity.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
