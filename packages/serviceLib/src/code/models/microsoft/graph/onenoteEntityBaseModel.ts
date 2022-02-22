import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenoteEntityBaseModel extends Entity implements Parsable {
    /** The endpoint where you can get details about the page. Read-only.  */
    private _self?: string | undefined;
    /**
     * Instantiates a new onenoteEntityBaseModel and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the self property value. The endpoint where you can get details about the page. Read-only.
     * @returns a string
     */
    public get self() {
        return this._self;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["self", (o, n) => { (o as unknown as OnenoteEntityBaseModel).self = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("self", this.self);
    };
    /**
     * Sets the self property value. The endpoint where you can get details about the page. Read-only.
     * @param value Value to set for the self property.
     */
    public set self(value: string | undefined) {
        this._self = value;
    };
}
