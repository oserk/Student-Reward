# ![](https://user-images.githubusercontent.com/63979453/165187423-a071dc28-8577-4eaa-907a-6e61d7284cdb.png)                                             Student-Reward

Introductory Video Link: https://www.loom.com/share/ffb96f63e353436ba3d327bf3ef08408

Rewarding Successful Student: Start voting for students who are successful in the "Near Developer" course. Support students as they vote and help them get the computer equipment they need.

## Usage Steps of Smart Contract

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

## Access Smart Contract

```
near call $CONTRACT start '{}' --accountId $CONTRACT
```
- Create Student Profile
```
near call $CONTRACT createStudent '{ "name": "Your Name", "yearOfbirth": 1997, "country": "YourCountry", "computerEquipment": "Mouse", "pocketMoney": 1, "neededVote": 5 }' --accountId $CONTRACT
```
- Get All Student Profile
```
near view $CONTRACT ListOfStudent '{}'
```
- Vote
```
near call $CONTRACT timeToVote '{ "id": EnterStudentID }' --accountId $CONTRACT --deposit EnterPocketMoneyAmount
```
- Get Student with Specific ID
```
near view $CONTRACT getStudentById '{ "id": EnterStudentID }'
```
- Get Transfer History
```
near view $CONTRACT transferHistory '{}'
```
- Delete Student Profile with Specific ID
```
near call $CONTRACT deleteStudent '{ "id": EnterStudentID }' --accountId $CONTRACT
```
