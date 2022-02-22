import {ServiceAnnouncement} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Admin implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A container for service communications resources. Read-only.  */
    private _serviceAnnouncement?: ServiceAnnouncement | undefined;
    /**
     * Instantiates a new Admin and sets the default values.
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
     * Gets the serviceAnnouncement property value. A container for service communications resources. Read-only.
     * @returns a serviceAnnouncement
     */
    public get serviceAnnouncement() {
        return this._serviceAnnouncement;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["serviceAnnouncement", (o, n) => { (o as unknown as Admin).serviceAnnouncement = n.getObjectValue<ServiceAnnouncement>(ServiceAnnouncement); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ServiceAnnouncement>("serviceAnnouncement", this.serviceAnnouncement);
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
     * Sets the serviceAnnouncement property value. A container for service communications resources. Read-only.
     * @param value Value to set for the serviceAnnouncement property.
     */
    public set serviceAnnouncement(value: ServiceAnnouncement | undefined) {
        this._serviceAnnouncement = value;
    };
}
