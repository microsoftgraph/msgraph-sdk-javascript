import {Entity, RoutingMode} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AudioRoutingGroup extends Entity implements Parsable {
    /** List of receiving participant ids.  */
    private _receivers?: string[] | undefined;
    /** Routing group mode.  Possible values are: oneToOne, multicast.  */
    private _routingMode?: RoutingMode | undefined;
    /** List of source participant ids.  */
    private _sources?: string[] | undefined;
    /**
     * Instantiates a new audioRoutingGroup and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the receivers property value. List of receiving participant ids.
     * @returns a string
     */
    public get receivers() {
        return this._receivers;
    };
    /**
     * Gets the routingMode property value. Routing group mode.  Possible values are: oneToOne, multicast.
     * @returns a routingMode
     */
    public get routingMode() {
        return this._routingMode;
    };
    /**
     * Gets the sources property value. List of source participant ids.
     * @returns a string
     */
    public get sources() {
        return this._sources;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["receivers", (o, n) => { (o as unknown as AudioRoutingGroup).receivers = n.getCollectionOfPrimitiveValues<string>(); }],
            ["routingMode", (o, n) => { (o as unknown as AudioRoutingGroup).routingMode = n.getEnumValue<RoutingMode>(RoutingMode); }],
            ["sources", (o, n) => { (o as unknown as AudioRoutingGroup).sources = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("receivers", this.receivers);
        writer.writeEnumValue<RoutingMode>("routingMode", this.routingMode);
        writer.writeCollectionOfPrimitiveValues<string>("sources", this.sources);
    };
    /**
     * Sets the receivers property value. List of receiving participant ids.
     * @param value Value to set for the receivers property.
     */
    public set receivers(value: string[] | undefined) {
        this._receivers = value;
    };
    /**
     * Sets the routingMode property value. Routing group mode.  Possible values are: oneToOne, multicast.
     * @param value Value to set for the routingMode property.
     */
    public set routingMode(value: RoutingMode | undefined) {
        this._routingMode = value;
    };
    /**
     * Sets the sources property value. List of source participant ids.
     * @param value Value to set for the sources property.
     */
    public set sources(value: string[] | undefined) {
        this._sources = value;
    };
}
