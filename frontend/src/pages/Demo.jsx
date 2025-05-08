// import React, { useState, useRef, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import './Otp.css'; // Optional external styles
// import 'react-toastify/dist/ReactToastify.css';

// const Otp = ({ navigateTo }) => {
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [timer, setTimer] = useState(30);
//   const [resendDisabled, setResendDisabled] = useState(true);
//   const inputRefs = useRef([]);

//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     } else {
//       setResendDisabled(false);
//     }
//   }, [timer]);

//   const handleChange = (text, index) => {
//     const newOtp = [...otp];
//     if (text.length > 1) text = text.slice(-1);
//     newOtp[index] = text;
//     setOtp(newOtp);
//     if (text && index < otp.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleVerify = () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp === '123456') {
//       toast.success('OTP Verified!');
//       if (navigateTo) navigateTo(); // you can use react-router-dom navigation here
//     } else {
//       toast.error('Invalid OTP. Try again!');
//     }
//   };

//   const handleResend = () => {
//     setOtp(['', '', '', '', '', '']);
//     setTimer(30);
//     setResendDisabled(true);
//     toast.info('OTP Resent!');
//   };

//   return (
//     <div className="otp-container">
//       <h2 className="otp-title">Almost there</h2>
//       <p className="otp-subtitle">
//         Please enter the 6-digit code sent to your email <span className="otp-highlight">mobile number +91***789</span> for verification.
//       </p>

//       <div className="otp-input-group">
//         {otp.map((digit, index) => (
//           <input
//             key={index}
//             type="text"
//             inputMode="numeric"
//             maxLength={1}
//             value={digit}
//             onChange={(e) => handleChange(e.target.value, index)}
//             ref={(el) => (inputRefs.current[index] = el)}
//             className="otp-input"
//           />
//         ))}
//       </div>

//       <button className="verify-button" onClick={handleVerify}>
//         Verify
//       </button>

//       <p className="resend-text">
//         Didn’t receive any code?
//         <button
//           disabled={resendDisabled}
//           onClick={handleResend}
//           className={`resend-link ${resendDisabled ? 'disabled' : ''}`}
//         >
//           Resend Again
//         </button>
//       </p>

//       <div className="timer-text">
//         <span className="timer-label">Request a new code in</span>
//         <span className="timer-count">
//           {timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : ''}
//         </span>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Otp;
