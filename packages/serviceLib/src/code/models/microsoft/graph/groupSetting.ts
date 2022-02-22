import {Entity, SettingValue} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupSetting extends Entity implements Parsable {
    /** Display name of this group of settings, which comes from the associated template.  */
    private _displayName?: string | undefined;
    /** Unique identifier for the template used to create this group of settings. Read-only.  */
    private _templateId?: string | undefined;
    /** Collection of name value pairs. Must contain and set all the settings defined in the template.  */
    private _values?: SettingValue[] | undefined;
    /**
     * Instantiates a new groupSetting and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Display name of this group of settings, which comes from the associated template.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the templateId property value. Unique identifier for the template used to create this group of settings. Read-only.
     * @returns a string
     */
    public get templateId() {
        return this._templateId;
    };
    /**
     * Gets the values property value. Collection of name value pairs. Must contain and set all the settings defined in the template.
     * @returns a settingValue
     */
    public get values() {
        return this._values;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["displayName", (o, n) => { (o as unknown as GroupSetting).displayName = n.getStringValue(); }],
            ["templateId", (o, n) => { (o as unknown as GroupSetting).templateId = n.getStringValue(); }],
            ["values", (o, n) => { (o as unknown as GroupSetting).values = n.getCollectionOfObjectValues<SettingValue>(SettingValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("templateId", this.templateId);
        writer.writeCollectionOfObjectValues<SettingValue>("values", this.values);
    };
    /**
     * Sets the displayName property value. Display name of this group of settings, which comes from the associated template.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the templateId property value. Unique identifier for the template used to create this group of settings. Read-only.
     * @param value Value to set for the templateId property.
     */
    public set templateId(value: string | undefined) {
        this._templateId = value;
    };
    /**
     * Sets the values property value. Collection of name value pairs. Must contain and set all the settings defined in the template.
     * @param value Value to set for the values property.
     */
    public set values(value: SettingValue[] | undefined) {
        this._values = value;
    };
}
