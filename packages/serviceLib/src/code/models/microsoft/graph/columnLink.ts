import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ColumnLink extends Entity implements Parsable {
    /** The name of the column  in this content type.  */
    private _name?: string | undefined;
    /**
     * Instantiates a new columnLink and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the name property value. The name of the column  in this content type.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["name", (o, n) => { (o as unknown as ColumnLink).name = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("name", this.name);
    };
    /**
     * Sets the name property value. The name of the column  in this content type.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
}
