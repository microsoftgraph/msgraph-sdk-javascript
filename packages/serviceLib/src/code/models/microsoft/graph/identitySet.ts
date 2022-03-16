import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentitySet implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Optional. The application associated with this action.  */
    private _application?: Identity | undefined;
    /** Optional. The device associated with this action.  */
    private _device?: Identity | undefined;
    /** Optional. The user associated with this action.  */
    private _user?: Identity | undefined;
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
     * Gets the application property value. Optional. The application associated with this action.
     * @returns a identity
     */
    public get application() {
        return this._application;
    };
    /**
     * Sets the application property value. Optional. The application associated with this action.
     * @param value Value to set for the application property.
     */
    public set application(value: Identity | undefined) {
        this._application = value;
    };
    /**
     * Instantiates a new identitySet and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the device property value. Optional. The device associated with this action.
     * @returns a identity
     */
    public get device() {
        return this._device;
    };
    /**
     * Sets the device property value. Optional. The device associated with this action.
     * @param value Value to set for the device property.
     */
    public set device(value: Identity | undefined) {
        this._device = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["application", (o, n) => { (o as unknown as IdentitySet).application = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); }],
            ["device", (o, n) => { (o as unknown as IdentitySet).device = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); }],
            ["user", (o, n) => { (o as unknown as IdentitySet).user = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Identity>("application", this.application);
        writer.writeObjectValue<Identity>("device", this.device);
        writer.writeObjectValue<Identity>("user", this.user);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the user property value. Optional. The user associated with this action.
     * @returns a identity
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. Optional. The user associated with this action.
     * @param value Value to set for the user property.
     */
    public set user(value: Identity | undefined) {
        this._user = value;
    };
}
