import {createSettingValueFromDiscriminatorValue} from './createSettingValueFromDiscriminatorValue';
import {Entity, SettingValue} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupSetting extends Entity implements Parsable {
    /** Display name of this group of settings, which comes from the associated template.  */
    private _displayName?: string | undefined;
    /** Unique identifier for the tenant-level groupSettingTemplates object that's been customized for this group-level settings object. Read-only.  */
    private _templateId?: string | undefined;
    /** Collection of name-value pairs corresponding to the name and defaultValue properties in the referenced groupSettingTemplates object.  */
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
     * Sets the displayName property value. Display name of this group of settings, which comes from the associated template.
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
            ["displayName", (o, n) => { (o as unknown as GroupSetting).displayName = n.getStringValue(); }],
            ["templateId", (o, n) => { (o as unknown as GroupSetting).templateId = n.getStringValue(); }],
            ["values", (o, n) => { (o as unknown as GroupSetting).values = n.getCollectionOfObjectValues<SettingValue>(createSettingValueFromDiscriminatorValue); }],
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
     * Gets the templateId property value. Unique identifier for the tenant-level groupSettingTemplates object that's been customized for this group-level settings object. Read-only.
     * @returns a string
     */
    public get templateId() {
        return this._templateId;
    };
    /**
     * Sets the templateId property value. Unique identifier for the tenant-level groupSettingTemplates object that's been customized for this group-level settings object. Read-only.
     * @param value Value to set for the templateId property.
     */
    public set templateId(value: string | undefined) {
        this._templateId = value;
    };
    /**
     * Gets the values property value. Collection of name-value pairs corresponding to the name and defaultValue properties in the referenced groupSettingTemplates object.
     * @returns a settingValue
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. Collection of name-value pairs corresponding to the name and defaultValue properties in the referenced groupSettingTemplates object.
     * @param value Value to set for the values property.
     */
    public set values(value: SettingValue[] | undefined) {
        this._values = value;
    };
}
