import { Coupler } from ".."
import { assert } from "../../ut/assertions"

class Logger {
  instanceofLogger = true

  log(msg: string): void {
    console.log(msg)
  }
}

class SessionStore {
  instanceofSessionStore = true

  logger: Logger

  constructor(opts: { logger: Logger }) {
    this.logger = opts.logger
  }
}

class Service {
  instanceofService = true

  logger: Logger
  sessionStore: SessionStore

  constructor(opts: { logger: Logger; sessionStore: SessionStore }) {
    this.logger = opts.logger
    this.sessionStore = opts.sessionStore
  }
}

const app = new Coupler()

app.bind(Logger, () => new Logger())

app.bind(SessionStore, (app) => {
  return new SessionStore({
    logger: app.create(Logger),
  })
})

app.singleton(Service, (app) => {
  return new Service({
    logger: app.create(Logger),
    sessionStore: app.create(SessionStore),
  })
})

app.create(Logger).log("create Logger ok")
app.create(SessionStore).logger.log("create SessionStore ok")
app.create(Service).sessionStore.logger.log("create Service ok")

assert(app.create(Logger) !== app.create(Logger))
assert(app.create(SessionStore) !== app.create(SessionStore))
assert(app.create(Service) === app.create(Service))
