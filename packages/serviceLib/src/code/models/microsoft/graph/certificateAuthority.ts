import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CertificateAuthority implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Required. The base64 encoded string representing the public certificate.  */
    private _certificate?: string | undefined;
    /** The URL of the certificate revocation list.  */
    private _certificateRevocationListUrl?: string | undefined;
    /** The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was created.  */
    private _deltaCertificateRevocationListUrl?: string | undefined;
    /** Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate authority.  */
    private _isRootAuthority?: boolean | undefined;
    /** The issuer of the certificate, calculated from the certificate value. Read-only.  */
    private _issuer?: string | undefined;
    /** The subject key identifier of the certificate, calculated from the certificate value. Read-only.  */
    private _issuerSki?: string | undefined;
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
     * Gets the certificate property value. Required. The base64 encoded string representing the public certificate.
     * @returns a binary
     */
    public get certificate() {
        return this._certificate;
    };
    /**
     * Sets the certificate property value. Required. The base64 encoded string representing the public certificate.
     * @param value Value to set for the certificate property.
     */
    public set certificate(value: string | undefined) {
        this._certificate = value;
    };
    /**
     * Gets the certificateRevocationListUrl property value. The URL of the certificate revocation list.
     * @returns a string
     */
    public get certificateRevocationListUrl() {
        return this._certificateRevocationListUrl;
    };
    /**
     * Sets the certificateRevocationListUrl property value. The URL of the certificate revocation list.
     * @param value Value to set for the certificateRevocationListUrl property.
     */
    public set certificateRevocationListUrl(value: string | undefined) {
        this._certificateRevocationListUrl = value;
    };
    /**
     * Instantiates a new certificateAuthority and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the deltaCertificateRevocationListUrl property value. The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was created.
     * @returns a string
     */
    public get deltaCertificateRevocationListUrl() {
        return this._deltaCertificateRevocationListUrl;
    };
    /**
     * Sets the deltaCertificateRevocationListUrl property value. The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was created.
     * @param value Value to set for the deltaCertificateRevocationListUrl property.
     */
    public set deltaCertificateRevocationListUrl(value: string | undefined) {
        this._deltaCertificateRevocationListUrl = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["certificate", (o, n) => { (o as unknown as CertificateAuthority).certificate = n.getStringValue(); }],
            ["certificateRevocationListUrl", (o, n) => { (o as unknown as CertificateAuthority).certificateRevocationListUrl = n.getStringValue(); }],
            ["deltaCertificateRevocationListUrl", (o, n) => { (o as unknown as CertificateAuthority).deltaCertificateRevocationListUrl = n.getStringValue(); }],
            ["isRootAuthority", (o, n) => { (o as unknown as CertificateAuthority).isRootAuthority = n.getBooleanValue(); }],
            ["issuer", (o, n) => { (o as unknown as CertificateAuthority).issuer = n.getStringValue(); }],
            ["issuerSki", (o, n) => { (o as unknown as CertificateAuthority).issuerSki = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the isRootAuthority property value. Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate authority.
     * @returns a boolean
     */
    public get isRootAuthority() {
        return this._isRootAuthority;
    };
    /**
     * Sets the isRootAuthority property value. Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate authority.
     * @param value Value to set for the isRootAuthority property.
     */
    public set isRootAuthority(value: boolean | undefined) {
        this._isRootAuthority = value;
    };
    /**
     * Gets the issuer property value. The issuer of the certificate, calculated from the certificate value. Read-only.
     * @returns a string
     */
    public get issuer() {
        return this._issuer;
    };
    /**
     * Sets the issuer property value. The issuer of the certificate, calculated from the certificate value. Read-only.
     * @param value Value to set for the issuer property.
     */
    public set issuer(value: string | undefined) {
        this._issuer = value;
    };
    /**
     * Gets the issuerSki property value. The subject key identifier of the certificate, calculated from the certificate value. Read-only.
     * @returns a string
     */
    public get issuerSki() {
        return this._issuerSki;
    };
    /**
     * Sets the issuerSki property value. The subject key identifier of the certificate, calculated from the certificate value. Read-only.
     * @param value Value to set for the issuerSki property.
     */
    public set issuerSki(value: string | undefined) {
        this._issuerSki = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("certificate", this.certificate);
        writer.writeStringValue("certificateRevocationListUrl", this.certificateRevocationListUrl);
        writer.writeStringValue("deltaCertificateRevocationListUrl", this.deltaCertificateRevocationListUrl);
        writer.writeBooleanValue("isRootAuthority", this.isRootAuthority);
        writer.writeStringValue("issuer", this.issuer);
        writer.writeStringValue("issuerSki", this.issuerSki);
        writer.writeAdditionalData(this.additionalData);
    };
}
