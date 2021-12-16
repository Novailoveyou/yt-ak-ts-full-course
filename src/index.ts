// const statuses = {
//   notStarted: 0,
//   inProgress: 1,
//   done: 2
// }

// console.log(statuses.inProgress)

enum Status {
  NotStarted = 'notStarted',
  InProgress = 'inProgress',
  Done = 'Done'
}

interface Task {
  id: string
  status: Status
}

let notStartedStatus: Status = Status.NotStarted

// notStartedStatus = 'foo'

console.log(Status.InProgress)
