# UrlParser
Javascript Url Parser

## Usage 使用方式	
HTML
```html
<script src='url-parser.js' type='text/javascript'></script>		
```

Javascript
```javascript
var url = "http://user:pwd@www.test.com:3000/path/index.aspx?a=1&b=2#hash";
var parser = UrlParser(url);	
console.log(parser.host);    
console.log(parser.querystring);
console.log(parser.scheme);
console.log(parser.params["a"]);
```

## Property 屬性
```
username => "user"
password => "pwd"
protocol => "http:"
hostname => "www.test.com"
port => "3000"
pathname => "/path/index.php"
search => "?a=1&b=2"
hash => "#hash"
host => "www.test.com:3000"
scheme => "http"
params => {"a": "1", "b": "2"}
querystring => "a=1&b=2"
site_url => "http://www.test.com"
url => "http://user:pwd@www.test.com:3000/path/index.aspx?a=1&b=2#hash"
```

## License 授權
MIT License
