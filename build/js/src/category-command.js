/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link http://schemas.tmz.com/
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@gdbots/schemas/gdbots/ncr/command/CreateEdgeV1';
import '@gdbots/schemas/gdbots/ncr/command/DeleteEdgeV1';
import '@gdbots/schemas/gdbots/pbjx/command/CheckHealthV1';
import '@tmz/schemas/tmz/apollo/command/CastVoteV1';
import '@tmz/schemas/tmz/apollo/command/CreatePollV1';
import '@tmz/schemas/tmz/apollo/command/DeletePollV1';
import '@tmz/schemas/tmz/apollo/command/ExpirePollV1';
import '@tmz/schemas/tmz/apollo/command/MarkPollAsDraftV1';
import '@tmz/schemas/tmz/apollo/command/MarkPollAsPendingV1';
import '@tmz/schemas/tmz/apollo/command/PublishPollV1';
import '@tmz/schemas/tmz/apollo/command/UnpublishPollV1';
import '@tmz/schemas/tmz/apollo/command/UpdatePollV1';
import '@tmz/schemas/tmz/boost/command/CreateSponsorV1';
import '@tmz/schemas/tmz/boost/command/DeleteSponsorV1';
import '@tmz/schemas/tmz/boost/command/ExpireSponsorV1';
import '@tmz/schemas/tmz/boost/command/MarkSponsorAsDraftV1';
import '@tmz/schemas/tmz/boost/command/MarkSponsorAsPendingV1';
import '@tmz/schemas/tmz/boost/command/PublishSponsorV1';
import '@tmz/schemas/tmz/boost/command/RenameSponsorV1';
import '@tmz/schemas/tmz/boost/command/UnpublishSponsorV1';
import '@tmz/schemas/tmz/boost/command/UpdateSponsorV1';
import '@tmz/schemas/tmz/canvas/command/CreatePageV1';
import '@tmz/schemas/tmz/canvas/command/DeletePageV1';
import '@tmz/schemas/tmz/canvas/command/ExpirePageV1';
import '@tmz/schemas/tmz/canvas/command/MarkPageAsDraftV1';
import '@tmz/schemas/tmz/canvas/command/MarkPageAsPendingV1';
import '@tmz/schemas/tmz/canvas/command/PublishPageV1';
import '@tmz/schemas/tmz/canvas/command/RenamePageV1';
import '@tmz/schemas/tmz/canvas/command/UnpublishPageV1';
import '@tmz/schemas/tmz/canvas/command/UpdatePageV1';
import '@tmz/schemas/tmz/curator/command/CreateGalleryV1';
import '@tmz/schemas/tmz/curator/command/CreatePromotionV1';
import '@tmz/schemas/tmz/curator/command/CreateTeaserV1';
import '@tmz/schemas/tmz/curator/command/CreateTimelineV1';
import '@tmz/schemas/tmz/curator/command/CreateWidgetV1';
import '@tmz/schemas/tmz/curator/command/DeleteGalleryV1';
import '@tmz/schemas/tmz/curator/command/DeletePromotionV1';
import '@tmz/schemas/tmz/curator/command/DeleteTeaserV1';
import '@tmz/schemas/tmz/curator/command/DeleteTimelineV1';
import '@tmz/schemas/tmz/curator/command/DeleteWidgetV1';
import '@tmz/schemas/tmz/curator/command/ExpireGalleryV1';
import '@tmz/schemas/tmz/curator/command/ExpirePromotionV1';
import '@tmz/schemas/tmz/curator/command/ExpireTeaserV1';
import '@tmz/schemas/tmz/curator/command/ExpireTimelineV1';
import '@tmz/schemas/tmz/curator/command/MarkGalleryAsDraftV1';
import '@tmz/schemas/tmz/curator/command/MarkGalleryAsPendingV1';
import '@tmz/schemas/tmz/curator/command/MarkPromotionAsDraftV1';
import '@tmz/schemas/tmz/curator/command/MarkPromotionAsPendingV1';
import '@tmz/schemas/tmz/curator/command/MarkTeaserAsDraftV1';
import '@tmz/schemas/tmz/curator/command/MarkTeaserAsPendingV1';
import '@tmz/schemas/tmz/curator/command/MarkTimelineAsDraftV1';
import '@tmz/schemas/tmz/curator/command/MarkTimelineAsPendingV1';
import '@tmz/schemas/tmz/curator/command/PublishGalleryV1';
import '@tmz/schemas/tmz/curator/command/PublishPromotionV1';
import '@tmz/schemas/tmz/curator/command/PublishTeaserV1';
import '@tmz/schemas/tmz/curator/command/PublishTimelineV1';
import '@tmz/schemas/tmz/curator/command/RenameGalleryV1';
import '@tmz/schemas/tmz/curator/command/RenameTimelineV1';
import '@tmz/schemas/tmz/curator/command/SyncTeaserV1';
import '@tmz/schemas/tmz/curator/command/UnpublishGalleryV1';
import '@tmz/schemas/tmz/curator/command/UnpublishPromotionV1';
import '@tmz/schemas/tmz/curator/command/UnpublishTeaserV1';
import '@tmz/schemas/tmz/curator/command/UnpublishTimelineV1';
import '@tmz/schemas/tmz/curator/command/UpdateGalleryV1';
import '@tmz/schemas/tmz/curator/command/UpdatePromotionV1';
import '@tmz/schemas/tmz/curator/command/UpdateTeaserV1';
import '@tmz/schemas/tmz/curator/command/UpdateTimelineV1';
import '@tmz/schemas/tmz/curator/command/UpdateWidgetV1';
import '@tmz/schemas/tmz/dam/command/CreateAssetV1';
import '@tmz/schemas/tmz/dam/command/DeleteAssetV1';
import '@tmz/schemas/tmz/dam/command/ExpireAssetV1';
import '@tmz/schemas/tmz/dam/command/LinkAssetsV1';
import '@tmz/schemas/tmz/dam/command/PatchAssetsV1';
import '@tmz/schemas/tmz/dam/command/ReorderGalleryAssetsV1';
import '@tmz/schemas/tmz/dam/command/UnlinkAssetsV1';
import '@tmz/schemas/tmz/dam/command/UpdateAssetV1';
import '@tmz/schemas/tmz/iam/command/CreateAppV1';
import '@tmz/schemas/tmz/iam/command/CreateRoleV1';
import '@tmz/schemas/tmz/iam/command/CreateUserV1';
import '@tmz/schemas/tmz/iam/command/DeleteAppV1';
import '@tmz/schemas/tmz/iam/command/DeleteRoleV1';
import '@tmz/schemas/tmz/iam/command/DeleteUserV1';
import '@tmz/schemas/tmz/iam/command/GrantRolesToAppV1';
import '@tmz/schemas/tmz/iam/command/GrantRolesToUserV1';
import '@tmz/schemas/tmz/iam/command/RevokeRolesFromAppV1';
import '@tmz/schemas/tmz/iam/command/RevokeRolesFromUserV1';
import '@tmz/schemas/tmz/iam/command/UpdateAppV1';
import '@tmz/schemas/tmz/iam/command/UpdateRoleV1';
import '@tmz/schemas/tmz/iam/command/UpdateUserV1';
import '@tmz/schemas/tmz/news/command/CreateArticleV1';
import '@tmz/schemas/tmz/news/command/DeleteArticleV1';
import '@tmz/schemas/tmz/news/command/ExpireArticleV1';
import '@tmz/schemas/tmz/news/command/LockArticleV1';
import '@tmz/schemas/tmz/news/command/MarkArticleAsDraftV1';
import '@tmz/schemas/tmz/news/command/MarkArticleAsPendingV1';
import '@tmz/schemas/tmz/news/command/PublishArticleV1';
import '@tmz/schemas/tmz/news/command/RenameArticleV1';
import '@tmz/schemas/tmz/news/command/UnlockArticleV1';
import '@tmz/schemas/tmz/news/command/UnpublishArticleV1';
import '@tmz/schemas/tmz/news/command/UpdateArticleV1';
import '@tmz/schemas/tmz/notify/command/CreateNotificationV1';
import '@tmz/schemas/tmz/notify/command/DeleteNotificationV1';
import '@tmz/schemas/tmz/notify/command/SendNotificationV1';
import '@tmz/schemas/tmz/notify/command/UpdateNotificationV1';
import '@tmz/schemas/tmz/ovp/command/CreateVideoV1';
import '@tmz/schemas/tmz/ovp/command/DeleteVideoV1';
import '@tmz/schemas/tmz/ovp/command/ExpireVideoV1';
import '@tmz/schemas/tmz/ovp/command/MarkVideoAsDraftV1';
import '@tmz/schemas/tmz/ovp/command/MarkVideoAsPendingV1';
import '@tmz/schemas/tmz/ovp/command/PublishVideoV1';
import '@tmz/schemas/tmz/ovp/command/RenameVideoV1';
import '@tmz/schemas/tmz/ovp/command/UnpublishVideoV1';
import '@tmz/schemas/tmz/ovp/command/UpdateVideoV1';
import '@tmz/schemas/tmz/people/command/CreatePersonV1';
import '@tmz/schemas/tmz/people/command/DeletePersonV1';
import '@tmz/schemas/tmz/people/command/RenamePersonV1';
import '@tmz/schemas/tmz/people/command/UpdatePersonV1';
import '@tmz/schemas/tmz/sys/command/CreateFlagsetV1';
import '@tmz/schemas/tmz/sys/command/CreatePicklistV1';
import '@tmz/schemas/tmz/sys/command/CreateRedirectV1';
import '@tmz/schemas/tmz/sys/command/DeleteFlagsetV1';
import '@tmz/schemas/tmz/sys/command/DeletePicklistV1';
import '@tmz/schemas/tmz/sys/command/DeleteRedirectV1';
import '@tmz/schemas/tmz/sys/command/UpdateFlagsetV1';
import '@tmz/schemas/tmz/sys/command/UpdatePicklistV1';
import '@tmz/schemas/tmz/sys/command/UpdateRedirectV1';
import '@tmz/schemas/tmz/taxonomy/command/CreateCategoryV1';
import '@tmz/schemas/tmz/taxonomy/command/CreateChannelV1';
import '@tmz/schemas/tmz/taxonomy/command/DeleteCategoryV1';
import '@tmz/schemas/tmz/taxonomy/command/DeleteChannelV1';
import '@tmz/schemas/tmz/taxonomy/command/RenameCategoryV1';
import '@tmz/schemas/tmz/taxonomy/command/RenameChannelV1';
import '@tmz/schemas/tmz/taxonomy/command/UpdateCategoryV1';
import '@tmz/schemas/tmz/taxonomy/command/UpdateChannelV1';
import '@triniti/schemas/triniti/ovp.kaltura/command/SyncEntryV1';

export default MessageResolver;
