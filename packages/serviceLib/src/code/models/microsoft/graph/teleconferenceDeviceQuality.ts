import {createTeleconferenceDeviceMediaQualityFromDiscriminatorValue} from './createTeleconferenceDeviceMediaQualityFromDiscriminatorValue';
import {TeleconferenceDeviceMediaQuality} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeleconferenceDeviceQuality implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A unique identifier for all  the participant calls in a conference or a unique identifier for two participant calls in P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId.  */
    private _callChainId?: string | undefined;
    /** A geo-region where the service is deployed, such as ProdNoam.  */
    private _cloudServiceDeploymentEnvironment?: string | undefined;
    /** A unique deployment identifier assigned by Azure.  */
    private _cloudServiceDeploymentId?: string | undefined;
    /** The Azure deployed cloud service instance name, such as FrontEnd_IN_3.  */
    private _cloudServiceInstanceName?: string | undefined;
    /** The Azure deployed cloud service name, such as contoso.cloudapp.net.  */
    private _cloudServiceName?: string | undefined;
    /** Any additional description, such as VTC Bldg 30/21.  */
    private _deviceDescription?: string | undefined;
    /** The user media agent name, such as Cisco SX80.  */
    private _deviceName?: string | undefined;
    /** A unique identifier for a specific media leg of a participant in a conference.  One participant can have multiple media leg identifiers if retargeting happens. CVI partner assigns this value.  */
    private _mediaLegId?: string | undefined;
    /** The list of media qualities in a media session (call), such as audio quality, video quality, and/or screen sharing quality.  */
    private _mediaQualityList?: TeleconferenceDeviceMediaQuality[] | undefined;
    /** A unique identifier for a specific participant in a conference. The CVI partner needs to copy over Call.MyParticipantId to this property.  */
    private _participantId?: string | undefined;
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
     * Gets the callChainId property value. A unique identifier for all  the participant calls in a conference or a unique identifier for two participant calls in P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId.
     * @returns a string
     */
    public get callChainId() {
        return this._callChainId;
    };
    /**
     * Sets the callChainId property value. A unique identifier for all  the participant calls in a conference or a unique identifier for two participant calls in P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId.
     * @param value Value to set for the callChainId property.
     */
    public set callChainId(value: string | undefined) {
        this._callChainId = value;
    };
    /**
     * Gets the cloudServiceDeploymentEnvironment property value. A geo-region where the service is deployed, such as ProdNoam.
     * @returns a string
     */
    public get cloudServiceDeploymentEnvironment() {
        return this._cloudServiceDeploymentEnvironment;
    };
    /**
     * Sets the cloudServiceDeploymentEnvironment property value. A geo-region where the service is deployed, such as ProdNoam.
     * @param value Value to set for the cloudServiceDeploymentEnvironment property.
     */
    public set cloudServiceDeploymentEnvironment(value: string | undefined) {
        this._cloudServiceDeploymentEnvironment = value;
    };
    /**
     * Gets the cloudServiceDeploymentId property value. A unique deployment identifier assigned by Azure.
     * @returns a string
     */
    public get cloudServiceDeploymentId() {
        return this._cloudServiceDeploymentId;
    };
    /**
     * Sets the cloudServiceDeploymentId property value. A unique deployment identifier assigned by Azure.
     * @param value Value to set for the cloudServiceDeploymentId property.
     */
    public set cloudServiceDeploymentId(value: string | undefined) {
        this._cloudServiceDeploymentId = value;
    };
    /**
     * Gets the cloudServiceInstanceName property value. The Azure deployed cloud service instance name, such as FrontEnd_IN_3.
     * @returns a string
     */
    public get cloudServiceInstanceName() {
        return this._cloudServiceInstanceName;
    };
    /**
     * Sets the cloudServiceInstanceName property value. The Azure deployed cloud service instance name, such as FrontEnd_IN_3.
     * @param value Value to set for the cloudServiceInstanceName property.
     */
    public set cloudServiceInstanceName(value: string | undefined) {
        this._cloudServiceInstanceName = value;
    };
    /**
     * Gets the cloudServiceName property value. The Azure deployed cloud service name, such as contoso.cloudapp.net.
     * @returns a string
     */
    public get cloudServiceName() {
        return this._cloudServiceName;
    };
    /**
     * Sets the cloudServiceName property value. The Azure deployed cloud service name, such as contoso.cloudapp.net.
     * @param value Value to set for the cloudServiceName property.
     */
    public set cloudServiceName(value: string | undefined) {
        this._cloudServiceName = value;
    };
    /**
     * Instantiates a new teleconferenceDeviceQuality and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the deviceDescription property value. Any additional description, such as VTC Bldg 30/21.
     * @returns a string
     */
    public get deviceDescription() {
        return this._deviceDescription;
    };
    /**
     * Sets the deviceDescription property value. Any additional description, such as VTC Bldg 30/21.
     * @param value Value to set for the deviceDescription property.
     */
    public set deviceDescription(value: string | undefined) {
        this._deviceDescription = value;
    };
    /**
     * Gets the deviceName property value. The user media agent name, such as Cisco SX80.
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Sets the deviceName property value. The user media agent name, such as Cisco SX80.
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        this._deviceName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["callChainId", (o, n) => { (o as unknown as TeleconferenceDeviceQuality).callChainId = n.getStringValue(); }],
            ["cloudServiceDeploymentEnvironment", (o, n) => { (o as unknown as TeleconferenceDeviceQuality).cloudServiceDeploymentEnvironment = n.getStringValue(); }],
            ["cloudServiceDeploymentId", (o, n) => { (o as unknown as TeleconferenceDeviceQuality).cloudServiceDeploymentId = n.getStringValue(); }],
            ["cloudServiceInstanceName", (o, n) => { (o as unknown as TeleconferenceDeviceQuality).cloudServiceInstanceName = n.getStringValue(); }],
            ["cloudServiceName", (o, n) => { (o as unknown as TeleconferenceDeviceQuality).cloudServiceName = n.getStringValue(); }],
            ["deviceDescription", (o, n) => { (o as unknown as TeleconferenceDeviceQuality).deviceDescription = n.getStringValue(); }],
            ["deviceName", (o, n) => { (o as unknown as TeleconferenceDeviceQuality).deviceName = n.getStringValue(); }],
            ["mediaLegId", (o, n) => { (o as unknown as TeleconferenceDeviceQuality).mediaLegId = n.getStringValue(); }],
            ["mediaQualityList", (o, n) => { (o as unknown as TeleconferenceDeviceQuality).mediaQualityList = n.getCollectionOfObjectValues<TeleconferenceDeviceMediaQuality>(createTeleconferenceDeviceMediaQualityFromDiscriminatorValue); }],
            ["participantId", (o, n) => { (o as unknown as TeleconferenceDeviceQuality).participantId = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the mediaLegId property value. A unique identifier for a specific media leg of a participant in a conference.  One participant can have multiple media leg identifiers if retargeting happens. CVI partner assigns this value.
     * @returns a string
     */
    public get mediaLegId() {
        return this._mediaLegId;
    };
    /**
     * Sets the mediaLegId property value. A unique identifier for a specific media leg of a participant in a conference.  One participant can have multiple media leg identifiers if retargeting happens. CVI partner assigns this value.
     * @param value Value to set for the mediaLegId property.
     */
    public set mediaLegId(value: string | undefined) {
        this._mediaLegId = value;
    };
    /**
     * Gets the mediaQualityList property value. The list of media qualities in a media session (call), such as audio quality, video quality, and/or screen sharing quality.
     * @returns a teleconferenceDeviceMediaQuality
     */
    public get mediaQualityList() {
        return this._mediaQualityList;
    };
    /**
     * Sets the mediaQualityList property value. The list of media qualities in a media session (call), such as audio quality, video quality, and/or screen sharing quality.
     * @param value Value to set for the mediaQualityList property.
     */
    public set mediaQualityList(value: TeleconferenceDeviceMediaQuality[] | undefined) {
        this._mediaQualityList = value;
    };
    /**
     * Gets the participantId property value. A unique identifier for a specific participant in a conference. The CVI partner needs to copy over Call.MyParticipantId to this property.
     * @returns a string
     */
    public get participantId() {
        return this._participantId;
    };
    /**
     * Sets the participantId property value. A unique identifier for a specific participant in a conference. The CVI partner needs to copy over Call.MyParticipantId to this property.
     * @param value Value to set for the participantId property.
     */
    public set participantId(value: string | undefined) {
        this._participantId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("callChainId", this.callChainId);
        writer.writeStringValue("cloudServiceDeploymentEnvironment", this.cloudServiceDeploymentEnvironment);
        writer.writeStringValue("cloudServiceDeploymentId", this.cloudServiceDeploymentId);
        writer.writeStringValue("cloudServiceInstanceName", this.cloudServiceInstanceName);
        writer.writeStringValue("cloudServiceName", this.cloudServiceName);
        writer.writeStringValue("deviceDescription", this.deviceDescription);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeStringValue("mediaLegId", this.mediaLegId);
        writer.writeCollectionOfObjectValues<TeleconferenceDeviceMediaQuality>("mediaQualityList", this.mediaQualityList);
        writer.writeStringValue("participantId", this.participantId);
        writer.writeAdditionalData(this.additionalData);
    };
}
