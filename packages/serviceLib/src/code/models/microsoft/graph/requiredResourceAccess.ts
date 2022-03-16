import {createResourceAccessFromDiscriminatorValue} from './createResourceAccessFromDiscriminatorValue';
import {ResourceAccess} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RequiredResourceAccess implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.  */
    private _resourceAccess?: ResourceAccess[] | undefined;
    /** The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.  */
    private _resourceAppId?: string | undefined;
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
     * Instantiates a new requiredResourceAccess and sets the default values.
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
            ["resourceAccess", (o, n) => { (o as unknown as RequiredResourceAccess).resourceAccess = n.getCollectionOfObjectValues<ResourceAccess>(createResourceAccessFromDiscriminatorValue); }],
            ["resourceAppId", (o, n) => { (o as unknown as RequiredResourceAccess).resourceAppId = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the resourceAccess property value. The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.
     * @returns a resourceAccess
     */
    public get resourceAccess() {
        return this._resourceAccess;
    };
    /**
     * Sets the resourceAccess property value. The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.
     * @param value Value to set for the resourceAccess property.
     */
    public set resourceAccess(value: ResourceAccess[] | undefined) {
        this._resourceAccess = value;
    };
    /**
     * Gets the resourceAppId property value. The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.
     * @returns a string
     */
    public get resourceAppId() {
        return this._resourceAppId;
    };
    /**
     * Sets the resourceAppId property value. The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.
     * @param value Value to set for the resourceAppId property.
     */
    public set resourceAppId(value: string | undefined) {
        this._resourceAppId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<ResourceAccess>("resourceAccess", this.resourceAccess);
        writer.writeStringValue("resourceAppId", this.resourceAppId);
        writer.writeAdditionalData(this.additionalData);
    };
}
