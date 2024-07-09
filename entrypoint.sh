#!/bin/bash

if [[ -z "${MQ_SSL_BASE64}" ]]; then
  # No defined
  echo "No MQ_SSL_BASE64"
else
  echo -n ${MQ_SSL_BASE64} | base64 -d > /tmp/ssl.cert
  export MQ_SSL=/tmp/mq_ssl.kbd
  /opt/mqm/bin/runmqakm -keydb -create -db ${MQ_SSL}  -stash
  /opt/mqm/bin/runmqakm -cert -add -db ${MQ_SSL} -file /tmp/ssl.cert -label qmgrcert -stashed -type pkcs12 -format ascii
fi

if [[ -z "${DB_SSL_BASE64}" ]]; then
  # No defined
  echo "No DB_SSL_BASE64"
else
  export DB_SSL=/tmp/db2.cert
  echo -n ${DB_SSL_BASE64} | base64 -d > ${DB_SSL}
fi

node dist/main
