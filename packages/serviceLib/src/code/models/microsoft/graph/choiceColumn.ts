import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChoiceColumn implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** If true, allows custom values that aren't in the configured choices.  */
    private _allowTextEntry?: boolean | undefined;
    /** The list of values available for this column.  */
    private _choices?: string[] | undefined;
    /** How the choices are to be presented in the UX. Must be one of checkBoxes, dropDownMenu, or radioButtons  */
    private _displayAs?: string | undefined;
    /**
     * Instantiates a new choiceColumn and sets the default values.
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
     * Gets the allowTextEntry property value. If true, allows custom values that aren't in the configured choices.
     * @returns a boolean
     */
    public get allowTextEntry() {
        return this._allowTextEntry;
    };
    /**
     * Gets the choices property value. The list of values available for this column.
     * @returns a string
     */
    public get choices() {
        return this._choices;
    };
    /**
     * Gets the displayAs property value. How the choices are to be presented in the UX. Must be one of checkBoxes, dropDownMenu, or radioButtons
     * @returns a string
     */
    public get displayAs() {
        return this._displayAs;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowTextEntry", (o, n) => { (o as unknown as ChoiceColumn).allowTextEntry = n.getBooleanValue(); }],
            ["choices", (o, n) => { (o as unknown as ChoiceColumn).choices = n.getCollectionOfPrimitiveValues<string>(); }],
            ["displayAs", (o, n) => { (o as unknown as ChoiceColumn).displayAs = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowTextEntry", this.allowTextEntry);
        writer.writeCollectionOfPrimitiveValues<string>("choices", this.choices);
        writer.writeStringValue("displayAs", this.displayAs);
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
     * Sets the allowTextEntry property value. If true, allows custom values that aren't in the configured choices.
     * @param value Value to set for the allowTextEntry property.
     */
    public set allowTextEntry(value: boolean | undefined) {
        this._allowTextEntry = value;
    };
    /**
     * Sets the choices property value. The list of values available for this column.
     * @param value Value to set for the choices property.
     */
    public set choices(value: string[] | undefined) {
        this._choices = value;
    };
    /**
     * Sets the displayAs property value. How the choices are to be presented in the UX. Must be one of checkBoxes, dropDownMenu, or radioButtons
     * @param value Value to set for the displayAs property.
     */
    public set displayAs(value: string | undefined) {
        this._displayAs = value;
    };
}
