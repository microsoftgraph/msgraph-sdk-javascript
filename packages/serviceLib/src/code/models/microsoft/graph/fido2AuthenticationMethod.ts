import {AttestationLevel, AuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fido2AuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** Authenticator Attestation GUID, an identifier that indicates the type (e.g. make and model) of the authenticator.  */
    private _aaGuid?: string | undefined;
    /** The attestation certificate(s) attached to this security key.  */
    private _attestationCertificates?: string[] | undefined;
    /** The attestation level of this FIDO2 security key. Possible values are: attested, or notAttested.  */
    private _attestationLevel?: AttestationLevel | undefined;
    /** The timestamp when this key was registered to the user.  */
    private _createdDateTime?: Date | undefined;
    /** The display name of the key as given by the user.  */
    private _displayName?: string | undefined;
    /** The manufacturer-assigned model of the FIDO2 security key.  */
    private _model?: string | undefined;
    /**
     * Instantiates a new fido2AuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the aaGuid property value. Authenticator Attestation GUID, an identifier that indicates the type (e.g. make and model) of the authenticator.
     * @returns a string
     */
    public get aaGuid() {
        return this._aaGuid;
    };
    /**
     * Gets the attestationCertificates property value. The attestation certificate(s) attached to this security key.
     * @returns a string
     */
    public get attestationCertificates() {
        return this._attestationCertificates;
    };
    /**
     * Gets the attestationLevel property value. The attestation level of this FIDO2 security key. Possible values are: attested, or notAttested.
     * @returns a attestationLevel
     */
    public get attestationLevel() {
        return this._attestationLevel;
    };
    /**
     * Gets the createdDateTime property value. The timestamp when this key was registered to the user.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the displayName property value. The display name of the key as given by the user.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the model property value. The manufacturer-assigned model of the FIDO2 security key.
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["aaGuid", (o, n) => { (o as unknown as Fido2AuthenticationMethod).aaGuid = n.getStringValue(); }],
            ["attestationCertificates", (o, n) => { (o as unknown as Fido2AuthenticationMethod).attestationCertificates = n.getCollectionOfPrimitiveValues<string>(); }],
            ["attestationLevel", (o, n) => { (o as unknown as Fido2AuthenticationMethod).attestationLevel = n.getEnumValue<AttestationLevel>(AttestationLevel); }],
            ["createdDateTime", (o, n) => { (o as unknown as Fido2AuthenticationMethod).createdDateTime = n.getDateValue(); }],
            ["displayName", (o, n) => { (o as unknown as Fido2AuthenticationMethod).displayName = n.getStringValue(); }],
            ["model", (o, n) => { (o as unknown as Fido2AuthenticationMethod).model = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("aaGuid", this.aaGuid);
        writer.writeCollectionOfPrimitiveValues<string>("attestationCertificates", this.attestationCertificates);
        writer.writeEnumValue<AttestationLevel>("attestationLevel", this.attestationLevel);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("model", this.model);
    };
    /**
     * Sets the aaGuid property value. Authenticator Attestation GUID, an identifier that indicates the type (e.g. make and model) of the authenticator.
     * @param value Value to set for the aaGuid property.
     */
    public set aaGuid(value: string | undefined) {
        this._aaGuid = value;
    };
    /**
     * Sets the attestationCertificates property value. The attestation certificate(s) attached to this security key.
     * @param value Value to set for the attestationCertificates property.
     */
    public set attestationCertificates(value: string[] | undefined) {
        this._attestationCertificates = value;
    };
    /**
     * Sets the attestationLevel property value. The attestation level of this FIDO2 security key. Possible values are: attested, or notAttested.
     * @param value Value to set for the attestationLevel property.
     */
    public set attestationLevel(value: AttestationLevel | undefined) {
        this._attestationLevel = value;
    };
    /**
     * Sets the createdDateTime property value. The timestamp when this key was registered to the user.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the displayName property value. The display name of the key as given by the user.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the model property value. The manufacturer-assigned model of the FIDO2 security key.
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
    };
}
