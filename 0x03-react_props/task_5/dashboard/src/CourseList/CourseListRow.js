import React from 'react'
import PropTypes from 'prop-types'

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  return (
    <tr>
      {
        isHeader
          ? <>
            {
              textSecondCell
                ? <>
                  <th>{textFirstCell}</th>
                  <th>{textSecondCell}</th>
                </>
                : <>
                  <th colSpan={2}>{textFirstCell}</th>
                </>
            }
          </>
          : (
            <>
              <td>{textFirstCell}</td>
              <td>{textSecondCell}</td>
            </>
          )
      }
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default CourseListRow