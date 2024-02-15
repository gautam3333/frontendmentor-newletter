import { useState } from 'react';
import Content from './components/Content';
import ImageCover from './components/ImageCover';
import ThankYou from './components/ThankYou';

export default function App() {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');

  return (
    <main>
      {show ? (
        <section className='grid_box'>
          <ImageCover />
          <Content onSetEmail={setEmail} email={email} onSetShow={setShow} />
        </section>
      ) : (
        <section>
          <ThankYou email={email} setEmail={setEmail} setShow={setShow} />
        </section>
      )}
    </main>
  );
}
