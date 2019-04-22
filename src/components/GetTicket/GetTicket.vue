<template>
  <div id="eventbrite-widget-container-60666649582"></div>
</template>

<script>
    var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        // Required
        widgetType: 'checkout',
        eventId: '60666649582',
        iframeContainerId: 'eventbrite-widget-container-60666649582',

        // Optional
        iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    });
</script>
