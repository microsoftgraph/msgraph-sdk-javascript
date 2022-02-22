import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ControlScore implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Control action category (Identity, Data, Device, Apps, Infrastructure).  */
    private _controlCategory?: string | undefined;
    /** Control unique name.  */
    private _controlName?: string | undefined;
    /** Description of the control.  */
    private _description?: string | undefined;
    /** Tenant achieved score for the control (it varies day by day depending on tenant operations on the control).  */
    private _score?: number | undefined;
    /**
     * Instantiates a new controlScore and sets the default values.
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
     * Gets the controlCategory property value. Control action category (Identity, Data, Device, Apps, Infrastructure).
     * @returns a string
     */
    public get controlCategory() {
        return this._controlCategory;
    };
    /**
     * Gets the controlName property value. Control unique name.
     * @returns a string
     */
    public get controlName() {
        return this._controlName;
    };
    /**
     * Gets the description property value. Description of the control.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the score property value. Tenant achieved score for the control (it varies day by day depending on tenant operations on the control).
     * @returns a double
     */
    public get score() {
        return this._score;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["controlCategory", (o, n) => { (o as unknown as ControlScore).controlCategory = n.getStringValue(); }],
            ["controlName", (o, n) => { (o as unknown as ControlScore).controlName = n.getStringValue(); }],
            ["description", (o, n) => { (o as unknown as ControlScore).description = n.getStringValue(); }],
            ["score", (o, n) => { (o as unknown as ControlScore).score = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("controlCategory", this.controlCategory);
        writer.writeStringValue("controlName", this.controlName);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("score", this.score);
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
     * Sets the controlCategory property value. Control action category (Identity, Data, Device, Apps, Infrastructure).
     * @param value Value to set for the controlCategory property.
     */
    public set controlCategory(value: string | undefined) {
        this._controlCategory = value;
    };
    /**
     * Sets the controlName property value. Control unique name.
     * @param value Value to set for the controlName property.
     */
    public set controlName(value: string | undefined) {
        this._controlName = value;
    };
    /**
     * Sets the description property value. Description of the control.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the score property value. Tenant achieved score for the control (it varies day by day depending on tenant operations on the control).
     * @param value Value to set for the score property.
     */
    public set score(value: number | undefined) {
        this._score = value;
    };
}
