#!/usr/bin/env bash
# Use this script to test if a given TCP host/port are available

set -e

host="$1"
shift
port="$1"
shift

cmd="$@"

until nc -z "$host" "$port"; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd