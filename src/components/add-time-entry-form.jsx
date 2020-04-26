import React from 'react'

const AddTimeEntryForm = () => {

  return (
    <form>
      <h4>add time entry</h4>
      <div>
        <label>Title</label>
        <input type = 'text'/> 
      </div>
      <div>
        <label>Title</label>
        <input type = 'number'/> 
      </div>
      <button>Add Time Entry</button>
    </form>
  )
}

export default AddTimeEntryForm