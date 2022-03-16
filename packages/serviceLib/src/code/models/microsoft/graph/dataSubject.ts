import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DataSubject implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Email of the data subject.  */
    private _email?: string | undefined;
    /** First name of the data subject.  */
    private _firstName?: string | undefined;
    /** Last Name of the data subject.  */
    private _lastName?: string | undefined;
    /** The country/region of residency. The residency information is uesed only for internal reporting but not for the content search.  */
    private _residency?: string | undefined;
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
     * Instantiates a new dataSubject and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the email property value. Email of the data subject.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. Email of the data subject.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        this._email = value;
    };
    /**
     * Gets the firstName property value. First name of the data subject.
     * @returns a string
     */
    public get firstName() {
        return this._firstName;
    };
    /**
     * Sets the firstName property value. First name of the data subject.
     * @param value Value to set for the firstName property.
     */
    public set firstName(value: string | undefined) {
        this._firstName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["email", (o, n) => { (o as unknown as DataSubject).email = n.getStringValue(); }],
            ["firstName", (o, n) => { (o as unknown as DataSubject).firstName = n.getStringValue(); }],
            ["lastName", (o, n) => { (o as unknown as DataSubject).lastName = n.getStringValue(); }],
            ["residency", (o, n) => { (o as unknown as DataSubject).residency = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the lastName property value. Last Name of the data subject.
     * @returns a string
     */
    public get lastName() {
        return this._lastName;
    };
    /**
     * Sets the lastName property value. Last Name of the data subject.
     * @param value Value to set for the lastName property.
     */
    public set lastName(value: string | undefined) {
        this._lastName = value;
    };
    /**
     * Gets the residency property value. The country/region of residency. The residency information is uesed only for internal reporting but not for the content search.
     * @returns a string
     */
    public get residency() {
        return this._residency;
    };
    /**
     * Sets the residency property value. The country/region of residency. The residency information is uesed only for internal reporting but not for the content search.
     * @param value Value to set for the residency property.
     */
    public set residency(value: string | undefined) {
        this._residency = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("email", this.email);
        writer.writeStringValue("firstName", this.firstName);
        writer.writeStringValue("lastName", this.lastName);
        writer.writeStringValue("residency", this.residency);
        writer.writeAdditionalData(this.additionalData);
    };
}
