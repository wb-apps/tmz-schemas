<?php
/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link http://schemas.tmz.com/
 */

\Gdbots\Pbj\MessageResolver::registerMap([
    'tmz:apollo::poll-answer' => 'Tmz\Schemas\Apollo\PollAnswerV1',
    'tmz:apollo:command:cast-vote' => 'Tmz\Schemas\Apollo\Command\CastVoteV1',
    'tmz:apollo:command:create-poll' => 'Tmz\Schemas\Apollo\Command\CreatePollV1',
    'tmz:apollo:command:delete-poll' => 'Tmz\Schemas\Apollo\Command\DeletePollV1',
    'tmz:apollo:command:expire-poll' => 'Tmz\Schemas\Apollo\Command\ExpirePollV1',
    'tmz:apollo:command:mark-poll-as-draft' => 'Tmz\Schemas\Apollo\Command\MarkPollAsDraftV1',
    'tmz:apollo:command:mark-poll-as-pending' => 'Tmz\Schemas\Apollo\Command\MarkPollAsPendingV1',
    'tmz:apollo:command:publish-poll' => 'Tmz\Schemas\Apollo\Command\PublishPollV1',
    'tmz:apollo:command:unpublish-poll' => 'Tmz\Schemas\Apollo\Command\UnpublishPollV1',
    'tmz:apollo:command:update-poll' => 'Tmz\Schemas\Apollo\Command\UpdatePollV1',
    'tmz:apollo:event:poll-created' => 'Tmz\Schemas\Apollo\Event\PollCreatedV1',
    'tmz:apollo:event:poll-deleted' => 'Tmz\Schemas\Apollo\Event\PollDeletedV1',
    'tmz:apollo:event:poll-expired' => 'Tmz\Schemas\Apollo\Event\PollExpiredV1',
    'tmz:apollo:event:poll-marked-as-draft' => 'Tmz\Schemas\Apollo\Event\PollMarkedAsDraftV1',
    'tmz:apollo:event:poll-marked-as-pending' => 'Tmz\Schemas\Apollo\Event\PollMarkedAsPendingV1',
    'tmz:apollo:event:poll-published' => 'Tmz\Schemas\Apollo\Event\PollPublishedV1',
    'tmz:apollo:event:poll-scheduled' => 'Tmz\Schemas\Apollo\Event\PollScheduledV1',
    'tmz:apollo:event:poll-unpublished' => 'Tmz\Schemas\Apollo\Event\PollUnpublishedV1',
    'tmz:apollo:event:poll-updated' => 'Tmz\Schemas\Apollo\Event\PollUpdatedV1',
    'tmz:apollo:event:vote-casted' => 'Tmz\Schemas\Apollo\Event\VoteCastedV1',
    'tmz:apollo:node:poll' => 'Tmz\Schemas\Apollo\Node\PollV1',
    'tmz:apollo:request:get-poll-history-request' => 'Tmz\Schemas\Apollo\Request\GetPollHistoryRequestV1',
    'tmz:apollo:request:get-poll-history-response' => 'Tmz\Schemas\Apollo\Request\GetPollHistoryResponseV1',
    'tmz:apollo:request:get-poll-request' => 'Tmz\Schemas\Apollo\Request\GetPollRequestV1',
    'tmz:apollo:request:get-poll-response' => 'Tmz\Schemas\Apollo\Request\GetPollResponseV1',
    'tmz:apollo:request:search-polls-request' => 'Tmz\Schemas\Apollo\Request\SearchPollsRequestV1',
    'tmz:apollo:request:search-polls-response' => 'Tmz\Schemas\Apollo\Request\SearchPollsResponseV1',
]);