/*************************************
[rewrite_local]
^https:\/\/api\.goodnotes\.com\/accounts\/whoami\/(.*?) url script-response-body https://raw.githubusercontent.com/sprindjack/123/master/123.js

[mitm]
hostname = api.goodnotes.com

*************************************/

var sj1010 = JSON.parse($response.body);

sj1010["identity"]["metadata_public"]["entitlements"]["apple_access"] = {
            "expires_at": 7943117641000
          };
sj1010["identity"]["metadata_public"]["entitlements"]["crossplatform_access"] = {
            "expires_at": 7943117641000
          };
sj1010["identity"]["metadata_public"]["entitlements"]["premium"] = {
            "expires_at": 7943117641000
          };


$done({body : JSON.stringify(sj1010)});
