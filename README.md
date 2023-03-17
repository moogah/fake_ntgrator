# The N-T-Grator

The ntgrator is a (fake) application used by engineers at {company} to get their code deployed to production.  It is responsible for batching together dozens of changes from dozens of engineers, producing dozens of built artifacts via dozens of pipelines and then seeing these artifacts deployed to hundreds of servers in dozens of application groups. 

It is also responsible for gathering and recording quality and compliance information, and managing sophisticated cache builds.

## Getting Started

For end-user documentation, see the [docs](https://foolink.com/integrator-user-docs).  This is auto-generated via MkDocs from the /docs directory in this repository.

This application is fully containerized and can be run locally via:

``` shell
docker-compose up dev
```

This will create the following services:

- Admin Application running on port 8081
- User Application running on port 8082
- API running on port 8083
- Postgres database running on port 8084

For more details on these services and their configuration see `docker-compose.yaml` and the `docker/` directory.

## Testing

Unit tests are also containerized, run them via:

``` shell
docker-compose run tests
```

This will run both unit and integration tests, to only run one or the other, instead run:

``` shell
docker-compose run test-unit
```

``` shell
docker-compose run test-integration
```

Unit tests are all located in a `tests/` directory at the same level as the tested code.

A coverage report is generated on each test run and can be browsed in the `coverage/` directory.

## High-level Architechure

See `docs/ard` for team discussions over architechure choices and the evolution of this project.

## Monitoring 

The applications all report logs and metrics to several platforms:

- ElasticSearch for application logs
- InfluxDB for metrics
- DataDog gathers system metrics

See `docs/zen10.md` for detailed instructions on how to respond to alerts, interpret monitoring data and perform operational tasks.

## Database

This app is built on top of a relational database using Postgres, see `docs/database` for more details.
