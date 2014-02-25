google.load("feeds", "1");
    function dl_feed() {
      var feed = new google.feeds.Feed("https://news.layervault.com/?format=rss");
      feed.setNumEntries(10);
      feed.load(function(result) {
        if (!result.error) {
          $.each(result.feed.entries, function(i, entry) {
            $('#feed_dl').append(
              '<li>'+
              '<a target="_blank" href="'+ entry.link +'">'+ 
              '<div class="easydate" title="'+ entry.publishedDate +'">Doing Math</div>' +
              entry.title +
              '</a>'+
              '</li>'
              );
          });
        }
      });
      setTimeout(function() {$(".easydate").easydate();}, 1000);
    }

    function hn_feed() {
      var feed = new google.feeds.Feed("https://news.ycombinator.com/rss");
      feed.setNumEntries(10);
      feed.load(function(result) {
        if (!result.error) {
          $.each(result.feed.entries, function(i, entry) {
            var entry_content = entry.content;
            var entry_html = $(entry_content).attr('href');
            $('#feed_hn').append(
              '<li>'+
              '<a target="_blank" href="'+ entry_html +'">'+ 
              '<div class="easydate" title="'+ entry.publishedDate +'">No Date</div>' +
              entry.title +
              '</a>'+
              '</li>'
              );
          });
        }
      });
      setTimeout(function() {$(".easydate").easydate();}, 1000);
    }

    google.setOnLoadCallback(dl_feed);
    google.setOnLoadCallback(hn_feed);

localStorage.setItem('weather', '94118');
$.simpleWeather({
  zipcode: localStorage.getItem('weather'),
  woeid: '',
  location: '',
  unit: 'f',
  success: function(weather) {
    html = '<div class="weather">'+weather.temp+'&deg;'+weather.units.temp+
           '<span>'+weather.currently+'</span>'+
            weather.city+', '+weather.region+'</div>';

    $("#weather").html(html);
  },
  error: function(error) {
    $("#weather").html('<p>'+error+'</p>');
  }
});

$(document).ready(function() {
  $('.weather').on('click', function() {
    console.log('Click weather');
    // $(this).remove();
    // $("#weather").html('<input></input><button>Done</button>');
    // $('#weather button').on('click', function() {
    //   new_zip = $('#weather input').val();
    //   localStorage.setItem('weather', new_zip);
    //   return $.simpleWeather;
    // });
  });
});


