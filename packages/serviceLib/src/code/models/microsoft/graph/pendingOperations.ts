import {createPendingContentUpdateFromDiscriminatorValue} from './createPendingContentUpdateFromDiscriminatorValue';
import {PendingContentUpdate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PendingOperations implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A property that indicates that an operation that might update the binary content of a file is pending completion.  */
    private _pendingContentUpdate?: PendingContentUpdate | undefined;
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
     * Instantiates a new pendingOperations and sets the default values.
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
            ["pendingContentUpdate", (o, n) => { (o as unknown as PendingOperations).pendingContentUpdate = n.getObjectValue<PendingContentUpdate>(createPendingContentUpdateFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the pendingContentUpdate property value. A property that indicates that an operation that might update the binary content of a file is pending completion.
     * @returns a pendingContentUpdate
     */
    public get pendingContentUpdate() {
        return this._pendingContentUpdate;
    };
    /**
     * Sets the pendingContentUpdate property value. A property that indicates that an operation that might update the binary content of a file is pending completion.
     * @param value Value to set for the pendingContentUpdate property.
     */
    public set pendingContentUpdate(value: PendingContentUpdate | undefined) {
        this._pendingContentUpdate = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<PendingContentUpdate>("pendingContentUpdate", this.pendingContentUpdate);
        writer.writeAdditionalData(this.additionalData);
    };
}
