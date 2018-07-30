/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link http://schemas.tmz.com/
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@gdbots/schemas/gdbots/ncr/request/GetNodeBatchRequestV1';
import '@gdbots/schemas/gdbots/ncr/request/GetNodeBatchResponseV1';
import '@gdbots/schemas/gdbots/pbjx/request/EchoRequestV1';
import '@gdbots/schemas/gdbots/pbjx/request/EchoResponseV1';
import '@gdbots/schemas/gdbots/pbjx/request/RequestFailedResponseV1';
import '@tmz/schemas/tmz/apollo/request/GetPollHistoryRequestV1';
import '@tmz/schemas/tmz/apollo/request/GetPollHistoryResponseV1';
import '@tmz/schemas/tmz/apollo/request/GetPollRequestV1';
import '@tmz/schemas/tmz/apollo/request/GetPollResponseV1';
import '@tmz/schemas/tmz/apollo/request/SearchPollsRequestV1';
import '@tmz/schemas/tmz/apollo/request/SearchPollsResponseV1';
import '@tmz/schemas/tmz/boost/request/GetSponsorHistoryRequestV1';
import '@tmz/schemas/tmz/boost/request/GetSponsorHistoryResponseV1';
import '@tmz/schemas/tmz/boost/request/GetSponsorRequestV1';
import '@tmz/schemas/tmz/boost/request/GetSponsorResponseV1';
import '@tmz/schemas/tmz/boost/request/SearchSponsorsRequestV1';
import '@tmz/schemas/tmz/boost/request/SearchSponsorsResponseV1';
import '@tmz/schemas/tmz/canvas/request/GetPageHistoryRequestV1';
import '@tmz/schemas/tmz/canvas/request/GetPageHistoryResponseV1';
import '@tmz/schemas/tmz/canvas/request/GetPageRequestV1';
import '@tmz/schemas/tmz/canvas/request/GetPageResponseV1';
import '@tmz/schemas/tmz/canvas/request/SearchPagesRequestV1';
import '@tmz/schemas/tmz/canvas/request/SearchPagesResponseV1';
import '@tmz/schemas/tmz/curator/request/GetGalleryHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetGalleryHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetGalleryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetGalleryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetPromotionHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetPromotionHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetPromotionRequestV1';
import '@tmz/schemas/tmz/curator/request/GetPromotionResponseV1';
import '@tmz/schemas/tmz/curator/request/GetTeaserHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetTeaserHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetTeaserRequestV1';
import '@tmz/schemas/tmz/curator/request/GetTeaserResponseV1';
import '@tmz/schemas/tmz/curator/request/GetTimelineHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetTimelineHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetTimelineRequestV1';
import '@tmz/schemas/tmz/curator/request/GetTimelineResponseV1';
import '@tmz/schemas/tmz/curator/request/GetWidgetHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetWidgetHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetWidgetRequestV1';
import '@tmz/schemas/tmz/curator/request/GetWidgetResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchGalleriesRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchGalleriesResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchPromotionsRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchPromotionsResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchTeasersRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchTeasersResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchTimelinesRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchTimelinesResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchWidgetsRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchWidgetsResponseV1';
import '@tmz/schemas/tmz/dam/request/GetAssetHistoryRequestV1';
import '@tmz/schemas/tmz/dam/request/GetAssetHistoryResponseV1';
import '@tmz/schemas/tmz/dam/request/GetAssetRequestV1';
import '@tmz/schemas/tmz/dam/request/GetAssetResponseV1';
import '@tmz/schemas/tmz/dam/request/GetUploadUrlsRequestV1';
import '@tmz/schemas/tmz/dam/request/GetUploadUrlsResponseV1';
import '@tmz/schemas/tmz/dam/request/SearchAssetsRequestV1';
import '@tmz/schemas/tmz/dam/request/SearchAssetsResponseV1';
import '@tmz/schemas/tmz/iam/request/GetAllAppsRequestV1';
import '@tmz/schemas/tmz/iam/request/GetAllAppsResponseV1';
import '@tmz/schemas/tmz/iam/request/GetAppHistoryRequestV1';
import '@tmz/schemas/tmz/iam/request/GetAppHistoryResponseV1';
import '@tmz/schemas/tmz/iam/request/GetAppRequestV1';
import '@tmz/schemas/tmz/iam/request/GetAppResponseV1';
import '@tmz/schemas/tmz/iam/request/GetRoleHistoryRequestV1';
import '@tmz/schemas/tmz/iam/request/GetRoleHistoryResponseV1';
import '@tmz/schemas/tmz/iam/request/GetRoleRequestV1';
import '@tmz/schemas/tmz/iam/request/GetRoleResponseV1';
import '@tmz/schemas/tmz/iam/request/GetUserHistoryRequestV1';
import '@tmz/schemas/tmz/iam/request/GetUserHistoryResponseV1';
import '@tmz/schemas/tmz/iam/request/GetUserRequestV1';
import '@tmz/schemas/tmz/iam/request/GetUserResponseV1';
import '@tmz/schemas/tmz/iam/request/ListAllRolesRequestV1';
import '@tmz/schemas/tmz/iam/request/ListAllRolesResponseV1';
import '@tmz/schemas/tmz/iam/request/SearchUsersRequestV1';
import '@tmz/schemas/tmz/iam/request/SearchUsersResponseV1';
import '@tmz/schemas/tmz/news/request/GetArticleHistoryRequestV1';
import '@tmz/schemas/tmz/news/request/GetArticleHistoryResponseV1';
import '@tmz/schemas/tmz/news/request/GetArticleRequestV1';
import '@tmz/schemas/tmz/news/request/GetArticleResponseV1';
import '@tmz/schemas/tmz/news/request/SearchArticlesRequestV1';
import '@tmz/schemas/tmz/news/request/SearchArticlesResponseV1';
import '@tmz/schemas/tmz/notify/request/GetNotificationHistoryRequestV1';
import '@tmz/schemas/tmz/notify/request/GetNotificationHistoryResponseV1';
import '@tmz/schemas/tmz/notify/request/GetNotificationRequestV1';
import '@tmz/schemas/tmz/notify/request/GetNotificationResponseV1';
import '@tmz/schemas/tmz/notify/request/SearchNotificationsRequestV1';
import '@tmz/schemas/tmz/notify/request/SearchNotificationsResponseV1';
import '@tmz/schemas/tmz/ovp/request/GetVideoHistoryRequestV1';
import '@tmz/schemas/tmz/ovp/request/GetVideoHistoryResponseV1';
import '@tmz/schemas/tmz/ovp/request/GetVideoRequestV1';
import '@tmz/schemas/tmz/ovp/request/GetVideoResponseV1';
import '@tmz/schemas/tmz/ovp/request/SearchVideosRequestV1';
import '@tmz/schemas/tmz/ovp/request/SearchVideosResponseV1';
import '@tmz/schemas/tmz/people/request/GetPersonHistoryRequestV1';
import '@tmz/schemas/tmz/people/request/GetPersonHistoryResponseV1';
import '@tmz/schemas/tmz/people/request/GetPersonRequestV1';
import '@tmz/schemas/tmz/people/request/GetPersonResponseV1';
import '@tmz/schemas/tmz/people/request/SearchPeopleRequestV1';
import '@tmz/schemas/tmz/people/request/SearchPeopleResponseV1';
import '@tmz/schemas/tmz/sys/request/GetFlagsetHistoryRequestV1';
import '@tmz/schemas/tmz/sys/request/GetFlagsetHistoryResponseV1';
import '@tmz/schemas/tmz/sys/request/GetFlagsetRequestV1';
import '@tmz/schemas/tmz/sys/request/GetFlagsetResponseV1';
import '@tmz/schemas/tmz/sys/request/GetPicklistHistoryRequestV1';
import '@tmz/schemas/tmz/sys/request/GetPicklistHistoryResponseV1';
import '@tmz/schemas/tmz/sys/request/GetPicklistRequestV1';
import '@tmz/schemas/tmz/sys/request/GetPicklistResponseV1';
import '@tmz/schemas/tmz/sys/request/GetRedirectHistoryRequestV1';
import '@tmz/schemas/tmz/sys/request/GetRedirectHistoryResponseV1';
import '@tmz/schemas/tmz/sys/request/GetRedirectRequestV1';
import '@tmz/schemas/tmz/sys/request/GetRedirectResponseV1';
import '@tmz/schemas/tmz/sys/request/ListAllFlagsetsRequestV1';
import '@tmz/schemas/tmz/sys/request/ListAllFlagsetsResponseV1';
import '@tmz/schemas/tmz/sys/request/ListAllPicklistsRequestV1';
import '@tmz/schemas/tmz/sys/request/ListAllPicklistsResponseV1';
import '@tmz/schemas/tmz/sys/request/SearchRedirectsRequestV1';
import '@tmz/schemas/tmz/sys/request/SearchRedirectsResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/GetAllChannelsRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/GetAllChannelsResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/GetCategoryHistoryRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/GetCategoryHistoryResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/GetCategoryRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/GetCategoryResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/GetChannelHistoryRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/GetChannelHistoryResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/GetChannelRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/GetChannelResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/SearchCategoriesRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/SearchCategoriesResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/SuggestHashtagsRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/SuggestHashtagsResponseV1';

export default MessageResolver;
