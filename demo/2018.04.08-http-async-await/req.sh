#!/bin/bash

curl http://127.0.0.1:3000?timeout=3000 >> result.txt &
curl http://127.0.0.1:3000?timeout=2000 >> result.txt &
