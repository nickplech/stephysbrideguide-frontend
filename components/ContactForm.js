import styled, { keyframes } from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { useMutation } from "@apollo/client"
import gql from 'graphql-tag'
import Loader from './Loader'
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker, { CalendarContainer } from 'react-datepicker'
import Select from 'react-select'

const CREATE_SUBMISSION = gql`
  mutation CREATE_SUBMISSION(
    $firstName: String!
    $lastName: String!
    $fianceFirst: String!
    $mobilePhone: String!
    $email: String!
    $eventDate: DateTime
    $venue: String!
    $serviceRequested: String
    $additionalInfo: String
  ) {
    createSubmission(
      data: {
    firstName: $firstName
    lastName: $lastName
    fianceFirst: $fianceFirst
    mobilePhone: $mobilePhone
    email: $email
    venue: $venue
    eventDate: $eventDate
    serviceRequested: $serviceRequested
    additionalInfo: $additionalInfo
    }
  ) {
    id
    firstName
    lastName
    fianceFirst
    mobilePhone
    email
    venue
    eventDate
    serviceRequested
    additionalInfo
  }
  }
`
const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`
const ThankYouMessage = styled.div`
width: 100%;
position: relative;
background:  ${props => props.theme.primary};
margin: 30px auto 80px;
display: flex;
flex-flow: column;
justify-contents: center;
align-items: center;
text-align: center;
user-select: none;
h4 {
  font-family: 'Tomatoes';
  width: 60%;
  margin: 30px auto 10px;
  opacity:.6;
  line-height: 20px;
  font-size: 30px;
  color: ${props => props.theme.third};
}
p {
  font-family: 'Comfortaa';
  line-height: 14px;
  letter-spacing: 3px;
  font-size: 16px;
  }
  span {
    font-family: 'Comfortaa';
    line-height: 14px;
    letter-spacing: 3px;
    font-size: 18px;
  }
`
const Layout = styled.div`
  width: 100%;
  position: relative;
  padding: 100px 0 50px;
  margin: 0px auto 50px;
  display: flex;
  flex-flow: column;
  justify-contents: center;
  align-items: center;
  text-align: center;

.getintouch {
  font-family: 'Comfortaa';
  width: 80%;
  opacity:.6;
  letter-spacing: 3px;
  color: ${props => props.theme.third};
  margin-bottom:20px;
  text-transform: uppercase;

  @media (min-width: 0px) and (max-width: 768px) {
  display: none;
  }

}

.line {
  background: ${props => props.theme.second};
  height: 2px;
  width: 250px;
  margin-bottom: 10px;
  opacity:.3;
  @media (min-width: 0px) and (max-width: 768px) {
    display: none;
    }
}
.line2 {
  background: ${props => props.theme.second};
  height: 2px;
  width: 150px;
  margin-bottom:70px;
  opacity:.3;
  @media (min-width: 0px) and (max-width: 768px) {
    display: none;
    }
}

