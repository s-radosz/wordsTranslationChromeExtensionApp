composer install
npm i
php artisan jwt:secret
php artisan cache:clear
php artisan config:clear
rm -rf ~/domains/praktyczny-angielski.pl/public_html/js/*
rm -rf ~/domains/praktyczny-angielski.pl/public_html/css/*
mv ~/domains/praktyczny-angielski.pl/wordsTranslationChromeExtensionApp/public/js/* ~/domains/praktyczny-angielski.pl/public_html/js/.
mv ~/domains/praktyczny-angielski.pl/wordsTranslationChromeExtensionApp/public/css/* ~/domains/praktyczny-angielski.pl/public_html/css/.
composer update

