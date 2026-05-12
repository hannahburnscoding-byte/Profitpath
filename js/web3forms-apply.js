(function () {
  var key = window.WEB3FORMS_ACCESS_KEY;
  if (typeof key !== "string") return;
  key = key.trim();
  if (!key) return;
  document.querySelectorAll("input.js-web3forms-key").forEach(function (input) {
    input.value = key;
  });
})();
