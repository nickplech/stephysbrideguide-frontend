import React, { useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const CssContainer = styled.div`
    .selector-css {
      margin-bottom: 30px;
      position: relative;
      z-index: 200;


    }
    .select__control {
      position: relative;
      z-index: 900;
      &:focus {
        border-color: ${props => props.theme.second};
        outline: none;
      }
    }
`

const packageOptions = [{value: 'full service', label: 'Full Service Planning, Styling + Coordination'}, {value: 'partial', label: 'Partial Planning + Coordination'}, {value: 'coordination', label: 'Wedding Management/Coordination'}, {value: 'TBD', label: 'I would like to discuss this in further detail.'}]

// const colourStyles = {
//   control: (styles) => ({ ...styles, backgroundColor: 'white' }),
//   option: (styles, { data, isDisabled, isFocused, isSelected }) => {

//     return {
//       ...styles,
//       backgroundColor: isDisabled
//         ? undefined
//         : isSelected
//         ? "light-grey"
//         : isFocused
//         ? "grey"
//         : undefined


//       },

//   },
//   input: (styles) => ({ ...styles }),
//   placeholder: (styles) => ({ ...styles }),
//   singleValue: (styles, { data }) => ({ ...styles }),
// };

export default function Selector ()  {

  return (
    <CssContainer>
      <Select

        className="basic-single selector-css"
        classNamePrefix="select"
        defaultValue={packageOptions[0]}
        isClearable={true}
        name="packages"
        // menuPortalTarget={document.body}
        menuPosition={"fixed"}
        // styles={colourStyles}
        options={packageOptions}
      />
      </CssContainer>
  )
}