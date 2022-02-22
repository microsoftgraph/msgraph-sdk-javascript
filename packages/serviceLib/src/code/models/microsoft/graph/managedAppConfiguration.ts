import {KeyValuePair, ManagedAppPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppConfiguration extends ManagedAppPolicy implements Parsable {
    /** A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service  */
    private _customSettings?: KeyValuePair[] | undefined;
    /**
     * Instantiates a new managedAppConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the customSettings property value. A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service
     * @returns a keyValuePair
     */
    public get customSettings() {
        return this._customSettings;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["customSettings", (o, n) => { (o as unknown as ManagedAppConfiguration).customSettings = n.getCollectionOfObjectValues<KeyValuePair>(KeyValuePair); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<KeyValuePair>("customSettings", this.customSettings);
    };
    /**
     * Sets the customSettings property value. A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service
     * @param value Value to set for the customSettings property.
     */
    public set customSettings(value: KeyValuePair[] | undefined) {
        this._customSettings = value;
    };
}
