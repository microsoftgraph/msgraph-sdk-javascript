import { GraphApis } from "../../lib/src/rest/graphAPIs";

import { operation1606, operation1607, operation1608, operation1609, operation1610, operation1611, operation1612, operation1613, operation1614, operation1615, operation1616, operation1617, operation1618, operation1619, operation1620, operation1621, operation1622, operation1623, operation1624, operation1625, operation1626, operation1627, operation1628, operation1629, operation1630, operation1631, operation1632, operation1633, operation1634, operation1635, operation1636, operation1637, operation1638, operation1639, operation1640, operation1641, operation1642, operation1643, operation1644, operation1645, operation1646, operation2802, operation2803, operation2804, operation2805, operation2806, operation2807, operation2808, operation2809, operation2810, operation2811, operation2812, operation2813, operation2814, operation2815, operation2816, operation2817, operation2818, operation2819, operation2820, operation2821, operation2822, operation2823, operation2824, operation2825, operation2826, operation2827, operation2828, operation2829, operation2830, operation2831, operation2832, operation2833, operation2834, operation2835, operation2836, operation2837, operation2838 } from "../../lib/src/rest/operations";

declare module "../../lib/src/rest/graphAPIs" {
    export interface GraphApis {
        (api: "/groups/{group-id}/threads/{conversationThread-id}", groupid: string, conversationThreadid: string): operation2802,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/microsoft.graph.reply", groupid: string, conversationThreadid: string): operation2803,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts", groupid: string, conversationThreadid: string): operation2804,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}", groupid: string, conversationThreadid: string, postid: string): operation2805,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments", groupid: string, conversationThreadid: string, postid: string): operation2806,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}", groupid: string, conversationThreadid: string, postid: string, attachmentid: string): operation2807,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/$count", groupid: string, conversationThreadid: string, postid: string): operation2808,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/microsoft.graph.createUploadSession", groupid: string, conversationThreadid: string, postid: string): operation2809,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions", groupid: string, conversationThreadid: string, postid: string): operation2810,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}", groupid: string, conversationThreadid: string, postid: string, extensionid: string): operation2811,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/$count", groupid: string, conversationThreadid: string, postid: string): operation2812,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo", groupid: string, conversationThreadid: string, postid: string): operation2813,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments", groupid: string, conversationThreadid: string, postid: string): operation2814,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}", groupid: string, conversationThreadid: string, postid: string, attachmentid: string): operation2815,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/$count", groupid: string, conversationThreadid: string, postid: string): operation2816,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/microsoft.graph.createUploadSession", groupid: string, conversationThreadid: string, postid: string): operation2817,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions", groupid: string, conversationThreadid: string, postid: string): operation2818,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}", groupid: string, conversationThreadid: string, postid: string, extensionid: string): operation2819,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/$count", groupid: string, conversationThreadid: string, postid: string): operation2820,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/microsoft.graph.forward", groupid: string, conversationThreadid: string, postid: string): operation2821,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/microsoft.graph.reply", groupid: string, conversationThreadid: string, postid: string): operation2822,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/multiValueExtendedProperties", groupid: string, conversationThreadid: string, postid: string): operation2823,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}", groupid: string, conversationThreadid: string, postid: string, multiValueLegacyExtendedPropertyid: string): operation2824,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/multiValueExtendedProperties/$count", groupid: string, conversationThreadid: string, postid: string): operation2825,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/singleValueExtendedProperties", groupid: string, conversationThreadid: string, postid: string): operation2826,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}", groupid: string, conversationThreadid: string, postid: string, singleValueLegacyExtendedPropertyid: string): operation2827,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/singleValueExtendedProperties/$count", groupid: string, conversationThreadid: string, postid: string): operation2828,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/microsoft.graph.forward", groupid: string, conversationThreadid: string, postid: string): operation2829,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/microsoft.graph.reply", groupid: string, conversationThreadid: string, postid: string): operation2830,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/multiValueExtendedProperties", groupid: string, conversationThreadid: string, postid: string): operation2831,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}", groupid: string, conversationThreadid: string, postid: string, multiValueLegacyExtendedPropertyid: string): operation2832,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/multiValueExtendedProperties/$count", groupid: string, conversationThreadid: string, postid: string): operation2833,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/singleValueExtendedProperties", groupid: string, conversationThreadid: string, postid: string): operation2834,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}", groupid: string, conversationThreadid: string, postid: string, singleValueLegacyExtendedPropertyid: string): operation2835,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/singleValueExtendedProperties/$count", groupid: string, conversationThreadid: string, postid: string): operation2836,
        (api: "/groups/{group-id}/threads/{conversationThread-id}/posts/$count", groupid: string, conversationThreadid: string): operation2837,
        (api: "/groups/{group-id}/threads/$count", groupid: string): operation2838,

    }
}

export { };