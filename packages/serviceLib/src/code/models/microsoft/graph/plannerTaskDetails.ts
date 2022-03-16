import {createPlannerChecklistItemsFromDiscriminatorValue} from './createPlannerChecklistItemsFromDiscriminatorValue';
import {createPlannerExternalReferencesFromDiscriminatorValue} from './createPlannerExternalReferencesFromDiscriminatorValue';
import {Entity, PlannerChecklistItems, PlannerExternalReferences} from './index';
import {PlannerPreviewType} from './plannerPreviewType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerTaskDetails extends Entity implements Parsable {
    /** The collection of checklist items on the task.  */
    private _checklist?: PlannerChecklistItems | undefined;
    /** Description of the task.  */
    private _description?: string | undefined;
    /** This sets the type of preview that shows up on the task. The possible values are: automatic, noPreview, checklist, description, reference. When set to automatic the displayed preview is chosen by the app viewing the task.  */
    private _previewType?: PlannerPreviewType | undefined;
    /** The collection of references on the task.  */
    private _references?: PlannerExternalReferences | undefined;
    /**
     * Gets the checklist property value. The collection of checklist items on the task.
     * @returns a plannerChecklistItems
     */
    public get checklist() {
        return this._checklist;
    };
    /**
     * Sets the checklist property value. The collection of checklist items on the task.
     * @param value Value to set for the checklist property.
     */
    public set checklist(value: PlannerChecklistItems | undefined) {
        this._checklist = value;
    };
    /**
     * Instantiates a new plannerTaskDetails and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Description of the task.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the task.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["checklist", (o, n) => { (o as unknown as PlannerTaskDetails).checklist = n.getObjectValue<PlannerChecklistItems>(createPlannerChecklistItemsFromDiscriminatorValue); }],
            ["description", (o, n) => { (o as unknown as PlannerTaskDetails).description = n.getStringValue(); }],
            ["previewType", (o, n) => { (o as unknown as PlannerTaskDetails).previewType = n.getEnumValue<PlannerPreviewType>(PlannerPreviewType); }],
            ["references", (o, n) => { (o as unknown as PlannerTaskDetails).references = n.getObjectValue<PlannerExternalReferences>(createPlannerExternalReferencesFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the previewType property value. This sets the type of preview that shows up on the task. The possible values are: automatic, noPreview, checklist, description, reference. When set to automatic the displayed preview is chosen by the app viewing the task.
     * @returns a plannerPreviewType
     */
    public get previewType() {
        return this._previewType;
    };
    /**
     * Sets the previewType property value. This sets the type of preview that shows up on the task. The possible values are: automatic, noPreview, checklist, description, reference. When set to automatic the displayed preview is chosen by the app viewing the task.
     * @param value Value to set for the previewType property.
     */
    public set previewType(value: PlannerPreviewType | undefined) {
        this._previewType = value;
    };
    /**
     * Gets the references property value. The collection of references on the task.
     * @returns a plannerExternalReferences
     */
    public get references() {
        return this._references;
    };
    /**
     * Sets the references property value. The collection of references on the task.
     * @param value Value to set for the references property.
     */
    public set references(value: PlannerExternalReferences | undefined) {
        this._references = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PlannerChecklistItems>("checklist", this.checklist);
        writer.writeStringValue("description", this.description);
        writer.writeEnumValue<PlannerPreviewType>("previewType", this.previewType);
        writer.writeObjectValue<PlannerExternalReferences>("references", this.references);
    };
}
