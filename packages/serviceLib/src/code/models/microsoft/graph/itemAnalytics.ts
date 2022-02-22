import {Entity, ItemActivityStat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemAnalytics extends Entity implements Parsable {
    private _allTime?: ItemActivityStat | undefined;
    private _itemActivityStats?: ItemActivityStat[] | undefined;
    private _lastSevenDays?: ItemActivityStat | undefined;
    /**
     * Instantiates a new itemAnalytics and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the allTime property value. 
     * @returns a itemActivityStat
     */
    public get allTime() {
        return this._allTime;
    };
    /**
     * Gets the itemActivityStats property value. 
     * @returns a itemActivityStat
     */
    public get itemActivityStats() {
        return this._itemActivityStats;
    };
    /**
     * Gets the lastSevenDays property value. 
     * @returns a itemActivityStat
     */
    public get lastSevenDays() {
        return this._lastSevenDays;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["allTime", (o, n) => { (o as unknown as ItemAnalytics).allTime = n.getObjectValue<ItemActivityStat>(ItemActivityStat); }],
            ["itemActivityStats", (o, n) => { (o as unknown as ItemAnalytics).itemActivityStats = n.getCollectionOfObjectValues<ItemActivityStat>(ItemActivityStat); }],
            ["lastSevenDays", (o, n) => { (o as unknown as ItemAnalytics).lastSevenDays = n.getObjectValue<ItemActivityStat>(ItemActivityStat); }],
        ]);
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
    /**
     * Sets the allTime property value. 
     * @param value Value to set for the allTime property.
     */
    public set allTime(value: ItemActivityStat | undefined) {
        this._allTime = value;
    };
    /**
     * Sets the itemActivityStats property value. 
     * @param value Value to set for the itemActivityStats property.
     */
    public set itemActivityStats(value: ItemActivityStat[] | undefined) {
        this._itemActivityStats = value;
    };
    /**
     * Sets the lastSevenDays property value. 
     * @param value Value to set for the lastSevenDays property.
     */
    public set lastSevenDays(value: ItemActivityStat | undefined) {
        this._lastSevenDays = value;
    };
}
