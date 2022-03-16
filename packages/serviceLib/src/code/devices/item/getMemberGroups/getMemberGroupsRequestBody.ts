import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getMemberGroups method.  */
export class GetMemberGroupsRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _securityEnabledOnly?: boolean | undefined;
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
     * Instantiates a new getMemberGroupsRequestBody and sets the default values.
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
            ["securityEnabledOnly", (o, n) => { (o as unknown as GetMemberGroupsRequestBody).securityEnabledOnly = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the securityEnabledOnly property value. 
     * @returns a boolean
     */
    public get securityEnabledOnly() {
        return this._securityEnabledOnly;
    };
    /**
     * Sets the securityEnabledOnly property value. 
     * @param value Value to set for the securityEnabledOnly property.
     */
    public set securityEnabledOnly(value: boolean | undefined) {
        this._securityEnabledOnly = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("securityEnabledOnly", this.securityEnabledOnly);
        writer.writeAdditionalData(this.additionalData);
    };
}
