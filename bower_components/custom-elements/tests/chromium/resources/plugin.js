function startAfterLoadAndFinish(n,t){window.testRunner&&testRunner.waitUntilDone(),window.addEventListener("load",function(){window.internals&&internals.updateLayoutIgnorePendingStylesheetsAndRunPostLayoutTasks(t),n&&n(),testRunner.notifyDone()},!1)}