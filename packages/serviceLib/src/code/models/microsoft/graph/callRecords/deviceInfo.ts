import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceInfo implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Name of the capture device driver used by the media endpoint.  */
    private _captureDeviceDriver?: string | undefined;
    /** Name of the capture device used by the media endpoint.  */
    private _captureDeviceName?: string | undefined;
    /** Fraction of the call that the media endpoint detected the capture device was not working properly.  */
    private _captureNotFunctioningEventRatio?: number | undefined;
    /** Fraction of the call that the media endpoint detected the CPU resources available were insufficient and caused poor quality of the audio sent and received.  */
    private _cpuInsufficentEventRatio?: number | undefined;
    /** Fraction of the call that the media endpoint detected clipping in the captured audio that caused poor quality of the audio being sent.  */
    private _deviceClippingEventRatio?: number | undefined;
    /** Fraction of the call that the media endpoint detected glitches or gaps in the audio played or captured that caused poor quality of the audio being sent or received.  */
    private _deviceGlitchEventRatio?: number | undefined;
    /** Number of times during the call that the media endpoint detected howling or screeching audio.  */
    private _howlingEventCount?: number | undefined;
    /** The root mean square (RMS) of the incoming signal of up to the first 30 seconds of the call.  */
    private _initialSignalLevelRootMeanSquare?: number | undefined;
    /** Fraction of the call that the media endpoint detected low speech level that caused poor quality of the audio being sent.  */
    private _lowSpeechLevelEventRatio?: number | undefined;
    /** Fraction of the call that the media endpoint detected low speech to noise level that caused poor quality of the audio being sent.  */
    private _lowSpeechToNoiseEventRatio?: number | undefined;
    /** Glitches per 5 minute interval for the media endpoint's microphone.  */
    private _micGlitchRate?: number | undefined;
    /** Average energy level of received audio for audio classified as mono noise or left channel of stereo noise by the media endpoint.  */
    private _receivedNoiseLevel?: number | undefined;
    /** Average energy level of received audio for audio classified as mono speech, or left channel of stereo speech by the media endpoint.  */
    private _receivedSignalLevel?: number | undefined;
    /** Name of the render device driver used by the media endpoint.  */
    private _renderDeviceDriver?: string | undefined;
    /** Name of the render device used by the media endpoint.  */
    private _renderDeviceName?: string | undefined;
    /** Fraction of the call that media endpoint detected device render is muted.  */
    private _renderMuteEventRatio?: number | undefined;
    /** Fraction of the call that the media endpoint detected the render device was not working properly.  */
    private _renderNotFunctioningEventRatio?: number | undefined;
    /** Fraction of the call that media endpoint detected device render volume is set to 0.  */
    private _renderZeroVolumeEventRatio?: number | undefined;
    /** Average energy level of sent audio for audio classified as mono noise or left channel of stereo noise by the media endpoint.  */
    private _sentNoiseLevel?: number | undefined;
    /** Average energy level of sent audio for audio classified as mono speech, or left channel of stereo speech by the media endpoint.  */
    private _sentSignalLevel?: number | undefined;
    /** Glitches per 5 minute internal for the media endpoint's loudspeaker.  */
    private _speakerGlitchRate?: number | undefined;
    /**
     * Instantiates a new deviceInfo and sets the default values.
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
     * Gets the captureDeviceDriver property value. Name of the capture device driver used by the media endpoint.
     * @returns a string
     */
    public get captureDeviceDriver() {
        return this._captureDeviceDriver;
    };
    /**
     * Gets the captureDeviceName property value. Name of the capture device used by the media endpoint.
     * @returns a string
     */
    public get captureDeviceName() {
        return this._captureDeviceName;
    };
    /**
     * Gets the captureNotFunctioningEventRatio property value. Fraction of the call that the media endpoint detected the capture device was not working properly.
     * @returns a float
     */
    public get captureNotFunctioningEventRatio() {
        return this._captureNotFunctioningEventRatio;
    };
    /**
     * Gets the cpuInsufficentEventRatio property value. Fraction of the call that the media endpoint detected the CPU resources available were insufficient and caused poor quality of the audio sent and received.
     * @returns a float
     */
    public get cpuInsufficentEventRatio() {
        return this._cpuInsufficentEventRatio;
    };
    /**
     * Gets the deviceClippingEventRatio property value. Fraction of the call that the media endpoint detected clipping in the captured audio that caused poor quality of the audio being sent.
     * @returns a float
     */
    public get deviceClippingEventRatio() {
        return this._deviceClippingEventRatio;
    };
    /**
     * Gets the deviceGlitchEventRatio property value. Fraction of the call that the media endpoint detected glitches or gaps in the audio played or captured that caused poor quality of the audio being sent or received.
     * @returns a float
     */
    public get deviceGlitchEventRatio() {
        return this._deviceGlitchEventRatio;
    };
    /**
     * Gets the howlingEventCount property value. Number of times during the call that the media endpoint detected howling or screeching audio.
     * @returns a integer
     */
    public get howlingEventCount() {
        return this._howlingEventCount;
    };
    /**
     * Gets the initialSignalLevelRootMeanSquare property value. The root mean square (RMS) of the incoming signal of up to the first 30 seconds of the call.
     * @returns a float
     */
    public get initialSignalLevelRootMeanSquare() {
        return this._initialSignalLevelRootMeanSquare;
    };
    /**
     * Gets the lowSpeechLevelEventRatio property value. Fraction of the call that the media endpoint detected low speech level that caused poor quality of the audio being sent.
     * @returns a float
     */
    public get lowSpeechLevelEventRatio() {
        return this._lowSpeechLevelEventRatio;
    };
    /**
     * Gets the lowSpeechToNoiseEventRatio property value. Fraction of the call that the media endpoint detected low speech to noise level that caused poor quality of the audio being sent.
     * @returns a float
     */
    public get lowSpeechToNoiseEventRatio() {
        return this._lowSpeechToNoiseEventRatio;
    };
    /**
     * Gets the micGlitchRate property value. Glitches per 5 minute interval for the media endpoint's microphone.
     * @returns a float
     */
    public get micGlitchRate() {
        return this._micGlitchRate;
    };
    /**
     * Gets the receivedNoiseLevel property value. Average energy level of received audio for audio classified as mono noise or left channel of stereo noise by the media endpoint.
     * @returns a integer
     */
    public get receivedNoiseLevel() {
        return this._receivedNoiseLevel;
    };
    /**
     * Gets the receivedSignalLevel property value. Average energy level of received audio for audio classified as mono speech, or left channel of stereo speech by the media endpoint.
     * @returns a integer
     */
    public get receivedSignalLevel() {
        return this._receivedSignalLevel;
    };
    /**
     * Gets the renderDeviceDriver property value. Name of the render device driver used by the media endpoint.
     * @returns a string
     */
    public get renderDeviceDriver() {
        return this._renderDeviceDriver;
    };
    /**
     * Gets the renderDeviceName property value. Name of the render device used by the media endpoint.
     * @returns a string
     */
    public get renderDeviceName() {
        return this._renderDeviceName;
    };
    /**
     * Gets the renderMuteEventRatio property value. Fraction of the call that media endpoint detected device render is muted.
     * @returns a float
     */
    public get renderMuteEventRatio() {
        return this._renderMuteEventRatio;
    };
    /**
     * Gets the renderNotFunctioningEventRatio property value. Fraction of the call that the media endpoint detected the render device was not working properly.
     * @returns a float
     */
    public get renderNotFunctioningEventRatio() {
        return this._renderNotFunctioningEventRatio;
    };
    /**
     * Gets the renderZeroVolumeEventRatio property value. Fraction of the call that media endpoint detected device render volume is set to 0.
     * @returns a float
     */
    public get renderZeroVolumeEventRatio() {
        return this._renderZeroVolumeEventRatio;
    };
    /**
     * Gets the sentNoiseLevel property value. Average energy level of sent audio for audio classified as mono noise or left channel of stereo noise by the media endpoint.
     * @returns a integer
     */
    public get sentNoiseLevel() {
        return this._sentNoiseLevel;
    };
    /**
     * Gets the sentSignalLevel property value. Average energy level of sent audio for audio classified as mono speech, or left channel of stereo speech by the media endpoint.
     * @returns a integer
     */
    public get sentSignalLevel() {
        return this._sentSignalLevel;
    };
    /**
     * Gets the speakerGlitchRate property value. Glitches per 5 minute internal for the media endpoint's loudspeaker.
     * @returns a float
     */
    public get speakerGlitchRate() {
        return this._speakerGlitchRate;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["captureDeviceDriver", (o, n) => { (o as unknown as DeviceInfo).captureDeviceDriver = n.getStringValue(); }],
            ["captureDeviceName", (o, n) => { (o as unknown as DeviceInfo).captureDeviceName = n.getStringValue(); }],
            ["captureNotFunctioningEventRatio", (o, n) => { (o as unknown as DeviceInfo).captureNotFunctioningEventRatio = n.getNumberValue(); }],
            ["cpuInsufficentEventRatio", (o, n) => { (o as unknown as DeviceInfo).cpuInsufficentEventRatio = n.getNumberValue(); }],
            ["deviceClippingEventRatio", (o, n) => { (o as unknown as DeviceInfo).deviceClippingEventRatio = n.getNumberValue(); }],
            ["deviceGlitchEventRatio", (o, n) => { (o as unknown as DeviceInfo).deviceGlitchEventRatio = n.getNumberValue(); }],
            ["howlingEventCount", (o, n) => { (o as unknown as DeviceInfo).howlingEventCount = n.getNumberValue(); }],
            ["initialSignalLevelRootMeanSquare", (o, n) => { (o as unknown as DeviceInfo).initialSignalLevelRootMeanSquare = n.getNumberValue(); }],
            ["lowSpeechLevelEventRatio", (o, n) => { (o as unknown as DeviceInfo).lowSpeechLevelEventRatio = n.getNumberValue(); }],
            ["lowSpeechToNoiseEventRatio", (o, n) => { (o as unknown as DeviceInfo).lowSpeechToNoiseEventRatio = n.getNumberValue(); }],
            ["micGlitchRate", (o, n) => { (o as unknown as DeviceInfo).micGlitchRate = n.getNumberValue(); }],
            ["receivedNoiseLevel", (o, n) => { (o as unknown as DeviceInfo).receivedNoiseLevel = n.getNumberValue(); }],
            ["receivedSignalLevel", (o, n) => { (o as unknown as DeviceInfo).receivedSignalLevel = n.getNumberValue(); }],
            ["renderDeviceDriver", (o, n) => { (o as unknown as DeviceInfo).renderDeviceDriver = n.getStringValue(); }],
            ["renderDeviceName", (o, n) => { (o as unknown as DeviceInfo).renderDeviceName = n.getStringValue(); }],
            ["renderMuteEventRatio", (o, n) => { (o as unknown as DeviceInfo).renderMuteEventRatio = n.getNumberValue(); }],
            ["renderNotFunctioningEventRatio", (o, n) => { (o as unknown as DeviceInfo).renderNotFunctioningEventRatio = n.getNumberValue(); }],
            ["renderZeroVolumeEventRatio", (o, n) => { (o as unknown as DeviceInfo).renderZeroVolumeEventRatio = n.getNumberValue(); }],
            ["sentNoiseLevel", (o, n) => { (o as unknown as DeviceInfo).sentNoiseLevel = n.getNumberValue(); }],
            ["sentSignalLevel", (o, n) => { (o as unknown as DeviceInfo).sentSignalLevel = n.getNumberValue(); }],
            ["speakerGlitchRate", (o, n) => { (o as unknown as DeviceInfo).speakerGlitchRate = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("captureDeviceDriver", this.captureDeviceDriver);
        writer.writeStringValue("captureDeviceName", this.captureDeviceName);
        writer.writeNumberValue("captureNotFunctioningEventRatio", this.captureNotFunctioningEventRatio);
        writer.writeNumberValue("cpuInsufficentEventRatio", this.cpuInsufficentEventRatio);
        writer.writeNumberValue("deviceClippingEventRatio", this.deviceClippingEventRatio);
        writer.writeNumberValue("deviceGlitchEventRatio", this.deviceGlitchEventRatio);
        writer.writeNumberValue("howlingEventCount", this.howlingEventCount);
        writer.writeNumberValue("initialSignalLevelRootMeanSquare", this.initialSignalLevelRootMeanSquare);
        writer.writeNumberValue("lowSpeechLevelEventRatio", this.lowSpeechLevelEventRatio);
        writer.writeNumberValue("lowSpeechToNoiseEventRatio", this.lowSpeechToNoiseEventRatio);
        writer.writeNumberValue("micGlitchRate", this.micGlitchRate);
        writer.writeNumberValue("receivedNoiseLevel", this.receivedNoiseLevel);
        writer.writeNumberValue("receivedSignalLevel", this.receivedSignalLevel);
        writer.writeStringValue("renderDeviceDriver", this.renderDeviceDriver);
        writer.writeStringValue("renderDeviceName", this.renderDeviceName);
        writer.writeNumberValue("renderMuteEventRatio", this.renderMuteEventRatio);
        writer.writeNumberValue("renderNotFunctioningEventRatio", this.renderNotFunctioningEventRatio);
        writer.writeNumberValue("renderZeroVolumeEventRatio", this.renderZeroVolumeEventRatio);
        writer.writeNumberValue("sentNoiseLevel", this.sentNoiseLevel);
        writer.writeNumberValue("sentSignalLevel", this.sentSignalLevel);
        writer.writeNumberValue("speakerGlitchRate", this.speakerGlitchRate);
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
     * Sets the captureDeviceDriver property value. Name of the capture device driver used by the media endpoint.
     * @param value Value to set for the captureDeviceDriver property.
     */
    public set captureDeviceDriver(value: string | undefined) {
        this._captureDeviceDriver = value;
    };
    /**
     * Sets the captureDeviceName property value. Name of the capture device used by the media endpoint.
     * @param value Value to set for the captureDeviceName property.
     */
    public set captureDeviceName(value: string | undefined) {
        this._captureDeviceName = value;
    };
    /**
     * Sets the captureNotFunctioningEventRatio property value. Fraction of the call that the media endpoint detected the capture device was not working properly.
     * @param value Value to set for the captureNotFunctioningEventRatio property.
     */
    public set captureNotFunctioningEventRatio(value: number | undefined) {
        this._captureNotFunctioningEventRatio = value;
    };
    /**
     * Sets the cpuInsufficentEventRatio property value. Fraction of the call that the media endpoint detected the CPU resources available were insufficient and caused poor quality of the audio sent and received.
     * @param value Value to set for the cpuInsufficentEventRatio property.
     */
    public set cpuInsufficentEventRatio(value: number | undefined) {
        this._cpuInsufficentEventRatio = value;
    };
    /**
     * Sets the deviceClippingEventRatio property value. Fraction of the call that the media endpoint detected clipping in the captured audio that caused poor quality of the audio being sent.
     * @param value Value to set for the deviceClippingEventRatio property.
     */
    public set deviceClippingEventRatio(value: number | undefined) {
        this._deviceClippingEventRatio = value;
    };
    /**
     * Sets the deviceGlitchEventRatio property value. Fraction of the call that the media endpoint detected glitches or gaps in the audio played or captured that caused poor quality of the audio being sent or received.
     * @param value Value to set for the deviceGlitchEventRatio property.
     */
    public set deviceGlitchEventRatio(value: number | undefined) {
        this._deviceGlitchEventRatio = value;
    };
    /**
     * Sets the howlingEventCount property value. Number of times during the call that the media endpoint detected howling or screeching audio.
     * @param value Value to set for the howlingEventCount property.
     */
    public set howlingEventCount(value: number | undefined) {
        this._howlingEventCount = value;
    };
    /**
     * Sets the initialSignalLevelRootMeanSquare property value. The root mean square (RMS) of the incoming signal of up to the first 30 seconds of the call.
     * @param value Value to set for the initialSignalLevelRootMeanSquare property.
     */
    public set initialSignalLevelRootMeanSquare(value: number | undefined) {
        this._initialSignalLevelRootMeanSquare = value;
    };
    /**
     * Sets the lowSpeechLevelEventRatio property value. Fraction of the call that the media endpoint detected low speech level that caused poor quality of the audio being sent.
     * @param value Value to set for the lowSpeechLevelEventRatio property.
     */
    public set lowSpeechLevelEventRatio(value: number | undefined) {
        this._lowSpeechLevelEventRatio = value;
    };
    /**
     * Sets the lowSpeechToNoiseEventRatio property value. Fraction of the call that the media endpoint detected low speech to noise level that caused poor quality of the audio being sent.
     * @param value Value to set for the lowSpeechToNoiseEventRatio property.
     */
    public set lowSpeechToNoiseEventRatio(value: number | undefined) {
        this._lowSpeechToNoiseEventRatio = value;
    };
    /**
     * Sets the micGlitchRate property value. Glitches per 5 minute interval for the media endpoint's microphone.
     * @param value Value to set for the micGlitchRate property.
     */
    public set micGlitchRate(value: number | undefined) {
        this._micGlitchRate = value;
    };
    /**
     * Sets the receivedNoiseLevel property value. Average energy level of received audio for audio classified as mono noise or left channel of stereo noise by the media endpoint.
     * @param value Value to set for the receivedNoiseLevel property.
     */
    public set receivedNoiseLevel(value: number | undefined) {
        this._receivedNoiseLevel = value;
    };
    /**
     * Sets the receivedSignalLevel property value. Average energy level of received audio for audio classified as mono speech, or left channel of stereo speech by the media endpoint.
     * @param value Value to set for the receivedSignalLevel property.
     */
    public set receivedSignalLevel(value: number | undefined) {
        this._receivedSignalLevel = value;
    };
    /**
     * Sets the renderDeviceDriver property value. Name of the render device driver used by the media endpoint.
     * @param value Value to set for the renderDeviceDriver property.
     */
    public set renderDeviceDriver(value: string | undefined) {
        this._renderDeviceDriver = value;
    };
    /**
     * Sets the renderDeviceName property value. Name of the render device used by the media endpoint.
     * @param value Value to set for the renderDeviceName property.
     */
    public set renderDeviceName(value: string | undefined) {
        this._renderDeviceName = value;
    };
    /**
     * Sets the renderMuteEventRatio property value. Fraction of the call that media endpoint detected device render is muted.
     * @param value Value to set for the renderMuteEventRatio property.
     */
    public set renderMuteEventRatio(value: number | undefined) {
        this._renderMuteEventRatio = value;
    };
    /**
     * Sets the renderNotFunctioningEventRatio property value. Fraction of the call that the media endpoint detected the render device was not working properly.
     * @param value Value to set for the renderNotFunctioningEventRatio property.
     */
    public set renderNotFunctioningEventRatio(value: number | undefined) {
        this._renderNotFunctioningEventRatio = value;
    };
    /**
     * Sets the renderZeroVolumeEventRatio property value. Fraction of the call that media endpoint detected device render volume is set to 0.
     * @param value Value to set for the renderZeroVolumeEventRatio property.
     */
    public set renderZeroVolumeEventRatio(value: number | undefined) {
        this._renderZeroVolumeEventRatio = value;
    };
    /**
     * Sets the sentNoiseLevel property value. Average energy level of sent audio for audio classified as mono noise or left channel of stereo noise by the media endpoint.
     * @param value Value to set for the sentNoiseLevel property.
     */
    public set sentNoiseLevel(value: number | undefined) {
        this._sentNoiseLevel = value;
    };
    /**
     * Sets the sentSignalLevel property value. Average energy level of sent audio for audio classified as mono speech, or left channel of stereo speech by the media endpoint.
     * @param value Value to set for the sentSignalLevel property.
     */
    public set sentSignalLevel(value: number | undefined) {
        this._sentSignalLevel = value;
    };
    /**
     * Sets the speakerGlitchRate property value. Glitches per 5 minute internal for the media endpoint's loudspeaker.
     * @param value Value to set for the speakerGlitchRate property.
     */
    public set speakerGlitchRate(value: number | undefined) {
        this._speakerGlitchRate = value;
    };
}
