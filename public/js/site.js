$(function () {
  var recommendationContainer = $('.recommendation-container');
  $.getJSON("recommendation.json", function (data) {
    renderRecommendation(data);
  });
  var renderRecommendation = function (data) {
    if (data) {
      data.recommendationsReceived.values.map(function (rec) {
        var recommendation = rec.recommendationText;
        var recommenderType = rec.recommendationType.code;
        var recommenderName = rec.recommender.firstName + ' ' + rec.recommender.lastName;
        var recommendationHtml = '<div class="recommendation-unit-container"><div class="recommendation"><h4 class="recommendationUser">' + recommenderName + ', <span>'+recommenderType + '<br></span></h4></div><blockquote><p>'+ recommendation + '</p></blockquote><br>';
      recommendationContainer.append(recommendationHtml);
      });
    }
  }
});
