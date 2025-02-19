/* eslint-disable */
// @ts-nocheck

/**
 * generated by free-swagger
 * @see https://www.npmjs.com/package/free-swagger
 * @title home-iot-api
 * @description The API for the EatBacon IOT project
 * @version 1.0.0-oas3
 * @date 2016-12-22 07:36
**/

/**
 * @typedef LightingSummary - ok
 * @property {LightingZone[]} zones
 * @property {LightingZoneStatus[]} zoneStatus
**/

/**
 * @typedef LightingZone
 * @property {string} id
 * @property {string} name
 * @property {number} deviceId
 * @property {"dimmer" | "switch"} deviceType
 * @property {string} zone
**/

/**
 * @typedef LightingZoneStatus - the status of the lighting zone.
 * @property {string} id
 * @property {string} name
 * @property {string} lastUpdate
 * @property {number} level
**/

/**
 * @typedef TemperatureSummary - ok
 * @property {TemperatureZone[]} zones
 * @property {TemperatueZoneStatus[]} zoneStatus
**/

/**
 * @typedef TemperatureZone - a single temperature zone
 * @property {number} id - the unique identifier for the zone
 * @property {string} name
 * @property {number} inputPosition
 * @property {number} outputPosition
 * @property {string} zone
**/

/**
 * @typedef TemperatueZoneStatus - status of a single zone
 * @property {string} id - the unique identifier for the zone
 * @property {string} name - the name of the zone
 * @property {number} value - the temperature in the zone
 * @property {"celsius" | "fahrenheit"} units - the temperature units
 * @property {string} timestamp - the timestamp when the temperature was measured
**/

/**
 * @typedef ApiResponse
 * @property {number} code
 * @property {string} message
**/

/**
 * @typedef HeaterState
 * @property {string} id
 * @property {string} state
**/

/**
 * @typedef DeviceState
 * @property {string} id
 * @property {string} name
 * @property {string} lastUpdate
 * @property {number} level
**/

/**
 * @typedef ForecastResponse
 * @property {City} city
 * @property {Forecast[]} values
**/

/**
 * @typedef Forecast
 * @property {string} date
 * @property {number} pressure
 * @property {number} humidity
 * @property {number} windSpeed
 * @property {number} clouds
 * @property {ForecastTemperature} temperature
 * @property {WeatherForecast} weather
**/

/**
 * @typedef City
 * @property {number} id
 * @property {string} name
 * @property {number} lat
 * @property {number} lon
 * @property {string} country
**/

/**
 * @typedef ForecastTemperature
 * @property {number} low
 * @property {number} high
 * @property {number} morning
 * @property {number} day
 * @property {number} evening
 * @property {number} night
**/

/**
 * @typedef WeatherForecast
 * @property {string} summary
 * @property {string} description
 * @property {string} icon
**/

/**
 * @typedef DeviceRegistrationInfo
 * @property {string} uri
 * @property {string} id
**/