function runAfterLayoutAndPaint(n,t){return window.testRunner?(t&&testRunner.waitUntilDone(),void testRunner.layoutAndPaintAsyncThen(function(){n(),t&&testRunner.notifyDone()})):void setTimeout(n,500)}window.internals&&(internals.runtimeFlags.paintUnderInvalidationCheckingEnabled=!0);