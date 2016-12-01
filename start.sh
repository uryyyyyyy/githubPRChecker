#!/bin/bash
read -p "Account: " account
read -sp "Password: " pass
node fetchReleaseFeatures.js $account $pass