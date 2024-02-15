export default function ThankYou({ email, setShow, setEmail }) {
  function handleClick() {
    setShow((s) => !s);
    setEmail('');
  }
  return (
    <section className='thankyou_box'>
      <img src='/images/icon-success.svg' alt='icon success' />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to&nbsp;
        <br />
        <span>{email}.&nbsp;</span>
        Please open it and click the button inside to confirm your subscription
      </p>
      <button onClick={handleClick}>Dismiss message</button>
    </section>
  );
}
