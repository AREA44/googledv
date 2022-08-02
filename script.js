$("#view-documents").click(function () {
  var url = "https://docs.google.com/viewer?url=" + $("#urlInput").val();
  window.open(url);
});