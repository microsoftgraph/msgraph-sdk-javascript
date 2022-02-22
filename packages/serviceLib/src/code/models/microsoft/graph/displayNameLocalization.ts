import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DisplayNameLocalization implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** If present, the value of this field contains the displayName string that has been set for the language present in the languageTag field.  */
    private _displayName?: string | undefined;
    /** Provides the language culture-code and friendly name of the language that the displayName field has been provided in.  */
    private _languageTag?: string | undefined;
    /**
     * Instantiates a new displayNameLocalization and sets the default values.
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
     * Gets the displayName property value. If present, the value of this field contains the displayName string that has been set for the language present in the languageTag field.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the languageTag property value. Provides the language culture-code and friendly name of the language that the displayName field has been provided in.
     * @returns a string
     */
    public get languageTag() {
        return this._languageTag;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["displayName", (o, n) => { (o as unknown as DisplayNameLocalization).displayName = n.getStringValue(); }],
            ["languageTag", (o, n) => { (o as unknown as DisplayNameLocalization).languageTag = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("languageTag", this.languageTag);
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
     * Sets the displayName property value. If present, the value of this field contains the displayName string that has been set for the language present in the languageTag field.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the languageTag property value. Provides the language culture-code and friendly name of the language that the displayName field has been provided in.
     * @param value Value to set for the languageTag property.
     */
    public set languageTag(value: string | undefined) {
        this._languageTag = value;
    };
}
