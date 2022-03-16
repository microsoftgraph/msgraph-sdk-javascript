import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamMemberSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** If set to true, members can add and remove apps.  */
    private _allowAddRemoveApps?: boolean | undefined;
    /** If set to true, members can add and update private channels.  */
    private _allowCreatePrivateChannels?: boolean | undefined;
    /** If set to true, members can add and update channels.  */
    private _allowCreateUpdateChannels?: boolean | undefined;
    /** If set to true, members can add, update, and remove connectors.  */
    private _allowCreateUpdateRemoveConnectors?: boolean | undefined;
    /** If set to true, members can add, update, and remove tabs.  */
    private _allowCreateUpdateRemoveTabs?: boolean | undefined;
    /** If set to true, members can delete channels.  */
    private _allowDeleteChannels?: boolean | undefined;
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
     * Gets the allowAddRemoveApps property value. If set to true, members can add and remove apps.
     * @returns a boolean
     */
    public get allowAddRemoveApps() {
        return this._allowAddRemoveApps;
    };
    /**
     * Sets the allowAddRemoveApps property value. If set to true, members can add and remove apps.
     * @param value Value to set for the allowAddRemoveApps property.
     */
    public set allowAddRemoveApps(value: boolean | undefined) {
        this._allowAddRemoveApps = value;
    };
    /**
     * Gets the allowCreatePrivateChannels property value. If set to true, members can add and update private channels.
     * @returns a boolean
     */
    public get allowCreatePrivateChannels() {
        return this._allowCreatePrivateChannels;
    };
    /**
     * Sets the allowCreatePrivateChannels property value. If set to true, members can add and update private channels.
     * @param value Value to set for the allowCreatePrivateChannels property.
     */
    public set allowCreatePrivateChannels(value: boolean | undefined) {
        this._allowCreatePrivateChannels = value;
    };
    /**
     * Gets the allowCreateUpdateChannels property value. If set to true, members can add and update channels.
     * @returns a boolean
     */
    public get allowCreateUpdateChannels() {
        return this._allowCreateUpdateChannels;
    };
    /**
     * Sets the allowCreateUpdateChannels property value. If set to true, members can add and update channels.
     * @param value Value to set for the allowCreateUpdateChannels property.
     */
    public set allowCreateUpdateChannels(value: boolean | undefined) {
        this._allowCreateUpdateChannels = value;
    };
    /**
     * Gets the allowCreateUpdateRemoveConnectors property value. If set to true, members can add, update, and remove connectors.
     * @returns a boolean
     */
    public get allowCreateUpdateRemoveConnectors() {
        return this._allowCreateUpdateRemoveConnectors;
    };
    /**
     * Sets the allowCreateUpdateRemoveConnectors property value. If set to true, members can add, update, and remove connectors.
     * @param value Value to set for the allowCreateUpdateRemoveConnectors property.
     */
    public set allowCreateUpdateRemoveConnectors(value: boolean | undefined) {
        this._allowCreateUpdateRemoveConnectors = value;
    };
    /**
     * Gets the allowCreateUpdateRemoveTabs property value. If set to true, members can add, update, and remove tabs.
     * @returns a boolean
     */
    public get allowCreateUpdateRemoveTabs() {
        return this._allowCreateUpdateRemoveTabs;
    };
    /**
     * Sets the allowCreateUpdateRemoveTabs property value. If set to true, members can add, update, and remove tabs.
     * @param value Value to set for the allowCreateUpdateRemoveTabs property.
     */
    public set allowCreateUpdateRemoveTabs(value: boolean | undefined) {
        this._allowCreateUpdateRemoveTabs = value;
    };
    /**
     * Gets the allowDeleteChannels property value. If set to true, members can delete channels.
     * @returns a boolean
     */
    public get allowDeleteChannels() {
        return this._allowDeleteChannels;
    };
    /**
     * Sets the allowDeleteChannels property value. If set to true, members can delete channels.
     * @param value Value to set for the allowDeleteChannels property.
     */
    public set allowDeleteChannels(value: boolean | undefined) {
        this._allowDeleteChannels = value;
    };
    /**
     * Instantiates a new teamMemberSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowAddRemoveApps", (o, n) => { (o as unknown as TeamMemberSettings).allowAddRemoveApps = n.getBooleanValue(); }],
            ["allowCreatePrivateChannels", (o, n) => { (o as unknown as TeamMemberSettings).allowCreatePrivateChannels = n.getBooleanValue(); }],
            ["allowCreateUpdateChannels", (o, n) => { (o as unknown as TeamMemberSettings).allowCreateUpdateChannels = n.getBooleanValue(); }],
            ["allowCreateUpdateRemoveConnectors", (o, n) => { (o as unknown as TeamMemberSettings).allowCreateUpdateRemoveConnectors = n.getBooleanValue(); }],
            ["allowCreateUpdateRemoveTabs", (o, n) => { (o as unknown as TeamMemberSettings).allowCreateUpdateRemoveTabs = n.getBooleanValue(); }],
            ["allowDeleteChannels", (o, n) => { (o as unknown as TeamMemberSettings).allowDeleteChannels = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowAddRemoveApps", this.allowAddRemoveApps);
        writer.writeBooleanValue("allowCreatePrivateChannels", this.allowCreatePrivateChannels);
        writer.writeBooleanValue("allowCreateUpdateChannels", this.allowCreateUpdateChannels);
        writer.writeBooleanValue("allowCreateUpdateRemoveConnectors", this.allowCreateUpdateRemoveConnectors);
        writer.writeBooleanValue("allowCreateUpdateRemoveTabs", this.allowCreateUpdateRemoveTabs);
        writer.writeBooleanValue("allowDeleteChannels", this.allowDeleteChannels);
        writer.writeAdditionalData(this.additionalData);
    };
}
