composer install
npm i
php artisan jwt:secret
php artisan cache:clear
php artisan config:clear
cp -a ~/domains/praktyczny-angielski.pl/wordsTranslationChromeExtensionApp/public/js/app.js ~/domains/praktyczny-angielski.pl/public_html/js/
cp -a ~/domains/praktyczny-angielski.pl/wordsTranslationChromeExtensionApp/public/css/app.css ~/domains/praktyczny-angielski.pl/public_html/css/
composer update

