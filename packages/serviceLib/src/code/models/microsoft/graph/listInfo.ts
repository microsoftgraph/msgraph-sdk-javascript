import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ListInfo implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** If true, indicates that content types are enabled for this list.  */
    private _contentTypesEnabled?: boolean | undefined;
    /** If true, indicates that the list is not normally visible in the SharePoint user experience.  */
    private _hidden?: boolean | undefined;
    /** An enumerated value that represents the base list template used in creating the list. Possible values include documentLibrary, genericList, task, survey, announcements, contacts, and more.  */
    private _template?: string | undefined;
    /**
     * Instantiates a new listInfo and sets the default values.
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
     * Gets the contentTypesEnabled property value. If true, indicates that content types are enabled for this list.
     * @returns a boolean
     */
    public get contentTypesEnabled() {
        return this._contentTypesEnabled;
    };
    /**
     * Gets the hidden property value. If true, indicates that the list is not normally visible in the SharePoint user experience.
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Gets the template property value. An enumerated value that represents the base list template used in creating the list. Possible values include documentLibrary, genericList, task, survey, announcements, contacts, and more.
     * @returns a string
     */
    public get template() {
        return this._template;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["contentTypesEnabled", (o, n) => { (o as unknown as ListInfo).contentTypesEnabled = n.getBooleanValue(); }],
            ["hidden", (o, n) => { (o as unknown as ListInfo).hidden = n.getBooleanValue(); }],
            ["template", (o, n) => { (o as unknown as ListInfo).template = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("contentTypesEnabled", this.contentTypesEnabled);
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeStringValue("template", this.template);
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
     * Sets the contentTypesEnabled property value. If true, indicates that content types are enabled for this list.
     * @param value Value to set for the contentTypesEnabled property.
     */
    public set contentTypesEnabled(value: boolean | undefined) {
        this._contentTypesEnabled = value;
    };
    /**
     * Sets the hidden property value. If true, indicates that the list is not normally visible in the SharePoint user experience.
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        this._hidden = value;
    };
    /**
     * Sets the template property value. An enumerated value that represents the base list template used in creating the list. Possible values include documentLibrary, genericList, task, survey, announcements, contacts, and more.
     * @param value Value to set for the template property.
     */
    public set template(value: string | undefined) {
        this._template = value;
    };
}
