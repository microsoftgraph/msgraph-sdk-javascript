import {CommsOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecordOperation extends CommsOperation implements Parsable {
    /** The access token required to retrieve the recording.  */
    private _recordingAccessToken?: string | undefined;
    /** The location where the recording is located.  */
    private _recordingLocation?: string | undefined;
    /**
     * Instantiates a new recordOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["recordingAccessToken", (o, n) => { (o as unknown as RecordOperation).recordingAccessToken = n.getStringValue(); }],
            ["recordingLocation", (o, n) => { (o as unknown as RecordOperation).recordingLocation = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the recordingAccessToken property value. The access token required to retrieve the recording.
     * @returns a string
     */
    public get recordingAccessToken() {
        return this._recordingAccessToken;
    };
    /**
     * Sets the recordingAccessToken property value. The access token required to retrieve the recording.
     * @param value Value to set for the recordingAccessToken property.
     */
    public set recordingAccessToken(value: string | undefined) {
        this._recordingAccessToken = value;
    };
    /**
     * Gets the recordingLocation property value. The location where the recording is located.
     * @returns a string
     */
    public get recordingLocation() {
        return this._recordingLocation;
    };
    /**
     * Sets the recordingLocation property value. The location where the recording is located.
     * @param value Value to set for the recordingLocation property.
     */
    public set recordingLocation(value: string | undefined) {
        this._recordingLocation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("recordingAccessToken", this.recordingAccessToken);
        writer.writeStringValue("recordingLocation", this.recordingLocation);
    };
}
