# ![](https://user-images.githubusercontent.com/63979453/165187423-a071dc28-8577-4eaa-907a-6e61d7284cdb.png)                                             Student-Reward

https://www.loom.com/share/ffb96f63e353436ba3d327bf3ef08408

Rewarding Successful Student: Start voting for students who are successful in the "Near Developer" course. Support students as they vote and help them get the computer equipment they need.

# Usage Steps of Smart Contract

- First step
```
yarn
```
- Second step: Deploy to testnet account
```
yarn build:release

near dev-deploy ./build/release/simple.wasm

export CONTRACT=dev-YOUR-ID
```

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
