import {ChangeTrackedEntity, WorkforceIntegrationEncryption, WorkforceIntegrationSupportedEntities} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkforceIntegration extends ChangeTrackedEntity implements Parsable {
    /** API version for the call back URL. Start with 1.  */
    private _apiVersion?: number | undefined;
    /** Name of the workforce integration.  */
    private _displayName?: string | undefined;
    /** The workforce integration encryption resource.  */
    private _encryption?: WorkforceIntegrationEncryption | undefined;
    /** Indicates whether this workforce integration is currently active and available.  */
    private _isActive?: boolean | undefined;
    /** The Shifts entities supported for synchronous change notifications. Shifts will make a call back to the url provided on client changes on those entities added here. By default, no entities are supported for change notifications. Possible values are: none, shift, swapRequest, userShiftPreferences, openshift, openShiftRequest, offerShiftRequest, unknownFutureValue.  */
    private _supportedEntities?: WorkforceIntegrationSupportedEntities | undefined;
    /** Workforce Integration URL for callbacks from the Shifts service.  */
    private _url?: string | undefined;
    /**
     * Instantiates a new workforceIntegration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the apiVersion property value. API version for the call back URL. Start with 1.
     * @returns a integer
     */
    public get apiVersion() {
        return this._apiVersion;
    };
    /**
     * Gets the displayName property value. Name of the workforce integration.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the encryption property value. The workforce integration encryption resource.
     * @returns a workforceIntegrationEncryption
     */
    public get encryption() {
        return this._encryption;
    };
    /**
     * Gets the isActive property value. Indicates whether this workforce integration is currently active and available.
     * @returns a boolean
     */
    public get isActive() {
        return this._isActive;
    };
    /**
     * Gets the supportedEntities property value. The Shifts entities supported for synchronous change notifications. Shifts will make a call back to the url provided on client changes on those entities added here. By default, no entities are supported for change notifications. Possible values are: none, shift, swapRequest, userShiftPreferences, openshift, openShiftRequest, offerShiftRequest, unknownFutureValue.
     * @returns a workforceIntegrationSupportedEntities
     */
    public get supportedEntities() {
        return this._supportedEntities;
    };
    /**
     * Gets the url property value. Workforce Integration URL for callbacks from the Shifts service.
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["apiVersion", (o, n) => { (o as unknown as WorkforceIntegration).apiVersion = n.getNumberValue(); }],
            ["displayName", (o, n) => { (o as unknown as WorkforceIntegration).displayName = n.getStringValue(); }],
            ["encryption", (o, n) => { (o as unknown as WorkforceIntegration).encryption = n.getObjectValue<WorkforceIntegrationEncryption>(WorkforceIntegrationEncryption); }],
            ["isActive", (o, n) => { (o as unknown as WorkforceIntegration).isActive = n.getBooleanValue(); }],
            ["supportedEntities", (o, n) => { (o as unknown as WorkforceIntegration).supportedEntities = n.getEnumValue<WorkforceIntegrationSupportedEntities>(WorkforceIntegrationSupportedEntities); }],
            ["url", (o, n) => { (o as unknown as WorkforceIntegration).url = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("apiVersion", this.apiVersion);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<WorkforceIntegrationEncryption>("encryption", this.encryption);
        writer.writeBooleanValue("isActive", this.isActive);
        writer.writeEnumValue<WorkforceIntegrationSupportedEntities>("supportedEntities", this.supportedEntities);
        writer.writeStringValue("url", this.url);
    };
    /**
     * Sets the apiVersion property value. API version for the call back URL. Start with 1.
     * @param value Value to set for the apiVersion property.
     */
    public set apiVersion(value: number | undefined) {
        this._apiVersion = value;
    };
    /**
     * Sets the displayName property value. Name of the workforce integration.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the encryption property value. The workforce integration encryption resource.
     * @param value Value to set for the encryption property.
     */
    public set encryption(value: WorkforceIntegrationEncryption | undefined) {
        this._encryption = value;
    };
    /**
     * Sets the isActive property value. Indicates whether this workforce integration is currently active and available.
     * @param value Value to set for the isActive property.
     */
    public set isActive(value: boolean | undefined) {
        this._isActive = value;
    };
    /**
     * Sets the supportedEntities property value. The Shifts entities supported for synchronous change notifications. Shifts will make a call back to the url provided on client changes on those entities added here. By default, no entities are supported for change notifications. Possible values are: none, shift, swapRequest, userShiftPreferences, openshift, openShiftRequest, offerShiftRequest, unknownFutureValue.
     * @param value Value to set for the supportedEntities property.
     */
    public set supportedEntities(value: WorkforceIntegrationSupportedEntities | undefined) {
        this._supportedEntities = value;
    };
    /**
     * Sets the url property value. Workforce Integration URL for callbacks from the Shifts service.
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
