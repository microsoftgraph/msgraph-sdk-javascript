import {Entity, MobileAppIdentifier} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedMobileApp extends Entity implements Parsable {
    /** The identifier for an app with it's operating system type.  */
    private _mobileAppIdentifier?: MobileAppIdentifier | undefined;
    /** Version of the entity.  */
    private _version?: string | undefined;
    /**
     * Instantiates a new managedMobileApp and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the mobileAppIdentifier property value. The identifier for an app with it's operating system type.
     * @returns a mobileAppIdentifier
     */
    public get mobileAppIdentifier() {
        return this._mobileAppIdentifier;
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
            ["mobileAppIdentifier", (o, n) => { (o as unknown as ManagedMobileApp).mobileAppIdentifier = n.getObjectValue<MobileAppIdentifier>(MobileAppIdentifier); }],
            ["version", (o, n) => { (o as unknown as ManagedMobileApp).version = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<MobileAppIdentifier>("mobileAppIdentifier", this.mobileAppIdentifier);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Sets the mobileAppIdentifier property value. The identifier for an app with it's operating system type.
     * @param value Value to set for the mobileAppIdentifier property.
     */
    public set mobileAppIdentifier(value: MobileAppIdentifier | undefined) {
        this._mobileAppIdentifier = value;
    };
    /**
     * Sets the version property value. Version of the entity.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
