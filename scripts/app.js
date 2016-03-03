

http://api.tvmaze.com/schedule?country=US&date=2014-12-01
  $.getJSON("http://api.tvmaze.com/schedule?country=US&date=2014-12-01").then(function(data){
      console.log(data);
      var showName = data[0].name;
  })
