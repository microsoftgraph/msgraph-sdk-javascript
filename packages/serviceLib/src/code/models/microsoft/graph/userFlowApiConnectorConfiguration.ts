import {createIdentityApiConnectorFromDiscriminatorValue} from './createIdentityApiConnectorFromDiscriminatorValue';
import {IdentityApiConnector} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserFlowApiConnectorConfiguration implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _postAttributeCollection?: IdentityApiConnector | undefined;
    private _postFederationSignup?: IdentityApiConnector | undefined;
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
     * Instantiates a new userFlowApiConnectorConfiguration and sets the default values.
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
            ["postAttributeCollection", (o, n) => { (o as unknown as UserFlowApiConnectorConfiguration).postAttributeCollection = n.getObjectValue<IdentityApiConnector>(createIdentityApiConnectorFromDiscriminatorValue); }],
            ["postFederationSignup", (o, n) => { (o as unknown as UserFlowApiConnectorConfiguration).postFederationSignup = n.getObjectValue<IdentityApiConnector>(createIdentityApiConnectorFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the postAttributeCollection property value. 
     * @returns a identityApiConnector
     */
    public get postAttributeCollection() {
        return this._postAttributeCollection;
    };
    /**
     * Sets the postAttributeCollection property value. 
     * @param value Value to set for the postAttributeCollection property.
     */
    public set postAttributeCollection(value: IdentityApiConnector | undefined) {
        this._postAttributeCollection = value;
    };
    /**
     * Gets the postFederationSignup property value. 
     * @returns a identityApiConnector
     */
    public get postFederationSignup() {
        return this._postFederationSignup;
    };
    /**
     * Sets the postFederationSignup property value. 
     * @param value Value to set for the postFederationSignup property.
     */
    public set postFederationSignup(value: IdentityApiConnector | undefined) {
        this._postFederationSignup = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<IdentityApiConnector>("postAttributeCollection", this.postAttributeCollection);
        writer.writeObjectValue<IdentityApiConnector>("postFederationSignup", this.postFederationSignup);
        writer.writeAdditionalData(this.additionalData);
    };
}
