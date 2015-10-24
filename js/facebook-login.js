  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
  console.log(response);
//  console.log('Token: ' + response.authResponse.accessToken);

    if (response.status === 'connected') {
      testAPI();
    } else if (response.status === 'not_authorized') {
	document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    } else {
	document.getElementById('status').innerHTML = 'Logga in med ' +
            'Facebook for att ge ett betyg.';
    }
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
      FB.init({
	  appId      : '465399856995721',
	  cookie     : true,
          
	  xfbml      : true,
	  version    : 'v2.5'
      });
      
      FB.getLoginStatus(function(response) {
	  statusChangeCallback(response);
      });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  function testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', function(response) {
	  console.log('Successful login for: ' + response.name);
	  document.getElementById('status').innerHTML =
              'Thanks for logging in, ' + response.name + '!';
      });
  }
