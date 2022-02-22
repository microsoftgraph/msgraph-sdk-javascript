import {PrintJobConfiguration} from '../../../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RedirectRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _configuration?: PrintJobConfiguration | undefined;
    private _destinationPrinterId?: string | undefined;
    /**
     * Instantiates a new redirectRequestBody and sets the default values.
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
     * Gets the configuration property value. 
     * @returns a printJobConfiguration
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Gets the destinationPrinterId property value. 
     * @returns a string
     */
    public get destinationPrinterId() {
        return this._destinationPrinterId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["configuration", (o, n) => { (o as unknown as RedirectRequestBody).configuration = n.getObjectValue<PrintJobConfiguration>(PrintJobConfiguration); }],
            ["destinationPrinterId", (o, n) => { (o as unknown as RedirectRequestBody).destinationPrinterId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<PrintJobConfiguration>("configuration", this.configuration);
        writer.writeStringValue("destinationPrinterId", this.destinationPrinterId);
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
     * Sets the configuration property value. 
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: PrintJobConfiguration | undefined) {
        this._configuration = value;
    };
    /**
     * Sets the destinationPrinterId property value. 
     * @param value Value to set for the destinationPrinterId property.
     */
    public set destinationPrinterId(value: string | undefined) {
        this._destinationPrinterId = value;
    };
}
