import fetch from 'isomorphic-fetch';
// import fetchAction from '../util/fetchAction';
// import { getCookie } from '../util/common';

export const TEST_ACTION = 'TEST_ACTION';
export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';
export const GET_DOC_LIST_SUCCESS = 'GET_DOC_LIST_SUCCESS';
export const GET_DOC_SUCCESS = 'GET_DOC_SUCCESS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const SAVE_DOC_SUCCESS = 'SAVE_DOC_SUCCESS';
export const EDIT_DOC_SUCCESS = 'EDIT_DOC_SUCCESS';
export const DELETE_DOC_SUCCESS = 'DELETE_DOC_SUCCESS';

export const testAction = () => () => {
  fetch('/getName').then(res => res.json()).then(
    data => console.log(data),
    xhr => console.log(xhr),
  );
};
