import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationOnPremisesInfo implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Unique identifier for the user object in Active Directory.  */
    private _immutableId?: string | undefined;
    /**
     * Instantiates a new educationOnPremisesInfo and sets the default values.
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
     * Gets the immutableId property value. Unique identifier for the user object in Active Directory.
     * @returns a string
     */
    public get immutableId() {
        return this._immutableId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["immutableId", (o, n) => { (o as unknown as EducationOnPremisesInfo).immutableId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("immutableId", this.immutableId);
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
     * Sets the immutableId property value. Unique identifier for the user object in Active Directory.
     * @param value Value to set for the immutableId property.
     */
    public set immutableId(value: string | undefined) {
        this._immutableId = value;
    };
}
