import {UpdateWindowsDeviceAccountActionParameter} from '../../../../models/microsoft/graph/';
import {createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue} from '../../../../models/microsoft/graph/createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the updateWindowsDeviceAccount method.  */
export class UpdateWindowsDeviceAccountRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _updateWindowsDeviceAccountActionParameter?: UpdateWindowsDeviceAccountActionParameter | undefined;
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
     * Instantiates a new updateWindowsDeviceAccountRequestBody and sets the default values.
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
            ["updateWindowsDeviceAccountActionParameter", (o, n) => { (o as unknown as UpdateWindowsDeviceAccountRequestBody).updateWindowsDeviceAccountActionParameter = n.getObjectValue<UpdateWindowsDeviceAccountActionParameter>(createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<UpdateWindowsDeviceAccountActionParameter>("updateWindowsDeviceAccountActionParameter", this.updateWindowsDeviceAccountActionParameter);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the updateWindowsDeviceAccountActionParameter property value. 
     * @returns a updateWindowsDeviceAccountActionParameter
     */
    public get updateWindowsDeviceAccountActionParameter() {
        return this._updateWindowsDeviceAccountActionParameter;
    };
    /**
     * Sets the updateWindowsDeviceAccountActionParameter property value. 
     * @param value Value to set for the updateWindowsDeviceAccountActionParameter property.
     */
    public set updateWindowsDeviceAccountActionParameter(value: UpdateWindowsDeviceAccountActionParameter | undefined) {
        this._updateWindowsDeviceAccountActionParameter = value;
    };
}
