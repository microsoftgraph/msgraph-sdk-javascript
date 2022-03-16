import {createItemActivityStatFromDiscriminatorValue} from './createItemActivityStatFromDiscriminatorValue';
import {Entity, ItemActivityStat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemAnalytics extends Entity implements Parsable {
    private _allTime?: ItemActivityStat | undefined;
    private _itemActivityStats?: ItemActivityStat[] | undefined;
    private _lastSevenDays?: ItemActivityStat | undefined;
    /**
     * Gets the allTime property value. 
     * @returns a itemActivityStat
     */
    public get allTime() {
        return this._allTime;
    };
    /**
     * Sets the allTime property value. 
     * @param value Value to set for the allTime property.
     */
    public set allTime(value: ItemActivityStat | undefined) {
        this._allTime = value;
    };
    /**
     * Instantiates a new itemAnalytics and sets the default values.
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
            ["allTime", (o, n) => { (o as unknown as ItemAnalytics).allTime = n.getObjectValue<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); }],
            ["itemActivityStats", (o, n) => { (o as unknown as ItemAnalytics).itemActivityStats = n.getCollectionOfObjectValues<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); }],
            ["lastSevenDays", (o, n) => { (o as unknown as ItemAnalytics).lastSevenDays = n.getObjectValue<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the itemActivityStats property value. 
     * @returns a itemActivityStat
     */
    public get itemActivityStats() {
        return this._itemActivityStats;
    };
    /**
     * Sets the itemActivityStats property value. 
     * @param value Value to set for the itemActivityStats property.
     */
    public set itemActivityStats(value: ItemActivityStat[] | undefined) {
        this._itemActivityStats = value;
    };
    /**
     * Gets the lastSevenDays property value. 
     * @returns a itemActivityStat
     */
    public get lastSevenDays() {
        return this._lastSevenDays;
    };
    /**
     * Sets the lastSevenDays property value. 
     * @param value Value to set for the lastSevenDays property.
     */
    public set lastSevenDays(value: ItemActivityStat | undefined) {
        this._lastSevenDays = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ItemActivityStat>("allTime", this.allTime);
        writer.writeCollectionOfObjectValues<ItemActivityStat>("itemActivityStats", this.itemActivityStats);
        writer.writeObjectValue<ItemActivityStat>("lastSevenDays", this.lastSevenDays);
    };
}
