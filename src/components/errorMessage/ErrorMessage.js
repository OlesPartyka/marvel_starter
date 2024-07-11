import img from './error.gif';

const ErrorMessage = () => {
  return (
    <img alt='error' src={img} style={{display: 'block', height: '250px', width: '250px', objectFit: 'cover', margin: '0 auto'}}/>
  );
}

export default ErrorMessage;