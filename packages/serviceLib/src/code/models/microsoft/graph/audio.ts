import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Audio implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The title of the album for this audio file.  */
    private _album?: string | undefined;
    /** The artist named on the album for the audio file.  */
    private _albumArtist?: string | undefined;
    /** The performing artist for the audio file.  */
    private _artist?: string | undefined;
    /** Bitrate expressed in kbps.  */
    private _bitrate?: number | undefined;
    /** The name of the composer of the audio file.  */
    private _composers?: string | undefined;
    /** Copyright information for the audio file.  */
    private _copyright?: string | undefined;
    /** The number of the disc this audio file came from.  */
    private _disc?: number | undefined;
    /** The total number of discs in this album.  */
    private _discCount?: number | undefined;
    /** Duration of the audio file, expressed in milliseconds  */
    private _duration?: number | undefined;
    /** The genre of this audio file.  */
    private _genre?: string | undefined;
    /** Indicates if the file is protected with digital rights management.  */
    private _hasDrm?: boolean | undefined;
    /** Indicates if the file is encoded with a variable bitrate.  */
    private _isVariableBitrate?: boolean | undefined;
    /** The title of the audio file.  */
    private _title?: string | undefined;
    /** The number of the track on the original disc for this audio file.  */
    private _track?: number | undefined;
    /** The total number of tracks on the original disc for this audio file.  */
    private _trackCount?: number | undefined;
    /** The year the audio file was recorded.  */
    private _year?: number | undefined;
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
     * Gets the album property value. The title of the album for this audio file.
     * @returns a string
     */
    public get album() {
        return this._album;
    };
    /**
     * Sets the album property value. The title of the album for this audio file.
     * @param value Value to set for the album property.
     */
    public set album(value: string | undefined) {
        this._album = value;
    };
    /**
     * Gets the albumArtist property value. The artist named on the album for the audio file.
     * @returns a string
     */
    public get albumArtist() {
        return this._albumArtist;
    };
    /**
     * Sets the albumArtist property value. The artist named on the album for the audio file.
     * @param value Value to set for the albumArtist property.
     */
    public set albumArtist(value: string | undefined) {
        this._albumArtist = value;
    };
    /**
     * Gets the artist property value. The performing artist for the audio file.
     * @returns a string
     */
    public get artist() {
        return this._artist;
    };
    /**
     * Sets the artist property value. The performing artist for the audio file.
     * @param value Value to set for the artist property.
     */
    public set artist(value: string | undefined) {
        this._artist = value;
    };
    /**
     * Gets the bitrate property value. Bitrate expressed in kbps.
     * @returns a int64
     */
    public get bitrate() {
        return this._bitrate;
    };
    /**
     * Sets the bitrate property value. Bitrate expressed in kbps.
     * @param value Value to set for the bitrate property.
     */
    public set bitrate(value: number | undefined) {
        this._bitrate = value;
    };
    /**
     * Gets the composers property value. The name of the composer of the audio file.
     * @returns a string
     */
    public get composers() {
        return this._composers;
    };
    /**
     * Sets the composers property value. The name of the composer of the audio file.
     * @param value Value to set for the composers property.
     */
    public set composers(value: string | undefined) {
        this._composers = value;
    };
    /**
     * Instantiates a new audio and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the copyright property value. Copyright information for the audio file.
     * @returns a string
     */
    public get copyright() {
        return this._copyright;
    };
    /**
     * Sets the copyright property value. Copyright information for the audio file.
     * @param value Value to set for the copyright property.
     */
    public set copyright(value: string | undefined) {
        this._copyright = value;
    };
    /**
     * Gets the disc property value. The number of the disc this audio file came from.
     * @returns a integer
     */
    public get disc() {
        return this._disc;
    };
    /**
     * Sets the disc property value. The number of the disc this audio file came from.
     * @param value Value to set for the disc property.
     */
    public set disc(value: number | undefined) {
        this._disc = value;
    };
    /**
     * Gets the discCount property value. The total number of discs in this album.
     * @returns a integer
     */
    public get discCount() {
        return this._discCount;
    };
    /**
     * Sets the discCount property value. The total number of discs in this album.
     * @param value Value to set for the discCount property.
     */
    public set discCount(value: number | undefined) {
        this._discCount = value;
    };
    /**
     * Gets the duration property value. Duration of the audio file, expressed in milliseconds
     * @returns a int64
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. Duration of the audio file, expressed in milliseconds
     * @param value Value to set for the duration property.
     */
    public set duration(value: number | undefined) {
        this._duration = value;
    };
    /**
     * Gets the genre property value. The genre of this audio file.
     * @returns a string
     */
    public get genre() {
        return this._genre;
    };
    /**
     * Sets the genre property value. The genre of this audio file.
     * @param value Value to set for the genre property.
     */
    public set genre(value: string | undefined) {
        this._genre = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["album", (o, n) => { (o as unknown as Audio).album = n.getStringValue(); }],
            ["albumArtist", (o, n) => { (o as unknown as Audio).albumArtist = n.getStringValue(); }],
            ["artist", (o, n) => { (o as unknown as Audio).artist = n.getStringValue(); }],
            ["bitrate", (o, n) => { (o as unknown as Audio).bitrate = n.getNumberValue(); }],
            ["composers", (o, n) => { (o as unknown as Audio).composers = n.getStringValue(); }],
            ["copyright", (o, n) => { (o as unknown as Audio).copyright = n.getStringValue(); }],
            ["disc", (o, n) => { (o as unknown as Audio).disc = n.getNumberValue(); }],
            ["discCount", (o, n) => { (o as unknown as Audio).discCount = n.getNumberValue(); }],
            ["duration", (o, n) => { (o as unknown as Audio).duration = n.getNumberValue(); }],
            ["genre", (o, n) => { (o as unknown as Audio).genre = n.getStringValue(); }],
            ["hasDrm", (o, n) => { (o as unknown as Audio).hasDrm = n.getBooleanValue(); }],
            ["isVariableBitrate", (o, n) => { (o as unknown as Audio).isVariableBitrate = n.getBooleanValue(); }],
            ["title", (o, n) => { (o as unknown as Audio).title = n.getStringValue(); }],
            ["track", (o, n) => { (o as unknown as Audio).track = n.getNumberValue(); }],
            ["trackCount", (o, n) => { (o as unknown as Audio).trackCount = n.getNumberValue(); }],
            ["year", (o, n) => { (o as unknown as Audio).year = n.getNumberValue(); }],
        ]);
    };
    /**
     * Gets the hasDrm property value. Indicates if the file is protected with digital rights management.
     * @returns a boolean
     */
    public get hasDrm() {
        return this._hasDrm;
    };
    /**
     * Sets the hasDrm property value. Indicates if the file is protected with digital rights management.
     * @param value Value to set for the hasDrm property.
     */
    public set hasDrm(value: boolean | undefined) {
        this._hasDrm = value;
    };
    /**
     * Gets the isVariableBitrate property value. Indicates if the file is encoded with a variable bitrate.
     * @returns a boolean
     */
    public get isVariableBitrate() {
        return this._isVariableBitrate;
    };
    /**
     * Sets the isVariableBitrate property value. Indicates if the file is encoded with a variable bitrate.
     * @param value Value to set for the isVariableBitrate property.
     */
    public set isVariableBitrate(value: boolean | undefined) {
        this._isVariableBitrate = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("album", this.album);
        writer.writeStringValue("albumArtist", this.albumArtist);
        writer.writeStringValue("artist", this.artist);
        writer.writeNumberValue("bitrate", this.bitrate);
        writer.writeStringValue("composers", this.composers);
        writer.writeStringValue("copyright", this.copyright);
        writer.writeNumberValue("disc", this.disc);
        writer.writeNumberValue("discCount", this.discCount);
        writer.writeNumberValue("duration", this.duration);
        writer.writeStringValue("genre", this.genre);
        writer.writeBooleanValue("hasDrm", this.hasDrm);
        writer.writeBooleanValue("isVariableBitrate", this.isVariableBitrate);
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("track", this.track);
        writer.writeNumberValue("trackCount", this.trackCount);
        writer.writeNumberValue("year", this.year);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the title property value. The title of the audio file.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title of the audio file.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the track property value. The number of the track on the original disc for this audio file.
     * @returns a integer
     */
    public get track() {
        return this._track;
    };
    /**
     * Sets the track property value. The number of the track on the original disc for this audio file.
     * @param value Value to set for the track property.
     */
    public set track(value: number | undefined) {
        this._track = value;
    };
    /**
     * Gets the trackCount property value. The total number of tracks on the original disc for this audio file.
     * @returns a integer
     */
    public get trackCount() {
        return this._trackCount;
    };
    /**
     * Sets the trackCount property value. The total number of tracks on the original disc for this audio file.
     * @param value Value to set for the trackCount property.
     */
    public set trackCount(value: number | undefined) {
        this._trackCount = value;
    };
    /**
     * Gets the year property value. The year the audio file was recorded.
     * @returns a integer
     */
    public get year() {
        return this._year;
    };
    /**
     * Sets the year property value. The year the audio file was recorded.
     * @param value Value to set for the year property.
     */
    public set year(value: number | undefined) {
        this._year = value;
    };
}
