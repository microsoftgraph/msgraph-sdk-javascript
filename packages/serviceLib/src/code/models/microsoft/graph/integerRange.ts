import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IntegerRange implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The inclusive upper bound of the integer range.  */
    private _end?: number | undefined;
    /** The inclusive lower bound of the integer range.  */
    private _start?: number | undefined;
    /**
     * Instantiates a new integerRange and sets the default values.
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
     * Gets the end property value. The inclusive upper bound of the integer range.
     * @returns a int64
     */
    public get end() {
        return this._end;
    };
    /**
     * Gets the start property value. The inclusive lower bound of the integer range.
     * @returns a int64
     */
    public get start() {
        return this._start;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["end", (o, n) => { (o as unknown as IntegerRange).end = n.getNumberValue(); }],
            ["start", (o, n) => { (o as unknown as IntegerRange).start = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("end", this.end);
        writer.writeNumberValue("start", this.start);
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
     * Sets the end property value. The inclusive upper bound of the integer range.
     * @param value Value to set for the end property.
     */
    public set end(value: number | undefined) {
        this._end = value;
    };
    /**
     * Sets the start property value. The inclusive lower bound of the integer range.
     * @param value Value to set for the start property.
     */
    public set start(value: number | undefined) {
        this._start = value;
    };
}
