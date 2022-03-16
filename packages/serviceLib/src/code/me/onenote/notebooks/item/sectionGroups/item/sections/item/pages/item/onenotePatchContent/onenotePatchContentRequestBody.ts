import {OnenotePatchContentCommand} from '../../../../../../../../../../../models/microsoft/graph/';
import {createOnenotePatchContentCommandFromDiscriminatorValue} from '../../../../../../../../../../../models/microsoft/graph/createOnenotePatchContentCommandFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the onenotePatchContent method.  */
export class OnenotePatchContentRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _commands?: OnenotePatchContentCommand[] | undefined;
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
     * Gets the commands property value. 
     * @returns a onenotePatchContentCommand
     */
    public get commands() {
        return this._commands;
    };
    /**
     * Sets the commands property value. 
     * @param value Value to set for the commands property.
     */
    public set commands(value: OnenotePatchContentCommand[] | undefined) {
        this._commands = value;
    };
    /**
     * Instantiates a new onenotePatchContentRequestBody and sets the default values.
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
            ["commands", (o, n) => { (o as unknown as OnenotePatchContentRequestBody).commands = n.getCollectionOfObjectValues<OnenotePatchContentCommand>(createOnenotePatchContentCommandFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<OnenotePatchContentCommand>("commands", this.commands);
        writer.writeAdditionalData(this.additionalData);
    };
}
