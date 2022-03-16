import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the wipe method.  */
export class WipeRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _keepEnrollmentData?: boolean | undefined;
    private _keepUserData?: boolean | undefined;
    private _macOsUnlockCode?: string | undefined;
    private _persistEsimDataPlan?: boolean | undefined;
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
     * Instantiates a new wipeRequestBody and sets the default values.
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
            ["keepEnrollmentData", (o, n) => { (o as unknown as WipeRequestBody).keepEnrollmentData = n.getBooleanValue(); }],
            ["keepUserData", (o, n) => { (o as unknown as WipeRequestBody).keepUserData = n.getBooleanValue(); }],
            ["macOsUnlockCode", (o, n) => { (o as unknown as WipeRequestBody).macOsUnlockCode = n.getStringValue(); }],
            ["persistEsimDataPlan", (o, n) => { (o as unknown as WipeRequestBody).persistEsimDataPlan = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the keepEnrollmentData property value. 
     * @returns a boolean
     */
    public get keepEnrollmentData() {
        return this._keepEnrollmentData;
    };
    /**
     * Sets the keepEnrollmentData property value. 
     * @param value Value to set for the keepEnrollmentData property.
     */
    public set keepEnrollmentData(value: boolean | undefined) {
        this._keepEnrollmentData = value;
    };
    /**
     * Gets the keepUserData property value. 
     * @returns a boolean
     */
    public get keepUserData() {
        return this._keepUserData;
    };
    /**
     * Sets the keepUserData property value. 
     * @param value Value to set for the keepUserData property.
     */
    public set keepUserData(value: boolean | undefined) {
        this._keepUserData = value;
    };
    /**
     * Gets the macOsUnlockCode property value. 
     * @returns a string
     */
    public get macOsUnlockCode() {
        return this._macOsUnlockCode;
    };
    /**
     * Sets the macOsUnlockCode property value. 
     * @param value Value to set for the macOsUnlockCode property.
     */
    public set macOsUnlockCode(value: string | undefined) {
        this._macOsUnlockCode = value;
    };
    /**
     * Gets the persistEsimDataPlan property value. 
     * @returns a boolean
     */
    public get persistEsimDataPlan() {
        return this._persistEsimDataPlan;
    };
    /**
     * Sets the persistEsimDataPlan property value. 
     * @param value Value to set for the persistEsimDataPlan property.
     */
    public set persistEsimDataPlan(value: boolean | undefined) {
        this._persistEsimDataPlan = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("keepEnrollmentData", this.keepEnrollmentData);
        writer.writeBooleanValue("keepUserData", this.keepUserData);
        writer.writeStringValue("macOsUnlockCode", this.macOsUnlockCode);
        writer.writeBooleanValue("persistEsimDataPlan", this.persistEsimDataPlan);
        writer.writeAdditionalData(this.additionalData);
    };
}
