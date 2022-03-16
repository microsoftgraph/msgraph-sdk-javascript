import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonOrGroupColumn implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Indicates whether multiple values can be selected from the source.  */
    private _allowMultipleSelection?: boolean | undefined;
    /** Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly.  */
    private _chooseFromType?: string | undefined;
    /** How to display the information about the person or group chosen. See below.  */
    private _displayAs?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the allowMultipleSelection property value. Indicates whether multiple values can be selected from the source.
     * @returns a boolean
     */
    public get allowMultipleSelection() {
        return this._allowMultipleSelection;
    };
    /**
     * Sets the allowMultipleSelection property value. Indicates whether multiple values can be selected from the source.
     * @param value Value to set for the allowMultipleSelection property.
     */
    public set allowMultipleSelection(value: boolean | undefined) {
        this._allowMultipleSelection = value;
    };
    /**
     * Gets the chooseFromType property value. Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly.
     * @returns a string
     */
    public get chooseFromType() {
        return this._chooseFromType;
    };
    /**
     * Sets the chooseFromType property value. Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly.
     * @param value Value to set for the chooseFromType property.
     */
    public set chooseFromType(value: string | undefined) {
        this._chooseFromType = value;
    };
    /**
     * Instantiates a new personOrGroupColumn and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the displayAs property value. How to display the information about the person or group chosen. See below.
     * @returns a string
     */
    public get displayAs() {
        return this._displayAs;
    };
    /**
     * Sets the displayAs property value. How to display the information about the person or group chosen. See below.
     * @param value Value to set for the displayAs property.
     */
    public set displayAs(value: string | undefined) {
        this._displayAs = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowMultipleSelection", (o, n) => { (o as unknown as PersonOrGroupColumn).allowMultipleSelection = n.getBooleanValue(); }],
            ["chooseFromType", (o, n) => { (o as unknown as PersonOrGroupColumn).chooseFromType = n.getStringValue(); }],
            ["displayAs", (o, n) => { (o as unknown as PersonOrGroupColumn).displayAs = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowMultipleSelection", this.allowMultipleSelection);
        writer.writeStringValue("chooseFromType", this.chooseFromType);
        writer.writeStringValue("displayAs", this.displayAs);
        writer.writeAdditionalData(this.additionalData);
    };
}
