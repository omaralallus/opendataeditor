// Genearl

export const FORMATS = ['csv', 'xlsx']
export const HASHINGS = ['md5', 'sha256']
export const ENCODINGS = ['utf-8', 'iso-8859-1']
export const MISSING_VALUES = ['""', 'n/a', 'na', 'N/A', 'NA']
export const TRUE_VALUES = ['true', 'TRUE', 'yes', 'YES', '1']
export const FALSE_VALUES = ['false', 'FALSE', 'no', 'NO', '0']

// Defaults

export const DEFAULT_PORT = 7070
export const DEFAULT_EXPORT_FORMAT = 'yaml'
export const DEFAULT_FIELD_CONFIDENCE = 0.9
export const DEFAULT_HEADER = true
export const DEFAULT_HEADER_JOIN = ' '
export const DEFAULT_HEADER_CASE = true
export const DEFAULT_DECIMAL_CHAR = '.'
export const DEFAULT_GROUP_CHAR = ','
export const DEFAULT_BARE_NUMBER = true

// Structures
// TODO: move to components?

export const FIELDS = {
  any: {
    formats: ['default'],
    constraints: ['required', 'enum'],
  },
  array: {
    formats: ['default'],
    constraints: ['required', 'minLength', 'maxLength', 'pattern', 'enum'],
  },
  boolean: {
    formats: ['default'],
    constraints: ['required', 'enum'],
  },
  date: {
    formats: ['default', '*'],
    constraints: ['required', 'minimum', 'maximum', 'enum'],
  },
  datetime: {
    formats: ['default', '*'],
    constraints: ['required', 'minimum', 'maximum', 'enum'],
  },
  duration: {
    formats: ['default'],
    constraints: ['required', 'enum'],
  },
  geojson: {
    formats: ['default'],
    constraints: ['required', 'enum'],
  },
  geopoint: {
    formats: ['default'],
    constraints: ['required', 'enum'],
  },
  integer: {
    formats: ['default'],
    constraints: ['required', 'minimum', 'maximum', 'enum'],
  },
  number: {
    formats: ['default'],
    constraints: ['required', 'minimum', 'maximum', 'enum'],
  },
  string: {
    formats: ['default', 'email', 'uri', 'binary', 'uuid'],
    constraints: ['required', 'minLength', 'maxLength', 'pattern', 'enum'],
  },
  object: {
    formats: ['default'],
    constraints: ['required', 'minLength', 'maxLength', 'enum'],
    extraProperties: [],
  },
  time: {
    formats: ['default', '*'],
    constraints: ['required', 'minimum', 'maximum', 'enum'],
    extraProperties: [],
  },
  year: {
    formats: ['default'],
    constraints: ['required', 'minimum', 'maximum', 'enum'],
  },
  yearmonth: {
    formats: ['default'],
    constraints: ['required', 'minimum', 'maximum', 'enum'],
  },
}

export const CHECKS = [
  'duplicate-row',
  'deviated-value',
  'truncated-value',
  'forbidden-value',
  'sequential-value',
  'row-constraint',
]

export const STEPS = ['field-add', 'field-filter', 'field-remove', 'field-update']
