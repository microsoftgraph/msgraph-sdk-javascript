import {OptionalClaim} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OptionalClaims implements Parsable {
    /** The optional claims returned in the JWT access token.  */
    private _accessToken?: OptionalClaim[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The optional claims returned in the JWT ID token.  */
    private _idToken?: OptionalClaim[] | undefined;
    /** The optional claims returned in the SAML token.  */
    private _saml2Token?: OptionalClaim[] | undefined;
    /**
     * Instantiates a new optionalClaims and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the accessToken property value. The optional claims returned in the JWT access token.
     * @returns a optionalClaim
     */
    public get accessToken() {
        return this._accessToken;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the idToken property value. The optional claims returned in the JWT ID token.
     * @returns a optionalClaim
     */
    public get idToken() {
        return this._idToken;
    };
    /**
     * Gets the saml2Token property value. The optional claims returned in the SAML token.
     * @returns a optionalClaim
     */
    public get saml2Token() {
        return this._saml2Token;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["accessToken", (o, n) => { (o as unknown as OptionalClaims).accessToken = n.getCollectionOfObjectValues<OptionalClaim>(OptionalClaim); }],
            ["idToken", (o, n) => { (o as unknown as OptionalClaims).idToken = n.getCollectionOfObjectValues<OptionalClaim>(OptionalClaim); }],
            ["saml2Token", (o, n) => { (o as unknown as OptionalClaims).saml2Token = n.getCollectionOfObjectValues<OptionalClaim>(OptionalClaim); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<OptionalClaim>("accessToken", this.accessToken);
        writer.writeCollectionOfObjectValues<OptionalClaim>("idToken", this.idToken);
        writer.writeCollectionOfObjectValues<OptionalClaim>("saml2Token", this.saml2Token);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the accessToken property value. The optional claims returned in the JWT access token.
     * @param value Value to set for the accessToken property.
     */
    public set accessToken(value: OptionalClaim[] | undefined) {
        this._accessToken = value;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the idToken property value. The optional claims returned in the JWT ID token.
     * @param value Value to set for the idToken property.
     */
    public set idToken(value: OptionalClaim[] | undefined) {
        this._idToken = value;
    };
    /**
     * Sets the saml2Token property value. The optional claims returned in the SAML token.
     * @param value Value to set for the saml2Token property.
     */
    public set saml2Token(value: OptionalClaim[] | undefined) {
        this._saml2Token = value;
    };
}
