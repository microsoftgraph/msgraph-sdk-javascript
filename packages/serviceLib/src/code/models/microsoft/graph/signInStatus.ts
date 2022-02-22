import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInStatus implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Provides additional details on the sign-in activity  */
    private _additionalDetails?: string | undefined;
    /** Provides the 5-6 digit error code that's generated during a sign-in failure. Check out the list of error codes and messages.  */
    private _errorCode?: number | undefined;
    /** Provides the error message or the reason for failure for the corresponding sign-in activity. Check out the list of error codes and messages.  */
    private _failureReason?: string | undefined;
    /**
     * Instantiates a new signInStatus and sets the default values.
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
     * Gets the additionalDetails property value. Provides additional details on the sign-in activity
     * @returns a string
     */
    public get additionalDetails() {
        return this._additionalDetails;
    };
    /**
     * Gets the errorCode property value. Provides the 5-6 digit error code that's generated during a sign-in failure. Check out the list of error codes and messages.
     * @returns a integer
     */
    public get errorCode() {
        return this._errorCode;
    };
    /**
     * Gets the failureReason property value. Provides the error message or the reason for failure for the corresponding sign-in activity. Check out the list of error codes and messages.
     * @returns a string
     */
    public get failureReason() {
        return this._failureReason;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["additionalDetails", (o, n) => { (o as unknown as SignInStatus).additionalDetails = n.getStringValue(); }],
            ["errorCode", (o, n) => { (o as unknown as SignInStatus).errorCode = n.getNumberValue(); }],
            ["failureReason", (o, n) => { (o as unknown as SignInStatus).failureReason = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("additionalDetails", this.additionalDetails);
        writer.writeNumberValue("errorCode", this.errorCode);
        writer.writeStringValue("failureReason", this.failureReason);
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
     * Sets the additionalDetails property value. Provides additional details on the sign-in activity
     * @param value Value to set for the additionalDetails property.
     */
    public set additionalDetails(value: string | undefined) {
        this._additionalDetails = value;
    };
    /**
     * Sets the errorCode property value. Provides the 5-6 digit error code that's generated during a sign-in failure. Check out the list of error codes and messages.
     * @param value Value to set for the errorCode property.
     */
    public set errorCode(value: number | undefined) {
        this._errorCode = value;
    };
    /**
     * Sets the failureReason property value. Provides the error message or the reason for failure for the corresponding sign-in activity. Check out the list of error codes and messages.
     * @param value Value to set for the failureReason property.
     */
    public set failureReason(value: string | undefined) {
        this._failureReason = value;
    };
}