`
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
  width:60%;

  min-width: 500px;
  background: white;

  margin: 0px auto;
  // z-index:0;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  position: relative;
  @media (min-width: 0px) and (max-width: 768px) {
    min-width: 340px;
    width: 90%;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    }
  &:after {
    content: 'Get In Touch';
    position: absolute;
    font-family: 'Amelaryas';
    font-size: 40px;
    transform: rotate(90deg);
    top:155px;
    right: -240px;
    margin: 0 auto;
    color: ${(props) => props.theme.second};
    @media (min-width: 0px) and (max-width: 768px) {
      display: none;

       }
  }
  &:before {
    display: none;

    @media (min-width: 0px) and (max-width: 768px) {
      display: block;

    content: 'Get In Touch';
    position: relative;
    font-family: 'Amelaryas';
    font-size: 30px;
    transform: translateY(-20px);
    top: 0px;
line-height: 15px;

    color: ${(props) => props.theme.second};

       }
  }
  .side-one {
    grid-column: 1;
  }
  .side-two {
    grid-column: 2;
    @media (min-width: 0px) and (max-width: 768px) {
     grid-column: 1;
      }
  }
  .both-sides {
    grid-column: 1/3;
  }
  .error-msg {
    line-height: 10px;
    font-size: 10px;
    margin: 0;
    color: red;
    position: absolute;
    transform: translateY(-30px);
  }
  label {
    display: block;
    line-height: 18px;
    // z-index: 0;
    margin: 0 auto;
    text-align: left;
    width: 100%;
    font-family: 'Comfortaa';
    position: relative;
    letter-spacing: 3px;
    font-size: 1.3rem;
    // text-transform: uppercase;
    margin-bottom: ${props => props.errormsg && props.errormsg.type.length > 1  ? '20px' : '0px'};
    color: ${(props) => props.theme.second};
  }
  .placeholder_option {
    color: rgba(255,255,255,.5);
  }
  .getintouch-smallscreen {
    display: none;
    font-family: 'Comfortaa';

  opacity:.6;
  letter-spacing: 3px;
  color: ${props => props.theme.third};
  margin-bottom:20px;
  text-transform: uppercase;

  @media (min-width: 600px) and (max-width: 768px) {
    display: block;
    grid-column: 1;
  font-size: 11px;
  }
  @media (min-width: 0px) and (max-width: 599px) {
    display: block;
    font-size: 9px;
    grid-column: 1;
    width:100%;
    }
  }
  input,
  select {
    padding-left: 1rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    font-size: 1.5rem;
    margin-bottom: 30px;
     font-family: 'Comfortaa';
    background: transparent;
    border-radius: 3px;
    border: 2px solid ${(props) => props.theme.primary};
position: relative;

    width: 100%;
    &:focus {
      outline: 0;
      border: 2px solid ${(props) => props.theme.second};
    }
  }
  .input {
    font-family: 'Comfortaa';
    font-size: 13px;
    text-transform: capitalize;
    letter-spacing: 2px;
    height: 36px;
  }
  .opaque {
    opacity: .8;
  }
  .react-datepicker__day--selected {
    background-color: grey;
  }
.theSelector {
  grid-column: 1/3;
  margin-bottom: 30px;
  position: relative;
  z-index: 0;
}
  .button-52 {
    font-size: 16px;
    font-weight: 200;
    color: black;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 13px 20px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
&:after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: 1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
&:hover:after {
    top: 0px;
    left: 0px;
  }
}

  @media (min-width: 768px) {
    .button-52 {
      padding: 13px 50px 13px;
    }
  }
}

.button-48 {
  appearance: none;
  border-width: 0;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
   font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: .3em;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 1.5em 2.2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(.694, 0, 0.335, 1),background-color 100ms cubic-bezier(.694, 0, 0.335, 1),color 100ms cubic-bezier(.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  grid-column: 1;
  width: 120px;
  height: 40px;
  justify-self: left;
  background-color: ${props => props.theme.primary};
font-family: 'Comfortaa';
}

.button-48:before {
  animation: opacityFallbackOut .5s step-end forwards;
  backface-visibility: hidden;
  background-color: #bea8a7ff;
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(0);
  transition: clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1);
  width: 100%;
}

.button-48:hover:before {
  animation: opacityFallbackIn 0s step-start forwards;
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}

.button-48:after {
  background-color: #FFFFFF;
}

.button-48 span {
  z-index: 1;
  position: relative;
}
.submit-button {
  border-radius: 5px;
  text-align: center;
  color: black;
  grid-column: 2;
  width: 50%;
  display: flex;
justify-self: right;
transition:  0.7s;
height: 30px;
  justify-content: center;
  text-transform: uppercase;
  font-family: 'Comfortaa';
  align-items: center;
line-height: 8px;
padding: 8px 2px;
&:hover {
  cursor: pointer;
  box-shadow: 0px 4px 6px -3px rgba(20,20,20,.1);
  // transform: scale(1.1);
}
}
  textarea {
    resize: none;
    min-height: 100px;
    margin-top: 0px;
    font-family: 'Comfortaa';
    font-size: 20px;
    border-radius: 3px;
    border: 2px solid ${(props) => props.theme.primary};
    width: 100%;
    padding-left: 1rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    font-size: 1.5rem;
    position: relative;
    margin-bottom: 20px;
    background: transparent;
// z-index: 0;
    &:focus {
      outline: 0;
      border: 2px solid ${(props) => props.theme.second};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    margin-top: 1rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      margin-bottom: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        ${(props) => props.theme.second} 0%,
        ${(props) => props.theme.primary} 50%,
        ${(props) => props.theme.second} 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  .react-datepicker-popper {
    z-index: 300;
    // position: absolute;
  }
  .select__value-container {
    display: grid;
    grid-template-rows: 10px;
    grid-template-columns: 1;


  }
`

