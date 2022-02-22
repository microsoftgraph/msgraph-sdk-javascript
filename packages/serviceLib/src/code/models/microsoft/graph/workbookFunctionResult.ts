import {Entity, Json} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookFunctionResult extends Entity implements Parsable {
    private _error_escaped?: string | undefined;
    private _value?: Json | undefined;
    /**
     * Instantiates a new workbookFunctionResult and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the error property value. 
     * @returns a string
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Gets the value property value. 
     * @returns a Json
     */
    public get value() {
        return this._value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["error", (o, n) => { (o as unknown as WorkbookFunctionResult).error_escaped = n.getStringValue(); }],
            ["value", (o, n) => { (o as unknown as WorkbookFunctionResult).value = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("error", this.error_escaped);
        writer.writeObjectValue<Json>("value", this.value);
    };
    /**
     * Sets the error property value. 
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: string | undefined) {
        this._error_escaped = value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: Json | undefined) {
        this._value = value;
    };
}
