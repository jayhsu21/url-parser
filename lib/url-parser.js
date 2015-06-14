/* 
 * UrlParser
 *
 * @version 1.0.0 
 * @author jayhsu21 <jayhsu21@gmail.com> 
 * @see http://github.com/jayhsu21/url-parser
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license 
 */

/* 
 * ===== base on html anchor property =====
 * username => "user"
 * password => "pwd"
 * protocol => "http:"
 * hostname => "www.test.com"
 * port => "3000"
 * pathname => "/path/index.php"
 * search => "?a=1&b=2"
 * hash => "#hash"
 * host => "www.test.com:3000"
 *
 * ===== new property =====
 * scheme => "http"
 * params => {"a": "1", "b": "2"}
 * querystring => "a=1&b=2"
 * site_url => "http://www.test.com"
 * url => "http://user:pwd@www.test.com:3000/path/index.aspx?a=1&b=2#hash"
*/
var UrlParser = function(url) {
  var parser = document.createElement('a');
  parser.href = url;

  var obj = {}
  
  obj.username = parser.username;
  obj.password = parser.password;
  obj.protocol = parser.protocol;
  obj.hostname = parser.hostname;
  obj.port = parser.port;
  obj.pathname = parser.pathname;
  obj.search = parser.search;
  obj.hash = parser.hash;
  obj.host = parser.host;

  obj.scheme = parser.protocol.replace(":", "");
  obj.querystring = parser.search.replace("?", "");
  obj.site_url = parser.protocol + "//" + parser.host;
  obj.url = url;

  obj.params = {}  
  var querystring_ary = obj.querystring.split("&");
  for(var i = 0; i < querystring_ary.length; i++)               {
    obj.params[querystring_ary[i].split("=")[0]] = querystring_ary[i].split("=")[1];
  }        

	return obj;
}
