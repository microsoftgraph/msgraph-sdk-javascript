import {SettingSourceType} from './settingSourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingSource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Not yet documented  */
    private _displayName?: string | undefined;
    /** Not yet documented  */
    private _id?: string | undefined;
    /** Not yet documented. Possible values are: deviceConfiguration, deviceIntent.  */
    private _sourceType?: SettingSourceType | undefined;
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
     * Instantiates a new settingSource and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the displayName property value. Not yet documented
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Not yet documented
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
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["displayName", (o, n) => { (o as unknown as SettingSource).displayName = n.getStringValue(); }],
            ["id", (o, n) => { (o as unknown as SettingSource).id = n.getStringValue(); }],
            ["sourceType", (o, n) => { (o as unknown as SettingSource).sourceType = n.getEnumValue<SettingSourceType>(SettingSourceType); }],
        ]);
    };
    /**
     * Gets the id property value. Not yet documented
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Not yet documented
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("id", this.id);
        writer.writeEnumValue<SettingSourceType>("sourceType", this.sourceType);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceType property value. Not yet documented. Possible values are: deviceConfiguration, deviceIntent.
     * @returns a settingSourceType
     */
    public get sourceType() {
        return this._sourceType;
    };
    /**
     * Sets the sourceType property value. Not yet documented. Possible values are: deviceConfiguration, deviceIntent.
     * @param value Value to set for the sourceType property.
     */
    public set sourceType(value: SettingSourceType | undefined) {
        this._sourceType = value;
    };
}
