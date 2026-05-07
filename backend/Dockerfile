FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    unzip git curl libzip-dev libssl-dev pkg-config && \
    pecl install mongodb && \
    docker-php-ext-enable mongodb && \
    docker-php-ext-install zip && \
    rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY . .

RUN rm -f composer.lock && \
    COMPOSER_MEMORY_LIMIT=-1 composer update \
    --no-dev \
    --no-interaction \
    --prefer-dist \
    --ignore-platform-reqs \
    --no-scripts


RUN mkdir -p storage/logs storage/framework/sessions storage/framework/views storage/framework/cache bootstrap/cache && \
    chmod -R 777 storage bootstrap/cache

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 10000

CMD ["docker-entrypoint.sh"]
