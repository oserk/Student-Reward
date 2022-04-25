#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo
echo 
echo 'About to call start() on the contract'
echo near call \$CONTRACT start '{}' --account_id \$CONTRACT
echo
echo \$CONTRACT is $CONTRACT
echo 'Create student profile'
near call $CONTRACT createStudent '{ "name": "YourName", "yearOfbirth": yourBirthdayYear, "country": "YourCountry", "computerEquipment": "yourNeededEquipment", "pocketMoney": putNumber, "neededVote": putNumberOfNeededVote }' --accountId $CONTRACT
echo
echo 'Vote'
near call $CONTRACT timeToVote '{ "id": putStudentId }' --accountId $CONTRACT --deposit $1
