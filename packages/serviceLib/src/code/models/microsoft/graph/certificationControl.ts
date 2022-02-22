import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CertificationControl implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Certification control name  */
    private _name?: string | undefined;
    /** URL for the Microsoft Service Trust Portal  */
    private _url?: string | undefined;
    /**
     * Instantiates a new certificationControl and sets the default values.
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
     * Gets the name property value. Certification control name
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the url property value. URL for the Microsoft Service Trust Portal
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["name", (o, n) => { (o as unknown as CertificationControl).name = n.getStringValue(); }],
            ["url", (o, n) => { (o as unknown as CertificationControl).url = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("url", this.url);
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
     * Sets the name property value. Certification control name
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the url property value. URL for the Microsoft Service Trust Portal
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
