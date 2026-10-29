// Preview page bootstrap — only loaded by preview.html.
// Reads window.previewGame (set by the module script in preview.html),
// loads the resource + cutscene scripts, then hands off to drawSplash().

function bootstrapPreviewRoom() {
  const game = window.previewGame;

  if (!game) {
    createModal(
      "Game not found",
      "That preview link is invalid. Please return to the membership page and try again.",
      "Close"
    );
    return;
  }

  // Derive resourceTheme and resourceJS from game.path.
  // game.path = "resource/<theme>/topic/..."
  const withoutPrefix = game.path.slice("resource/".length);
  const firstSlash = withoutPrefix.indexOf("/");
  resourceTheme = withoutPrefix.slice(0, firstSlash);
  const resourceJSPath = withoutPrefix.slice(firstSlash + 1);

  // Load the resource script.
  var scriptsDiv = document.getElementById("script-resource");
  scriptsDiv.innerHTML = "";
  var scriptElement = document.createElement("script");
  scriptElement.type = "text/javascript";
  scriptElement.src = game.path + "?datetime=" + new Date().getTime();
  scriptsDiv.appendChild(scriptElement);

  scriptElement.onload = function () {
    checkResourceAssets();
  };

  function checkResourceAssets() {
    if (typeof localAssetArrays !== "undefined") {
      nextStep();
    } else {
      setTimeout(checkResourceAssets, 50);
    }
  }

  function nextStep() {
    handlePreloading("onPinInput");
    drawSplash();
  }

  // Load the cutscene script.
  var cutsceneDiv = document.getElementById("script-cutscene");
  cutsceneDiv.innerHTML = "";
  var cutsceneScript = document.createElement("script");
  cutsceneScript.type = "text/javascript";
  cutsceneScript.src = "resource/" + resourceTheme + "/cutscene/cutscene.js";
  cutsceneDiv.appendChild(cutsceneScript);
}

// Escape Room Editor (tools/room-editor) live preview. Only runs when this page
// is framed by the editor with ?editor=1: the editor posts the in-progress room
// object instead of a file path, and the page jumps straight to the map (or to
// one challenge) with answers filled in, the same as the answer-key view.
function bootstrapEditorPreview() {
  window.addEventListener("message", function (event) {
    if (event.origin !== location.origin || !event.data || event.data.type !== "room") return;

    const data = event.data;
    window.resource = data.resource;
    resourceTheme = data.theme;

    const cutsceneScript = document.createElement("script");
    cutsceneScript.src = "resource/" + resourceTheme + "/cutscene/cutscene.js";
    cutsceneScript.onload = showRoom;
    document.getElementById("script-cutscene").appendChild(cutsceneScript);

    function showRoom() {
      const challenges = resource.challengeArray || resource.activityArray;
      settings = {
        playerCount: 1,
        activityCount: challenges.length,
        timeLimit: "No limit",
        hints: "Yes",
        rewards: null
      };
      initializeSave();
      removeSplash();
      createActivityNodes("noLimit");

      const i = data.challengeIndex;
      if (resource.challengeArray && Number.isInteger(i) && resource.challengeArray[i] && resource.challengeArray[i].info.type !== "code-box") {
        activityArrayIndex = i;
        openActivityModal(i);
        drawActivityModule(i);
        drawScene(i);
        drawActivity(i);
        drawCodeInput(i);

        // Skip the intro scene to show the activity, then scroll to the questions.
        if (data.view === "activity" || data.view === "questions") {
          document.querySelector(".activity-scene-button-start").click();
        }
        if (data.view === "questions" && typeof scrollToBottom === "function") {
          setTimeout(scrollToBottom, 900);
        }
      }

      // The game sizes elements on resize and click; nothing was clicked here,
      // so trigger the same sizing pass, again as the modal animates open.
      [0, 700, 1500, 2600].forEach(function (delay) {
        setTimeout(function () { window.dispatchEvent(new Event("resize")); }, delay);
      });
      window.parent.postMessage({ type: "rendered" }, location.origin);
    }
  });

  window.addEventListener("error", function (event) {
    window.parent.postMessage({ type: "preview-error", message: event.message }, location.origin);
  });

  window.parent.postMessage({ type: "ready" }, location.origin);
}

document.addEventListener("DOMContentLoaded", function () {
  if (new URLSearchParams(location.search).get("editor") === "1" && window.parent !== window) {
    bootstrapEditorPreview();
    return;
  }
  bootstrapPreviewRoom();
});
