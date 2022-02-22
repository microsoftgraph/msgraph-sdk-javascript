import {RecurrencePattern, RecurrenceRange} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PatternedRecurrence implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The frequency of an event.  For access reviews: Do not specify this property for a one-time access review.  Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported.  */
    private _pattern?: RecurrencePattern | undefined;
    /** The duration of an event.  */
    private _range?: RecurrenceRange | undefined;
    /**
     * Instantiates a new patternedRecurrence and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the pattern property value. The frequency of an event.  For access reviews: Do not specify this property for a one-time access review.  Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported.
     * @returns a recurrencePattern
     */
    public get pattern() {
        return this._pattern;
    };
    /**
     * Gets the range property value. The duration of an event.
     * @returns a recurrenceRange
     */
    public get range() {
        return this._range;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["pattern", (o, n) => { (o as unknown as PatternedRecurrence).pattern = n.getObjectValue<RecurrencePattern>(RecurrencePattern); }],
            ["range", (o, n) => { (o as unknown as PatternedRecurrence).range = n.getObjectValue<RecurrenceRange>(RecurrenceRange); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<RecurrencePattern>("pattern", this.pattern);
        writer.writeObjectValue<RecurrenceRange>("range", this.range);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the pattern property value. The frequency of an event.  For access reviews: Do not specify this property for a one-time access review.  Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported.
     * @param value Value to set for the pattern property.
     */
    public set pattern(value: RecurrencePattern | undefined) {
        this._pattern = value;
    };
    /**
     * Sets the range property value. The duration of an event.
     * @param value Value to set for the range property.
     */
    public set range(value: RecurrenceRange | undefined) {
        this._range = value;
    };
}
