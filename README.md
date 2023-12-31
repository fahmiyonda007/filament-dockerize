<p align="center">
    <img src="https://user-images.githubusercontent.com/41773797/131910226-676cb28a-332d-4162-a6a8-136a93d5a70f.png" alt="Banner" style="width: 100%; max-width: 800px;" />
</p>

<p align="center">
    <a href="https://github.com/filamentphp/filament/actions"><img alt="Tests passing" src="https://img.shields.io/badge/Tests-passing-green?style=for-the-badge&logo=github"></a>
    <a href="https://laravel.com"><img alt="Laravel v8.x" src="https://img.shields.io/badge/Laravel-v8.x-FF2D20?style=for-the-badge&logo=laravel"></a>
    <a href="https://laravel-livewire.com"><img alt="Livewire v2.x" src="https://img.shields.io/badge/Livewire-v2.x-FB70A9?style=for-the-badge"></a>
    <a href="https://php.net"><img alt="PHP 8.0" src="https://img.shields.io/badge/PHP-8.0-777BB4?style=for-the-badge&logo=php"></a>
</p>

Admin panel, form builder and table builder for Laravel. Built with the TALL stack. Designed for humans.



# Project Planning Management System

A brief description of what this project does and who it's for Property Project

## Dockerize
Example:
```bash
docker-compose run --rm composer install
docker-compose run --rm npm install
docker-compose run --rm artisan migrate
docker-compose up -d --build
docker-compose run --rm laravel-migrate-seed

```

## Installation

```bash
git clone https://github.com/fahmiyonda007/ppms-filament.git
```

```bash
composer install
```

Copy file **.env.example**, rename to **.env**, setup your .env file and generate key with:

```bash
php artisan key:generate
```

```bash
php artisan migrate
```

generate policy and permission by [Filament Shield](https://filamentphp.com/plugins/shield):
```bash
php artisan shield:install --fresh
```

```bash
php artisan shield:generate --all
```

```bash
php artisan shield:super-admin
```

optional for optimize:

```bash
php artisan optimize:clear 
```

Run:
```bash
php artisan serve
```



##  [Laravel - Filament](https://filamentphp.com/)

create migration file OR Generate migration file from existing table:

```bash
php artisan migrate:generate --tables="banks"
```

Create model and setup manually your field:
```bash
php artisan make:model Bank
```

Generate resource by model:
```bash
php artisan make:filament-resource Bank --generate
```

##  DEPLOY
storage link
```
ln -s /home/u1738662/ppms/storage/app/public/ /home/u1738662/public_html/storage
```

db backup cronjob
```
mysqldump -t -uu1738662_whjproperty -pnz^.6ahN9]4^ -h127.0.0.1 -t u1738662_whjproperty | gzip > /home/u1738662/backup_database/backup_$(date +"\%Y.\%m.\%d.\%S.\%N").sql.gz
```


## Authors

- [@fahmiyonda007](https://www.github.com/fahmiyonda007)


## Features

- Light/dark mode toggle
- Fullscreen mode


## License

[MIT](https://choosealicense.com/licenses/mit/)

