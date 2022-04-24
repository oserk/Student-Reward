import { ContractPromiseBatch, context, u128, storage } from "near-sdk-as";
import { Student, students, Donation, donations } from "./model";

export function start(): void {
  Fstart();
  storage.setString("electorate", context.sender);
  storage.set("ID", 0);
}

export function createStudent(
  name: string,
  yearOfbirth: u32,
  country: string,
  computerEquipment: string,
  pocketMoney: u32,
  neededVote: u32
): Student {
  electorate();
  let id = storage.getSome<u32>("ID");
  storage.set("ID", id + 1);
  const studentq = new Student(
    id,
    name,
    yearOfbirth,
    country,
    computerEquipment,
    pocketMoney,
    neededVote
  );
  students.set(id, studentq);
  return studentq;
}

export function deleteStudent(id: u32): void {
  electorate();
  students.delete(id);
}

export function timeToVote(id: u32): void {
  let studentq = getStudentById(id);
  let pocketMoney = studentq.pocketMoney;
  let sender = context.sender;

  neededVoteCheck(studentq);
  sendPocketMoney(pocketMoney);
  voteIsOver(studentq);

  ContractPromiseBatch.create(sender).transfer(u128.from(pocketMoney));
  studentq.neededVoteCheck();
  report(sender, studentq);
}

export function getStudentById(id: u32): Student {
  return students.getSome(id);
}

export function ListOfStudent(): Student[] {
  let array = new Array<Student>();
  let length = storage.getSome<i32>("ID");
  for (let i = 0; i < length; i++) {
    if (students.contains(i)) {
      let studentq = students.getSome(i);
      array.push(studentq);
    }
  }
  return array;
}

export function transferHistory(): Donation[] {
  let array = new Array<Donation>();
  for (let i = 0; i < donations.length; i++) {
    array.push(donations[i]);
  }
  return array;
}

function voteIsOver(studentq: Student): void {
  assert(!studentq.voteOver, "Vote is over.");
}

function report(sender: string, studentq: Student): void {
  const donation = new Donation(sender, studentq);
  donations.push(donation);
}

function electorate(): void {
  assert(
    context.predecessor == storage.getString("electorate"),
    "Only electorate owner use this function!"
  );
}

function Fstart(): void {
  assert(!storage.hasKey("electorate"), "Voted before with this contract.");
}

function neededVoteCheck(studentq: Student): void {
  assert(studentq.neededVote > 0, "Vote is over.");
}

function sendPocketMoney(pocketMoney: number): void {
  assert(
    context.attachedDeposit >= u128.from(pocketMoney),
    "The amount must be greater than 0."
  );
}
