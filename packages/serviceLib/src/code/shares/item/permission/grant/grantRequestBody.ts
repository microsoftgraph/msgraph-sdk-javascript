import {DriveRecipient} from '../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GrantRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _recipients?: DriveRecipient[] | undefined;
    private _roles?: string[] | undefined;
    /**
     * Instantiates a new grantRequestBody and sets the default values.
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
     * Gets the recipients property value. 
     * @returns a driveRecipient
     */
    public get recipients() {
        return this._recipients;
    };
    /**
     * Gets the roles property value. 
     * @returns a string
     */
    public get roles() {
        return this._roles;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["recipients", (o, n) => { (o as unknown as GrantRequestBody).recipients = n.getCollectionOfObjectValues<DriveRecipient>(DriveRecipient); }],
            ["roles", (o, n) => { (o as unknown as GrantRequestBody).roles = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<DriveRecipient>("recipients", this.recipients);
        writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
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
     * Sets the recipients property value. 
     * @param value Value to set for the recipients property.
     */
    public set recipients(value: DriveRecipient[] | undefined) {
        this._recipients = value;
    };
    /**
     * Sets the roles property value. 
     * @param value Value to set for the roles property.
     */
    public set roles(value: string[] | undefined) {
        this._roles = value;
    };
}