const MyContainer = ({ className, children }) => {
  return (
    <div style={{ padding: "20px", background: 'rgba(237, 222, 213, 1)', color: "#fff" }}>
      <CalendarContainer className={className}>

        <div style={{ position: "relative", fontFamily: 'Comfortaa', opacity: 1 }}>{children}</div>
      </CalendarContainer>
    </div>
  )
}

const selectStyles = {
  control: (base, state) => ({ ...base, minWidth: 240, margin: 0, border: "2px solid rgba(237, 222, 213, 1)", borderColor: state.isSelected ? "rgba(237, 222, 213, 1)" : "rgba(237, 222, 213, .8)", boxShadow: state.isFocused ? 'none' : 'none'}),
  menu: () => ({ boxShadow: " 0 1px 0 rgba(0, 0, 0, 0.1)" }),
  menuPortal: () => ({ zIndex: "1000", position: "absolute", top: "214px", left: "0px", boxShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }),
  placeholder: () => ({
    opacity: .5
  })
};

const packageOptions = [{value: 'fullService', label: 'Full Service Planning, Styling + Coordination'}, {value: 'partial', label: 'Partial Planning + Coordination'}, {value: 'coordination', label: 'Wedding Management/Coordination'}, {value: 'tbd', label: 'I Would Like to Discuss this in Further Detail'}]


