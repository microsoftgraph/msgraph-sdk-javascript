import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsTabConfiguration implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Url used for rendering tab contents in Teams. Required.  */
    private _contentUrl?: string | undefined;
    /** Identifier for the entity hosted by the tab provider.  */
    private _entityId?: string | undefined;
    /** Url called by Teams client when a Tab is removed using the Teams Client.  */
    private _removeUrl?: string | undefined;
    /** Url for showing tab contents outside of Teams.  */
    private _websiteUrl?: string | undefined;
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
     * Instantiates a new teamsTabConfiguration and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the contentUrl property value. Url used for rendering tab contents in Teams. Required.
     * @returns a string
     */
    public get contentUrl() {
        return this._contentUrl;
    };
    /**
     * Sets the contentUrl property value. Url used for rendering tab contents in Teams. Required.
     * @param value Value to set for the contentUrl property.
     */
    public set contentUrl(value: string | undefined) {
        this._contentUrl = value;
    };
    /**
     * Gets the entityId property value. Identifier for the entity hosted by the tab provider.
     * @returns a string
     */
    public get entityId() {
        return this._entityId;
    };
    /**
     * Sets the entityId property value. Identifier for the entity hosted by the tab provider.
     * @param value Value to set for the entityId property.
     */
    public set entityId(value: string | undefined) {
        this._entityId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["contentUrl", (o, n) => { (o as unknown as TeamsTabConfiguration).contentUrl = n.getStringValue(); }],
            ["entityId", (o, n) => { (o as unknown as TeamsTabConfiguration).entityId = n.getStringValue(); }],
            ["removeUrl", (o, n) => { (o as unknown as TeamsTabConfiguration).removeUrl = n.getStringValue(); }],
            ["websiteUrl", (o, n) => { (o as unknown as TeamsTabConfiguration).websiteUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the removeUrl property value. Url called by Teams client when a Tab is removed using the Teams Client.
     * @returns a string
     */
    public get removeUrl() {
        return this._removeUrl;
    };
    /**
     * Sets the removeUrl property value. Url called by Teams client when a Tab is removed using the Teams Client.
     * @param value Value to set for the removeUrl property.
     */
    public set removeUrl(value: string | undefined) {
        this._removeUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("contentUrl", this.contentUrl);
        writer.writeStringValue("entityId", this.entityId);
        writer.writeStringValue("removeUrl", this.removeUrl);
        writer.writeStringValue("websiteUrl", this.websiteUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the websiteUrl property value. Url for showing tab contents outside of Teams.
     * @returns a string
     */
    public get websiteUrl() {
        return this._websiteUrl;
    };
    /**
     * Sets the websiteUrl property value. Url for showing tab contents outside of Teams.
     * @param value Value to set for the websiteUrl property.
     */
    public set websiteUrl(value: string | undefined) {
        this._websiteUrl = value;
    };
}
