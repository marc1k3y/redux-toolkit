import { useEffect } from 'react'
import './App.css'
import PostContainer from './components/PostContainer'
import PostContainer2 from './components/PostContainer2'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators'
import { userSlice } from './store/reducers/UserSlice'

function App() {
  const { count } = useAppSelector(state => state.userReducer)
  const { users, error, isLoading } = useAppSelector(state => state.userReducer)
  const { increment, decrement } = userSlice.actions
  const dispatch = useAppDispatch()

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className="App">
      <h1>{count}</h1>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <button onClick={() => dispatch(increment(5))}>incr</button>
      <button onClick={() => dispatch(decrement(5))}>decr</button>
      <hr />
      {users.map(user =>
        <div key={user.id}>{user.name}</div>)}
      <hr />
      <div style={{display: "flex"}}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  )
}

export default App
