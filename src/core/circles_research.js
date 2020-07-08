'use strict';

const CONSTANTS = {
  CAPTURE_DATA                  : true,
  CAPTURE_TRANSFORMS            : false,
  CAPTURE_TRANSFORM_INTERVAL_MS : 500,
};

const EXP_TYPE = {
  FITTS       : 'FITTS',
  FITTS_LOOK  : 'FITTS_LOOK'
};

const EVENTS = {
  CONNECTED         : 'CONNECTED',
  EXPERIMENT_START  : 'EXPERIMENT_START',
  EXPERIMENT_STOP   : 'EXPERIMENT_STOP',
  SELECTION_START   : 'SELECTION_START',
  SELECTION_STOP    : 'SELECTION_STOP',
  SELECTION_ERROR   : 'SELECTION_ERROR',
  TRANSFORM_UPDATE  : 'TRANSFORM_UPDATE'
};

module.exports = {
  CONSTANTS,
  EXP_TYPE,
  EVENTS,
};
