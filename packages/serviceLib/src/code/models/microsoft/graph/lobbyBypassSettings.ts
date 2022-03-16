import {LobbyBypassScope} from './lobbyBypassScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LobbyBypassSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Specifies whether or not to always let dial-in callers bypass the lobby. Optional.  */
    private _isDialInBypassEnabled?: boolean | undefined;
    /** Specifies the type of participants that are automatically admitted into a meeting, bypassing the lobby. Optional.  */
    private _scope?: LobbyBypassScope | undefined;
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
     * Instantiates a new lobbyBypassSettings and sets the default values.
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
            ["isDialInBypassEnabled", (o, n) => { (o as unknown as LobbyBypassSettings).isDialInBypassEnabled = n.getBooleanValue(); }],
            ["scope", (o, n) => { (o as unknown as LobbyBypassSettings).scope = n.getEnumValue<LobbyBypassScope>(LobbyBypassScope); }],
        ]);
    };
    /**
     * Gets the isDialInBypassEnabled property value. Specifies whether or not to always let dial-in callers bypass the lobby. Optional.
     * @returns a boolean
     */
    public get isDialInBypassEnabled() {
        return this._isDialInBypassEnabled;
    };
    /**
     * Sets the isDialInBypassEnabled property value. Specifies whether or not to always let dial-in callers bypass the lobby. Optional.
     * @param value Value to set for the isDialInBypassEnabled property.
     */
    public set isDialInBypassEnabled(value: boolean | undefined) {
        this._isDialInBypassEnabled = value;
    };
    /**
     * Gets the scope property value. Specifies the type of participants that are automatically admitted into a meeting, bypassing the lobby. Optional.
     * @returns a lobbyBypassScope
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. Specifies the type of participants that are automatically admitted into a meeting, bypassing the lobby. Optional.
     * @param value Value to set for the scope property.
     */
    public set scope(value: LobbyBypassScope | undefined) {
        this._scope = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isDialInBypassEnabled", this.isDialInBypassEnabled);
        writer.writeEnumValue<LobbyBypassScope>("scope", this.scope);
        writer.writeAdditionalData(this.additionalData);
    };
}
