import { describe, it, expect } from '@jest/globals';
import {
  formatDate,
  getCurrentDate,
  convertStringToDate,
  convertStringToDateFormat,
  convertDateToFormattedString,
  parseDateString,
} from './date';

describe('date utility functions', () => {
  it('formatDate formats the date correctly', () => {
    const date = new Date(2020, 0, 1);
    expect(formatDate(date, 'yyyy-MM-dd')).toBe('2020-01-01');
  });

  it('formatDate formats the date with default formatStr', () => {
    const date = new Date(2020, 0, 1);
    expect(formatDate(date)).toBe('2020.01.01');
  });

  it('getCurrentDate returns a date in the specified timezone', () => {
    const date = getCurrentDate();
    expect(date).toBeInstanceOf(Date);
  });

  it('parseDateString parses a valid date string correctly', () => {
    const dateString = '2022-05-30T12:00:00.000Z';
    const date = parseDateString(dateString);
    expect(date).toBeInstanceOf(Date);
    expect(date.toISOString()).toBe(dateString);
  });

  it('parseDateString throws an error for an invalid date string', () => {
    expect(() => {
      parseDateString('invalid date');
    }).toThrow('Invalid date format');
  });

  it('convertStringToDate converts a string to a Date object', () => {
    const date = convertStringToDate('2020-01-01');
    expect(date).toBeInstanceOf(Date);
    expect(date.toISOString()).toBe('2020-01-01T00:00:00.000Z');
  });

  it('convertStringToDateFormat formats the date string correctly', () => {
    const formattedDate = convertStringToDateFormat('2020-01-01', 'yyyy-MM-dd');
    expect(formattedDate).toBe('2020-01-01');
  });

  it('convertStringToDateFormat formats the Date object correctly', () => {
    const date = new Date(2020, 0, 1);
    const formattedDate = convertStringToDateFormat(date, 'yyyy-MM-dd');
    expect(formattedDate).toBe('2020-01-01');
  });

  it('convertDateToFormattedString formats the Date object correctly', () => {
    const date = new Date(2020, 0, 1);
    const formattedDate = convertDateToFormattedString(date);
    expect(formattedDate).toBe('20200101');
  });

  it('convertStringToDateFormat returns empty string for null date', () => {
    const formattedDate = convertStringToDateFormat(null);
    expect(formattedDate).toBe('');
  });

  it('convertDateToFormattedString returns empty string for null date', () => {
    const formattedDate = convertDateToFormattedString(null);
    expect(formattedDate).toBe('');
  });
});
