import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssociateWithHubSitesRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _hubSiteUrls?: string[] | undefined;
    private _propagateToExistingLists?: boolean | undefined;
    /**
     * Instantiates a new associateWithHubSitesRequestBody and sets the default values.
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
     * Gets the hubSiteUrls property value. 
     * @returns a string
     */
    public get hubSiteUrls() {
        return this._hubSiteUrls;
    };
    /**
     * Gets the propagateToExistingLists property value. 
     * @returns a boolean
     */
    public get propagateToExistingLists() {
        return this._propagateToExistingLists;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["hubSiteUrls", (o, n) => { (o as unknown as AssociateWithHubSitesRequestBody).hubSiteUrls = n.getCollectionOfPrimitiveValues<string>(); }],
            ["propagateToExistingLists", (o, n) => { (o as unknown as AssociateWithHubSitesRequestBody).propagateToExistingLists = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("hubSiteUrls", this.hubSiteUrls);
        writer.writeBooleanValue("propagateToExistingLists", this.propagateToExistingLists);
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
     * Sets the hubSiteUrls property value. 
     * @param value Value to set for the hubSiteUrls property.
     */
    public set hubSiteUrls(value: string[] | undefined) {
        this._hubSiteUrls = value;
    };
    /**
     * Sets the propagateToExistingLists property value. 
     * @param value Value to set for the propagateToExistingLists property.
     */
    public set propagateToExistingLists(value: boolean | undefined) {
        this._propagateToExistingLists = value;
    };
}
