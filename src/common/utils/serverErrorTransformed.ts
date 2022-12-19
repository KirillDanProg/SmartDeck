import {SerializedError} from '@reduxjs/toolkit';

export const serverErrorHandler = (error: SerializedError | string) => {
  if (typeof error === 'object') {
    return error.message
  }

  return error
}