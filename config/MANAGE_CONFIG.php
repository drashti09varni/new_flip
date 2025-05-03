<?php

// dynamic parameters
define("db_host", "localhost");
define("db_user", "u824923095_new_flip");
define("db_pass", "3Tj[IpPP/B4t");
define("db_name", "u824923095_new_flip");

define("IS_DEVELOPMENT", false);
define("IS_PRODUCTION", (!IS_DEVELOPMENT));
if (IS_PRODUCTION) {
    define("API_SERVICE_URL", "https://megastorz.shop/offer/" . "/api_services/");
    define("ADMIN_PANEL_URL", "https://megastorz.shop/offer/". "/admin_panel/");
    define("ROOT_URL", "https://megastorz.shop/offer/");
    define("ALLOW_EXTERNAL_SCRIPT", "1");
    define("ALLOW_MIXPANEL_SCRIPT", "1");
} else {
    define("API_SERVICE_URL", "http://" . $_SERVER['HTTP_HOST'] . "/product/HTML/flipkart/api_services/");
    define("ADMIN_PANEL_URL", "http://" . $_SERVER['HTTP_HOST'] . "/product/HTML/flipkart/admin_panel/");
    define("ROOT_URL", "http://" . $_SERVER['HTTP_HOST'] . "/product/HTML/flipkart/");
    define("ALLOW_EXTERNAL_SCRIPT", "0");
    define("ALLOW_MIXPANEL_SCRIPT", "0");
}
// dynamic end
