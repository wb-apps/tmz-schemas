<?php
// @link http://schemas.tmz.com/json-schema/tmz/ovp/event/video-marked-as-pending/1-0-0.json#
namespace Tmz\Schemas\Ovp\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\NodeMarkedAsPending\NodeMarkedAsPendingV1 as GdbotsNcrNodeMarkedAsPendingV1;
use Gdbots\Schemas\Ncr\Mixin\NodeMarkedAsPending\NodeMarkedAsPendingV1Mixin as GdbotsNcrNodeMarkedAsPendingV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class VideoMarkedAsPendingV1 extends AbstractMessage implements
    VideoMarkedAsPending,
    GdbotsPbjxEventV1,
    GdbotsNcrNodeMarkedAsPendingV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:ovp:event:video-marked-as-pending:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                GdbotsNcrNodeMarkedAsPendingV1Mixin::create(),
            ]
        );
    }
}