import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationCategory extends Entity implements Parsable {
    /** Unique identifier for the category.  */
    private _displayName?: string | undefined;
    /**
     * Instantiates a new educationCategory and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Unique identifier for the category.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["displayName", (o, n) => { (o as unknown as EducationCategory).displayName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
    };
    /**
     * Sets the displayName property value. Unique identifier for the category.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
}
