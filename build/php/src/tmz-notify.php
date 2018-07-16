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
    'tmz:notify:command:create-notification' => 'Tmz\Schemas\Notify\Command\CreateNotificationV1',
    'tmz:notify:command:delete-notification' => 'Tmz\Schemas\Notify\Command\DeleteNotificationV1',
    'tmz:notify:command:send-notification' => 'Tmz\Schemas\Notify\Command\SendNotificationV1',
    'tmz:notify:command:update-notification' => 'Tmz\Schemas\Notify\Command\UpdateNotificationV1',
    'tmz:notify:event:notification-created' => 'Tmz\Schemas\Notify\Event\NotificationCreatedV1',
    'tmz:notify:event:notification-deleted' => 'Tmz\Schemas\Notify\Event\NotificationDeletedV1',
    'tmz:notify:event:notification-failed' => 'Tmz\Schemas\Notify\Event\NotificationFailedV1',
    'tmz:notify:event:notification-sent' => 'Tmz\Schemas\Notify\Event\NotificationSentV1',
    'tmz:notify:event:notification-updated' => 'Tmz\Schemas\Notify\Event\NotificationUpdatedV1',
    'tmz:notify:node:alexa-notification' => 'Tmz\Schemas\Notify\Node\AlexaNotificationV1',
    'tmz:notify:node:android-notification' => 'Tmz\Schemas\Notify\Node\AndroidNotificationV1',
    'tmz:notify:node:apple-news-notification' => 'Tmz\Schemas\Notify\Node\AppleNewsNotificationV1',
    'tmz:notify:node:browser-notification' => 'Tmz\Schemas\Notify\Node\BrowserNotificationV1',
    'tmz:notify:node:email-notification' => 'Tmz\Schemas\Notify\Node\EmailNotificationV1',
    'tmz:notify:node:ios-notification' => 'Tmz\Schemas\Notify\Node\IosNotificationV1',
    'tmz:notify:node:slack-notification' => 'Tmz\Schemas\Notify\Node\SlackNotificationV1',
    'tmz:notify:node:sms-notification' => 'Tmz\Schemas\Notify\Node\SmsNotificationV1',
    'tmz:notify:request:get-notification-history-request' => 'Tmz\Schemas\Notify\Request\GetNotificationHistoryRequestV1',
    'tmz:notify:request:get-notification-history-response' => 'Tmz\Schemas\Notify\Request\GetNotificationHistoryResponseV1',
    'tmz:notify:request:get-notification-request' => 'Tmz\Schemas\Notify\Request\GetNotificationRequestV1',
    'tmz:notify:request:get-notification-response' => 'Tmz\Schemas\Notify\Request\GetNotificationResponseV1',
    'tmz:notify:request:search-notifications-request' => 'Tmz\Schemas\Notify\Request\SearchNotificationsRequestV1',
    'tmz:notify:request:search-notifications-response' => 'Tmz\Schemas\Notify\Request\SearchNotificationsResponseV1',
]);
