import {FilterMode} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessFilter implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Mode to use for the filter. Possible values are include or exclude.  */
    private _mode?: FilterMode | undefined;
    /** Rule syntax is similar to that used for membership rules for groups in Azure Active Directory (Azure AD). For details, see rules with multiple expressions  */
    private _rule?: string | undefined;
    /**
     * Instantiates a new conditionalAccessFilter and sets the default values.
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
     * Gets the mode property value. Mode to use for the filter. Possible values are include or exclude.
     * @returns a filterMode
     */
    public get mode() {
        return this._mode;
    };
    /**
     * Gets the rule property value. Rule syntax is similar to that used for membership rules for groups in Azure Active Directory (Azure AD). For details, see rules with multiple expressions
     * @returns a string
     */
    public get rule() {
        return this._rule;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["mode", (o, n) => { (o as unknown as ConditionalAccessFilter).mode = n.getEnumValue<FilterMode>(FilterMode); }],
            ["rule", (o, n) => { (o as unknown as ConditionalAccessFilter).rule = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<FilterMode>("mode", this.mode);
        writer.writeStringValue("rule", this.rule);
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
     * Sets the mode property value. Mode to use for the filter. Possible values are include or exclude.
     * @param value Value to set for the mode property.
     */
    public set mode(value: FilterMode | undefined) {
        this._mode = value;
    };
    /**
     * Sets the rule property value. Rule syntax is similar to that used for membership rules for groups in Azure Active Directory (Azure AD). For details, see rules with multiple expressions
     * @param value Value to set for the rule property.
     */
    public set rule(value: string | undefined) {
        this._rule = value;
    };
}
