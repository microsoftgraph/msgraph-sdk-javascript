import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingQuestionAssignment implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The ID of the custom question.  */
    private _isRequired?: boolean | undefined;
    /** Indicates whether it is mandatory to answer the custom question.  */
    private _questionId?: string | undefined;
    /**
     * Instantiates a new bookingQuestionAssignment and sets the default values.
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
     * Gets the isRequired property value. The ID of the custom question.
     * @returns a boolean
     */
    public get isRequired() {
        return this._isRequired;
    };
    /**
     * Gets the questionId property value. Indicates whether it is mandatory to answer the custom question.
     * @returns a string
     */
    public get questionId() {
        return this._questionId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["isRequired", (o, n) => { (o as unknown as BookingQuestionAssignment).isRequired = n.getBooleanValue(); }],
            ["questionId", (o, n) => { (o as unknown as BookingQuestionAssignment).questionId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isRequired", this.isRequired);
        writer.writeStringValue("questionId", this.questionId);
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
     * Sets the isRequired property value. The ID of the custom question.
     * @param value Value to set for the isRequired property.
     */
    public set isRequired(value: boolean | undefined) {
        this._isRequired = value;
    };
    /**
     * Sets the questionId property value. Indicates whether it is mandatory to answer the custom question.
     * @param value Value to set for the questionId property.
     */
    public set questionId(value: string | undefined) {
        this._questionId = value;
    };
}
