import {DeviceManagementExchangeConnectorSyncType} from '../../../../models/microsoft/graph/deviceManagementExchangeConnectorSyncType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the sync method.  */
export class SyncRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _syncType?: DeviceManagementExchangeConnectorSyncType | undefined;
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
     * Instantiates a new syncRequestBody and sets the default values.
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
            ["syncType", (o, n) => { (o as unknown as SyncRequestBody).syncType = n.getEnumValue<DeviceManagementExchangeConnectorSyncType>(DeviceManagementExchangeConnectorSyncType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<DeviceManagementExchangeConnectorSyncType>("syncType", this.syncType);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the syncType property value. 
     * @returns a deviceManagementExchangeConnectorSyncType
     */
    public get syncType() {
        return this._syncType;
    };
    /**
     * Sets the syncType property value. 
     * @param value Value to set for the syncType property.
     */
    public set syncType(value: DeviceManagementExchangeConnectorSyncType | undefined) {
        this._syncType = value;
    };
}
