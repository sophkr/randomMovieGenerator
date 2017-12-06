function fetchMovieDetails(){
			$.ajax({
                    url: 'https://api.themoviedb.org/3/movie/popular?api_key=aadc24f1dd4399ac50c5f4c872dff158',
                    dataType: 'jsonp',
                    success: function(data){
						var random = Math.floor(Math.random() * 20);
						var movie = new Object();
						movie  = JSON.parse(JSON.stringify(data.results[random]));
						var image = '<p><img src = "' + 'http://image.tmdb.org/t/p/w500'+movie.poster_path +'"/></p>';
						document.getElementById('movie_poster').innerHTML = image;
						var text = '<h1><b>'+ movie.original_title + '</h1></b><p>Overview: ' +  movie.overview + '</p>';
						document.getElementById('description').innerHTML = text;
                    }
                });
		}
		
            $(document).ready(function(){
            })