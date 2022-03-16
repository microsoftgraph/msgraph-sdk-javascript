import {createUserAgentFromDiscriminatorValue} from './createUserAgentFromDiscriminatorValue';
import {UserAgent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Endpoint implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** User-agent reported by this endpoint.  */
    private _userAgent?: UserAgent | undefined;
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
     * Instantiates a new endpoint and sets the default values.
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
            ["userAgent", (o, n) => { (o as unknown as Endpoint).userAgent = n.getObjectValue<UserAgent>(createUserAgentFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<UserAgent>("userAgent", this.userAgent);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userAgent property value. User-agent reported by this endpoint.
     * @returns a userAgent
     */
    public get userAgent() {
        return this._userAgent;
    };
    /**
     * Sets the userAgent property value. User-agent reported by this endpoint.
     * @param value Value to set for the userAgent property.
     */
    public set userAgent(value: UserAgent | undefined) {
        this._userAgent = value;
    };
}
