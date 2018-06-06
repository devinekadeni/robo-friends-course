import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from '../../constants';

 import * as reducers from '../../reducers';

 
 describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  } 

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
  })

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {type: CHANGE_SEARCHFIELD, payload: 'abc'}))
    .toEqual({ searchField: 'abc' })
  })
   
 })
 
 
 describe('requestRobots', () => {
   const initialStateRobots = {
    robots: [],
    isPending: false
   }

   it('should return the initial robots', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)     
   })

   it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING, 
      payload: { isPending: true }
    }))
    .toEqual({ isPending: true, robots: [] })
  })

  it('should return the initial robots', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)     
   })

   it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS, 
      payload: [{
        id: 123,
        name: 'test',
        email: 'test"gmail.com'
      }],
      isPending: false,
    }))
    .toEqual({ isPending: false, robots: [{
      id: 123,
      name: 'test',
      email: 'test"gmail.com'
    }] })
  })

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED, 
      payload: 'error',
      isPending: false,
    }))
    .toEqual({ isPending: false, error: 'error', robots: [] })
  })
   
 })
 