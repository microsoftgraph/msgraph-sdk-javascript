import {Entity} from './entity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SingleValueLegacyExtendedProperty extends Entity implements Parsable {
    /** A property value.  */
    private _value?: string | undefined;
    /**
     * Instantiates a new singleValueLegacyExtendedProperty and sets the default values.
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
            ["value", (o, n) => { (o as unknown as SingleValueLegacyExtendedProperty).value = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("value", this.value);
    };
    /**
     * Gets the value property value. A property value.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. A property value.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
