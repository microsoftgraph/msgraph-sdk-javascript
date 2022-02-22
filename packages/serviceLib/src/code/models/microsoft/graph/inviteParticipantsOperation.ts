import {CommsOperation, InvitationParticipantInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InviteParticipantsOperation extends CommsOperation implements Parsable {
    /** The participants to invite.  */
    private _participants?: InvitationParticipantInfo[] | undefined;
    /**
     * Instantiates a new inviteParticipantsOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the participants property value. The participants to invite.
     * @returns a invitationParticipantInfo
     */
    public get participants() {
        return this._participants;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["participants", (o, n) => { (o as unknown as InviteParticipantsOperation).participants = n.getCollectionOfObjectValues<InvitationParticipantInfo>(InvitationParticipantInfo); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<InvitationParticipantInfo>("participants", this.participants);
    };
    /**
     * Sets the participants property value. The participants to invite.
     * @param value Value to set for the participants property.
     */
    public set participants(value: InvitationParticipantInfo[] | undefined) {
        this._participants = value;
    };
}
