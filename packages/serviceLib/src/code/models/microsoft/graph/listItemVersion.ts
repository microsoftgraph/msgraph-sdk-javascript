import {createFieldValueSetFromDiscriminatorValue} from './createFieldValueSetFromDiscriminatorValue';
import {BaseItemVersion, FieldValueSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ListItemVersion extends BaseItemVersion implements Parsable {
    /** A collection of the fields and values for this version of the list item.  */
    private _fields?: FieldValueSet | undefined;
    /**
     * Instantiates a new listItemVersion and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the fields property value. A collection of the fields and values for this version of the list item.
     * @returns a fieldValueSet
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. A collection of the fields and values for this version of the list item.
     * @param value Value to set for the fields property.
     */
    public set fields(value: FieldValueSet | undefined) {
        this._fields = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["fields", (o, n) => { (o as unknown as ListItemVersion).fields = n.getObjectValue<FieldValueSet>(createFieldValueSetFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<FieldValueSet>("fields", this.fields);
    };
}
