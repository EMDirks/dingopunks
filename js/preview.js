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

document.addEventListener("DOMContentLoaded", function () {
  bootstrapPreviewRoom();
});
