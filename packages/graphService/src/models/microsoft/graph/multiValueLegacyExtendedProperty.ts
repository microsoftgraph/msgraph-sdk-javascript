import {Entity} from './entity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MultiValueLegacyExtendedProperty extends Entity implements Parsable {
    /** A collection of property values.  */
    private _value?: string[] | undefined;
    /**
     * Instantiates a new multiValueLegacyExtendedProperty and sets the default values.
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
            ["value", (o, n) => { (o as unknown as MultiValueLegacyExtendedProperty).value = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("value", this.value);
    };
    /**
     * Gets the value property value. A collection of property values.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. A collection of property values.
     * @param value Value to set for the value property.
     */
    public set value(value: string[] | undefined) {
        this._value = value;
    };
}
