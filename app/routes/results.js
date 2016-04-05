
import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {
   var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ params.zip +"trailer" +'&key=AIzaSyCcAsKzbpibRq6QFIQ5oqVzPlegI9nwMnU';
   console.log(url);
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON.items[0].id.videoId)
    var channelArray =[];
    for(var i=0; i < 5; i++){
      console.log("hello");
     channelArray.push(responseJSON.items[i].snippet.channelId);
   }
     return channelArray;
   }).then(function(channelArray){
    //  console.log(channelArray);
    var nameArray = [];
    console.log(nameArray);
     channelArray.forEach (function (channel) {
       var channelUrl = 'https://www.googleapis.com/youtube/v3/channels?part=statistics%2Csnippet&id=' + channel + ' &key=AIzaSyCcAsKzbpibRq6QFIQ5oqVzPlegI9nwMnU'
        return Ember.$.getJSON(channelUrl).then(function(responseJSON){
        nameArray.push(responseJSON.items[0].snippet)
        nameArray.push(responseJSON.items[0].statistics)
         console.log(nameArray);
   });
 })
 return nameArray;
})
 }
});
