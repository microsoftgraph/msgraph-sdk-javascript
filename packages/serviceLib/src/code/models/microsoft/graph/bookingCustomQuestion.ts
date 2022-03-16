import {AnswerInputType} from './answerInputType';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingCustomQuestion extends Entity implements Parsable {
    /** The expected answer type. The possible values are: text, radioButton, unknownFutureValue.  */
    private _answerInputType?: AnswerInputType | undefined;
    /** List of possible answer values.  */
    private _answerOptions?: string[] | undefined;
    /** Display name of this entity.  */
    private _displayName?: string | undefined;
    /**
     * Gets the answerInputType property value. The expected answer type. The possible values are: text, radioButton, unknownFutureValue.
     * @returns a answerInputType
     */
    public get answerInputType() {
        return this._answerInputType;
    };
    /**
     * Sets the answerInputType property value. The expected answer type. The possible values are: text, radioButton, unknownFutureValue.
     * @param value Value to set for the answerInputType property.
     */
    public set answerInputType(value: AnswerInputType | undefined) {
        this._answerInputType = value;
    };
    /**
     * Gets the answerOptions property value. List of possible answer values.
     * @returns a string
     */
    public get answerOptions() {
        return this._answerOptions;
    };
    /**
     * Sets the answerOptions property value. List of possible answer values.
     * @param value Value to set for the answerOptions property.
     */
    public set answerOptions(value: string[] | undefined) {
        this._answerOptions = value;
    };
    /**
     * Instantiates a new bookingCustomQuestion and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Display name of this entity.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of this entity.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["answerInputType", (o, n) => { (o as unknown as BookingCustomQuestion).answerInputType = n.getEnumValue<AnswerInputType>(AnswerInputType); }],
            ["answerOptions", (o, n) => { (o as unknown as BookingCustomQuestion).answerOptions = n.getCollectionOfPrimitiveValues<string>(); }],
            ["displayName", (o, n) => { (o as unknown as BookingCustomQuestion).displayName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<AnswerInputType>("answerInputType", this.answerInputType);
        writer.writeCollectionOfPrimitiveValues<string>("answerOptions", this.answerOptions);
        writer.writeStringValue("displayName", this.displayName);
    };
}
