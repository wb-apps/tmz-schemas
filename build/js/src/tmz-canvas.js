/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link http://schemas.tmz.com/
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@tmz/schemas/tmz/canvas/block/ArticleBlockV1';
import '@tmz/schemas/tmz/canvas/block/AudioBlockV1';
import '@tmz/schemas/tmz/canvas/block/CodeBlockV1';
import '@tmz/schemas/tmz/canvas/block/DocumentBlockV1';
import '@tmz/schemas/tmz/canvas/block/FacebookPostBlockV1';
import '@tmz/schemas/tmz/canvas/block/FacebookVideoBlockV1';
import '@tmz/schemas/tmz/canvas/block/GalleryBlockV1';
import '@tmz/schemas/tmz/canvas/block/GoogleMapBlockV1';
import '@tmz/schemas/tmz/canvas/block/HeadingBlockV1';
import '@tmz/schemas/tmz/canvas/block/IframeBlockV1';
import '@tmz/schemas/tmz/canvas/block/ImageBlockV1';
import '@tmz/schemas/tmz/canvas/block/ImgurPostBlockV1';
import '@tmz/schemas/tmz/canvas/block/InstagramMediaBlockV1';
import '@tmz/schemas/tmz/canvas/block/PageBreakBlockV1';
import '@tmz/schemas/tmz/canvas/block/PinterestBoardBlockV1';
import '@tmz/schemas/tmz/canvas/block/PinterestPinBlockV1';
import '@tmz/schemas/tmz/canvas/block/PinterestProfileBlockV1';
import '@tmz/schemas/tmz/canvas/block/PollBlockV1';
import '@tmz/schemas/tmz/canvas/block/PollGridBlockV1';
import '@tmz/schemas/tmz/canvas/block/QuoteBlockV1';
import '@tmz/schemas/tmz/canvas/block/SoundcloudAudioBlockV1';
import '@tmz/schemas/tmz/canvas/block/TextBlockV1';
import '@tmz/schemas/tmz/canvas/block/TwitterCollectionTimelineBlockV1';
import '@tmz/schemas/tmz/canvas/block/TwitterFollowButtonBlockV1';
import '@tmz/schemas/tmz/canvas/block/TwitterHashtagButtonBlockV1';
import '@tmz/schemas/tmz/canvas/block/TwitterLikesTimelineBlockV1';
import '@tmz/schemas/tmz/canvas/block/TwitterListTimelineBlockV1';
import '@tmz/schemas/tmz/canvas/block/TwitterMentionButtonBlockV1';
import '@tmz/schemas/tmz/canvas/block/TwitterMomentBlockV1';
import '@tmz/schemas/tmz/canvas/block/TwitterSearchTimelineBlockV1';
import '@tmz/schemas/tmz/canvas/block/TwitterTweetBlockV1';
import '@tmz/schemas/tmz/canvas/block/TwitterUserTimelineBlockV1';
import '@tmz/schemas/tmz/canvas/block/TwitterVideoBlockV1';
import '@tmz/schemas/tmz/canvas/block/VevoVideoBlockV1';
import '@tmz/schemas/tmz/canvas/block/VideoBlockV1';
import '@tmz/schemas/tmz/canvas/block/VimeoVideoBlockV1';
import '@tmz/schemas/tmz/canvas/block/YoutubePlaylistBlockV1';
import '@tmz/schemas/tmz/canvas/block/YoutubeVideoBlockV1';
import '@tmz/schemas/tmz/canvas/command/CreatePageV1';
import '@tmz/schemas/tmz/canvas/command/DeletePageV1';
import '@tmz/schemas/tmz/canvas/command/ExpirePageV1';
import '@tmz/schemas/tmz/canvas/command/MarkPageAsDraftV1';
import '@tmz/schemas/tmz/canvas/command/MarkPageAsPendingV1';
import '@tmz/schemas/tmz/canvas/command/PublishPageV1';
import '@tmz/schemas/tmz/canvas/command/RenamePageV1';
import '@tmz/schemas/tmz/canvas/command/UnpublishPageV1';
import '@tmz/schemas/tmz/canvas/command/UpdatePageV1';
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
import '@tmz/schemas/tmz/canvas/node/PageV1';
import '@tmz/schemas/tmz/canvas/request/GetPageHistoryRequestV1';
import '@tmz/schemas/tmz/canvas/request/GetPageHistoryResponseV1';
import '@tmz/schemas/tmz/canvas/request/GetPageRequestV1';
import '@tmz/schemas/tmz/canvas/request/GetPageResponseV1';
import '@tmz/schemas/tmz/canvas/request/SearchPagesRequestV1';
import '@tmz/schemas/tmz/canvas/request/SearchPagesResponseV1';

export default MessageResolver;
