composer install
npm i
php artisan jwt:secret
php artisan cache:clear
php artisan config:clear
rm -rf ~/domains/praktyczny-angielski.pl/public_html/js/*
rm -rf ~/domains/praktyczny-angielski.pl/public_html/css/*
mv ~/domains/praktyczny-angielski.pl/wordsTranslationChromeExtensionApp/public/js/app.js ~/domains/praktyczny-angielski.pl/public_html/js/
mv ~/domains/praktyczny-angielski.pl/wordsTranslationChromeExtensionApp/public/js/app.css ~/domains/praktyczny-angielski.pl/public_html/css/


