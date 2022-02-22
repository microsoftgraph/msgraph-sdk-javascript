import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlertDetection implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _detectionType?: string | undefined;
    private _method?: string | undefined;
    private _name?: string | undefined;
    /**
     * Instantiates a new alertDetection and sets the default values.
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
     * Gets the detectionType property value. 
     * @returns a string
     */
    public get detectionType() {
        return this._detectionType;
    };
    /**
     * Gets the method property value. 
     * @returns a string
     */
    public get method() {
        return this._method;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["detectionType", (o, n) => { (o as unknown as AlertDetection).detectionType = n.getStringValue(); }],
            ["method", (o, n) => { (o as unknown as AlertDetection).method = n.getStringValue(); }],
            ["name", (o, n) => { (o as unknown as AlertDetection).name = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("detectionType", this.detectionType);
        writer.writeStringValue("method", this.method);
        writer.writeStringValue("name", this.name);
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
     * Sets the detectionType property value. 
     * @param value Value to set for the detectionType property.
     */
    public set detectionType(value: string | undefined) {
        this._detectionType = value;
    };
    /**
     * Sets the method property value. 
     * @param value Value to set for the method property.
     */
    public set method(value: string | undefined) {
        this._method = value;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
}
