import {Entity} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintUsage extends Entity implements Parsable {
    private _completedBlackAndWhiteJobCount?: number | undefined;
    private _completedColorJobCount?: number | undefined;
    private _incompleteJobCount?: number | undefined;
    private _usageDate?: DateOnly | undefined;
    /**
     * Gets the completedBlackAndWhiteJobCount property value. 
     * @returns a int64
     */
    public get completedBlackAndWhiteJobCount() {
        return this._completedBlackAndWhiteJobCount;
    };
    /**
     * Sets the completedBlackAndWhiteJobCount property value. 
     * @param value Value to set for the completedBlackAndWhiteJobCount property.
     */
    public set completedBlackAndWhiteJobCount(value: number | undefined) {
        this._completedBlackAndWhiteJobCount = value;
    };
    /**
     * Gets the completedColorJobCount property value. 
     * @returns a int64
     */
    public get completedColorJobCount() {
        return this._completedColorJobCount;
    };
    /**
     * Sets the completedColorJobCount property value. 
     * @param value Value to set for the completedColorJobCount property.
     */
    public set completedColorJobCount(value: number | undefined) {
        this._completedColorJobCount = value;
    };
    /**
     * Instantiates a new printUsage and sets the default values.
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
            ["completedBlackAndWhiteJobCount", (o, n) => { (o as unknown as PrintUsage).completedBlackAndWhiteJobCount = n.getNumberValue(); }],
            ["completedColorJobCount", (o, n) => { (o as unknown as PrintUsage).completedColorJobCount = n.getNumberValue(); }],
            ["incompleteJobCount", (o, n) => { (o as unknown as PrintUsage).incompleteJobCount = n.getNumberValue(); }],
            ["usageDate", (o, n) => { (o as unknown as PrintUsage).usageDate = n.getDateOnlyValue(); }],
        ]);
    };
    /**
     * Gets the incompleteJobCount property value. 
     * @returns a int64
     */
    public get incompleteJobCount() {
        return this._incompleteJobCount;
    };
    /**
     * Sets the incompleteJobCount property value. 
     * @param value Value to set for the incompleteJobCount property.
     */
    public set incompleteJobCount(value: number | undefined) {
        this._incompleteJobCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("completedBlackAndWhiteJobCount", this.completedBlackAndWhiteJobCount);
        writer.writeNumberValue("completedColorJobCount", this.completedColorJobCount);
        writer.writeNumberValue("incompleteJobCount", this.incompleteJobCount);
        writer.writeDateOnlyValue("usageDate", this.usageDate);
    };
    /**
     * Gets the usageDate property value. 
     * @returns a DateOnly
     */
    public get usageDate() {
        return this._usageDate;
    };
    /**
     * Sets the usageDate property value. 
     * @param value Value to set for the usageDate property.
     */
    public set usageDate(value: DateOnly | undefined) {
        this._usageDate = value;
    };
}
