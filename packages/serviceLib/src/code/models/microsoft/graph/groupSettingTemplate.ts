import {createSettingTemplateValueFromDiscriminatorValue} from './createSettingTemplateValueFromDiscriminatorValue';
import {DirectoryObject, SettingTemplateValue} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupSettingTemplate extends DirectoryObject implements Parsable {
    /** Description of the template.  */
    private _description?: string | undefined;
    /** Display name of the template. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.  */
    private _displayName?: string | undefined;
    /** Collection of settingTemplateValues that list the set of available settings, defaults and types that make up this template.  */
    private _values?: SettingTemplateValue[] | undefined;
    /**
     * Instantiates a new groupSettingTemplate and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Description of the template.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the template.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Display name of the template. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of the template. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.
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
            ["description", (o, n) => { (o as unknown as GroupSettingTemplate).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as GroupSettingTemplate).displayName = n.getStringValue(); }],
            ["values", (o, n) => { (o as unknown as GroupSettingTemplate).values = n.getCollectionOfObjectValues<SettingTemplateValue>(createSettingTemplateValueFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<SettingTemplateValue>("values", this.values);
    };
    /**
     * Gets the values property value. Collection of settingTemplateValues that list the set of available settings, defaults and types that make up this template.
     * @returns a settingTemplateValue
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. Collection of settingTemplateValues that list the set of available settings, defaults and types that make up this template.
     * @param value Value to set for the values property.
     */
    public set values(value: SettingTemplateValue[] | undefined) {
        this._values = value;
    };
}
