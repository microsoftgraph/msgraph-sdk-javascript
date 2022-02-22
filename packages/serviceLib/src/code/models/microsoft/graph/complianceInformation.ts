import {CertificationControl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ComplianceInformation implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Collection of the certification controls associated with certification  */
    private _certificationControls?: CertificationControl[] | undefined;
    /** Compliance certification name (for example, ISO 27018:2014, GDPR, FedRAMP, NIST 800-171)  */
    private _certificationName?: string | undefined;
    /**
     * Instantiates a new complianceInformation and sets the default values.
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
     * Gets the certificationControls property value. Collection of the certification controls associated with certification
     * @returns a certificationControl
     */
    public get certificationControls() {
        return this._certificationControls;
    };
    /**
     * Gets the certificationName property value. Compliance certification name (for example, ISO 27018:2014, GDPR, FedRAMP, NIST 800-171)
     * @returns a string
     */
    public get certificationName() {
        return this._certificationName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["certificationControls", (o, n) => { (o as unknown as ComplianceInformation).certificationControls = n.getCollectionOfObjectValues<CertificationControl>(CertificationControl); }],
            ["certificationName", (o, n) => { (o as unknown as ComplianceInformation).certificationName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<CertificationControl>("certificationControls", this.certificationControls);
        writer.writeStringValue("certificationName", this.certificationName);
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
     * Sets the certificationControls property value. Collection of the certification controls associated with certification
     * @param value Value to set for the certificationControls property.
     */
    public set certificationControls(value: CertificationControl[] | undefined) {
        this._certificationControls = value;
    };
    /**
     * Sets the certificationName property value. Compliance certification name (for example, ISO 27018:2014, GDPR, FedRAMP, NIST 800-171)
     * @param value Value to set for the certificationName property.
     */
    public set certificationName(value: string | undefined) {
        this._certificationName = value;
    };
}
