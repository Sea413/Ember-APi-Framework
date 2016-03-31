import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {
   var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ params.zip +"trailer" +'&key=AIzaSyCcAsKzbpibRq6QFIQ5oqVzPlegI9nwMnU';
   console.log(url);
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON);
     console.log(responseJSON)
     console.log(responseJSON.items[0].id.videoId)

     var correctId = responseJSON.items[0].id.videoId;
     return correctId;
   });
  }
});
