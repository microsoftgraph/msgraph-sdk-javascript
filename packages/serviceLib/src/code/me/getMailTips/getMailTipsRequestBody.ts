import {MailTipsType} from '../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GetMailTipsRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _emailAddresses?: string[] | undefined;
    private _mailTipsOptions?: MailTipsType | undefined;
    /**
     * Instantiates a new getMailTipsRequestBody and sets the default values.
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
     * Gets the emailAddresses property value. 
     * @returns a string
     */
    public get emailAddresses() {
        return this._emailAddresses;
    };
    /**
     * Gets the mailTipsOptions property value. 
     * @returns a mailTipsType
     */
    public get mailTipsOptions() {
        return this._mailTipsOptions;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["emailAddresses", (o, n) => { (o as unknown as GetMailTipsRequestBody).emailAddresses = n.getCollectionOfPrimitiveValues<string>(); }],
            ["mailTipsOptions", (o, n) => { (o as unknown as GetMailTipsRequestBody).mailTipsOptions = n.getEnumValue<MailTipsType>(MailTipsType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("emailAddresses", this.emailAddresses);
        writer.writeEnumValue<MailTipsType>("mailTipsOptions", this.mailTipsOptions);
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
     * Sets the emailAddresses property value. 
     * @param value Value to set for the EmailAddresses property.
     */
    public set emailAddresses(value: string[] | undefined) {
        this._emailAddresses = value;
    };
    /**
     * Sets the mailTipsOptions property value. 
     * @param value Value to set for the MailTipsOptions property.
     */
    public set mailTipsOptions(value: MailTipsType | undefined) {
        this._mailTipsOptions = value;
    };
}
