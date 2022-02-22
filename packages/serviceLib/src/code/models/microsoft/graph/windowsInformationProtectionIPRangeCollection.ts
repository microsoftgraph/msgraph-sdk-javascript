import {IpRange} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsInformationProtectionIPRangeCollection implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Display name  */
    private _displayName?: string | undefined;
    /** Collection of ip ranges  */
    private _ranges?: IpRange[] | undefined;
    /**
     * Instantiates a new windowsInformationProtectionIPRangeCollection and sets the default values.
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
     * Gets the displayName property value. Display name
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the ranges property value. Collection of ip ranges
     * @returns a ipRange
     */
    public get ranges() {
        return this._ranges;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["displayName", (o, n) => { (o as unknown as WindowsInformationProtectionIPRangeCollection).displayName = n.getStringValue(); }],
            ["ranges", (o, n) => { (o as unknown as WindowsInformationProtectionIPRangeCollection).ranges = n.getCollectionOfObjectValues<IpRange>(IpRange); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<IpRange>("ranges", this.ranges);
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
     * Sets the displayName property value. Display name
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the ranges property value. Collection of ip ranges
     * @param value Value to set for the ranges property.
     */
    public set ranges(value: IpRange[] | undefined) {
        this._ranges = value;
    };
}
