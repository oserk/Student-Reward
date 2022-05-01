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
echo 'Parameters are filled in as an example. The user can change it according to his request.'
near call $CONTRACT createStudent '{ "name": "sampleName", "yearOfbirth": 1997, "country": "sampleCountry", "computerEquipment": "yourNeededEquipment", "pocketMoney": 2, "neededVote": 20 }' --accountId $CONTRACT
echo
echo 'Vote Student'
echo '"PocketMoney" can be sent to the student via "--deposit"'
echo 'The "id" parameter can be changed according to the student you want to vote for.'
near call $CONTRACT timeToVote '{ "id": 0 }' --accountId $CONTRACT --deposit 1
echo 'In addition, the following methods can be used.'
echo 'near view $CONTRACT ListOfStudent '{}''
echo 'near view $CONTRACT getStudentById '{ "id": EnterStudentID }''
echo 'near view $CONTRACT transferHistory '{}''
echo 'near call $CONTRACT deleteStudent '{ "id": EnterStudentID }' --accountId $CONTRACT'