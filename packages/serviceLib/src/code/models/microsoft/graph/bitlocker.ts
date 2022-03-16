import {createBitlockerRecoveryKeyFromDiscriminatorValue} from './createBitlockerRecoveryKeyFromDiscriminatorValue';
import {BitlockerRecoveryKey, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Bitlocker extends Entity implements Parsable {
    /** The recovery keys associated with the bitlocker entity.  */
    private _recoveryKeys?: BitlockerRecoveryKey[] | undefined;
    /**
     * Instantiates a new bitlocker and sets the default values.
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
            ["recoveryKeys", (o, n) => { (o as unknown as Bitlocker).recoveryKeys = n.getCollectionOfObjectValues<BitlockerRecoveryKey>(createBitlockerRecoveryKeyFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the recoveryKeys property value. The recovery keys associated with the bitlocker entity.
     * @returns a bitlockerRecoveryKey
     */
    public get recoveryKeys() {
        return this._recoveryKeys;
    };
    /**
     * Sets the recoveryKeys property value. The recovery keys associated with the bitlocker entity.
     * @param value Value to set for the recoveryKeys property.
     */
    public set recoveryKeys(value: BitlockerRecoveryKey[] | undefined) {
        this._recoveryKeys = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<BitlockerRecoveryKey>("recoveryKeys", this.recoveryKeys);
    };
}
