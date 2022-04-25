#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e
[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
echo
echo
echo ---------------------------------------------------------
echo "Step 1: Delete $CONTRACT
echo ---------------------------------------------------------
echo
near delete $CONTRACT 

echo
echo ---------------------------------------------------------
echo "Step 2: Clean up project folders"
echo ---------------------------------------------------------
echo
yarn clean

exit 0
