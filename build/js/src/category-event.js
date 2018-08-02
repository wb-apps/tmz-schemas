/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link http://schemas.tmz.com/
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@gdbots/schemas/gdbots/ncr/event/EdgeCreatedV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeDeletedV1';
import '@gdbots/schemas/gdbots/pbjx/event/EventExecutionFailedV1';
import '@gdbots/schemas/gdbots/pbjx/event/HealthCheckedV1';
import '@tmz/schemas/tmz/apollo/event/PollCreatedV1';
import '@tmz/schemas/tmz/apollo/event/PollDeletedV1';
import '@tmz/schemas/tmz/apollo/event/PollExpiredV1';
import '@tmz/schemas/tmz/apollo/event/PollMarkedAsDraftV1';
import '@tmz/schemas/tmz/apollo/event/PollMarkedAsPendingV1';
import '@tmz/schemas/tmz/apollo/event/PollPublishedV1';
import '@tmz/schemas/tmz/apollo/event/PollScheduledV1';
import '@tmz/schemas/tmz/apollo/event/PollUnpublishedV1';
import '@tmz/schemas/tmz/apollo/event/PollUpdatedV1';
import '@tmz/schemas/tmz/apollo/event/VoteCastedV1';
import '@tmz/schemas/tmz/boost/event/SponsorCreatedV1';
import '@tmz/schemas/tmz/boost/event/SponsorDeletedV1';
import '@tmz/schemas/tmz/boost/event/SponsorExpiredV1';
import '@tmz/schemas/tmz/boost/event/SponsorMarkedAsDraftV1';
import '@tmz/schemas/tmz/boost/event/SponsorMarkedAsPendingV1';
import '@tmz/schemas/tmz/boost/event/SponsorPublishedV1';
import '@tmz/schemas/tmz/boost/event/SponsorRenamedV1';
import '@tmz/schemas/tmz/boost/event/SponsorScheduledV1';
import '@tmz/schemas/tmz/boost/event/SponsorUnpublishedV1';
import '@tmz/schemas/tmz/boost/event/SponsorUpdatedV1';
import '@tmz/schemas/tmz/canvas/event/PageCreatedV1';
import '@tmz/schemas/tmz/canvas/event/PageDeletedV1';
import '@tmz/schemas/tmz/canvas/event/PageExpiredV1';
import '@tmz/schemas/tmz/canvas/event/PageMarkedAsDraftV1';
import '@tmz/schemas/tmz/canvas/event/PageMarkedAsPendingV1';
import '@tmz/schemas/tmz/canvas/event/PagePublishedV1';
import '@tmz/schemas/tmz/canvas/event/PageRenamedV1';
import '@tmz/schemas/tmz/canvas/event/PageScheduledV1';
import '@tmz/schemas/tmz/canvas/event/PageUnpublishedV1';
import '@tmz/schemas/tmz/canvas/event/PageUpdatedV1';
import '@tmz/schemas/tmz/curator/event/GalleryCreatedV1';
import '@tmz/schemas/tmz/curator/event/GalleryDeletedV1';
import '@tmz/schemas/tmz/curator/event/GalleryExpiredV1';
import '@tmz/schemas/tmz/curator/event/GalleryMarkedAsDraftV1';
import '@tmz/schemas/tmz/curator/event/GalleryMarkedAsPendingV1';
import '@tmz/schemas/tmz/curator/event/GalleryPublishedV1';
import '@tmz/schemas/tmz/curator/event/GalleryRenamedV1';
import '@tmz/schemas/tmz/curator/event/GalleryScheduledV1';
import '@tmz/schemas/tmz/curator/event/GalleryUnpublishedV1';
import '@tmz/schemas/tmz/curator/event/GalleryUpdatedV1';
import '@tmz/schemas/tmz/curator/event/PromotionCreatedV1';
import '@tmz/schemas/tmz/curator/event/PromotionDeletedV1';
import '@tmz/schemas/tmz/curator/event/PromotionExpiredV1';
import '@tmz/schemas/tmz/curator/event/PromotionMarkedAsDraftV1';
import '@tmz/schemas/tmz/curator/event/PromotionMarkedAsPendingV1';
import '@tmz/schemas/tmz/curator/event/PromotionPublishedV1';
import '@tmz/schemas/tmz/curator/event/PromotionScheduledV1';
import '@tmz/schemas/tmz/curator/event/PromotionUnpublishedV1';
import '@tmz/schemas/tmz/curator/event/PromotionUpdatedV1';
import '@tmz/schemas/tmz/curator/event/TeaserCreatedV1';
import '@tmz/schemas/tmz/curator/event/TeaserDeletedV1';
import '@tmz/schemas/tmz/curator/event/TeaserExpiredV1';
import '@tmz/schemas/tmz/curator/event/TeaserMarkedAsDraftV1';
import '@tmz/schemas/tmz/curator/event/TeaserMarkedAsPendingV1';
import '@tmz/schemas/tmz/curator/event/TeaserPublishedV1';
import '@tmz/schemas/tmz/curator/event/TeaserScheduledV1';
import '@tmz/schemas/tmz/curator/event/TeaserUnpublishedV1';
import '@tmz/schemas/tmz/curator/event/TeaserUpdatedV1';
import '@tmz/schemas/tmz/curator/event/TimelineCreatedV1';
import '@tmz/schemas/tmz/curator/event/TimelineDeletedV1';
import '@tmz/schemas/tmz/curator/event/TimelineExpiredV1';
import '@tmz/schemas/tmz/curator/event/TimelineMarkedAsDraftV1';
import '@tmz/schemas/tmz/curator/event/TimelineMarkedAsPendingV1';
import '@tmz/schemas/tmz/curator/event/TimelinePublishedV1';
import '@tmz/schemas/tmz/curator/event/TimelineRenamedV1';
import '@tmz/schemas/tmz/curator/event/TimelineScheduledV1';
import '@tmz/schemas/tmz/curator/event/TimelineUnpublishedV1';
import '@tmz/schemas/tmz/curator/event/TimelineUpdatedV1';
import '@tmz/schemas/tmz/curator/event/WidgetCreatedV1';
import '@tmz/schemas/tmz/curator/event/WidgetDeletedV1';
import '@tmz/schemas/tmz/curator/event/WidgetUpdatedV1';
import '@tmz/schemas/tmz/dam/event/AssetCreatedV1';
import '@tmz/schemas/tmz/dam/event/AssetDeletedV1';
import '@tmz/schemas/tmz/dam/event/AssetExpiredV1';
import '@tmz/schemas/tmz/dam/event/AssetLinkedV1';
import '@tmz/schemas/tmz/dam/event/AssetPatchedV1';
import '@tmz/schemas/tmz/dam/event/AssetUnlinkedV1';
import '@tmz/schemas/tmz/dam/event/AssetUpdatedV1';
import '@tmz/schemas/tmz/dam/event/GalleryAssetReorderedV1';
import '@tmz/schemas/tmz/iam/event/AppCreatedV1';
import '@tmz/schemas/tmz/iam/event/AppDeletedV1';
import '@tmz/schemas/tmz/iam/event/AppRolesGrantedV1';
import '@tmz/schemas/tmz/iam/event/AppRolesRevokedV1';
import '@tmz/schemas/tmz/iam/event/AppUpdatedV1';
import '@tmz/schemas/tmz/iam/event/RoleCreatedV1';
import '@tmz/schemas/tmz/iam/event/RoleDeletedV1';
import '@tmz/schemas/tmz/iam/event/RoleUpdatedV1';
import '@tmz/schemas/tmz/iam/event/UserCreatedV1';
import '@tmz/schemas/tmz/iam/event/UserDeletedV1';
import '@tmz/schemas/tmz/iam/event/UserRolesGrantedV1';
import '@tmz/schemas/tmz/iam/event/UserRolesRevokedV1';
import '@tmz/schemas/tmz/iam/event/UserUpdatedV1';
import '@tmz/schemas/tmz/news/event/ArticleCreatedV1';
import '@tmz/schemas/tmz/news/event/ArticleDeletedV1';
import '@tmz/schemas/tmz/news/event/ArticleExpiredV1';
import '@tmz/schemas/tmz/news/event/ArticleLockedV1';
import '@tmz/schemas/tmz/news/event/ArticleMarkedAsDraftV1';
import '@tmz/schemas/tmz/news/event/ArticleMarkedAsPendingV1';
import '@tmz/schemas/tmz/news/event/ArticlePublishedV1';
import '@tmz/schemas/tmz/news/event/ArticleRenamedV1';
import '@tmz/schemas/tmz/news/event/ArticleScheduledV1';
import '@tmz/schemas/tmz/news/event/ArticleUnlockedV1';
import '@tmz/schemas/tmz/news/event/ArticleUnpublishedV1';
import '@tmz/schemas/tmz/news/event/ArticleUpdatedV1';
import '@tmz/schemas/tmz/notify/event/NotificationCreatedV1';
import '@tmz/schemas/tmz/notify/event/NotificationDeletedV1';
import '@tmz/schemas/tmz/notify/event/NotificationFailedV1';
import '@tmz/schemas/tmz/notify/event/NotificationSentV1';
import '@tmz/schemas/tmz/notify/event/NotificationUpdatedV1';
import '@tmz/schemas/tmz/ovp/event/VideoCreatedV1';
import '@tmz/schemas/tmz/ovp/event/VideoDeletedV1';
import '@tmz/schemas/tmz/ovp/event/VideoExpiredV1';
import '@tmz/schemas/tmz/ovp/event/VideoMarkedAsDraftV1';
import '@tmz/schemas/tmz/ovp/event/VideoMarkedAsPendingV1';
import '@tmz/schemas/tmz/ovp/event/VideoPublishedV1';
import '@tmz/schemas/tmz/ovp/event/VideoRenamedV1';
import '@tmz/schemas/tmz/ovp/event/VideoScheduledV1';
import '@tmz/schemas/tmz/ovp/event/VideoUnpublishedV1';
import '@tmz/schemas/tmz/ovp/event/VideoUpdatedV1';
import '@tmz/schemas/tmz/people/event/PersonCreatedV1';
import '@tmz/schemas/tmz/people/event/PersonDeletedV1';
import '@tmz/schemas/tmz/people/event/PersonRenamedV1';
import '@tmz/schemas/tmz/people/event/PersonUpdatedV1';
import '@tmz/schemas/tmz/sys/event/FlagsetCreatedV1';
import '@tmz/schemas/tmz/sys/event/FlagsetDeletedV1';
import '@tmz/schemas/tmz/sys/event/FlagsetUpdatedV1';
import '@tmz/schemas/tmz/sys/event/PicklistCreatedV1';
import '@tmz/schemas/tmz/sys/event/PicklistDeletedV1';
import '@tmz/schemas/tmz/sys/event/PicklistUpdatedV1';
import '@tmz/schemas/tmz/sys/event/RedirectCreatedV1';
import '@tmz/schemas/tmz/sys/event/RedirectDeletedV1';
import '@tmz/schemas/tmz/sys/event/RedirectUpdatedV1';
import '@tmz/schemas/tmz/taxonomy/event/CategoryCreatedV1';
import '@tmz/schemas/tmz/taxonomy/event/CategoryDeletedV1';
import '@tmz/schemas/tmz/taxonomy/event/CategoryRenamedV1';
import '@tmz/schemas/tmz/taxonomy/event/CategoryUpdatedV1';
import '@tmz/schemas/tmz/taxonomy/event/ChannelCreatedV1';
import '@tmz/schemas/tmz/taxonomy/event/ChannelDeletedV1';
import '@tmz/schemas/tmz/taxonomy/event/ChannelRenamedV1';
import '@tmz/schemas/tmz/taxonomy/event/ChannelUpdatedV1';

export default MessageResolver;
