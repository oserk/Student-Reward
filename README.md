# Student-reward
content will be added later

1- yarn

2- yarn build:release

3- near dev-deploy ./build/release/simple.wasm

4- export CONTRACT=dev-YOUR-ID

5- near call $CONTRACT START '{}' --accountId $CONTRACT

6- near call $CONTRACT createStudent '{ "name": "Oguzhan Tumantozlu", "yearOfbirth": 1997, "country": "Turkiye", "computerEquipment": "Screen", "pocketMoney": 1, "neededVote": 5 }' --accountId $CONTRACT

7- near call $CONTRACT createStudent '{ "name": "Dila Yılmaz", "yearOfbirth": 2010, "country": "England", "computerEquipment": "Mouse", "pocketMoney": 2, "neededVote": 8 }' --accountId $CONTRACT

8- near view $CONTRACT ListOfStudent '{}'

9- near call $CONTRACT timeToVote '{ "id": 0 }' --accountId $CONTRACT --deposit 1

10- near view $CONTRACT getStudentById '{ "id": 0 }'

11- near view $CONTRACT transferHistory '{}'

12- near call $CONTRACT deleteStudent '{ "id": 2 }' --accountId $CONTRACT
