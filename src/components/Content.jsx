import EmailForm from './EmailForm';

export default function Content({ onSetEmail, email, onSetShow }) {
  return (
    <div className='content_box'>
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      <EmailForm onSetEmail={onSetEmail} email={email} onSetShow={onSetShow} />
    </div>
  );
}
