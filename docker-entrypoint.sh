#!/bin/sh
set -e

# Use PORT environment variable if set, otherwise default to 8080
export PORT=${PORT:-8080}

echo "Starting nginx on port ${PORT}"

# Update nginx config with the correct port
sed -i "s/listen 8080/listen ${PORT}/g" /etc/nginx/conf.d/default.conf

# Debug: Show the updated config
echo "Nginx configuration:"
cat /etc/nginx/conf.d/default.conf

# Test nginx configuration
echo "Testing nginx configuration..."
nginx -t

# Start nginx
echo "Starting nginx..."
exec nginx -g 'daemon off;'
