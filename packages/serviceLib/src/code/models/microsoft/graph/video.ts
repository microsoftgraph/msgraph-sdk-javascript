import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Video implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Number of audio bits per sample.  */
    private _audioBitsPerSample?: number | undefined;
    /** Number of audio channels.  */
    private _audioChannels?: number | undefined;
    /** Name of the audio format (AAC, MP3, etc.).  */
    private _audioFormat?: string | undefined;
    /** Number of audio samples per second.  */
    private _audioSamplesPerSecond?: number | undefined;
    /** Bit rate of the video in bits per second.  */
    private _bitrate?: number | undefined;
    /** Duration of the file in milliseconds.  */
    private _duration?: number | undefined;
    /** 'Four character code' name of the video format.  */
    private _fourCC?: string | undefined;
    /** Frame rate of the video.  */
    private _frameRate?: number | undefined;
    /** Height of the video, in pixels.  */
    private _height?: number | undefined;
    /** Width of the video, in pixels.  */
    private _width?: number | undefined;
    /**
     * Instantiates a new video and sets the default values.
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
     * Gets the audioBitsPerSample property value. Number of audio bits per sample.
     * @returns a integer
     */
    public get audioBitsPerSample() {
        return this._audioBitsPerSample;
    };
    /**
     * Gets the audioChannels property value. Number of audio channels.
     * @returns a integer
     */
    public get audioChannels() {
        return this._audioChannels;
    };
    /**
     * Gets the audioFormat property value. Name of the audio format (AAC, MP3, etc.).
     * @returns a string
     */
    public get audioFormat() {
        return this._audioFormat;
    };
    /**
     * Gets the audioSamplesPerSecond property value. Number of audio samples per second.
     * @returns a integer
     */
    public get audioSamplesPerSecond() {
        return this._audioSamplesPerSecond;
    };
    /**
     * Gets the bitrate property value. Bit rate of the video in bits per second.
     * @returns a integer
     */
    public get bitrate() {
        return this._bitrate;
    };
    /**
     * Gets the duration property value. Duration of the file in milliseconds.
     * @returns a int64
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Gets the fourCC property value. 'Four character code' name of the video format.
     * @returns a string
     */
    public get fourCC() {
        return this._fourCC;
    };
    /**
     * Gets the frameRate property value. Frame rate of the video.
     * @returns a double
     */
    public get frameRate() {
        return this._frameRate;
    };
    /**
     * Gets the height property value. Height of the video, in pixels.
     * @returns a integer
     */
    public get height() {
        return this._height;
    };
    /**
     * Gets the width property value. Width of the video, in pixels.
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["audioBitsPerSample", (o, n) => { (o as unknown as Video).audioBitsPerSample = n.getNumberValue(); }],
            ["audioChannels", (o, n) => { (o as unknown as Video).audioChannels = n.getNumberValue(); }],
            ["audioFormat", (o, n) => { (o as unknown as Video).audioFormat = n.getStringValue(); }],
            ["audioSamplesPerSecond", (o, n) => { (o as unknown as Video).audioSamplesPerSecond = n.getNumberValue(); }],
            ["bitrate", (o, n) => { (o as unknown as Video).bitrate = n.getNumberValue(); }],
            ["duration", (o, n) => { (o as unknown as Video).duration = n.getNumberValue(); }],
            ["fourCC", (o, n) => { (o as unknown as Video).fourCC = n.getStringValue(); }],
            ["frameRate", (o, n) => { (o as unknown as Video).frameRate = n.getNumberValue(); }],
            ["height", (o, n) => { (o as unknown as Video).height = n.getNumberValue(); }],
            ["width", (o, n) => { (o as unknown as Video).width = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("audioBitsPerSample", this.audioBitsPerSample);
        writer.writeNumberValue("audioChannels", this.audioChannels);
        writer.writeStringValue("audioFormat", this.audioFormat);
        writer.writeNumberValue("audioSamplesPerSecond", this.audioSamplesPerSecond);
        writer.writeNumberValue("bitrate", this.bitrate);
        writer.writeNumberValue("duration", this.duration);
        writer.writeStringValue("fourCC", this.fourCC);
        writer.writeNumberValue("frameRate", this.frameRate);
        writer.writeNumberValue("height", this.height);
        writer.writeNumberValue("width", this.width);
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
     * Sets the audioBitsPerSample property value. Number of audio bits per sample.
     * @param value Value to set for the audioBitsPerSample property.
     */
    public set audioBitsPerSample(value: number | undefined) {
        this._audioBitsPerSample = value;
    };
    /**
     * Sets the audioChannels property value. Number of audio channels.
     * @param value Value to set for the audioChannels property.
     */
    public set audioChannels(value: number | undefined) {
        this._audioChannels = value;
    };
    /**
     * Sets the audioFormat property value. Name of the audio format (AAC, MP3, etc.).
     * @param value Value to set for the audioFormat property.
     */
    public set audioFormat(value: string | undefined) {
        this._audioFormat = value;
    };
    /**
     * Sets the audioSamplesPerSecond property value. Number of audio samples per second.
     * @param value Value to set for the audioSamplesPerSecond property.
     */
    public set audioSamplesPerSecond(value: number | undefined) {
        this._audioSamplesPerSecond = value;
    };
    /**
     * Sets the bitrate property value. Bit rate of the video in bits per second.
     * @param value Value to set for the bitrate property.
     */
    public set bitrate(value: number | undefined) {
        this._bitrate = value;
    };
    /**
     * Sets the duration property value. Duration of the file in milliseconds.
     * @param value Value to set for the duration property.
     */
    public set duration(value: number | undefined) {
        this._duration = value;
    };
    /**
     * Sets the fourCC property value. 'Four character code' name of the video format.
     * @param value Value to set for the fourCC property.
     */
    public set fourCC(value: string | undefined) {
        this._fourCC = value;
    };
    /**
     * Sets the frameRate property value. Frame rate of the video.
     * @param value Value to set for the frameRate property.
     */
    public set frameRate(value: number | undefined) {
        this._frameRate = value;
    };
    /**
     * Sets the height property value. Height of the video, in pixels.
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        this._height = value;
    };
    /**
     * Sets the width property value. Width of the video, in pixels.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        this._width = value;
    };
}
