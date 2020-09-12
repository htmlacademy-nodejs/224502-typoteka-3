'use strict';

const DEFAULT_COMMAND = `--help`;
const USER_ARGV_INDEX = 2;
const ExitCode = {
  success: 0,
  error: 1
};
const HttpCode = {
  OK: 200,
  NO_CONTENT: 204,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports = {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode,
  HttpCode
};
