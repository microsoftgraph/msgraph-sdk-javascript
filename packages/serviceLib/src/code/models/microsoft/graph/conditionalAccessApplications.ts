import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessApplications implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The list of application IDs explicitly excluded from the policy.  */
    private _excludeApplications?: string[] | undefined;
    /** The list of application IDs the policy applies to, unless explicitly excluded (in excludeApplications). Can also be set to All.  */
    private _includeApplications?: string[] | undefined;
    /** Authentication context class references include. Supported values are c1 through c25.  */
    private _includeAuthenticationContextClassReferences?: string[] | undefined;
    /** User actions to include. Supported values are urn:user:registersecurityinfo and urn:user:registerdevice  */
    private _includeUserActions?: string[] | undefined;
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
     * Instantiates a new conditionalAccessApplications and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the excludeApplications property value. The list of application IDs explicitly excluded from the policy.
     * @returns a string
     */
    public get excludeApplications() {
        return this._excludeApplications;
    };
    /**
     * Sets the excludeApplications property value. The list of application IDs explicitly excluded from the policy.
     * @param value Value to set for the excludeApplications property.
     */
    public set excludeApplications(value: string[] | undefined) {
        this._excludeApplications = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["excludeApplications", (o, n) => { (o as unknown as ConditionalAccessApplications).excludeApplications = n.getCollectionOfPrimitiveValues<string>(); }],
            ["includeApplications", (o, n) => { (o as unknown as ConditionalAccessApplications).includeApplications = n.getCollectionOfPrimitiveValues<string>(); }],
            ["includeAuthenticationContextClassReferences", (o, n) => { (o as unknown as ConditionalAccessApplications).includeAuthenticationContextClassReferences = n.getCollectionOfPrimitiveValues<string>(); }],
            ["includeUserActions", (o, n) => { (o as unknown as ConditionalAccessApplications).includeUserActions = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Gets the includeApplications property value. The list of application IDs the policy applies to, unless explicitly excluded (in excludeApplications). Can also be set to All.
     * @returns a string
     */
    public get includeApplications() {
        return this._includeApplications;
    };
    /**
     * Sets the includeApplications property value. The list of application IDs the policy applies to, unless explicitly excluded (in excludeApplications). Can also be set to All.
     * @param value Value to set for the includeApplications property.
     */
    public set includeApplications(value: string[] | undefined) {
        this._includeApplications = value;
    };
    /**
     * Gets the includeAuthenticationContextClassReferences property value. Authentication context class references include. Supported values are c1 through c25.
     * @returns a string
     */
    public get includeAuthenticationContextClassReferences() {
        return this._includeAuthenticationContextClassReferences;
    };
    /**
     * Sets the includeAuthenticationContextClassReferences property value. Authentication context class references include. Supported values are c1 through c25.
     * @param value Value to set for the includeAuthenticationContextClassReferences property.
     */
    public set includeAuthenticationContextClassReferences(value: string[] | undefined) {
        this._includeAuthenticationContextClassReferences = value;
    };
    /**
     * Gets the includeUserActions property value. User actions to include. Supported values are urn:user:registersecurityinfo and urn:user:registerdevice
     * @returns a string
     */
    public get includeUserActions() {
        return this._includeUserActions;
    };
    /**
     * Sets the includeUserActions property value. User actions to include. Supported values are urn:user:registersecurityinfo and urn:user:registerdevice
     * @param value Value to set for the includeUserActions property.
     */
    public set includeUserActions(value: string[] | undefined) {
        this._includeUserActions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("excludeApplications", this.excludeApplications);
        writer.writeCollectionOfPrimitiveValues<string>("includeApplications", this.includeApplications);
        writer.writeCollectionOfPrimitiveValues<string>("includeAuthenticationContextClassReferences", this.includeAuthenticationContextClassReferences);
        writer.writeCollectionOfPrimitiveValues<string>("includeUserActions", this.includeUserActions);
        writer.writeAdditionalData(this.additionalData);
    };
}
