import { PersistentUnorderedMap, PersistentVector, context } from "near-sdk-as";
import { Timestamp } from "../../utils";

export const students = new PersistentUnorderedMap<u32, Student>("s");
export const donations = new PersistentVector<Donation>("d");

@nearBindgen
export class Student {
  id: u32;
  name: string;
  yearOfBirth: u32;
  country: string;
  computerEquipment: string;
  pocketMoney: u32;
  neededVote: u32;

  constructor(
    id: u32,
    name: string,
    yearOfbirth: u32,
    country: string,
    computerEquipment: string,
    pocketMoney: u32,
    neededVote: u32
  ) {
    this.id = id;
    this.name = name;
    this.yearOfBirth = yearOfbirth;
    this.country = country;
    this.computerEquipment = computerEquipment;
    this.pocketMoney = pocketMoney;
    this.neededVote = neededVote;
  }

  neededVoteCheck(): void {
    this.neededVote -= 1;
    students.set(this.id, this);
  }
}

@nearBindgen
export class Donation {
  timestamp: Timestamp = context.blockTimestamp;
  studentq: Student;
  sender: string;

  constructor(sender: string, studentq: Student) {
    this.sender = sender;
    this.studentq = studentq;
  }
}