function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const [createSubmission, { data, loading, error }] = useMutation(CREATE_SUBMISSION)
console.log(errors)
  const onSubmit = async (data) => {
console.log(data)
   await createSubmission({variables: { firstName: data.firstName, lastName: data.lastName, fianceFirst: data.fianceFirst,  email: data.email, venue: data.venue, eventDate: data.ReactDatepicker, mobilePhone: data.mobileNumber, serviceRequested: data.serviceRequested, additionalInfo: data.additionalInfo}})

  }
 if (loading) return <Loader/>

  return (


      <Layout>
        <div className="line" />
    <p className="getintouch">Please send inquiries with the following form <br/>I look forward to speaking with you  </p>
    <div className="line2" />

{ data && !loading && !error ? <ThankYouMessage><h4>Thank you {data.firstName &&data.firstName}</h4>   <p>Your inquiry has been sent!<br/> <br/> Please expect a response in the next <span>48</span> hours </p></ThankYouMessage> :
        <Form onSubmit={handleSubmit(onSubmit)}>
         <p className="getintouch-smallscreen">Please send any inquiries below. <br/>I look forward to speaking with you!  </p>
          <label htmlFor="firstname" className="side-one">

            <div className="opaque">First Name</div>
            {errors.firstName && <div className="error-msg">This field is required</div>}
            <input
            errormsg={errors.firstName }
              name="firstname"
              type="text"
              aria-invalid={errors.firstName ? "true" : "false"}

              {...register('firstName', { required: true, maxLength: 80 })}
            />

          </label>
          <label htmlFor="lastname" className="side-two">
          <div className="opaque">Last Name</div>
            {errors.lastName && <div className="error-msg">This field is required</div>}
            <input
            errormsg={errors.lastName }
              name="lastname"
              type="text"

              {...register('lastName', { required: true, maxLength: 100 })}
            />
          </label>
          <label htmlFor="fianceFirst" className="side-one">
          <div className="opaque">Fiance&apos;s name</div>
            {errors.fianceFirst && <div className="error-msg">This field is required</div>}
            <input
            errormsg={errors.fianceFirst }
              name="fianceFirst"
              type="text"

              {...register('fianceFirst', { required: true })}
            />
          </label>

          <label htmlFor="email" className="side-two">
          <div className="opaque">Email</div>
            {errors.email && <div className="error-msg">This field is required</div>}
            <input
            errormsg={errors.email }
              name="email"
              type="text"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </label>
          <label htmlFor="mobileNumber" className="side-one">
          <div className="opaque">Mobile Number</div>
            {errors.mobileNumber?.type === 'required' ? <div className="error-msg">This field is required</div> : ''}
            { errors.mobileNumber?.type === 'minLength' ? <div className="error-msg">Must be 10 digit number</div> : '' }
            <input
            errormsg={errors.mobileNumber }
              name="mobileNumber"
              type="tel"
              {...register('mobileNumber', {
                required: true,
                minLength: 10,
                maxLength: 16,
                pattern: ".?(\\d{3}).*(\\d{3}).*(\\d{4})",
              })}
            />
          </label>
          <label htmlFor="date" className="side-two">
          <div className="opaque">Date of Wedding</div>
            {errors.ReactDatepicker && <div className="error-msg">This field is required</div>}
          <Controller
            control={control}
            name="ReactDatepicker"
            rules={{
              required: true
            }}
            render={({ field }) => (
              <ReactDatePicker
                className="input"
                placeholderText="Select Your Date"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
                dateFormat="MMMM d, yyyy"
                calendarContainer={MyContainer}
              />
            )}
          />
          </label>
          <label className="theSelector" htmlFor="serviceRequested">
          <div className="opaque">Planning Package</div>
          {errors.serviceRequested && <div className="error-msg">This field is required</div>}
              <Controller
                name="serviceRequested"
                control={control}
                rules={{
                  required: true
                }}
                render={({field}) =>
              <Select
              inputRef={field.ref}
                className="basic-single selector-css"
                classNamePrefix="select"
                isSearchable={false}
                defaultValue={null}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 2,
                  colors: {
                    ...theme.colors,
                    primary25: 'rgba(237, 222, 213, .3)',
                    primary75: 'rgba(237, 222, 213, .3)',
                    primary50: 'rgba(237, 222, 213, .3)',
                    primary: 'rgba(237, 222, 213, 1)',
                  },
                })}
                value={packageOptions.find(c => c.value === field.value)}
                onChange={val => field.onChange(val.value)}
                placeholder=""
                styles={selectStyles}
                options={packageOptions}
              />
              }
              />
            </label>
          <label htmlFor="venue" className="both-sides">
          <div className="opaque">Venue</div>
            {errors.venue && <div className="error-msg">This field is required</div>}
            <textarea

              name="venue"
              type="text"
              placeholder="If you don't have a venue, briefly describe what you're looking for"
              {...register('venue', {
                required: true,
              })}
            />
          </label>
          <label htmlFor="additionalInfo" className="both-sides">
          <div className="opaque">Any Additional Information?</div>
            <textarea
              {...register('additionalInformation', {})}
              name="additionalInfo"
              type="text"
              placeholder="Is there anything else you'd like to share?"
            />
          </label>

          <button type="submit" className="button-48" role="button"><span className="text">Submit </span> </button>
        </Form>}
      </Layout>

  )
}
export default ContactForm
